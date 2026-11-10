'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  RotateCw,
  Box,
  Layers,
  Eye,
  Grid,
  Sparkles,
  Compass,
  Check,
  X,
  Zap,
} from 'lucide-react';
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
  // Interactive Live Hero Demonstration: Mental Rotation 90°
  const [demoSelected, setDemoSelected] = useState<string | null>(null);

  const demoOptions = [
    { id: 'A', isCorrect: false, label: 'Chiral reflection' },
    { id: 'B', isCorrect: true, label: '90° Clockwise rotation' },
    { id: 'C', isCorrect: false, label: '180° Inversion' },
  ];

  const categoryList: SpatialCategory[] = [
    'mental_rotation',
    'cube_folding',
    'mirror_reflection',
    'paper_folding',
    'spatial_orientation',
    'block_counting',
  ];

  return (
    <section className="relative pt-6 pb-10 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16 overflow-visible no-print">
      {/* Background Atmosphere Lights */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[380px] bg-[#2453FF]/7 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[10%] w-[520px] h-[340px] bg-[#4779FF]/8 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
          {/* LEFT COLUMN: Presentation, Features, & Start Card */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] border border-[#2453FF]/25 text-[#2453FF] text-[11px] font-black tracking-wide uppercase mb-3 shadow-2xs">
              <Compass className="w-3.5 h-3.5" />
              <span>Free Online Spatial Aptitude Test</span>
            </div>

            {/* H1: Spatial Reasoning Test */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black tracking-tight text-[#07152F] leading-[1.1] mb-3">
              Spatial{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2453FF] via-[#3867FF] to-[#4779FF]">
                Reasoning Test
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mb-5 font-medium">
              Challenge your 2D and 3D visualization with 20 original visual questions covering mental rotation,
              cube folding, mirror reflections, paper folding, views, and block counting.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6 w-full sm:w-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-[11px] font-bold text-[#07152F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[2.2]" />
                <span>20 Visual Questions</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-[11px] font-bold text-[#07152F]">
                <Layers className="w-3.5 h-3.5 text-purple-500 shrink-0 stroke-[2.2]" />
                <span>6 Core Domains</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-[11px] font-bold text-[#07152F]">
                <Clock className="w-3.5 h-3.5 text-[#2453FF] shrink-0 stroke-[2.2]" />
                <span>Optional 15-Min Timer</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-[11px] font-bold text-[#07152F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2453FF] shrink-0 stroke-[2.2]" />
                <span>Instant Results &amp; Worked Solutions</span>
              </div>
            </div>

            {/* Premium Assessment Launcher Card */}
            <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#2453FF] shadow-[0_8px_24px_rgba(36,83,255,0.08)] flex flex-col justify-between mb-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-0.5 rounded-bl-xl bg-[#2453FF] text-[9.5px] font-black uppercase tracking-wider text-white shadow-2xs">
                Formal Assessment
              </div>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#2453FF] flex items-center justify-center font-bold text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-heading font-black text-base text-[#07152F]">
                    Test Mode
                  </span>
                </div>
                <p className="text-[11.5px] text-[#60718B] leading-relaxed">
                  20 questions across all 6 spatial categories. Complete at your own pace or challenge yourself with the 15-minute timer.
                </p>
              </div>

              {/* Mode Timer Toggle */}
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-xl border border-slate-200/80 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#07152F]">
                  <Clock className="w-3.5 h-3.5 text-[#2453FF]" />
                  <span>Duration:</span>
                </div>
                <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => onToggleTimer(false)}
                    className={`px-3 py-1 text-xs font-extrabold rounded-md transition-all cursor-pointer ${
                      !timed
                        ? 'bg-[#EEF4FF] text-[#2453FF] shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Untimed
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleTimer(true)}
                    className={`px-3 py-1 text-xs font-extrabold rounded-md transition-all flex items-center gap-1 cursor-pointer ${
                      timed
                        ? 'bg-[#2453FF] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    <span>15 Minutes</span>
                  </button>
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={onStartClick}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] text-white font-extrabold text-sm transition-all shadow-[0_4px_14px_rgba(36,83,255,0.22)] hover:shadow-[0_6px_20px_rgba(36,83,255,0.32)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Start Free Spatial Reasoning Test</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* 6 Category Badges Grid */}
            <div className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-3 gap-2">
              {categoryList.map((catKey) => {
                const cat = SPATIAL_CATEGORIES[catKey];
                return (
                  <div
                    key={cat.id}
                    className="p-2 bg-white rounded-xl border border-[#E2EAF7] shadow-2xs flex items-center gap-2 hover:border-[#2453FF]/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#EEF4FF] text-[#2453FF] flex items-center justify-center shrink-0">
                      {catKey === 'mental_rotation' && <RotateCw className="w-3 h-3" />}
                      {catKey === 'cube_folding' && <Box className="w-3 h-3" />}
                      {catKey === 'mirror_reflection' && <RotateCw className="w-3 h-3" />}
                      {catKey === 'paper_folding' && <Layers className="w-3 h-3" />}
                      {catKey === 'spatial_orientation' && <Eye className="w-3 h-3" />}
                      {catKey === 'block_counting' && <Grid className="w-3 h-3" />}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10.5px] font-bold text-[#07152F] block truncate">
                        {cat.shortName}
                      </span>
                      <span className="text-[9px] text-[#64748B] block">
                        {cat.testCount} Questions
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Live Spatial Rotation Preview */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="w-full max-w-sm bg-white rounded-3xl border border-[#E2EAF7] p-4 sm:p-5 shadow-[0_10px_30px_rgba(7,21,47,0.05)] relative overflow-hidden">
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#2453FF] flex items-center justify-center font-bold text-xs">
                    <RotateCw className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-heading font-black text-xs text-[#07152F]">
                    Live Interactive Demo
                  </span>
                </div>
                <span className="text-[9.5px] font-bold text-[#2453FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                  Try It Out
                </span>
              </div>

              {/* Stimulus Showcase */}
              <div className="text-center text-[11px] font-bold text-[#07152F] mb-1.5">
                Rotate stimulus 90° clockwise without reflection:
              </div>

              <div className="w-28 h-28 mx-auto mb-3 p-1.5 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] shadow-inner flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Stimulus: Asymmetric L-Block with corner marker pip */}
                  <path
                    d="M30,20 L65,20 L65,40 L45,40 L45,80 L30,80 Z"
                    fill="#2453FF"
                    stroke="#1B40DF"
                    strokeWidth="2.5"
                  />
                  <circle cx="65" cy="30" r="4.5" fill="#FFFFFF" stroke="#07152F" strokeWidth="1.5" />
                  <rect x="32" y="66" width="10" height="10" rx="2" fill="#F59E0B" />
                </svg>
              </div>

              {/* Interactive 3 Option Choices */}
              <div className="grid grid-cols-3 gap-1.5 mb-3">
                {demoOptions.map((opt) => {
                  const isPicked = demoSelected === opt.id;
                  let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-slate-300';
                  if (isPicked) {
                    btnStyle = opt.isCorrect
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                      : 'bg-rose-50 border-rose-400 text-rose-800';
                  }
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setDemoSelected(opt.id)}
                      className={`p-1.5 rounded-xl border text-[10px] font-bold text-center transition-all cursor-pointer ${btnStyle}`}
                      aria-label={`Demo Option ${opt.id}`}
                    >
                      <div className="w-11 h-11 mx-auto mb-1 flex items-center justify-center">
                        {opt.id === 'A' && (
                          // Chiral reflection (Distractor)
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <g transform="translate(50,50) scale(-1,1) rotate(90) translate(-50,-50)">
                              <path d="M30,20 L65,20 L65,40 L45,40 L45,80 L30,80 Z" fill="#64748B" stroke="#07152F" strokeWidth="2.5" />
                              <circle cx="65" cy="30" r="4.5" fill="#FFFFFF" stroke="#07152F" strokeWidth="1.5" />
                              <rect x="32" y="66" width="10" height="10" rx="2" fill="#F59E0B" />
                            </g>
                          </svg>
                        )}
                        {opt.id === 'B' && (
                          // Exact 90 deg clockwise rotation (Correct)
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <g transform="translate(50,50) rotate(90) translate(-50,-50)">
                              <path d="M30,20 L65,20 L65,40 L45,40 L45,80 L30,80 Z" fill="#2453FF" stroke="#1B40DF" strokeWidth="2.5" />
                              <circle cx="65" cy="30" r="4.5" fill="#FFFFFF" stroke="#07152F" strokeWidth="1.5" />
                              <rect x="32" y="66" width="10" height="10" rx="2" fill="#F59E0B" />
                            </g>
                          </svg>
                        )}
                        {opt.id === 'C' && (
                          // 180 deg rotation (Distractor)
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <g transform="translate(50,50) rotate(180) translate(-50,-50)">
                              <path d="M30,20 L65,20 L65,40 L45,40 L45,80 L30,80 Z" fill="#64748B" stroke="#07152F" strokeWidth="2.5" />
                              <circle cx="65" cy="30" r="4.5" fill="#FFFFFF" stroke="#07152F" strokeWidth="1.5" />
                              <rect x="32" y="66" width="10" height="10" rx="2" fill="#F59E0B" />
                            </g>
                          </svg>
                        )}
                      </div>
                      <span className="block">Option {opt.id}</span>
                    </button>
                  );
                })}
              </div>

              {/* Instant Interactive Feedback Banner */}
              {demoSelected && (
                <div
                  className={`p-2.5 rounded-xl text-[11px] leading-snug flex items-start gap-2 animate-in fade-in duration-200 ${
                    demoSelected === 'B'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {demoSelected === 'B' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5] mt-0.5" />
                      <span>
                        <strong>Correct!</strong> Rotating 90° clockwise points the long stem to the right while preserving the white pip on the leading edge.
                      </span>
                    </>
                  ) : (
                    <>
                      <X className="w-4 h-4 text-rose-600 shrink-0 stroke-[2.5] mt-0.5" />
                      <span>
                        <strong>Incorrect.</strong> {demoSelected === 'A' ? 'Option A is a chiral mirror reflection.' : 'Option C is rotated by 180° instead of 90°.'}
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
