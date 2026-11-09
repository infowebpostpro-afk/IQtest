'use client';

import React from 'react';
import { IQ_RANGES } from '@/lib/iqChart/math';
import { ScoreRangeInterval } from '@/lib/iqChart/types';
import { Layers, X, Check, Info } from 'lucide-react';

interface RangeExplorerProps {
  activeRange: ScoreRangeInterval | null;
  onSelectRange: (range: ScoreRangeInterval | null) => void;
}

export const RangeExplorer: React.FC<RangeExplorerProps> = ({
  activeRange,
  onSelectRange,
}) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-[#E2EAF7] p-5 sm:p-7 shadow-[0_4px_24px_rgba(7,21,47,0.03)] space-y-5">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-lg font-extrabold text-[#07152F] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#2453FF]" />
            <span>IQ Range Explorer</span>
          </h2>
          <p className="text-xs text-[#60718B]">
            Select a score interval to highlight its standard-deviation slice on the curve.
          </p>
        </div>

        {activeRange && (
          <button
            type="button"
            onClick={() => onSelectRange(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span>Clear Range Highlight</span>
          </button>
        )}
      </div>

      {/* 6 Interval Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {IQ_RANGES.map((interval) => {
          const isSelected = activeRange?.id === interval.id;
          return (
            <button
              key={interval.id}
              type="button"
              onClick={() => onSelectRange(isSelected ? null : interval)}
              className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-[#EEF2FF] border-[#2453FF] shadow-sm ring-2 ring-[#2453FF]/20'
                  : 'bg-[#F7FAFF] border-[#E2EAF7] hover:border-[#2453FF]/30 hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs sm:text-sm font-black ${
                      isSelected ? 'text-[#2453FF]' : 'text-[#07152F]'
                    }`}
                  >
                    {interval.label}
                  </span>
                  {isSelected && (
                    <div className="w-4 h-4 rounded-full bg-[#2453FF] text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  )}
                </div>

                <div className="text-[11px] font-mono text-[#60718B] mb-2">
                  {interval.zRangeLabel}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-[#60718B]">
                  Coverage
                </span>
                <span
                  className={`text-xs font-black font-mono ${
                    isSelected ? 'text-[#2453FF]' : 'text-slate-800'
                  }`}
                >
                  ~{interval.percentage}%
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Interval Detail Callout */}
      {activeRange && (
        <div className="p-4 rounded-2xl bg-[#EEF2FF] border border-[#2453FF]/25 animate-in fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2453FF]">
              Selected Score Interval: {activeRange.label} ({activeRange.zRangeLabel})
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#07152F]">
              {activeRange.description} Approximately {activeRange.percentage}% of modeled standardized scores fall within this range.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-2xl font-black text-[#2453FF] font-mono">
              {activeRange.percentage}%
            </span>
            <span className="block text-[10px] text-[#60718B] font-semibold">
              Theoretical Distribution
            </span>
          </div>
        </div>
      )}

      {/* Scientific Clarification Notice */}
      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2 text-xs text-[#60718B] leading-relaxed">
        <Info className="w-4 h-4 text-[#2453FF] shrink-0 mt-0.5" />
        <span>
          These intervals represent display ranges for mathematical exploration across standard deviation slices. They are not universal diagnostic classifications or clinical assessments.
        </span>
      </div>
    </div>
  );
};
