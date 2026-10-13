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
  Pause,
  Play,
  Check,
} from 'lucide-react';

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

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const flaggedCount = flaggedQuestionIds.length;
  const unansweredCount = totalQuestions - answeredCount;
  const isFlagged = flaggedQuestionIds.includes(currentQuestion.id);
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

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
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (key === 'F') {
        onToggleFlag(currentQuestion.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQuestion, isLastQuestion]);

  return (
    <div id="assessment-workspace" className="w-full max-w-6xl mx-auto py-4 sm:py-6">
      {/* Top Workspace Header Bar */}
      <div className="bg-white rounded-2xl border border-[#E4EAF3] shadow-sm p-4 sm:p-5 mb-6 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Left Brand & Question Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-bold text-sm text-[#0B1220]">
              <div className="w-6 h-6 rounded-lg bg-[#5546F5] text-white flex items-center justify-center text-xs">
                IQ
              </div>
              <span>Question {currentIndex + 1} of {totalQuestions}</span>
            </div>

            {/* Mobile navigator button */}
            <button
              type="button"
              onClick={() => setIsNavigatorOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{answeredCount}/{totalQuestions}</span>
            </button>
          </div>

          {/* Right Timer Display */}
          <div className="flex items-center gap-3">
            <TimerDisplay
              mode={mode}
              startTime={startTime}
              onExpire={() => {
                onSubmit();
              }}
            />
          </div>
        </div>

        {/* Global Progress Line */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#5546F5] h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Workspace Layout (Sidebar Navigator + Main Question Card) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ========================================================= */}
        {/* DESKTOP SIDEBAR NAVIGATOR (Left 3.5 Cols)                 */}
        {/* ========================================================= */}
        <div className="hidden lg:block lg:col-span-4 bg-white rounded-2xl border border-[#E4EAF3] p-5 shadow-xs sticky top-24">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <h3 className="font-bold text-sm text-[#0B1220]">Question List</h3>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {answeredCount} Done
              </span>
              {flaggedCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  {flaggedCount} Flagged
                </span>
              )}
            </div>
          </div>

          {/* 4x5 Navigator Grid */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {questions.map((q, idx) => {
              const isCurrent = idx === currentIndex;
              const isAnswered = Boolean(answers[q.id]);
              const isFlaggedItem = flaggedQuestionIds.includes(q.id);

              let cellStyle = 'bg-slate-50 text-slate-700 border-[#E4EAF3] hover:border-slate-300';
              if (isAnswered) {
                cellStyle = 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold';
              }
              if (isFlaggedItem) {
                cellStyle = 'bg-amber-50 text-amber-900 border-amber-300 font-bold';
              }
              if (isCurrent) {
                cellStyle = 'bg-[#F0EEFF] text-[#5546F5] border-[#5546F5] ring-2 ring-[#5546F5]/20 font-extrabold';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => onNavigate(idx)}
                  className={`h-10 rounded-xl border flex flex-col items-center justify-center text-xs transition-all relative ${cellStyle}`}
                >
                  <span>{idx + 1}</span>
                  {isFlaggedItem && (
                    <span className="absolute top-1 right-1 text-amber-600">
                      <Flag className="w-2 h-2 fill-current" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] font-medium text-[#526179]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span>Flagged</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5546F5]" />
              <span>Current</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span>Not answered</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CENTER / RIGHT: ACTIVE QUESTION CARD & ACTIONS (8.5 Cols)  */}
        {/* ========================================================= */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={totalQuestions}
            selectedOptionId={answers[currentQuestion.id]}
            onSelectOption={onSelectOption}
          />

          {/* Bottom Action Controls */}
          <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-[#E4EAF3] shadow-xs">
            {/* Left: Previous */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-[#E4EAF3] hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Center: Flag & Skip */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onToggleFlag(currentQuestion.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isFlagged
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span className="hidden sm:inline">
                  {isFlagged ? 'Flagged' : 'Flag for Review'}
                </span>
              </button>

              <button
                type="button"
                onClick={handleSkip}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-2 transition-colors"
              >
                Skip
              </button>
            </div>

            {/* Right: Next or Finish */}
            {isLastQuestion ? (
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-sm"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Finish & View Results</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#5546F5] hover:bg-[#4338CA] active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigator Modal (Mobile drawer) */}
      <QuestionNavigatorModal
        isOpen={isNavigatorOpen}
        onClose={() => setIsNavigatorOpen(false)}
        questions={questions}
        currentIndex={currentIndex}
        answers={answers}
        flaggedQuestionIds={flaggedQuestionIds}
        onSelectQuestion={(idx) => onNavigate(idx)}
      />

      {/* Submission Confirmation Modal */}
      {isSubmitModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#E4EAF3] p-6 sm:p-7">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#0B1220] mb-2">
              Ready to Submit Your Assessment?
            </h3>

            {unansweredCount > 0 ? (
              <p className="text-sm text-[#526179] mb-6 leading-relaxed">
                You answered <span className="font-bold text-[#0B1220]">{answeredCount}</span> of {totalQuestions} questions. There are <span className="font-bold text-amber-600">{unansweredCount}</span> unanswered questions remaining. Unanswered questions are scored as 0.
              </p>
            ) : (
              <p className="text-sm text-[#526179] mb-6 leading-relaxed">
                You have answered all {totalQuestions} questions. Are you ready to generate your instant results dashboard and full explanations?
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
                onClick={() => {
                  setIsSubmitModalOpen(false);
                  onSubmit();
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#5546F5] hover:bg-[#4338CA] rounded-xl shadow-xs transition-colors"
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
