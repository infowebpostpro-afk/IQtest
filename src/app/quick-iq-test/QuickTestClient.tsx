'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AssessmentMode, AssessmentSession, AssessmentResult } from '@/types/assessment';
import { QUICK_ASSESSMENT_QUESTIONS, QUICK_ASSESSMENT_VERSION } from '@/data/quickQuestions';
import { QuickOnboardingCard } from '@/components/quick-assessment/QuickOnboardingCard';
import { QuickActiveAssessment } from '@/components/quick-assessment/QuickActiveAssessment';
import { QuickResultsDashboard } from '@/components/quick-assessment/QuickResultsDashboard';
import {
  saveQuickAssessmentSession,
  loadQuickAssessmentSession,
  clearQuickAssessmentSession,
  saveQuickAssessmentResult,
  loadQuickAssessmentResult,
} from '@/lib/assessment/quickStorage';
import { calculateQuickAssessmentResult } from '@/lib/assessment/quickScoring';
import { AlertTriangle } from 'lucide-react';

export const QuickTestClient: React.FC = () => {
  const router = useRouter();
  const [viewState, setViewState] = useState<'onboarding' | 'active' | 'results'>('onboarding');
  const [mode, setMode] = useState<AssessmentMode>('untimed');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [hasSavedSession, setHasSavedSession] = useState<boolean>(false);
  const [savedSessionData, setSavedSessionData] = useState<AssessmentSession | null>(null);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  // Check for saved session on mount (SSR safe)
  useEffect(() => {
    const saved = loadQuickAssessmentSession(QUICK_ASSESSMENT_VERSION);
    if (saved && !saved.isCompleted) {
      setHasSavedSession(true);
      setSavedSessionData(saved);
    }
  }, []);

  // Save session to localStorage whenever state updates during active test
  useEffect(() => {
    if (viewState === 'active') {
      const session: AssessmentSession = {
        version: QUICK_ASSESSMENT_VERSION,
        mode,
        startTime,
        remainingSeconds: 0,
        lastUpdated: Date.now(),
        currentQuestionIndex: currentIndex,
        answers,
        flaggedQuestionIds: flaggedIds,
        isCompleted: false,
      };
      saveQuickAssessmentSession(session);
    }
  }, [viewState, mode, startTime, currentIndex, answers, flaggedIds]);

  const handleStartNewTest = () => {
    clearQuickAssessmentSession();
    setCurrentIndex(0);
    setAnswers({});
    setFlaggedIds([]);
    setStartTime(Date.now());
    setViewState('active');
    setHasSavedSession(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeSession = () => {
    if (savedSessionData) {
      setMode(savedSessionData.mode);
      setCurrentIndex(savedSessionData.currentQuestionIndex);
      setAnswers(savedSessionData.answers);
      setFlaggedIds(savedSessionData.flaggedQuestionIds);
      setStartTime(savedSessionData.startTime || Date.now());
      setViewState('active');
      setHasSavedSession(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDiscardSession = () => {
    clearQuickAssessmentSession();
    setHasSavedSession(false);
    setSavedSessionData(null);
  };

  const handleSelectOption = (optionId: string) => {
    const currentQId = QUICK_ASSESSMENT_QUESTIONS[currentIndex].id;
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
    const calculatedResult = calculateQuickAssessmentResult(
      QUICK_ASSESSMENT_QUESTIONS,
      answers,
      elapsedSeconds,
      mode,
      QUICK_ASSESSMENT_VERSION
    );

    setResult(calculatedResult);
    saveQuickAssessmentResult(calculatedResult);
    clearQuickAssessmentSession();
    setViewState('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    clearQuickAssessmentSession();
    setResult(null);
    setCurrentIndex(0);
    setAnswers({});
    setFlaggedIds([]);
    setViewState('onboarding');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    setViewState('onboarding');
  };

  // Dedicated full-screen zero-scroll active assessment layout
  if (viewState === 'active') {
    return (
      <div className="h-[100dvh] w-full flex flex-col overflow-hidden bg-[#F7FAFF] relative selection:bg-[#2453FF]/15 selection:text-[#2453FF]">
        <QuickActiveAssessment
          questions={QUICK_ASSESSMENT_QUESTIONS}
          currentIndex={currentIndex}
          answers={answers}
          flaggedQuestionIds={flaggedIds}
          mode={mode}
          startTime={startTime}
          onSelectOption={handleSelectOption}
          onNavigate={(newIdx) => setCurrentIndex(newIdx)}
          onToggleFlag={handleToggleFlag}
          onSubmit={handleSubmit}
          onCancelTest={() => setShowExitModal(true)}
        />

        {showExitModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#E2EAF7] p-6 sm:p-7">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-[#07152F] mb-2">
                Exit Quick Assessment?
              </h3>

              <p className="text-xs sm:text-sm text-[#60718B] mb-6 leading-relaxed">
                Your progress is saved locally in your browser. You can return anytime to resume where you left off.
              </p>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowExitModal(false)}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Continue Test
                </button>
                <button
                  type="button"
                  onClick={handleConfirmExit}
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-slate-900 rounded-xl transition-colors cursor-pointer"
                >
                  Exit Test
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Onboarding or Results state
  return (
    <div className="w-full">
      {viewState === 'onboarding' && (
        <QuickOnboardingCard
          onStart={handleStartNewTest}
          hasResumeSession={hasSavedSession}
          savedQuestionIndex={savedSessionData?.currentQuestionIndex}
          savedAnsweredCount={savedSessionData ? Object.keys(savedSessionData.answers).length : 0}
          onResume={handleResumeSession}
          onDiscardSession={handleDiscardSession}
        />
      )}

      {viewState === 'results' && result && (
        <QuickResultsDashboard
          result={result}
          questions={QUICK_ASSESSMENT_QUESTIONS}
          answers={answers}
          onRetake={handleRetake}
        />
      )}
    </div>
  );
};
