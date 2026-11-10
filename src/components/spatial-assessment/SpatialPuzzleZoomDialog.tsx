'use client';

import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { SpatialScene } from '@/lib/spatial/types';
import { SpatialSvgRenderer } from './SpatialSvgRenderer';

interface SpatialPuzzleZoomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  scene: SpatialScene | null;
  title: string;
}

export const SpatialPuzzleZoomDialog: React.FC<SpatialPuzzleZoomDialogProps> = ({
  isOpen,
  onClose,
  scene,
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
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !scene) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07152F]/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="spatial-zoom-title"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E2EAF7] flex flex-col max-h-[90vh] z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-[#E2EAF7] flex items-center justify-between bg-[#F8FBFF]">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-5 h-5 text-[#2453FF]" />
            <h3 id="spatial-zoom-title" className="text-sm sm:text-base font-bold text-[#07152F]">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close zoom modal"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#64748B] hover:text-[#07152F] hover:bg-[#EEF4FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex items-center justify-center bg-white overflow-auto">
          <div className="w-full max-w-md aspect-square bg-[#F8FBFF] rounded-xl border border-[#E2EAF7] p-4 flex items-center justify-center shadow-inner">
            <SpatialSvgRenderer scene={scene} maxHeight="360px" />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-[#E2EAF7] bg-[#F8FBFF] flex items-center justify-between text-xs text-[#64748B]">
          <span>Press ESC or click outside to dismiss</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-[#07152F] bg-white border border-[#E2EAF7] hover:bg-[#EEF4FF] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
