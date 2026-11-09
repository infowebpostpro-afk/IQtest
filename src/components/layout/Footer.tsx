'use client';

import React from 'react';
import Link from 'next/link';
import {
  Brain,
  Zap,
  BookOpen,
  BarChart3,
  Calculator,
  ArrowUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  GitBranch,
  Shapes,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#07152F] text-slate-300 border-t border-[#162746] mt-auto no-print relative overflow-hidden">
      {/* Subtle background glow accents */}
      <div
        className="absolute top-0 left-1/4 w-96 h-56 bg-[#2453FF]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-56 bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-14 pb-10 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1A2D4E]">
          {/* Column 1: Brand & Purpose (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] rounded-xl"
              aria-label="IQ Test Homepage"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1B40DF] via-[#2453FF] to-[#4779FF] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(36,83,255,0.35)]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <circle cx="17.5" cy="17.5" r="3.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight leading-none text-white">
                  IQ <span className="text-[#3884FF]">Test</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mt-0.5">
                  Reasoning Assessment
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Explore reasoning practice tools, IQ score references and educational resources designed to make cognitive puzzles easier to understand.
            </p>

            {/* Platform Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F2244] border border-[#1E3A6E] text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Free Access</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F2244] border border-[#1E3A6E] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>No Account Required</span>
              </span>
            </div>
          </div>

          {/* Column 2: IQ Tests (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              IQ Tests
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1.5 transition-all"
                >
                  <Brain className="w-3.5 h-3.5 text-[#3884FF]" />
                  <span>Full IQ Test (20 Qs)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/logical-reasoning-test/"
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1.5 transition-all"
                >
                  <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                  <span>Logical Reasoning Test</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/abstract-reasoning-test/"
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1.5 transition-all"
                >
                  <Shapes className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Abstract Reasoning Test</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/quick-iq-test/"
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1.5 transition-all"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Quick IQ Test (10 Qs)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/iq-practice-questions/"
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1.5 transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Practice Questions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: IQ Tools (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              IQ Tools
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link
                  href="/iq-score-chart/"
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1.5 transition-all"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>IQ Score Chart</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/iq-percentile-calculator/"
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1.5 transition-all"
                >
                  <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Percentile Calculator</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/average-iq-by-age/"
                  className="text-slate-400 hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1.5 transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Average IQ by Age</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Assessment Notice & Disclaimer (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Assessment Notice
            </h4>
            <div className="p-3.5 rounded-2xl bg-[#0B1A35] border border-[#182C50] text-[11px] text-slate-400 leading-relaxed space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-[#3884FF]" />
                <span>Educational Platform</span>
              </div>
              <p>
                Online practice tests and calculators are educational tools designed for analytical practice. They are not substitutes for professionally standardized clinical intelligence assessments.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 IQ Test Practice Platform. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400 font-medium text-[11px]">
            <span>5 Verified Practice &amp; Analysis Tools</span>
            <span>•</span>
            <span>Anonymous Session</span>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
