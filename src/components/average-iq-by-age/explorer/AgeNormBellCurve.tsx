'use client';

import React, { useRef, useMemo, useCallback } from 'react';
import {
  normalPdf,
  calculatePercentile,
  formatPercentile,
  MEAN,
  STANDARD_DEVIATION,
} from '@/lib/iqChart/math';
import { EXPLORER_MIN_IQ, EXPLORER_MAX_IQ } from '@/lib/ageNormExplorer/math';

interface AgeNormBellCurveProps {
  score: number;
  onScoreChange: (newScore: number) => void;
  ageGroupName: string;
}

export const AgeNormBellCurve: React.FC<AgeNormBellCurveProps> = ({
  score,
  onScoreChange,
  ageGroupName,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // SVG Geometry Constants
  const VIEW_WIDTH = 800;
  const VIEW_HEIGHT = 340;
  const PADDING_LEFT = 40;
  const PADDING_RIGHT = 40;
  const PADDING_TOP = 40;
  const PADDING_BOTTOM = 55;

  const chartWidth = VIEW_WIDTH - PADDING_LEFT - PADDING_RIGHT;
  const chartHeight = VIEW_HEIGHT - PADDING_TOP - PADDING_BOTTOM;
  const baselineY = PADDING_TOP + chartHeight;

  // Domain of graph: 55 to 145 for visual completeness
  const GRAPH_MIN_IQ = 55;
  const GRAPH_MAX_IQ = 145;

  const maxPdf = useMemo(() => normalPdf(MEAN), []);

  const getX = useCallback(
    (iq: number) => {
      const clamped = Math.max(GRAPH_MIN_IQ, Math.min(GRAPH_MAX_IQ, iq));
      return PADDING_LEFT + ((clamped - GRAPH_MIN_IQ) / (GRAPH_MAX_IQ - GRAPH_MIN_IQ)) * chartWidth;
    },
    [chartWidth]
  );

  const getY = useCallback(
    (pdfVal: number) => {
      return baselineY - (pdfVal / maxPdf) * (chartHeight - 10);
    },
    [baselineY, chartHeight, maxPdf]
  );

  // Compute points along the bell curve
  const curvePath = useMemo(() => {
    const points: string[] = [];
    const step = 0.5;
    for (let x = GRAPH_MIN_IQ; x <= GRAPH_MAX_IQ; x += step) {
      const px = getX(x);
      const py = getY(normalPdf(x));
      points.push(`${px.toFixed(2)},${py.toFixed(2)}`);
    }
    return `M ${points.join(' L ')}`;
  }, [getX, getY]);

  // Compute shaded cumulative area at or below the selected score
  const shadedAreaPath = useMemo(() => {
    const clampedScore = Math.max(GRAPH_MIN_IQ, Math.min(GRAPH_MAX_IQ, score));
    const points: string[] = [];
    const startX = getX(GRAPH_MIN_IQ);
    points.push(`${startX.toFixed(2)},${baselineY.toFixed(2)}`);

    const step = 0.5;
    for (let x = GRAPH_MIN_IQ; x <= clampedScore; x += step) {
      const px = getX(x);
      const py = getY(normalPdf(x));
      points.push(`${px.toFixed(2)},${py.toFixed(2)}`);
    }

    const endX = getX(clampedScore);
    const endY = getY(normalPdf(clampedScore));
    points.push(`${endX.toFixed(2)},${endY.toFixed(2)}`);
    points.push(`${endX.toFixed(2)},${baselineY.toFixed(2)}`);

    return `M ${points.join(' L ')} Z`;
  }, [getX, getY, score, baselineY]);

  // Coordinates of current marker
  const markerX = getX(score);
  const markerY = getY(normalPdf(score));
  const currentPercentile = formatPercentile(calculatePercentile(score));

  // Reference standard deviation ticks
  const refTicks = [
    { iq: 70, label: '70 (−2σ)' },
    { iq: 85, label: '85 (−1σ)' },
    { iq: 100, label: '100 (Mean)' },
    { iq: 115, label: '115 (+1σ)' },
    { iq: 130, label: '130 (+2σ)' },
  ];

  return (
    <div className="space-y-2">
      {/* Chart Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-[#07152F]">
            Theoretical Normal Distribution
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#2453FF] border border-[#2453FF]/20">
            Reference Mean: 100 · SD: 15
          </span>
        </div>
        <div className="text-[11px] font-semibold text-[#60718B]">
          Shaded: At or below IQ {score} ({currentPercentile})
        </div>
      </div>

      {/* SVG Container */}
      <div className="w-full bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] p-2 sm:p-4 shadow-2xs relative overflow-hidden">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          className="w-full h-auto select-none overflow-visible"
          role="img"
          aria-label={`Bell curve graph showing theoretical normal distribution with mean 100 and SD 15. The selected IQ is ${score}, corresponding to the ${currentPercentile} percentile.`}
        >
          <defs>
            {/* Gradient for cumulative shaded region */}
            <linearGradient id="ageNormShadeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2453FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#2453FF" stopOpacity="0.05" />
            </linearGradient>

            {/* Subtle glow for the marker */}
            <filter id="markerGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#2453FF" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Baseline axis */}
          <line
            x1={PADDING_LEFT}
            y1={baselineY}
            x2={VIEW_WIDTH - PADDING_RIGHT}
            y2={baselineY}
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Vertical Standard Deviation Reference Lines */}
          {refTicks.map((tick) => {
            const tx = getX(tick.iq);
            const isMean = tick.iq === 100;
            return (
              <g key={tick.iq}>
                <line
                  x1={tx}
                  y1={PADDING_TOP + 10}
                  x2={tx}
                  y2={baselineY}
                  stroke={isMean ? '#2453FF' : '#E2EAF7'}
                  strokeWidth={isMean ? 1.5 : 1}
                  strokeDasharray={isMean ? undefined : '3 3'}
                  opacity={isMean ? 0.7 : 0.8}
                />
                <circle cx={tx} cy={baselineY} r="2" fill="#94A3B8" />
                <text
                  x={tx}
                  y={baselineY + 18}
                  textAnchor="middle"
                  className={`text-[11px] font-mono select-none ${
                    isMean ? 'fill-[#2453FF] font-bold' : 'fill-[#60718B]'
                  }`}
                >
                  {tick.iq}
                </text>
                <text
                  x={tx}
                  y={baselineY + 32}
                  textAnchor="middle"
                  className="text-[9px] fill-slate-400 font-medium select-none"
                >
                  {tick.iq === 100 ? 'Mean' : tick.iq > 100 ? `+${(tick.iq - 100)/15}σ` : `−${(100 - tick.iq)/15}σ`}
                </text>
              </g>
            );
          })}

          {/* Cumulative Shaded Area */}
          <path d={shadedAreaPath} fill="url(#ageNormShadeGrad)" />

          {/* Main Bell Curve Line */}
          <path
            d={curvePath}
            fill="none"
            stroke="#2453FF"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Selected Score Vertical Drop Line */}
          <line
            x1={markerX}
            y1={markerY}
            x2={markerX}
            y2={baselineY}
            stroke="#07152F"
            strokeWidth="2"
            strokeDasharray="4 3"
          />

          {/* Selected Score Marker Point */}
          <circle
            cx={markerX}
            cy={markerY}
            r="7"
            fill="#FFFFFF"
            stroke="#2453FF"
            strokeWidth="3.5"
            filter="url(#markerGlow)"
          />

          {/* Callout Bubble above Marker */}
          <g transform={`translate(${markerX}, ${Math.max(16, markerY - 30)})`}>
            <rect
              x="-48"
              y="-18"
              width="96"
              height="22"
              rx="6"
              fill="#07152F"
              opacity="0.92"
            />
            <polygon points="-4,4 4,4 0,8" fill="#07152F" opacity="0.92" />
            <text
              x="0"
              y="-3"
              textAnchor="middle"
              className="text-[10px] font-mono font-bold fill-white select-none"
            >
              IQ {score} ({currentPercentile})
            </text>
          </g>
        </svg>
      </div>

      {/* Accessible Text Equivalent for Screen Readers */}
      <div className="sr-only">
        Graph of theoretical normal distribution with mean 100 and standard deviation 15.
        The selected example IQ is {score}, which sits at {((score - 100) / 15).toFixed(2)} standard deviations from the mean and corresponds to approximately the {currentPercentile} percentile for {ageGroupName}.
      </div>
    </div>
  );
};

