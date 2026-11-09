'use client';

import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';

export const WhyAgeNormingWorks: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-4 shadow-2xs">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-[#EEF2FF] text-[#2453FF] flex items-center justify-center">
          <HelpCircle className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-sm font-bold text-[#07152F]">
          Why Doesn&apos;t the Average Change With Age?
        </h3>
      </div>

      <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
        Many modern IQ scores are age-normed. A standardized score of 100 represents performance near the average for an appropriate age-based reference group. Children and adults may solve different questions or achieve different raw scores while receiving the same standardized IQ.
      </p>

      {/* Visual Vector Flow Diagram */}
      <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          {/* Child Pipeline */}
          <div className="flex items-center gap-2 bg-[#F8FBFF] px-3 py-2 rounded-xl border border-[#E2EAF7] w-full sm:w-auto justify-center">
            <span className="font-bold text-[#07152F]">Child (e.g. Age 10)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2453FF]" />
            <span className="text-[#60718B]">Age Norms</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2453FF]" />
            <span className="font-mono font-bold text-[#2453FF] bg-[#EEF2FF] px-2 py-0.5 rounded">IQ 100</span>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#60718B] hidden sm:inline">
            Both Calibrated To Mean
          </span>

          {/* Adult Pipeline */}
          <div className="flex items-center gap-2 bg-[#F8FBFF] px-3 py-2 rounded-xl border border-[#E2EAF7] w-full sm:w-auto justify-center">
            <span className="font-bold text-[#07152F]">Adult (e.g. Age 40)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2453FF]" />
            <span className="text-[#60718B]">Age Norms</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2453FF]" />
            <span className="font-mono font-bold text-[#2453FF] bg-[#EEF2FF] px-2 py-0.5 rounded">IQ 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

