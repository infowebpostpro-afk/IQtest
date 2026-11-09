'use client';

import React, { useRef, useMemo, useCallback } from 'react';
import {
  MEAN,
  STANDARD_DEVIATION,
  MIN_IQ,
  MAX_IQ,
  normalPdf,
  calculatePercentile,
  formatPercentile,
} from '@/lib/iqChart/math';
import { ScoreRangeInterval } from '@/lib/iqChart/types';

interface InteractiveBellCurveProps {
  score: number;
  onScoreChange: (newScore: number) => void;
  isCompareMode?: boolean;
  scoreB?: number;
  onScoreBChange?: (newScoreB: number) => void;
  activeRange?: ScoreRangeInterval | null;
  activeMarkerTarget?: 'A' | 'B';
}

export const InteractiveBellCurve: React.FC<InteractiveBellCurveProps> = ({
  score,
  onScoreChange,
  isCompareMode = false,
  scoreB = 115,
  onScoreBChange,
  activeRange = null,
  activeMarkerTarget = 'A',
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const isDraggingRef = useRef<boolean>(false);

  // SVG Geometry Dimensions
  const VIEW_WIDTH = 960;
  const VIEW_HEIGHT = 380;
  const PADDING_LEFT = 50;
  const PADDING_RIGHT = 50;
  const PADDING_TOP = 45;
  const PADDING_BOTTOM = 65;

  const chartWidth = VIEW_WIDTH - PADDING_LEFT - PADDING_RIGHT;
  const chartHeight = VIEW_HEIGHT - PADDING_TOP - PADDING_BOTTOM;
  const baselineY = PADDING_TOP + chartHeight;

  // Maximum PDF is at the mean (IQ = 100)
  const maxPdf = useMemo(() => normalPdf(MEAN), []);

  // Coordinate mapping functions
  const getX = useCallback(
    (iq: number) => {
      const clamped = Math.max(MIN_IQ, Math.min(MAX_IQ, iq));
      return PADDING_LEFT + ((clamped - MIN_IQ) / (MAX_IQ - MIN_IQ)) * chartWidth;
    },
    [chartWidth]
  );

  const getY = useCallback(
    (pdfVal: number) => {
      return baselineY - (pdfVal / maxPdf) * (chartHeight - 10);
    },
    [baselineY, chartHeight, maxPdf]
  );

  // Convert SVG coordinates back to IQ score
  const getIqFromClientX = useCallback(
    (clientX: number): number => {
      if (!svgRef.current) return score;
      const rect = svgRef.current.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const normalizedRatio = relativeX / rect.width;
      const svgX = normalizedRatio * VIEW_WIDTH;

      const clampedSvgX = Math.max(PADDING_LEFT, Math.min(PADDING_LEFT + chartWidth, svgX));
      const iqRatio = (clampedSvgX - PADDING_LEFT) / chartWidth;
      const computedIq = Math.round(MIN_IQ + iqRatio * (MAX_IQ - MIN_IQ));
      return Math.max(MIN_IQ, Math.min(MAX_IQ, computedIq));
    },
    [chartWidth, score]
  );

  // Drag & Pointer interaction handlers
  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    isDraggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);

    const newIq = getIqFromClientX(e.clientX);
    if (isCompareMode && activeMarkerTarget === 'B' && onScoreBChange) {
      onScoreBChange(newIq);
    } else {
      onScoreChange(newIq);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDraggingRef.current) return;
    const newIq = getIqFromClientX(e.clientX);
    if (isCompareMode && activeMarkerTarget === 'B' && onScoreBChange) {
      onScoreBChange(newIq);
    } else {
      onScoreChange(newIq);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    isDraggingRef.current = false;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  // Generate main curve path
  const fullCurvePath = useMemo(() => {
    const points: string[] = [];
    for (let iq = MIN_IQ; iq <= MAX_IQ; iq += 0.5) {
      const x = getX(iq);
      const y = getY(normalPdf(iq));
      points.push(`${points.length === 0 ? 'M' : 'L'} ${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return points.join(' ');
  }, [getX, getY]);

  // Shaded area path (Cumulative up to selected score, active range, or comparison interval)
  const shadedAreaPath = useMemo(() => {
    let startIq = MIN_IQ;
    let endIq = score;

    if (activeRange) {
      startIq = activeRange.minIq;
      endIq = activeRange.maxIq;
    } else if (isCompareMode) {
      startIq = Math.min(score, scoreB);
      endIq = Math.max(score, scoreB);
    }

    const points: string[] = [];
    const startX = getX(startIq);
    const endX = getX(endIq);

    points.push(`M ${startX.toFixed(2)},${baselineY}`);

    for (let iq = startIq; iq <= endIq; iq += 0.5) {
      const x = getX(iq);
      const y = getY(normalPdf(iq));
      points.push(`L ${x.toFixed(2)},${y.toFixed(2)}`);
    }

    // Connect to end baseline and back to start baseline to close polygon
    points.push(`L ${endX.toFixed(2)},${baselineY}`);
    points.push(`Z`);

    return points.join(' ');
  }, [activeRange, isCompareMode, score, scoreB, getX, getY, baselineY]);

  // Standard deviation markers
  const sdMarkers = useMemo(() => {
    return [
      { iq: 55, label: '-3σ', scoreLabel: '55', isMean: false },
      { iq: 70, label: '-2σ', scoreLabel: '70', isMean: false },
      { iq: 85, label: '-1σ', scoreLabel: '85', isMean: false },
      { iq: 100, label: 'Mean (μ)', scoreLabel: '100', isMean: true },
      { iq: 115, label: '+1σ', scoreLabel: '115', isMean: false },
      { iq: 130, label: '+2σ', scoreLabel: '130', isMean: false },
      { iq: 145, label: '+3σ', scoreLabel: '145', isMean: false },
    ];
  }, []);

  // Selected Score A coordinates & stats
  const xScoreA = getX(score);
  const yScoreA = getY(normalPdf(score));
  const pctScoreA = calculatePercentile(score);

  // Selected Score B coordinates & stats (Compare Mode)
  const xScoreB = getX(scoreB);
  const yScoreB = getY(normalPdf(scoreB));
  const pctScoreB = calculatePercentile(scoreB);

  // Accessible descriptive summary for screen readers
  const ariaDescription = useMemo(() => {
    if (isCompareMode) {
      return `Normal distribution chart comparing Score A (${score}, ${formatPercentile(pctScoreA)}) with Score B (${scoreB}, ${formatPercentile(pctScoreB)}). Difference: ${Math.abs(scoreB - score)} points.`;
    }
    if (activeRange) {
      return `Normal distribution chart highlighting interval ${activeRange.label} covering approximately ${activeRange.percentage}% of the distribution.`;
    }
    return `Normal distribution bell curve with current score ${score}, representing theoretical percentile ${formatPercentile(pctScoreA)} at z-score ${((score - MEAN) / STANDARD_DEVIATION).toFixed(2)}.`;
  }, [isCompareMode, score, scoreB, pctScoreA, pctScoreB, activeRange]);

  return (
    <div className="w-full relative select-none">
      {/* Visual Chart Container */}
      <div className="w-full bg-white rounded-3xl border border-[#E2EAF7] p-3 sm:p-6 shadow-[0_4px_24px_rgba(7,21,47,0.03)] overflow-hidden">
        {/* Subtle Chart Header Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-2 mb-1 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2453FF]" />
            <span className="font-extrabold text-[#07152F]">
              {isCompareMode ? 'Comparison Mode' : 'Theoretical Bell Curve'}
            </span>
            <span className="text-[#60718B]">
              (Domain: IQ 40–160 · μ=100, σ=15)
            </span>
          </div>

          <div className="text-[11px] font-semibold text-[#60718B] hidden sm:block">
            Click or drag anywhere on chart to adjust score
          </div>
        </div>

        {/* SVG Bell Curve */}
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          className="w-full h-auto cursor-ew-resize touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          role="img"
          aria-label={ariaDescription}
        >
          <defs>
            {/* Soft Ambient Area Gradient (Single score cumulative) */}
            <linearGradient id="curveCumulativeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2453FF" stopOpacity="0.32" />
              <stop offset="70%" stopColor="#4779FF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#EAF2FF" stopOpacity="0.02" />
            </linearGradient>

            {/* Range Explorer Highlight Gradient */}
            <linearGradient id="rangeHighlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2453FF" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#3B66FF" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#EAF2FF" stopOpacity="0.04" />
            </linearGradient>

            {/* Compare Interval Gradient */}
            <linearGradient id="compareIntervalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#4F46E5" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#EEF2FF" stopOpacity="0.04" />
            </linearGradient>

            {/* Stroke Line Gradient */}
            <linearGradient id="curveStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#75A2FF" />
              <stop offset="50%" stopColor="#2453FF" />
              <stop offset="100%" stopColor="#75A2FF" />
            </linearGradient>

            {/* Drop Shadow for Tooltip Pills */}
            <filter id="pillShadow" x="-10%" y="-20%" width="120%" height="150%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#07152F" floodOpacity="0.14" />
            </filter>
          </defs>

          {/* Baseline Horizontal Axis */}
          <line
            x1={PADDING_LEFT}
            y1={baselineY}
            x2={PADDING_LEFT + chartWidth}
            y2={baselineY}
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Vertical Standard Deviation Reference Grid Lines */}
          {sdMarkers.map((marker) => {
            const mx = getX(marker.iq);
            return (
              <g key={marker.iq}>
                <line
                  x1={mx}
                  y1={PADDING_TOP + 10}
                  x2={mx}
                  y2={baselineY}
                  stroke={marker.isMean ? '#94A3B8' : '#E2EAF7'}
                  strokeWidth={marker.isMean ? 1.6 : 1.2}
                  strokeDasharray={marker.isMean ? 'none' : '4 4'}
                />

                {/* Score Tick Mark on Baseline */}
                <line
                  x1={mx}
                  y1={baselineY}
                  x2={mx}
                  y2={baselineY + 6}
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                />

                {/* IQ Value Label */}
                <text
                  x={mx}
                  y={baselineY + 22}
                  textAnchor="middle"
                  className={`text-xs select-none ${
                    marker.isMean
                      ? 'fill-[#07152F] font-black font-mono'
                      : 'fill-[#334155] font-bold font-mono'
                  }`}
                  fontSize="12"
                >
                  {marker.scoreLabel}
                </text>

                {/* Standard Deviation Notation (e.g. -1σ, Mean, +1σ) */}
                <text
                  x={mx}
                  y={baselineY + 40}
                  textAnchor="middle"
                  className={`text-[10px] select-none ${
                    marker.isMean
                      ? 'fill-[#2453FF] font-extrabold uppercase'
                      : 'fill-[#64748B] font-semibold'
                  }`}
                  fontSize="10"
                >
                  {marker.label}
                </text>
              </g>
            );
          })}

          {/* Shaded Area Under Curve */}
          <path
            d={shadedAreaPath}
            fill={
              activeRange
                ? 'url(#rangeHighlightGrad)'
                : isCompareMode
                ? 'url(#compareIntervalGrad)'
                : 'url(#curveCumulativeGrad)'
            }
          />

          {/* Main Bell Curve Contour Line */}
          <path
            d={fullCurvePath}
            fill="none"
            stroke="url(#curveStrokeGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* ============================================================= */}
          {/* SCORE A MARKER (Active Selected Score)                         */}
          {/* ============================================================= */}
          <g className="transition-all duration-75">
            {/* Vertical Marker Line */}
            <line
              x1={xScoreA}
              y1={Math.max(PADDING_TOP, yScoreA)}
              x2={xScoreA}
              y2={baselineY}
              stroke="#2453FF"
              strokeWidth="2.5"
            />

            {/* Glowing Halo around Intersection Dot */}
            <circle
              cx={xScoreA}
              cy={yScoreA}
              r="9"
              fill="#2453FF"
              fillOpacity="0.2"
            />

            {/* Solid Center Intersection Dot */}
            <circle
              cx={xScoreA}
              cy={yScoreA}
              r="5"
              fill="#2453FF"
              stroke="#FFFFFF"
              strokeWidth="2"
            />

            {/* Floating Information Pill */}
            {(() => {
              const pillWidth = isCompareMode ? 130 : 124;
              const pillHeight = 28;
              const pillX = Math.max(
                PADDING_LEFT,
                Math.min(PADDING_LEFT + chartWidth - pillWidth, xScoreA - pillWidth / 2)
              );
              const pillY = Math.max(12, yScoreA - pillHeight - 12);

              return (
                <g filter="url(#pillShadow)">
                  <rect
                    x={pillX}
                    y={pillY}
                    width={pillWidth}
                    height={pillHeight}
                    rx="8"
                    fill="#07152F"
                    stroke="#2453FF"
                    strokeWidth="1.2"
                  />
                  <text
                    x={pillX + pillWidth / 2}
                    y={pillY + 18}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="800"
                    className="select-none font-sans"
                  >
                    {isCompareMode ? `Score A: ${score}` : `IQ ${score} · ${formatPercentile(pctScoreA)}`}
                  </text>
                </g>
              );
            })()}
          </g>

          {/* ============================================================= */}
          {/* SCORE B MARKER (Comparison Mode Only)                          */}
          {/* ============================================================= */}
          {isCompareMode && (
            <g className="transition-all duration-75">
              {/* Vertical Marker Line B */}
              <line
                x1={xScoreB}
                y1={Math.max(PADDING_TOP, yScoreB)}
                x2={xScoreB}
                y2={baselineY}
                stroke="#6366F1"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />

              {/* Glowing Halo B */}
              <circle
                cx={xScoreB}
                cy={yScoreB}
                r="9"
                fill="#6366F1"
                fillOpacity="0.2"
              />

              {/* Solid Center Dot B */}
              <circle
                cx={xScoreB}
                cy={yScoreB}
                r="5"
                fill="#6366F1"
                stroke="#FFFFFF"
                strokeWidth="2"
              />

              {/* Floating Pill B */}
              {(() => {
                const pillWidth = 130;
                const pillHeight = 28;
                const pillX = Math.max(
                  PADDING_LEFT,
                  Math.min(PADDING_LEFT + chartWidth - pillWidth, xScoreB - pillWidth / 2)
                );
                // Offset vertically if both scores are very close to prevent overlap
                const isOverlapping = Math.abs(xScoreA - xScoreB) < 70;
                const basePillY = Math.max(12, yScoreB - pillHeight - 12);
                const pillY = isOverlapping && scoreB > score ? basePillY - 32 : basePillY;

                return (
                  <g filter="url(#pillShadow)">
                    <rect
                      x={pillX}
                      y={pillY}
                      width={pillWidth}
                      height={pillHeight}
                      rx="8"
                      fill="#4338CA"
                      stroke="#818CF8"
                      strokeWidth="1.2"
                    />
                    <text
                      x={pillX + pillWidth / 2}
                      y={pillY + 18}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontWeight="800"
                      className="select-none font-sans"
                    >
                      {`Score B: ${scoreB} · ${formatPercentile(pctScoreB)}`}
                    </text>
                  </g>
                );
              })()}
            </g>
          )}
        </svg>

        {/* Chart Footer Info Legend */}
        <div className="mt-2 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-[#60718B]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-[#07152F]">
              <span className="w-3 h-3 rounded-full bg-[#2453FF]" />
              <span>{isCompareMode ? `Score A (IQ ${score})` : `Selected Score (IQ ${score})`}</span>
            </span>

            {isCompareMode && (
              <span className="flex items-center gap-1.5 font-semibold text-[#4338CA]">
                <span className="w-3 h-3 rounded-full bg-[#6366F1]" />
                <span>Score B (IQ {scoreB})</span>
              </span>
            )}

            {activeRange && (
              <span className="flex items-center gap-1.5 font-semibold text-blue-700">
                <span className="w-3 h-3 rounded-md bg-blue-100 border border-blue-400" />
                <span>Range Interval: {activeRange.label} ({activeRange.percentage}%)</span>
              </span>
            )}
          </div>

          <div className="text-[11px] font-mono text-slate-500">
            68.27% of scores fall within 85–115 (±1σ)
          </div>
        </div>
      </div>
    </div>
  );
};
