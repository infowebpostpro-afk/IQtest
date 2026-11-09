import React from 'react';
import Link from 'next/link';
import { Zap, Target, Layers, BookOpen } from 'lucide-react';

export const PracticeHero: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07152F] tracking-tight leading-tight mb-4">
          IQ Practice Questions With Answers
        </h1>
        <p className="text-base sm:text-lg text-[#60718B] leading-relaxed mb-8 max-w-3xl">
          Practise 48 original numerical, logical, abstract and spatial reasoning questions. Explore hints, check answers and learn with step-by-step explanations—free and at your own pace.
        </p>

        {/* Feature indicators */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF2FF] text-[#2453FF] text-sm font-bold border border-[#E2EAF7]">
            <Zap className="w-4 h-4" />
            <span>48 Questions</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF2FF] text-[#2453FF] text-sm font-bold border border-[#E2EAF7]">
            <Layers className="w-4 h-4" />
            <span>4 Categories</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF2FF] text-[#2453FF] text-sm font-bold border border-[#E2EAF7]">
            <Target className="w-4 h-4" />
            <span>3 Difficulty Levels</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold border border-emerald-200">
            <BookOpen className="w-4 h-4" />
            <span>Free Practice</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="#practice"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2453FF] text-white text-sm sm:text-base font-bold cta-glow hover:bg-[#1a44e6] transition-colors shadow-lg"
          >
            <span>Start Practising</span>
            <Zap className="w-4 h-4" />
          </Link>
          <Link
            href="#categories"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#07152F] text-sm sm:text-base font-bold border border-[#E2EAF7] hover:bg-[#F7FAFF] hover:border-[#2453FF]/30 transition-colors"
          >
            <span>Browse Categories</span>
            <Layers className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
