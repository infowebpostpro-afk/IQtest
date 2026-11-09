'use client';

import React from 'react';
import { BookOpen, AlertCircle } from 'lucide-react';
import { AgeGroup, AgeNormCalculation } from '@/lib/ageNormExplorer/types';

interface AgeNormInterpretationProps {
  ageGroup: AgeGroup;
  calculation: AgeNormCalculation;
}

export const AgeNormInterpretation: React.FC<AgeNormInterpretationProps> = ({
  ageGroup,
  calculation,
}) => {
  const getDeviationWording = (z: number) => {
    if (Math.abs(z) < 0.05) return 'at the exact center';
    if (z > 0) {
      if (Math.abs(z - 1.0) < 0.05) return 'one standard deviation above the reference mean';
      if (Math.abs(z - 2.0) < 0.05) return 'two standard deviations above the reference mean';
      if (Math.abs(z - 3.0) < 0.05) return 'three standard deviations above the reference mean';
      return `${Math.abs(z).toFixed(2)} standard deviations above the reference mean`;
    }
    if (Math.abs(z + 1.0) < 0.05) return 'one standard deviation below the reference mean';
    if (Math.abs(z + 2.0) < 0.05) return 'two standard deviations below the reference mean';
    if (Math.abs(z + 3.0) < 0.05) return 'three standard deviations below the reference mean';
    return `${Math.abs(z).toFixed(2)} standard deviations below the reference mean`;
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3.5 shadow-2xs">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-[#EEF2FF] text-[#2453FF] flex items-center justify-center">
          <BookOpen className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-sm font-bold text-[#07152F]">
          Educational Model Interpretation
        </h3>
      </div>

      <div className="text-sm text-[#60718B] leading-relaxed space-y-2">
        <p>
          For {ageGroup.name.toLowerCase()} aged {ageGroup.ageRange}, an example standardized IQ of{' '}
          <strong className="text-[#07152F]">{calculation.score}</strong> is{' '}
          <strong className="text-[#07152F]">{getDeviationWording(calculation.zScore)}</strong> of 100.
          Under the theoretical SD-15 normal model, this corresponds to approximately the{' '}
          <strong className="text-[#2453FF]">{calculation.formattedPercentile}</strong>.
        </p>
        <p className="text-xs text-[#60718B] bg-[#F8FBFF] p-3 rounded-xl border border-[#E2EAF7]">
          This is an educational model. The exact percentile and interpretation of a real test result depend on that assessment&apos;s norms, reporting rules and measurement uncertainty.
        </p>
      </div>
    </div>
  );
};

