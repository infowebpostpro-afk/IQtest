'use client';

import React from 'react';
import { CalculationMode } from '@/lib/iqPercentile/types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ConversionModeSelectorProps {
  mode: CalculationMode;
  onModeChange: (newMode: CalculationMode) => void;
}

export const ConversionModeSelector: React.FC<ConversionModeSelectorProps> = ({
  mode,
  onModeChange,
}) => {
  return (
    <div className="w-full bg-[#F7FAFF] p-1.5 rounded-2xl border border-[#E2EAF7] flex flex-col sm:flex-row gap-1.5">
      {/* Mode A: IQ -> Percentile */}
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'iqToPercentile'}
        onClick={() => onModeChange('iqToPercentile')}
        className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
          mode === 'iqToPercentile'
            ? 'bg-white text-[#2453FF] shadow-xs border border-[#E2EAF7]'
            : 'text-[#60718B] hover:text-[#07152F] hover:bg-white/60'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#2453FF]" />
        <span>IQ Score</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#2453FF]" />
        <span>Theoretical Percentile</span>
      </button>

      {/* Mode B: Percentile -> IQ */}
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'percentileToIq'}
        onClick={() => onModeChange('percentileToIq')}
        className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
          mode === 'percentileToIq'
            ? 'bg-white text-[#2453FF] shadow-xs border border-[#E2EAF7]'
            : 'text-[#60718B] hover:text-[#07152F] hover:bg-white/60'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#4779FF]" />
        <span>Percentile Rank</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#4779FF]" />
        <span>Theoretical IQ Score</span>
      </button>
    </div>
  );
};
