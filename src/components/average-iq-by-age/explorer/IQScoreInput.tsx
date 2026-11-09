'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, AlertCircle } from 'lucide-react';
import {
  EXPLORER_MIN_IQ,
  EXPLORER_MAX_IQ,
  validateExplorerScore,
} from '@/lib/ageNormExplorer/math';

interface IQScoreInputProps {
  score: number;
  onScoreChange: (score: number) => void;
}

export const IQScoreInput: React.FC<IQScoreInputProps> = ({
  score,
  onScoreChange,
}) => {
  const [inputValue, setInputValue] = useState<string>(score.toString());
  const [error, setError] = useState<string | null>(null);

  // Sync internal input value when score changes externally (slider/preset)
  useEffect(() => {
    setInputValue(score.toString());
    setError(null);
  }, [score]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setInputValue(raw);

    if (raw === '') {
      setError('Please enter a whole number score.');
      return;
    }

    const validation = validateExplorerScore(raw);
    if (!validation.isValid) {
      setError(validation.errorMessage || 'Invalid score.');
    } else {
      setError(null);
      onScoreChange(validation.score);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScore = Number(e.target.value);
    onScoreChange(newScore);
    setInputValue(newScore.toString());
    setError(null);
  };

  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor="explorer-iq-input"
          className="text-xs font-bold text-[#07152F] uppercase tracking-wider flex items-center gap-1.5"
        >
          <span>Example Standardized IQ</span>
        </label>
        <span className="text-[11px] text-[#60718B] font-mono">
          Range: {EXPLORER_MIN_IQ}–{EXPLORER_MAX_IQ}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Number input */}
        <div className="relative w-28 sm:w-32 shrink-0">
          <input
            id="explorer-iq-input"
            type="number"
            min={EXPLORER_MIN_IQ}
            max={EXPLORER_MAX_IQ}
            step={1}
            value={inputValue}
            onChange={handleInputChange}
            aria-label="Example standardized IQ score"
            aria-invalid={error !== null}
            aria-describedby={error ? 'explorer-score-error' : undefined}
            className={`w-full py-2.5 px-3.5 text-center font-mono font-black text-xl sm:text-2xl text-[#07152F] bg-white rounded-2xl border transition-all focus:outline-none focus:ring-2 ${
              error
                ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/30'
                : 'border-[#E2EAF7] focus:ring-[#2453FF] shadow-2xs hover:border-[#2453FF]/40'
            }`}
          />
        </div>

        {/* Range Slider */}
        <div className="flex-1 space-y-1">
          <input
            type="range"
            min={EXPLORER_MIN_IQ}
            max={EXPLORER_MAX_IQ}
            step={1}
            value={score}
            onChange={handleSliderChange}
            aria-label="IQ score slider"
            className="w-full h-2.5 bg-[#E2EAF7] rounded-lg appearance-none cursor-pointer accent-[#2453FF] focus:outline-none focus:ring-2 focus:ring-[#2453FF]/30"
          />
          <div className="flex justify-between text-[10px] text-[#60718B] font-mono px-0.5">
            <span>{EXPLORER_MIN_IQ}</span>
            <span className="font-bold text-[#2453FF]">100 (Mean)</span>
            <span>{EXPLORER_MAX_IQ}</span>
          </div>
        </div>
      </div>

      {/* Validation Message */}
      {error && (
        <div
          id="explorer-score-error"
          role="alert"
          className="flex items-center gap-1.5 text-xs text-rose-600 bg-rose-50 border border-rose-200 p-2 rounded-xl"
        >
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Informational Tooltip / Micro-note */}
      <div className="flex items-start gap-1.5 text-[11px] text-[#60718B] bg-[#F7FAFF] p-2.5 rounded-xl border border-[#E2EAF7]">
        <HelpCircle className="w-3.5 h-3.5 text-[#2453FF] shrink-0 mt-0.5" />
        <span>
          Enter a standardized IQ score from an appropriate assessment, or use an example score to explore the model.
        </span>
      </div>
    </div>
  );
};

