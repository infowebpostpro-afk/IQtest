'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AssessmentMode, AssessmentSession, AssessmentResult } from '@/types/assessment';
import { ASSESSMENT_QUESTIONS, ASSESSMENT_VERSION } from '@/data/questions';
import { ActiveAssessment } from '@/components/assessment/ActiveAssessment';
import { ResultsDashboard } from '@/components/results/ResultsDashboard';
import {
  saveAssessmentSession,
  loadAssessmentSession,
  clearAssessmentSession,
  saveAssessmentResult,
  loadAssessmentResult,
} from '@/lib/assessment/storage';
import { calculateAssessmentResult } from '@/lib/assessment/scoring';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Layers,
  HelpCircle,
  Binary,
  GitBranch,
  Shapes,
  Box,
} from 'lucide-react';

export const TestClient: React.FC = () => {
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

  // Check for saved session on mount
  useEffect(() => {
    const saved = loadAssessmentSession(ASSESSMENT_VERSION);
    if (saved && !saved.isCompleted) {
      setHasSavedSession(true);
      setSavedSessionData(saved);
    }
  }, []);

  // Save session to localStorage whenever state updates during active test
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
    clearAssessmentSession();
    setHasSavedSession(false);
    setSavedSessionData(null);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    clearAssessmentSession();
    setResult(null);
    setCurrentIndex(0);
    setAnswers({});
    setFlaggedIds([]);
    setViewState('onboarding');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#0F172A] flex flex-col relative selection:bg-[#4F46E5]/15 selection:text-[#4F46E5]">
      {/* Background Ambient Glow & Grid Depth */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[640px] bg-gradient-to-b from-[#EEF5FF]/80 via-[#F8FBFF]/30 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-full h-[520px] bg-grid-pattern opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-12 left-[10%] bg-[#4F46E5]/8 -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-24 right-[10%] bg-[#38BDF8]/10 -z-10"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* DEDICATED TEST HEADER BAR                                                 */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 w-full border-b border-[#E5EDF7] bg-white/90 backdrop-blur-md transition-all">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Logo & Back to Home */}
          <div className="flex items-center gap-3">
            {viewState === 'active' ? (
              <button
                type="button"
                onClick={() => setShowExitModal(true)}
                className="flex items-center gap-2 group text-xs font-bold text-[#5B6B82] hover:text-[#0F172A] py-1.5 px-3 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none"
                title="Exit to Homepage"
              >
                <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">Exit to Homepage</span>
              </button>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 group text-xs font-bold text-[#5B6B82] hover:text-[#0F172A] py-1.5 px-3 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none"
              >
                <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">Back to Home</span>
              </Link>
            )}

            <div className="h-5 w-px bg-slate-200 hidden sm:block" />

            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none rounded-xl"
            >
              <div className="w-8 h-8 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white shadow-2xs group-hover:bg-[#4338CA] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <circle cx="17.5" cy="17.5" r="3.5" />
                </svg>
              </div>
              <span className="font-extrabold text-base tracking-tight text-[#0F172A]">
                IQ <span className="text-[#4F46E5]">Test</span>
              </span>
            </Link>
          </div>

          {/* Center / Right State Status */}
          <div className="flex items-center gap-2.5">
            {viewState === 'active' && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#4F46E5] bg-[#EEF4FF] border border-[#4F46E5]/20 px-3 py-1.5 rounded-full">
                  Question {currentIndex + 1} of {ASSESSMENT_QUESTIONS.length}
                </span>
                <span className="hidden md:inline-flex text-xs font-semibold text-[#5B6B82] px-2.5 py-1 rounded-full bg-white border border-[#E5EDF7]">
                  {mode === 'untimed' ? 'Untimed Practice' : '15-Minute Timed'}
                </span>
              </div>
            )}

            {viewState === 'onboarding' && (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Free &amp; Anonymous</span>
              </div>
            )}

            {viewState === 'results' && (
              <div className="flex items-center gap-2 text-xs font-bold text-[#4F46E5] bg-[#EEF4FF] border border-[#4F46E5]/20 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Results Ready</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN DEDICATED WORKSPACE                                                  */}
      {/* ========================================================================= */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-8 flex flex-col justify-center">
        {/* ===================================================================== */}
        {/* STATE 1: ONBOARDING / SETUP SCREEN                                    */}
        {/* ===================================================================== */}
        {viewState === 'onboarding' && (
          <div className="w-full max-w-3xl mx-auto animate-fade-up">
            {/* Resume Prompt if saved test found */}
            {hasSavedSession && savedSessionData && (
              <div className="mb-6 p-5 sm:p-6 bg-gradient-to-r from-[#EEF4FF] to-white rounded-3xl border border-[#4F46E5]/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>In-Progress Assessment Found</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Resume where you left off?
                  </h4>
                  <p className="text-xs text-[#5B6B82]">
                    You were on Question {savedSessionData.currentQuestionIndex + 1} of{' '}
                    {ASSESSMENT_QUESTIONS.length} with{' '}
                    {Object.keys(savedSessionData.answers).length} questions answered.
                  </p>
                </div>
                <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleDiscardSession}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-600 transition-colors"
                  >
                    Start Fresh
                  </button>
                  <button
                    type="button"
                    onClick={handleResumeSession}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-xs font-bold text-white shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Resume Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Main Welcome Card */}
            <div className="bg-white rounded-3xl border border-[#E5EDF7] shadow-[0_15px_35px_rgba(15,23,42,0.06)] p-6 sm:p-10 text-center">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
                <span>ONLINE REASONING ASSESSMENT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                Ready to Challenge Your Reasoning?
              </h1>
              <p className="text-sm sm:text-base text-[#5B6B82] max-w-xl mx-auto leading-relaxed mb-8">
                Take this 20-question practice assessment covering numbers, logic, patterns, and spatial reasoning. Enjoy a comfortable, distraction-free environment.
              </p>

              {/* 4 Category Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-left">
                <div className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#E5EDF7]">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                    <Binary className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]">Numerical</div>
                  <div className="text-[11px] text-[#5B6B82]">5 Questions</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#E5EDF7]">
                  <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2">
                    <GitBranch className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]">Logical</div>
                  <div className="text-[11px] text-[#5B6B82]">5 Questions</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#E5EDF7]">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
                    <Shapes className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]">Abstract</div>
                  <div className="text-[11px] text-[#5B6B82]">5 Questions</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#E5EDF7]">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                    <Box className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]">Spatial</div>
                  <div className="text-[11px] text-[#5B6B82]">5 Questions</div>
                </div>
              </div>

              {/* Mode Selection Cards */}
              <div className="text-left mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5B6B82] mb-3">
                  Select Practice Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <button
                    type="button"
                    onClick={() => setMode('untimed')}
                    className={`p-4 sm:p-5 rounded-2xl border text-left transition-all relative ${
                      mode === 'untimed'
                        ? 'bg-[#EEF4FF] border-[#4F46E5] ring-2 ring-[#4F46E5]/20 shadow-xs'
                        : 'bg-white border-[#E5EDF7] hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-extrabold text-[#0F172A] flex items-center gap-2">
                        <span>Untimed Practice</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#4F46E5] text-white">
                          Recommended
                        </span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          mode === 'untimed'
                            ? 'border-[#4F46E5] bg-[#4F46E5]'
                            : 'border-slate-300'
                        }`}
                      >
                        {mode === 'untimed' && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-[#5B6B82] leading-relaxed">
                      Take your time without clock pressure. Ideal for carefully working through each puzzle and understanding the logic.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('timed_15')}
                    className={`p-4 sm:p-5 rounded-2xl border text-left transition-all relative ${
                      mode === 'timed_15'
                        ? 'bg-[#EEF4FF] border-[#4F46E5] ring-2 ring-[#4F46E5]/20 shadow-xs'
                        : 'bg-white border-[#E5EDF7] hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-extrabold text-[#0F172A] flex items-center gap-2">
                        <span>15-Minute Timed</span>
                        <Clock className="w-3.5 h-3.5 text-[#4F46E5]" />
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          mode === 'timed_15'
                            ? 'border-[#4F46E5] bg-[#4F46E5]'
                            : 'border-slate-300'
                        }`}
                      >
                        {mode === 'timed_15' && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-[#5B6B82] leading-relaxed">
                      Simulate formal testing conditions with an active 15-minute countdown clock (approx. 45 seconds per puzzle).
                    </p>
                  </button>
                </div>
              </div>

              {/* Start Action Button */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={handleStartNewTest}
                  className="cta-glow w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4.5 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#4F46E5] to-[#4338CA] hover:from-[#4338CA] hover:to-[#3730A3] active:scale-[0.98] transition-all shadow-md focus:outline-none"
                >
                  <span>Begin Assessment</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>

                {/* Trust and Transparency Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#5B6B82] pt-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>20 Original Puzzles</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#4F46E5]" />
                    <span>~12–15 Minutes</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
                    <span>No Signup Required</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Permanent Practice Notice */}
            <p className="text-center text-xs text-[#5B6B82] mt-6">
              A free practice assessment to measure your reasoning skills. Not a standardized IQ test.
            </p>
          </div>
        )}

        {/* ===================================================================== */}
        {/* STATE 2: ACTIVE ASSESSMENT WORKSPACE                                  */}
        {/* ===================================================================== */}
        {viewState === 'active' && (
          <div className="w-full animate-fade-up">
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
          </div>
        )}

        {/* ===================================================================== */}
        {/* STATE 3: RESULTS DASHBOARD                                            */}
        {/* ===================================================================== */}
        {viewState === 'results' && result && (
          <div className="w-full animate-fade-up">
            <ResultsDashboard
              result={result}
              questions={ASSESSMENT_QUESTIONS}
              answers={answers}
              onRetake={handleRetake}
            />
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* EXIT CONFIRMATION MODAL                                                   */}
      {/* ========================================================================= */}
      {showExitModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#E5EDF7] p-6 sm:p-7">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-[#0F172A] mb-2">
              Exit to Homepage?
            </h3>

            <p className="text-xs sm:text-sm text-[#5B6B82] mb-6 leading-relaxed">
              Your test progress is saved in your browser. You can return anytime to resume where you left off.
            </p>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowExitModal(false)}
                className="px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Stay &amp; Continue Test
              </button>
              <button
                type="button"
                onClick={handleConfirmExit}
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-800 hover:bg-slate-900 rounded-xl transition-colors shadow-xs"
              >
                Exit to Homepage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
