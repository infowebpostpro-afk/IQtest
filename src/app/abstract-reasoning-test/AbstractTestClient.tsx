'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AssessmentMode, AssessmentSession } from '@/types/assessment';
import {
  ABSTRACT_ASSESSMENT_QUESTIONS,
  ABSTRACT_ASSESSMENT_VERSION,
} from '@/data/abstractQuestions';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AbstractHeroSection } from '@/components/abstract-assessment/AbstractHeroSection';
import { AbstractComprehensiveArticle } from '@/components/abstract-assessment/AbstractComprehensiveArticle';
import { AbstractActiveAssessment } from '@/components/abstract-assessment/AbstractActiveAssessment';
import { AbstractLearnMode } from '@/components/abstract-assessment/AbstractLearnMode';
import { AbstractResultsDashboard } from '@/components/abstract-assessment/AbstractResultsDashboard';
import {
  saveAbstractAssessmentSession,
  loadAbstractAssessmentSession,
  clearAbstractAssessmentSession,
  saveAbstractAssessmentResult,
  loadAbstractAssessmentResult,
} from '@/lib/assessment/abstractStorage';
import {
  calculateAbstractAssessmentResult,
  AbstractAssessmentResult,
} from '@/lib/assessment/abstractScoring';
import { AlertTriangle, Play, RotateCcw, Trash2 } from 'lucide-react';

