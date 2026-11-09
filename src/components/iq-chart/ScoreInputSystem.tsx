'use client';

import React, { useState } from 'react';
import {
  MIN_IQ,
  MAX_IQ,
  IQ_PRESETS,
} from '@/lib/iqChart/math';
import { Minus, Plus, Sliders, ArrowLeftRight } from 'lucide-react';

interface ScoreInputSystemProps {
  score: number;
  onScoreChange: (score: number) => void;
  isCompareMode: boolean;
  onToggleCompareMode: () => void;
  scoreB: number;
  onScoreBChange: (scoreB: number) => void;
  activeMarkerTarget: 'A' | 'B';
  onSetActiveMarkerTarget: (target: 'A' | 'B') => void;
}

export const ScoreInputSystem: React.FC<ScoreInputSystemProps> = ({
  score,
  onScoreChange,
  isCompareMode,
  onToggleCompareMode,
  scoreB,
  onScoreBChange,
  activeMarkerTarget,
  onSetActiveMarkerTarget,
}) => {
  const [inputValue, setInputValue] = useState<string>(score.toString());
  const [inputBValue, setInputBValue] = useState<string>(scoreB.toString());
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync internal text state with parent score updates
  React.useEffect(() => {
    setInputValue(score.toString());
  }, [score]);

  React.useEffect(() => {
    setInputBValue(scoreB.toString());
  }, [scoreB]);

  // Handle direct numeric input for Score A
  const handleNumericInputChange = (val: string) => {
    setInputValue(val);
    const parsed = parseInt(val, 10);
    if (isNaN(parsed)) {
      setErrorMessage('Please enter a valid whole number.');
      return;
    }
    if (parsed < MIN_IQ || parsed > MAX_IQ) {
      setErrorMessage(`Please enter a score between ${MIN_IQ} and ${MAX_IQ}.`);
      return;
    }
    setErrorMessage(null);
    onScoreChange(parsed);
  };

  // Handle direct numeric input for Score B
  const handleNumericInputBChange = (val: string) => {
    setInputBValue(val);
    const parsed = parseInt(val, 10);
    if (isNaN(parsed)) {
      setErrorMessage('Please enter a valid whole number.');
      return;
    }
    if (parsed < MIN_IQ || parsed > MAX_IQ) {
      setErrorMessage(`Please enter a score between ${MIN_IQ} and ${MAX_IQ}.`);
      return;
    }
    setErrorMessage(null);
    onScoreBChange(parsed);
  };

  const handleStepScore = (delta: number) => {
    const next = Math.max(MIN_IQ, Math.min(MAX_IQ, score + delta));
    onScoreChange(next);
  };

  const handleStepScoreB = (delta: number) => {
    const next = Math.max(MIN_IQ, Math.min(MAX_IQ, scoreB + delta));
    onScoreBChange(next);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-[#E2EAF7] p-5 sm:p-7 shadow-[0_4px_24px_rgba(7,21,47,0.03)] space-y-6">
      {/* Header with Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-lg font-extrabold text-[#07152F] flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#2453FF]" />
            <span>Score Input Controls</span>
          </h2>
          <p className="text-xs text-[#60718B]">
            Adjust the slider or type any standardized score from {MIN_IQ} to {MAX_IQ}.
          </p>
        </div>

        {/* Compare Two Scores Mode Toggle */}
        <button
          type="button"
          onClick={onToggleCompareMode}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isCompareMode
              ? 'bg-[#EEF2FF] text-[#2453FF] border border-[#2453FF]/40 shadow-xs'
              : 'bg-slate-50 text-[#60718B] border border-[#E2EAF7] hover:bg-slate-100 hover:text-[#07152F]'
          }`}
          aria-pressed={isCompareMode}
        >
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>{isCompareMode ? 'Compare Mode Active' : 'Compare Two Scores'}</span>
        </button>
      </div>

      {/* Primary Score A Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {isCompareMode && (
              <button
                type="button"
                onClick={() => onSetActiveMarkerTarget('A')}
                className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center transition-all ${
                  activeMarkerTarget === 'A'
                    ? 'bg-[#2453FF] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-500'
                }`}
                title="Set Active Target to Score A"
              >
                A
              </button>
            )}
            <div>
              <label
                htmlFor="scoreInputA"
                className="block text-xs font-bold uppercase tracking-wider text-[#07152F]"
              >
                {isCompareMode ? 'Score A (Base Score)' : 'Standardized IQ Score'}
              </label>
              <span className="text-[11px] text-[#60718B]">Range: {MIN_IQ} – {MAX_IQ}</span>
            </div>
          </div>

          {/* Stepper & Numeric Input Box */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleStepScore(-1)}
              disabled={score <= MIN_IQ}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#07152F] flex items-center justify-center transition-colors disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              aria-label="Decrease score by 1"
            >
              <Minus className="w-4 h-4 stroke-[2.5]" />
            </button>

            <input
              id="scoreInputA"
              type="number"
              min={MIN_IQ}
              max={MAX_IQ}
              value={inputValue}
              onChange={(e) => handleNumericInputChange(e.target.value)}
              className="w-24 h-10 text-center font-mono text-lg font-black text-[#07152F] bg-[#F7FAFF] border border-[#E2EAF7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2453FF]/20 focus:border-[#2453FF]"
              aria-label="Standardized IQ Score Input"
            />

            <button
              type="button"
              onClick={() => handleStepScore(1)}
              disabled={score >= MAX_IQ}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#07152F] flex items-center justify-center transition-colors disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              aria-label="Increase score by 1"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Range Slider for Score A */}
        <div className="space-y-1.5 pt-1">
          <input
            type="range"
            min={MIN_IQ}
            max={MAX_IQ}
            step="1"
            value={score}
            onChange={(e) => onScoreChange(parseInt(e.target.value, 10))}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2453FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF]"
            aria-label="IQ Score Slider"
            aria-valuenow={score}
            aria-valuemin={MIN_IQ}
            aria-valuemax={MAX_IQ}
          />
          <div className="flex justify-between text-[11px] font-mono text-[#60718B]">
            <span>40 (-4σ)</span>
            <span>70 (-2σ)</span>
            <span className="font-bold text-[#07152F]">100 (Mean)</span>
            <span>130 (+2σ)</span>
            <span>160 (+4σ)</span>
          </div>
        </div>
      </div>

      {/* Secondary Score B Controls (Shown only when Compare Mode is Active) */}
      {isCompareMode && (
        <div className="space-y-4 pt-4 border-t border-indigo-100/70 bg-[#EEF2FF]/40 -mx-5 sm:-mx-7 px-5 sm:px-7 pb-4 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onSetActiveMarkerTarget('B')}
                className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center transition-all ${
                  activeMarkerTarget === 'B'
                    ? 'bg-[#6366F1] text-white shadow-xs'
                    : 'bg-slate-200 text-slate-600'
                }`}
                title="Set Active Target to Score B"
              >
                B
              </button>
              <div>
                <label
                  htmlFor="scoreInputB"
                  className="block text-xs font-bold uppercase tracking-wider text-[#4338CA]"
                >
                  Score B (Comparison Score)
                </label>
                <span className="text-[11px] text-[#60718B]">Adjust for side-by-side analysis</span>
              </div>
            </div>

            {/* Stepper B */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleStepScoreB(-1)}
                disabled={scoreB <= MIN_IQ}
                className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 text-[#4338CA] flex items-center justify-center transition-colors border border-indigo-200 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Decrease Score B by 1"
              >
                <Minus className="w-4 h-4 stroke-[2.5]" />
              </button>

              <input
                id="scoreInputB"
                type="number"
                min={MIN_IQ}
                max={MAX_IQ}
                value={inputBValue}
                onChange={(e) => handleNumericInputBChange(e.target.value)}
                className="w-24 h-10 text-center font-mono text-lg font-black text-[#4338CA] bg-white border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1]"
                aria-label="Score B input"
              />

              <button
                type="button"
                onClick={() => handleStepScoreB(1)}
                disabled={scoreB >= MAX_IQ}
                className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 text-[#4338CA] flex items-center justify-center transition-colors border border-indigo-200 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Increase Score B by 1"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Slider for Score B */}
          <div className="space-y-1.5">
            <input
              type="range"
              min={MIN_IQ}
              max={MAX_IQ}
              step="1"
              value={scoreB}
              onChange={(e) => onScoreBChange(parseInt(e.target.value, 10))}
              className="w-full h-2.5 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-[#6366F1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
              aria-label="Score B Slider"
              aria-valuenow={scoreB}
              aria-valuemin={MIN_IQ}
              aria-valuemax={MAX_IQ}
            />
            <div className="flex justify-between text-[11px] font-mono text-indigo-700/70">
              <span>Score B Position: {scoreB}</span>
              <span>Diff: {Math.abs(scoreB - score)} points</span>
            </div>
          </div>
        </div>
      )}

      {/* Error Message Feedback */}
      {errorMessage && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-semibold animate-in fade-in">
          {errorMessage}
        </div>
      )}

      {/* Quick Score Presets */}
      <div className="pt-2">
        <span className="block text-xs font-bold uppercase tracking-wider text-[#60718B] mb-2.5">
          Quick Score Presets:
        </span>
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {IQ_PRESETS.map((preset) => {
            const isPresetActive = score === preset;
            return (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  onScoreChange(preset);
                  setErrorMessage(null);
                }}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isPresetActive
                    ? 'bg-[#2453FF] text-white shadow-sm ring-2 ring-[#2453FF]/30'
                    : 'bg-[#F7FAFF] text-[#07152F] border border-[#E2EAF7] hover:border-[#2453FF]/40 hover:bg-white'
                }`}
              >
                <span>IQ {preset}</span>
                {preset === 100 && (
                  <span className="ml-1 text-[10px] font-normal opacity-80">(Mean)</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
