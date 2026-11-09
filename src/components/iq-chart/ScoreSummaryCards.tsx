'use client';

import React from 'react';
import {
  getIQStats,
  getComparisonStats,
  formatPercentile,
} from '@/lib/iqChart/math';
import { TrendingUp, Target, Activity, Compass, ArrowRight, Layers } from 'lucide-react';

interface ScoreSummaryCardsProps {
  score: number;
  isCompareMode?: boolean;
  scoreB?: number;
}

export const ScoreSummaryCards: React.FC<ScoreSummaryCardsProps> = ({
  score,
  isCompareMode = false,
  scoreB = 115,
}) => {
  const statsA = getIQStats(score);
  const compStats = isCompareMode ? getComparisonStats(score, scoreB) : null;

  if (isCompareMode && compStats) {
    const higherScore = Math.max(score, scoreB);
    const lowerScore = Math.min(score, scoreB);
    const higherLabel = score >= scoreB ? 'Score A' : 'Score B';

    return (
      <div className="w-full space-y-4">
        {/* Comparison Header Banner */}
        <div className="p-4 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 rounded-2xl border border-indigo-200/60 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] animate-pulse" />
            <h3 className="text-sm font-extrabold text-[#07152F]">
              Comparative Analysis: Score A ({score}) vs. Score B ({scoreB})
            </h3>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-white px-3 py-1 rounded-full border border-indigo-100">
            Δ {compStats.differencePoints} Score Points
          </span>
        </div>

        {/* 4 Comparative Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Point Difference */}
          <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#60718B] block mb-1">
                Score Difference
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#07152F] tracking-tight">
                {compStats.differencePoints} <span className="text-sm font-bold text-[#60718B]">pts</span>
              </div>
            </div>
            <p className="text-xs text-[#60718B] mt-2 pt-2 border-t border-slate-100">
              {higherLabel} is {compStats.differencePoints} points higher ({lowerScore} to {higherScore}).
            </p>
          </div>

          {/* Card 2: SD Separation */}
          <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#60718B] block mb-1">
                Standard Deviation Spread
              </span>
              <div className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-tight font-mono">
                {(compStats.differencePoints / 15).toFixed(2)}σ
              </div>
            </div>
            <p className="text-xs text-[#60718B] mt-2 pt-2 border-t border-slate-100">
              A: {compStats.zScoreA > 0 ? `+${compStats.zScoreA}` : compStats.zScoreA}σ · B: {compStats.zScoreB > 0 ? `+${compStats.zScoreB}` : compStats.zScoreB}σ
            </p>
          </div>

          {/* Card 3: Percentile Separation */}
          <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#60718B] block mb-1">
                Percentile Difference
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#2453FF] tracking-tight font-mono">
                {compStats.percentileDifference.toFixed(2)}%
              </div>
            </div>
            <p className="text-xs text-[#60718B] mt-2 pt-2 border-t border-slate-100">
              A: {formatPercentile(compStats.percentileA)} · B: {formatPercentile(compStats.percentileB)}
            </p>
          </div>

          {/* Card 4: Population in Interval */}
          <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#60718B] block mb-1">
                Between Both Scores
              </span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight font-mono">
                {compStats.intervalPercentage.toFixed(2)}%
              </div>
            </div>
            <p className="text-xs text-[#60718B] mt-2 pt-2 border-t border-slate-100">
              Modeled proportion of population falling between {lowerScore} and {higherScore}.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Standard Single Score Mode Cards
  const diffSign = statsA.differenceFromMean > 0 ? '+' : '';
  const zSign = statsA.zScore > 0 ? '+' : '';

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1: Selected Score */}
      <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-[#2453FF]/40 transition-all">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60718B]">
              Selected Score
            </span>
            <span className="w-7 h-7 rounded-xl bg-blue-50 text-[#2453FF] flex items-center justify-center">
              <Target className="w-4 h-4" />
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-black text-[#07152F] tracking-tight font-mono mb-1">
            {statsA.iq}
          </div>

          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/15">
            {statsA.classificationCategory}
          </span>
        </div>

        <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-[#60718B]">
          Standardized reference point
        </div>
      </div>

      {/* Card 2: Theoretical Percentile */}
      <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-[#2453FF]/40 transition-all">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60718B]">
              Theoretical Percentile
            </span>
            <span className="w-7 h-7 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-black text-[#2453FF] tracking-tight font-mono mb-1">
            {formatPercentile(statsA.percentile)}
          </div>

          <p className="text-xs font-semibold text-[#07152F]">
            Higher than ~{statsA.percentile.toFixed(1)}% of scores
          </p>
        </div>

        <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-[#60718B]">
          Area under normal curve: 100 × Φ(z)
        </div>
      </div>

      {/* Card 3: Distance from Mean */}
      <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-[#2453FF]/40 transition-all">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60718B]">
              Distance From Mean
            </span>
            <span className="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-black text-[#07152F] tracking-tight font-mono mb-1">
            {diffSign}{statsA.differenceFromMean} <span className="text-base font-bold text-[#60718B]">pts</span>
          </div>

          <p className="text-xs font-bold text-purple-700 font-mono">
            Z-Score: {zSign}{statsA.zScore.toFixed(2)}σ
          </p>
        </div>

        <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-[#60718B]">
          {statsA.differenceFromMean === 0
            ? 'Exactly at theoretical center'
            : `${Math.abs(statsA.zScore).toFixed(2)} SD ${statsA.zScore > 0 ? 'above' : 'below'} mean (100)`}
        </div>
      </div>

      {/* Card 4: Relative Frequency / Rarity */}
      <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-[#2453FF]/40 transition-all">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60718B]">
              Modeled Relative Position
            </span>
            <span className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </span>
          </div>

          <div className="text-base sm:text-lg font-bold text-[#07152F] leading-snug mb-1">
            {statsA.rarityRatio}
          </div>
        </div>

        <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-[#60718B]">
          Continuous normal distribution model
        </div>
      </div>
    </div>
  );
};
