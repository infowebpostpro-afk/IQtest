'use client';

import React from 'react';
import { Question } from '@/types/assessment';
import { VisualSvgRenderer } from './VisualSvgRenderer';
import { Binary, GitBranch, Shapes, Box, Check } from 'lucide-react';
import { playOptionSelectSound } from '@/lib/assessment/audio';

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
  const getCategoryDetails = () => {
    switch (question.category) {
      case 'numerical':
        return {
          icon: <Binary className="w-3.5 h-3.5 text-blue-600" />,
          label: 'Numerical Reasoning',
          badgeClass: 'bg-blue-50 text-blue-700 border-blue-200/80',
          dotClass: 'bg-blue-500',
        };
      case 'logical':
        return {
          icon: <GitBranch className="w-3.5 h-3.5 text-purple-600" />,
          label: 'Logical Deduction',
          badgeClass: 'bg-purple-50 text-purple-700 border-purple-200/80',
          dotClass: 'bg-purple-500',
        };
      case 'abstract':
        return {
          icon: <Shapes className="w-3.5 h-3.5 text-amber-600" />,
          label: 'Abstract Patterns',
          badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/80',
          dotClass: 'bg-amber-500',
        };
      case 'spatial':
        return {
          icon: <Box className="w-3.5 h-3.5 text-emerald-600" />,
          label: 'Spatial Reasoning',
          badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
          dotClass: 'bg-emerald-500',
        };
    }
  };

  const category = getCategoryDetails();

  // Smart responsive layout:
  // Use 2 columns if options have visual SVG thumbnails OR if all options are short text (<= 18 chars)
  const hasVisualOptions = question.options.some((opt) => Boolean(opt.visualAsset));
  const areAllOptionsShort = question.options.every((opt) => opt.label.length <= 18);
  const isTwoColumnLayout = hasVisualOptions || areAllOptionsShort;

  const handleOptionClick = (optionId: string) => {
    playOptionSelectSound();
    onSelectOption(optionId);
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.04)] p-3.5 sm:p-6 transition-all duration-200 flex flex-col justify-between">
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3 pb-2 border-b border-slate-100">
          {/* Category Badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-semibold border ${category.badgeClass}`}
          >
            {category.icon}
            <span>{category.label}</span>
          </div>

          {/* Difficulty Level & Question indicator */}
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
            <span className="capitalize">{question.difficulty}</span>
          </div>
        </div>

        {/* Question Prompt */}
        <div className="mb-2 sm:mb-3">
          <h2 className="text-[14px] sm:text-[17px] font-bold text-[#0F172A] leading-snug whitespace-pre-line tracking-tight">
            {question.prompt}
          </h2>
        </div>

        {/* Visual Stimulus Diagram (if present) */}
        {question.visualAsset && (
          <div className="mb-2.5 sm:mb-3.5">
            <div className="p-2 sm:p-3 bg-slate-50/80 rounded-xl sm:rounded-2xl border border-slate-200/80 flex items-center justify-center max-h-[110px] sm:max-h-[140px] overflow-hidden">
              <div className="w-full max-w-sm [&_svg]:max-h-[95px] [&_svg]:mx-auto [&>div]:p-1 [&>div]:shadow-none [&>div]:border-0 [&>div]:bg-transparent">
                <VisualSvgRenderer asset={question.visualAsset} />
              </div>
              <p className="sr-only">{question.accessibilityDescription}</p>
            </div>
          </div>
        )}
      </div>

      {/* Answer Options */}
      <div
        className={
          isTwoColumnLayout
            ? 'grid grid-cols-2 gap-2 sm:gap-2.5 mt-1 sm:mt-1.5'
            : 'flex flex-col gap-1.5 sm:gap-2 mt-1 sm:mt-1.5'
        }
        role="radiogroup"
        aria-label="Answer choices"
      >
        {question.options.map((option, idx) => {
          const isSelected = selectedOptionId === option.id;
          const shortcutKey = ['1', '2', '3', '4'][idx];

          if (hasVisualOptions && option.visualAsset) {
            // Visual Option Card (2x2 Grid)
            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleOptionClick(option.id)}
                className={`relative p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border text-left flex flex-col items-center justify-between transition-all duration-150 group active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-indigo-50/90 to-purple-50/60 border-indigo-600 ring-2 ring-indigo-500/25 shadow-sm'
                    : 'bg-white hover:bg-slate-50 border-slate-200/90 hover:border-indigo-300'
                }`}
              >
                {/* Header inside visual card: Badge + Radio */}
                <div className="w-full flex items-center justify-between gap-1 mb-0.5">
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                    }`}
                  >
                    {option.id}
                  </span>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-slate-300 bg-white group-hover:border-slate-400'
                    }`}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                </div>

                {/* SVG Thumbnail */}
                <div className="w-full h-11 sm:h-13 flex items-center justify-center [&_svg]:max-h-10 sm:[&_svg]:max-h-12 [&_svg]:w-auto my-0.5">
                  <VisualSvgRenderer asset={option.visualAsset} isOptionThumbnail />
                </div>

                {/* Short Label */}
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 truncate w-full text-center px-1">
                  {option.label}
                </span>
              </button>
            );
          }

          // Text Option Card
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleOptionClick(option.id)}
              className={`w-full text-left transition-all duration-150 flex items-center justify-between gap-2 sm:gap-3 group active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl sm:rounded-2xl border cursor-pointer ${
                isTwoColumnLayout
                  ? 'p-2 sm:p-2.5 min-h-[42px] sm:min-h-[46px]'
                  : 'p-2 sm:p-3 min-h-[42px] sm:min-h-[46px]'
              } ${
                isSelected
                  ? 'bg-gradient-to-r from-indigo-50/90 to-purple-50/60 border-indigo-600 ring-2 ring-indigo-500/25 shadow-sm'
                  : 'bg-white hover:bg-slate-50/90 border-slate-200/90 hover:border-indigo-300'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                {/* Option Identifier Badge */}
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                  }`}
                >
                  {option.id}
                </div>

                {/* Option Label Text */}
                <span
                  className={`min-w-0 flex-1 text-xs sm:text-sm leading-snug font-semibold transition-colors ${
                    isSelected ? 'text-indigo-950 font-bold' : 'text-slate-800'
                  }`}
                >
                  {option.label}
                </span>
              </div>

              {/* Right Selection Radio & Keyboard Hint */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="hidden md:inline-block text-[10px] font-mono font-medium text-slate-400 group-hover:text-slate-600">
                  [{shortcutKey}]
                </span>
                <div
                  className={`w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-slate-300 bg-white group-hover:border-slate-400'
                  }`}
                >
                  {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
