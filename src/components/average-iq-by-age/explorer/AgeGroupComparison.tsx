'use client';

import React from 'react';
import { ArrowLeftRight, CheckCircle2, Info } from 'lucide-react';
import { AgeGroup, AgeNormCalculation } from '@/lib/ageNormExplorer/types';
import { AGE_GROUPS } from '@/lib/ageNormExplorer/math';

interface AgeGroupComparisonProps {
  isCompareMode: boolean;
  onToggleCompareMode: () => void;
  primaryAgeGroup: AgeGroup;
  compareAgeGroup: AgeGroup;
  onSelectCompareAgeGroup: (id: string) => void;
  calculation: AgeNormCalculation;
}

export const AgeGroupComparison: React.FC<AgeGroupComparisonProps> = ({
  isCompareMode,
  onToggleCompareMode,
  primaryAgeGroup,
  compareAgeGroup,
  onSelectCompareAgeGroup,
  calculation,
}) => {
  return (
    <div className="space-y-4">
      {/* Header and Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7]">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4 text-[#2453FF]" />
            <h3 className="text-sm font-bold text-[#07152F]">
              Compare Between Age Groups
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#2453FF]">
              Educational Model
            </span>
          </div>
          <p className="text-xs text-[#60718B]">
            See why the same standardized IQ occupies identical relative positions across different age cohorts.
          </p>
        </div>

        <button
          type="button"
          onClick={onToggleCompareMode}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
            isCompareMode
              ? 'bg-[#2453FF] text-white shadow-xs'
              : 'bg-white border border-[#E2EAF7] text-[#07152F] hover:bg-slate-50'
          }`}
        >
          {isCompareMode ? 'Hide Comparison' : 'Enable Comparison'}
        </button>
      </div>

      {/* Comparison Body */}
      {isCompareMode && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Comparison Selector for Group B */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white rounded-xl border border-[#E2EAF7]">
            <span className="text-xs font-bold text-[#07152F]">
              Select Comparison Cohort (Group B):
            </span>
            <select
              value={compareAgeGroup.id}
              onChange={(e) => onSelectCompareAgeGroup(e.target.value)}
              className="py-1.5 px-3 bg-[#F8FBFF] border border-[#E2EAF7] rounded-lg text-xs font-bold text-[#07152F] focus:outline-none focus:ring-2 focus:ring-[#2453FF]"
            >
              {AGE_GROUPS.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name} (Ages {group.ageRange})
                </option>
              ))}
            </select>
          </div>

          {/* Dual Side-by-Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Group A Card */}
            <div className="bg-white rounded-2xl border-2 border-[#2453FF]/30 p-5 space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between border-b border-[#F0F4FA] pb-2.5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#2453FF] block">
                    Cohort A
                  </span>
                  <h4 className="text-base font-extrabold text-[#07152F]">
                    {primaryAgeGroup.name} (Ages {primaryAgeGroup.ageRange})
                  </h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EBF2FF] text-[#2453FF]">
                  Primary Selection
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#F8FBFF] p-2.5 rounded-xl border border-[#E2EAF7]">
                  <span className="text-[10px] text-[#60718B] block font-medium">Reference Mean</span>
                  <span className="text-lg font-mono font-black text-[#2453FF]">100</span>
                </div>
                <div className="bg-[#F8FBFF] p-2.5 rounded-xl border border-[#E2EAF7]">
                  <span className="text-[10px] text-[#60718B] block font-medium">Standardized IQ</span>
                  <span className="text-lg font-mono font-black text-[#07152F]">{calculation.score}</span>
                </div>
                <div className="bg-[#EEF2FF] p-2.5 rounded-xl border border-[#2453FF]/20">
                  <span className="text-[10px] text-[#2453FF] block font-medium">Percentile</span>
                  <span className="text-lg font-mono font-black text-[#2453FF]">{calculation.formattedPercentile}</span>
                </div>
              </div>

              <p className="text-xs text-[#60718B] leading-relaxed pt-1">
                {primaryAgeGroup.cognitiveNote}
              </p>
            </div>

            {/* Group B Card */}
            <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between border-b border-[#F0F4FA] pb-2.5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#4779FF] block">
                    Cohort B
                  </span>
                  <h4 className="text-base font-extrabold text-[#07152F]">
                    {compareAgeGroup.name} (Ages {compareAgeGroup.ageRange})
                  </h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-[#60718B]">
                  Comparison Cohort
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#F8FBFF] p-2.5 rounded-xl border border-[#E2EAF7]">
                  <span className="text-[10px] text-[#60718B] block font-medium">Reference Mean</span>
                  <span className="text-lg font-mono font-black text-[#2453FF]">100</span>
                </div>
                <div className="bg-[#F8FBFF] p-2.5 rounded-xl border border-[#E2EAF7]">
                  <span className="text-[10px] text-[#60718B] block font-medium">Standardized IQ</span>
                  <span className="text-lg font-mono font-black text-[#07152F]">{calculation.score}</span>
                </div>
                <div className="bg-[#EEF2FF] p-2.5 rounded-xl border border-[#2453FF]/20">
                  <span className="text-[10px] text-[#2453FF] block font-medium">Percentile</span>
                  <span className="text-lg font-mono font-black text-[#2453FF]">{calculation.formattedPercentile}</span>
                </div>
              </div>

              <p className="text-xs text-[#60718B] leading-relaxed pt-1">
                {compareAgeGroup.cognitiveNote}
              </p>
            </div>
          </div>

          {/* Scientific Clarification Box */}
          <div className="p-4 rounded-2xl bg-[#EEF2FF] border border-[#2453FF]/20 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#2453FF] shrink-0 mt-0.5" />
            <div className="text-xs text-[#07152F] leading-relaxed space-y-1">
              <p className="font-bold">
                Why are the reference mean and theoretical percentile identical?
              </p>
              <p className="text-[#60718B]">
                Both scores occupy the same theoretical position because this explorer uses an age-normed reference model. This does not mean people of different ages have identical raw cognitive performance or take the same assessment.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

