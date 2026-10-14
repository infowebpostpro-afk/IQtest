'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AssessmentResult, Question } from '@/types/assessment';
import { ScoreCircle } from '@/components/results/ScoreCircle';
import { CategoryBreakdown } from '@/components/results/CategoryBreakdown';
import { AnswerReview } from '@/components/results/AnswerReview';
import { PrintableReport } from '@/components/results/PrintableReport';
import {
  Printer,
  Copy,
  RotateCcw,
  Check,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Brain,
} from 'lucide-react';

interface QuickResultsDashboardProps {
  result: AssessmentResult;
  questions: Question[];
  answers: Record<string, string>;
  onRetake: () => void;
}

export const QuickResultsDashboard: React.FC<QuickResultsDashboardProps> = ({
  result,
  questions,
  answers,
  onRetake,
}) => {
  const [copied, setCopied] = useState(false);
  const [showRetakeWarning, setShowRetakeWarning] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = async () => {
    const summaryText = `Quick IQ Test Assessment Results:
Score: ${result.correctCount} / ${result.totalQuestions}
Accuracy: ${result.accuracyPercentage}%
Time Spent: ${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s
Domain Breakdown:
- Numerical: ${result.categoryScores.numerical.correct}/${result.categoryScores.numerical.total}
- Abstract: ${result.categoryScores.abstract.correct}/${result.categoryScores.abstract.total}
- Logical: ${result.categoryScores.logical.correct}/${result.categoryScores.logical.total}
- Spatial: ${result.categoryScores.spatial.correct}/${result.categoryScores.spatial.total}

Completed on ${new Date(result.completedAt).toLocaleDateString()} (Quick Reasoning Assessment v${result.assessmentVersion})`;

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Failed to copy text', e);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const scrollToReview = () => {
    const el = document.getElementById('quick-answer-review');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8 animate-in fade-in duration-300">
      {/* Printable Report (rendered only during print workflow) */}
      <PrintableReport result={result} />

      {/* Main Results Hero Card */}
      <div className="bg-white rounded-3xl border border-[#E2EAF7] shadow-sm p-6 sm:p-10 no-print">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-100">
          {/* Left: Score Circle */}
          <div className="shrink-0">
            <ScoreCircle
              score={result.correctCount}
              total={result.totalQuestions}
              percentage={result.accuracyPercentage}
            />
          </div>

          {/* Center: Title & Quick Stats */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Assessment Completed</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152F] tracking-tight mb-2">
              Your Quick IQ Test Results
            </h2>

            <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed mb-6">
              You answered <span className="font-bold text-[#07152F]">{result.correctCount}</span> of{' '}
              <span className="font-bold text-[#07152F]">{result.totalQuestions}</span> questions correctly with an overall accuracy of{' '}
              <span className="font-bold text-[#2453FF]">{result.accuracyPercentage}%</span>. Review your reasoning domain breakdown and complete problem explanations below.
            </p>

            {/* 4 Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7]">
                <div className="text-[11px] font-semibold text-[#60718B] flex items-center gap-1 mb-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Correct</span>
                </div>
                <div className="text-lg font-extrabold text-emerald-700">
                  {result.correctCount}
                </div>
              </div>

              <div className="p-3 bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7]">
                <div className="text-[11px] font-semibold text-[#60718B] flex items-center gap-1 mb-1">
                  <XCircle className="w-3 h-3 text-red-600" />
                  <span>Incorrect</span>
                </div>
                <div className="text-lg font-extrabold text-red-700">
                  {result.incorrectCount}
                </div>
              </div>

              <div className="p-3 bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7]">
                <div className="text-[11px] font-semibold text-[#60718B] flex items-center gap-1 mb-1">
                  <HelpCircle className="w-3 h-3 text-amber-600" />
                  <span>Unanswered</span>
                </div>
                <div className="text-lg font-extrabold text-amber-700">
                  {result.unansweredCount}
                </div>
              </div>

              <div className="p-3 bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7]">
                <div className="text-[11px] font-semibold text-[#60718B] flex items-center gap-1 mb-1">
                  <Clock className="w-3 h-3 text-[#2453FF]" />
                  <span>Time</span>
                </div>
                <div className="text-lg font-extrabold text-[#07152F]">
                  {formatTime(result.timeSpentSeconds)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls Toolbar */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={scrollToReview}
              className="px-4 py-2 rounded-xl bg-[#2453FF] hover:bg-[#1B40DF] text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
            >
              Review All Answers
            </button>

            <button
              type="button"
              onClick={() => setShowRetakeWarning(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Test</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print / Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Breakdown Component */}
      <div className="no-print">
        <CategoryBreakdown result={result} />
        <p className="text-[11px] text-[#60718B] mt-2 px-1">
          * Note: Category item counts (2–3 questions per domain) are descriptive and too small to establish stable psychometric sub-scale ability.
        </p>
      </div>

      {/* Full IQ Test Handoff Card */}
      <div className="no-print p-6 sm:p-8 bg-gradient-to-r from-[#07152F] to-[#122A5C] text-white rounded-3xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div
          className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#2453FF]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="space-y-2 max-w-xl z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2453FF]/30 border border-[#2453FF]/40 text-blue-200 text-xs font-bold uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" />
            <span>Recommended Next Step</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Want a Longer Reasoning Challenge?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Take our comprehensive 20-question practice assessment covering all four cognitive reasoning domains with deeper difficulty progressions. Free, anonymous, and instant.
          </p>
        </div>

        <Link
          href="/"
          className="shrink-0 px-6 py-3.5 rounded-full bg-[#2453FF] hover:bg-[#1B40DF] text-white font-extrabold text-sm shadow-md hover:shadow-xl active:scale-[0.98] transition-all inline-flex items-center gap-2 z-10 group"
        >
          <span>Take the Full IQ Test</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Comprehensive Answer Review (Explanations for all 10 questions) */}
      <div id="quick-answer-review" className="no-print">
        <AnswerReview questions={questions} answers={answers} />
      </div>

      {/* Retake Confirmation Modal */}
      {showRetakeWarning && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-7">
            <h3 className="text-lg font-bold text-[#07152F] mb-2">
              Retake Quick IQ Test?
            </h3>
            <p className="text-xs sm:text-sm text-[#60718B] mb-6 leading-relaxed">
              Retaking the assessment will clear your current answers and restart Question 1. Are you sure you want to proceed?
            </p>
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowRetakeWarning(false)}
                className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowRetakeWarning(false);
                  onRetake();
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#2453FF] hover:bg-[#1B40DF] rounded-xl transition-colors cursor-pointer"
              >
                Yes, Retake Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
