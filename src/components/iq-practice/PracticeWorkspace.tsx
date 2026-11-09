'use client';

import React, { useState, useEffect } from 'react';
import {
  Question,
  UserAttempt,
  CATEGORY_LABELS,
  DIFFICULTY_LABELS,
  CATEGORY_COLORS,
  DIFFICULTY_COLORS,
} from '@/lib/iqPractice/types';
import {
  Bookmark,
  BookmarkCheck,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BarChart2,
  RotateCcw,
} from 'lucide-react';

interface PracticeWorkspaceProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  isBookmarked: boolean;
  hintsUsed: number;
  previousAttempts: UserAttempt[];
  onAnswer: (selectedAnswerId: string) => void;
  onBookmark: () => void;
  onHint: (hintNumber: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onShowDashboard: () => void;
}

export const PracticeWorkspace: React.FC<PracticeWorkspaceProps> = ({
  question,
  currentIndex,
  totalQuestions,
  isBookmarked,
  hintsUsed,
  previousAttempts,
  onAnswer,
  onBookmark,
  onHint,
  onNext,
  onPrevious,
  onShowDashboard,
}) => {
  const latestAttempt = previousAttempts[previousAttempts.length - 1];
  const [selectedOption, setSelectedOption] = useState<string | null>(
    latestAttempt ? latestAttempt.selectedAnswerId : null
  );

  useEffect(() => {
    const attempt = previousAttempts[previousAttempts.length - 1];
    setSelectedOption(attempt ? attempt.selectedAnswerId : null);
  }, [question.id, previousAttempts]);

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    onAnswer(optionId);
  };

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.correctAnswerId;

  return (
    <div className="bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_10px_30px_rgba(7,21,47,0.03)] p-6 sm:p-8 space-y-6">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F0F4FA]">
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
              CATEGORY_COLORS[question.category]
            }`}
          >
            {CATEGORY_LABELS[question.category]}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
              DIFFICULTY_COLORS[question.difficulty]
            }`}
          >
            {DIFFICULTY_LABELS[question.difficulty]}
          </span>
          <span className="text-xs font-semibold text-[#8A9DBA]">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBookmark}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isBookmarked
                ? 'bg-amber-50 border-amber-200 text-amber-600'
                : 'border-[#E2EAF7] text-[#8A9DBA] hover:bg-[#F2F7FF] hover:text-[#07152F]'
            }`}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 fill-amber-500" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            onClick={onShowDashboard}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E2EAF7] text-xs font-bold text-[#60718B] hover:bg-[#F2F7FF] hover:text-[#07152F] transition-colors cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5 text-[#2453FF]" />
            <span className="hidden sm:inline">Progress</span>
          </button>
        </div>
      </div>

      {/* Question Prompt */}
      <div>
        <h2 className="text-base sm:text-lg font-bold text-[#07152F] leading-snug">
          {question.question}
        </h2>
        {question.illustration && (
          <div className="mt-4 p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7] flex justify-center">
            {question.illustration}
          </div>
        )}
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options.map((opt) => {
          const isThisSelected = selectedOption === opt.id;
          const isThisCorrect = opt.id === question.correctAnswerId;

          let optionStyle =
            'border-[#E2EAF7] bg-white text-[#07152F] hover:border-[#2453FF]/50 hover:bg-[#F8FBFF]';

          if (isAnswered) {
            if (isThisCorrect) {
              optionStyle =
                'border-emerald-500 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-500/20';
            } else if (isThisSelected && !isThisCorrect) {
              optionStyle =
                'border-red-400 bg-red-50/80 text-red-900 ring-2 ring-red-400/20';
            } else {
              optionStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(opt.id)}
              className={`p-3.5 sm:p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${optionStyle}`}
            >
              <span
                className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                  isThisSelected
                    ? isThisCorrect
                      ? 'bg-emerald-600 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-[#EEF4FF] text-[#2453FF]'
                }`}
              >
                {opt.id}
              </span>
              <span className="text-xs sm:text-sm font-semibold flex-1 leading-relaxed">
                {opt.text}
              </span>
              {isAnswered && isThisCorrect && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              )}
              {isAnswered && isThisSelected && !isThisCorrect && (
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Progressive Hints */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center gap-2">
          {hintsUsed < 1 ? (
            <button
              type="button"
              onClick={() => onHint(1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#2453FF] bg-[#EEF4FF] hover:bg-[#E0EBFF] transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Show Hint 1</span>
            </button>
          ) : hintsUsed < 2 ? (
            <button
              type="button"
              onClick={() => onHint(2)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Show Stronger Hint (Hint 2)</span>
            </button>
          ) : null}
        </div>

        {hintsUsed >= 1 && (
          <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 leading-relaxed">
            <span className="font-bold">Hint 1: </span>
            {question.hint1}
          </div>
        )}
        {hintsUsed >= 2 && (
          <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <span className="font-bold">Hint 2: </span>
            {question.hint2}
          </div>
        )}
      </div>

      {/* Answer Explanation Box (Shown once answered) */}
      {isAnswered && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7] space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Correct!</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-200">
                <XCircle className="w-3.5 h-3.5" />
                <span>Incorrect Answer</span>
              </span>
            )}
            <span className="text-xs font-bold text-[#07152F]">
              Explanation &amp; Solution
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
            {question.explanation}
          </p>

          {question.commonMistake && (
            <div className="pt-2 text-xs text-amber-800 bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/80">
              <span className="font-bold">Common Pitfall: </span>
              {question.commonMistake}
            </div>
          )}
        </div>
      )}

      {/* Bottom Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-[#F0F4FA]">
        <button
          type="button"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#E2EAF7] text-xs font-bold text-[#07152F] hover:bg-[#F2F7FF] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        <span className="text-xs font-bold text-[#8A9DBA]">
          {currentIndex + 1} / {totalQuestions}
        </span>

        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex >= totalQuestions - 1}
          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#2453FF] text-white text-xs font-bold hover:bg-[#1B40DF] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
        >
          <span>Next</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
