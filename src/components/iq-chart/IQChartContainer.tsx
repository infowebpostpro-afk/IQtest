'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MIN_IQ, MAX_IQ } from '@/lib/iqChart/math';
import { ScoreRangeInterval } from '@/lib/iqChart/types';
import { InteractiveBellCurve } from './InteractiveBellCurve';
import { ScoreInputSystem } from './ScoreInputSystem';
import { ScoreSummaryCards } from './ScoreSummaryCards';
import { RangeExplorer } from './RangeExplorer';
import { IQReferenceTable } from './IQReferenceTable';
import { ChartExportControls } from './ChartExportControls';
import { ShieldCheck, AlertCircle, Info } from 'lucide-react';

export const IQChartContainer: React.FC = () => {
  const searchParams = useSearchParams();

  // Core interactive states
  const [score, setScore] = useState<number>(100);
  const [isCompareMode, setIsCompareMode] = useState<boolean>(false);
  const [scoreB, setScoreB] = useState<number>(115);
  const [activeRange, setActiveRange] = useState<ScoreRangeInterval | null>(null);
  const [activeMarkerTarget, setActiveMarkerTarget] = useState<'A' | 'B'>('A');

  // Initialize from URL search parameters if provided (SSR-safe)
  useEffect(() => {
    if (!searchParams) return;
    const urlScore = searchParams.get('score');
    if (urlScore) {
      const parsed = parseInt(urlScore, 10);
      if (!isNaN(parsed) && parsed >= MIN_IQ && parsed <= MAX_IQ) {
        setScore(parsed);
      }
    }

    const urlCompare = searchParams.get('compare');
    if (urlCompare === 'true') {
      setIsCompareMode(true);
    }

    const urlScoreB = searchParams.get('scoreB');
    if (urlScoreB) {
      const parsedB = parseInt(urlScoreB, 10);
      if (!isNaN(parsedB) && parsedB >= MIN_IQ && parsedB <= MAX_IQ) {
        setScoreB(parsedB);
      }
    }
  }, [searchParams]);

  const handleScoreChange = (newScore: number) => {
    const clamped = Math.max(MIN_IQ, Math.min(MAX_IQ, newScore));
    setScore(clamped);
    setActiveRange(null); // Clear range selection when single score is adjusted
  };

  const handleScoreBChange = (newScoreB: number) => {
    const clamped = Math.max(MIN_IQ, Math.min(MAX_IQ, newScoreB));
    setScoreB(clamped);
    setActiveRange(null);
  };

  const handleSelectRange = (range: ScoreRangeInterval | null) => {
    setActiveRange(range);
    if (range) {
      // Set the active score to the middle of the selected range for convenient inspection
      const mid = Math.round((range.minIq + range.maxIq) / 2);
      setScore(mid);
    }
  };

  const handleToggleCompareMode = () => {
    setIsCompareMode((prev) => !prev);
    setActiveRange(null);
  };

  return (
    <div className="w-full space-y-8 sm:space-y-10 antialiased">
      {/* =================================================================== */}
      {/* 1. MAIN INTERACTIVE BELL CURVE VISUALIZATION                        */}
      {/* =================================================================== */}
      <section aria-labelledby="bellCurveHeading">
        <h2 id="bellCurveHeading" className="sr-only">
          Interactive IQ Bell Curve Visualization
        </h2>
        <InteractiveBellCurve
          score={score}
          onScoreChange={handleScoreChange}
          isCompareMode={isCompareMode}
          scoreB={scoreB}
          onScoreBChange={handleScoreBChange}
          activeRange={activeRange}
          activeMarkerTarget={activeMarkerTarget}
        />
      </section>

      {/* =================================================================== */}
      {/* 2. LIVE SCORE INFORMATION CARDS                                     */}
      {/* =================================================================== */}
      <section aria-labelledby="scoreMetricsHeading">
        <h2 id="scoreMetricsHeading" className="sr-only">
          Score Analytics & Theoretical Percentile
        </h2>
        <ScoreSummaryCards
          score={score}
          isCompareMode={isCompareMode}
          scoreB={scoreB}
        />
      </section>

      {/* =================================================================== */}
      {/* 3. INPUT CONTROLS, SLIDER & PRESETS                                 */}
      {/* =================================================================== */}
      <section aria-labelledby="inputControlsHeading">
        <h2 id="inputControlsHeading" className="sr-only">
          Score Selection & Input System
        </h2>
        <ScoreInputSystem
          score={score}
          onScoreChange={handleScoreChange}
          isCompareMode={isCompareMode}
          onToggleCompareMode={handleToggleCompareMode}
          scoreB={scoreB}
          onScoreBChange={handleScoreBChange}
          activeMarkerTarget={activeMarkerTarget}
          onSetActiveMarkerTarget={setActiveMarkerTarget}
        />
      </section>

      {/* =================================================================== */}
      {/* 4. IQ RANGE EXPLORER (Standard Deviation Intervals)                 */}
      {/* =================================================================== */}
      <section aria-labelledby="rangeExplorerHeading">
        <h2 id="rangeExplorerHeading" className="sr-only">
          Standard Deviation Range Explorer
        </h2>
        <RangeExplorer
          activeRange={activeRange}
          onSelectRange={handleSelectRange}
        />
      </section>

      {/* =================================================================== */}
      {/* 5. REFERENCE TABLE (40 to 160)                                      */}
      {/* =================================================================== */}
      <section aria-labelledby="referenceTableHeading">
        <h2 id="referenceTableHeading" className="sr-only">
          Standardized IQ Score Reference Table
        </h2>
        <IQReferenceTable
          currentScore={score}
          onSelectScore={handleScoreChange}
        />
      </section>

      {/* =================================================================== */}
      {/* 6. EXPORT & SHARE CONTROLS                                          */}
      {/* =================================================================== */}
      <section aria-labelledby="exportControlsHeading">
        <h2 id="exportControlsHeading" className="sr-only">
          Chart Download and Sharing Options
        </h2>
        <ChartExportControls
          score={score}
          isCompareMode={isCompareMode}
          scoreB={scoreB}
        />
      </section>

      {/* =================================================================== */}
      {/* 7. SCIENTIFIC & ETHICAL SAFEGUARDS PANEL                            */}
      {/* =================================================================== */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#2453FF] mb-2">
          <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
          <span>Scientific Assumptions &amp; Methodological Notice</span>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-[#07152F] mb-3">
          Theoretical Reference Model Disclaimers
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-[#60718B] leading-relaxed">
          <p className="font-semibold text-[#07152F]">
            The chart shows a theoretical IQ score distribution (mean 100, SD 15). Official interpretations depend on the specific test and its normative data.
          </p>

          <p>
            This interactive visualization is an educational data-exploration tool. It does not administer, score, or diagnose cognitive abilities. Individual psychometric instruments (such as the Wechsler Adult Intelligence Scale, Stanford-Binet, or Cattell III) use distinct standardization samples, standard errors of measurement (SEM), confidence intervals, and composite score structures.
          </p>

          <p>
            Scores earned on informal practice quizzes (including the practice tests on our website) represent raw sample accuracy and cannot be directly substituted into this chart as standardized IQ measurements. This model must not be used for clinical evaluation, educational placement, Mensa qualification, or employment determinations.
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Info className="w-3.5 h-3.5 text-[#2453FF] shrink-0" />
          <span>Reference parameters: Gaussian distribution curve (μ = 100, σ = 15, Domain = [40, 160]).</span>
        </div>
      </section>
    </div>
  );
};
