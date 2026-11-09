'use client';

import React from 'react';
import { UserProgress } from '@/lib/iqPractice/types';
import { QUESTIONS } from '@/lib/iqPractice/questions';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Bookmark,
  RotateCcw,
  Sparkles,
  Play,
  BarChart2,
} from 'lucide-react';

interface LearningDashboardProps {
  progress: UserProgress;
  onContinue: () => void;
  onReviewMistakes: () => void;
  onReviewBookmarks: () => void;
  onReset: () => void;
  onBack: () => void;
}

export const LearningDashboard: React.FC<LearningDashboardProps> = ({
  progress,
  onContinue,
  onReviewMistakes,
  onReviewBookmarks,
  onReset,
  onBack,
}) => {
  const total = QUESTIONS.length;
  const attempted = progress.attemptedQuestions.size;
  const correct = progress.correctAnswers.size;
  const incorrect = progress.incorrectAnswers.size;
  const bookmarked = progress.bookmarkedQuestions.size;
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

  return (
    <div className="bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_10px_30px_rgba(7,21,47,0.03)] p-6 sm:p-8 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#F0F4FA]">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60718B] hover:text-[#07152F] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Questions</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Progress</span>
        </button>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#2453FF]">
          <BarChart2 className="w-3.5 h-3.5" />
          <span>Practice Analytics</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#07152F]">
          Your Learning Dashboard
        </h2>
        <p className="text-xs sm:text-sm text-[#60718B]">
          Track completed puzzles, review mistakes, and revisit bookmarked reasoning challenges.
        </p>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A9DBA]">
            Attempted
          </div>
          <div className="text-2xl font-black text-[#07152F] mt-1">
            {attempted} <span className="text-xs font-normal text-slate-400">/ {total}</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            Correct
          </div>
          <div className="text-2xl font-black text-emerald-800 mt-1">
            {correct}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
          <div className="text-[11px] font-bold uppercase tracking-wider text-red-700">
            Mistakes
          </div>
          <div className="text-2xl font-black text-red-800 mt-1">
            {incorrect}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#2453FF]">
            Accuracy
          </div>
          <div className="text-2xl font-black text-[#2453FF] mt-1">
            {accuracy}%
          </div>
        </div>
      </div>

      {/* Review Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <button
          type="button"
          onClick={onContinue}
          className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#2453FF] text-white text-xs font-bold hover:bg-[#1B40DF] transition-all cursor-pointer shadow-xs"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          <span>Continue Practice</span>
        </button>

        <button
          type="button"
          onClick={onReviewMistakes}
          disabled={incorrect === 0}
          className="flex items-center justify-center gap-2 p-3.5 rounded-2xl border border-red-200 bg-red-50/60 text-red-700 text-xs font-bold hover:bg-red-100 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
        >
          <XCircle className="w-3.5 h-3.5" />
          <span>Review Mistakes ({incorrect})</span>
        </button>

        <button
          type="button"
          onClick={onReviewBookmarks}
          disabled={bookmarked === 0}
          className="flex items-center justify-center gap-2 p-3.5 rounded-2xl border border-amber-200 bg-amber-50/60 text-amber-700 text-xs font-bold hover:bg-amber-100 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>Bookmarked ({bookmarked})</span>
        </button>
      </div>
    </div>
  );
};
