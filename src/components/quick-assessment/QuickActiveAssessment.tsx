'use client';

import React, { useState, useEffect } from 'react';
import { Question, AssessmentMode } from '@/types/assessment';
import { QuestionCard } from '@/components/assessment/QuestionCard';
import { TimerDisplay } from '@/components/assessment/TimerDisplay';
import { QuestionNavigatorModal } from '@/components/assessment/QuestionNavigatorModal';
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  Grid,
  CheckCircle,
  AlertTriangle,
  Volume2,
  VolumeX,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import {
  isSoundEnabled,
  setSoundEnabled,
  playFlagSound,
  playCompleteSound,
} from '@/lib/assessment/audio';

interface QuickActiveAssessmentProps {
  questions: Question[];
  currentIndex: number;
  answers: Record<string, string>;
  flaggedQuestionIds: string[];
  mode: AssessmentMode;
  startTime: number;
  onSelectOption: (optionId: string) => void;
  onNavigate: (newIndex: number) => void;
  onToggleFlag: (questionId: string) => void;
  onSubmit: () => void;
  onCancelTest: () => void;
}

export const QuickActiveAssessment: React.FC<QuickActiveAssessmentProps> = ({
  questions,
  currentIndex,
  answers,
  flaggedQuestionIds,
  mode,
  startTime,
  onSelectOption,
  onNavigate,
  onToggleFlag,
  onSubmit,
  onCancelTest,
}) => {
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  useEffect(() => {
    setSoundActive(isSoundEnabled());
  }, []);

  const toggleSound = () => {
    const next = !soundActive;
    setSoundActive(next);
    setSoundEnabled(next);
  };

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const flaggedCount = flaggedQuestionIds.length;
  const unansweredCount = totalQuestions - answeredCount;
  const isFlagged = flaggedQuestionIds.includes(currentQuestion.id);
  const isCurrentAnswered = Boolean(answers[currentQuestion.id]);
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleNext = () => {
    if (isLastQuestion) {
      setIsSubmitModalOpen(true);
    } else {
      onNavigate(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleSkip = () => {
    if (isLastQuestion) {
      setIsSubmitModalOpen(true);
    } else {
      onNavigate(currentIndex + 1);
    }
  };

  const handleToggleFlagClick = () => {
    playFlagSound();
    onToggleFlag(currentQuestion.id);
  };

  const handleConfirmSubmit = () => {
    playCompleteSound();
    setIsSubmitModalOpen(false);
    onSubmit();
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const key = e.key.toUpperCase();
      if (['1', 'A'].includes(key) && currentQuestion.options[0]) {
        onSelectOption(currentQuestion.options[0].id);
      } else if (['2', 'B'].includes(key) && currentQuestion.options[1]) {
        onSelectOption(currentQuestion.options[1].id);
      } else if (['3', 'C'].includes(key) && currentQuestion.options[2]) {
        onSelectOption(currentQuestion.options[2].id);
      } else if (['4', 'D'].includes(key) && currentQuestion.options[3]) {
        onSelectOption(currentQuestion.options[3].id);
      } else if (e.key === 'ArrowRight' || (e.key === 'Enter' && isCurrentAnswered)) {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (key === 'F') {
        handleToggleFlagClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQuestion, isLastQuestion, isCurrentAnswered]);

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden bg-[#F7FAFF] select-none">
      {/* ========================================================= */}
      {/* 1. COMPACT UNIFIED TOP HEADER BAR (h-14 on mobile)        */}
      {/* ========================================================= */}
      <header className="w-full shrink-0 bg-white/95 backdrop-blur-md border-b border-[#E2EAF7] relative z-30">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 h-13 sm:h-14 flex items-center justify-between gap-2">
          {/* Left: Exit button */}
          <button
            type="button"
            onClick={onCancelTest}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            title="Exit assessment"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold">Exit</span>
          </button>

          {/* Center: Question Counter & Progress Pill */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#2453FF]/25 text-[#2453FF] text-xs font-extrabold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2453FF] animate-pulse" />
              <span>
                Q {currentIndex + 1} of {totalQuestions}
              </span>
            </div>

            {/* Answered streak hint on sm+ */}
            {answeredCount >= 2 && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200/60">
                <Sparkles className="w-3 h-3 text-emerald-500" />
                <span>{answeredCount}/{totalQuestions} Answered</span>
              </span>
            )}
          </div>

          {/* Right: Sound toggle, Live Timer, Navigator Drawer button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Sound Mute/Unmute */}
            <button
              type="button"
              onClick={toggleSound}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
              title={soundActive ? 'Mute sound effects' : 'Enable sound effects'}
              aria-label={soundActive ? 'Mute audio' : 'Enable audio'}
            >
              {soundActive ? (
                <Volume2 className="w-4 h-4 text-[#2453FF]" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* Timer */}
            <TimerDisplay
              mode={mode}
              startTime={startTime}
              onExpire={() => {
                handleConfirmSubmit();
              }}
            />

            {/* Navigator Grid Sheet Button */}
            <button
              type="button"
              onClick={() => setIsNavigatorOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none cursor-pointer"
              title="Overview of all 10 questions"
            >
              <Grid className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[11px] font-semibold">
                {answeredCount}/{totalQuestions}
              </span>
            </button>
          </div>
        </div>

        {/* Continuous Animated Gradient Progress Bar */}
        <div className="w-full bg-slate-100 h-1 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#2453FF] via-[#4779FF] to-[#2453FF] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. MAIN CENTER QUESTION CANVAS (Zero-Scroll on Mobile)    */}
      {/* ========================================================= */}
      <main className="flex-1 min-h-0 w-full max-w-4xl mx-auto px-2.5 sm:px-6 py-2 sm:py-4 flex flex-col justify-center overflow-y-auto">
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          selectedOptionId={answers[currentQuestion.id]}
          onSelectOption={onSelectOption}
        />
      </main>

      {/* ========================================================= */}
      {/* 3. DOCKED BOTTOM NAVIGATION DOCK (Always visible)        */}
      {/* ========================================================= */}
      <footer className="w-full shrink-0 bg-white/95 backdrop-blur-md border-t border-[#E2EAF7] py-2 sm:py-3 px-3 sm:px-6 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          {/* Center: Flag & Skip */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={handleToggleFlagClick}
              className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-semibold active:scale-95 transition-all cursor-pointer ${
                isFlagged
                  ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              title={isFlagged ? 'Remove flag' : 'Flag question for review'}
            >
              <Flag
                className={`w-3.5 h-3.5 ${
                  isFlagged ? 'fill-amber-500 text-amber-600' : 'text-slate-400'
                }`}
              />
              <span className="hidden sm:inline">
                {isFlagged ? 'Flagged' : 'Flag for Review'}
              </span>
            </button>

            <button
              type="button"
              onClick={handleSkip}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-2 sm:px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Skip
            </button>
          </div>

          {/* Right: Next or Submit Button */}
          {isLastQuestion ? (
            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 shadow-md transition-all cursor-pointer animate-pulse"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Finish Test</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white active:scale-95 transition-all shadow-md cursor-pointer ${
                isCurrentAnswered
                  ? 'bg-gradient-to-r from-[#2453FF] to-[#1B40DF] hover:from-[#1B40DF] hover:to-[#1736BD] ring-2 ring-[#2453FF]/25'
                  : 'bg-[#2453FF] hover:bg-[#1B40DF]'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 4. MODALS (Navigator & Submit Confirmation)              */}
      {/* ========================================================= */}
      <QuestionNavigatorModal
        isOpen={isNavigatorOpen}
        onClose={() => setIsNavigatorOpen(false)}
        questions={questions}
        currentIndex={currentIndex}
        answers={answers}
        flaggedQuestionIds={flaggedQuestionIds}
        onSelectQuestion={(idx) => {
          onNavigate(idx);
          setIsNavigatorOpen(false);
        }}
      />

      {isSubmitModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-7">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#07152F] mb-2">
              Submit Your Quick Assessment?
            </h3>

            {unansweredCount > 0 ? (
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                You have answered <span className="font-bold text-slate-900">{answeredCount}</span> of{' '}
                {totalQuestions} questions. There are{' '}
                <span className="font-bold text-amber-600">{unansweredCount}</span> unanswered questions
                remaining. Unanswered questions are scored as 0.
              </p>
            ) : (
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                You have answered all 10 questions! Ready to generate your instant accuracy score and full question-by-question explanations?
              </p>
            )}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                Return to Test
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#2453FF] hover:bg-[#1B40DF] active:scale-95 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
