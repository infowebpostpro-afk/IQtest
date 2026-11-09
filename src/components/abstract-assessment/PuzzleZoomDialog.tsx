'use client';

import React, { useEffect } from 'react';
import { PuzzleDiagramData, AbstractOption } from '@/types/abstractAssessment';
import { PuzzleDiagramRenderer } from './PuzzleDiagramRenderer';
import { FrameBox } from './AbstractSvgPrimitives';
import { X, ZoomIn } from 'lucide-react';

interface PuzzleZoomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  diagram: PuzzleDiagramData;
  prompt?: string;
  questionNumber?: number;
  title?: string;
  options?: AbstractOption[];
  selectedOptionId?: string;
  onSelectOption?: (optionId: string) => void;
}

export const PuzzleZoomDialog: React.FC<PuzzleZoomDialogProps> = ({
  isOpen,
  onClose,
  diagram,
  prompt,
  questionNumber,
  title,
  options,
  selectedOptionId,
  onSelectOption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || `Expanded view of Question ${questionNumber || ''} puzzle diagram`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-[#E2EAF7] flex flex-col max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-[#2453FF]" />
            <h3 className="font-heading font-black text-base text-[#07152F]">
              {title || `Question ${questionNumber} — Detailed Puzzle Zoom`}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close zoom modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {prompt && (
          <p className="text-xs sm:text-sm text-slate-600 mb-6 font-medium">
            {prompt}
          </p>
        )}

        <div className="p-4 sm:p-8 bg-[#F8FAFF] rounded-2xl border border-blue-100 flex items-center justify-center">
          <PuzzleDiagramRenderer diagram={diagram} className="w-full max-w-xl" />
        </div>

        {options && options.length > 0 && (
          <div className="mt-6 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Answer Options
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onSelectOption?.(opt.id)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-[#2453FF]/6 border-[#2453FF] ring-2 ring-[#2453FF]/20 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-full flex items-center justify-between mb-1 px-1">
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-black ${
                          isSelected ? 'bg-[#2453FF] text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {opt.id}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-bold text-[#2453FF]">Selected</span>
                      )}
                    </div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                      <FrameBox frame={opt.figure} showBorder={false} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex items-center justify-end pt-4 mt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Zoom
          </button>
        </div>
      </div>
    </div>
  );
};
