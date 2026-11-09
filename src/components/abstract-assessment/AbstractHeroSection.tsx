'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  BookOpen,
  Layers,
  GraduationCap,
  Eye,
} from 'lucide-react';
import { FrameBox } from './AbstractSvgPrimitives';

interface AbstractHeroSectionProps {
  onStartTest: (mode: 'untimed' | 'timed_15') => void;
  onStartLearn: () => void;
  hasResumeSession?: boolean;
  savedQuestionIndex?: number;
  savedAnsweredCount?: number;
  onResume?: () => void;
  onDiscardSession?: () => void;
}

export const AbstractHeroSection: React.FC<AbstractHeroSectionProps> = ({
  onStartTest,
  onStartLearn,
  hasResumeSession = false,
  savedQuestionIndex = 0,
  savedAnsweredCount = 0,
  onResume,
  onDiscardSession,
}) => {
  const [selectedMode, setSelectedMode] = useState<'untimed' | 'timed_15'>('untimed');

  // Interactive Live Matrix Preview for Hero
  const [demoSelected, setDemoSelected] = useState<string | null>(null);

  const demoOptions = [
    { id: 'A', isCorrect: true, label: 'Solid blue square' },
    { id: 'B', isCorrect: false, label: 'Hollow square' },
    { id: 'C', isCorrect: false, label: 'Solid blue circle' },
  ];

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 no-print overflow-visible">
      {/* Background Atmosphere */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[620px] h-[400px] bg-[#2453FF]/6 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[8%] w-[540px] h-[360px] bg-[#4779FF]/8 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* LEFT COLUMN: Main Presentation & Mode Cards */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FF] border border-[#2453FF]/20 text-[#2453FF] text-xs font-black tracking-wide uppercase mb-4 shadow-2xs">
              <Eye className="w-3.5 h-3.5" />
              <span>Free Online Visual Assessment</span>
            </div>

            {/* H1: Abstract Reasoning Test */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-black tracking-tight text-[#07152F] leading-[1.08] mb-4 sm:mb-5">
              Abstract{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2453FF] via-[#3768FF] to-[#4779FF]">
                Reasoning Test
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mb-6 font-medium">
              Challenge your pattern recognition with 20 visual reasoning questions. Solve figure sequences, shape matrices, odd-one-out puzzles and visual analogies. Get free results and clear explanations.
            </p>

            {/* Four Compact Indicators */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7 w-full sm:w-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-xs font-bold text-[#07152F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 stroke-[2.2]" />
                <span>20 Visual Questions</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2EAF7] shadow-[0_2px_6px_rgba(7,21,47,0.03)] text-xs font-bold text-[#07152F]">
                <Layers className="w-3.5 h-3.5 text-purple-500 shrink-0 stroke-[2.2]" />
                <span>4 Puzzle Types</span>
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
                    <span>In-Progress Visual Test Detected</span>
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

            {/* TWO POLISHED MODE CARDS */}
            <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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
                    <span className="font-heading font-black text-base text-[#07152F] block">
                      Test Mode
                    </span>
                  </div>
                  <p className="text-xs text-[#60718B] leading-relaxed mb-4">
                    Complete 20 visual questions under formal assessment conditions with optional timer.
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
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] text-white font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] relative z-30 pointer-events-auto"
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
                    <span className="font-heading font-black text-base text-[#07152F] block">
                      Learn Mode
                    </span>
                  </div>
                  <p className="text-xs text-[#60718B] leading-relaxed mb-4">
                    Practise with illustrated step-by-step solutions and the Five-Feature Scan guide.
                  </p>
                  <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] text-slate-600 font-medium mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Instant visual explanations</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onStartLearn}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] relative z-30 pointer-events-auto"
                >
                  <span>Start Learning</span>
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Visual Matrix Preview */}
          <div className="lg:col-span-6 relative flex justify-center w-full">
            <div className="w-full max-w-md bg-white rounded-3xl border border-[#E2EAF7] p-5 sm:p-6 shadow-[0_12px_36px_rgba(7,21,47,0.06)] relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-heading font-black text-xs text-[#07152F]">
                    Sample 2×2 Matrix Task
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#2453FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                  Interactive Demo
                </span>
              </div>

              {/* 2x2 Matrix Stimulus */}
              <div className="grid grid-cols-2 gap-2.5 p-3 bg-slate-50/80 rounded-2xl border border-slate-200/80 mb-4 max-w-xs mx-auto">
                <FrameBox
                  frame={{
                    elements: [{ type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' }],
                  }}
                />
                <FrameBox
                  frame={{
                    elements: [{ type: 'rect', x: 22, y: 22, width: 56, height: 56, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' }],
                  }}
                />
                <FrameBox
                  frame={{
                    elements: [{ type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#2453FF', strokeWidth: 3, fill: '#2453FF' }],
                  }}
                />
                <FrameBox frame={{ isTarget: true, elements: [] }} />
              </div>

              <div className="text-center text-xs font-bold text-[#07152F] mb-3">
                Which figure belongs in the missing target cell?
              </div>

              {/* 3 Interactive Quick Options */}
              <div className="grid grid-cols-3 gap-2 mb-3">
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
                      className={`p-2 rounded-xl border text-[11px] font-bold text-center transition-all cursor-pointer ${btnStyle}`}
                    >
                      <div className="w-8 h-8 mx-auto mb-1">
                        {opt.id === 'A' && (
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <rect x="20" y="20" width="60" height="60" fill="#2453FF" />
                          </svg>
                        )}
                        {opt.id === 'B' && (
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#07152F" strokeWidth="4" />
                          </svg>
                        )}
                        {opt.id === 'C' && (
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="30" fill="#2453FF" />
                          </svg>
                        )}
                      </div>
                      <span>Option {opt.id}</span>
                    </button>
                  );
                })}
              </div>

              {demoSelected && (
                <div className={`p-2.5 rounded-xl text-[11px] font-medium leading-relaxed animate-in fade-in ${
                  demoSelected === 'A' ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'
                }`}>
                  {demoSelected === 'A'
                    ? '✓ Correct! Row rule: Circle → Square. Column rule: Hollow → Solid Blue. Result is Solid Blue Square.'
                    : '✕ Not quite. Check both the horizontal shape rule (Circle → Square) and vertical fill rule (Hollow → Solid).'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

