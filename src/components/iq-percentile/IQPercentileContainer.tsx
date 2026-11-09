'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  CalculationMode,
  StandardDeviationOption,
  IQPercentileResult,
} from '@/lib/iqPercentile/types';
import {
  DEFAULT_SD,
  DEFAULT_MEAN,
  validateIQInput,
  validatePercentileInput,
  calculateIQPercentileResult,
  formatPercentile,
} from '@/lib/iqPercentile/math';
import { ConversionModeSelector } from './ConversionModeSelector';
import { ScaleSettings } from './ScaleSettings';
import { CalculatorInputs } from './CalculatorInputs';
import { CalculatorPresets } from './CalculatorPresets';
import { ResultsDashboard } from './ResultsDashboard';
import { MiniDistributionChart } from './MiniDistributionChart';
import { CalculatorActions } from './CalculatorActions';

export const IQPercentileContainer: React.FC = () => {
  const searchParams = useSearchParams();

  // Core Calculator States
  const [mode, setMode] = useState<CalculationMode>('iqToPercentile');
  const [iqInput, setIqInput] = useState<string>('115');
  const [percentileInput, setPercentileInput] = useState<string>('95');
  const [selectedSd, setSelectedSd] = useState<StandardDeviationOption>(DEFAULT_SD);

  // Restore state from URL search params if present
  useEffect(() => {
    if (!searchParams) return;

    const urlMode = searchParams.get('mode');
    if (urlMode === 'iqToPercentile' || urlMode === 'percentileToIq') {
      setMode(urlMode);
    }

    const urlSd = searchParams.get('sd');
    if (urlSd === '15' || urlSd === '16' || urlSd === '24') {
      setSelectedSd(parseInt(urlSd, 10) as StandardDeviationOption);
    }

    const urlVal = searchParams.get('val');
    if (urlVal) {
      if (urlMode === 'percentileToIq') {
        const valRes = validatePercentileInput(urlVal);
        if (valRes.isValid && valRes.value !== undefined) {
          setPercentileInput(urlVal);
        }
      } else {
        const valRes = validateIQInput(urlVal);
        if (valRes.isValid && valRes.value !== undefined) {
          setIqInput(urlVal);
        }
      }
    }
  }, [searchParams]);

  // Validation
  const validation = useMemo(() => {
    if (mode === 'iqToPercentile') {
      return validateIQInput(iqInput);
    } else {
      return validatePercentileInput(percentileInput);
    }
  }, [mode, iqInput, percentileInput]);

  // Calculation Result
  const result: IQPercentileResult | null = useMemo(() => {
    if (!validation.isValid || validation.value === undefined) {
      return null;
    }
    return calculateIQPercentileResult(mode, validation.value, selectedSd, DEFAULT_MEAN);
  }, [mode, validation, selectedSd]);

  // Mode change handler
  const handleModeChange = (newMode: CalculationMode) => {
    setMode(newMode);
  };

  // Preset click handler
  const handleSelectPreset = (presetVal: number) => {
    if (mode === 'iqToPercentile') {
      setIqInput(presetVal.toString());
    } else {
      setPercentileInput(presetVal.toString());
    }
  };

  // Reset handler
  const handleReset = () => {
    setMode('iqToPercentile');
    setIqInput('115');
    setPercentileInput('95');
    setSelectedSd(DEFAULT_SD);
  };

  const currentNumericValue = useMemo(() => {
    if (mode === 'iqToPercentile') {
      const parsed = parseFloat(iqInput);
      return !isNaN(parsed) ? parsed : null;
    } else {
      const parsed = parseFloat(percentileInput);
      return !isNaN(parsed) ? parsed : null;
    }
  }, [mode, iqInput, percentileInput]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 antialiased">
      {/* Main Interactive Tool Card */}
      <div className="bg-white rounded-3xl border border-[#E2EAF7] p-5 sm:p-8 shadow-[0_10px_35px_-4px_rgba(7,21,47,0.04)] space-y-6 sm:space-y-7">
        {/* 1. Mode Selector */}
        <section aria-label="Conversion Mode">
          <ConversionModeSelector mode={mode} onModeChange={handleModeChange} />
        </section>

        {/* 2. Interactive Input Box */}
        <section aria-label="Input Controls">
          <CalculatorInputs
            mode={mode}
            inputValue={mode === 'iqToPercentile' ? iqInput : percentileInput}
            onInputChange={mode === 'iqToPercentile' ? setIqInput : setPercentileInput}
            error={validation.error}
            onClear={() => {
              if (mode === 'iqToPercentile') setIqInput('');
              else setPercentileInput('');
            }}
          />
        </section>

        {/* 3. Presets */}
        <section aria-label="Presets">
          <CalculatorPresets
            mode={mode}
            currentValue={currentNumericValue}
            onSelectPreset={handleSelectPreset}
          />
        </section>

        {/* 4. Assessment Scale Options (SD 15, 16, 24) */}
        <section aria-label="Scale Parameters">
          <ScaleSettings selectedSd={selectedSd} onSdChange={setSelectedSd} />
        </section>

        {/* 5. Results Dashboard */}
        <section aria-label="Results Dashboard">
          <ResultsDashboard result={result} isValid={validation.isValid} />
        </section>

        {/* 6. Mini Bell Curve Visualization */}
        {result && (
          <section aria-label="Visual Distribution Preview">
            <MiniDistributionChart
              iq={result.iq}
              sd={result.sd}
              percentile={result.percentile}
              formattedPercentile={result.formattedPercentile}
            />
          </section>
        )}

        {/* 7. Action Buttons (Copy, Reset, Share) */}
        <section aria-label="Calculator Actions">
          <CalculatorActions result={result} onReset={handleReset} />
        </section>
      </div>
    </div>
  );
};
