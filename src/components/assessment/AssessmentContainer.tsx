'use client';

import React, { useState, useEffect } from 'react';
import { AssessmentMode, AssessmentSession, AssessmentResult } from '@/types/assessment';
import { ASSESSMENT_QUESTIONS, ASSESSMENT_VERSION } from '@/data/questions';
import { OnboardingCard } from './OnboardingCard';
import { ActiveAssessment } from './ActiveAssessment';
import { ResultsDashboard } from '../results/ResultsDashboard';
import {
  saveAssessmentSession,
  loadAssessmentSession,
  clearAssessmentSession,
  saveAssessmentResult,
  loadAssessmentResult,
} from '@/lib/assessment/storage';
import { calculateAssessmentResult } from '@/lib/assessment/scoring';

export const AssessmentContainer: React.FC = () => {
  const [viewState, setViewState] = useState<'onboarding' | 'active' | 'results'>('onboarding');
  const [mode, setMode] = useState<AssessmentMode>('untimed');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [hasSavedSession, setHasSavedSession] = useState<boolean>(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  // Check for saved session or existing result on mount
  useEffect(() => {
    const saved = loadAssessmentSession(ASSESSMENT_VERSION);
    if (saved && !saved.isCompleted) {
      setHasSavedSession(true);
    }
  }, []);

  // Save session whenever test state updates while active
  useEffect(() => {
    if (viewState === 'active') {
      const session: AssessmentSession = {
        version: ASSESSMENT_VERSION,
        mode,
        startTime,
        remainingSeconds: mode === 'timed_15' ? 15 * 60 : 0,
        lastUpdated: Date.now(),
        currentQuestionIndex: currentIndex,
        answers,
        flaggedQuestionIds: flaggedIds,
        isCompleted: false,
      };
      saveAssessmentSession(session);
    }
  }, [viewState, mode, startTime, currentIndex, answers, flaggedIds]);

  const handleStartNewTest = () => {
    clearAssessmentSession();
    setCurrentIndex(0);
    setAnswers({});
    setFlaggedIds([]);
    const now = Date.now();
    setStartTime(now);
    setViewState('active');
    setHasSavedSession(false);

    // Smooth scroll into test view
    const element = document.getElementById('assessment-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResumeSession = () => {
    const saved = loadAssessmentSession(ASSESSMENT_VERSION);
    if (saved) {
      setMode(saved.mode);
      setCurrentIndex(saved.currentQuestionIndex);
      setAnswers(saved.answers);
      setFlaggedIds(saved.flaggedQuestionIds);
      setStartTime(saved.startTime || Date.now());
      setViewState('active');
      setHasSavedSession(false);
    }
  };

  const handleDiscardSession = () => {
    clearAssessmentSession();
    setHasSavedSession(false);
  };

  const handleSelectOption = (optionId: string) => {
    const currentQId = ASSESSMENT_QUESTIONS[currentIndex].id;
    setAnswers((prev) => ({
      ...prev,
      [currentQId]: optionId,
    }));
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedIds((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleSubmit = () => {
    const elapsedSeconds = Math.max(1, Math.floor((Date.now() - startTime) / 1000));
    const calculatedResult = calculateAssessmentResult(
      ASSESSMENT_QUESTIONS,
      answers,
      elapsedSeconds,
      mode,
      ASSESSMENT_VERSION
    );

    setResult(calculatedResult);
    saveAssessmentResult(calculatedResult);
    clearAssessmentSession();
    setViewState('results');

    // Scroll to results top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    clearAssessmentSession();
    setResult(null);
    setCurrentIndex(0);
    setAnswers({});
    setFlaggedIds([]);
    setViewState('onboarding');
  };

  return (
    <div id="assessment-container" className="w-full">
      {viewState === 'onboarding' && (
        <OnboardingCard
          mode={mode}
          onModeChange={setMode}
          onStart={handleStartNewTest}
          hasResumeSession={hasSavedSession}
          onResume={handleResumeSession}
          onDiscardSession={handleDiscardSession}
        />
      )}

      {viewState === 'active' && (
        <ActiveAssessment
          questions={ASSESSMENT_QUESTIONS}
          currentIndex={currentIndex}
          answers={answers}
          flaggedQuestionIds={flaggedIds}
          mode={mode}
          startTime={startTime}
          onSelectOption={handleSelectOption}
          onNavigate={(newIdx) => setCurrentIndex(newIdx)}
          onToggleFlag={handleToggleFlag}
          onSubmit={handleSubmit}
          onCancelTest={handleRetake}
        />
      )}

      {viewState === 'results' && result && (
        <ResultsDashboard
          result={result}
          questions={ASSESSMENT_QUESTIONS}
          answers={answers}
          onRetake={handleRetake}
        />
      )}
    </div>
  );
};
