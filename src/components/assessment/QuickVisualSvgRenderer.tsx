'use client';

import React from 'react';
import { VisualAsset } from '@/types/assessment';

interface QuickVisualSvgRendererProps {
  asset: VisualAsset;
  className?: string;
  isOptionThumbnail?: boolean;
}

export const QuickVisualSvgRenderer: React.FC<QuickVisualSvgRendererProps> = ({
  asset,
  className = '',
  isOptionThumbnail = false,
}) => {
  const { puzzleId } = asset;
  const svgClass = `w-full h-auto transition-transform ${className}`;

  // =========================================================================
  // QUICK-ABS-01: Rotating Arrow Sequence
  // =========================================================================
  if (puzzleId === 'quick-abs-01-stimulus') {
    return (
      <div className="w-full max-w-md mx-auto p-2 bg-white rounded-xl border border-slate-200">
        <div className="grid grid-cols-4 gap-2">
          {/* Frame 1: Up (12:00) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 80 80" className={svgClass}>
              <rect x="5" y="5" width="70" height="70" rx="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
              <line x1="40" y1="58" x2="40" y2="24" stroke="#2453FF" strokeWidth="5" strokeLinecap="round" />
              <polygon points="40,16 28,30 52,30" fill="#2453FF" />
            </svg>
            <span className="text-[10px] font-semibold text-slate-500 mt-1">1</span>
          </div>
          {/* Frame 2: Right (3:00) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 80 80" className={svgClass}>
              <rect x="5" y="5" width="70" height="70" rx="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
              <line x1="22" y1="40" x2="56" y2="40" stroke="#2453FF" strokeWidth="5" strokeLinecap="round" />
              <polygon points="64,40 50,28 50,52" fill="#2453FF" />
            </svg>
            <span className="text-[10px] font-semibold text-slate-500 mt-1">2</span>
          </div>
          {/* Frame 3: Down (6:00) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 80 80" className={svgClass}>
              <rect x="5" y="5" width="70" height="70" rx="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
              <line x1="40" y1="22" x2="40" y2="56" stroke="#2453FF" strokeWidth="5" strokeLinecap="round" />
              <polygon points="40,64 28,50 52,50" fill="#2453FF" />
            </svg>
            <span className="text-[10px] font-semibold text-slate-500 mt-1">3</span>
          </div>
          {/* Frame 4: Target (?) */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-slate-50 border-2 border-dashed border-[#2453FF] rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-[#2453FF]">?</span>
            </div>
            <span className="text-[10px] font-bold text-[#2453FF] mt-1">Target</span>
          </div>
        </div>
      </div>
    );
  }

  if (puzzleId === 'quick-abs-01-opt-A') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="4" y="4" width="52" height="52" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <line x1="30" y1="44" x2="30" y2="18" stroke="#2453FF" strokeWidth="4" strokeLinecap="round" />
        <polygon points="30,12 21,23 39,23" fill="#2453FF" />
      </svg>
    );
  }
  if (puzzleId === 'quick-abs-01-opt-B') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="4" y="4" width="52" height="52" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <line x1="18" y1="18" x2="40" y2="40" stroke="#2453FF" strokeWidth="4" strokeLinecap="round" />
        <polygon points="46,46 33,42 42,33" fill="#2453FF" />
      </svg>
    );
  }
  if (puzzleId === 'quick-abs-01-opt-C') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="4" y="4" width="52" height="52" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <line x1="44" y1="30" x2="18" y2="30" stroke="#2453FF" strokeWidth="4" strokeLinecap="round" />
        <polygon points="12,30 23,21 23,39" fill="#2453FF" />
      </svg>
    );
  }
  if (puzzleId === 'quick-abs-01-opt-D') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="4" y="4" width="52" height="52" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <line x1="30" y1="16" x2="30" y2="42" stroke="#2453FF" strokeWidth="4" strokeLinecap="round" />
        <polygon points="30,48 21,37 39,37" fill="#2453FF" />
      </svg>
    );
  }

  // =========================================================================
  // QUICK-ABS-02: 2x2 Matrix Shape Nesting & Fill
  // =========================================================================
  if (puzzleId === 'quick-abs-02-stimulus') {
    return (
      <div className="w-full max-w-xs mx-auto p-2 bg-white rounded-xl border border-slate-200">
        <div className="grid grid-cols-2 gap-2">
          {/* Row 1, Col 1: Triangle + Outline Circle */}
          <div className="p-1 bg-slate-50 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 70 70" className={svgClass}>
              <polygon points="35,8 10,60 60,60" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
              <circle cx="35" cy="40" r="9" fill="#FFFFFF" stroke="#2453FF" strokeWidth="2.5" />
            </svg>
          </div>
          {/* Row 1, Col 2: Triangle + Solid Blue Circle */}
          <div className="p-1 bg-slate-50 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 70 70" className={svgClass}>
              <polygon points="35,8 10,60 60,60" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
              <circle cx="35" cy="40" r="9" fill="#2453FF" stroke="#2453FF" strokeWidth="1" />
            </svg>
          </div>
          {/* Row 2, Col 1: Square + Outline Star */}
          <div className="p-1 bg-slate-50 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 70 70" className={svgClass}>
              <rect x="12" y="12" width="46" height="46" rx="4" fill="none" stroke="#0F172A" strokeWidth="3" />
              <polygon
                points="35,22 38,30 46,30 40,35 42,43 35,38 28,43 30,35 24,30 32,30"
                fill="#FFFFFF"
                stroke="#2453FF"
                strokeWidth="2"
              />
            </svg>
          </div>
          {/* Row 2, Col 2: Missing Target */}
          <div className="aspect-square bg-blue-50/50 border-2 border-dashed border-[#2453FF] rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-[#2453FF]">?</span>
          </div>
        </div>
      </div>
    );
  }

  if (puzzleId === 'quick-abs-02-opt-A') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="8" y="8" width="44" height="44" rx="4" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
        <polygon
          points="30,19 33,27 41,27 35,31 37,39 30,34 23,39 25,31 19,27 27,27"
          fill="#FFFFFF"
          stroke="#2453FF"
          strokeWidth="1.8"
        />
      </svg>
    );
  }
  if (puzzleId === 'quick-abs-02-opt-B') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <circle cx="30" cy="30" r="22" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
        <polygon
          points="30,19 33,27 41,27 35,31 37,39 30,34 23,39 25,31 19,27 27,27"
          fill="#2453FF"
        />
      </svg>
    );
  }
  if (puzzleId === 'quick-abs-02-opt-C') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="8" y="8" width="44" height="44" rx="4" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
        <polygon
          points="30,19 33,27 41,27 35,31 37,39 30,34 23,39 25,31 19,27 27,27"
          fill="#2453FF"
        />
      </svg>
    );
  }
  if (puzzleId === 'quick-abs-02-opt-D') {
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <polygon points="30,8 8,50 52,50" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
        <polygon
          points="30,26 33,33 40,33 34,37 36,44 30,40 24,44 26,37 20,33 27,33"
          fill="#2453FF"
        />
      </svg>
    );
  }

  // =========================================================================
  // QUICK-ABS-03: Dual Motion Quadrants (Dot CW, Square CCW)
  // =========================================================================
  if (puzzleId === 'quick-abs-03-stimulus') {
    return (
      <div className="w-full max-w-md mx-auto p-2 bg-white rounded-xl border border-slate-200">
        <div className="grid grid-cols-4 gap-2">
          {/* Frame 1: Dot in TL (25, 25), Square in TR (55, 25) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 80 80" className={svgClass}>
              <circle cx="40" cy="40" r="34" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
              <line x1="40" y1="6" x2="40" y2="74" stroke="#CBD5E1" strokeWidth="1.5" />
              <line x1="6" y1="40" x2="74" y2="40" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="26" cy="26" r="6" fill="#2453FF" />
              <rect x="49" y="21" width="10" height="10" fill="#0F172A" rx="2" />
            </svg>
            <span className="text-[10px] font-semibold text-slate-500 mt-1">1</span>
          </div>
          {/* Frame 2: Dot in TR (54, 26), Square in TL (21, 21) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 80 80" className={svgClass}>
              <circle cx="40" cy="40" r="34" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
              <line x1="40" y1="6" x2="40" y2="74" stroke="#CBD5E1" strokeWidth="1.5" />
              <line x1="6" y1="40" x2="74" y2="40" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="54" cy="26" r="6" fill="#2453FF" />
              <rect x="21" y="21" width="10" height="10" fill="#0F172A" rx="2" />
            </svg>
            <span className="text-[10px] font-semibold text-slate-500 mt-1">2</span>
          </div>
          {/* Frame 3: Dot in BR (54, 54), Square in BL (21, 49) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 80 80" className={svgClass}>
              <circle cx="40" cy="40" r="34" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
              <line x1="40" y1="6" x2="40" y2="74" stroke="#CBD5E1" strokeWidth="1.5" />
              <line x1="6" y1="40" x2="74" y2="40" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="54" cy="54" r="6" fill="#2453FF" />
              <rect x="21" y="49" width="10" height="10" fill="#0F172A" rx="2" />
            </svg>
            <span className="text-[10px] font-semibold text-slate-500 mt-1">3</span>
          </div>
          {/* Frame 4: Target (?) */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-slate-50 border-2 border-dashed border-[#2453FF] rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-[#2453FF]">?</span>
            </div>
            <span className="text-[10px] font-bold text-[#2453FF] mt-1">Target</span>
          </div>
        </div>
      </div>
    );
  }

  if (puzzleId === 'quick-abs-03-opt-A') {
    // Dot in BL, Square in BR
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <circle cx="30" cy="30" r="26" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <line x1="30" y1="4" x2="30" y2="56" stroke="#CBD5E1" strokeWidth="1.2" />
        <line x1="4" y1="30" x2="56" y2="30" stroke="#CBD5E1" strokeWidth="1.2" />
        <circle cx="19" cy="41" r="5" fill="#2453FF" />
        <rect x="37" y="37" width="8" height="8" fill="#0F172A" rx="1.5" />
      </svg>
    );
  }
  if (puzzleId === 'quick-abs-03-opt-B') {
    // Dot in BR, Square in TR
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <circle cx="30" cy="30" r="26" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <line x1="30" y1="4" x2="30" y2="56" stroke="#CBD5E1" strokeWidth="1.2" />
        <line x1="4" y1="30" x2="56" y2="30" stroke="#CBD5E1" strokeWidth="1.2" />
        <circle cx="41" cy="41" r="5" fill="#2453FF" />
        <rect x="37" y="15" width="8" height="8" fill="#0F172A" rx="1.5" />
      </svg>
    );
  }
  if (puzzleId === 'quick-abs-03-opt-C') {
    // Dot in TL, Square in BL
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <circle cx="30" cy="30" r="26" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <line x1="30" y1="4" x2="30" y2="56" stroke="#CBD5E1" strokeWidth="1.2" />
        <line x1="4" y1="30" x2="56" y2="30" stroke="#CBD5E1" strokeWidth="1.2" />
        <circle cx="19" cy="19" r="5" fill="#2453FF" />
        <rect x="15" y="37" width="8" height="8" fill="#0F172A" rx="1.5" />
      </svg>
    );
  }
  if (puzzleId === 'quick-abs-03-opt-D') {
    // Both in BL
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <circle cx="30" cy="30" r="26" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
        <line x1="30" y1="4" x2="30" y2="56" stroke="#CBD5E1" strokeWidth="1.2" />
        <line x1="4" y1="30" x2="56" y2="30" stroke="#CBD5E1" strokeWidth="1.2" />
        <circle cx="16" cy="41" r="4.5" fill="#2453FF" />
        <rect x="23" y="37" width="7" height="7" fill="#0F172A" rx="1.5" />
      </svg>
    );
  }

  // =========================================================================
  // QUICK-SPA-01: L-shape 90° Clockwise Rotation
  // =========================================================================
  if (puzzleId === 'quick-spa-01-stimulus') {
    return (
      <div className="w-full max-w-xs mx-auto p-2 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
        <svg viewBox="0 0 80 80" className="w-24 h-24">
          <rect x="4" y="4" width="72" height="72" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
          {/* Target upright L: vertical bar on left (x=20..36, y=16..60), foot on bottom (x=36..60, y=44..60) */}
          <path
            d="M 22 16 L 36 16 L 36 44 L 60 44 L 60 60 L 22 60 Z"
            fill="#2453FF"
            stroke="#07152F"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] font-bold text-slate-700 mt-1">Target Shape (Upright L)</span>
      </div>
    );
  }

  if (puzzleId === 'quick-spa-01-opt-A') {
    // 90° CW: horizontal top bar going right (y=22..36, x=20..64), foot pointing down at right (x=48..64, y=36..60)
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="4" y="4" width="52" height="52" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
        <path
          d="M 16 22 L 48 22 L 48 48 L 34 48 L 34 36 L 16 36 Z"
          fill="#2453FF"
          stroke="#07152F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (puzzleId === 'quick-spa-01-opt-B') {
    // 180° rotation: inverted
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="4" y="4" width="52" height="52" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
        <path
          d="M 22 16 L 46 16 L 46 48 L 32 48 L 32 30 L 22 30 Z"
          fill="#2453FF"
          stroke="#07152F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (puzzleId === 'quick-spa-01-opt-C') {
    // 270° rotation: horizontal bar on bottom, foot pointing up at left
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="4" y="4" width="52" height="52" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
        <path
          d="M 16 16 L 30 16 L 30 28 L 48 28 L 48 42 L 16 42 Z"
          fill="#2453FF"
          stroke="#07152F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (puzzleId === 'quick-spa-01-opt-D') {
    // Reflected (mirror image)
    return (
      <svg viewBox="0 0 60 60" className={svgClass}>
        <rect x="4" y="4" width="52" height="52" rx="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
        <path
          d="M 38 16 L 24 16 L 24 44 L 14 44 L 14 48 L 38 48 Z"
          fill="#2453FF"
          stroke="#07152F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // =========================================================================
  // QUICK-SPA-02: 3D Cube Folding Net
  // =========================================================================
  if (puzzleId === 'quick-spa-02-stimulus') {
    return (
      <div className="w-full max-w-xs mx-auto p-2 bg-white rounded-xl border border-slate-200 flex flex-col items-center">
        <svg viewBox="0 0 100 110" className="w-24 h-26">
          {/* Net grid: cell size = 20 */}
          {/* Top (Circle): col 2, row 1 (x=40..60, y=10..30) */}
          <rect x="40" y="10" width="20" height="20" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
          <circle cx="50" cy="20" r="5" fill="#2453FF" />

          {/* Left (Star): col 1, row 2 (x=20..40, y=30..50) */}
          <rect x="20" y="30" width="20" height="20" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="30,34 32,38 36,38 33,41 34,45 30,42 26,45 27,41 24,38 28,38" fill="#F59E0B" />

          {/* Center (Plus): col 2, row 2 (x=40..60, y=30..50) */}
          <rect x="40" y="30" width="20" height="20" fill="#EFF6FF" stroke="#0F172A" strokeWidth="1.8" />
          <line x1="50" y1="34" x2="50" y2="46" stroke="#2453FF" strokeWidth="2.5" />
          <line x1="44" y1="40" x2="56" y2="40" stroke="#2453FF" strokeWidth="2.5" />

          {/* Right (Triangle): col 3, row 2 (x=60..80, y=30..50) */}
          <rect x="60" y="30" width="20" height="20" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="70,34 64,44 76,44" fill="#10B981" />

          {/* Bottom (Square): col 2, row 3 (x=40..60, y=50..70) */}
          <rect x="40" y="50" width="20" height="20" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
          <rect x="45" y="55" width="10" height="10" fill="#8B5CF6" rx="1" />

          {/* Far bottom (Diamond): col 2, row 4 (x=40..60, y=70..90) */}
          <rect x="40" y="70" width="20" height="20" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="50,73 57,80 50,87 43,80" fill="#EC4899" />
        </svg>
        <span className="text-[10px] font-semibold text-slate-500 mt-0.5">Unfolded 2D Cube Net</span>
      </div>
    );
  }

  // 3D Isometric Cube Helper
  // Isometric cube with 3 visible faces: Top, Front-Left, Front-Right
  const renderIsometricCube = (
    topSymbol: React.ReactNode,
    frontSymbol: React.ReactNode,
    leftSymbol: React.ReactNode
  ) => (
    <svg viewBox="0 0 70 70" className={svgClass}>
      {/* Top Face */}
      <polygon points="35,10 58,22 35,34 12,22" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
      <g transform="translate(35, 22)">{topSymbol}</g>

      {/* Front-Right Face */}
      <polygon points="35,34 58,22 58,48 35,60" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
      <g transform="translate(46.5, 41)">{frontSymbol}</g>

      {/* Front-Left Face */}
      <polygon points="35,34 12,22 12,48 35,60" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
      <g transform="translate(23.5, 41)">{leftSymbol}</g>
    </svg>
  );

  if (puzzleId === 'quick-spa-02-opt-A') {
    // Valid: Top = Circle, Front = Plus, Left = Star
    return renderIsometricCube(
      <circle cx="0" cy="0" r="4.5" fill="#2453FF" />,
      <g>
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#2453FF" strokeWidth="2.5" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#2453FF" strokeWidth="2.5" />
      </g>,
      <polygon points="0,-5 2,-1 5,-1 3,2 4,5 0,3 -4,5 -3,2 -5,-1 -2,-1" fill="#F59E0B" />
    );
  }
  if (puzzleId === 'quick-spa-02-opt-B') {
    // Impossible: Star and Triangle adjacent (mutually opposite)
    return renderIsometricCube(
      <circle cx="0" cy="0" r="4.5" fill="#2453FF" />,
      <polygon points="0,-5 -5,5 5,5" fill="#10B981" />,
      <polygon points="0,-5 2,-1 5,-1 3,2 4,5 0,3 -4,5 -3,2 -5,-1 -2,-1" fill="#F59E0B" />
    );
  }
  if (puzzleId === 'quick-spa-02-opt-C') {
    // Impossible: Circle and Square adjacent (mutually opposite)
    return renderIsometricCube(
      <circle cx="0" cy="0" r="4.5" fill="#2453FF" />,
      <rect x="-4" y="-4" width="8" height="8" fill="#8B5CF6" rx="1" />,
      <g>
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#2453FF" strokeWidth="2.5" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#2453FF" strokeWidth="2.5" />
      </g>
    );
  }
  if (puzzleId === 'quick-spa-02-opt-D') {
    // Impossible: Plus and Diamond adjacent (mutually opposite)
    return renderIsometricCube(
      <polygon points="0,-5 5,0 0,5 -5,0" fill="#EC4899" />,
      <g>
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#2453FF" strokeWidth="2.5" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#2453FF" strokeWidth="2.5" />
      </g>,
      <polygon points="0,-5 2,-1 5,-1 3,2 4,5 0,3 -4,5 -3,2 -5,-1 -2,-1" fill="#F59E0B" />
    );
  }

  return (
    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400">
      ?
    </div>
  );
};
