'use client';

import React from 'react';
import { Layers, Target, BookOpen, AlertCircle, BarChart3, RotateCcw } from 'lucide-react';
import { QuestionCategory, DifficultyLevel } from '@/lib/iqPractice/types';
import { CATEGORY_LABELS, DIFFICULTY_LABELS, CATEGORY_COLORS } from '@/lib/iqPractice/types';

interface CategoryExplorerProps {
  currentCategory: QuestionCategory | 'all';
  currentDifficulty: DifficultyLevel | 'all';
  reviewMode: 'practice' | 'mistakes' | 'bookmarks';
  onCategoryChange: (category: QuestionCategory | 'all') => void;
  onDifficultyChange: (difficulty: DifficultyLevel | 'all') => void;
  onReviewModeChange: (mode: 'practice' | 'mistakes' | 'bookmarks') => void;
  onShowDashboard: () => void;
  totalQuestions: number;
  filteredCount: number;
}

export const CategoryExplorer: React.FC<CategoryExplorerProps> = ({
  currentCategory,
  currentDifficulty,
  reviewMode,
  onCategoryChange,
  onDifficultyChange,
  onReviewModeChange,
  onShowDashboard,
  totalQuestions,
  filteredCount,
}) => {
  const categories: Array<{ id: QuestionCategory | 'all'; label: string; icon: any; count: number }> = [
    { id: 'all', label: 'All Categories', icon: Layers, count: totalQuestions },
    { id: 'numerical', label: CATEGORY_LABELS.numerical, icon: Target, count: 12 },
    { id: 'logical', label: CATEGORY_LABELS.logical, icon: BookOpen, count: 12 },
    { id: 'abstract', label: CATEGORY_LABELS.abstract, icon: Layers, count: 12 },
    { id: 'spatial', label: CATEGORY_LABELS.spatial, icon: Target, count: 12 },
  ];

  const difficulties: Array<{ id: DifficultyLevel | 'all'; label: string; count: number }> = [
    { id: 'all', label: 'All Difficulties', count: totalQuestions },
    { id: 'beginner', label: DIFFICULTY_LABELS.beginner, count: 16 },
    { id: 'intermediate', label: DIFFICULTY_LABELS.intermediate, count: 16 },
    { id: 'challenging', label: DIFFICULTY_LABELS.challenging, count: 16 },
  ];

  return (
    <div className="space-y-6">
      {/* Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isActive
                  ? 'bg-[#2453FF] text-white border-[#2453FF] shadow-lg scale-105'
                  : 'bg-white border-[#E2EAF7] hover:border-[#2453FF]/40 hover:shadow-md'
              }`}
            >
              <Icon className={`w-5 h-5 mb-2 ${isActive ? 'text-white' : 'text-[#2453FF]'}`} />
              <div className="text-xs font-bold mb-1">{cat.label}</div>
              <div className="text-[10px] opacity-80">{cat.count} questions</div>
            </button>
          );
        })}
      </div>

      {/* Difficulty Filters & Review Mode */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Difficulty */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-xs font-bold text-[#60718B] uppercase tracking-wider">Difficulty:</span>
          {difficulties.map((diff) => (
            <button
              key={diff.id}
              onClick={() => onDifficultyChange(diff.id)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentDifficulty === diff.id
                  ? 'bg-[#2453FF] text-white'
                  : 'bg-white border border-[#E2EAF7] text-[#60718B] hover:border-[#2453FF]/30'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>

        {/* Review Mode */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => onReviewModeChange('practice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              reviewMode === 'practice'
                ? 'bg-[#2453FF] text-white'
                : 'bg-white border border-[#E2EAF7] text-[#60718B] hover:border-[#2453FF]/30'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            Practice
          </button>
          <button
            onClick={() => onReviewModeChange('mistakes')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              reviewMode === 'mistakes'
                ? 'bg-rose-500 text-white'
                : 'bg-white border border-[#E2EAF7] text-[#60718B] hover:border-rose-500/30'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            Mistakes
          </button>
          <button
            onClick={() => onReviewModeChange('bookmarks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              reviewMode === 'bookmarks'
                ? 'bg-amber-500 text-white'
                : 'bg-white border border-[#E2EAF7] text-[#60718B] hover:border-amber-500/30'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Bookmarks
          </button>
        </div>

        {/* Dashboard Button */}
        <button
          onClick={onShowDashboard}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-[#E2EAF7] text-[#60718B] hover:border-[#2453FF]/30 flex items-center gap-1.5 transition-all"
        >
          <BarChart3 className="w-3.5 h-3.5" />
          Dashboard
        </button>
      </div>

      {/* Filter Summary */}
      <div className="text-xs text-[#60718B]">
        Showing <span className="font-bold text-[#07152F]">{filteredCount}</span> of{' '}
        <span className="font-bold text-[#07152F]">{totalQuestions}</span> questions
        {currentCategory !== 'all' && (
          <>
            {' '}
            in <span className="font-bold text-[#07152F]">{CATEGORY_LABELS[currentCategory]}</span>
          </>
        )}
        {currentDifficulty !== 'all' && (
          <>
            {' '}
            at <span className="font-bold text-[#07152F]">{DIFFICULTY_LABELS[currentDifficulty]}</span> level
          </>
        )}
        {reviewMode === 'mistakes' && (
          <> - <span className="font-bold text-rose-600">Mistakes Review</span></>
        )}
        {reviewMode === 'bookmarks' && (
          <> - <span className="font-bold text-amber-600">Bookmarked</span></>
        )}
      </div>
    </div>
  );
};
