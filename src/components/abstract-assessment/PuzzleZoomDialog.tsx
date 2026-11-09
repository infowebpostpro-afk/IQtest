'use client';

import React, { useEffect } from 'react';
import { PuzzleDiagramData } from '@/types/abstractAssessment';
import { PuzzleDiagramRenderer } from './PuzzleDiagramRenderer';
import { X, ZoomIn } from 'lucide-react';

interface PuzzleZoomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  diagram: PuzzleDiagramData;
  prompt?: string;
  questionNumber?: number;
  title?: string;
}

export const PuzzleZoomDialog: React.FC<PuzzleZoomDialogProps> = ({
  isOpen,
  onClose,
  diagram,
  prompt,
  questionNumber,
  title,
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
