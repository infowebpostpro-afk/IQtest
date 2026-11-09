'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AbstractAssessmentResult, AbstractCategoryScore } from '@/lib/assessment/abstractScoring';
import { AbstractQuestion, AbstractCategory } from '@/types/abstractAssessment';
import { ABSTRACT_CATEGORY_LABELS } from '@/data/abstractQuestions';
import { PuzzleDiagramRenderer } from './PuzzleDiagramRenderer';
import { SvgElementRenderer } from './AbstractSvgPrimitives';
import { PuzzleZoomDialog } from './PuzzleZoomDialog';
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
  Maximize2,
  Eye,
} from 'lucide-react';

interface AbstractResultsDashboardProps {
  result: AbstractAssessmentResult;
  questions: AbstractQuestion[];
  answers: Record<string, string>;
  flaggedQuestionIds?: string[];
  onRetake: () => void;
  onSwitchToLearnMode: () => void;
}

export const AbstractResultsDashboard: React.FC<AbstractResultsDashboardProps> = ({
  result,
  questions,
  answers = {},
  flaggedQuestionIds = [],
  onRetake,
  onSwitchToLearnMode,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'incorrect' | 'correct' | 'unanswered' | 'flagged'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const [activeZoomQuestion, setActiveZoomQuestion] = useState<AbstractQuestion | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = async () => {
    const summary = `Abstract Reasoning Test Results:
Score: ${result.correctCount} / ${result.totalQuestions}
Accuracy: ${result.accuracyPercentage}%
Time Spent: ${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s
Domain Breakdown:
- Figure Sequences: ${result.categoryScores.sequences.correct}/${result.categoryScores.sequences.total} (${result.categoryScores.sequences.percentage}%)
- Matrix Reasoning: ${result.categoryScores.matrices.correct}/${result.categoryScores.matrices.total} (${result.categoryScores.matrices.percentage}%)
- Odd One Out: ${result.categoryScores.odd_one_out.correct}/${result.categoryScores.odd_one_out.total} (${result.categoryScores.odd_one_out.percentage}%)
- Visual Analogies: ${result.categoryScores.analogies.correct}/${result.categoryScores.analogies.total} (${result.categoryScores.analogies.percentage}%)

Completed on ${new Date(result.completedAt).toLocaleDateString()} (Visual Abstract Assessment v${result.assessmentVersion})`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const getRecommendation = () => {
    const scores = [
      {
        key: 'sequences' as AbstractCategory,
        label: 'Figure Sequences',
        pct: result.categoryScores.sequences.percentage,
        tip: 'Look for single-variable changes first (e.g. rotation angles, number of elements) before analyzing combined movements.',
      },
      {
        key: 'matrices' as AbstractCategory,
        label: 'Matrix Reasoning',
        pct: result.categoryScores.matrices.percentage,
        tip: 'Scan matrices both horizontally (row-by-row) and vertically (column-by-column). Look for element addition, subtraction, or alternating states.',
      },
      {
        key: 'odd_one_out' as AbstractCategory,
        label: 'Odd One Out',
        pct: result.categoryScores.odd_one_out.percentage,
        tip: 'Apply the Five-Feature Scan: test symmetry, element counts, and shading consistency to isolate the unique anomaly.',
      },
      {
        key: 'analogies' as AbstractCategory,
        label: 'Visual Analogies',
        pct: result.categoryScores.analogies.percentage,
        tip: 'Clearly articulate the precise transformation rule between Figure A and Figure B in words, then apply that exact rule to Figure C.',
      },
    ];

    scores.sort((a, b) => a.pct - b.pct);
    const lowest = scores[0];

    if (result.accuracyPercentage === 100) {
      return {
        title: 'Flawless Visual Reasoning!',
        text: 'You correctly identified every geometric pattern, matrix transformation, and visual analogy across all 20 puzzles.',
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
    const isUnanswered = !userAnswer;
    const isFlagged = flaggedQuestionIds.includes(q.id);

    if (selectedFilter === 'incorrect') return userAnswer && !isCorrect;
    if (selectedFilter === 'correct') return isCorrect;
    if (selectedFilter === 'unanswered') return isUnanswered;
    if (selectedFilter === 'flagged') return isFlagged;
    return true;
  });

  const minutes = Math.floor(result.timeSpentSeconds / 60);
  const seconds = result.timeSpentSeconds % 60;
  const timeFormatted = `${minutes}m ${seconds}s`;

  // Stroke dash array for accuracy circle (circumference = 2 * PI * 42 ~= 263.89)
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (result.accuracyPercentage / 100) * circumference;

  return (
    <div className="min-h-screen bg-slate-50/70 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-sm print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Abstract Reasoning Assessment Completed
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Primary Score Card (Matching User Reference Image 4) */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm text-center">
          {/* Animated Accuracy Donut */}
          <div className="relative w-36 h-36 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="text-slate-100"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="text-indigo-600 transition-all duration-1000 ease-out"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-slate-900 leading-none">
                {result.correctCount}
                <span className="text-base font-normal text-slate-400">/{result.totalQuestions}</span>
              </div>
              <div className="text-xs font-bold text-indigo-600 mt-1">
                {result.accuracyPercentage}% Accuracy
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Assessment Completed</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
            Visual Assessment Results
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
            You solved {result.correctCount} of {result.totalQuestions} visual reasoning puzzles correctly.
            Review your geometric pattern domain performance and detailed step-by-step explanations below.
          </p>

          {/* 4 Stat Cards (Correct, Incorrect, Unanswered, Time) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/70">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Correct</div>
              <div className="text-2xl font-black text-emerald-600 mt-0.5">{result.correctCount}</div>
            </div>
            <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/70">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Incorrect</div>
              <div className="text-2xl font-black text-rose-600 mt-0.5">{result.incorrectCount}</div>
            </div>
            <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/70">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Unanswered</div>
              <div className="text-2xl font-black text-amber-600 mt-0.5">{result.unansweredCount}</div>
            </div>
            <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/70">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Time Spent</div>
              <div className="text-2xl font-black text-slate-700 mt-0.5">{timeFormatted}</div>
            </div>
          </div>
        </div>

        {/* Category Performance Breakdown */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-1">
            Performance by Visual Reasoning Category
          </h2>
          <p className="text-xs text-slate-500 mb-5">
            Identify which visual transformation styles you solved most accurately.
          </p>

          <div className="space-y-4">
            {(Object.values(result.categoryScores) as AbstractCategoryScore[]).map((cat) => (
              <div key={cat.category} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-slate-800">{cat.categoryName}</span>
                  <span className="text-slate-600">
                    <span className="font-bold text-slate-900">{cat.correct}</span> / {cat.total}{' '}
                    <span className="text-slate-400 font-normal">({cat.percentage}%)</span>
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      cat.percentage >= 75
                        ? 'bg-emerald-500'
                        : cat.percentage >= 50
                        ? 'bg-indigo-500'
                        : 'bg-amber-500'
                    }`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Educational Recommendation Callout */}
          <div className="mt-6 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-indigo-950 block mb-0.5">
                {recommendation.title}
              </span>
              <p className="text-indigo-900/90 leading-relaxed">{recommendation.text}</p>
            </div>
          </div>
        </div>

        {/* Action Retake / Learn Mode Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:hidden">
          <button
            onClick={onSwitchToLearnMode}
            className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-sm transition-all text-left flex items-center justify-between group"
          >
            <div>
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-0.5">
                Targeted Practice
              </div>
              <div className="text-base font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                Practise in Learn Mode
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Instant check answer, step-by-step logic, and 5-feature scan.
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
          </button>

          <button
            onClick={onRetake}
            className="p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 transition-all text-left flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-bold text-indigo-200 uppercase tracking-wider mb-0.5">
                Assessment
              </div>
              <div className="text-base font-black">Retake Test</div>
              <div className="text-xs text-indigo-100 mt-0.5">
                Try again under untimed or timed conditions.
              </div>
            </div>
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Question-by-Question Visual Answer Review */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Comprehensive Visual Review</h2>
              <p className="text-xs text-slate-500">
                Inspect every stimulus diagram, your selected option, and full worked explanations.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
              {(
                [
                  { id: 'all', label: `All (${questions.length})` },
                  { id: 'incorrect', label: `Incorrect (${result.incorrectCount})` },
                  { id: 'correct', label: `Correct (${result.correctCount})` },
                  { id: 'unanswered', label: `Skipped (${result.unansweredCount})` },
                  { id: 'flagged', label: `Flagged (${flaggedQuestionIds.length})` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-2.5 py-1 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    selectedFilter === tab.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              No questions found under this filter.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((q, idx) => {
                const userAnswer = answers[q.id];
                const isCorrect = userAnswer === q.correctOptionId;
                const isUnanswered = !userAnswer;
                const isExpanded = expandedQuestionId === q.id;

                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border transition-all ${
                      isCorrect
                        ? 'border-emerald-200 bg-emerald-50/20'
                        : isUnanswered
                        ? 'border-slate-200 bg-slate-50/50'
                        : 'border-rose-200 bg-rose-50/20'
                    }`}
                  >
                    {/* Header Bar */}
                    <div
                      onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                      className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span
                          className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                            isCorrect
                              ? 'bg-emerald-500 text-white'
                              : isUnanswered
                              ? 'bg-slate-200 text-slate-600'
                              : 'bg-rose-500 text-white'
                          }`}
                        >
                          {questions.findIndex((item) => item.id === q.id) + 1}
                        </span>

                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                          {ABSTRACT_CATEGORY_LABELS[q.category]}
                        </span>

                        <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                          {q.prompt}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            isCorrect
                              ? 'bg-emerald-100 text-emerald-800'
                              : isUnanswered
                              ? 'bg-slate-100 text-slate-600'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isCorrect ? 'Correct' : isUnanswered ? 'Skipped' : 'Incorrect'}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isExpanded ? 'transform rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>

                    {/* Expandable Review Details */}
                    {isExpanded && (
                      <div className="p-4 sm:p-5 border-t border-slate-200/80 bg-white rounded-b-2xl space-y-4">
                        {/* Stimulus Diagram with Zoom Button */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                              Question Diagram
                            </span>
                            <button
                              onClick={() => setActiveZoomQuestion(q)}
                              className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-semibold"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>Zoom</span>
                            </button>
                          </div>
                          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80">
                            <PuzzleDiagramRenderer diagram={q.diagram} />
                          </div>
                        </div>

                        {/* Options Grid */}
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                            Options
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                            {q.options.map((opt) => {
                              const isSelectedByUser = userAnswer === opt.id;
                              const isCorrectOpt = opt.id === q.correctOptionId;

                              let optBorder = 'border-slate-200 bg-white';
                              let badgeColor = 'bg-slate-100 text-slate-600';

                              if (isCorrectOpt) {
                                optBorder = 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-500/20';
                                badgeColor = 'bg-emerald-600 text-white';
                              } else if (isSelectedByUser && !isCorrectOpt) {
                                optBorder = 'border-rose-400 bg-rose-50/40 ring-2 ring-rose-400/20';
                                badgeColor = 'bg-rose-600 text-white';
                              }

                              return (
                                <div
                                  key={opt.id}
                                  className={`relative p-2 rounded-xl border flex flex-col items-center justify-center ${optBorder}`}
                                >
                                  <span
                                    className={`absolute top-1.5 left-1.5 w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${badgeColor}`}
                                  >
                                    {opt.id}
                                  </span>
                                  {isCorrectOpt && (
                                    <span className="absolute top-1.5 right-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded">
                                      Correct
                                    </span>
                                  )}
                                  {isSelectedByUser && !isCorrectOpt && (
                                    <span className="absolute top-1.5 right-1.5 text-[10px] font-bold text-rose-700 bg-rose-100 px-1 rounded">
                                      Your Pick
                                    </span>
                                  )}
                                  <div className="w-16 h-16 sm:w-20 sm:h-20 my-1">
                                    <svg
                                      viewBox={opt.figure.viewBox || '0 0 100 100'}
                                      className="w-full h-full"
                                    >
                                      {opt.figure.elements.map((el, i) => (
                                        <SvgElementRenderer key={i} element={el} />
                                      ))}
                                    </svg>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Explanation & Steps */}
                        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                          <div className="text-xs sm:text-sm font-semibold text-slate-800">
                            <span className="font-bold text-indigo-700">Core Pattern Rule: </span>
                            {q.intendedRule}
                          </div>
                          <ul className="space-y-1 text-xs text-slate-600 pl-4 list-disc">
                            {q.reasoningSteps.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ul>
                          {q.commonMistake && (
                            <div className="pt-2 border-t border-slate-200 text-xs text-amber-900 font-medium">
                              <strong>Common Mistake:</strong> {q.commonMistake}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Cross-assessment Navigation Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-black">Ready for Verbal & Syllogistic Deduction?</h3>
            <p className="text-xs sm:text-sm text-blue-200 max-w-md">
              Test your ability to solve logical premises, conditional if-then arguments, and ordering rules.
            </p>
          </div>
          <Link
            href="/logical-reasoning-test"
            className="px-5 py-3 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-sm shadow-lg whitespace-nowrap transition-all"
          >
            Start Logical Reasoning Test
          </Link>
        </div>
      </div>

      {/* High-Res Zoom Modal */}
      {activeZoomQuestion && (
        <PuzzleZoomDialog
          isOpen={!!activeZoomQuestion}
          onClose={() => setActiveZoomQuestion(null)}
          title={`Puzzle Review — ${activeZoomQuestion.prompt}`}
          diagram={activeZoomQuestion.diagram}
        />
      )}
    </div>
  );
};

