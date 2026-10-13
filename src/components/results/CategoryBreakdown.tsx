'use client';

import React from 'react';
import { AssessmentResult, QuestionCategory } from '@/types/assessment';
import { Binary, GitBranch, Shapes, Box } from 'lucide-react';

interface CategoryBreakdownProps {
  result: AssessmentResult;
}

export const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({ result }) => {
  const categoryOrder: QuestionCategory[] = ['numerical', 'logical', 'abstract', 'spatial'];

  const getIcon = (cat: QuestionCategory) => {
    switch (cat) {
      case 'numerical':
        return <Binary className="w-4 h-4 text-blue-600" />;
      case 'logical':
        return <GitBranch className="w-4 h-4 text-emerald-600" />;
      case 'abstract':
        return <Shapes className="w-4 h-4 text-indigo-600" />;
      case 'spatial':
        return <Box className="w-4 h-4 text-purple-600" />;
    }
  };

  const getBarColor = (cat: QuestionCategory) => {
    switch (cat) {
      case 'numerical':
        return 'bg-blue-600';
      case 'logical':
        return 'bg-emerald-600';
      case 'abstract':
        return 'bg-indigo-600';
      case 'spatial':
        return 'bg-purple-600';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categoryOrder.map((catKey) => {
        const item = result.categoryScores[catKey];
        if (!item) return null;

        return (
          <div
            key={catKey}
            className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                  {getIcon(catKey)}
                </div>
                <h4 className="text-sm font-semibold text-slate-900">
                  {item.categoryName}
                </h4>
              </div>
              <div className="text-sm font-bold text-slate-800">
                {item.correct} / {item.total}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden my-2.5">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${getBarColor(
                  catKey
                )}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>

            {/* Neutral Feedback Text (per Section 14) */}
            <p className="text-xs text-slate-500 mt-1">
              You answered {item.correct} of {item.total} {item.categoryName.toLowerCase()} questions correctly ({item.percentage}%).
            </p>
          </div>
        );
      })}
    </div>
  );
};
