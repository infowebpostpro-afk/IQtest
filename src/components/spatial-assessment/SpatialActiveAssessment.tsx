'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  ZoomIn,
  Clock,
  CheckCircle,
  HelpCircle,
  Layers,
  ArrowRight,
} from 'lucide-react';
import {
  BaseSpatialQuestion,
  OptionId,
  SpatialScene,
  SPATIAL_CATEGORIES,
} from '@/lib/spatial/types';
import { SpatialSvgRenderer } from './SpatialSvgRenderer';
import { SpatialPuzzleZoomDialog } from './SpatialPuzzleZoomDialog';

interface SpatialActiveAssessmentProps {
  questions: BaseSpatialQuestion[];
  currentIndex: number;
  answers: Record<string, OptionId>;
  flaggedIds: string[];
  timed: boolean;
  timeRemaining: number;
  onSelectAnswer: (optionId: OptionId) => void;
  onNext: () => void;
  onPrev: () => void;
  onGoToIndex: (index: number) => void;
  onToggleFlag: (questionId: string) => void;
  onSubmit: () => void;
}

export const SpatialActiveAssessment: React.FC<SpatialActiveAssessmentProps> = ({
  questions,
  currentIndex,
  answers,
  flaggedIds,
  timed,
  timeRemaining,
  onSelectAnswer,
  onNext,
  onPrev,
  onGoToIndex,
  onToggleFlag,
  onSubmit,
}) => {
  const [zoomScene, setZoomScene] = useState<SpatialScene | null>(null);
  const [zoomTitle, setZoomTitle] = useState<string>('');
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);

  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const currentCat = SPATIAL_CATEGORIES[currentQ.category];
  const isFlagged = flaggedIds.includes(currentQ.id);
  const selectedOption = answers[currentQ.id];
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  // Format timer seconds
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] flex flex-col pb-16">
      {/* Sticky Test Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-[#E2EAF7] shadow-xs">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left: Progress info */}
          <div className="flex items-center gap-3">
            <span className="font-heading font-black text-sm sm:text-base text-[#07152F]">
              Question {currentIndex + 1} <span className="text-[#64748B] font-normal">of {questions.length}</span>
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[11px] font-bold bg-[#EEF4FF] text-[#2453FF]">
              {currentCat?.shortName || currentQ.category}
            </span>
          </div>

          {/* Center: Timer if active */}
          {timed && (
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                timeRemaining < 120
                  ? 'bg-red-50 text-red-600 border border-red-200 animate-pulse'
                  : 'bg-[#EEF4FF] text-[#2453FF] border border-[#2453FF]/20'
              }`}
              role="timer"
              aria-live="polite"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          )}

          {/* Right: Quick actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleFlag(currentQ.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                isFlagged
                  ? 'bg-amber-100 text-amber-700 border border-amber-300'
                  : 'bg-white border border-[#E2EAF7] text-[#64748B] hover:text-[#07152F] hover:bg-[#F8FBFF]'
              }`}
              aria-label={isFlagged ? 'Remove question flag' : 'Flag question for review'}
            >
              <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
              <span className="hidden xs:inline">{isFlagged ? 'Flagged' : 'Flag'}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowReviewModal(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#07152F] bg-white border border-[#E2EAF7] hover:bg-[#EEF4FF] transition-colors"
            >
              Review ({answeredCount}/{questions.length})
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#EEF4FF]">
          <div
            className="h-full bg-gradient-to-r from-[#2453FF] to-[#3B66FF] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Main Workspace */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-6 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Question & Stimulus Section (Left / Top on mobile) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold tracking-wider uppercase text-[#64748B]">
                  {currentCat?.name} • Difficulty: {currentQ.difficulty}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setZoomScene(currentQ.stimulusScene);
                    setZoomTitle(`Enlarged Diagram — Question ${currentIndex + 1}`);
                  }}
                  className="flex items-center gap-1 text-xs font-semibold text-[#2453FF] hover:text-[#1B40DF] transition-colors"
                  aria-label="Zoom stimulus diagram"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>

              {/* Prompt Text */}
              <h2 className="text-base sm:text-lg font-bold text-[#07152F] leading-snug mb-5">
                {currentQ.prompt}
              </h2>

              {/* Visual Stimulus Container */}
              <div className="w-full bg-[#F8FBFF] rounded-xl border border-[#E2EAF7] p-4 flex items-center justify-center min-h-[180px] sm:min-h-[220px]">
                <SpatialSvgRenderer scene={currentQ.stimulusScene} maxHeight="240px" />
              </div>
            </div>
          </div>

          {/* Answer Options Section (Right / Bottom on mobile) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-xs flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Select One Option (A, B, C, or D)
                </span>
                <span className="text-xs text-[#64748B]">Click to choose</span>
              </div>

              {/* 4 Options Grid (2x2 on desktop/tablet, 2x2 or 1x4) */}
              <div className="grid grid-cols-2 gap-3 flex-1">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onSelectAnswer(opt.id)}
                      className={`group relative flex flex-col items-center justify-between p-3 rounded-xl border transition-all text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] ${
                        isSelected
                          ? 'border-[#2453FF] bg-[#EEF4FF] shadow-[0_0_0_1.5px_#2453FF]'
                          : 'border-[#E2EAF7] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FBFF]'
                      }`}
                      aria-pressed={isSelected}
                      aria-label={`Option ${opt.id}`}
                    >
                      {/* Option Header badge */}
                      <div className="w-full flex items-center justify-between mb-2">
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                            isSelected
                              ? 'bg-[#2453FF] text-white'
                              : 'bg-gray-100 text-[#07152F] group-hover:bg-gray-200'
                          }`}
                        >
                          {opt.id}
                        </span>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setZoomScene(opt.scene);
                            setZoomTitle(`Option ${opt.id} — Question ${currentIndex + 1}`);
                          }}
                          className="text-[#94A3B8] hover:text-[#2453FF] p-1 cursor-pointer"
                          title="Enlarge option"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* SVG Scene */}
                      <div className="w-full aspect-square flex items-center justify-center p-1">
                        <SpatialSvgRenderer scene={opt.scene} maxHeight="120px" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Nav Controls */}
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-[#F1F5F9] gap-2">
                <button
                  type="button"
                  onClick={onPrev}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#07152F] bg-white border border-[#E2EAF7] hover:bg-[#F8FBFF] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {currentIndex < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={onNext}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] shadow-xs active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(true)}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#10B981] hover:bg-[#059669] shadow-xs active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Review & Submit</span>
                    <CheckCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Zoom Dialog */}
      <SpatialPuzzleZoomDialog
        isOpen={!!zoomScene}
        onClose={() => setZoomScene(null)}
        scene={zoomScene}
        title={zoomTitle}
      />

      {/* Review Modal Dialog */}
      {showReviewModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07152F]/70 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#E2EAF7]">
            <h3 className="text-lg font-bold text-[#07152F] mb-2">
              Submission Overview
            </h3>
            <p className="text-xs text-[#64748B] mb-4">
              You have answered {answeredCount} of {questions.length} questions. You can jump to
              any question below before finalizing.
            </p>

            {/* Questions Grid 1-20 */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              {questions.map((q, idx) => {
                const ans = answers[q.id];
                const isFlag = flaggedIds.includes(q.id);
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      onGoToIndex(idx);
                      setShowReviewModal(false);
                    }}
                    className={`relative h-11 rounded-lg flex flex-col items-center justify-center text-xs font-bold transition-all border ${
                      isCurrent
                        ? 'ring-2 ring-[#2453FF] border-[#2453FF]'
                        : ''
                    } ${
                      ans
                        ? 'bg-[#EEF4FF] text-[#2453FF] border-[#2453FF]/30'
                        : 'bg-white text-[#64748B] border-[#E2EAF7] hover:bg-gray-50'
                    }`}
                  >
                    <span>{idx + 1}</span>
                    <span className="text-[9px] font-normal">{ans || '—'}</span>
                    {isFlag && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#07152F] bg-white border border-[#E2EAF7] hover:bg-gray-50 transition-colors"
              >
                Continue Assessment
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowReviewModal(false);
                  onSubmit();
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] shadow-xs transition-all"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
