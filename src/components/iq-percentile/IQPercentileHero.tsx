import React from 'react';
import { Zap, ArrowLeftRight, CheckCircle2, Shield } from 'lucide-react';

export const IQPercentileHero: React.FC = () => {
  return (
    <section className="relative pt-4 pb-4 sm:pt-6 sm:pb-6 text-center max-w-3xl mx-auto antialiased">
      {/* Trust Indicator Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF2FF] text-[#2453FF] border border-[#2453FF]/20 shadow-2xs">
          <Zap className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Instant Calculation</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#07152F] border border-[#E2EAF7] shadow-2xs">
          <ArrowLeftRight className="w-3.5 h-3.5 text-[#2453FF]" />
          <span>Two-Way Conversion</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#07152F] border border-[#E2EAF7] shadow-2xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Free to Use · No Signup</span>
        </span>
      </div>

      {/* H1 Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07152F] tracking-tight leading-[1.15] mb-3">
        IQ Percentile Calculator
      </h1>

      {/* Supporting Text */}
      <p className="text-sm sm:text-base text-[#60718B] leading-relaxed max-w-2xl mx-auto">
        Convert IQ scores to theoretical percentiles—or find the IQ score corresponding to a percentile. Get instant results using a transparent statistical model.
      </p>
    </section>
  );
};
