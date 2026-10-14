'use client';

import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck,
  Binary,
  Shapes,
  GitBranch,
  Box,
  RotateCcw,
  CheckCircle2,
  Zap,
} from 'lucide-react';

interface QuickOnboardingCardProps {
  onStart: () => void;
  hasResumeSession: boolean;
  savedQuestionIndex?: number;
  savedAnsweredCount?: number;
  onResume: () => void;
  onDiscardSession: () => void;
}

export const QuickOnboardingCard: React.FC<QuickOnboardingCardProps> = ({
  onStart,
  hasResumeSession,
  savedQuestionIndex = 0,
  savedAnsweredCount = 0,
  onResume,
  onDiscardSession,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-5 animate-in fade-in duration-200">
      {/* Resume In-Progress Prompt */}
      {hasResumeSession && (
        <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-50/90 to-indigo-50/60 rounded-2xl border border-[#2453FF]/25 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#2453FF] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unfinished Test Found</span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#07152F]">
              Resume your Quick IQ Test?
            </h4>
            <p className="text-xs text-[#60718B]">
              You reached Question {savedQuestionIndex + 1} of 10 with {savedAnsweredCount} questions answered.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onDiscardSession}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-600 transition-colors cursor-pointer"
            >
              Start Over
            </button>
            <button
              type="button"
              onClick={onResume}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#2453FF] hover:bg-[#1B40DF] text-xs font-bold text-white shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Start Card */}
      <div className="bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_10px_35px_rgba(7,21,47,0.05)] p-5 sm:p-8 text-center relative overflow-hidden">
        {/* Subtle Ambient Accent Glow */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 bg-[#2453FF]/6 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3 shadow-2xs">
          <Zap className="w-3.5 h-3.5 fill-[#2453FF]" />
          <span>5-Minute Reasoning Challenge</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152F] tracking-tight mb-2">
          Start Your Quick IQ Test
        </h2>

        <p className="text-xs sm:text-sm text-[#60718B] max-w-lg mx-auto leading-relaxed mb-6">
          Test your problem-solving speed with 10 original reasoning puzzles. Complete at your own pace with untimed questions and get immediate answers with step-by-step solutions.
        </p>

        {/* 4 Reasoning Domains Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 text-left">
          <div className="p-3 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7]">
            <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#2453FF] flex items-center justify-center mb-1.5">
              <Binary className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs text-[#07152F]">Numerical</div>
            <div className="text-[11px] text-[#60718B]">3 Problems</div>
          </div>

          <div className="p-3 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7]">
            <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-1.5">
              <Shapes className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs text-[#07152F]">Abstract</div>
            <div className="text-[11px] text-[#60718B]">3 Visual Puzzles</div>
          </div>

          <div className="p-3 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7]">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-1.5">
              <GitBranch className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs text-[#07152F]">Logical</div>
            <div className="text-[11px] text-[#60718B]">2 Deductions</div>
          </div>

          <div className="p-3 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7]">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1.5">
              <Box className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs text-[#07152F]">Spatial</div>
            <div className="text-[11px] text-[#60718B]">2 3D / Rotation</div>
          </div>
        </div>

        {/* Primary Start CTA Button */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={onStart}
            className="w-full sm:w-auto min-w-[240px] px-8 py-3.5 rounded-full bg-[#2453FF] hover:bg-[#1B40DF] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg hover:shadow-[#2453FF]/25 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Quick Test</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Benefit Indicators Checklist */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#60718B] pt-2">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2453FF]" />
              <span>~5 Minutes</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Untimed &amp; Self-Paced</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2453FF]" />
              <span>No Signup or Email</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visible Transparency Notice */}
      <p className="text-center text-xs text-[#60718B] max-w-md mx-auto">
        This is a reasoning practice test, not a standardized IQ assessment. Results provide raw accuracy and step-by-step explanations.
      </p>
    </div>
  );
};
