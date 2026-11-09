'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LogicalAssessmentResult, LogicalCategory } from '@/lib/assessment/logicalScoring';
import { LogicalQuestion, LOGICAL_CATEGORY_LABELS } from '@/data/logicalQuestions';
import {
  Printer,
  Copy,
  RotateCcw,
  Check,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  ChevronDown,
  Filter,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface LogicalResultsDashboardProps {
  result: LogicalAssessmentResult;
  questions: LogicalQuestion[];
  answers: Record<string, string>;
  flaggedQuestionIds?: string[];
  onRetake: () => void;
}

export const LogicalResultsDashboard: React.FC<LogicalResultsDashboardProps> = ({
  result,
  questions,
  answers,
  flaggedQuestionIds = [],
  onRetake,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'incorrect' | 'correct' | 'unanswered' | 'flagged'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = async () => {
    const summary = `Logical Reasoning Test Result:
Raw Score: ${result.correctCount} / ${result.totalQuestions}
Accuracy: ${result.accuracyPercentage}%
Time Spent: ${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s
Category Breakdown:
- Deductive Reasoning: ${result.categoryScores.deductive.correct}/${result.categoryScores.deductive.total} (${result.categoryScores.deductive.percentage}%)
- Conditional Logic: ${result.categoryScores.conditional.correct}/${result.categoryScores.conditional.total} (${result.categoryScores.conditional.percentage}%)
- Ordering & Arrangement: ${result.categoryScores.ordering.correct}/${result.categoryScores.ordering.total} (${result.categoryScores.ordering.percentage}%)
- Inductive Sequences: ${result.categoryScores.inductive.correct}/${result.categoryScores.inductive.total} (${result.categoryScores.inductive.percentage}%)

Completed on ${new Date(result.completedAt).toLocaleDateString()} (Practice Assessment v${result.assessmentVersion})`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  // Derive simple educational recommendation based on weakest category
  const getRecommendation = () => {
    const scores = [
      { key: 'deductive', label: 'Deductive Reasoning & Syllogisms', pct: result.categoryScores.deductive.percentage, tip: 'Practise syllogisms with set-inclusion diagrams (Euler/Venn diagrams) to distinguish between what is logically guaranteed and what is merely possible.' },
      { key: 'conditional', label: 'Conditional Logic', pct: result.categoryScores.conditional.percentage, tip: 'Review conditional logic rules, specifically distinguishing necessary conditions ("only if") from sufficient triggers ("if"), and practicing contrapositives.' },
      { key: 'ordering', label: 'Ordering & Arrangement', pct: result.categoryScores.ordering.percentage, tip: 'Draw numbered position grids on scratch paper and fix absolute constraints first before placing relative adjacent blocks.' },
      { key: 'inductive', label: 'Inductive Sequences', pct: result.categoryScores.inductive.percentage, tip: 'Examine second-order differences and alternating operations when analyzing number and letter progressions.' },
    ];

    scores.sort((a, b) => a.pct - b.pct);
    const lowest = scores[0];

    if (result.accuracyPercentage === 100) {
      return {
        title: 'Outstanding Performance!',
        text: 'You solved every question correctly across all four categories. For further practice, explore spatial and numerical problem sets.',
      };
    }

    return {
      title: `Recommended Focus: ${lowest.label}`,
      text: lowest.tip,
    };
  };

  const recommendation = getRecommendation();

  const filteredQuestions = questions.filter((q) => {
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.correctOptionId;
    const isAnswered = !!userAnswer;
    const isFlagged = flaggedQuestionIds.includes(q.id);

    if (selectedFilter === 'incorrect') return isAnswered && !isCorrect;
    if (selectedFilter === 'correct') return isCorrect;
    if (selectedFilter === 'unanswered') return !isAnswered;
    if (selectedFilter === 'flagged') return isFlagged;
    return true;
  });

  const scrollToReview = () => {
    const el = document.getElementById('comprehensive-answer-review');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 sm:py-10 px-4 sm:px-6 space-y-8">
      {/* Top Banner with Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E2EAF7] no-print">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2453FF] bg-[#EEF2FF] px-3 py-1 rounded-full border border-blue-100">
            Assessment Completed
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#07152F] mt-1.5">
            Your Logical Reasoning Results
          </h2>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={scrollToReview}
            className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>Review Answers</span>
          </button>

          <button
            type="button"
            onClick={handleCopySummary}
            className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copied!' : 'Copy Results'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print Report</span>
          </button>

          <button
            type="button"
            onClick={onRetake}
            className="px-4 py-2 rounded-xl bg-[#2453FF] hover:bg-[#1B40DF] text-xs font-bold text-white transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Test</span>
          </button>
        </div>
      </div>

      {/* Main Score Overview Card */}
      <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_12px_36px_rgba(7,21,47,0.05)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Radial Accuracy Indicator */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-[#F8FBFF] to-white rounded-2xl border border-blue-100/70">
            <div className="relative w-36 h-36 rounded-full flex flex-col items-center justify-center border-8 border-[#2453FF] shadow-inner mb-3">
              <span className="font-heading text-4xl font-black text-[#07152F] tracking-tight">
                {result.accuracyPercentage}%
              </span>
              <span className="text-[10px] font-extrabold text-[#64748B] tracking-wider uppercase mt-0.5">
                Accuracy
              </span>
            </div>
            <div className="text-sm font-bold text-[#07152F] mb-0.5">
              Raw Score: {result.correctCount} of {result.totalQuestions} Correct
            </div>
            <div className="text-xs text-[#64748B]">
              Time Elapsed: {Math.floor(result.timeSpentSeconds / 60)}m {result.timeSpentSeconds % 60}s
            </div>
          </div>

          {/* 4 Diagnostic Metrics */}
          <div className="md:col-span-7 grid grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-[#64748B] mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Correct</span>
              </div>
              <div className="font-heading text-2xl font-black text-emerald-600">
                {result.correctCount}
              </div>
              <span className="text-[11px] text-[#64748B]">Earned 1 point each</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-[#64748B] mb-1">
                <XCircle className="w-4 h-4 text-red-600" />
                <span>Incorrect</span>
              </div>
              <div className="font-heading text-2xl font-black text-red-600">
                {result.incorrectCount}
              </div>
              <span className="text-[11px] text-[#64748B]">0 points deducted</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-[#64748B] mb-1">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                <span>Unanswered</span>
              </div>
              <div className="font-heading text-2xl font-black text-slate-700">
                {result.unansweredCount}
              </div>
              <span className="text-[11px] text-[#64748B]">Marked incomplete</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-[#64748B] mb-1">
                <Clock className="w-4 h-4 text-[#2453FF]" />
                <span>Avg. Pace</span>
              </div>
              <div className="font-heading text-2xl font-black text-[#07152F]">
                {Math.round(result.timeSpentSeconds / result.totalQuestions)}s
              </div>
              <span className="text-[11px] text-[#64748B]">Per question</span>
            </div>
          </div>
        </div>

        {/* Educational Recommendation Box (Section 17) */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-900 block mb-0.5">{recommendation.title}</span>
            <span className="text-amber-800 leading-relaxed">{recommendation.text}</span>
          </div>
        </div>

        {/* Ethical psychometric disclosure banner */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-[#64748B] leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-[#2453FF] shrink-0 mt-0.5" />
          <span>
            <strong>Practice Assessment Result:</strong> This score reflects your performance on these 20 practice questions. It is unnormed against representative demographic groups and does not constitute a standardized clinical IQ or official employment screening credential.
          </span>
        </div>
      </div>

      {/* Category Breakdown Cards */}
      <div className="space-y-4">
        <h3 className="font-heading text-xl font-black text-[#07152F]">
          Performance by Reasoning Domain
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(['deductive', 'conditional', 'ordering', 'inductive'] as const).map((catKey) => {
            const cat = result.categoryScores[catKey];
            return (
              <div key={catKey} className="p-5 bg-white rounded-2xl border border-[#E2EAF7] shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-[#07152F]">{cat.categoryName}</span>
                  <span className="font-heading text-sm font-black text-[#2453FF]">
                    {cat.correct} / {cat.total}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-2">
                  <div
                    className="bg-[#2453FF] h-full rounded-full transition-all duration-500"
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span>{cat.percentage}% Accuracy</span>
                  <span>{cat.total} Questions</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cross-Link CTA: Practise More Questions */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-50/70 to-indigo-50/50 border border-blue-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-black text-base text-[#07152F] mb-1">
            Want to practise more cognitive problem types?
          </h4>
          <p className="text-xs text-[#60718B]">
            Work through numerical sequences, abstract spatial rotations, and verbal analogy puzzles with instant feedback.
          </p>
        </div>
        <Link
          href="/iq-practice-questions/"
          className="px-5 py-2.5 rounded-xl bg-[#2453FF] hover:bg-[#1B40DF] text-white font-extrabold text-xs shadow-xs transition-all flex items-center gap-1.5 shrink-0"
        >
          <span>Practise More Questions</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Question-by-Question Detailed Review (Section 18) */}
      <div id="comprehensive-answer-review" className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <h3 className="font-heading text-xl font-black text-[#07152F]">
              Comprehensive Answer Review
            </h3>
            <p className="text-xs text-[#64748B]">
              Inspect detailed logical walkthroughs, step-by-step proofs, and governing rules.
            </p>
          </div>

          {/* Filter Pills (Section 18) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-bold flex-wrap">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'all' ? 'bg-white text-[#2453FF] shadow-2xs' : 'text-[#64748B]'
              }`}
            >
              All (20)
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('incorrect')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'incorrect' ? 'bg-white text-red-600 shadow-2xs' : 'text-[#64748B]'
              }`}
            >
              Incorrect ({result.incorrectCount})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('correct')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'correct' ? 'bg-white text-emerald-600 shadow-2xs' : 'text-[#64748B]'
              }`}
            >
              Correct ({result.correctCount})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('unanswered')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'unanswered' ? 'bg-white text-slate-700 shadow-2xs' : 'text-[#64748B]'
              }`}
            >
              Unanswered ({result.unansweredCount})
            </button>
            {flaggedQuestionIds.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedFilter('flagged')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedFilter === 'flagged' ? 'bg-white text-amber-600 shadow-2xs' : 'text-[#64748B]'
                }`}
              >
                Flagged ({flaggedQuestionIds.length})
              </button>
            )}
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctOptionId;
            const isAnswered = !!userAnswer;
            const isExpanded = expandedQuestionId === q.id;

            return (
              <div
                key={q.id}
                className={`p-5 rounded-2xl border transition-all ${
                  !isAnswered
                    ? 'bg-slate-50/60 border-slate-200'
                    : isCorrect
                    ? 'bg-white border-slate-200'
                    : 'bg-red-50/20 border-red-200/70'
                }`}
              >
                <div
                  onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                  className="flex items-start justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        !isAnswered
                          ? 'bg-slate-200 text-slate-700'
                          : isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {!isAnswered ? '—' : isCorrect ? '✓' : '✕'}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#07152F]">
                          Question {questions.findIndex((item) => item.id === q.id) + 1}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-[#475569]">
                          {LOGICAL_CATEGORY_LABELS[q.category]}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-[#07152F] leading-snug">
                        {q.prompt.split('\n')[0]}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Expanded Answer Key & Step-by-Step Logic */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-3.5 text-xs text-[#475569]">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 whitespace-pre-line text-[#07152F] font-medium leading-relaxed">
                      {q.prompt}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt) => {
                        const isChosen = userAnswer === opt.id;
                        const isRight = opt.id === q.correctOptionId;
                        return (
                          <div
                            key={opt.id}
                            className={`p-2.5 rounded-xl border flex items-center justify-between ${
                              isRight
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                                : isChosen
                                ? 'bg-red-50 border-red-300 text-red-950 font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-600'
                            }`}
                          >
                            <span>
                              {opt.id}: {opt.label}
                            </span>
                            {isRight && <span className="text-[10px] text-emerald-700 shrink-0 ml-2">Correct Answer</span>}
                            {isChosen && !isRight && <span className="text-[10px] text-red-700 shrink-0 ml-2">Your Choice</span>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Step-by-Step Reasoning Steps */}
                    <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 text-[#07152F]">
                      <strong className="block text-[#2453FF] text-[11px] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Step-by-Step Proof:</span>
                      </strong>
                      <ul className="space-y-1.5 mb-3 text-xs leading-relaxed">
                        {q.reasoningSteps.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-blue-200 text-[#2453FF] flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
                              {sIdx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>

                      {q.commonMistake && (
                        <div className="pt-2.5 border-t border-blue-200/60 text-[11px] text-[#475569]">
                          <strong className="text-amber-800">Common Pitfall: </strong>
                          <span>{q.commonMistake}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
