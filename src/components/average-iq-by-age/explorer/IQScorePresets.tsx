'use client';

import React from 'react';
import { EXPLORER_PRESETS } from '@/lib/ageNormExplorer/math';

interface IQScorePresetsProps {
  currentScore: number;
  onSelectPreset: (score: number) => void;
}

export const IQScorePresets: React.FC<IQScorePresetsProps> = ({
  currentScore,
  onSelectPreset,
}) => {
  return (
    <div className="space-y-2">
      <span className="text-[11px] font-bold text-[#60718B] uppercase tracking-wider block">
        Score Presets
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {EXPLORER_PRESETS.map((preset) => {
          const isSelected = currentScore === preset.score;
          return (
            <button
              key={preset.score}
              type="button"
              onClick={() => onSelectPreset(preset.score)}
              className={`py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] ${
                isSelected
                  ? 'bg-[#EEF2FF] border-[#2453FF] text-[#2453FF] font-black shadow-2xs ring-1 ring-[#2453FF]/20'
                  : 'bg-white border-[#E2EAF7] text-[#07152F] hover:bg-[#F8FBFF] hover:border-slate-300 font-semibold'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold">IQ {preset.score}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                  isSelected ? 'bg-[#2453FF] text-white' : 'bg-[#E2EAF7] text-[#60718B]'
                }`}>
                  {preset.badge}
                </span>
              </div>
              <span className="block text-[10px] text-[#60718B] mt-0.5 text-left truncate">
                {preset.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

