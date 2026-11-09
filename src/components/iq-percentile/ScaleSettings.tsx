'use client';

import React from 'react';
import { StandardDeviationOption } from '@/lib/iqPercentile/types';
import { SD_OPTIONS, DEFAULT_MEAN } from '@/lib/iqPercentile/math';
import { Settings2, Info } from 'lucide-react';

interface ScaleSettingsProps {
  selectedSd: StandardDeviationOption;
  onSdChange: (sd: StandardDeviationOption) => void;
}

export const ScaleSettings: React.FC<ScaleSettingsProps> = ({
  selectedSd,
  onSdChange,
}) => {
  return (
    <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-4 sm:p-5 space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Settings2 className="w-4 h-4 text-[#2453FF]" />
          <h2 className="text-xs sm:text-sm font-bold text-[#07152F]">
            Assessment Scale Parameters
          </h2>
        </div>
        <span className="text-[11px] font-semibold text-[#60718B]">
          Model Mean: <strong className="text-[#07152F]">{DEFAULT_MEAN}</strong> (Fixed)
        </span>
      </div>

      {/* SD Options Radio/Pill Group */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {SD_OPTIONS.map((sdOption) => {
          const isSelected = selectedSd === sdOption;
          let label = 'SD 15 (Standard)';
          let desc = 'Wechsler & SB5 scales';
          if (sdOption === 16) {
            label = 'SD 16 (Alternative)';
            desc = 'Stanford-Binet 4 scale';
          } else if (sdOption === 24) {
            label = 'SD 24 (Alternative)';
            desc = 'Cattell Culture Fair scale';
          }

          return (
            <button
              key={sdOption}
              type="button"
              onClick={() => onSdChange(sdOption)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-[#2453FF] ring-2 ring-[#2453FF]/15 shadow-xs'
                  : 'bg-white/80 border-[#E2EAF7] hover:border-slate-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span
                  className={`text-xs font-bold ${
                    isSelected ? 'text-[#2453FF]' : 'text-[#07152F]'
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                    isSelected
                      ? 'border-[#2453FF] bg-[#2453FF]'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </span>
              </div>
              <span className="text-[11px] text-[#60718B] leading-tight">
                {desc}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanatory Note */}
      <div className="flex items-start gap-2 pt-1 text-[11px] text-[#60718B] leading-relaxed">
        <Info className="w-3.5 h-3.5 text-[#2453FF] shrink-0 mt-0.5" />
        <p>
          Choose the standard deviation that matches your assessment’s reported scale. If unknown, use the default (SD 15) only as a theoretical illustration.
        </p>
      </div>
    </div>
  );
};
