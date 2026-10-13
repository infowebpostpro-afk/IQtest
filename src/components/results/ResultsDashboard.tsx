'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AssessmentResult, Question } from '@/types/assessment';
import { ScoreCircle } from './ScoreCircle';
import { CategoryBreakdown } from './CategoryBreakdown';
import { AnswerReview } from './AnswerReview';
import { PrintableReport } from './PrintableReport';
import {
  Printer,
  Copy,
  RotateCcw,
  Check,
  AlertCircle,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldAlert,
} from 'lucide-react';

interface ResultsDashboardProps {
  result: AssessmentResult;
  questions: Question[];
  answers: Record<string, string>;
  onRetake: () => void;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
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
    const summaryText = `IQ Test Assessment Result:
Raw Score: ${result.correctCount} / ${result.totalQuestions}
Accuracy: ${result.accuracyPercentage}%
Time Spent: ${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s
Domain Breakdown:
- Numerical: ${result.categoryScores.numerical.correct}/${result.categoryScores.numerical.total} (${result.categoryScores.numerical.percentage}%)
- Logical: ${result.categoryScores.logical.correct}/${result.categoryScores.logical.total} (${result.categoryScores.logical.percentage}%)
- Abstract: ${result.categoryScores.abstract.correct}/${result.categoryScores.abstract.total} (${result.categoryScores.abstract.percentage}%)
- Spatial: ${result.categoryScores.spatial.correct}/${result.categoryScores.spatial.total} (${result.categoryScores.spatial.percentage}%)

Completed on ${new Date(result.completedAt).toLocaleDateString()} (Practice Assessment v${result.assessmentVersion})`;

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

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8 animate-in fade-in duration-300">
      {/* Printable Report (rendered only during print workflow) */}
      <PrintableReport result={result} />

      {/* Screen Dashboard Header Card */}
      <div className="bg-white rounded-3xl border border-[#E4EAF3] shadow-sm p-6 sm:p-10 no-print">
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] tracking-tight mb-2">
              Assessment Results
            </h2>
            <p className="text-xs sm:text-sm text-[#526179] leading-relaxed mb-6">
              You answered {result.correctCount} of {result.totalQuestions} questions correctly. Review your cognitive domain performance and full question explanations below.
            </p>

            {/* Stat Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block">Correct</span>
                <span className="text-base font-extrabold text-emerald-600">
                  {result.correctCount}
                </span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block">Incorrect</span>
                <span className="text-base font-extrabold text-red-600">
                  {result.incorrectCount}
                </span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block">Unanswered</span>
                <span className="text-base font-extrabold text-amber-600">
                  {result.unansweredCount}
                </span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block">Time</span>
                <span className="text-base font-extrabold text-slate-800">
                  {formatTime(result.timeSpentSeconds)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-[#E4EAF3] hover:bg-slate-50 shadow-2xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-[#E4EAF3] hover:bg-slate-50 shadow-2xs transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Result Summary</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-[#E4EAF3] hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <span>← Return to Homepage</span>
            </Link>

            <button
              type="button"
              onClick={() => setShowRetakeWarning(true)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#5546F5] hover:bg-[#4338CA] shadow-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Test</span>
            </button>
          </div>
        </div>
      </div>

      {/* Domain Breakdown */}
      <div className="no-print space-y-3">
        <h3 className="text-lg font-bold text-[#0B1220]">
          Cognitive Domain Performance
        </h3>
        <CategoryBreakdown result={result} />
      </div>

      {/* Answer Review */}
      <div className="no-print">
        <AnswerReview questions={questions} answers={answers} />
      </div>

      {/* Retake Warning Modal */}
      {showRetakeWarning && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#E4EAF3] p-6 sm:p-7">
            <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] text-[#5546F5] border border-indigo-100 flex items-center justify-center mb-4">
              <RotateCcw className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-[#0B1220] mb-2">
              Retake Assessment Practice?
            </h3>

            <p className="text-xs sm:text-sm text-[#526179] mb-5 leading-relaxed">
              <span className="font-bold text-[#0B1220]">Note:</span> Repeating the exact same 20 questions may improve your score through familiarity and memory rather than raw reasoning ability. This assessment form (v1.0.0) contains a fixed set of reviewed questions.
            </p>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowRetakeWarning(false)}
                className="px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowRetakeWarning(false);
                  onRetake();
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-[#5546F5] hover:bg-[#4338CA] rounded-xl shadow-xs transition-colors"
              >
                Restart Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
