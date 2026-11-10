'use client';

import React, { useState } from 'react';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Layers,
  ShieldAlert,
} from 'lucide-react';
import Link from 'next/link';
import {
  BaseSpatialQuestion,
  SpatialAssessmentResult,
  SPATIAL_CATEGORIES,
} from '@/lib/spatial/types';
import { SpatialSvgRenderer } from './SpatialSvgRenderer';

interface SpatialResultsDashboardProps {
  result: SpatialAssessmentResult;
  questions: BaseSpatialQuestion[];
  onRetake: () => void;
}

export const SpatialResultsDashboard: React.FC<SpatialResultsDashboardProps> = ({
  result,
  questions,
  onRetake,
}) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(
    questions[0]?.id || null
  );

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] py-10 sm:py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Results Banner */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-sm mb-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF4FF] text-[#2453FF] text-xs font-bold uppercase tracking-wider mb-4">
            Practice Assessment Completed
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#07152F] tracking-tight mb-2">
            Your Spatial Reasoning Results
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] max-w-xl mx-auto mb-8">
            Review your overall accuracy and category-level breakdown across mental rotation, cube
            folding, reflections, paper folding, views, and block counting.
          </p>

          {/* Primary Score Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-left">
            <div className="p-4 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                Score
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-[#07152F]">
                {result.correctCount}{' '}
                <span className="text-sm font-semibold text-[#64748B]">
                  / {result.totalQuestions}
                </span>
              </span>
            </div>

            <div className="p-4 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                Accuracy
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-[#2453FF]">
                {result.accuracyPercentage}%
              </span>
            </div>

            <div className="p-4 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                Time Spent
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-[#07152F]">
                {formatTime(result.timeSpentSeconds)}
              </span>
            </div>

            <div className="p-4 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                Unanswered
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-[#64748B]">
                {result.unansweredCount}
              </span>
            </div>
          </div>

          {/* Explicit Scientific Disclaimer */}
          <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2EAF7] text-left text-xs text-[#475569] leading-relaxed mb-8 flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
            <span>
              <strong>Practice Notice:</strong> This result reflects your accuracy on this practice
              assessment. It is not a standardized IQ score or an official employment-test result.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onRetake}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] shadow-xs active:scale-[0.98] transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 stroke-[2.5]" />
              <span>Retake Test with New Questions</span>
            </button>

            <Link
              href="/abstract-reasoning-test"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold text-[#07152F] bg-white border border-[#E2EAF7] hover:bg-[#EEF4FF] shadow-xs transition-all"
            >
              <span>Explore Abstract Reasoning Test</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Performance Breakdown */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-sm mb-10 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-[#07152F] mb-6">
            Domain Accuracy Breakdown
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {result.categoryScores.map((catScore) => {
              const meta = SPATIAL_CATEGORIES[catScore.category];
              return (
                <div
                  key={catScore.category}
                  className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#07152F]">
                      {meta?.name || catScore.categoryName}
                    </span>
                    <span className="text-xs font-extrabold text-[#2453FF]">
                      {catScore.correct} / {catScore.total} ({catScore.percentage}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#E2EAF7] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#2453FF] to-[#3B66FF] rounded-full"
                      style={{ width: `${catScore.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step-by-Step Worked Visual Explanations */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-black text-[#07152F]">
              Question-by-Question Worked Solutions
            </h3>
            <span className="text-xs text-[#64748B]">Click any question to view its solution</span>
          </div>

          <div className="space-y-4">
            {questions.map((q, idx) => {
              const userAns = result.answers[q.id];
              const isCorrect = userAns === q.correctOptionId;
              const isExpanded = expandedQuestionId === q.id;

              return (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl border border-[#E2EAF7] overflow-hidden shadow-xs transition-all"
                >
                  {/* Card Collapsible Header */}
                  <button
                    type="button"
                    onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#F8FBFF] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-700'
                            : userAns
                            ? 'bg-red-100 text-red-600'
                            : 'bg-gray-100 text-[#64748B]'
                        }`}
                      >
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <XCircle className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#64748B] block">
                          Question {idx + 1} • {SPATIAL_CATEGORIES[q.category]?.shortName}
                        </span>
                        <span className="text-sm font-bold text-[#07152F] line-clamp-1">
                          {q.prompt}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right hidden sm:block">
                        <span className="text-xs font-semibold block text-[#64748B]">
                          Your answer:{' '}
                          <strong className={isCorrect ? 'text-emerald-700' : 'text-red-600'}>
                            {userAns || 'Unanswered'}
                          </strong>
                        </span>
                        <span className="text-xs text-[#64748B]">
                          Correct: <strong className="text-[#2453FF]">{q.correctOptionId}</strong>
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-[#64748B]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#64748B]" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Body: Worked walkthrough */}
                  {isExpanded && (
                    <div className="p-5 sm:p-6 border-t border-[#E2EAF7] bg-[#F8FBFF]/60 space-y-6">
                      {/* Diagram Comparison Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Stimulus */}
                        <div className="bg-white p-4 rounded-xl border border-[#E2EAF7]">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-2">
                            Given Stimulus
                          </span>
                          <SpatialSvgRenderer scene={q.stimulusScene} maxHeight="180px" />
                        </div>

                        {/* Correct Option */}
                        <div className="bg-white p-4 rounded-xl border border-[#2453FF]/30 ring-1 ring-[#2453FF]/20">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#2453FF] block mb-2">
                            Correct Answer: Option {q.correctOptionId}
                          </span>
                          {(() => {
                            const correctOpt = q.options.find(
                              (opt) => opt.id === q.correctOptionId
                            );
                            return correctOpt ? (
                              <SpatialSvgRenderer scene={correctOpt.scene} maxHeight="180px" />
                            ) : null;
                          })()}
                        </div>
                      </div>

                      {/* Rule Explanation */}
                      <div className="p-4 bg-white rounded-xl border border-[#E2EAF7]">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#2453FF] mb-1">
                          Geometric Solution Rule
                        </h4>
                        <p className="text-xs sm:text-sm text-[#07152F] leading-relaxed">
                          {q.ruleExplanation}
                        </p>
                      </div>

                      {/* Step-by-Step Breakdown */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                          Step-by-Step Deductive Breakdown
                        </h4>
                        {q.explanationSteps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 bg-white rounded-xl border border-[#E2EAF7] text-xs space-y-1"
                          >
                            <span className="font-bold text-[#07152F] block">{step.title}</span>
                            <p className="text-[#64748B] leading-relaxed">{step.description}</p>
                            {step.keyRule && (
                              <span className="inline-block px-2 py-0.5 rounded bg-[#EEF4FF] text-[#2453FF] font-medium text-[11px] mt-1">
                                {step.keyRule}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Distractor Analysis */}
                      <div className="p-4 bg-white rounded-xl border border-[#E2EAF7]">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                          Distractor Option Breakdown
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#64748B]">
                          {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                            if (optKey === q.correctOptionId) return null;
                            return (
                              <li key={optKey} className="leading-relaxed">
                                <strong className="text-[#07152F]">Option {optKey}:</strong>{' '}
                                {q.distractorExplanations[optKey]}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

