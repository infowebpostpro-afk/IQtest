'use client';

import React, { useState } from 'react';
import { IQPercentileResult } from '@/lib/iqPercentile/types';
import { Copy, RotateCcw, Share2, Check } from 'lucide-react';

interface CalculatorActionsProps {
  result: IQPercentileResult | null;
  onReset: () => void;
}

export const CalculatorActions: React.FC<CalculatorActionsProps> = ({
  result,
  onReset,
}) => {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handleCopyResult = async () => {
    if (!result) return;
    let text = '';
    if (result.mode === 'iqToPercentile') {
      text = `IQ ${result.formattedIQ} corresponds to approximately the ${result.formattedPercentile} percentile under a normal-distribution model with mean ${result.mean} and SD ${result.sd}.`;
    } else {
      text = `The ${result.formattedPercentile} percentile corresponds to approximately IQ ${result.formattedIQ} under a normal-distribution model with mean ${result.mean} and SD ${result.sd}.`;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopyStatus('result');
      setTimeout(() => setCopyStatus(null), 2200);
    } catch {
      setCopyStatus(null);
    }
  };

  const handleShareCalculation = async () => {
    if (!result) return;
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const val = result.mode === 'iqToPercentile' ? result.iq : result.percentile;
    const shareUrl = `${origin}/iq-percentile-calculator/?mode=${result.mode}&val=${val}&sd=${result.sd}`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = shareUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopyStatus('share');
      setTimeout(() => setCopyStatus(null), 2200);
    } catch {
      setCopyStatus(null);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
      {/* Reset Button */}
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#60718B] bg-white border border-[#E2EAF7] hover:bg-[#F7FAFF] hover:text-[#07152F] transition-colors cursor-pointer shadow-2xs"
        aria-label="Reset calculator to default values"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset to Default</span>
      </button>

      {/* Action Buttons: Copy & Share */}
      <div className="flex items-center gap-2">
        {/* Copy Result */}
        <button
          type="button"
          onClick={handleCopyResult}
          disabled={!result}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs ${
            copyStatus === 'result'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-[#2453FF] border border-[#2453FF]/30 hover:bg-[#EEF2FF]'
          }`}
          aria-label="Copy result text to clipboard"
        >
          {copyStatus === 'result' ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Result Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Result</span>
            </>
          )}
        </button>

        {/* Share Calculation */}
        <button
          type="button"
          onClick={handleShareCalculation}
          disabled={!result}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs ${
            copyStatus === 'share'
              ? 'bg-emerald-600 text-white'
              : 'bg-[#2453FF] text-white hover:bg-[#1a44e6]'
          }`}
          aria-label="Share calculation link"
        >
          {copyStatus === 'share' ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
