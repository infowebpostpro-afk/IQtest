'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  Info,
  ArrowRight,
  TrendingUp,
  BarChart2,
  Brain,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
} from 'lucide-react';

/* ========================================================================= */
/* DECORATIVE SVG AMBIENT ASSETS                                             */
/* ========================================================================= */

const TranslucentGlassSphere: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 120"
    className={`pointer-events-none select-none ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="heroSphereGrad" cx="35%" cy="30%" r="70%" fx="30%" fy="25%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="25%" stopColor="#D8E7FF" stopOpacity="0.8" />
        <stop offset="55%" stopColor="#75A2FF" stopOpacity="0.55" />
        <stop offset="85%" stopColor="#2453FF" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#1B40DF" stopOpacity="0.18" />
      </radialGradient>
      <radialGradient id="heroSphereSpecular" cx="32%" cy="28%" r="35%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="60" cy="98" rx="34" ry="10" fill="#2453FF" fillOpacity="0.14" filter="blur(6px)" />
    <circle cx="60" cy="56" r="45" fill="url(#heroSphereGrad)" />
    <circle cx="60" cy="56" r="44.5" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1" />
    <circle cx="60" cy="56" r="45" fill="url(#heroSphereSpecular)" />
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
      <linearGradient id="heroCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#DBE8FF" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="heroCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#96BCFF" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#4779FF" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="heroCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4779FF" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#2453FF" stopOpacity="0.38" />
      </linearGradient>
    </defs>
    <polygon points="55,18 96,40 96,80 55,102 14,80 14,40" fill="#2453FF" fillOpacity="0.1" filter="blur(8px)" />
    <polygon points="14,40 55,62 55,102 14,80" fill="url(#heroCubeLeft)" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
    <polygon points="55,62 96,40 96,80 55,102" fill="url(#heroCubeRight)" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
    <polygon points="55,18 96,40 55,62 14,40" fill="url(#heroCubeTop)" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.9" />
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
/* MAIN HERO COMPONENT                                                       */
/* ========================================================================= */

export const AverageIQByAgeHero: React.FC = () => {
  const scrollToChart = () => {
    const el = document.getElementById('average-iq-chart');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToFaq = () => {
    const el = document.getElementById('faq-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 no-print overflow-visible">
      {/* Ambient background atmosphere */}
      <ArchitecturalRings />

      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[620px] h-[400px] bg-[#2453FF]/8 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[8%] w-[540px] h-[360px] bg-[#4779FF]/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <DotMatrix className="hidden lg:block absolute top-28 left-[45%]" />
      <DotMatrix className="hidden lg:block absolute top-40 right-[4%]" />
      <DotMatrix className="block lg:hidden absolute top-20 right-2" />

      {/* Floating 3D decorative objects */}
      <div className="absolute top-8 left-[48%] lg:left-[50%] w-24 h-24 lg:w-32 lg:h-32 pointer-events-none z-10 animate-float-sphere">
        <TranslucentGlassSphere className="w-full h-full" />
      </div>

      <div className="absolute -top-4 right-[2%] lg:right-[3%] w-20 h-20 lg:w-28 lg:h-28 pointer-events-none z-10 animate-float-cube">
        <TranslucentGlassCube className="w-full h-full" />
      </div>

      {/* Main Grid Content */}
      <div className="w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* =============================================================== */}
          {/* LEFT COLUMN: Hero Copy & Actions                                */}
          {/* =============================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Model Eyebrow Pill */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-4 sm:mb-5 shadow-2xs">
              <Users className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Age-Normed · Mean 100 · Standard Deviation 15</span>
            </div>

            {/* H1 Heading - Preserving single H1 */}
            <h1 className="animate-fade-up-delay-1 text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black tracking-tight text-[#07152F] leading-[1.12] mb-4 sm:mb-5">
              Average IQ by Age
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2453FF] via-[#3768FF] to-[#4779FF] mb-4 leading-snug">
              Chart for Kids, Teens &amp; Adults
            </p>

            {/* Description */}
            <p className="animate-fade-up-delay-1 text-base sm:text-lg text-[#60718B] leading-relaxed max-w-2xl mb-6 font-normal">
              Understand how standardized IQ scores work across all ages. Explore the age-normed reference mean, see why the average is approximately 100, and learn how cognitive abilities change throughout life.
            </p>

            {/* Key Feature Pills */}
            <div className="animate-fade-up-delay-2 flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7 w-full sm:w-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <BarChart2 className="w-3.5 h-3.5 text-[#2453FF] shrink-0" />
                <span>Reference Mean: 100</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <Brain className="w-3.5 h-3.5 text-[#4779FF] shrink-0" />
                <span>Fluid vs. Crystallized</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Ages 6 to 80+</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Peer-Reviewed Sources</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-4">
              <button
                type="button"
                onClick={scrollToChart}
                className="cta-glow inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/20 focus:outline-none cursor-pointer"
              >
                <span>View Average IQ Chart</span>
                <ArrowRight className="w-4 h-4 stroke-[2.8]" />
              </button>

              <button
                type="button"
                onClick={scrollToFaq}
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-2xl text-base font-bold text-[#07152F] bg-white border border-[#E2EAF7] hover:bg-[#F2F7FF] hover:border-[#D0DEF2] active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(7,21,47,0.03)] focus:outline-none cursor-pointer"
              >
                <span>Browse 12 FAQs</span>
              </button>
            </div>

            {/* Subtle reference pill */}
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#60718B]">
              <Info className="w-3.5 h-3.5 text-[#2453FF] shrink-0" />
              <span>Age-Normed Standardized IQ Scoring Reference (WISC-V &amp; WAIS-5 Model)</span>
            </div>
          </div>

          {/* =============================================================== */}
          {/* RIGHT COLUMN: Interactive Visual Metric Cards & Lifespan Curve  */}
          {/* =============================================================== */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="w-full max-w-[500px] space-y-4">
              {/* Card 1: Key Reference Snapshot */}
              <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#E2EAF7] p-5 sm:p-6 shadow-[0_16px_36px_-6px_rgba(7,21,47,0.08)] relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0F4FA]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1B40DF] to-[#3B66FF] flex items-center justify-center text-white shadow-xs">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-sm text-[#07152F] block leading-none">
                        Age-Norm Standard
                      </span>
                      <span className="text-[10px] font-bold text-[#60718B] uppercase tracking-wider">
                        Deviation Scoring
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#EBF2FF] text-[#2453FF] border border-[#2453FF]/20">
                    Mean = 100
                  </span>
                </div>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
                  <div className="bg-[#F8FBFF] p-3 rounded-2xl border border-[#E2EAF7]">
                    <span className="text-[10px] font-bold uppercase text-[#60718B] block mb-0.5">Reference</span>
                    <span className="text-xl sm:text-2xl font-black text-[#2453FF] font-mono">100</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">50th %ile</span>
                  </div>
                  <div className="bg-[#F8FBFF] p-3 rounded-2xl border border-[#E2EAF7]">
                    <span className="text-[10px] font-bold uppercase text-[#60718B] block mb-0.5">Central 68%</span>
                    <span className="text-xl sm:text-2xl font-black text-[#07152F] font-mono">85–115</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">±1.0 SD</span>
                  </div>
                  <div className="bg-[#F8FBFF] p-3 rounded-2xl border border-[#E2EAF7]">
                    <span className="text-[10px] font-bold uppercase text-[#60718B] block mb-0.5">Broad 95%</span>
                    <span className="text-xl sm:text-2xl font-black text-[#07152F] font-mono">70–130</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">±2.0 SD</span>
                  </div>
                </div>

                {/* Visual Trajectory Bar Graphic */}
                <div className="bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-[#07152F]">Lifespan Peak Distribution</span>
                    <span className="text-[#2453FF]">Hartshorne &amp; Germine (2015)</span>
                  </div>
                  {/* Trajectory comparison bars */}
                  <div className="space-y-1.5 text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-[#60718B] font-medium shrink-0">Processing Speed</span>
                      <div className="flex-1 bg-[#E2EAF7] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#4779FF] h-full w-[40%] rounded-full" />
                      </div>
                      <span className="w-14 text-right font-bold text-[#07152F]">Peaks ~20s</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-[#60718B] font-medium shrink-0">Working Memory</span>
                      <div className="flex-1 bg-[#E2EAF7] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#2453FF] h-full w-[55%] rounded-full" />
                      </div>
                      <span className="w-14 text-right font-bold text-[#07152F]">Peaks ~30s</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-[#60718B] font-medium shrink-0">Vocabulary (Gc)</span>
                      <div className="flex-1 bg-[#E2EAF7] h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[85%] rounded-full" />
                      </div>
                      <span className="w-14 text-right font-bold text-emerald-700">Peaks ~50–60+</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-[#60718B] flex items-center justify-between">
                  <span>Standardized IQ remains centered around 100</span>
                  <button
                    type="button"
                    onClick={scrollToChart}
                    className="text-[#2453FF] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full table below</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Card 2: Interactive Assessment Link */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#EEF2FF] to-[#F8FBFF] border border-[#2453FF]/20 flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2453FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#07152F]">Curious about your reasoning?</h4>
                    <p className="text-[11px] text-[#60718B]">Try our 20-question practice assessment</p>
                  </div>
                </div>
                <Link
                  href="/"
                  className="px-3.5 py-1.5 rounded-xl bg-[#2453FF] hover:bg-[#1B40DF] text-white text-xs font-bold shrink-0 transition-colors inline-flex items-center gap-1 shadow-2xs"
                >
                  <span>Start Free</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
