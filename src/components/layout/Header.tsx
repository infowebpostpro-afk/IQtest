'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain } from 'lucide-react';

interface HeaderProps {
  onStartClick?: () => void;
  isTestActive?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onStartClick,
  isTestActive = false,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E4EAF3] bg-white/80 backdrop-blur-md transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5546F5] rounded-xl p-1"
          aria-label="IQ Test Homepage"
        >
          <div className="w-9 h-9 rounded-xl bg-[#5546F5] flex items-center justify-center text-white shadow-xs group-hover:bg-[#4338CA] transition-colors">
            {/* Geometric IQ Symbol */}
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
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
            <span className="font-extrabold text-lg tracking-tight leading-none text-[#0B1220]">
              IQ <span className="text-[#5546F5]">Test</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#526179]">
              Reasoning Assessment
            </span>
          </div>
        </Link>

        {/* Center Navigation Links (Hidden on mobile) */}
        {!isTestActive && (
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#526179]">
            <button
              type="button"
              onClick={() => scrollTo('how-it-works')}
              className="hover:text-[#5546F5] transition-colors focus:outline-none"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => scrollTo('what-it-measures')}
              className="hover:text-[#5546F5] transition-colors focus:outline-none"
            >
              What It Measures
            </button>
            <button
              type="button"
              onClick={() => scrollTo('practice-examples')}
              className="hover:text-[#5546F5] transition-colors focus:outline-none"
            >
              Practice
            </button>
            <button
              type="button"
              onClick={() => scrollTo('faq')}
              className="hover:text-[#5546F5] transition-colors focus:outline-none"
            >
              FAQ
            </button>
          </nav>
        )}

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          {!isTestActive ? (
            <Link
              href="/test"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-[#5546F5] hover:bg-[#4338CA] active:scale-[0.98] transition-all shadow-xs hover:shadow-md hover:shadow-[#5546F5]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5546F5]"
            >
              <span>Start Free Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F0EEFF] text-[#5546F5] border border-[#5546F5]/20">
              <span className="w-2 h-2 rounded-full bg-[#5546F5] animate-pulse" />
              <span>Assessment In Progress</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
