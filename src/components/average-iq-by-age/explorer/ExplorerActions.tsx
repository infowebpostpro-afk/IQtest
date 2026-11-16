'use client';

import React, { useState } from 'react';
import { Copy, RotateCcw, Check } from 'lucide-react';
import { AgeGroup, AgeNormCalculation } from '@/lib/ageNormExplorer/types';

interface ExplorerActionsProps {
  ageGroup: AgeGroup;
  calculation: AgeNormCalculation;
  onReset: () => void;
}

export const ExplorerActions: React.FC<ExplorerActionsProps> = ({
  ageGroup,
  calculation,
  onReset,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    const summaryText = `IQ Age-Norm Explorer Summary:
• Age Group: ${ageGroup.name} (Ages ${ageGroup.ageRange})
• Example Standardized IQ: ${calculation.score}
• Reference Mean: ${calculation.referenceMean}
• Standard Deviation: ${calculation.standardDeviation}
• Distance From Mean: ${calculation.formattedZScore}
• Theoretical Percentile: ${calculation.formattedPercentile}

Educational reference model (Mean 100, SD 15). Actual standardized test results depend on test-specific norms and clinical evaluation.
Learn more: https://theiqtest.org/average-iq-by-age/`;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(summaryText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#2453FF] bg-[#EEF2FF] hover:bg-[#E0E7FF] border border-[#2453FF]/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2453FF]"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">Summary Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Result</span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#60718B] hover:text-[#07152F] bg-white hover:bg-slate-50 border border-[#E2EAF7] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-300"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset Explorer</span>
      </button>
    </div>
  );
};

