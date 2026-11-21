'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  RotateCcw,
  Sparkles,
  GitBranch,
  BookOpen,
  Layers,
  GraduationCap,
} from 'lucide-react';

/* ========================================================================= */
/* DECORATIVE LIGHTWEIGHT 3D SVG ASSETS                                      */
/* ========================================================================= */

const TranslucentGlassSphere: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 120"
    className={`pointer-events-none select-none ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="logicalSphereGrad" cx="35%" cy="30%" r="70%" fx="30%" fy="25%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="25%" stopColor="#D8E7FF" stopOpacity="0.8" />
        <stop offset="55%" stopColor="#75A2FF" stopOpacity="0.55" />
        <stop offset="85%" stopColor="#2453FF" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#1B40DF" stopOpacity="0.18" />
      </radialGradient>
      <radialGradient id="logicalSphereSpecular" cx="32%" cy="28%" r="35%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="60" cy="98" rx="34" ry="10" fill="#2453FF" fillOpacity="0.14" filter="blur(6px)" />
    <circle cx="60" cy="56" r="45" fill="url(#logicalSphereGrad)" />
    <circle cx="60" cy="56" r="44.5" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1" />
    <circle cx="60" cy="56" r="45" fill="url(#logicalSphereSpecular)" />
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
      <linearGradient id="logicalCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#DBE8FF" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="logicalCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#96BCFF" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#4779FF" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="logicalCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4779FF" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#2453FF" stopOpacity="0.38" />
      </linearGradient>
    </defs>
    <polygon points="55,18 96,40 96,80 55,102 14,80 14,40" fill="#2453FF" fillOpacity="0.1" filter="blur(8px)" />
    <polygon points="14,40 55,62 55,102 14,80" fill="url(#logicalCubeLeft)" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
    <polygon points="55,62 96,40 96,80 55,102" fill="url(#logicalCubeRight)" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
    <polygon points="55,18 96,40 55,62 14,40" fill="url(#logicalCubeTop)" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.9" />
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

interface LogicalHeroSectionProps {
  onStartTest: (mode: 'untimed' | 'timed_15') => void;
  onStartLearn: () => void;
  hasResumeSession?: boolean;
  savedQuestionIndex?: number;
  savedAnsweredCount?: number;
  onResume?: () => void;
  onDiscardSession?: () => void;
}

export const LogicalHeroSection: React.FC<LogicalHeroSectionProps> = ({
  onStartTest,
  onStartLearn,
  hasResumeSession = false,
  savedQuestionIndex = 0,
  savedAnsweredCount = 0,
  onResume,
  onDiscardSession,
}) => {
  const [selectedMode, setSelectedMode] = useState<'untimed' | 'timed_15'>('untimed');
  const [sampleAnswer, setSampleAnswer] = useState<string | null>(null);

  const sampleOptions = [
    { id: 'A', text: 'Every person who holds clearance is an editor.' },
    { id: 'B', text: 'All editors in the project have completed orientation.', isCorrect: true },
    { id: 'C', text: 'Everyone who completed orientation is an editor.' },
    { id: 'D', text: 'No editors have completed orientation.' },
  ];

  const scrollToArticle = () => {
    const el = document.getElementById('what-is-logical-reasoning');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 no-print overflow-visible">
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

      {/* Floating 3D Objects */}
      <div className="absolute top-8 left-[48%] lg:left-[51%] w-24 h-24 lg:w-32 lg:h-32 pointer-events-none z-10 animate-float-sphere">
        <TranslucentGlassSphere className="w-full h-full" />
      </div>
      <div className="absolute -top-4 right-[2%] lg:right-[3%] w-20 h-20 lg:w-28 lg:h-28 pointer-events-none z-10 animate-float-cube">
        <TranslucentGlassCube className="w-full h-full" />
      </div>

      <div className="w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* LEFT COLUMN: Main Presentation & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
            {/* Eyebrow Pill Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-4 sm:mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2453FF]" />
              <span>FREE ONLINE REASONING ASSESSMENT</span>
            </div>

            {/* Existing H1: Logical Reasoning Test */}
            <h1 className="animate-fade-up-delay-1 font-heading text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-black tracking-tight text-[#07152F] leading-[1.08] mb-4 sm:mb-5">
              Logical{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2453FF] via-[#3768FF] to-[#4779FF]">
                Reasoning Test
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="animate-fade-up-delay-1 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mb-6 font-medium">
              Challenge your reasoning with 20 original questions covering deduction, conditional logic, ordering, and number patterns. Get free results and clear explanations.
            </p>

            {/* Feature Indicators (4 Compact Pills) */}
            <div className="animate-fade-up-delay-2 flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7 w-full sm:w-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-xs font-bold text-[#07152F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[2.2]" />
                <span>20 Questions</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-xs font-bold text-[#07152F]">
                <Layers className="w-3.5 h-3.5 text-purple-500 shrink-0 stroke-[2.2]" />
                <span>4 Reasoning Types</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-xs font-bold text-[#07152F]">
                <Clock className="w-3.5 h-3.5 text-[#4779FF] shrink-0 stroke-[2.2]" />
                <span>Optional Timer</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-xs font-bold text-[#07152F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2453FF] shrink-0 stroke-[2.2]" />
                <span>Free Results</span>
              </div>
            </div>

            {/* Saved Session Alert if present */}
            {hasResumeSession && (
              <div className="w-full max-w-xl p-4 mb-6 rounded-2xl bg-amber-50/95 border border-amber-200 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div className="text-xs">
                  <div className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>In-Progress Test Detected</span>
                  </div>
                  <div className="text-amber-800 text-[11px] mt-0.5">
                    Question {savedQuestionIndex + 1} of 20 ({savedAnsweredCount} answered)
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={onResume}
                    className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs cursor-pointer"
                  >
                    Resume
                  </button>
                  <button
                    type="button"
                    onClick={onDiscardSession}
                    className="px-2.5 py-1.5 rounded-lg text-amber-800 hover:bg-amber-100 text-xs font-semibold cursor-pointer"
                  >
                    Discard
                  </button>
                </div>
              </div>
            )}

            {/* TWO POLISHED MODE CARDS (Section 9) */}
            <div className="animate-fade-up-delay-2 w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* PRIMARY: Test Mode Card */}
              <div className="p-5 rounded-2xl bg-white border-2 border-[#2453FF] shadow-[0_8px_24px_rgba(36,83,255,0.09)] flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-3 py-0.5 rounded-bl-xl bg-[#2453FF] text-[10px] font-black uppercase tracking-wider text-white">
                  Primary
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2453FF] flex items-center justify-center font-bold text-xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="font-heading font-black text-base text-[#07152F]">
                      Test Mode
                    </p>
                  </div>
                  <p className="text-xs text-[#60718B] leading-relaxed mb-4">
                    Take a complete logical reasoning assessment and review your answers after submitting.
                  </p>

                  {/* Mode Selector Pill */}
                  <div className="p-1 bg-slate-100 rounded-xl border border-slate-200/80 flex items-center gap-1 mb-4">
                    <button
                      type="button"
                      onClick={() => setSelectedMode('untimed')}
                      className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                        selectedMode === 'untimed'
                          ? 'bg-white text-[#2453FF] shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Untimed
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedMode('timed_15')}
                      className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        selectedMode === 'timed_15'
                          ? 'bg-white text-[#2453FF] shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      <span>15-Min</span>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onStartTest(selectedMode)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] text-white font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <span>Start Test</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* SECONDARY: Learn Mode Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E2EAF7] hover:border-emerald-300 shadow-[0_4px_16px_rgba(7,21,47,0.03)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.08)] flex flex-col justify-between transition-all group">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <p className="font-heading font-black text-base text-[#07152F]">
                      Learn Mode
                    </p>
                  </div>
                  <p className="text-xs text-[#60718B] leading-relaxed mb-4">
                    Solve questions at your own pace and learn from detailed explanations after each answer.
                  </p>
                  <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] text-slate-600 font-medium mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Instant step-by-step explanations</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onStartLearn}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <span>Start Learning</span>
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Live Puzzle Showcase */}
          <div className="lg:col-span-6 relative flex justify-center w-full">
            <div className="w-full max-w-lg bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-7 shadow-[0_12px_36px_rgba(7,21,47,0.06)] relative overflow-hidden">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs border border-purple-200/60">
                    <GitBranch className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#07152F] block">Sample Deduction Task</span>
                    <span className="text-[10px] text-[#64748B] font-medium">Interactive Demo • Question 1 of 20</span>
                  </div>
                </div>
                {sampleAnswer && (
                  <button
                    type="button"
                    onClick={() => setSampleAnswer(null)}
                    className="text-[11px] font-bold text-[#2453FF] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Sample Problem Content */}
              <div className="space-y-3 mb-5">
                <div className="p-3.5 rounded-xl bg-[#F8FBFF] border border-blue-100/70 text-xs text-[#07152F] leading-relaxed">
                  <strong className="block text-[11px] uppercase tracking-wide text-[#2453FF] mb-1">Statements:</strong>
                  • All editors in a project are team members.<br />
                  • Every team member has completed orientation.
                </div>
                <div className="text-xs font-bold text-[#07152F]">
                  Which conclusion must logically follow?
                </div>
              </div>

              {/* Sample Options */}
              <div className="space-y-2 mb-4">
                {sampleOptions.map((opt) => {
                  const isSelected = sampleAnswer === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSampleAnswer(opt.id)}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? opt.isCorrect
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                            : 'bg-red-50 border-red-300 text-red-950'
                          : 'bg-white border-[#E2EAF7] hover:border-slate-300 text-[#475569]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${
                            isSelected
                              ? opt.isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-red-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {opt.id}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                      {isSelected && opt.isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Sample Explanation Feedback */}
              {sampleAnswer && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#475569] leading-relaxed">
                  {sampleAnswer === 'B' ? (
                    <div className="text-emerald-800">
                      <strong>Correct:</strong> By transitive deduction, all editors are team members, and all team members completed orientation, guaranteeing that all editors completed orientation.
                    </div>
                  ) : (
                    <div className="text-red-800">
                      <strong>Incorrect:</strong> Remember that "all editors are team members" does not establish that all team members are editors. Reversing the relationship is an invalid deduction.
                    </div>
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

