'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  BaseSpatialQuestion,
  OptionId,
  SpatialAssessmentResult,
  SpatialAssessmentSession,
} from '@/lib/spatial/types';
import { selectStandard20Questions } from '@/lib/spatial/selection';
import { calculateSpatialAssessmentResult } from '@/lib/spatial/scoring';
import {
  saveSpatialSession,
  loadSpatialSession,
  clearSpatialSession,
  saveSpatialResult,
  loadSpatialResult,
} from '@/lib/spatial/session';
import { SPATIAL_ASSESSMENT_VERSION, SPATIAL_QUESTION_BANK } from '@/lib/spatial/bank';
import { SpatialTestHero } from '@/components/spatial-assessment/SpatialTestHero';
import { SpatialActiveAssessment } from '@/components/spatial-assessment/SpatialActiveAssessment';
import { SpatialResultsDashboard } from '@/components/spatial-assessment/SpatialResultsDashboard';

export const SpatialTestClient: React.FC = () => {
  const [viewState, setViewState] = useState<'intro' | 'active' | 'results'>('intro');
  const [questions, setQuestions] = useState<BaseSpatialQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, OptionId>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [timed, setTimed] = useState<boolean>(true);
  const [timeRemaining, setTimeRemaining] = useState<number>(15 * 60); // 15 mins
  const [startTime, setStartTime] = useState<number>(0);
  const [result, setResult] = useState<SpatialAssessmentResult | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize or restore saved session
  useEffect(() => {
    const saved = loadSpatialSession(SPATIAL_ASSESSMENT_VERSION);
    if (saved && !saved.isCompleted && saved.questionIds?.length === 20) {
      // Reconstruct question objects from bank
      const restoredQuestions = saved.questionIds
        .map((qid) => SPATIAL_QUESTION_BANK.find((q) => q.id === qid))
        .filter((q): q is BaseSpatialQuestion => !!q);

      if (restoredQuestions.length === 20) {
        setQuestions(restoredQuestions);
        setAnswers(saved.answers || {});
        setFlaggedIds(saved.flaggedQuestionIds || []);
        setCurrentIndex(saved.currentQuestionIndex || 0);
        setTimed(saved.mode === 'timed_15');
        setTimeRemaining(saved.remainingSeconds > 0 ? saved.remainingSeconds : 15 * 60);
        setStartTime(saved.startTime || Date.now());
        setViewState('active');
        return;
      }
    }

    // Check if result is stored
    const savedResult = loadSpatialResult();
    if (savedResult) {
      setResult(savedResult);
    }
  }, []);

  // Timer countdown hook
  useEffect(() => {
    if (viewState === 'active' && timed) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleFinalSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [viewState, timed]);

  // Persist session on state change during active test
  useEffect(() => {
    if (viewState === 'active' && questions.length === 20) {
      const session: SpatialAssessmentSession = {
        version: SPATIAL_ASSESSMENT_VERSION,
        mode: timed ? 'timed_15' : 'untimed',
        startTime,
        remainingSeconds: timeRemaining,
        lastUpdated: Date.now(),
        currentQuestionIndex: currentIndex,
        questionIds: questions.map((q) => q.id),
        answers,
        flaggedQuestionIds: flaggedIds,
        isCompleted: false,
      };
      saveSpatialSession(session);
    }
  }, [viewState, currentIndex, answers, flaggedIds, timeRemaining, timed, startTime, questions]);

  // Start new test
  const handleStartTest = () => {
    clearSpatialSession();
    const newQuestions = selectStandard20Questions([], Date.now());
    setQuestions(newQuestions);
    setAnswers({});
    setFlaggedIds([]);
    setCurrentIndex(0);
    const start = Date.now();
    setStartTime(start);
    setTimeRemaining(15 * 60);
    setViewState('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake test with fresh questions
  const handleRetake = () => {
    clearSpatialSession();
    const currentIds = questions.map((q) => q.id);
    const freshQuestions = selectStandard20Questions(currentIds, Date.now() + 1000);
    setQuestions(freshQuestions);
    setAnswers({});
    setFlaggedIds([]);
    setCurrentIndex(0);
    setStartTime(Date.now());
    setTimeRemaining(15 * 60);
    setResult(null);
    setViewState('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAnswer = (optionId: OptionId) => {
    const currentQ = questions[currentIndex];
    if (!currentQ) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }));
  };

  const handleToggleFlag = (qId: string) => {
    setFlaggedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinalSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeSpent = Math.max(0, Math.round((Date.now() - startTime) / 1000));
    const calculated = calculateSpatialAssessmentResult(
      answers,
      questions,
      timeSpent,
      flaggedIds
    );
    setResult(calculated);
    saveSpatialResult(calculated);
    clearSpatialSession();
    setViewState('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFF]">
      {/* Site Header */}
      {viewState !== 'active' && <Header onStartClick={handleStartTest} />}

      {/* Main Content by State */}
      <div className="flex-1">
        {viewState === 'intro' && (
          <>
            <SpatialTestHero
              onStartClick={handleStartTest}
              timed={timed}
              onToggleTimer={setTimed}
            />

            {/* Clean Educational Context Section (Reserved for article content) */}
            <section className="py-12 bg-white border-t border-[#E2EAF7]">
              <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto space-y-6 text-[#475569] leading-relaxed">
                  <h2 className="text-xl sm:text-2xl font-heading font-black text-[#07152F]">
                    About the Spatial Reasoning Practice Assessment
                  </h2>
                  <p>
                    Spatial reasoning involves mentally manipulating, reorienting, and evaluating
                    two- and three-dimensional shapes. It is widely assessed in engineering,
                    aviation, STEM recruitment, and standardized aptitude testing.
                  </p>
                  <p>
                    This practice assessment features 20 original questions across six core domains:
                    mental rotation, cube folding and nets, mirror reflections, paper folding,
                    spatial orientation and views, and 3D block counting.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {viewState === 'active' && (
          <SpatialActiveAssessment
            questions={questions}
            currentIndex={currentIndex}
            answers={answers}
            flaggedIds={flaggedIds}
            timed={timed}
            timeRemaining={timeRemaining}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNext}
            onPrev={handlePrev}
            onGoToIndex={(idx) => setCurrentIndex(idx)}
            onToggleFlag={handleToggleFlag}
            onSubmit={handleFinalSubmit}
          />
        )}

        {viewState === 'results' && result && (
          <SpatialResultsDashboard
            result={result}
            questions={questions}
            onRetake={handleRetake}
          />
        )}
      </div>

      {/* Site Footer */}
      {viewState !== 'active' && <Footer />}
    </div>
  );
};

