'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  RotateCcw,
} from 'lucide-react';

/* ========================================================================= */
/* DECORATIVE LIGHTWEIGHT 3D SVG ASSETS                                      */
/* ========================================================================= */

/**
 * Translucent 3D Frosted Glass Sphere with Specular Highlight
 */
const TranslucentGlassSphere: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 120"
    className={`pointer-events-none select-none ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="sphereGrad" cx="35%" cy="30%" r="70%" fx="30%" fy="25%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="25%" stopColor="#D8E7FF" stopOpacity="0.8" />
        <stop offset="55%" stopColor="#75A2FF" stopOpacity="0.55" />
        <stop offset="85%" stopColor="#2453FF" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#1B40DF" stopOpacity="0.18" />
      </radialGradient>
      <radialGradient id="sphereSpecular" cx="32%" cy="28%" r="35%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Soft ambient blur shadow behind sphere */}
    <ellipse cx="60" cy="98" rx="34" ry="10" fill="#2453FF" fillOpacity="0.14" filter="blur(6px)" />
    {/* Sphere body */}
    <circle cx="60" cy="56" r="45" fill="url(#sphereGrad)" />
    {/* Inner refraction rim */}
    <circle cx="60" cy="56" r="44.5" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1" />
    {/* Specular shine */}
    <circle cx="60" cy="56" r="45" fill="url(#sphereSpecular)" />
  </svg>
);

/**
 * Translucent 3D Glass Cube / Crystal with Inner Refraction
 */
const TranslucentGlassCube: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 110 110"
    className={`pointer-events-none select-none ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#DBE8FF" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#96BCFF" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#4779FF" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4779FF" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#2453FF" stopOpacity="0.38" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <polygon points="55,18 96,40 96,80 55,102 14,80 14,40" fill="#2453FF" fillOpacity="0.1" filter="blur(8px)" />
    {/* Left Face */}
    <polygon points="14,40 55,62 55,102 14,80" fill="url(#cubeLeft)" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
    {/* Right Face */}
    <polygon points="55,62 96,40 96,80 55,102" fill="url(#cubeRight)" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
    {/* Top Face */}
    <polygon points="55,18 96,40 55,62 14,40" fill="url(#cubeTop)" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.9" />
    {/* Internal refractive wireframes */}
    <line x1="55" y1="18" x2="55" y2="62" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" strokeDasharray="3 3" />
    <line x1="14" y1="40" x2="96" y2="40" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
  </svg>
);

/**
 * Concentric Architectural Arc Rings in Background
 */
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

/**
 * 5x5 Fine Dot Matrix
 */
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
/* MAIN HERO SECTION COMPONENT                                               */
/* ========================================================================= */

