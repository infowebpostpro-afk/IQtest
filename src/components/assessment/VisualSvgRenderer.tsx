'use client';

import React from 'react';
import { VisualAsset } from '@/types/assessment';
import { QuickVisualSvgRenderer } from './QuickVisualSvgRenderer';

interface VisualSvgRendererProps {
  asset: VisualAsset;
  className?: string;
  isOptionThumbnail?: boolean;
}

export const VisualSvgRenderer: React.FC<VisualSvgRendererProps> = ({
  asset,
  className = '',
  isOptionThumbnail = false,
}) => {
  const { puzzleId } = asset;

  // Delegate quick test puzzles to dedicated QuickVisualSvgRenderer
  if (puzzleId && puzzleId.startsWith('quick-')) {
    return (
      <QuickVisualSvgRenderer
        asset={asset}
        className={className}
        isOptionThumbnail={isOptionThumbnail}
      />
    );
  }

  // Base styling for crisp SVGs
  const svgClass = `w-full h-auto transition-transform ${className}`;

  // =========================================================================
  // ABS-01: Concentric Rings in Squares
  // =========================================================================
  if (puzzleId === 'abs-01-stimulus') {
    return (
      <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
        <div className="grid grid-cols-4 gap-3">
          {/* Frame 1: 1 circle */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 100 100" className={svgClass}>
              <rect x="10" y="10" width="80" height="80" rx="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
              <circle cx="50" cy="50" r="16" fill="none" stroke="#5046E5" strokeWidth="3" />
            </svg>
            <span className="text-xs font-semibold text-slate-500 mt-2">1</span>
          </div>
          {/* Frame 2: 2 circles */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 100 100" className={svgClass}>
              <rect x="10" y="10" width="80" height="80" rx="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
              <circle cx="50" cy="50" r="12" fill="none" stroke="#5046E5" strokeWidth="3" />
              <circle cx="50" cy="50" r="24" fill="none" stroke="#5046E5" strokeWidth="3" />
            </svg>
            <span className="text-xs font-semibold text-slate-500 mt-2">2</span>
          </div>
          {/* Frame 3: 3 circles */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 100 100" className={svgClass}>
              <rect x="10" y="10" width="80" height="80" rx="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="#5046E5" strokeWidth="3" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#5046E5" strokeWidth="3" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#5046E5" strokeWidth="3" />
            </svg>
            <span className="text-xs font-semibold text-slate-500 mt-2">3</span>
          </div>
          {/* Frame 4: Missing (?) */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-slate-50 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-600">?</span>
            </div>
            <span className="text-xs font-semibold text-indigo-600 mt-2">Target</span>
          </div>
        </div>
      </div>
    );
  }

  if (puzzleId === 'abs-01-opt-A') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="15" y="15" width="70" height="70" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="#5046E5" strokeWidth="2" />
        <line x1="45" y1="50" x2="55" y2="50" stroke="#DC2626" strokeWidth="2" />
        <line x1="50" y1="45" x2="50" y2="55" stroke="#DC2626" strokeWidth="2" />
      </svg>
    );
  }
  if (puzzleId === 'abs-01-opt-B') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="15" y="15" width="70" height="70" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="7" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="50" r="23" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#5046E5" strokeWidth="2" />
      </svg>
    );
  }
  if (puzzleId === 'abs-01-opt-C') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="15" y="15" width="70" height="70" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="5" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="50" r="11" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="50" r="17" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="50" r="23" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="50" r="29" fill="none" stroke="#5046E5" strokeWidth="2" />
      </svg>
    );
  }
  if (puzzleId === 'abs-01-opt-D') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 88,85 12,85" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="50" cy="62" r="6" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="62" r="12" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="62" r="18" fill="none" stroke="#5046E5" strokeWidth="2" />
        <circle cx="50" cy="62" r="24" fill="none" stroke="#5046E5" strokeWidth="2" />
      </svg>
    );
  }

  // =========================================================================
  // ABS-02: 2x2 Matrix Inversion (Triangle / Hexagon)
  // =========================================================================
  if (puzzleId === 'abs-02-stimulus') {
    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
        <div className="grid grid-cols-2 gap-3">
          {/* Top-Left: White triangle with solid indigo circle */}
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,15 88,82 12,82" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
              <circle cx="50" cy="58" r="14" fill="#5046E5" stroke="none" />
            </svg>
          </div>
          {/* Top-Right: Solid indigo triangle with white circle */}
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,15 88,82 12,82" fill="#5046E5" stroke="#0F172A" strokeWidth="3" />
              <circle cx="50" cy="58" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            </svg>
          </div>
          {/* Bottom-Left: White hexagon with solid indigo square */}
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,15 85,32 85,68 50,85 15,68 15,32" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
              <rect x="36" y="36" width="28" height="28" rx="2" fill="#5046E5" stroke="none" />
            </svg>
          </div>
          {/* Bottom-Right: Target ? */}
          <div className="aspect-square bg-indigo-50/50 rounded-lg border-2 border-dashed border-indigo-400 flex items-center justify-center">
            <span className="text-3xl font-bold text-indigo-600">?</span>
          </div>
        </div>
      </div>
    );
  }

  if (puzzleId === 'abs-02-opt-A') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 85,32 85,68 50,85 15,68 15,32" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="14" fill="#5046E5" stroke="none" />
      </svg>
    );
  }
  if (puzzleId === 'abs-02-opt-B') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 85,32 85,68 50,85 15,68 15,32" fill="#5046E5" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
      </svg>
    );
  }
  if (puzzleId === 'abs-02-opt-C') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 85,32 85,68 50,85 15,68 15,32" fill="#5046E5" stroke="#0F172A" strokeWidth="2.5" />
        <rect x="36" y="36" width="28" height="28" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
      </svg>
    );
  }
  if (puzzleId === 'abs-02-opt-D') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 85,32 85,68 50,85 15,68 15,32" fill="#5046E5" stroke="#0F172A" strokeWidth="2.5" />
        <rect x="36" y="36" width="28" height="28" rx="2" fill="#1E1B4B" stroke="none" />
      </svg>
    );
  }

  // =========================================================================
  // ABS-03: Octagon Dot 90° Clockwise Rotation
  // =========================================================================
  if (puzzleId === 'abs-03-stimulus') {
    return (
      <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
        <div className="grid grid-cols-4 gap-3">
          {/* Frame 1: 12 o'clock (x=50, y=15) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 100 100" className={svgClass}>
              <polygon points="35,15 65,15 85,35 85,65 65,85 35,85 15,65 15,35" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
              <circle cx="50" cy="15" r="6" fill="#5046E5" />
            </svg>
            <span className="text-xs font-semibold text-slate-500 mt-2">12:00</span>
          </div>
          {/* Frame 2: 3 o'clock (x=85, y=50) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 100 100" className={svgClass}>
              <polygon points="35,15 65,15 85,35 85,65 65,85 35,85 15,65 15,35" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
              <circle cx="85" cy="50" r="6" fill="#5046E5" />
            </svg>
            <span className="text-xs font-semibold text-slate-500 mt-2">3:00</span>
          </div>
          {/* Frame 3: 6 o'clock (x=50, y=85) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 100 100" className={svgClass}>
              <polygon points="35,15 65,15 85,35 85,65 65,85 35,85 15,65 15,35" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
              <circle cx="50" cy="85" r="6" fill="#5046E5" />
            </svg>
            <span className="text-xs font-semibold text-slate-500 mt-2">6:00</span>
          </div>
          {/* Frame 4: ? */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-slate-50 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-600">?</span>
            </div>
            <span className="text-xs font-semibold text-indigo-600 mt-2">Next</span>
          </div>
        </div>
      </div>
    );
  }

  if (puzzleId === 'abs-03-opt-A') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="35,15 65,15 85,35 85,65 65,85 35,85 15,65 15,35" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <circle cx="50" cy="15" r="5" fill="#5046E5" />
      </svg>
    );
  }
  if (puzzleId === 'abs-03-opt-B') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="35,15 65,15 85,35 85,65 65,85 35,85 15,65 15,35" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <circle cx="21" cy="79" r="5" fill="#5046E5" />
      </svg>
    );
  }
  if (puzzleId === 'abs-03-opt-C') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="35,15 65,15 85,35 85,65 65,85 35,85 15,65 15,35" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <circle cx="15" cy="50" r="5" fill="#5046E5" />
      </svg>
    );
  }
  if (puzzleId === 'abs-03-opt-D') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="35,15 65,15 85,35 85,65 65,85 35,85 15,65 15,35" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <circle cx="85" cy="50" r="5" fill="#5046E5" />
      </svg>
    );
  }

  // =========================================================================
  // ABS-04: 2x2 Matrix Polygon Edges + Internal Lines
  // =========================================================================
  if (puzzleId === 'abs-04-stimulus') {
    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
        <div className="grid grid-cols-2 gap-3">
          {/* Triangle with 1 horizontal line */}
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,15 88,82 12,82" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
              <line x1="28" y1="55" x2="72" y2="55" stroke="#5046E5" strokeWidth="3" />
            </svg>
          </div>
          {/* Square with 2 horizontal lines */}
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="18" y="18" width="64" height="64" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
              <line x1="18" y1="40" x2="82" y2="40" stroke="#5046E5" strokeWidth="3" />
              <line x1="18" y1="60" x2="82" y2="60" stroke="#5046E5" strokeWidth="3" />
            </svg>
          </div>
          {/* Pentagon with 3 horizontal lines */}
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,15 88,43 73,85 27,85 12,43" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
              <line x1="18" y1="40" x2="82" y2="40" stroke="#5046E5" strokeWidth="3" />
              <line x1="22" y1="55" x2="78" y2="55" stroke="#5046E5" strokeWidth="3" />
              <line x1="26" y1="70" x2="74" y2="70" stroke="#5046E5" strokeWidth="3" />
            </svg>
          </div>
          {/* Target ? */}
          <div className="aspect-square bg-indigo-50/50 rounded-lg border-2 border-dashed border-indigo-400 flex items-center justify-center">
            <span className="text-3xl font-bold text-indigo-600">?</span>
          </div>
        </div>
      </div>
    );
  }

  if (puzzleId === 'abs-04-opt-A') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 85,32 85,68 50,85 15,68 15,32" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
        <line x1="20" y1="38" x2="80" y2="38" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="16" y1="50" x2="84" y2="50" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="20" y1="62" x2="80" y2="62" stroke="#5046E5" strokeWidth="2.5" />
      </svg>
    );
  }
  if (puzzleId === 'abs-04-opt-B') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 85,32 85,68 50,85 15,68 15,32" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
        <line x1="25" y1="33" x2="75" y2="33" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="16" y1="44" x2="84" y2="44" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="16" y1="56" x2="84" y2="56" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="25" y1="67" x2="75" y2="67" stroke="#5046E5" strokeWidth="2.5" />
      </svg>
    );
  }
  if (puzzleId === 'abs-04-opt-C') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,14 79,28 89,58 71,84 29,84 11,58 21,28" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
        <line x1="25" y1="33" x2="75" y2="33" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="16" y1="44" x2="84" y2="44" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="16" y1="56" x2="84" y2="56" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="25" y1="67" x2="75" y2="67" stroke="#5046E5" strokeWidth="2.5" />
      </svg>
    );
  }
  if (puzzleId === 'abs-04-opt-D') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 88,43 73,85 27,85 12,43" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
        <line x1="25" y1="33" x2="75" y2="33" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="16" y1="44" x2="84" y2="44" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="16" y1="56" x2="84" y2="56" stroke="#5046E5" strokeWidth="2.5" />
        <line x1="25" y1="67" x2="75" y2="67" stroke="#5046E5" strokeWidth="2.5" />
      </svg>
    );
  }

  // =========================================================================
  // ABS-05: 3x3 XOR Matrix (Superposition with Cancellation)
  // =========================================================================
  if (puzzleId === 'abs-05-stimulus') {
    return (
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
        <div className="grid grid-cols-3 gap-2.5">
          {/* Row 1 */}
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="12" y1="18" x2="48" y2="18" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="42" y1="12" x2="42" y2="48" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="12" y1="18" x2="48" y2="18" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
              <line x1="42" y1="12" x2="42" y2="48" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Row 2 */}
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="30" y1="12" x2="30" y2="48" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
              <line x1="12" y1="42" x2="48" y2="42" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="12" y1="42" x2="48" y2="42" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="30" y1="12" x2="30" y2="48" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Row 3 */}
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="14" y1="14" x2="46" y2="46" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
              <line x1="12" y1="30" x2="48" y2="30" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="aspect-square bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-200">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="14" y1="46" x2="46" y2="14" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
              <line x1="12" y1="30" x2="48" y2="30" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          {/* Row 3 Target */}
          <div className="aspect-square bg-indigo-50/50 rounded-lg border-2 border-dashed border-indigo-400 flex items-center justify-center">
            <span className="text-3xl font-bold text-indigo-600">?</span>
          </div>
        </div>
      </div>
    );
  }

  if (puzzleId === 'abs-05-opt-A') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="14" y1="14" x2="46" y2="46" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (puzzleId === 'abs-05-opt-B') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="12" y1="30" x2="48" y2="30" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (puzzleId === 'abs-05-opt-C') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="14" y1="14" x2="46" y2="46" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
        <line x1="14" y1="46" x2="46" y2="14" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (puzzleId === 'abs-05-opt-D') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="8" y="8" width="44" height="44" fill="none" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="14" y1="14" x2="46" y2="46" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
        <line x1="14" y1="46" x2="46" y2="14" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
        <line x1="12" y1="30" x2="48" y2="30" stroke="#5046E5" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // =========================================================================
  // SPA-01: Planar 2D Rotation (L-Bracket)
  // =========================================================================
  if (puzzleId === 'spa-01-stimulus') {
    return (
      <div className="w-full max-w-xs mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col items-center">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Reference Figure</span>
        <svg viewBox="0 0 100 100" className="w-28 h-28">
          {/* L shape: horizontal arm at bottom left pointing right, vertical stem going up with dot at top */}
          <path d="M 25 25 L 25 75 L 75 75" fill="none" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25" cy="25" r="8" fill="#5046E5" />
          <rect x="67" y="67" width="16" height="16" rx="2" fill="#10B981" />
        </svg>
      </div>
    );
  }

  if (puzzleId === 'spa-01-opt-A') {
    // 90 deg clockwise rotation: dot moves to (75, 25), square to (25, 75)
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <path d="M 75 25 L 25 25 L 25 75" fill="none" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="75" cy="25" r="8" fill="#5046E5" />
        <rect x="17" y="67" width="16" height="16" rx="2" fill="#10B981" />
      </svg>
    );
  }
  if (puzzleId === 'spa-01-opt-B') {
    // Flipped horizontally (Mirror reflection)
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <path d="M 75 25 L 75 75 L 25 75" fill="none" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="75" cy="25" r="8" fill="#5046E5" />
        <rect x="17" y="67" width="16" height="16" rx="2" fill="#10B981" />
      </svg>
    );
  }
  if (puzzleId === 'spa-01-opt-C') {
    // Inverted aspect ratio
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <path d="M 25 35 L 25 65 L 55 65" fill="none" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="35" r="8" fill="#5046E5" />
        <rect x="47" y="57" width="16" height="16" rx="2" fill="#10B981" />
      </svg>
    );
  }
  if (puzzleId === 'spa-01-opt-D') {
    // Flipped vertically and rotated
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <path d="M 25 75 L 25 25 L 75 25" fill="none" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="75" r="8" fill="#5046E5" />
        <rect x="67" y="17" width="16" height="16" rx="2" fill="#10B981" />
      </svg>
    );
  }

  // =========================================================================
  // SPA-02: Mirror Reflection across Vertical Axis
  // =========================================================================
  if (puzzleId === 'spa-02-stimulus') {
    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-center">
        <svg viewBox="0 0 140 100" className="w-full h-auto max-h-36">
          {/* Reference glyph on the left: asymmetric shape pointing left */}
          <polygon points="45,20 20,40 45,60 45,80 55,80 55,20" fill="#EEF2FF" stroke="#5046E5" strokeWidth="3" />
          <circle cx="35" cy="40" r="4" fill="#5046E5" />
          {/* Vertical Mirror Line */}
          <line x1="85" y1="10" x2="85" y2="90" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,4" />
          <text x="88" y="20" fill="#64748B" fontSize="9" fontWeight="600">MIRROR</text>
          {/* Target placeholder on the right */}
          <rect x="95" y="25" width="40" height="50" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeDasharray="3,3" />
          <text x="111" y="55" fill="#6366F1" fontSize="18" fontWeight="bold">?</text>
        </svg>
      </div>
    );
  }

  if (puzzleId === 'spa-02-opt-A') {
    return (
      <svg viewBox="0 0 80 80" className={svgClass}>
        {/* Same orientation (Translation, not mirror) */}
        <polygon points="45,15 20,35 45,55 45,70 55,70 55,15" fill="#EEF2FF" stroke="#5046E5" strokeWidth="2.5" />
        <circle cx="35" cy="35" r="3.5" fill="#5046E5" />
      </svg>
    );
  }
  if (puzzleId === 'spa-02-opt-B') {
    return (
      <svg viewBox="0 0 80 80" className={svgClass}>
        {/* Correct Lateral Mirror: pointing right */}
        <polygon points="35,15 60,35 35,55 35,70 25,70 25,15" fill="#EEF2FF" stroke="#5046E5" strokeWidth="2.5" />
        <circle cx="45" cy="35" r="3.5" fill="#5046E5" />
      </svg>
    );
  }
  if (puzzleId === 'spa-02-opt-C') {
    return (
      <svg viewBox="0 0 80 80" className={svgClass}>
        {/* Flipped upside down */}
        <polygon points="45,65 20,45 45,25 45,10 55,10 55,65" fill="#EEF2FF" stroke="#5046E5" strokeWidth="2.5" />
        <circle cx="35" cy="45" r="3.5" fill="#5046E5" />
      </svg>
    );
  }
  if (puzzleId === 'spa-02-opt-D') {
    return (
      <svg viewBox="0 0 80 80" className={svgClass}>
        {/* 180 deg rotation */}
        <polygon points="35,65 60,45 35,25 35,10 25,10 25,65" fill="#EEF2FF" stroke="#5046E5" strokeWidth="2.5" />
        <circle cx="45" cy="45" r="3.5" fill="#5046E5" />
      </svg>
    );
  }

  // =========================================================================
  // SPA-03: Cube Mental Folding Net
  // =========================================================================
  if (puzzleId === 'spa-03-stimulus') {
    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col items-center">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Unfolded Cube Net</span>
        <svg viewBox="0 0 120 160" className="w-36 h-auto">
          {/* Net Structure */}
          {/* Top: Square face (x=40, y=10) */}
          <rect x="40" y="10" width="40" height="40" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
          <rect x="52" y="22" width="16" height="16" fill="#5046E5" />

          {/* Left Wing: Cross face (x=0, y=50) */}
          <rect x="0" y="50" width="40" height="40" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
          <line x1="20" y1="60" x2="20" y2="80" stroke="#5046E5" strokeWidth="4" strokeLinecap="round" />
          <line x1="10" y1="70" x2="30" y2="70" stroke="#5046E5" strokeWidth="4" strokeLinecap="round" />

          {/* Center: Circle face (x=40, y=50) */}
          <rect x="40" y="50" width="40" height="40" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
          <circle cx="60" cy="70" r="10" fill="#5046E5" />

          {/* Right Wing: Triangle face (x=80, y=50) */}
          <rect x="80" y="50" width="40" height="40" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
          <polygon points="100,58 112,80 88,80" fill="#5046E5" />

          {/* Below Center: Diamond face (x=40, y=90) */}
          <rect x="40" y="90" width="40" height="40" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
          <polygon points="60,98 72,110 60,122 48,110" fill="#5046E5" />

          {/* Bottom flap: Star / Asterisk face (x=40, y=130) */}
          <rect x="40" y="130" width="40" height="40" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
          <polygon points="60,135 63,144 72,144 65,150 68,158 60,153 52,158 55,150 48,144 57,144" fill="#5046E5" />
        </svg>
      </div>
    );
  }

  // Perspective views of 3D cubes showing 3 faces
  if (puzzleId === 'spa-03-opt-A') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        {/* Isometric Cube view with Circle, Star, Square */}
        <polygon points="50,15 85,35 50,55 15,35" fill="#EEF2FF" stroke="#0F172A" strokeWidth="2" />
        <rect x="44" y="28" width="12" height="12" fill="#5046E5" />
        <polygon points="15,35 50,55 50,90 15,70" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
        <circle cx="32" cy="65" r="7" fill="#5046E5" />
        <polygon points="50,55 85,35 85,70 50,90" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
        <polygon points="68,60 70,66 76,66 71,70 73,76 68,72 63,76 65,70 60,66 66,66" fill="#5046E5" />
      </svg>
    );
  }
  if (puzzleId === 'spa-03-opt-B') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 85,35 50,55 15,35" fill="#EEF2FF" stroke="#0F172A" strokeWidth="2" />
        <polygon points="50,23 60,35 50,47 40,35" fill="#5046E5" />
        <polygon points="15,35 50,55 50,90 15,70" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
        <line x1="32" y1="58" x2="32" y2="72" stroke="#5046E5" strokeWidth="3" />
        <line x1="25" y1="65" x2="39" y2="65" stroke="#5046E5" strokeWidth="3" />
        <polygon points="50,55 85,35 85,70 50,90" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
        <polygon points="68,58 77,74 59,74" fill="#5046E5" />
      </svg>
    );
  }
  if (puzzleId === 'spa-03-opt-C') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 85,35 50,55 15,35" fill="#EEF2FF" stroke="#0F172A" strokeWidth="2" />
        <rect x="44" y="28" width="12" height="12" fill="#5046E5" />
        <polygon points="15,35 50,55 50,90 15,70" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
        <polygon points="32,58 40,68 32,78 24,68" fill="#5046E5" />
        <polygon points="50,55 85,35 85,70 50,90" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
        <polygon points="68,60 70,66 76,66 71,70 73,76 68,72 63,76 65,70 60,66 66,66" fill="#5046E5" />
      </svg>
    );
  }
  if (puzzleId === 'spa-03-opt-D') {
    // Valid: Circle (top/front), Square (top), Cross (side)
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="50,15 85,35 50,55 15,35" fill="#EEF2FF" stroke="#0F172A" strokeWidth="2" />
        <rect x="44" y="28" width="12" height="12" fill="#5046E5" />
        <polygon points="15,35 50,55 50,90 15,70" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
        <line x1="32" y1="58" x2="32" y2="72" stroke="#5046E5" strokeWidth="3" />
        <line x1="25" y1="65" x2="39" y2="65" stroke="#5046E5" strokeWidth="3" />
        <polygon points="50,55 85,35 85,70 50,90" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
        <circle cx="68" cy="65" r="8" fill="#5046E5" />
      </svg>
    );
  }

  // =========================================================================
  // SPA-04: 4x4 Grid Vector Tracking
  // =========================================================================
  if (puzzleId === 'spa-04-stimulus') {
    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col items-center">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Initial State (t = 0)</span>
        <svg viewBox="0 0 120 120" className="w-40 h-40">
          {/* 4x4 grid */}
          <rect x="10" y="10" width="100" height="100" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
          <line x1="35" y1="10" x2="35" y2="110" stroke="#E2E8F0" strokeWidth="1.5" />
          <line x1="60" y1="10" x2="60" y2="110" stroke="#E2E8F0" strokeWidth="1.5" />
          <line x1="85" y1="10" x2="85" y2="110" stroke="#E2E8F0" strokeWidth="1.5" />
          <line x1="10" y1="35" x2="110" y2="35" stroke="#E2E8F0" strokeWidth="1.5" />
          <line x1="10" y1="60" x2="110" y2="60" stroke="#E2E8F0" strokeWidth="1.5" />
          <line x1="10" y1="85" x2="110" y2="85" stroke="#E2E8F0" strokeWidth="1.5" />

          {/* Row 1, Col 2: Blue Square (x=35..60, y=10..35 -> center 47.5, 22.5) */}
          <rect x="40" y="15" width="15" height="15" rx="3" fill="#3B82F6" />
          {/* Row 3, Col 2: Purple Triangle (x=35..60, y=60..85 -> center 47.5, 72.5) */}
          <polygon points="47.5,65 56,79 39,79" fill="#9333EA" />
        </svg>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-600 mt-2">
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-blue-500"></span> Blue: East (+1/sec)</div>
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-purple-600"></span> Purple: North (+1/sec)</div>
        </div>
      </div>
    );
  }

  if (puzzleId === 'spa-04-opt-A') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="5" y="5" width="90" height="90" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
        <line x1="27.5" y1="5" x2="27.5" y2="95" stroke="#E2E8F0" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="#E2E8F0" />
        <line x1="72.5" y1="5" x2="72.5" y2="95" stroke="#E2E8F0" />
        <line x1="5" y1="27.5" x2="95" y2="27.5" stroke="#E2E8F0" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#E2E8F0" />
        <line x1="5" y1="72.5" x2="95" y2="72.5" stroke="#E2E8F0" />
        <rect x="55" y="10" width="12" height="12" rx="2" fill="#3B82F6" />
        <polygon points="38.75,32 46,44 31,44" fill="#9333EA" />
      </svg>
    );
  }
  if (puzzleId === 'spa-04-opt-B') {
    // Blue at Row 1, Col 4; Purple at Row 1, Col 2 (CORRECT)
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="5" y="5" width="90" height="90" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
        <line x1="27.5" y1="5" x2="27.5" y2="95" stroke="#E2E8F0" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="#E2E8F0" />
        <line x1="72.5" y1="5" x2="72.5" y2="95" stroke="#E2E8F0" />
        <line x1="5" y1="27.5" x2="95" y2="27.5" stroke="#E2E8F0" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#E2E8F0" />
        <line x1="5" y1="72.5" x2="95" y2="72.5" stroke="#E2E8F0" />
        <polygon points="38.75,9 46,21 31,21" fill="#9333EA" />
        <rect x="77.5" y="10" width="12" height="12" rx="2" fill="#3B82F6" />
      </svg>
    );
  }
  if (puzzleId === 'spa-04-opt-C') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="5" y="5" width="90" height="90" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
        <line x1="27.5" y1="5" x2="27.5" y2="95" stroke="#E2E8F0" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="#E2E8F0" />
        <line x1="72.5" y1="5" x2="72.5" y2="95" stroke="#E2E8F0" />
        <line x1="5" y1="27.5" x2="95" y2="27.5" stroke="#E2E8F0" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#E2E8F0" />
        <line x1="5" y1="72.5" x2="95" y2="72.5" stroke="#E2E8F0" />
        <rect x="77.5" y="32" width="12" height="12" rx="2" fill="#3B82F6" />
        <polygon points="38.75,32 46,44 31,44" fill="#9333EA" />
      </svg>
    );
  }
  if (puzzleId === 'spa-04-opt-D') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="5" y="5" width="90" height="90" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
        <line x1="27.5" y1="5" x2="27.5" y2="95" stroke="#E2E8F0" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="#E2E8F0" />
        <line x1="72.5" y1="5" x2="72.5" y2="95" stroke="#E2E8F0" />
        <line x1="5" y1="27.5" x2="95" y2="27.5" stroke="#E2E8F0" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#E2E8F0" />
        <line x1="5" y1="72.5" x2="95" y2="72.5" stroke="#E2E8F0" />
        <rect x="32" y="10" width="12" height="12" rx="2" fill="#3B82F6" />
        <polygon points="83.75,55 91,67 76,67" fill="#9333EA" />
      </svg>
    );
  }

  // =========================================================================
  // SPA-05: 3D Block Structure to 2D Orthographic Right Profile
  // =========================================================================
  if (puzzleId === 'spa-05-stimulus') {
    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col items-center">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">3D Isometric View</span>
        <svg viewBox="0 0 140 120" className="w-44 h-auto">
          {/* Stepped Structure Isometric: Col 1 (left) H=3, Col 2 (mid) H=2, Col 3 (right) H=1 */}
          {/* Column 1 (height 3) */}
          <polygon points="20,50 35,42 50,50 35,58" fill="#A5B4FC" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="20,50 35,58 35,108 20,100" fill="#6366F1" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="35,58 50,50 50,100 35,108" fill="#4338CA" stroke="#0F172A" strokeWidth="1.5" />

          {/* Column 2 (height 2) */}
          <polygon points="50,67 65,59 80,67 65,75" fill="#A5B4FC" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="50,67 65,75 65,108 50,100" fill="#6366F1" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="65,75 80,67 80,100 65,108" fill="#4338CA" stroke="#0F172A" strokeWidth="1.5" />

          {/* Column 3 (height 1) */}
          <polygon points="80,84 95,76 110,84 95,92" fill="#A5B4FC" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="80,84 95,92 95,108 80,100" fill="#6366F1" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="95,92 110,84 110,100 95,108" fill="#4338CA" stroke="#0F172A" strokeWidth="1.5" />

          {/* Eye arrow looking from right */}
          <path d="M 130 92 L 115 92" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />
          <polygon points="115,89 110,92 115,95" fill="#DC2626" />
          <text x="110" y="80" fill="#DC2626" fontSize="8" fontWeight="bold">VIEW</text>
        </svg>
      </div>
    );
  }

  if (puzzleId === 'spa-05-opt-A') {
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="35" y="60" width="30" height="30" fill="#EEF2FF" stroke="#0F172A" strokeWidth="2.5" />
      </svg>
    );
  }
  if (puzzleId === 'spa-05-opt-B') {
    // 1 unit wide, 3 units high (CORRECT)
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="35" y="10" width="30" height="80" fill="#EEF2FF" stroke="#0F172A" strokeWidth="2.5" />
        <line x1="35" y1="36" x2="65" y2="36" stroke="#5046E5" strokeWidth="2" strokeDasharray="3,2" />
        <line x1="35" y1="63" x2="65" y2="63" stroke="#5046E5" strokeWidth="2" strokeDasharray="3,2" />
      </svg>
    );
  }
  if (puzzleId === 'spa-05-opt-C') {
    // Stepped front profile
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <polygon points="10,90 90,90 90,65 65,65 65,40 38,40 38,15 10,15" fill="#EEF2FF" stroke="#0F172A" strokeWidth="2.5" />
      </svg>
    );
  }
  if (puzzleId === 'spa-05-opt-D') {
    // 3x3 big square
    return (
      <svg viewBox="0 0 100 100" className={svgClass}>
        <rect x="15" y="15" width="70" height="70" fill="#EEF2FF" stroke="#0F172A" strokeWidth="2.5" />
      </svg>
    );
  }

  // Fallback
  return (
    <div className="w-full h-16 bg-slate-100 flex items-center justify-center text-xs text-slate-500 rounded">
      Diagram: {puzzleId}
    </div>
  );
};
