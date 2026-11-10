'use client';

import React from 'react';
import { ArrowRight, Clock, ShieldCheck, CheckCircle2, RotateCw, Box, Layers, Eye, Grid } from 'lucide-react';
import { SPATIAL_CATEGORIES, SpatialCategory } from '@/lib/spatial/types';

interface SpatialTestHeroProps {
  onStartClick: () => void;
  timed: boolean;
  onToggleTimer: (timed: boolean) => void;
}

export const SpatialTestHero: React.FC<SpatialTestHeroProps> = ({
  onStartClick,
  timed,
  onToggleTimer,
}) => {
  const categoryList: SpatialCategory[] = [
    'mental_rotation',
    'cube_folding',
    'mirror_reflection',
    'paper_folding',
    'spatial_orientation',
    'block_counting',
  ];

  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-[#F7FAFF] to-[#FFFFFF] border-b border-[#E2EAF7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF4FF] border border-[#2453FF]/20 text-[#2453FF] text-xs font-bold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-[#2453FF] animate-pulse" />
            20 Original Visual Questions
          </div>

          {/* Single H1 Tag */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-[#07152F] leading-tight mb-4">
            Spatial Reasoning Test
          </h1>

          {/* Hero Supporting Text */}
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8">
            Take a free spatial reasoning test with 20 visual questions covering mental rotation,
            cube folding, mirror images, paper folding and 3D shapes. Review step-by-step
            explanations after submitting your answers.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-xs font-semibold text-[#07152F]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2EAF7] shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              20 Visual Questions
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2EAF7] shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#2453FF]" />
              Optional 15-Minute Timer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2EAF7] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2453FF]" />
              Free Practice • No Sign-up
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2EAF7] shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              Worked Visual Answers
            </span>
          </div>

          {/* Controls Card */}
          <div className="p-6 bg-white rounded-2xl border border-[#E2EAF7] shadow-sm max-w-lg mx-auto mb-8 text-left">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F1F5F9]">
              <div>
                <span className="text-sm font-bold text-[#07152F] block">Assessment Timer</span>
                <span className="text-xs text-[#64748B]">
                  {timed ? '15 minutes standard countdown' : 'Untimed practice mode'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onToggleTimer(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    !timed
                      ? 'bg-[#EEF4FF] text-[#2453FF] border border-[#2453FF]/30 shadow-xs'
                      : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                  }`}
                >
                  Untimed
                </button>
                <button
                  type="button"
                  onClick={() => onToggleTimer(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    timed
                      ? 'bg-[#2453FF] text-white shadow-xs'
                      : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                  }`}
                >
                  15-Min
                </button>
              </div>
            </div>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={onStartClick}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] shadow-[0_4px_16px_rgba(36,83,255,0.25)] hover:shadow-[0_6px_20px_rgba(36,83,255,0.35)] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Start Free Spatial Reasoning Test</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Categories Grid Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
            {categoryList.map((catKey) => {
              const cat = SPATIAL_CATEGORIES[catKey];
              return (
                <div
                  key={cat.id}
                  className="p-3 bg-white/80 rounded-xl border border-[#E2EAF7] flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] text-[#2453FF] flex items-center justify-center shrink-0">
                    {catKey === 'mental_rotation' && <RotateCw className="w-4 h-4" />}
                    {catKey === 'cube_folding' && <Box className="w-4 h-4" />}
                    {catKey === 'mirror_reflection' && <RotateCw className="w-4 h-4" />}
                    {catKey === 'paper_folding' && <Layers className="w-4 h-4" />}
                    {catKey === 'spatial_orientation' && <Eye className="w-4 h-4" />}
                    {catKey === 'block_counting' && <Grid className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#07152F] block truncate">
                      {cat.shortName}
                    </span>
                    <span className="text-[10px] text-[#64748B] block">
                      {cat.testCount} Questions
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

