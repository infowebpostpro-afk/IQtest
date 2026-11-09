'use client';

import React, { useState } from 'react';
import {
  AbstractQuestion,
  AbstractOption,
} from '@/types/abstractAssessment';
import { ABSTRACT_CATEGORY_LABELS } from '@/data/abstractQuestions';
import { PuzzleDiagramRenderer } from './PuzzleDiagramRenderer';
import { SvgElementRenderer } from './AbstractSvgPrimitives';
import { PuzzleZoomDialog } from './PuzzleZoomDialog';
import { FiveFeatureScanPanel } from './FiveFeatureScanPanel';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Lightbulb,
  AlertTriangle,
  Award,
  Sparkles,
  Check,
  X,
  Flag,
} from 'lucide-react';
import { playOptionSelectSound, playCompleteSound } from '@/lib/assessment/audio';

interface AbstractLearnModeProps {
  questions: AbstractQuestion[];
  onExit: () => void;
  onSwitchToTestMode: () => void;
}

export const AbstractLearnMode: React.FC<AbstractLearnModeProps> = ({
  questions,
  onExit,
  onSwitchToTestMode,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState<boolean>(false);
  const [zoomOpen, setZoomOpen] = useState<boolean>(false);

  // Practice metrics
  const [firstAttempts, setFirstAttempts] = useState<Record<string, boolean>>({});
  const [retriedQuestions, setRetriedQuestions] = useState<Set<string>>(new Set());
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Issue report modal
  const [reportingIssue, setReportingIssue] = useState<boolean>(false);
  const [issueType, setIssueType] = useState<string>('unclear_rule');
  const [issueComment, setIssueComment] = useState<string>('');
  const [issueSubmitted, setIssueSubmitted] = useState<boolean>(false);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleSelectOption = (optionId: string) => {
    if (hasChecked) return;
    playOptionSelectSound();
    setSelectedOptionId(optionId);
  };

  const handleCheckAnswer = () => {
    if (!selectedOptionId) return;
    const isCorrect = selectedOptionId === currentQ.correctOptionId;

    if (firstAttempts[currentQ.id] === undefined) {
      setFirstAttempts((prev) => ({
        ...prev,
        [currentQ.id]: isCorrect,
      }));
    }

    setHasChecked(true);
  };

  const handleRetry = () => {
    setRetriedQuestions((prev) => new Set(prev).add(currentQ.id));
    setSelectedOptionId(null);
    setHasChecked(false);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setHasChecked(false);
    } else {
      playCompleteSound();
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedOptionId(null);
      setHasChecked(false);
    }
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIssueSubmitted(true);
    setTimeout(() => {
      setReportingIssue(false);
      setIssueSubmitted(false);
      setIssueComment('');
    }, 1800);
  };

  const attemptedCount = Object.keys(firstAttempts).length;
  const firstAttemptCorrectCount = Object.values(firstAttempts).filter(Boolean).length;
  const accuracyPercent = attemptedCount > 0 ? Math.round((firstAttemptCorrectCount / attemptedCount) * 100) : 0;
  const isCurrentCorrect = selectedOptionId === currentQ.correctOptionId;

  // Completion Screen
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 sm:p-6">
        <div className="w-full max-w-xl bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-100 p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 mx-auto flex items-center justify-center mb-5 shadow-inner">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Practice Session Complete!
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6">
            You worked through all 20 visual abstract puzzles with step-by-step reasoning.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-200/70 mb-6">
            <div>
              <div className="text-2xl font-black text-indigo-600">
                {firstAttemptCorrectCount}/{totalQuestions}
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                First Attempt
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-600">{accuracyPercent}%</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Accuracy
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-amber-600">{retriedQuestions.size}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Retries
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onSwitchToTestMode}
              className="flex-1 py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Take Timed Assessment
            </button>
            <button
              onClick={() => {
                setCurrentIndex(0);
                setSelectedOptionId(null);
                setHasChecked(false);
                setIsCompleted(false);
              }}
              className="py-3 px-5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Restart Practice
            </button>
            <button
              onClick={onExit}
              className="py-3 px-4 rounded-xl text-slate-500 hover:text-slate-700 font-medium transition-all"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 pb-12">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Exit Practice</span>
            </button>
            <span className="hidden sm:inline-block w-px h-4 bg-slate-200" />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Learn Mode</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-700">
              Puzzle {currentIndex + 1} of {totalQuestions}
            </div>
            {attemptedCount > 0 && (
              <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-bold text-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>{accuracyPercent}% Accuracy</span>
              </div>
            )}
            <button
              onClick={onSwitchToTestMode}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline px-2 py-1"
            >
              Switch to Test
            </button>
          </div>
        </div>
      </header>

      {/* Main Learning Canvas */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Question & Stimulus Diagram */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm">
              {/* Question Header & Category */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                    {ABSTRACT_CATEGORY_LABELS[currentQ.category]}
                  </span>
                  <span className="text-xs font-medium text-slate-400 capitalize">
                    {currentQ.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setZoomOpen(true)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    title="Expand visual puzzle"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </button>
                  <button
                    onClick={() => setReportingIssue(true)}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded transition-colors"
                    title="Report issue with question"
                  >
                    <Flag className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Question Prompt */}
              <div className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                {currentQ.prompt}
              </div>

              {/* Stimulus Vector Diagram */}
              <div className="p-3 sm:p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80">
                <PuzzleDiagramRenderer diagram={currentQ.diagram} />
              </div>
            </div>

            {/* Five-Feature Scan Learning Aid */}
            <FiveFeatureScanPanel />
          </div>

          {/* Right Column: Interactive Options & Step-by-Step Feedback */}
          <div className="lg:col-span-5 space-y-4">
            {/* Options Selection Box */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-bold tracking-wider uppercase text-slate-500">
                  Select Your Answer
                </h2>
                {hasChecked && (
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
                      isCurrentCorrect
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {isCurrentCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct!
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" /> Not Quite
                      </>
                    )}
                  </span>
                )}
              </div>

              {/* 2x2 Option Grid with SVG Frames */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {currentQ.options.map((opt: AbstractOption) => {
                  const isSelected = selectedOptionId === opt.id;
                  const isCorrectAnswer = opt.id === currentQ.correctOptionId;

                  let borderClass = 'border-slate-200 hover:border-indigo-300 bg-white';
                  let badgeClass = 'bg-slate-100 text-slate-700';

                  if (hasChecked) {
                    if (isCorrectAnswer) {
                      borderClass = 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-500/20';
                      badgeClass = 'bg-emerald-500 text-white';
                    } else if (isSelected && !isCorrectAnswer) {
                      borderClass = 'border-rose-400 bg-rose-50/40 ring-2 ring-rose-400/20';
                      badgeClass = 'bg-rose-500 text-white';
                    } else {
                      borderClass = 'border-slate-200 opacity-60 bg-white';
                    }
                  } else if (isSelected) {
                    borderClass = 'border-indigo-600 bg-indigo-50/30 ring-2 ring-indigo-500/20 shadow-sm';
                    badgeClass = 'bg-indigo-600 text-white';
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      disabled={hasChecked}
                      aria-label={`Option ${opt.id}: ${opt.accessibilityLabel}`}
                      className={`relative p-2.5 sm:p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center text-left ${borderClass}`}
                    >
                      {/* Option Letter Badge */}
                      <span
                        className={`absolute top-2 left-2 w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${badgeClass}`}
                      >
                        {opt.id}
                      </span>

                      {/* SVG Canvas for Option */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center my-1">
                        <svg
                          viewBox={opt.figure.viewBox || '0 0 100 100'}
                          className="w-full h-full"
                          aria-hidden="true"
                        >
                          {opt.figure.elements.map((el, i) => (
                            <SvgElementRenderer key={i} element={el} />
                          ))}
                        </svg>
                      </div>

                      {/* Screen reader helper */}
                      <span className="sr-only">{opt.accessibilityLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons: Check Answer or Retry / Next */}
              {!hasChecked ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={!selectedOptionId}
                  className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold shadow-md shadow-indigo-600/20 disabled:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Check Answer
                </button>
              ) : (
                <div className="flex gap-2">
                  {!isCurrentCorrect && (
                    <button
                      onClick={handleRetry}
                      className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Try Again
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{currentIndex < totalQuestions - 1 ? 'Next Puzzle' : 'Finish Practice'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Step-by-Step Educational Explanation Card (Shown after checking) */}
            {hasChecked && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-sm space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>Rule & Explanation</span>
                </div>

                {/* Primary Rule */}
                <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs sm:text-sm text-indigo-950 font-medium">
                  <strong className="font-bold text-indigo-900 block mb-0.5">Core Rule:</strong>
                  {currentQ.intendedRule}
                </div>

                {/* Step-by-step breakdown */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Step-by-step logic:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {currentQ.reasoningSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Common Mistake Alert */}
                {currentQ.commonMistake && (
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 flex items-start gap-2 text-xs text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block mb-0.5">Common Trap to Avoid:</strong>
                      <span>{currentQ.commonMistake}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation Pagination Bar */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Quick jump pills */}
          <div className="hidden md:flex items-center gap-1 overflow-x-auto py-1 max-w-md">
            {questions.map((q, idx) => {
              const hasAttempted = firstAttempts[q.id] !== undefined;
              const isCorrectFirst = firstAttempts[q.id] === true;
              const isCurrent = idx === currentIndex;

              let pillClass = 'bg-slate-100 text-slate-600 hover:bg-slate-200';
              if (isCurrent) {
                pillClass = 'ring-2 ring-indigo-600 bg-indigo-600 text-white font-bold';
              } else if (hasAttempted) {
                pillClass = isCorrectFirst
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-rose-100 text-rose-800';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setSelectedOptionId(null);
                    setHasChecked(false);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${pillClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === totalQuestions - 1}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* High-Resolution Puzzle Zoom Dialog */}
      <PuzzleZoomDialog
        isOpen={zoomOpen}
        onClose={() => setZoomOpen(false)}
        title={`Puzzle ${currentIndex + 1} — ${currentQ.prompt}`}
        diagram={currentQ.diagram}
      />

      {/* Feedback & Issue Reporting Dialog */}
      {reportingIssue && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Report an Issue with Puzzle #{currentIndex + 1}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Help us maintain precision and clarity across all visual assessments.
            </p>

            {issueSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-emerald-800 text-sm font-semibold">
                ✓ Thank you! Your feedback has been noted for review.
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Issue Category
                  </label>
                  <select
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                    className="w-full text-xs rounded-xl border-slate-200 bg-slate-50 p-2.5 font-medium"
                  >
                    <option value="unclear_rule">Ambiguous or multiple valid rules</option>
                    <option value="incorrect_key">Possible mistake in the correct answer key</option>
                    <option value="rendering_flaw">SVG visual rendering or alignment glitch</option>
                    <option value="accessibility">Screen reader or contrast problem</option>
                    <option value="other">Other question feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Notes / Description
                  </label>
                  <textarea
                    rows={3}
                    value={issueComment}
                    onChange={(e) => setIssueComment(e.target.value)}
                    placeholder="Briefly explain what you noticed..."
                    className="w-full text-xs rounded-xl border-slate-200 bg-slate-50 p-2.5 font-normal resize-none focus:bg-white"
                  />
                </div>

                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setReportingIssue(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

