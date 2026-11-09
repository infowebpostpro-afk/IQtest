'use client';

import React from 'react';
import { CalculationMode } from '@/lib/iqPercentile/types';
import { AlertCircle, Hash, Percent, X } from 'lucide-react';

interface CalculatorInputsProps {
  mode: CalculationMode;
  inputValue: string;
  onInputChange: (val: string) => void;
  error?: string;
  onClear: () => void;
}

export const CalculatorInputs: React.FC<CalculatorInputsProps> = ({
  mode,
  inputValue,
  onInputChange,
  error,
  onClear,
}) => {
  const isIQMode = mode === 'iqToPercentile';
  const label = isIQMode ? 'Enter Standardized IQ Score' : 'Enter Percentile Rank';
  const placeholder = isIQMode ? 'e.g. 115' : 'e.g. 95 or 84.13';
  const unitLabel = isIQMode ? 'IQ points' : '%';
  const hint = isIQMode
    ? 'Standard application range: 40 to 200. (Model baseline mean = 100).'
    : 'Enter any theoretical percentile strictly between 0 and 100 (e.g. 0.1 to 99.9).';

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor="calculator-input"
          className="text-xs sm:text-sm font-bold text-[#07152F] flex items-center gap-1.5"
        >
          {isIQMode ? (
            <Hash className="w-4 h-4 text-[#2453FF]" />
          ) : (
            <Percent className="w-4 h-4 text-[#2453FF]" />
          )}
          <span>{label}</span>
        </label>
        <span className="text-[11px] font-medium text-[#60718B]">
          Instant calculation
        </span>
      </div>

      {/* Input Box Container */}
      <div className="relative">
        <input
          id="calculator-input"
          type="text"
          inputMode="decimal"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? 'input-error-msg' : 'input-hint-msg'}
          className={`w-full py-3.5 pl-4 pr-24 text-lg sm:text-2xl font-mono font-bold rounded-2xl bg-white border transition-all focus:outline-none focus:ring-4 ${
            error
              ? 'border-red-400 text-red-700 focus:border-red-500 focus:ring-red-100'
              : 'border-[#E2EAF7] text-[#07152F] focus:border-[#2453FF] focus:ring-[#2453FF]/15'
          }`}
        />

        {/* Right Adornment / Clear Button / Unit */}
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {inputValue && (
            <button
              type="button"
              onClick={onClear}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-xs font-bold font-mono px-2 py-1 rounded-lg bg-[#F7FAFF] border border-[#E2EAF7] text-[#60718B]">
            {unitLabel}
          </span>
        </div>
      </div>

      {/* Inline Feedback / Error or Helper */}
      {error ? (
        <div
          id="input-error-msg"
          className="flex items-center gap-1.5 text-xs font-semibold text-red-600 bg-red-50/80 px-3 py-1.5 rounded-xl border border-red-200"
          role="alert"
        >
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      ) : (
        <p id="input-hint-msg" className="text-[11px] text-[#60718B]">
          {hint}
        </p>
      )}
    </div>
  );
};
