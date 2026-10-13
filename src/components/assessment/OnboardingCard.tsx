'use client';

import React from 'react';
import { AssessmentMode } from '@/types/assessment';
import {
  Binary,
  GitBranch,
  Shapes,
  Box,
  Clock,
  Zap,
  Sparkles,
  Check,
  AlertCircle,
  Play,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

interface OnboardingCardProps {
  mode: AssessmentMode;
  onModeChange: (mode: AssessmentMode) => void;
  onStart: () => void;
  hasResumeSession?: boolean;
  onResume?: () => void;
  onDiscardSession?: () => void;
}

export const OnboardingCard: React.FC<OnboardingCardProps> = ({
  mode,
  onModeChange,
  onStart,
  hasResumeSession = false,
  onResume,
  onDiscardSession,
}) => {
  const categories = [
    {
      name: 'Numerical Reasoning',
      count: '5 Questions',
      desc: 'Identify number patterns, arithmetic relations & sequences',
      icon: Binary,
      color: 'text-[#3B82F6] bg-[#EFF6FF] border-blue-200/80',
      badgeBg: 'bg-blue-100/70 text-blue-800',
    },
    {
      name: 'Logical Reasoning',
      count: '5 Questions',
      desc: 'Use formal logic to find rules, conditions & constraints',
      icon: GitBranch,
      color: 'text-[#8B5CF6] bg-[#F5F3FF] border-purple-200/80',
      badgeBg: 'bg-purple-100/70 text-purple-800',
    },
    {
      name: 'Abstract Reasoning',
      count: '5 Questions',
      desc: 'Detect visual pattern sequences, inversions & XOR transformations',
      icon: Shapes,
      color: 'text-[#F59E0B] bg-[#FFFBEB] border-amber-200/80',
      badgeBg: 'bg-amber-100/70 text-amber-800',
    },
    {
      name: 'Spatial Reasoning',
      count: '5 Questions',
      desc: 'Visualize and manipulate 2D rotations, mirrors & 3D folded shapes',
      icon: Box,
      color: 'text-[#10B981] bg-[#ECFDF5] border-emerald-200/80',
      badgeBg: 'bg-emerald-100/70 text-emerald-800',
    },
  ];

  return (
    <div
      id="assessment-onboarding"
      className="w-full max-w-5xl mx-auto my-6 p-6 sm:p-10 bg-white rounded-3xl border border-[#E5EDF7] shadow-[0_15px_35px_-5px_rgba(15,23,42,0.06),0_2px_8px_rgba(15,23,42,0.02)] relative overflow-hidden"
    >
      {/* Top Gradient Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4F46E5] via-[#38BDF8] to-[#4F46E5]" />

      {/* Resume Session Banner */}
      {hasResumeSession && (
        <div className="mb-8 p-4.5 rounded-2xl bg-[#FFFBEB] border border-amber-200 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <p className="text-sm font-bold">Unfinished Test Session Detected</p>
              <p className="text-xs text-amber-800">
                You have an incomplete session saved in this browser. Resume where you left off or start fresh.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={onDiscardSession}
              className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-red-600 bg-white border border-[#E5EDF7] rounded-xl hover:border-red-200 transition-colors"
            >
              Start Over
            </button>
            <button
              type="button"
              onClick={onResume}
              className="px-5 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              <span>Resume Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Cognitive Assessment</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
          Ready to Challenge Your Reasoning?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#5B6B82] font-semibold">
          <span className="flex items-center gap-1.5 text-[#0F172A]">
            <Sparkles className="w-4 h-4 text-[#4F46E5]" /> 20 Questions
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-[#0F172A]">
            <Clock className="w-4 h-4 text-[#4F46E5]" /> ~12–15 Minutes
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-[#0F172A]">
            <Zap className="w-4 h-4 text-emerald-600" /> Free Instant Results
          </span>
        </div>
      </div>

      {/* Four Category Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-9">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.name}
              className="premium-card p-5 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${cat.color} group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${cat.badgeBg}`}>
                    {cat.count}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#5B6B82] leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mode Selection */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FBFF] border border-[#E5EDF7] mb-8">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#5B6B82] mb-3.5">
          Select Practice Mode
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Untimed Mode */}
          <button
            type="button"
            onClick={() => onModeChange('untimed')}
            className={`flex items-start gap-3.5 p-4.5 rounded-2xl border text-left transition-all ${
              mode === 'untimed'
                ? 'bg-white border-[#4F46E5] ring-2 ring-[#4F46E5]/15 shadow-sm'
                : 'bg-white/80 border-[#E5EDF7] hover:border-slate-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                mode === 'untimed'
                  ? 'border-[#4F46E5] bg-[#4F46E5] text-white'
                  : 'border-slate-300 bg-white'
              }`}
            >
              {mode === 'untimed' && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
            <div>
              <div className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                <span>Untimed Practice</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-[#EEF4FF] text-[#4F46E5] rounded-full">
                  Recommended
                </span>
              </div>
              <p className="text-xs text-[#5B6B82] mt-1 leading-relaxed">
                Take your time to focus on problem-solving accuracy and strategy without clock pressure.
              </p>
            </div>
          </button>

          {/* 15-Minute Timed Mode */}
          <button
            type="button"
            onClick={() => onModeChange('timed_15')}
            className={`flex items-start gap-3.5 p-4.5 rounded-2xl border text-left transition-all ${
              mode === 'timed_15'
                ? 'bg-white border-[#4F46E5] ring-2 ring-[#4F46E5]/15 shadow-sm'
                : 'bg-white/80 border-[#E5EDF7] hover:border-slate-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                mode === 'timed_15'
                  ? 'border-[#4F46E5] bg-[#4F46E5] text-white'
                  : 'border-slate-300 bg-white'
              }`}
            >
              {mode === 'timed_15' && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
            <div>
              <div className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                <span>15-Minute Timed Mode</span>
              </div>
              <p className="text-xs text-[#5B6B82] mt-1 leading-relaxed">
                Simulate formal testing conditions with an active countdown timer.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Primary CTA and Limitations Note */}
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          type="button"
          onClick={onStart}
          className="cta-glow w-full sm:w-auto min-w-[280px] px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#4F46E5] to-[#4338CA] hover:from-[#4338CA] hover:to-[#3730A3] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F46E5]"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>Start Free IQ Test</span>
        </button>

        {/* Permanent Visible Disclosure */}
        <div className="flex items-center gap-2 text-xs text-[#5B6B82] text-center max-w-lg leading-relaxed mt-1">
          <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0" />
          <p>
            <strong>Notice:</strong> This is an educational practice assessment, not a standardized IQ measurement. Free instant results without registration.
          </p>
        </div>
      </div>
    </div>
  );
};
