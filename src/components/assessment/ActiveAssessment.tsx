'use client';

import React, { useState, useEffect } from 'react';
import { Question, AssessmentMode } from '@/types/assessment';
import { QuestionCard } from './QuestionCard';
import { TimerDisplay } from './TimerDisplay';
import { QuestionNavigatorModal } from './QuestionNavigatorModal';
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  Grid,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
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

interface ActiveAssessmentProps {
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

export const ActiveAssessment: React.FC<ActiveAssessmentProps> = ({
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
    <div className="w-full h-full flex flex-col justify-between overflow-hidden bg-[#F8FBFF] select-none">
      {/* ========================================================= */}
      {/* 1. COMPACT UNIFIED TOP HEADER BAR (h-14 on mobile)        */}
      {/* ========================================================= */}
      <header className="w-full shrink-0 bg-white/95 backdrop-blur-md border-b border-slate-200/80 relative z-30">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 h-13 sm:h-14 flex items-center justify-between gap-2">
          {/* Left: Exit button */}
          <button
            type="button"
            onClick={onCancelTest}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none"
            title="Exit assessment"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold">Exit</span>
          </button>

          {/* Center: Question Counter & Milestone Pill */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-extrabold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              <span>
                Q {currentIndex + 1} of {totalQuestions}
              </span>
            </div>

            {/* Answered streak hint on sm+ */}
            {answeredCount >= 3 && (
              <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200/60">
                <Sparkles className="w-3 h-3 text-emerald-500" />
                <span>{answeredCount} Answered</span>
              </span>
            )}
          </div>

          {/* Right: Sound toggle, Live Timer, Navigator Drawer button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Sound Mute/Unmute */}
            <button
              type="button"
              onClick={toggleSound}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              title={soundActive ? 'Mute sound effects' : 'Enable sound effects'}
              aria-label={soundActive ? 'Mute audio' : 'Enable audio'}
            >
              {soundActive ? (
                <Volume2 className="w-4 h-4 text-indigo-600" />
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
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none"
              title="Overview of all questions"
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
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 transition-all duration-300 ease-out"
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
      <footer className="w-full shrink-0 bg-white/95 backdrop-blur-md border-t border-slate-200/80 py-2 sm:py-3 px-3 sm:px-6 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          {/* Center: Flag & Skip */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={handleToggleFlagClick}
              className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-semibold active:scale-95 transition-all ${
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
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-2 sm:px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Skip
            </button>
          </div>

          {/* Right: Next or Submit Button */}
          {isLastQuestion ? (
            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 shadow-md transition-all animate-pulse"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Finish Test</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white active:scale-95 transition-all shadow-md ${
                isCurrentAnswered
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 ring-2 ring-indigo-400/30'
                  : 'bg-indigo-600 hover:bg-indigo-700'
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

            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Ready to Submit Your Assessment?
            </h3>

            {unansweredCount > 0 ? (
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                You have answered <span className="font-bold text-slate-900">{answeredCount}</span> of{' '}
                {totalQuestions} questions. There are{' '}
                <span className="font-bold text-amber-600">{unansweredCount}</span> unanswered questions
                remaining. Unanswered questions count as 0.
              </p>
            ) : (
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                You have answered all {totalQuestions} questions! Ready to generate your instant IQ
                breakdown and detailed reasoning explanations?
              </p>
            )}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Return to Test
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-xl shadow-xs transition-all"
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
