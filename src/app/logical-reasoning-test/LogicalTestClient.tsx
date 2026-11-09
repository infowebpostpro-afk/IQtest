'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AssessmentMode, AssessmentSession } from '@/types/assessment';
import {
  LOGICAL_ASSESSMENT_QUESTIONS,
  LOGICAL_ASSESSMENT_VERSION,
} from '@/data/logicalQuestions';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LogicalHeroSection } from '@/components/logical-assessment/LogicalHeroSection';
import { LogicalComprehensiveArticle } from '@/components/logical-assessment/LogicalComprehensiveArticle';
import { LogicalActiveAssessment } from '@/components/logical-assessment/LogicalActiveAssessment';
import { LogicalLearnMode } from '@/components/logical-assessment/LogicalLearnMode';
import { LogicalResultsDashboard } from '@/components/logical-assessment/LogicalResultsDashboard';
import {
  saveLogicalAssessmentSession,
  loadLogicalAssessmentSession,
  clearLogicalAssessmentSession,
  saveLogicalAssessmentResult,
  loadLogicalAssessmentResult,
} from '@/lib/assessment/logicalStorage';
import {
  calculateLogicalAssessmentResult,
  LogicalAssessmentResult,
} from '@/lib/assessment/logicalScoring';
import { AlertTriangle } from 'lucide-react';

export const LogicalTestClient: React.FC = () => {
  const router = useRouter();
  const [viewState, setViewState] = useState<'onboarding' | 'active_test' | 'active_learn' | 'results'>('onboarding');
  const [mode, setMode] = useState<AssessmentMode>('untimed');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [hasSavedSession, setHasSavedSession] = useState<boolean>(false);
  const [savedSessionData, setSavedSessionData] = useState<AssessmentSession | null>(null);
  const [result, setResult] = useState<LogicalAssessmentResult | null>(null);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  // Check for saved session on mount (SSR safe)
  useEffect(() => {
    const saved = loadLogicalAssessmentSession(LOGICAL_ASSESSMENT_VERSION);
    if (saved && !saved.isCompleted) {
      setHasSavedSession(true);
      setSavedSessionData(saved);
    }
  }, []);

  // Save session to localStorage whenever state updates during active test
  useEffect(() => {
    if (viewState === 'active_test') {
      const session: AssessmentSession = {
        version: LOGICAL_ASSESSMENT_VERSION,
        mode,
        startTime,
        remainingSeconds: 0,
        lastUpdated: Date.now(),
        currentQuestionIndex: currentIndex,
        answers,
        flaggedQuestionIds: flaggedIds,
        isCompleted: false,
      };
      saveLogicalAssessmentSession(session);
    }
  }, [viewState, mode, startTime, currentIndex, answers, flaggedIds]);

  const handleStartTest = (chosenMode: AssessmentMode = 'untimed') => {
    clearLogicalAssessmentSession();
    setMode(chosenMode);
    setCurrentIndex(0);
    setAnswers({});
    setFlaggedIds([]);
    setStartTime(Date.now());
    setViewState('active_test');
    setHasSavedSession(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartLearn = () => {
    setViewState('active_learn');
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDiscardSession = () => {
    clearLogicalAssessmentSession();
    setHasSavedSession(false);
    setSavedSessionData(null);
  };

  const handleSelectOption = (optionId: string) => {
    const currentQId = LOGICAL_ASSESSMENT_QUESTIONS[currentIndex].id;
    setAnswers((prev) => ({
      ...prev,
      [currentQId]: optionId,
    }));
  };

  const handleClearOption = (questionId: string) => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
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
    const elapsedSeconds = Math.max(1, Math.floor((Date.now() - startTime) / 1000));
    const calculatedResult = calculateLogicalAssessmentResult(
      LOGICAL_ASSESSMENT_QUESTIONS,
      answers,
      elapsedSeconds,
      mode,
      LOGICAL_ASSESSMENT_VERSION
    );

    setResult(calculatedResult);
    saveLogicalAssessmentResult(calculatedResult);
    clearLogicalAssessmentSession();
    setViewState('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    clearLogicalAssessmentSession();
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated Learn Mode Layout
  if (viewState === 'active_learn') {
    return (
      <div className="flex flex-col min-h-screen bg-[#F7FAFF] text-[#07152F] relative selection:bg-emerald-500/20 selection:text-emerald-900">
        <Header />
        <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6">
          <LogicalLearnMode
            questions={LOGICAL_ASSESSMENT_QUESTIONS}
            onExit={() => {
              setViewState('onboarding');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSwitchToTestMode={() => handleStartTest('untimed')}
          />
        </main>
        <Footer />
      </div>
    );
  }

  // Dedicated Test Mode Active Assessment Layout
  if (viewState === 'active_test') {
    return (
      <div className="h-[100dvh] w-full flex flex-col overflow-hidden bg-[#F7FAFF] relative selection:bg-[#2453FF]/15 selection:text-[#2453FF]">
        <LogicalActiveAssessment
          questions={LOGICAL_ASSESSMENT_QUESTIONS}
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
                Exit Logical Reasoning Test?
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

  // Results State
  if (viewState === 'results' && result) {
    return (
      <div className="flex flex-col min-h-screen bg-[#F7FAFF] text-[#07152F] relative selection:bg-[#2453FF]/15 selection:text-[#2453FF]">
        <Header />
        <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <LogicalResultsDashboard
            result={result}
            questions={LOGICAL_ASSESSMENT_QUESTIONS}
            answers={answers}
            flaggedQuestionIds={flaggedIds}
            onRetake={handleRetake}
          />

          {/* Educational Comprehensive Article below results */}
          <div className="mt-16 sm:mt-24 border-t border-slate-200/80 pt-12 sm:pt-16">
            <LogicalComprehensiveArticle onStartClick={handleRetake} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Onboarding View: Premium Hero Section with Two Mode Cards & Approved Article
  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFF] text-[#07152F] relative overflow-hidden selection:bg-[#2453FF]/15 selection:text-[#2453FF]">
      {/* Subtle Ambient Background Gradients & Grid Depth */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[820px] bg-gradient-to-b from-[#EBF2FF]/80 via-[#F7FAFF]/40 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full h-[680px] bg-grid-pattern opacity-40 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-20 left-[18%] bg-[#2453FF]/8 -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-40 right-[10%] bg-[#4779FF]/10 -z-10"
        aria-hidden="true"
      />

      {/* Global Site Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Logical Hero Section with Single H1, Two Mode Cards (Test Mode & Learn Mode) */}
        <LogicalHeroSection
          onStartTest={(chosenMode) => handleStartTest(chosenMode)}
          onStartLearn={handleStartLearn}
          hasResumeSession={hasSavedSession}
          savedQuestionIndex={savedSessionData?.currentQuestionIndex}
          savedAnsweredCount={savedSessionData ? Object.keys(savedSessionData.answers).length : 0}
          onResume={handleResumeSession}
          onDiscardSession={handleDiscardSession}
        />

        {/* Comprehensive SEO Editorial Article & Educational Features */}
        <LogicalComprehensiveArticle onStartClick={() => handleStartTest('untimed')} />
      </main>

      {/* Global Site Footer */}
      <Footer />
    </div>
  );
};
