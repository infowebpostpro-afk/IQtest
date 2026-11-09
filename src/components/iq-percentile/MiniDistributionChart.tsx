'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { StandardDeviationOption } from '@/lib/iqPercentile/types';
import { normalCdf } from '@/lib/iqPercentile/math';
import { BarChart3, ArrowRight } from 'lucide-react';

interface MiniDistributionChartProps {
  iq: number;
  sd: StandardDeviationOption;
  percentile: number;
  formattedPercentile: string;
}

export const MiniDistributionChart: React.FC<MiniDistributionChartProps> = ({
  iq,
  sd,
  percentile,
  formattedPercentile,
}) => {
  const mean = 100;

  // Domain range: mean ± 3.5 SD
  const minX = Math.round(mean - 3.5 * sd);
  const maxX = Math.round(mean + 3.5 * sd);

  const width = 640;
  const height = 180;
  const paddingBottom = 34;
  const paddingTop = 26;
  const usableHeight = height - paddingBottom - paddingTop;
  const baselineY = height - paddingBottom;

  // Normal PDF formula
  const pdf = (x: number) => {
    const z = (x - mean) / sd;
    return (1 / (sd * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
  };
  const maxPdf = pdf(mean);

  const getSvgX = (val: number) => {
    return ((val - minX) / (maxX - minX)) * width;
  };

  const getSvgY = (val: number) => {
    const density = pdf(val);
    const normalized = density / maxPdf;
    return baselineY - normalized * usableHeight;
  };

  // Generate smooth SVG curve path
  const { curvePath, shadedAreaPath, currentScoreX, currentScoreY, meanX, axisTicks } =
    useMemo(() => {
      const steps = 140;
      const points: [number, number][] = [];

      for (let i = 0; i <= steps; i++) {
        const xVal = minX + (i / steps) * (maxX - minX);
        const sx = (i / steps) * width;
        const sy = getSvgY(xVal);
        points.push([sx, sy]);
      }

      const cPath = points.reduce((acc, [px, py], idx) => {
        return idx === 0 ? `M ${px.toFixed(1)} ${py.toFixed(1)}` : `${acc} L ${px.toFixed(1)} ${py.toFixed(1)}`;
      }, '');

      // Shaded area from minX up to current score
      const clampedIQ = Math.max(minX, Math.min(maxX, iq));
      const scoreSvgX = getSvgX(clampedIQ);
      const scoreSvgY = getSvgY(clampedIQ);

      const shadedPoints: [number, number][] = [];
      shadedPoints.push([0, baselineY]);

      for (let i = 0; i <= steps; i++) {
        const xVal = minX + (i / steps) * (maxX - minX);
        if (xVal > clampedIQ) break;
        const sx = (i / steps) * width;
        const sy = getSvgY(xVal);
        shadedPoints.push([sx, sy]);
      }

      shadedPoints.push([scoreSvgX, scoreSvgY]);
      shadedPoints.push([scoreSvgX, baselineY]);

      const sPath = shadedPoints.reduce((acc, [px, py], idx) => {
        return idx === 0 ? `M ${px.toFixed(1)} ${py.toFixed(1)}` : `${acc} L ${px.toFixed(1)} ${py.toFixed(1)}`;
      }, '') + ' Z';

      // Standard deviation tick marks
      const ticks = [-3, -2, -1, 0, 1, 2, 3].map((numSd) => {
        const scoreVal = mean + numSd * sd;
        return {
          scoreVal,
          numSd,
          x: getSvgX(scoreVal),
          label: numSd === 0 ? '100 (Mean)' : `${scoreVal}`,
          sdLabel: numSd === 0 ? 'μ' : numSd > 0 ? `+${numSd}σ` : `${numSd}σ`,
        };
      });

      return {
        curvePath: cPath,
        shadedAreaPath: sPath,
        currentScoreX: scoreSvgX,
        currentScoreY: scoreSvgY,
        meanX: getSvgX(mean),
        axisTicks: ticks,
      };
    }, [iq, sd, minX, maxX]);

  return (
    <div className="bg-white rounded-3xl border border-[#E2EAF7] p-5 sm:p-6 shadow-xs space-y-4 antialiased">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-[#2453FF]" />
          <h2 className="text-sm font-bold text-[#07152F]">
            Theoretical Normal Distribution Curve
          </h2>
        </div>
        <span className="text-xs font-semibold text-[#60718B]">
          Shaded area: <strong className="text-[#2453FF]">{formattedPercentile}</strong>
        </span>
      </div>

      {/* SVG Normal Distribution Visualizer */}
      <div className="relative w-full bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-3 sm:p-4 overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible select-none"
          aria-label={`Normal distribution curve showing score ${iq} at ${formattedPercentile}`}
          role="img"
        >
          <defs>
            {/* Shaded Area Gradient */}
            <linearGradient id="percentileAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2453FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#2453FF" stopOpacity="0.05" />
            </linearGradient>

            {/* Glowing filter for active score point */}
            <filter id="glowCircle" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#2453FF" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Baseline horizontal axis */}
          <line
            x1="0"
            y1={baselineY}
            x2={width}
            y2={baselineY}
            stroke="#CBD8E9"
            strokeWidth="1.5"
          />

          {/* Shaded Percentile Cumulative Area */}
          <path d={shadedAreaPath} fill="url(#percentileAreaGradient)" />

          {/* Theoretical Bell Curve Line */}
          <path
            d={curvePath}
            fill="none"
            stroke="#2453FF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Mean marker line (IQ 100) */}
          <line
            x1={meanX}
            y1={paddingTop - 6}
            x2={meanX}
            y2={baselineY}
            stroke="#60718B"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />

          {/* Current selected score vertical line */}
          <line
            x1={currentScoreX}
            y1={currentScoreY}
            x2={currentScoreX}
            y2={baselineY}
            stroke="#2453FF"
            strokeWidth="2"
          />

          {/* Glowing Circle at Current Score Point */}
          <circle
            cx={currentScoreX}
            cy={currentScoreY}
            r="5"
            fill="#FFFFFF"
            stroke="#2453FF"
            strokeWidth="2.5"
            filter="url(#glowCircle)"
          />

          {/* Axis Ticks and Labels */}
          {axisTicks.map((tick) => (
            <g key={tick.scoreVal} className="text-[10px] sm:text-[11px] font-mono">
              <line
                x1={tick.x}
                y1={baselineY}
                x2={tick.x}
                y2={baselineY + 4}
                stroke="#94A3B8"
                strokeWidth="1"
              />
              <text
                x={tick.x}
                y={baselineY + 16}
                textAnchor="middle"
                className={`text-[10px] font-mono font-semibold ${
                  tick.numSd === 0 ? 'fill-[#07152F] font-bold' : 'fill-[#60718B]'
                }`}
              >
                {tick.label}
              </text>
              <text
                x={tick.x}
                y={baselineY + 28}
                textAnchor="middle"
                className="text-[9px] font-mono fill-[#94A3B8]"
              >
                {tick.sdLabel}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Link to Full IQ Score Chart */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 text-xs">
        <span className="text-[#60718B]">
          Looking to compare multiple scores and view full frequency tables?
        </span>
        <Link
          href="/iq-score-chart/"
          className="inline-flex items-center gap-1.5 font-bold text-[#2453FF] hover:text-[#1a44e6] hover:underline transition-colors shrink-0"
        >
          <span>Explore the Full IQ Score Chart</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
