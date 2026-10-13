'use client';

import React from 'react';
import { Question } from '@/types/assessment';
import { X, Flag, Check } from 'lucide-react';

interface QuestionNavigatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentIndex: number;
  answers: Record<string, string>;
  flaggedQuestionIds: string[];
  onSelectQuestion: (index: number) => void;
}

export const QuestionNavigatorModal: React.FC<QuestionNavigatorModalProps> = ({
  isOpen,
  onClose,
  questions,
  currentIndex,
  answers,
  flaggedQuestionIds,
  onSelectQuestion,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="navigator-title"
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h3 id="navigator-title" className="text-base font-bold text-slate-900">
              Question Navigator
            </h3>
            <p className="text-xs text-slate-500">Jump directly to any problem</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Close Navigator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend */}
        <div className="px-6 py-3 bg-slate-50/80 border-b border-slate-100 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-white flex items-center justify-center text-[9px]">
              <Check className="w-2.5 h-2.5" />
            </span>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-amber-500 text-white flex items-center justify-center text-[9px]">
              <Flag className="w-2.5 h-2.5 fill-current" />
            </span>
            <span>Flagged</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded border border-slate-300 bg-white" />
            <span>Unanswered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded border-2 border-indigo-600 bg-indigo-50" />
            <span>Current</span>
          </div>
        </div>

        {/* Question Grid */}
        <div className="p-6 grid grid-cols-5 gap-2.5 max-h-[60vh] overflow-y-auto">
          {questions.map((q, index) => {
            const isCurrent = index === currentIndex;
            const isAnswered = Boolean(answers[q.id]);
            const isFlagged = flaggedQuestionIds.includes(q.id);

            let bgClass = 'bg-white text-slate-700 border-slate-200 hover:border-slate-400';
            if (isAnswered) {
              bgClass = 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100';
            }
            if (isFlagged) {
              bgClass = 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100';
            }
            if (isCurrent) {
              bgClass = 'ring-2 ring-indigo-600 border-indigo-600 font-bold';
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  onSelectQuestion(index);
                  onClose();
                }}
                className={`relative h-12 rounded-xl border flex flex-col items-center justify-center text-sm font-semibold transition-all ${bgClass}`}
              >
                <span>{index + 1}</span>
                <span className="text-[10px] font-normal opacity-70 capitalize">
                  {q.category.slice(0, 3)}
                </span>
                {isFlagged && (
                  <span className="absolute top-1 right-1 text-amber-600">
                    <Flag className="w-2.5 h-2.5 fill-current" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
