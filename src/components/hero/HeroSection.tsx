'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Check,
  X,
  RotateCcw,
} from 'lucide-react';

interface HeroSectionProps {
  onStartClick?: () => void;
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartClick,
  onExploreClick,
}) => {
  // Interactive Hero Sample Question State
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const sampleOptions = [
    { id: 'circle', label: 'Circle', shape: 'circle' },
    { id: 'square', label: 'Square', shape: 'square' },
    { id: 'triangle', label: 'Triangle', shape: 'triangle', isCorrect: true },
    { id: 'diamond', label: 'Diamond', shape: 'diamond' },
  ];

  const handleSelectOption = (id: string) => {
    setSelectedOption(id);
    setIsAnswerChecked(true);
  };

  const handleResetSample = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  const isCorrect = selectedOption === 'triangle';

  const scrollToAssessment = () => {
    if (onStartClick) {
      onStartClick();
    } else {
      const el =
        document.getElementById('assessment-workspace') ||
        document.getElementById('assessment-onboarding');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
    <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-16 no-print">
      {/* Background Soft Glow & Ambient Lighting */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[540px] h-[340px] bg-[#4F46E5]/8 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 translate-x-1/3 w-[460px] h-[300px] bg-[#38BDF8]/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ======================================================== */}
          {/* LEFT COLUMN: HERO HEADLINE & CTAS                         */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Animated Eyebrow Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
              <span>FREE ONLINE REASONING ASSESSMENT</span>
            </div>

            {/* H1 Headline */}
            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.08] mb-5">
              Free Online <br />
              <span className="text-[#4F46E5] bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#3B82F6] to-[#4F46E5]">
                IQ Test
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-up-delay-1 text-base sm:text-lg text-[#5B6B82] leading-relaxed max-w-xl mb-7">
              Challenge your reasoning with 20 original questions covering numbers, logic, patterns, and spatial thinking. Get instant results and clear explanations—no signup needed.
            </p>

            {/* Three Benefit Indicators */}
            <div className="animate-fade-up-delay-2 flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E5EDF7] shadow-[0_4px_12px_rgba(15,23,42,0.03)] text-xs font-bold text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>20 Questions</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E5EDF7] shadow-[0_4px_12px_rgba(15,23,42,0.03)] text-xs font-bold text-[#0F172A]">
                <Clock className="w-4 h-4 text-[#4F46E5] shrink-0" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E5EDF7] shadow-[0_4px_12px_rgba(15,23,42,0.03)] text-xs font-bold text-[#0F172A]">
                <ShieldCheck className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>No Signup</span>
              </div>
            </div>

            {/* CTA Action Buttons with Subtle Glow & Pulse */}
            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-4">
              <Link
                href="/test"
                className="cta-glow inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-[#4F46E5] to-[#4338CA] hover:from-[#4338CA] hover:to-[#3730A3] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F46E5]"
              >
                <span>Start Free IQ Test</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold text-[#0F172A] bg-white border border-[#E5EDF7] hover:bg-[#F2F7FF] active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(15,23,42,0.03)] focus:outline-none"
              >
                <span>Explore How It Works</span>
              </button>
            </div>

            {/* Permanent Practice Disclosure Note */}
            <div className="flex items-center gap-2 text-xs text-[#5B6B82] max-w-lg mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
              <p>
                A free practice assessment to measure your reasoning skills. Not a standardized IQ test.
              </p>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: INTERACTIVE SAMPLE PUZZLE PREVIEW          */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
            {/* Subtle floating 3D decorative geometric prism */}
            <div className="absolute -top-6 -right-3 w-16 h-16 opacity-60 pointer-events-none animate-float-card">
              <svg viewBox="0 0 60 60" className="w-full h-full">
                <polygon
                  points="30,6 54,20 54,48 30,54 6,40 6,14"
                  fill="#EEF4FF"
                  stroke="#4F46E5"
                  strokeWidth="1.5"
                />
                <line x1="30" y1="6" x2="30" y2="54" stroke="#4F46E5" strokeWidth="1" strokeDasharray="2,2" />
              </svg>
            </div>

            {/* Main Interactive Card */}
            <div className="w-full max-w-md bg-white rounded-3xl border border-[#E5EDF7] shadow-[0_15px_35px_-5px_rgba(15,23,42,0.07),0_2px_8px_rgba(15,23,42,0.02)] p-6 sm:p-7 relative transition-all">
              {/* Top Header Badge & Reset */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E5EDF7]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F2F7FF] border border-[#E5EDF7] text-[11px] font-bold text-slate-700">
                  <span>‹ Sample Question ›</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#4F46E5] bg-[#EEF4FF] px-2.5 py-0.5 rounded-full">
                    1/20
                  </span>
                  {selectedOption && (
                    <button
                      type="button"
                      onClick={handleResetSample}
                      title="Reset sample"
                      className="p-1 rounded text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Question Prompt */}
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-4 text-left">
                Which shape completes the pattern?
              </h3>

              {/* Pattern Stimulus Row */}
              <div className="p-3.5 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7] mb-5 flex items-center justify-between gap-1.5 sm:gap-2">
                {/* 1. Square */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <div className="w-5 h-5 border-2 border-slate-800" />
                </div>
                {/* 2. Triangle */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <polygon points="12,4 22,20 2,20" fill="none" stroke="#0F172A" strokeWidth="2.2" />
                  </svg>
                </div>
                {/* 3. Circle */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-800" />
                </div>
                {/* 4. Square */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <div className="w-5 h-5 border-2 border-slate-800" />
                </div>
                {/* 5. Triangle */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <polygon points="12,4 22,20 2,20" fill="none" stroke="#0F172A" strokeWidth="2.2" />
                  </svg>
                </div>
                {/* 6. Target ? */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#EEF4FF] border-2 border-dashed border-[#4F46E5] rounded-xl flex items-center justify-center shrink-0 shadow-2xs">
                  <span className="text-lg font-black text-[#4F46E5]">?</span>
                </div>
              </div>

              {/* Four Interactive Answer Options */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {sampleOptions.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  let btnStyle = 'bg-white border-[#E5EDF7] hover:border-[#3B82F6]/50 text-slate-800 hover:shadow-xs';

                  if (isSelected) {
                    if (opt.isCorrect) {
                      btnStyle =
                        'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20 shadow-xs';
                    } else {
                      btnStyle = 'bg-red-50 border-red-400 text-red-900 ring-2 ring-red-400/20';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt.id)}
                      className={`p-3 rounded-2xl border flex items-center justify-center gap-3 transition-all ${btnStyle}`}
                    >
                      <div className="w-7 h-7 flex items-center justify-center">
                        {opt.shape === 'circle' && (
                          <div className="w-5 h-5 rounded-full border-2 border-current" />
                        )}
                        {opt.shape === 'square' && (
                          <div className="w-5 h-5 border-2 border-current" />
                        )}
                        {opt.shape === 'triangle' && (
                          <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <polygon points="12,4 22,20 2,20" fill="none" stroke="currentColor" strokeWidth="2.2" />
                          </svg>
                        )}
                        {opt.shape === 'diamond' && (
                          <div className="w-4 h-4 border-2 border-current rotate-45" />
                        )}
                      </div>
                      <span className="text-xs font-bold">{opt.label}</span>
                      {isSelected && opt.isCorrect && (
                        <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      )}
                      {isSelected && !opt.isCorrect && (
                        <X className="w-4 h-4 text-red-500 stroke-[3]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Reveal */}
              {isAnswerChecked && (
                <div
                  className={`p-4 rounded-2xl text-left border animate-in fade-in zoom-in-95 duration-200 ${
                    isCorrect
                      ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                      : 'bg-amber-50/90 border-amber-200 text-amber-950'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <div className="text-xs leading-relaxed flex-1">
                      {isCorrect ? (
                        <>
                          <strong className="font-bold text-emerald-900 block mb-0.5">
                            Correct!
                          </strong>
                          The shapes repeat in a sequence: square, triangle, circle. The next shape is the <strong>Triangle</strong>.
                          <div className="mt-2.5 pt-2 border-t border-emerald-200/60 flex items-center justify-between">
                            <span className="font-semibold text-emerald-800 text-[11px]">Ready for 20 real puzzles?</span>
                            <Link
                              href="/test"
                              className="px-3.5 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold rounded-xl text-xs shadow-xs inline-flex items-center"
                            >
                              Start Full Test →
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <strong className="font-bold text-amber-900 block mb-0.5">
                            Not quite!
                          </strong>
                          Notice the sequence is formed by repeating groups of three: (Square, Triangle, Circle). Try another option or start the full test!
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Floating Bottom Badge */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-[#5B6B82]">
                <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                  <TrendingUp className="w-4 h-4 text-[#4F46E5]" />
                  <span>Boost Your Problem-Solving Skills</span>
                </div>
                <span className="text-[11px] font-bold text-[#4F46E5] bg-[#EEF4FF] px-2 py-0.5 rounded-full">
                  4 Cognitive Domains
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
