'use client';

import React, { useState } from 'react';
import { Question } from '@/types/assessment';
import { VisualSvgRenderer } from '../assessment/VisualSvgRenderer';
import { CATEGORY_LABELS } from '@/lib/assessment/scoring';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Filter,
} from 'lucide-react';

interface AnswerReviewProps {
  questions: Question[];
  answers: Record<string, string>;
}

export const AnswerReview: React.FC<AnswerReviewProps> = ({
  questions,
  answers,
}) => {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'unanswered' | 'correct'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getQuestionStatus = (q: Question) => {
    const selected = answers[q.id];
    if (!selected) return 'unanswered';
    if (selected === q.correctOptionId) return 'correct';
    return 'incorrect';
  };

  const filteredQuestions = questions.filter((q) => {
    const status = getQuestionStatus(q);
    if (filter === 'all') return true;
    return status === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs p-5 sm:p-8">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Comprehensive Answer Review
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Detailed step-by-step logic and explanations for all 20 problems
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All (20)
          </button>
          <button
            type="button"
            onClick={() => setFilter('correct')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'correct'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-emerald-700'
            }`}
          >
            Correct
          </button>
          <button
            type="button"
            onClick={() => setFilter('incorrect')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'incorrect'
                ? 'bg-red-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-red-700'
            }`}
          >
            Incorrect
          </button>
          <button
            type="button"
            onClick={() => setFilter('unanswered')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filter === 'unanswered'
                ? 'bg-amber-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-amber-700'
            }`}
          >
            Unanswered
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-slate-100 mt-2">
        {filteredQuestions.map((q, index) => {
          const status = getQuestionStatus(q);
          const selectedOption = q.options.find((opt) => opt.id === answers[q.id]);
          const correctOption = q.options.find((opt) => opt.id === q.correctOptionId);
          const isExpanded = expandedId === q.id;

          return (
            <div key={q.id} className="py-4">
              <button
                type="button"
                onClick={() => toggleExpand(q.id)}
                className="w-full text-left flex items-start sm:items-center justify-between gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                  {/* Status Icon */}
                  <div className="mt-0.5 sm:mt-0 shrink-0">
                    {status === 'correct' && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    )}
                    {status === 'incorrect' && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    {status === 'unanswered' && (
                      <HelpCircle className="w-5 h-5 text-amber-500" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-800">
                        Question {questions.indexOf(q) + 1}
                      </span>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {CATEGORY_LABELS[q.category]}
                      </span>
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wider ${
                          status === 'correct'
                            ? 'text-emerald-700'
                            : status === 'incorrect'
                            ? 'text-red-700'
                            : 'text-amber-700'
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 font-medium line-clamp-1">
                      {q.prompt.split('\n')[0]}
                    </p>
                  </div>
                </div>

                <div className="p-1 rounded-lg text-slate-400">
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Expanded Detail Panel */}
              {isExpanded && (
                <div className="mt-3 pl-8 sm:pl-10 pr-2 pt-2 pb-4 space-y-4 animate-in fade-in duration-150">
                  {/* Full Prompt */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-sm text-slate-900 font-medium whitespace-pre-line leading-relaxed">
                      {q.prompt}
                    </p>
                  </div>

                  {/* Visual Stimulus if present */}
                  {q.visualAsset && (
                    <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-200 max-w-md">
                      <VisualSvgRenderer asset={q.visualAsset} />
                    </div>
                  )}

                  {/* Answers Comparison */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {/* User Selected */}
                    <div
                      className={`p-3 rounded-xl border ${
                        status === 'correct'
                          ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                          : status === 'incorrect'
                          ? 'bg-red-50/60 border-red-200 text-red-900'
                          : 'bg-amber-50/60 border-amber-200 text-amber-900'
                      }`}
                    >
                      <span className="font-semibold block mb-1">
                        Your Selected Answer:
                      </span>
                      {selectedOption ? (
                        <span>
                          [{selectedOption.id}] {selectedOption.label}
                        </span>
                      ) : (
                        <span className="italic">Unanswered / Skipped</span>
                      )}
                    </div>

                    {/* Correct Answer */}
                    <div className="p-3 rounded-xl border bg-emerald-50/60 border-emerald-200 text-emerald-900">
                      <span className="font-semibold block mb-1">
                        Correct Answer:
                      </span>
                      <span>
                        [{correctOption?.id}] {correctOption?.label}
                      </span>
                    </div>
                  </div>

                  {/* Step-by-Step Explanation */}
                  <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 block mb-1">
                      Reasoning &amp; Solution Method
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
