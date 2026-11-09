'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  Zap,
  Sparkles,
} from 'lucide-react';

/* ========================================================================= */
/* DECORATIVE LIGHTWEIGHT 3D SVG ASSETS (Matching Home Page)                */
/* ========================================================================= */

const TranslucentGlassSphere: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 120"
    className={`pointer-events-none select-none ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="quickSphereGrad" cx="35%" cy="30%" r="70%" fx="30%" fy="25%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="25%" stopColor="#D8E7FF" stopOpacity="0.8" />
        <stop offset="55%" stopColor="#75A2FF" stopOpacity="0.55" />
        <stop offset="85%" stopColor="#2453FF" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#1B40DF" stopOpacity="0.18" />
      </radialGradient>
      <radialGradient id="quickSphereSpecular" cx="32%" cy="28%" r="35%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="60" cy="98" rx="34" ry="10" fill="#2453FF" fillOpacity="0.14" filter="blur(6px)" />
    <circle cx="60" cy="56" r="45" fill="url(#quickSphereGrad)" />
    <circle cx="60" cy="56" r="44.5" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1" />
    <circle cx="60" cy="56" r="45" fill="url(#quickSphereSpecular)" />
  </svg>
);

const TranslucentGlassCube: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 110 110"
    className={`pointer-events-none select-none ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="quickCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#DBE8FF" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="quickCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#96BCFF" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#4779FF" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="quickCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4779FF" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#2453FF" stopOpacity="0.38" />
      </linearGradient>
    </defs>
    <polygon points="55,18 96,40 96,80 55,102 14,80 14,40" fill="#2453FF" fillOpacity="0.1" filter="blur(8px)" />
    <polygon points="14,40 55,62 55,102 14,80" fill="url(#quickCubeLeft)" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
    <polygon points="55,62 96,40 96,80 55,102" fill="url(#quickCubeRight)" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
    <polygon points="55,18 96,40 55,62 14,40" fill="url(#quickCubeTop)" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.9" />
    <line x1="55" y1="18" x2="55" y2="62" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" strokeDasharray="3 3" />
    <line x1="14" y1="40" x2="96" y2="40" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
  </svg>
);

const ArchitecturalRings: React.FC = () => (
  <svg
    viewBox="0 0 1100 700"
    className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1300px] h-[780px] pointer-events-none -z-10 select-none opacity-80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="720" cy="340" r="410" stroke="#2453FF" strokeOpacity="0.07" strokeWidth="1.2" />
    <circle cx="720" cy="340" r="290" stroke="#2453FF" strokeOpacity="0.09" strokeWidth="1.2" />
    <circle cx="720" cy="340" r="170" stroke="#2453FF" strokeOpacity="0.08" strokeWidth="0.8" strokeDasharray="4 6" />
  </svg>
);

const DotMatrix: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 96 96"
    className={`w-20 h-20 pointer-events-none select-none opacity-30 ${className}`}
    fill="#2453FF"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 1, 2, 3, 4].map((r) =>
      [0, 1, 2, 3, 4].map((c) => (
        <circle key={`${r}-${c}`} cx={10 + c * 19} cy={10 + r * 19} r="2.2" />
      ))
    )}
  </svg>
);

/* ========================================================================= */
/* MAIN QUICK HERO SECTION COMPONENT                                         */
/* ========================================================================= */

interface QuickHeroSectionProps {
  onStart: () => void;
  hasResumeSession?: boolean;
  savedQuestionIndex?: number;
  savedAnsweredCount?: number;
  onResume?: () => void;
  onDiscardSession?: () => void;
}

