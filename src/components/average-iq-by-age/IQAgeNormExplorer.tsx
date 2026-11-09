'use client';

import React, { useState, useMemo } from 'react';
import { Compass, Sparkles } from 'lucide-react';
import {
  EXPLORER_DEFAULT_IQ,
  DEFAULT_AGE_GROUP_ID,
  DEFAULT_COMPARE_AGE_GROUP_ID,
  getAgeGroupById,
  calculateAgeNormStats,
} from '@/lib/ageNormExplorer/math';
import { AgeGroupSelector } from './explorer/AgeGroupSelector';
import { IQScoreInput } from './explorer/IQScoreInput';
import { IQScorePresets } from './explorer/IQScorePresets';
import { AgeNormBellCurve } from './explorer/AgeNormBellCurve';
import { AgeNormResultCards } from './explorer/AgeNormResultCards';
import { AgeGroupComparison } from './explorer/AgeGroupComparison';
import { AgeNormInterpretation } from './explorer/AgeNormInterpretation';
import { WhyAgeNormingWorks } from './explorer/WhyAgeNormingWorks';
import { ExplorerActions } from './explorer/ExplorerActions';

export const IQAgeNormExplorer: React.FC = () => {
  const [selectedAgeGroupId, setSelectedAgeGroupId] = useState<string>(DEFAULT_AGE_GROUP_ID);
  const [score, setScore] = useState<number>(EXPLORER_DEFAULT_IQ);
  const [isCompareMode, setIsCompareMode] = useState<boolean>(false);
  const [compareAgeGroupId, setCompareAgeGroupId] = useState<string>(DEFAULT_COMPARE_AGE_GROUP_ID);

  const primaryAgeGroup = useMemo(
    () => getAgeGroupById(selectedAgeGroupId),
    [selectedAgeGroupId]
  );

  const compareAgeGroup = useMemo(
    () => getAgeGroupById(compareAgeGroupId),
    [compareAgeGroupId]
  );

  // Scientific statistical calculation: Mean 100, SD 15 (deviation IQ)
  const calculation = useMemo(
    () => calculateAgeNormStats(score),
    [score]
  );

  const handleReset = () => {
    setSelectedAgeGroupId(DEFAULT_AGE_GROUP_ID);
    setScore(EXPLORER_DEFAULT_IQ);
    setIsCompareMode(false);
    setCompareAgeGroupId(DEFAULT_COMPARE_AGE_GROUP_ID);
  };

  return (
    <section
      id="iq-age-norm-explorer"
      aria-label="IQ Age-Norm Explorer"
      className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_-6px_rgba(7,21,47,0.06)] space-y-8 scroll-mt-24"
    >
      {/* Tool Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] shadow-2xs">
          <Compass className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Interactive Tool</span>
        </div>
        {/* Strictly preserved H2 per prompt Section 5 */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152F] tracking-tight leading-tight">
          Explore IQ Scores by Age
        </h2>
        {/* Supporting description per prompt Section 5 */}
        <p className="text-sm sm:text-base text-[#60718B] leading-relaxed max-w-3xl">
          Select an age group and explore how standardized IQ scores compare with an age-normed reference distribution. The average stays near 100 because scores are adjusted for age.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Controls (Age Selector, IQ Input, Slider, Presets, Actions) */}
        <div className="lg:col-span-5 space-y-6">
          <AgeGroupSelector
            selectedId={selectedAgeGroupId}
            onChange={setSelectedAgeGroupId}
            label="1. Select Age Group"
            idPrefix="explorer"
          />

          <IQScoreInput
            score={score}
            onScoreChange={setScore}
          />

          <IQScorePresets
            currentScore={score}
            onSelectPreset={setScore}
          />

          <ExplorerActions
            ageGroup={primaryAgeGroup}
            calculation={calculation}
            onReset={handleReset}
          />
        </div>

        {/* Right Side: Bell Curve Visualization & 4 Results Cards */}
        <div className="lg:col-span-7 space-y-6">
          <AgeNormBellCurve
            score={score}
            onScoreChange={setScore}
            ageGroupName={primaryAgeGroup.name}
          />

          <AgeNormResultCards
            calculation={calculation}
            ageGroupName={primaryAgeGroup.name}
          />
        </div>
      </div>

      {/* Lower Section: Comparison, Dynamic Interpretation, Why Age-Norming Works */}
      <div className="space-y-6 pt-4 border-t border-[#E2EAF7]">
        <AgeGroupComparison
          isCompareMode={isCompareMode}
          onToggleCompareMode={() => setIsCompareMode((prev) => !prev)}
          primaryAgeGroup={primaryAgeGroup}
          compareAgeGroup={compareAgeGroup}
          onSelectCompareAgeGroup={setCompareAgeGroupId}
          calculation={calculation}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AgeNormInterpretation
            ageGroup={primaryAgeGroup}
            calculation={calculation}
          />

          <WhyAgeNormingWorks />
        </div>
      </div>
    </section>
  );
};

