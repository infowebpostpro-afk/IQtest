'use client';

import React from 'react';
import { Question } from '@/types/assessment';
import { VisualSvgRenderer } from './VisualSvgRenderer';
import { CATEGORY_LABELS } from '@/lib/assessment/scoring';
import { Binary, GitBranch, Shapes, Box } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionId,
  onSelectOption,
}) => {
  const getCategoryIcon = () => {
    switch (question.category) {
      case 'numerical':
        return <Binary className="w-3.5 h-3.5" />;
      case 'logical':
        return <GitBranch className="w-3.5 h-3.5" />;
      case 'abstract':
        return <Shapes className="w-3.5 h-3.5" />;
      case 'spatial':
        return <Box className="w-3.5 h-3.5" />;
    }
  };

  const getCategoryBadgeClass = () => {
    switch (question.category) {
      case 'numerical':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'logical':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'abstract':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'spatial':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-[#E4EAF3] shadow-sm p-6 sm:p-8">
      {/* Question Header Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="text-sm font-extrabold text-[#0B1220]">
            Question {questionNumber}
          </span>
          <span className="text-xs text-[#526179]">of {totalQuestions}</span>
        </div>

        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getCategoryBadgeClass()}`}
        >
          {getCategoryIcon()}
          <span>{CATEGORY_LABELS[question.category]}</span>
        </div>
      </div>

      {/* Question Prompt */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-[#0B1220] leading-snug whitespace-pre-line">
          {question.prompt}
        </h2>
      </div>

      {/* Visual Stimulus Diagram (if present) */}
      {question.visualAsset && (
        <div className="mb-8">
          <div className="p-4 bg-slate-50/80 rounded-2xl border border-[#E4EAF3]">
            <VisualSvgRenderer asset={question.visualAsset} />
            <p className="sr-only">{question.accessibilityDescription}</p>
          </div>
        </div>
      )}

      {/* Four Answer Choices */}
      <div className="space-y-3" role="radiogroup" aria-label="Answer choices">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectOption(option.id)}
              className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-150 flex items-center justify-between gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5546F5] ${
                isSelected
                  ? 'bg-[#F0EEFF]/80 border-[#5546F5] ring-2 ring-[#5546F5]/20 shadow-xs'
                  : 'bg-white hover:bg-slate-50/80 border-[#E4EAF3] hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                {/* Option Identifier Badge */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#5546F5] text-white shadow-2xs'
                      : 'bg-slate-100 text-[#0B1220] group-hover:bg-slate-200'
                  }`}
                >
                  {option.id}
                </div>

                {/* Option Content: text or SVG */}
                <div className="min-w-0 flex-1">
                  {option.visualAsset ? (
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 p-1 bg-slate-50 rounded-xl border border-slate-200 shrink-0 flex items-center justify-center">
                        <VisualSvgRenderer
                          asset={option.visualAsset}
                          isOptionThumbnail
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {option.label}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base font-semibold text-slate-800">
                      {option.label}
                    </span>
                  )}
                </div>
              </div>

              {/* Radio Indicator */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                  isSelected
                    ? 'border-[#5546F5] bg-[#5546F5]'
                    : 'border-slate-300 group-hover:border-slate-400 bg-white'
                }`}
              >
                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
