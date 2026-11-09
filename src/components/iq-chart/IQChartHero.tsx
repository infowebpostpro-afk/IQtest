'use client';

import React from 'react';
import { Activity, BarChart3, Info } from 'lucide-react';

export const IQChartHero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-6 sm:pt-8 sm:pb-8 text-center max-w-3xl mx-auto">
      {/* Compact Model Badge */}
      <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
        <Activity className="w-3.5 h-3.5 stroke-[2.5]" />
        <span>Mean 100 · Standard Deviation 15</span>
      </div>

      {/* H1 Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07152F] tracking-tight leading-[1.15] mb-3">
        IQ Score Chart
      </h1>

      {/* Short Supporting Description */}
      <p className="text-sm sm:text-base text-[#60718B] leading-relaxed max-w-2xl mx-auto mb-4">
        Explore the IQ scale with an interactive bell curve. Enter a standardized score to see its position, compare ranges, and understand the distribution.
      </p>

      {/* Subtle Reference Model Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#E2EAF7] text-[11px] font-semibold text-[#60718B] shadow-2xs">
        <Info className="w-3.5 h-3.5 text-[#2453FF]" />
        <span>Standard Theoretical Normal Distribution (Gaussian Reference Model)</span>
      </div>
    </section>
  );
};
