'use client';

import React, { useState, useEffect } from 'react';
import { AssessmentMode } from '@/types/assessment';
import { LogicalQuestion, LOGICAL_CATEGORY_LABELS } from '@/data/logicalQuestions';
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  Grid,
  Volume2,
  VolumeX,
  ArrowLeft,
  Sparkles,
  Check,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  BookOpen,
} from 'lucide-react';
import {
  isSoundEnabled,
  setSoundEnabled,
  playOptionSelectSound,
  playFlagSound,
  playCompleteSound,
} from '@/lib/assessment/audio';

interface LogicalActiveAssessmentProps {
  questions: LogicalQuestion[];
  currentIndex: number;
  answers: Record<string, string>;
  flaggedQuestionIds: string[];
  mode: AssessmentMode;
  startTime: number;
  onSelectOption: (optionId: string) => void;
  onClearOption: (questionId: string) => void;
  onNavigate: (newIndex: number) => void;
  onToggleFlag: (questionId: string) => void;
  onSubmit: () => void;
  onCancelTest: () => void;
}

export const LogicalActiveAssessment: React.FC<LogicalActiveAssessmentProps> = ({
  questions,
  currentIndex,
  answers,
  flaggedQuestionIds,
  mode,
  startTime,
  onSelectOption,
  onClearOption,
  onNavigate,
  onToggleFlag,
  onSubmit,
  onCancelTest,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSubmitReviewOpen, setIsSubmitReviewOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Question issue reporting
  const [reportingIssue, setReportingIssue] = useState(false);
  const [issueType, setIssueType] = useState('unclear_wording');
  const [issueComment, setIssueComment] = useState('');
  const [issueSubmitted, setIssueSubmitted] = useState(false);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = totalQuestions - answeredCount;
  const isAllAnswered = answeredCount === totalQuestions;
  const currentQ = questions[currentIndex];
  const selectedOptionId = answers[currentQ.id];
  const isFlagged = flaggedQuestionIds.includes(currentQ.id);
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // Audio initialization
  useEffect(() => {
    setSoundActive(isSoundEnabled());
  }, []);

  const toggleSound = () => {
    const next = !soundActive;
    setSoundActive(next);
    setSoundEnabled(next);
  };

  // Timer engine: Deadline-based calculation
  const TIMED_DURATION_SECONDS = 900; // 15 minutes = 900s
  const deadlineMs = mode === 'timed_15' ? startTime + TIMED_DURATION_SECONDS * 1000 : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diffSec = Math.max(0, Math.floor((now - startTime) / 1000));
      setElapsedSeconds(diffSec);

      if (mode === 'timed_15') {
        const remaining = Math.max(0, Math.floor((deadlineMs - now) / 1000));
        if (remaining <= 0) {
          clearInterval(interval);
          playCompleteSound();
          onSubmit();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, mode, deadlineMs, onSubmit]);

  const remainingSeconds = mode === 'timed_15' ? Math.max(0, TIMED_DURATION_SECONDS - elapsedSeconds) : 0;
  const isTimeLow = mode === 'timed_15' && remainingSeconds < 120; // < 2 mins warning

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setIsSubmitReviewOpen(true);
    } else {
      onNavigate(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleOptionClick = (optionId: string) => {
    playOptionSelectSound();
    onSelectOption(optionId);
  };

  const handleFlagClick = () => {
    playFlagSound();
    onToggleFlag(currentQ.id);
  };

  const handleClearClick = () => {
    onClearOption(currentQ.id);
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;

      const key = e.key.toUpperCase();
      if (['1', 'A'].includes(key) && currentQ.options[0]) {
        handleOptionClick(currentQ.options[0].id);
      } else if (['2', 'B'].includes(key) && currentQ.options[1]) {
        handleOptionClick(currentQ.options[1].id);
      } else if (['3', 'C'].includes(key) && currentQ.options[2]) {
        handleOptionClick(currentQ.options[2].id);
      } else if (['4', 'D'].includes(key) && currentQ.options[3]) {
        handleOptionClick(currentQ.options[3].id);
      } else if (e.key === 'ArrowRight' || (e.key === 'Enter' && selectedOptionId)) {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (key === 'F') {
        handleFlagClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQ, selectedOptionId, isLastQuestion]);

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIssueSubmitted(true);
    setTimeout(() => {
      setReportingIssue(false);
      setIssueSubmitted(false);
      setIssueComment('');
    }, 1800);
  };

  const getCategoryBadge = () => {
    switch (currentQ.category) {
      case 'deductive':
        return { label: LOGICAL_CATEGORY_LABELS.deductive, badgeClass: 'bg-purple-50 text-purple-700 border-purple-200/80' };
      case 'conditional':
        return { label: LOGICAL_CATEGORY_LABELS.conditional, badgeClass: 'bg-blue-50 text-blue-700 border-blue-200/80' };
      case 'ordering':
        return { label: LOGICAL_CATEGORY_LABELS.ordering, badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/80' };
      case 'inductive':
        return { label: LOGICAL_CATEGORY_LABELS.inductive, badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/80' };
    }
  };

  const catBadge = getCategoryBadge();

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden bg-[#F7FAFF] select-none">
      {/* ========================================================= */}
      {/* 1. COMPACT TOP HEADER BAR                                 */}
      {/* ========================================================= */}
      <header className="w-full shrink-0 bg-white/95 backdrop-blur-md border-b border-[#E2EAF7] relative z-30">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-12 sm:h-13 flex items-center justify-between gap-3">
          {/* Left: Exit button */}
          <button
            type="button"
            onClick={onCancelTest}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            title="Exit assessment"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-xs font-semibold">Exit</span>
          </button>

          {/* Center: Question Counter Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#2453FF]/20 text-[#2453FF] text-xs font-extrabold shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2453FF] animate-pulse" />
            <span>
              Question {currentIndex + 1} of {totalQuestions}
            </span>
          </div>

          {/* Right: Sound toggle, Live Timer, Mobile Grid Trigger */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleSound}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
              title={soundActive ? 'Mute sound effects' : 'Enable sound effects'}
              aria-label={soundActive ? 'Mute audio' : 'Enable audio'}
            >
              {soundActive ? (
                <Volume2 className="w-4 h-4 text-[#2453FF]" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>

            <div
              className={`flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 rounded-xl border transition-colors ${
                isTimeLow
                  ? 'bg-amber-50 text-amber-900 border-amber-300 font-black animate-pulse'
                  : 'bg-slate-50 text-[#07152F] border-slate-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-[#2453FF]" />
              {mode === 'timed_15' ? (
                <span>{formatTimer(remainingSeconds)}</span>
              ) : (
                <span>{formatTimer(elapsedSeconds)}</span>
              )}
            </div>

            {/* Mobile Navigator Button */}
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none cursor-pointer"
            >
              <Grid className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[11px] font-semibold">
                {answeredCount}/{totalQuestions}
              </span>
            </button>
          </div>
        </div>

        {/* Animated Progress Line */}
        <div className="w-full bg-slate-100 h-1 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#2453FF] via-[#4779FF] to-[#2453FF] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. MAIN CENTER STAGE — STRICT SINGLE SCREEN FIT ON DESKTOP */}
      {/* ========================================================= */}
      <main className="flex-1 min-h-0 w-full max-w-6xl mx-auto px-3 sm:px-6 py-2 sm:py-3.5 flex flex-col justify-center overflow-hidden">
        <div className="h-full max-h-[calc(100dvh-4.6rem)] w-full grid grid-cols-1 lg:grid-cols-12 gap-3.5 xl:gap-4 items-stretch overflow-hidden">
          
          {/* LEFT: MAIN QUESTION CARD (lg:col-span-8 or 9) */}
          <div
            key={currentQ.id}
            className="lg:col-span-8 xl:col-span-9 bg-white rounded-2xl sm:rounded-3xl border border-[#E2EAF7] p-4 sm:p-5 lg:p-6 shadow-[0_6px_24px_rgba(7,21,47,0.04)] flex flex-col justify-between overflow-y-auto lg:overflow-hidden animate-in fade-in zoom-in-[0.99] duration-200"
          >
            {/* Top Toolbar: Category, Flag, Clear, Shortcuts */}
            <div className="flex items-center justify-between pb-2.5 mb-2.5 sm:mb-3 border-b border-slate-100 shrink-0 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${catBadge.badgeClass}`}>
                  {catBadge.label}
                </span>
                <span className="text-[11px] font-medium text-slate-400 capitalize hidden sm:inline">
                  {currentQ.difficulty}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleFlagClick}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isFlagged
                      ? 'bg-amber-50 text-amber-700 border-amber-300 shadow-2xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                  title="Flag this question to review later (Shortcut: F)"
                >
                  <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                  <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
                </button>

                {selectedOptionId && (
                  <button
                    type="button"
                    onClick={handleClearClick}
                    className="px-2 py-1 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Clear selected option"
                  >
                    Clear
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setReportingIssue(true)}
                  className="text-[11px] font-medium text-slate-400 hover:text-slate-700 hover:underline cursor-pointer ml-1"
                >
                  Report
                </button>
              </div>
            </div>

            {/* Prompt Container: Styled with high readability and compact vertical footprint */}
            <div className="shrink-0 mb-3 sm:mb-3.5">
              <div className="p-3 sm:p-3.5 bg-gradient-to-b from-[#F8FAFF] to-white rounded-xl sm:rounded-2xl border border-[#E2EAF7]">
                <h2 className="font-heading text-sm sm:text-base lg:text-[16.5px] font-bold text-[#07152F] whitespace-pre-line leading-relaxed tracking-tight">
                  {currentQ.prompt}
                </h2>
              </div>
            </div>

            {/* 4 Answer Options: Sleek, compact touch-friendly cards with subtle animations */}
            <div className="space-y-2 sm:space-y-2.5 mb-3 sm:mb-4 flex-1 min-h-0 flex flex-col justify-center" role="radiogroup" aria-label={`Options for Question ${currentIndex + 1}`}>
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleOptionClick(opt.id)}
                    className={`w-full py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl border text-left text-xs sm:text-sm transition-all duration-150 flex items-center justify-between cursor-pointer group ${
                      isSelected
                        ? 'bg-[#2453FF]/6 border-[#2453FF] text-[#07152F] ring-2 ring-[#2453FF]/20 shadow-xs scale-[1.005]'
                        : 'bg-white border-[#E2EAF7] hover:border-[#2453FF]/40 hover:bg-[#F9FBFF] text-[#334155]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#2453FF] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#2453FF]'
                        }`}
                      >
                        {opt.id}
                      </span>
                      <span className="font-semibold text-[#07152F] leading-snug">{opt.label}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="hidden sm:inline text-[10px] font-mono text-slate-300 group-hover:text-slate-400">
                        [{oIdx + 1}]
                      </span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-[#2453FF] text-white flex items-center justify-center animate-in zoom-in duration-150">
                          <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-[#2453FF]/60 transition-colors" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-slate-100 shrink-0">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={handlePrev}
                className="px-3 sm:px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Previous question (Shortcut: Left Arrow)"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitReviewOpen(true)}
                  className="px-3 sm:px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="hidden sm:inline">Review &amp; Submit</span>
                  <span className="sm:hidden">Review</span> ({answeredCount}/{totalQuestions})
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 sm:px-6 py-2 rounded-xl bg-[#2453FF] hover:bg-[#1B40DF] text-xs font-extrabold text-white transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-[0.98]"
                  title={isLastQuestion ? 'Review and finish assessment' : 'Next question (Shortcut: Right Arrow or Enter)'}
                >
                  <span>{isLastQuestion ? 'Finish' : 'Next'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: DESKTOP QUESTION NAVIGATOR SIDEBAR — FITS EXACT SAME HEIGHT */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-3 bg-white rounded-3xl border border-[#E2EAF7] p-4 xl:p-5 shadow-[0_4px_20px_rgba(7,21,47,0.03)] flex-col justify-between h-full overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
                <h3 className="font-heading font-black text-sm text-[#07152F]">
                  Question Navigator
                </h3>
                <span className="text-xs font-black text-[#2453FF] bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">
                  {answeredCount}/{totalQuestions}
                </span>
              </div>

              {/* 5-column (5x4) question grid */}
              <div className="grid grid-cols-5 gap-1.5 xl:gap-2 mb-3">
                {questions.map((q, idx) => {
                  const isAnswered = !!answers[q.id];
                  const isCurrent = idx === currentIndex;
                  const flagged = flaggedQuestionIds.includes(q.id);

                  let itemStyles = 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100';
                  if (isCurrent) {
                    itemStyles = 'bg-[#2453FF] text-white ring-2 ring-[#2453FF]/40 shadow-xs font-black scale-105';
                  } else if (isAnswered) {
                    itemStyles = 'bg-blue-50/90 text-[#2453FF] border border-blue-200 font-bold';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => onNavigate(idx)}
                      className={`h-9 xl:h-10 rounded-xl text-xs relative flex flex-col items-center justify-center transition-all cursor-pointer ${itemStyles}`}
                      title={`Question ${idx + 1}: ${isAnswered ? 'Answered' : 'Unanswered'}${flagged ? ' (Flagged)' : ''}`}
                    >
                      <span>{idx + 1}</span>
                      {flagged && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigator Status Legend */}
              <div className="space-y-1.5 pt-2.5 border-t border-slate-100 text-[11px] text-[#60718B]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-md bg-[#2453FF]" />
                    <span>Current</span>
                  </div>
                  <span className="font-bold text-[#07152F]">Q {currentIndex + 1}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-md bg-blue-100 border border-blue-300" />
                    <span>Answered</span>
                  </div>
                  <span className="font-bold text-blue-600">{answeredCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-md bg-slate-100 border border-slate-300" />
                    <span>Unanswered</span>
                  </div>
                  <span className="font-bold text-slate-500">{unansweredCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span>Flagged</span>
                  </div>
                  <span className="font-bold text-amber-600">{flaggedQuestionIds.length}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSubmitReviewOpen(true)}
              className="w-full mt-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-xs transition-colors cursor-pointer"
            >
              Review &amp; Submit Test
            </button>
          </div>
        </div>
      </main>

      {/* ========================================================= */}
      {/* 3. MOBILE QUESTION NAVIGATOR DRAWER                       */}
      {/* ========================================================= */}
      {isMobileNavOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/40 backdrop-blur-xs"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <div
            className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-[#E2EAF7]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <h3 className="font-heading font-black text-lg text-[#07152F]">
                Question Map ({answeredCount}/{totalQuestions})
              </h3>
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2 mb-4">
              {questions.map((q, idx) => {
                const isAnswered = !!answers[q.id];
                const isCurrent = idx === currentIndex;
                const flagged = flaggedQuestionIds.includes(q.id);
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      onNavigate(idx);
                      setIsMobileNavOpen(false);
                    }}
                    className={`py-3 rounded-xl text-xs font-bold relative flex flex-col items-center justify-center transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#2453FF] text-white ring-2 ring-[#2453FF]/40'
                        : isAnswered
                        ? 'bg-blue-50 text-[#2453FF] border border-blue-200'
                        : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {flagged && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-[#64748B] pt-3 border-t border-slate-100 mb-4">
              <span>Answered: {answeredCount}</span>
              <span>Flagged: {flaggedQuestionIds.length}</span>
              <span>Unanswered: {unansweredCount}</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsMobileNavOpen(false);
                setIsSubmitReviewOpen(true);
              }}
              className="w-full py-3 rounded-xl bg-[#2453FF] text-white font-extrabold text-xs shadow-xs"
            >
              Finish &amp; Review Before Submit
            </button>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. REVIEW BEFORE SUBMISSION MODAL                          */}
      {/* ========================================================= */}
      {isSubmitReviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in"
        >
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#E2EAF7]">
            <h3 className="font-heading font-black text-xl sm:text-2xl text-[#07152F] mb-1.5">
              Review Before Submission
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
              Check your progress summary before submitting for final scoring.
            </p>

            {/* Summary Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200/70 text-center">
                <span className="text-[10px] font-black uppercase text-blue-600 block mb-0.5">
                  Answered
                </span>
                <span className="text-xl font-black text-[#07152F]">{answeredCount}</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 text-center">
                <span className="text-[10px] font-black uppercase text-slate-500 block mb-0.5">
                  Unanswered
                </span>
                <span className="text-xl font-black text-slate-700">{unansweredCount}</span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/70 text-center">
                <span className="text-[10px] font-black uppercase text-amber-700 block mb-0.5">
                  Flagged
                </span>
                <span className="text-xl font-black text-amber-700">{flaggedQuestionIds.length}</span>
              </div>
            </div>

            {mode === 'timed_15' && (
              <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 mb-4 flex items-center justify-between">
                <span>Timer remaining:</span>
                <span className="font-mono font-bold">{formatTimer(remainingSeconds)}</span>
              </div>
            )}

            {!isAllAnswered && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 mb-5 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">Unanswered Questions:</span>
                  <span>{unansweredCount} question(s) will receive zero points. You may return to complete them or submit now.</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsSubmitReviewOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Return to Questions
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitReviewOpen(false);
                  playCompleteSound();
                  onSubmit();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#2453FF] hover:bg-[#1B40DF] text-xs font-bold text-white transition-all shadow-xs cursor-pointer"
              >
                Submit Test &amp; View Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. QUESTION ISSUE REPORTING MODAL                          */}
      {/* ========================================================= */}
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
              Help us maintain question quality. Reporting Question ID: <strong>{currentQ.id}</strong>.
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
                    Details (optional)
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
