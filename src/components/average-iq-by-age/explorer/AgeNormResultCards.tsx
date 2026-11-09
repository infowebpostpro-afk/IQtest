'use client';

import React from 'react';
import { Target, Hash, Percent, Activity } from 'lucide-react';
import { AgeNormCalculation } from '@/lib/ageNormExplorer/types';

interface AgeNormResultCardsProps {
  calculation: AgeNormCalculation;
  ageGroupName: string;
}

export const AgeNormResultCards: React.FC<AgeNormResultCardsProps> = ({
  calculation,
  ageGroupName,
}) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {/* Metric 1: Reference Mean */}
      <div className="bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] p-4 space-y-1">
        <div className="flex items-center justify-between text-[#60718B]">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
            Age-Normed Reference Mean
          </span>
          <Target className="w-3.5 h-3.5 text-[#2453FF]" />
        </div>
        <div className="font-mono font-black text-2xl sm:text-3xl text-[#2453FF]">
          {calculation.referenceMean}
        </div>
        <p className="text-[10px] text-[#60718B]">
          Standard center for {ageGroupName}
        </p>
      </div>

      {/* Metric 2: Selected IQ */}
      <div className="bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] p-4 space-y-1">
        <div className="flex items-center justify-between text-[#60718B]">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
            Example Standardized IQ
          </span>
          <Hash className="w-3.5 h-3.5 text-[#07152F]" />
        </div>
        <div className="font-mono font-black text-2xl sm:text-3xl text-[#07152F]">
          {calculation.score}
        </div>
        <p className="text-[10px] text-[#60718B]">
          Standard deviation: {calculation.standardDeviation}
        </p>
      </div>

      {/* Metric 3: Theoretical Percentile */}
      <div className="bg-[#EEF2FF]/60 rounded-2xl border border-[#2453FF]/25 p-4 space-y-1">
        <div className="flex items-center justify-between text-[#2453FF]">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
            Theoretical Percentile
          </span>
          <Percent className="w-3.5 h-3.5" />
        </div>
        <div className="font-mono font-black text-2xl sm:text-3xl text-[#2453FF]">
          {calculation.formattedPercentile}
        </div>
        <p className="text-[10px] text-[#60718B]">
          Portion of model at or below score
        </p>
      </div>

      {/* Metric 4: Distance from Mean */}
      <div className="bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] p-4 space-y-1">
        <div className="flex items-center justify-between text-[#60718B]">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
            Distance From Reference Mean
          </span>
          <Activity className="w-3.5 h-3.5 text-[#07152F]" />
        </div>
        <div className="font-mono font-black text-2xl sm:text-3xl text-[#07152F]">
          {calculation.formattedZScore}
        </div>
        <p className="text-[10px] text-[#60718B]">
          Z-score = ({calculation.score} − 100) / 15
        </p>
      </div>
    </div>
  );
};

