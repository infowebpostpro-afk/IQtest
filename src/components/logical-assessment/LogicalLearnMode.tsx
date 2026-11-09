'use client';

import React, { useState } from 'react';
import { LogicalQuestion, LOGICAL_CATEGORY_LABELS } from '@/data/logicalQuestions';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  Award,
  Sparkles,
  Check,
  X,
  Layers,
  Flag,
} from 'lucide-react';
import { playOptionSelectSound, playCompleteSound } from '@/lib/assessment/audio';

interface LogicalLearnModeProps {
  questions: LogicalQuestion[];
  onExit: () => void;
  onSwitchToTestMode: () => void;
}

export const LogicalLearnMode: React.FC<LogicalLearnModeProps> = ({
  questions,
  onExit,
  onSwitchToTestMode,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState<boolean>(false);
  
  // Track metrics
  // firstAttempts: questionId -> boolean (was first attempt correct?)
  const [firstAttempts, setFirstAttempts] = useState<Record<string, boolean>>({});
  const [retriedQuestions, setRetriedQuestions] = useState<Set<string>>(new Set());
  const [explanationsViewed, setExplanationsViewed] = useState<Set<string>>(new Set());
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Issue reporting modal
  const [reportingIssue, setReportingIssue] = useState<boolean>(false);
  const [issueType, setIssueType] = useState<string>('unclear_wording');
  const [issueComment, setIssueComment] = useState<string>('');
  const [issueSubmitted, setIssueSubmitted] = useState<boolean>(false);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleSelectOption = (optionId: string) => {
    if (hasChecked) return; // Prevent changing after checking without retrying
    playOptionSelectSound();
    setSelectedOptionId(optionId);
  };

  const handleCheckAnswer = () => {
    if (!selectedOptionId) return;
    const isCorrect = selectedOptionId === currentQ.correctOptionId;

    // Record first-attempt if not already recorded for this question
    if (firstAttempts[currentQ.id] === undefined) {
      setFirstAttempts((prev) => ({
        ...prev,
        [currentQ.id]: isCorrect,
      }));
    }

    setExplanationsViewed((prev) => new Set(prev).add(currentQ.id));
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

  // Calculate learning progress stats
  const attemptedCount = Object.keys(firstAttempts).length;
  const firstAttemptCorrectCount = Object.values(firstAttempts).filter(Boolean).length;
  const accuracyPercent = attemptedCount > 0 ? Math.round((firstAttemptCorrectCount / attemptedCount) * 100) : 0;

  const isCurrentCorrect = selectedOptionId === currentQ.correctOptionId;

  // Completion Summary View
  if (isCompleted) {
    return (
      <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-8 sm:p-10 shadow-[0_12px_40px_rgba(7,21,47,0.06)] text-center">
          <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 mx-auto flex items-center justify-center mb-5">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#07152F] mb-3">
            Learn Mode Session Completed!
          </h2>

          <p className="text-sm sm:text-base text-[#60718B] max-w-lg mx-auto mb-8 leading-relaxed">
            You worked through the logical reasoning curriculum and reviewed step-by-step explanations.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8 text-left">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Attempted
              </span>
              <span className="text-2xl font-black text-[#07152F]">
                {attemptedCount} / {totalQuestions}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                First-Try Correct
              </span>
              <span className="text-2xl font-black text-emerald-700">
                {firstAttemptCorrectCount}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2453FF] block mb-1">
                1st-Try Accuracy
              </span>
              <span className="text-2xl font-black text-[#2453FF]">
                {accuracyPercent}%
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block mb-1">
                Retried
              </span>
              <span className="text-2xl font-black text-purple-700">
                {retriedQuestions.size}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F0F5FF] border border-[#D5E3FF] text-left text-xs sm:text-sm text-[#1B40DF] leading-relaxed mb-8 flex items-start gap-3">
            <Sparkles className="w-5 h-5 shrink-0 text-[#2453FF] mt-0.5" />
            <div>
              <strong>Ready to test your skills under real conditions?</strong>
              <p className="text-xs text-[#475569] mt-0.5">
                Switch to Test Mode to complete a formal 20-question practice test with overall scoring and category diagnostics.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={onSwitchToTestMode}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#2453FF] hover:bg-[#1B40DF] text-white font-extrabold text-sm shadow-xs transition-all cursor-pointer"
            >
              Start Formal Test Mode
            </button>
            <button
              type="button"
              onClick={() => {
                setIsCompleted(false);
                setCurrentIndex(0);
                setSelectedOptionId(null);
                setHasChecked(false);
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all cursor-pointer"
            >
              Restart Learn Mode
            </button>
            <button
              type="button"
              onClick={onExit}
              className="w-full sm:w-auto px-5 py-3.5 text-slate-500 hover:text-slate-800 font-bold text-sm cursor-pointer"
            >
              Exit to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-6 sm:py-10 px-4 sm:px-6">
      {/* Top Banner: Learn Mode Identifier & Controls */}
      <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E2EAF7]">
        <button
          type="button"
          onClick={onExit}
          className="flex items-center gap-1.5 text-xs font-bold text-[#64748B] hover:text-[#07152F] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Learn Mode</span>
        </button>

        {/* Learning Badge */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-black text-emerald-800">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Learn Mode • Question {currentIndex + 1} of {totalQuestions}</span>
          </div>
        </div>

        {/* Accuracy Tracker Pill */}
        <div className="text-xs font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
          <span>Accuracy: {accuracyPercent}%</span>
        </div>
      </div>

      {/* Main Learning Card */}
      <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_10px_35px_rgba(7,21,47,0.05)] mb-6">
        {/* Category & Status Bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border bg-blue-50 text-blue-700 border-blue-200">
            {LOGICAL_CATEGORY_LABELS[currentQ.category]}
          </span>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold text-slate-400 capitalize">
              Difficulty: {currentQ.difficulty}
            </span>
            <button
              type="button"
              onClick={() => setReportingIssue(true)}
              className="text-[11px] font-medium text-slate-400 hover:text-slate-700 hover:underline cursor-pointer"
            >
              Report Issue
            </button>
          </div>
        </div>

        {/* Prompt */}
        <div className="mb-6">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-[#07152F] whitespace-pre-line leading-relaxed">
            {currentQ.prompt}
          </h2>
        </div>

        {/* 4 Answer Options */}
        <div className="space-y-3 mb-6">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const isCorrect = opt.id === currentQ.correctOptionId;

            let cardStyles = 'bg-white border-[#E2EAF7] hover:border-slate-300 text-[#475569]';
            let badgeStyles = 'bg-slate-100 text-slate-700';

            if (!hasChecked && isSelected) {
              cardStyles = 'bg-[#2453FF]/5 border-[#2453FF] text-[#07152F] ring-2 ring-[#2453FF]/20 shadow-xs';
              badgeStyles = 'bg-[#2453FF] text-white';
            } else if (hasChecked) {
              if (isCorrect) {
                cardStyles = 'bg-emerald-50/90 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 shadow-xs';
                badgeStyles = 'bg-emerald-600 text-white';
              } else if (isSelected && !isCorrect) {
                cardStyles = 'bg-rose-50/90 border-rose-400 text-rose-950 ring-2 ring-rose-400/20';
                badgeStyles = 'bg-rose-600 text-white';
              } else {
                cardStyles = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                type="button"
                disabled={hasChecked}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full p-4 rounded-2xl border text-left text-sm transition-all flex items-center justify-between ${cardStyles} ${
                  !hasChecked ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${badgeStyles}`}
                  >
                    {opt.id}
                  </span>
                  <span className="font-medium leading-snug">{opt.label}</span>
                </div>

                {hasChecked && isCorrect && (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Correct</span>
                  </div>
                )}
                {hasChecked && isSelected && !isCorrect && (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 shrink-0">
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Your Choice</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Check Answer Action (Pre-check) */}
        {!hasChecked ? (
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              disabled={!selectedOptionId}
              onClick={handleCheckAnswer}
              className="px-7 py-2.5 rounded-xl bg-[#2453FF] disabled:bg-slate-200 disabled:text-slate-400 hover:bg-[#1B40DF] text-xs font-extrabold text-white transition-all shadow-xs flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              <span>Check Answer</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Post-Check Step-by-Step Educational Explanation */
          <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 animate-in fade-in">
            {/* Outcome Alert */}
            <div
              className={`p-4 rounded-2xl border flex items-start gap-3 ${
                isCurrentCorrect
                  ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50/90 border-rose-200 text-rose-950'
              }`}
            >
              {isCurrentCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="text-xs sm:text-sm">
                <div className="font-bold">
                  {isCurrentCorrect ? 'Well done! Correct Answer.' : 'Incorrect Answer.'}
                </div>
                <div className="text-slate-600 mt-1 leading-relaxed">
                  Correct Option: <strong>{currentQ.correctOptionId}</strong> —{' '}
                  {currentQ.options.find((o) => o.id === currentQ.correctOptionId)?.label}
                </div>
              </div>
            </div>

            {/* Step-by-Step Reasoning Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3 text-xs font-black text-[#07152F] uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Step-by-Step Reasoning</span>
              </div>
              <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentQ.reasoningSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2453FF] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              {/* Common Mistake / Key Takeaway */}
              {currentQ.commonMistake && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-900 block mb-0.5">Common Pitfall to Avoid:</span>
                    <span className="text-amber-800 leading-relaxed">{currentQ.commonMistake}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions: Retry or Next */}
            <div className="flex items-center justify-between pt-3">
              {!isCurrentCorrect ? (
                <button
                  type="button"
                  onClick={handleRetry}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white transition-all shadow-xs flex items-center gap-1.5 cursor-pointer ml-auto"
              >
                <span>{currentIndex === totalQuestions - 1 ? 'Finish Learning Session' : 'Next Question'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Question Issue Reporting Modal */}
      {reportingIssue && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
        >
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#E2EAF7]">
            <h3 className="font-heading font-black text-lg text-[#07152F] mb-1">
              Report Question Issue
            </h3>
            <p className="text-xs text-[#60718B] mb-4">
              Help us improve question accuracy. Submitting report for Question ID: <strong>{currentQ.id}</strong>.
            </p>

            {issueSubmitted ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you! Your feedback on Question {currentQ.id} has been recorded for editorial review.</span>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Issue Category
                  </label>
                  <select
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800"
                  >
                    <option value="incorrect_answer">Incorrect intended answer</option>
                    <option value="unclear_wording">Unclear or ambiguous wording</option>
                    <option value="broken_diagram">Broken diagram or formatting issue</option>
                    <option value="other">Other issue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Details / Explanation (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={issueComment}
                    onChange={(e) => setIssueComment(e.target.value)}
                    placeholder="Describe what seemed incorrect or ambiguous..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-[#2453FF]"
                  />
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setReportingIssue(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#2453FF] hover:bg-[#1B40DF]"
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

