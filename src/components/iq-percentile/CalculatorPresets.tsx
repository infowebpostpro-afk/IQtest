'use client';

import React from 'react';
import { CalculationMode } from '@/lib/iqPercentile/types';
import { IQ_PRESETS, PERCENTILE_PRESETS } from '@/lib/iqPercentile/math';
import { Bookmark } from 'lucide-react';

interface CalculatorPresetsProps {
  mode: CalculationMode;
  currentValue: number | null;
  onSelectPreset: (value: number) => void;
}

export const CalculatorPresets: React.FC<CalculatorPresetsProps> = ({
  mode,
  currentValue,
  onSelectPreset,
}) => {
  const presets = mode === 'iqToPercentile' ? IQ_PRESETS : PERCENTILE_PRESETS;
  const label = mode === 'iqToPercentile' ? 'Common IQ Presets:' : 'Common Percentile Presets:';
  const unit = mode === 'iqToPercentile' ? '' : '%';

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#60718B]">
        <Bookmark className="w-3.5 h-3.5 text-[#2453FF]" />
        <span>{label}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {presets.map((presetVal) => {
          const isSelected = currentValue === presetVal;
          return (
            <button
              key={presetVal}
              type="button"
              onClick={() => onSelectPreset(presetVal)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#2453FF] text-white shadow-2xs'
                  : 'bg-[#F7FAFF] text-[#07152F] border border-[#E2EAF7] hover:border-[#2453FF]/40 hover:bg-[#EEF2FF]'
              }`}
            >
              {presetVal}
              {unit}
              {presetVal === 100 && mode === 'iqToPercentile' && (
                <span className="ml-1 text-[10px] opacity-80 font-normal">(Mean)</span>
              )}
              {presetVal === 50 && mode === 'percentileToIq' && (
                <span className="ml-1 text-[10px] opacity-80 font-normal">(Median)</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
