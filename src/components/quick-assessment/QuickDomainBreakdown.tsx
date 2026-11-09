'use client';

import React from 'react';
import { Binary, GitBranch, Shapes, Box, Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface QuickDomainBreakdownProps {
  onStart: () => void;
}

export const QuickDomainBreakdown: React.FC<QuickDomainBreakdownProps> = ({ onStart }) => {
  return (
    <section id="quick-domains" className="w-full py-10 sm:py-16 border-t border-[#E2EAF7]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3 shadow-2xs">
          <Zap className="w-3.5 h-3.5 fill-[#2453FF]" />
          <span>Core Evaluation Domains</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight mb-3">
          4 Cognitive Domains Tested
        </h2>
        <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
          The 10 questions are scientifically sampled across key reasoning disciplines to give you a reliable, calibrated snapshot of your problem-solving profile.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {/* Domain 1: Abstract Patterns */}
        <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-[0_4px_16px_rgba(7,21,47,0.03)] hover:border-[#2453FF]/40 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center mb-4">
              <Shapes className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#07152F] mb-1.5">
              Abstract Reasoning
            </h3>
            <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed mb-4">
              Matrix transformations, rotation progressions, and multi-feature geometric rules.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#07152F]">
            <span className="text-[#60718B]">3 Questions</span>
            <span className="text-amber-600 font-bold">Matrices & Sequences</span>
          </div>
        </div>

        {/* Domain 2: Logical Deduction */}
        <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-[0_4px_16px_rgba(7,21,47,0.03)] hover:border-[#2453FF]/40 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/60 flex items-center justify-center mb-4">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#07152F] mb-1.5">
              Logical Deduction
            </h3>
            <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed mb-4">
              Evaluating conditional statements, truth-value consistency, and multi-variable syllogisms.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#07152F]">
            <span className="text-[#60718B]">3 Questions</span>
            <span className="text-purple-600 font-bold">Rule Inference</span>
          </div>
        </div>

        {/* Domain 3: Numerical Reasoning */}
        <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-[0_4px_16px_rgba(7,21,47,0.03)] hover:border-[#2453FF]/40 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 flex items-center justify-center mb-4">
              <Binary className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#07152F] mb-1.5">
              Numerical Sequences
            </h3>
            <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed mb-4">
              Discovering alternating arithmetic intervals, geometric ratios, and nested progression rules.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#07152F]">
            <span className="text-[#60718B]">2 Questions</span>
            <span className="text-blue-600 font-bold">Sequence Patterns</span>
          </div>
        </div>

        {/* Domain 4: Spatial Relations */}
        <div className="bg-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 shadow-[0_4px_16px_rgba(7,21,47,0.03)] hover:border-[#2453FF]/40 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center mb-4">
              <Box className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#07152F] mb-1.5">
              Spatial Visualization
            </h3>
            <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed mb-4">
              Mental 2D/3D rotations, perspective shifts, and folded 3D cube net reconstructions.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#07152F]">
            <span className="text-[#60718B]">2 Questions</span>
            <span className="text-emerald-600 font-bold">Mental Rotation</span>
          </div>
        </div>
      </div>

      {/* How it Works: 3 Steps Banner */}
      <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-blue-50/90 rounded-3xl border border-[#2453FF]/20 p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#2453FF] text-white flex items-center justify-center font-black text-sm shrink-0">
              1
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#07152F] mb-1">
                Solve 10 Original Puzzles
              </h4>
              <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                Take your time with untimed questions or challenge yourself with our live timer.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#2453FF] text-white flex items-center justify-center font-black text-sm shrink-0">
              2
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#07152F] mb-1">
                Instant Score Calibration
              </h4>
              <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                Receive an immediate estimated IQ score, percentile band, and speed calibration.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#2453FF] text-white flex items-center justify-center font-black text-sm shrink-0">
              3
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#07152F] mb-1">
                Step-by-Step Solutions
              </h4>
              <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                Inspect every question to understand the underlying logic and sharpen your skills.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#2453FF]/15">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#07152F]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Ready in under 5 minutes • Zero email or registration needed</span>
          </div>

          <button
            type="button"
            onClick={onStart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-extrabold text-white bg-[#2453FF] hover:bg-[#1B40DF] active:scale-95 transition-all shadow-md cursor-pointer"
          >
            <span>Begin Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