interface HeroSectionProps {
  onStartClick?: () => void;
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartClick,
  onExploreClick,
}) => {
  // Interactive sample state for the preview mockup
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const sampleOptions = [
    { id: 'circle', label: 'Circle', shape: 'circle' },
    { id: 'square', label: 'Square', shape: 'square' },
    { id: 'triangle', label: 'Triangle', shape: 'triangle', isCorrect: true },
    { id: 'diamond', label: 'Diamond', shape: 'diamond' },
  ];

  const handleSelectOption = (id: string) => {
    setSelectedOption(id);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOption(null);
  };

  const scrollToHowItWorks = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('how-it-works');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 no-print overflow-visible">
      {/* =================================================================== */}
      {/* BACKGROUND ATMOSPHERE: Radial Glows, Circles, Dots, 3D Glass Objects*/}
      {/* =================================================================== */}
      <ArchitecturalRings />

      {/* Large Soft Blue Radial Glows */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[620px] h-[400px] bg-[#2453FF]/8 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[8%] w-[540px] h-[360px] bg-[#4779FF]/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Dot Matrices */}
      <DotMatrix className="hidden lg:block absolute top-28 left-[42%]" />
      <DotMatrix className="hidden lg:block absolute top-40 right-[4%]" />
      <DotMatrix className="block lg:hidden absolute top-20 right-2" />

      {/* Floating Translucent 3D Objects in Background */}
      {/* 1. Translucent Frosted Glass Sphere (Top Center/Right) */}
      <div className="absolute top-8 left-[48%] lg:left-[51%] w-24 h-24 lg:w-32 lg:h-32 pointer-events-none z-10 animate-float-sphere">
        <TranslucentGlassSphere className="w-full h-full" />
      </div>

      {/* 2. Translucent 3D Glass Cube (Top Right Corner) */}
      <div className="absolute -top-4 right-[2%] lg:right-[3%] w-20 h-20 lg:w-28 lg:h-28 pointer-events-none z-10 animate-float-cube">
        <TranslucentGlassCube className="w-full h-full" />
      </div>

      {/* 3. Subtle Translucent Glass Prism (Bottom Left Accent) */}
      <div className="hidden lg:block absolute -bottom-10 -left-12 w-32 h-32 pointer-events-none opacity-40 blur-[1px] animate-float-card">
        <TranslucentGlassCube className="w-full h-full scale-125" />
      </div>

      {/* =================================================================== */}
      {/* MAIN TWO-COLUMN CONTENT GRID                                       */}
      {/* =================================================================== */}
      <div className="w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* =============================================================== */}
          {/* =============================================================== */}
          {/* LEFT COLUMN: ~44% Desktop Layout                                */}
          {/* =============================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-20">
            {/* Eyebrow Pill Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-4 sm:mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2453FF]" />
              <span>FREE ONLINE REASONING ASSESSMENT</span>
            </div>

            {/* H1 Heading with Refined Blue Gradient on 'IQ Test' */}
            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] font-black tracking-tight text-[#07152F] leading-[1.08] mb-4 sm:mb-5">
              Free Online <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2453FF] via-[#3768FF] to-[#4779FF]">
                IQ Test
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="animate-fade-up-delay-1 text-base sm:text-lg text-[#60718B] leading-relaxed max-w-xl mb-6 font-normal">
              Challenge your reasoning with 20 original questions covering numbers, logic, patterns, and spatial thinking. Get instant results and clear explanations—no signup needed.
            </p>

            {/* Feature Indicators (3 Pills) */}
            <div className="animate-fade-up-delay-2 flex flex-wrap items-center gap-2.5 sm:gap-3 mb-7 w-full sm:w-auto">
              {/* 1. 20 Questions */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 stroke-[2.2]" />
                <span>20 Questions</span>
              </div>

              {/* 2. Instant Results */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <Clock className="w-4 h-4 text-[#4779FF] shrink-0 stroke-[2.2]" />
                <span>Instant Results</span>
              </div>

              {/* 3. No Signup */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_8px_rgba(7,21,47,0.04)] text-xs font-bold text-[#07152F]">
                <ShieldCheck className="w-4 h-4 text-[#2453FF] shrink-0 stroke-[2.2]" />
                <span>No Signup</span>
              </div>
            </div>

            {/* CTAs (Desktop: side by side; Mobile: stacked full-width) */}
            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link
                href="/test"
                className="cta-glow inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2453FF]"
              >
                <span>Start Free IQ Test</span>
                <ArrowRight className="w-4 h-4 stroke-[2.8]" />
              </Link>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-2xl text-base font-bold text-[#07152F] bg-white border border-[#E2EAF7] hover:bg-[#F2F7FF] hover:border-[#D0DEF2] active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(7,21,47,0.03)] focus:outline-none"
              >
                <span>Explore How It Works</span>
              </button>
            </div>
          </div>

          {/* =============================================================== */}
          {/* RIGHT COLUMN: ~56% Desktop 3D Presentation / Mobile Preview     */}
          {/* =============================================================== */}
          <div className="lg:col-span-7 relative flex justify-center w-full">
            {/* ------------------------------------------------------------- */}
            {/* DESKTOP VIEW: 3D LAPTOP ON ARCHITECTURAL PODIUM (>= lg)        */}
            {/* ------------------------------------------------------------- */}
            <div className="hidden lg:block w-full max-w-[680px] xl:max-w-[740px] relative">
              {/* Architectural 3D Plinth / Podium Under Laptop */}
              <div className="relative pt-2 pb-8">
                {/* 3D Laptop Assembly with subtle float and 3D perspective */}
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
                    <div className="relative mx-auto w-[95%] bg-[#0B1323] p-2.5 sm:p-3 rounded-t-[20px] rounded-b-[2px] shadow-[0_30px_60px_-15px_rgba(7,21,47,0.35),0_10px_25px_rgba(36,83,255,0.12)] border border-[#1E293B]">
                      {/* Top Notch with Camera Dot */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3 bg-[#0B1323] rounded-b-md flex items-center justify-center gap-1.5 z-30">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E293B] border border-[#334155]" />
                        <div className="w-1 h-1 rounded-full bg-emerald-500/80" />
                      </div>

                      {/* Glossy Screen Rim Reflection Catch-light */}
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-400/40 to-transparent pointer-events-none" />

                      {/* Laptop Screen Content (The IQ Test Interface) */}
                      <div className="relative bg-[#F8FBFF] rounded-[13px] overflow-hidden border border-slate-200/80 text-[#07152F] p-3.5 xl:p-4 select-none">
                        {/* App Navigation Top Bar */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2EAF7]">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-[#2453FF] flex items-center justify-center text-white">
                              {/* Mini Logo */}
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                                <circle cx="17.5" cy="17.5" r="3.5" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-extrabold text-xs text-[#07152F] leading-none">
                                IQ <span className="text-[#2453FF]">Test</span>
                              </span>
                              <span className="block text-[8px] font-bold text-[#60718B] uppercase tracking-wider">
                                Reasoning Assessment
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar and Indicator */}
                          <div className="flex items-center gap-3">
                            <div className="w-28 xl:w-36 bg-[#E2EAF7] h-2 rounded-full overflow-hidden">
                              <div className="bg-[#2453FF] h-full w-[25%] rounded-full" />
                            </div>
                            <span className="text-[11px] font-extrabold text-[#07152F]">
                              1/20
                            </span>
                          </div>
                        </div>

                        {/* Main Two-Column Screen Layout */}
                        <div className="grid grid-cols-12 gap-3.5 items-start">
                          {/* Mini Left Sidebar: Domain Steps */}
                          <div className="col-span-3 space-y-1.5 pt-0.5">
                            <div className="px-2 py-1.5 rounded-lg bg-[#2453FF] text-white text-[11px] font-bold flex items-center gap-1.5 shadow-xs">
                              <span className="w-3.5 h-3.5 rounded-full bg-white/20 text-white flex items-center justify-center text-[9px] font-black">1</span>
                              <span>Reasoning</span>
                            </div>
                            <div className="px-2 py-1.5 rounded-lg text-[#60718B] text-[11px] font-semibold flex items-center gap-1.5 hover:bg-[#EEF4FF] transition-colors">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#E2EAF7] text-[#60718B] flex items-center justify-center text-[9px]">2</span>
                              <span>Logic</span>
                            </div>
                            <div className="px-2 py-1.5 rounded-lg text-[#60718B] text-[11px] font-semibold flex items-center gap-1.5 hover:bg-[#EEF4FF] transition-colors">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#E2EAF7] text-[#60718B] flex items-center justify-center text-[9px]">3</span>
                              <span>Patterns</span>
                            </div>
                            <div className="px-2 py-1.5 rounded-lg text-[#60718B] text-[11px] font-semibold flex items-center gap-1.5 hover:bg-[#EEF4FF] transition-colors">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#E2EAF7] text-[#60718B] flex items-center justify-center text-[9px]">4</span>
                              <span>Spatial</span>
                            </div>
                            <div className="px-2 py-1.5 rounded-lg text-[#60718B] text-[11px] font-semibold flex items-center gap-1.5 hover:bg-[#EEF4FF] transition-colors">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#E2EAF7] text-[#60718B] flex items-center justify-center text-[9px]">5</span>
                              <span>Results</span>
                            </div>
                          </div>

                          {/* Main Test Question Card */}
                          <div className="col-span-9 bg-white rounded-xl border border-[#E2EAF7] p-3.5 xl:p-4 shadow-xs">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] font-bold tracking-wide uppercase text-[#60718B] bg-[#F2F7FF] px-2 py-0.5 rounded">
                                Question 1 of 20
                              </span>
                              {selectedOption && (
                                <button
                                  type="button"
                                  onClick={handleReset}
                                  className="text-[10px] font-bold text-[#2453FF] hover:underline flex items-center gap-1"
                                >
                                  <RotateCcw className="w-2.5 h-2.5" />
                                  <span>Reset</span>
                                </button>
                              )}
                            </div>

                            <h3 className="text-xs xl:text-sm font-bold text-[#07152F] mb-2.5">
                              Which shape completes the pattern?
                            </h3>

                            {/* Pattern Sequence Box */}
                            <div className="p-2 bg-[#F8FBFF] rounded-lg border border-[#E2EAF7] mb-3 flex items-center justify-between gap-1.5">
                              {/* 1. Square */}
                              <div className="w-8 h-8 xl:w-9 xl:h-9 bg-white rounded-md border border-slate-300 flex items-center justify-center shadow-2xs">
                                <div className="w-3.5 h-3.5 border-2 border-slate-800" />
                              </div>
                              {/* 2. Triangle */}
                              <div className="w-8 h-8 xl:w-9 xl:h-9 bg-white rounded-md border border-slate-300 flex items-center justify-center shadow-2xs">
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                                  <polygon points="12,4 22,20 2,20" fill="none" stroke="#07152F" strokeWidth="2.2" />
                                </svg>
                              </div>
                              {/* 3. Circle */}
                              <div className="w-8 h-8 xl:w-9 xl:h-9 bg-white rounded-md border border-slate-300 flex items-center justify-center shadow-2xs">
                                <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-800" />
                              </div>
                              {/* 4. Square */}
                              <div className="w-8 h-8 xl:w-9 xl:h-9 bg-white rounded-md border border-slate-300 flex items-center justify-center shadow-2xs">
                                <div className="w-3.5 h-3.5 border-2 border-slate-800" />
                              </div>
                              {/* 5. Triangle */}
                              <div className="w-8 h-8 xl:w-9 xl:h-9 bg-white rounded-md border border-slate-300 flex items-center justify-center shadow-2xs">
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                                  <polygon points="12,4 22,20 2,20" fill="none" stroke="#07152F" strokeWidth="2.2" />
                                </svg>
                              </div>
                              {/* 6. Target ? */}
                              <div className="w-8 h-8 xl:w-9 xl:h-9 bg-[#EEF4FF] border-2 border-dashed border-[#2453FF] rounded-md flex items-center justify-center shadow-2xs">
                                <span className="text-sm font-black text-[#2453FF]">?</span>
                              </div>
                            </div>

                            {/* 4 Options Grid (2x2) */}
                            <div className="grid grid-cols-2 gap-1.5 xl:gap-2">
                              {sampleOptions.map((opt) => {
                                const isSelected = selectedOption === opt.id;
                                let style = 'bg-white border-[#E2EAF7] text-[#07152F] hover:border-[#2453FF]/60 hover:shadow-xs';

                                if (isSelected) {
                                  if (opt.isCorrect) {
                                    style = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20';
                                  } else {
                                    style = 'bg-red-50 border-red-400 text-red-900 ring-2 ring-red-400/20';
                                  }
                                }

                                return (
                                  <button
                                    key={opt.id}
                                    type="button"
                                    onClick={() => handleSelectOption(opt.id)}
                                    className={`p-2 xl:p-2.5 rounded-lg border flex items-center gap-2 text-xs font-bold transition-all cursor-pointer ${style}`}
                                  >
                                    <div className="w-4 h-4 flex items-center justify-center">
                                      {opt.shape === 'circle' && (
                                        <div className="w-3.5 h-3.5 rounded-full border-2 border-current" />
                                      )}
                                      {opt.shape === 'square' && (
                                        <div className="w-3 h-3 border-2 border-current" />
                                      )}
                                      {opt.shape === 'triangle' && (
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                                          <polygon points="12,4 22,20 2,20" fill="none" stroke="currentColor" strokeWidth="2.2" />
                                        </svg>
                                      )}
                                      {opt.shape === 'diamond' && (
                                        <div className="w-3 h-3 border-2 border-current rotate-45" />
                                      )}
                                    </div>
                                    <span className="text-[11px] xl:text-xs">{opt.label}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Laptop Lower Base & Keyboard Deck */}
                    <div className="relative mx-auto w-[100%] h-11 bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#0B1323] rounded-b-xl shadow-[0_20px_35px_rgba(7,21,47,0.3)] border-t border-slate-700/60 px-8 flex flex-col justify-center">
                      {/* Hinge Reflection Line */}
                      <div className="absolute top-0 inset-x-12 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-40" />
                      {/* Front Opening Notch */}
                      <div className="mx-auto w-14 h-1 bg-slate-500/70 rounded-full mb-1" />
                      {/* Trackpad */}
                      <div className="mx-auto w-24 h-4 rounded-sm border border-slate-700/60 bg-slate-800/40" />
                    </div>
                  </div>
                </div>

                {/* Solid 3D Architectural Podium Block */}
                <div className="relative -mt-4 mx-auto w-[98%] z-10">
                  {/* Top Surface of Podium Plinth */}
                  <div
                    className="w-full h-12 bg-gradient-to-r from-[#FFFFFF] via-[#F8FBFF] to-[#EAF2FF] rounded-t-2xl border-t border-x border-[#E2EAF7] shadow-[0_10px_25px_rgba(36,83,255,0.06)]"
                  />
                  {/* Front/Side Depth Facets */}
                  <div className="w-full h-12 bg-gradient-to-b from-[#E2EDFA] to-[#CFE2F9] rounded-b-2xl border-b border-x border-[#BDD6F5] flex items-center justify-between px-6">
                    <div className="h-0.5 w-16 bg-white/40 rounded-full" />
                    <div className="h-0.5 w-24 bg-[#2453FF]/15 rounded-full" />
                  </div>
                  {/* Soft Blue Volumetric Shadow */}
                  <div className="absolute -bottom-6 inset-x-10 h-10 bg-[#2453FF]/20 blur-[28px] rounded-full -z-10" />
                </div>
              </div>
            </div>


            {/* ------------------------------------------------------------- */}
            {/* MOBILE VIEW: FLOATING PREVIEW CARD (< lg)                      */}
            {/* ------------------------------------------------------------- */}
            <div className="block lg:hidden w-full max-w-md mx-auto relative pt-4">
              {/* Elevated Floating Sample Card */}
              <div className="relative bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_16px_40px_-8px_rgba(7,21,47,0.08),0_2px_10px_rgba(36,83,255,0.04)] p-6 sm:p-7 z-20">
                {/* Header Badge & Question Number */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E2EAF7]">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#E0E7FF] text-xs font-bold text-[#2453FF]">
                    <span>‹ Sample Question ›</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-[#2453FF] bg-[#EAF2FF] px-3 py-1 rounded-full">
                      1/20
                    </span>
                    {selectedOption && (
                      <button
                        type="button"
                        onClick={handleReset}
                        className="p-1 text-slate-400 hover:text-slate-600"
                        title="Reset"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Prompt Question */}
                <h3 className="text-base font-bold text-[#07152F] mb-4 text-left">
                  Which shape completes the pattern?
                </h3>

                {/* Pattern Stimulus Row (6 shapes) */}
                <div className="p-3 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] mb-5 flex items-center justify-between gap-1.5">
                  {/* 1. Square */}
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                    <div className="w-4 h-4 border-2 border-slate-800" />
                  </div>
                  {/* 2. Triangle */}
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <polygon points="12,4 22,20 2,20" fill="none" stroke="#07152F" strokeWidth="2.2" />
                    </svg>
                  </div>
                  {/* 3. Circle */}
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-800" />
                  </div>
                  {/* 4. Square */}
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                    <div className="w-4 h-4 border-2 border-slate-800" />
                  </div>
                  {/* 5. Triangle */}
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <polygon points="12,4 22,20 2,20" fill="none" stroke="#07152F" strokeWidth="2.2" />
                    </svg>
                  </div>
                  {/* 6. Target ? */}
                  <div className="w-10 h-10 bg-[#EEF4FF] border-2 border-dashed border-[#2453FF] rounded-xl flex items-center justify-center shrink-0 shadow-2xs">
                    <span className="text-base font-black text-[#2453FF]">?</span>
                  </div>
                </div>

                {/* 4 Interactive Answer Options (2x2 Grid) */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {sampleOptions.map((opt) => {
                    const isSelected = selectedOption === opt.id;
                    let btnStyle = 'bg-white border-[#E2EAF7] hover:border-[#2453FF]/60 text-[#07152F]';

                    if (isSelected) {
                      if (opt.isCorrect) {
                        btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20';
                      } else {
                        btnStyle = 'bg-red-50 border-red-400 text-red-900 ring-2 ring-red-400/20';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(opt.id)}
                        className={`p-3.5 rounded-2xl border flex items-center justify-center gap-3 font-bold text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          {opt.shape === 'circle' && (
                            <div className="w-4 h-4 rounded-full border-2 border-current" />
                          )}
                          {opt.shape === 'square' && (
                            <div className="w-4 h-4 border-2 border-current" />
                          )}
                          {opt.shape === 'triangle' && (
                            <svg viewBox="0 0 24 24" className="w-4 h-4">
                              <polygon points="12,4 22,20 2,20" fill="none" stroke="currentColor" strokeWidth="2.2" />
                            </svg>
                          )}
                          {opt.shape === 'diamond' && (
                            <div className="w-4 h-4 border-2 border-current rotate-45" />
                          )}
                        </div>
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Disclosure Note Inside Card */}
                <div className="flex items-center gap-2.5 pt-3.5 border-t border-[#E2EAF7] text-left text-xs text-[#60718B]">
                  <TrendingUp className="w-4 h-4 text-[#2453FF] shrink-0" />
                  <p className="leading-snug">
                    A free practice assessment to measure your reasoning skills. Not a standardized IQ test.
                  </p>
                </div>
              </div>

              {/* Ambient Shadow Under Floating Mobile Card */}
              <div className="absolute -bottom-4 inset-x-12 h-10 bg-[#2453FF]/12 blur-xl rounded-full z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