export const AbstractTestClient: React.FC = () => {
  const router = useRouter();
  const [viewState, setViewState] = useState<'onboarding' | 'active_test' | 'active_learn' | 'results'>('onboarding');
  const [mode, setMode] = useState<AssessmentMode>('untimed');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [hasSavedSession, setHasSavedSession] = useState<boolean>(false);
  const [savedSessionData, setSavedSessionData] = useState<AssessmentSession | null>(null);
  const [result, setResult] = useState<AbstractAssessmentResult | null>(null);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  // Check for saved session and URL mode parameters on mount (SSR safe)
  useEffect(() => {
    const saved = loadAbstractAssessmentSession(ABSTRACT_ASSESSMENT_VERSION);
    if (saved && !saved.isCompleted) {
      setHasSavedSession(true);
      setSavedSessionData(saved);
    }

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlMode = params.get('mode');
      if (urlMode === 'test') {
        const timerParam = params.get('timer');
        setMode(timerParam === '15' ? 'timed_15' : 'untimed');
        setStartTime(Date.now());
        setViewState('active_test');
      } else if (urlMode === 'learn') {
        setViewState('active_learn');
      }
    }
  }, []);

  // Save session to localStorage whenever answers or index update during active test
  useEffect(() => {
    if (viewState === 'active_test') {
      const session: AssessmentSession = {
        version: ABSTRACT_ASSESSMENT_VERSION,
        mode,
        startTime,
        remainingSeconds: 0,
        lastUpdated: Date.now(),
        currentQuestionIndex: currentIndex,
        answers,
        flaggedQuestionIds: flaggedIds,
        isCompleted: false,
      };
      saveAbstractAssessmentSession(session);
    }
  }, [viewState, mode, startTime, currentIndex, answers, flaggedIds]);

  const handleStartTest = (chosenMode: AssessmentMode = 'untimed') => {
    clearAbstractAssessmentSession();
    setMode(chosenMode);
    setCurrentIndex(0);
    setAnswers({});
    setFlaggedIds([]);
    setStartTime(Date.now());
    setViewState('active_test');
    setHasSavedSession(false);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('mode', 'test');
      if (chosenMode === 'timed_15') {
        url.searchParams.set('timer', '15');
      } else {
        url.searchParams.delete('timer');
      }
      window.history.replaceState({}, '', url.toString());
    } catch {
      // safe fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartLearn = () => {
    setViewState('active_learn');
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('mode', 'learn');
      url.searchParams.delete('timer');
      window.history.replaceState({}, '', url.toString());
    } catch {
      // safe fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeSession = () => {
    if (savedSessionData) {
      setMode(savedSessionData.mode);
      setCurrentIndex(savedSessionData.currentQuestionIndex);
      setAnswers(savedSessionData.answers);
      setFlaggedIds(savedSessionData.flaggedQuestionIds);
      setStartTime(savedSessionData.startTime || Date.now());
      setViewState('active_test');
      setHasSavedSession(false);
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('mode', 'test');
        window.history.replaceState({}, '', url.toString());
      } catch {
        // safe fallback
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDiscardSession = () => {
    clearAbstractAssessmentSession();
    setHasSavedSession(false);
    setSavedSessionData(null);
  };

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [ABSTRACT_ASSESSMENT_QUESTIONS[currentIndex].id]: optionId,
    }));
  };

  const handleClearOption = (questionId: string) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedIds((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleSubmit = () => {
    const elapsedSeconds = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    handleSubmitAssessment(answers, elapsedSeconds);
  };

  const handleSubmitAssessment = (
    finalAnswers: Record<string, string>,
    timeSpentSeconds: number
  ) => {
    const computed = calculateAbstractAssessmentResult(
      ABSTRACT_ASSESSMENT_QUESTIONS,
      finalAnswers,
      timeSpentSeconds,
      mode,
      ABSTRACT_ASSESSMENT_VERSION
    );

    clearAbstractAssessmentSession();
    saveAbstractAssessmentResult(computed);
    setResult(computed);
    setAnswers(finalAnswers);
    setViewState('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitRequest = () => {
    setShowExitModal(true);
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    setViewState('onboarding');
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('mode');
      url.searchParams.delete('timer');
      window.history.replaceState({}, '', url.toString());
    } catch {
      // safe fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      {/* ONBOARDING STATE */}
      {viewState === 'onboarding' && (
        <>
          <Header />
          <main className="flex-1">
            {/* Resume Session Banner */}
            {hasSavedSession && savedSessionData && (
              <div className="bg-indigo-900 text-white px-4 py-3.5 border-b border-indigo-800">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-semibold">
                      In-Progress Test Detected: Question {savedSessionData.currentQuestionIndex + 1} of 20 (
                      {Object.keys(savedSessionData.answers).length} answered)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleResumeSession}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Resume Test</span>
                    </button>
                    <button
                      onClick={handleDiscardSession}
                      className="px-3 py-1.5 rounded-lg bg-indigo-800/80 hover:bg-indigo-700 text-indigo-200 text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Discard</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Interactive Hero Section */}
            <AbstractHeroSection
              onStartTest={handleStartTest}
              onStartLearn={handleStartLearn}
              hasResumeSession={hasSavedSession}
              savedQuestionIndex={savedSessionData?.currentQuestionIndex ?? 0}
              savedAnsweredCount={Object.keys(savedSessionData?.answers ?? {}).length}
              onResume={handleResumeSession}
              onDiscardSession={handleDiscardSession}
            />

            {/* Publication / Comprehensive Educational Article Section */}
            <AbstractComprehensiveArticle
              onStartClick={() => handleStartTest('untimed')}
            />
          </main>
          <Footer />
        </>
      )}

      {/* ACTIVE TEST STATE */}
      {viewState === 'active_test' && (
        <AbstractActiveAssessment
          questions={ABSTRACT_ASSESSMENT_QUESTIONS}
          currentIndex={currentIndex}
          answers={answers}
          flaggedQuestionIds={flaggedIds}
          mode={mode}
          startTime={startTime}
          onSelectOption={handleSelectOption}
          onClearOption={handleClearOption}
          onNavigate={(newIdx) => setCurrentIndex(newIdx)}
          onToggleFlag={handleToggleFlag}
          onSubmit={handleSubmit}
          onCancelTest={handleExitRequest}
        />
      )}

      {/* LEARN MODE STATE */}
      {viewState === 'active_learn' && (
        <AbstractLearnMode
          questions={ABSTRACT_ASSESSMENT_QUESTIONS}
          onExit={() => {
            setViewState('onboarding');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSwitchToTestMode={() => handleStartTest('untimed')}
        />
      )}

      {/* RESULTS STATE */}
      {viewState === 'results' && result && (
        <>
          <Header />
          <main className="flex-1">
            <AbstractResultsDashboard
              result={result}
              questions={ABSTRACT_ASSESSMENT_QUESTIONS}
              answers={answers}
              flaggedQuestionIds={flaggedIds}
              onRetake={() => handleStartTest(mode)}
              onSwitchToLearnMode={handleStartLearn}
            />
          </main>
          <Footer />
        </>
      )}

      {/* Exit In-Progress Confirmation Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 text-center animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 mx-auto flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Exit Assessment?</h3>
            <p className="text-xs text-slate-600 mb-6">
              Your test progress is saved in this browser. You can resume at any time from the assessment home page.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Continue Test
              </button>
              <button
                onClick={handleConfirmExit}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
              >
                Exit to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