export const QuickHeroSection: React.FC<QuickHeroSectionProps> = ({
  onStart,
  hasResumeSession = false,
  savedQuestionIndex = 0,
  savedAnsweredCount = 0,
  onResume,
  onDiscardSession,
}) => {
  // Interactive sample state for the preview mockup: Rotating arrow puzzle
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const sampleOptions = [
    { id: 'left', label: 'Left (9:00)', direction: 'left', isCorrect: true },
    { id: 'up', label: 'Up (12:00)', direction: 'up', isCorrect: false },
    { id: 'down-left', label: 'Diagonal', direction: 'diag', isCorrect: false },
    { id: 'right', label: 'Right (3:00)', direction: 'right', isCorrect: false },
  ];

  const handleSelectOption = (id: string) => {
    setSelectedOption(id);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOption(null);
  };

  const scrollToGuide = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 no-print overflow-visible">
      {/* Background Atmosphere */}
      <ArchitecturalRings />

      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[620px] h-[400px] bg-[#2453FF]/8 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[8%] w-[540px] h-[360px] bg-[#4779FF]/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <DotMatrix className="hidden lg:block absolute top-28 left-[42%]" />
      <DotMatrix className="hidden lg:block absolute top-40 right-[4%]" />
      <DotMatrix className="block lg:hidden absolute top-20 right-2" />

      {/* Floating Translucent 3D Objects */}
      <div className="absolute top-8 left-[48%] lg:left-[51%] w-24 h-24 lg:w-32 lg:h-32 pointer-events-none z-10 animate-float-sphere">
        <TranslucentGlassSphere className="w-full h-full" />
      </div>

      <div className="absolute -top-4 right-[2%] lg:right-[3%] w-20 h-20 lg:w-28 lg:h-28 pointer-events-none z-10 animate-float-cube">
        <TranslucentGlassCube className="w-full h-full" />
      </div>

      <div className="hidden lg:block absolute -bottom-10 -left-12 w-32 h-32 pointer-events-none opacity-40 blur-[1px] animate-float-card">
        <TranslucentGlassCube className="w-full h-full scale-125" />
      </div>

      {/* Main Grid Content */}
      <div className="w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* =============================================================== */}
          {/* LEFT COLUMN: Hero Copy & Actions                                */}
          {/* =============================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-20">
            {/* Eyebrow Pill Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-4 sm:mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2453FF] animate-pulse" />
              <span>5-MINUTE REASONING ASSESSMENT • FREE INSTANT RESULTS</span>
            </div>

            {/* H1 Heading */}
            <h1 className="animate-fade-up-delay-1 text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black tracking-tight text-[#07152F] leading-[1.12] mb-4 sm:mb-5">
              Quick IQ Test – <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2453FF] via-[#3768FF] to-[#4779FF]">
                10 Questions in About 5 Minutes
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-up-delay-1 text-base sm:text-lg text-[#60718B] leading-relaxed max-w-xl mb-6 font-normal">
              Want to challenge your thinking without spending half an hour taking a test? Our quick IQ test gives you 10 reasoning questions that take approximately five minutes to complete. Solve number patterns, logical problems, abstract puzzles, and spatial challenges before receiving free instant results.
            </p>

            {/* 4 Feature Indicators (Pills) */}
            <div className="animate-fade-up-delay-2 flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7 w-full sm:w-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <Zap className="w-3.5 h-3.5 text-[#2453FF] fill-[#2453FF] shrink-0" />
                <span>10 Questions</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <Clock className="w-3.5 h-3.5 text-[#4779FF] shrink-0 stroke-[2.2]" />
                <span>~5 Minutes</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[2.2]" />
                <span>Instant Results</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2453FF] shrink-0 stroke-[2.2]" />
                <span>No Signup</span>
              </div>
            </div>

            {/* Resume Banner if user has uncompleted test */}
            {hasResumeSession && onResume && (
              <div className="w-full mb-5 p-3.5 sm:p-4 bg-gradient-to-r from-blue-50/90 to-indigo-50/70 rounded-2xl border border-[#2453FF]/25 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in">
                <div className="space-y-0.5">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#2453FF] uppercase tracking-wide">
                    <Sparkles className="w-3 h-3" />
                    <span>Unfinished Test Saved</span>
                  </div>
                  <p className="text-xs text-[#07152F] font-semibold">
                    Question {savedQuestionIndex + 1} of 10 ({savedAnsweredCount} answered)
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {onDiscardSession && (
                    <button
                      type="button"
                      onClick={onDiscardSession}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 rounded-lg hover:bg-white/80 transition-colors cursor-pointer"
                    >
                      Start Over
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={onResume}
                    className="flex-1 sm:flex-none px-4 py-1.5 rounded-xl bg-[#2453FF] hover:bg-[#1B40DF] text-xs font-bold text-white shadow-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Resume Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-3">
              <button
                type="button"
                onClick={onStart}
                className="cta-glow inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/20 focus:outline-none cursor-pointer"
              >
                <span>Start Quick IQ Test</span>
                <ArrowRight className="w-4 h-4 stroke-[2.8]" />
              </button>

              <button
                type="button"
                onClick={scrollToGuide}
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-2xl text-base font-bold text-[#07152F] bg-white border border-[#E2EAF7] hover:bg-[#F2F7FF] hover:border-[#D0DEF2] active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(7,21,47,0.03)] focus:outline-none cursor-pointer"
              >
                <span>How It Works & Guide</span>
              </button>
            </div>

            {/* Disclaimer under Start Test */}
            <p className="text-[11px] text-[#60718B] leading-relaxed">
              This is a short reasoning practice assessment. It does not provide a scientifically standardized IQ score or a clinical measurement of intelligence.
            </p>
          </div>

          {/* =============================================================== */}
          {/* RIGHT COLUMN: 3D Laptop with Interactive Quick Test Preview     */}
          {/* =============================================================== */}
          <div className="lg:col-span-7 relative flex justify-center w-full">
            <div className="w-full max-w-[660px] xl:max-w-[720px] relative">
              {/* Floating Status Badges */}
              <div className="absolute -top-3 sm:-top-5 -left-2 sm:left-4 z-30 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2EAF7] shadow-[0_8px_20px_rgba(7,21,47,0.08)] text-xs font-bold text-[#07152F] animate-float-card">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <TrendingUp className="w-3.5 h-3.5 text-[#2453FF]" />
                <span>Instant Score Calibration</span>
              </div>

              <div className="absolute -bottom-3 sm:-bottom-4 -right-1 sm:right-6 z-30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2EAF7] shadow-[0_8px_20px_rgba(7,21,47,0.08)] text-xs font-bold text-[#07152F] animate-float-card">
                <Clock className="w-3.5 h-3.5 text-[#2453FF]" />
                <span>10 Rapid Puzzles • ~5 Min</span>
              </div>

              {/* 3D Laptop Assembly */}
              <div className="relative pt-2 pb-6">
                <div
                  className="relative z-20 animate-float-laptop"
                  style={{
                    perspective: '1400px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className="relative transition-transform duration-300"
                    style={{
                      transform: 'rotateY(-9deg) rotateX(6deg) rotateZ(0.8deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Laptop Outer Frame / Display Lid */}
                    <div className="relative mx-auto w-[96%] bg-[#0B1323] p-2.5 sm:p-3 rounded-t-[20px] rounded-b-[2px] shadow-[0_30px_60px_-15px_rgba(7,21,47,0.35),0_10px_25px_rgba(36,83,255,0.12)] border border-[#1E293B]">
                      {/* Top Notch with Camera */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3 bg-[#0B1323] rounded-b-md flex items-center justify-center gap-1.5 z-30">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E293B] border border-[#334155]" />
                        <div className="w-1 h-1 rounded-full bg-emerald-500/80" />
                      </div>

                      {/* Screen Content */}
                      <div className="relative bg-[#F8FBFF] rounded-[13px] overflow-hidden border border-slate-200/80 text-[#07152F] p-3.5 xl:p-4 select-none">
                        {/* Top Bar inside Screen */}
                        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#E2EAF7]">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-[#2453FF] flex items-center justify-center text-white">
                              <Zap className="w-3.5 h-3.5 fill-white" />
                            </div>
                            <div>
                              <span className="font-extrabold text-xs text-[#07152F] leading-none">
                                Quick IQ <span className="text-[#2453FF]">Test</span>
                              </span>
                              <span className="block text-[8px] font-bold text-[#60718B] uppercase tracking-wider">
                                5-Min Assessment
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div className="w-24 sm:w-32 bg-[#E2EAF7] h-2 rounded-full overflow-hidden">
                              <div className="bg-[#2453FF] h-full w-[35%] rounded-full" />
                            </div>
                            <span className="text-[11px] font-extrabold text-[#07152F]">
                              Q 1/10
                            </span>
                          </div>
                        </div>

                        {/* Interactive Sample Question Card */}
                        <div className="bg-white rounded-xl border border-[#E2EAF7] p-3 sm:p-3.5 shadow-xs">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold tracking-wide uppercase text-[#2453FF] bg-[#EAF2FF] px-2 py-0.5 rounded-full border border-[#2453FF]/20">
                              Abstract Patterns • Intermediate
                            </span>
                            {selectedOption && (
                              <button
                                type="button"
                                onClick={handleReset}
                                className="text-[10px] font-bold text-[#2453FF] hover:underline flex items-center gap-1 cursor-pointer"
                              >
                                <RotateCcw className="w-2.5 h-2.5" />
                                <span>Reset</span>
                              </button>
                            )}
                          </div>

                          <h3 className="text-xs sm:text-sm font-bold text-[#07152F] mb-2.5">
                            Identify the rule and choose the figure that completes Frame 4:
                          </h3>

                          {/* 4-Frame Sequence Preview */}
                          <div className="p-2 sm:p-2.5 bg-[#F8FBFF] rounded-xl border border-[#E2EAF7] mb-3">
                            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                              {/* Frame 1: Up */}
                              <div className="flex flex-col items-center">
                                <div className="w-full aspect-square bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1 shadow-2xs">
                                  <svg viewBox="0 0 40 40" className="w-7 h-7">
                                    <line x1="20" y1="30" x2="20" y2="12" stroke="#2453FF" strokeWidth="3" strokeLinecap="round" />
                                    <polygon points="20,8 14,16 26,16" fill="#2453FF" />
                                  </svg>
                                </div>
                                <span className="text-[9px] font-semibold text-slate-400 mt-0.5">1 (12:00)</span>
                              </div>

                              {/* Frame 2: Right */}
                              <div className="flex flex-col items-center">
                                <div className="w-full aspect-square bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1 shadow-2xs">
                                  <svg viewBox="0 0 40 40" className="w-7 h-7">
                                    <line x1="10" y1="20" x2="28" y2="20" stroke="#2453FF" strokeWidth="3" strokeLinecap="round" />
                                    <polygon points="32,20 24,14 24,26" fill="#2453FF" />
                                  </svg>
                                </div>
                                <span className="text-[9px] font-semibold text-slate-400 mt-0.5">2 (3:00)</span>
                              </div>

                              {/* Frame 3: Down */}
                              <div className="flex flex-col items-center">
                                <div className="w-full aspect-square bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1 shadow-2xs">
                                  <svg viewBox="0 0 40 40" className="w-7 h-7">
                                    <line x1="20" y1="10" x2="20" y2="28" stroke="#2453FF" strokeWidth="3" strokeLinecap="round" />
                                    <polygon points="20,32 14,24 26,24" fill="#2453FF" />
                                  </svg>
                                </div>
                                <span className="text-[9px] font-semibold text-slate-400 mt-0.5">3 (6:00)</span>
                              </div>

                              {/* Frame 4: Missing ? */}
                              <div className="flex flex-col items-center">
                                <div className="w-full aspect-square bg-blue-50/80 border-2 border-dashed border-[#2453FF] rounded-lg flex items-center justify-center shadow-2xs">
                                  <span className="text-base font-black text-[#2453FF]">?</span>
                                </div>
                                <span className="text-[9px] font-bold text-[#2453FF] mt-0.5">Target</span>
                              </div>
                            </div>
                          </div>

                          {/* 4 Clickable Options */}
                          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                            {sampleOptions.map((opt) => {
                              const isSelected = selectedOption === opt.id;
                              let btnClass = 'bg-white border-[#E2EAF7] text-[#07152F] hover:border-[#2453FF]/60 hover:bg-slate-50';

                              if (isSelected) {
                                if (opt.isCorrect) {
                                  btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/25';
                                } else {
                                  btnClass = 'bg-red-50 border-red-400 text-red-900 ring-2 ring-red-400/25';
                                }
                              }

                              return (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => handleSelectOption(opt.id)}
                                  className={`p-2 rounded-xl border flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${btnClass}`}
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center">
                                      {opt.direction === 'left' && (
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                                          <line x1="18" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                          <polygon points="6,12 12,8 12,16" fill="currentColor" />
                                        </svg>
                                      )}
                                      {opt.direction === 'up' && (
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                                          <line x1="12" y1="18" x2="12" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                          <polygon points="12,6 8,12 16,12" fill="currentColor" />
                                        </svg>
                                      )}
                                      {opt.direction === 'diag' && (
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                                          <line x1="17" y1="7" x2="7" y2="17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                          <polygon points="7,17 7,11 13,17" fill="currentColor" />
                                        </svg>
                                      )}
                                      {opt.direction === 'right' && (
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                                          <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                          <polygon points="18,12 12,8 12,16" fill="currentColor" />
                                        </svg>
                                      )}
                                    </div>
                                    <span className="text-[11px]">{opt.label}</span>
                                  </div>
                                  {isSelected && (
                                    <span className="text-[10px] font-extrabold text-emerald-600">
                                      {opt.isCorrect ? '✓ Rule: +90° CW' : '✗ Try again'}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Quick Launch CTA inside Mockup */}
                          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-medium text-slate-500">
                              Ready for the full 10 questions?
                            </span>
                            <button
                              type="button"
                              onClick={onStart}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2453FF] hover:bg-[#1B40DF] text-white text-[11px] font-bold shadow-xs transition-colors cursor-pointer"
                            >
                              <span>Launch Test Now</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Laptop Base Stand / Podium Reflection */}
                    <div className="w-[102%] -ml-[1%] h-3 bg-gradient-to-r from-slate-400/30 via-slate-200/50 to-slate-400/30 rounded-b-xl shadow-md border-t border-slate-300/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
