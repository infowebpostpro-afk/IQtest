'use client';

import React from 'react';
import { IQPercentileResult } from '@/lib/iqPercentile/types';
import {
  TrendingUp,
  BarChart2,
  Scale,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
} from 'lucide-react';

interface ResultsDashboardProps {
  result: IQPercentileResult | null;
  isValid: boolean;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  result,
  isValid,
}) => {
  if (!isValid || !result) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-[#E2EAF7] p-8 text-center space-y-2">
        <Compass className="w-8 h-8 text-slate-300 mx-auto" />
        <h3 className="text-sm font-bold text-[#07152F]">Awaiting Valid Input</h3>
        <p className="text-xs text-[#60718B] max-w-sm mx-auto">
          Please enter a valid number within the supported range to generate real-time theoretical conversion metrics.
        </p>
      </div>
    );
  }

  const isIQMode = result.mode === 'iqToPercentile';
  const isAboveMean = result.zScore >= 0;

  return (
    <div className="space-y-4 antialiased">
      {/* Primary Highlight Result Card */}
      <div className="bg-gradient-to-br from-[#EEF2FF] via-white to-[#F7FAFF] rounded-3xl border-2 border-[#2453FF]/25 p-5 sm:p-7 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#2453FF] text-white shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Theoretical Conversion Result</span>
          </span>
          <span className="text-xs font-semibold text-[#60718B]">
            Normal Distribution Model
          </span>
        </div>

        <div className="pt-1">
          {isIQMode ? (
            <div>
              <div className="text-xs font-semibold text-[#60718B] mb-1">
                Standardized IQ <strong className="text-[#07152F]">{result.formattedIQ}</strong> converts to:
              </div>
              <div className="flex flex-wrap items-baseline gap-2.5">
                <span className="text-3xl sm:text-5xl font-black text-[#2453FF] tracking-tight">
                  {result.formattedPercentile}
                </span>
                <span className="text-base sm:text-xl font-bold text-[#07152F]">
                  Percentile Rank
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#60718B] mt-2 leading-relaxed">
                An IQ score of <strong className="text-[#07152F]">{result.formattedIQ}</strong> exceeds approximately{' '}
                <strong className="text-[#07152F]">{result.lowerTailPercentage.toFixed(2)}%</strong> of scores under a theoretical normal distribution (Mean {result.mean}, SD {result.sd}).
              </p>
            </div>
          ) : (
            <div>
              <div className="text-xs font-semibold text-[#60718B] mb-1">
                Theoretical Percentile <strong className="text-[#07152F]">{result.formattedPercentile}</strong> converts to:
              </div>
              <div className="flex flex-wrap items-baseline gap-2.5">
                <span className="text-3xl sm:text-5xl font-black text-[#2453FF] tracking-tight">
                  IQ {result.formattedIQ}
                </span>
                <span className="text-base sm:text-xl font-bold text-[#07152F]">
                  Standardized Score
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#60718B] mt-2 leading-relaxed">
                A percentile rank of <strong className="text-[#07152F]">{result.formattedPercentile}</strong> corresponds to a standardized score of approximately{' '}
                <strong className="text-[#07152F]">IQ {result.formattedIQ}</strong> when assuming Mean {result.mean} and SD {result.sd}.
              </p>
            </div>
          )}
        </div>

        {/* Humanized Rarity Indicator */}
        <div className="pt-2 border-t border-[#E2EAF7] flex items-center gap-2 text-xs text-[#2453FF] font-semibold">
          <Users className="w-3.5 h-3.5 shrink-0" />
          <span>{result.rarityDescription}</span>
        </div>
      </div>

      {/* 4 Supporting Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Metric 1: Z-Score */}
        <div className="bg-white rounded-2xl border border-[#E2EAF7] p-3.5 sm:p-4 space-y-1 shadow-2xs">
          <span className="text-[11px] font-bold text-[#60718B] uppercase tracking-wider block">
            Standard Score (Z)
          </span>
          <span className="text-lg sm:text-2xl font-mono font-black text-[#07152F] block">
            {result.formattedZScore}
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#60718B] block leading-tight">
            Distance from center in SD units
          </span>
        </div>

        {/* Metric 2: Points From Mean */}
        <div className="bg-white rounded-2xl border border-[#E2EAF7] p-3.5 sm:p-4 space-y-1 shadow-2xs">
          <span className="text-[11px] font-bold text-[#60718B] uppercase tracking-wider block">
            Distance from Mean
          </span>
          <span
            className={`text-lg sm:text-2xl font-mono font-black block ${
              result.diffFromMean > 0
                ? 'text-[#2453FF]'
                : result.diffFromMean < 0
                ? 'text-[#4779FF]'
                : 'text-[#07152F]'
            }`}
          >
            {result.formattedDiff}
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#60718B] block leading-tight">
            Baseline mean: 100 points
          </span>
        </div>

        {/* Metric 3: Tail Probability */}
        <div className="bg-white rounded-2xl border border-[#E2EAF7] p-3.5 sm:p-4 space-y-1 shadow-2xs">
          <span className="text-[11px] font-bold text-[#60718B] uppercase tracking-wider block">
            {isAboveMean ? 'Upper Tail (Higher)' : 'Lower Tail (Below)'}
          </span>
          <span className="text-lg sm:text-2xl font-mono font-black text-[#07152F] block">
            {isAboveMean
              ? `${result.upperTailPercentage.toFixed(2)}%`
              : `${result.lowerTailPercentage.toFixed(2)}%`}
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#60718B] block leading-tight">
            {isAboveMean ? 'Score above this' : 'Score at or below this'}
          </span>
        </div>

        {/* Metric 4: Active Scale Parameters */}
        <div className="bg-white rounded-2xl border border-[#E2EAF7] p-3.5 sm:p-4 space-y-1 shadow-2xs">
          <span className="text-[11px] font-bold text-[#60718B] uppercase tracking-wider block">
            Active Scale
          </span>
          <span className="text-lg sm:text-2xl font-mono font-black text-[#07152F] block">
            SD {result.sd}
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#60718B] block leading-tight">
            Mean 100 · σ={result.sd}
          </span>
        </div>
      </div>

      {/* Scientific Transparency Notice */}
      <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-4 text-xs text-[#60718B] leading-relaxed flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-[#2453FF] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#07152F]">Scientific note:</strong> Percentiles are calculated from a theoretical normal distribution using the selected mean ({result.mean}) and standard deviation ({result.sd}). Actual standardized test reports may use different norms, stratification weights, and scoring rules.
        </p>
      </div>
    </div>
  );
};
