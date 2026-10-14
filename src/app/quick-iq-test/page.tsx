import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuickTestClient } from './QuickTestClient';
import { Clock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quick IQ Test – 10 Questions, Free Instant Results',
  description:
    'Take a quick IQ test with 10 original reasoning questions. Get free instant results and answer explanations in about five minutes. No signup required.',
  alternates: {
    canonical: '/quick-iq-test/',
  },
  openGraph: {
    title: 'Quick IQ Test – 10 Questions, Free Instant Results',
    description:
      'Take a quick IQ test with 10 original reasoning questions. Get free instant results and answer explanations in about five minutes. No signup required.',
    url: '/quick-iq-test/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick IQ Test – 10 Questions, Free Instant Results',
    description:
      'Challenge yourself with 10 original reasoning questions in about five minutes. Instant results & explanations.',
  },
};

export default function QuickIQTestPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFF] text-[#07152F] relative overflow-hidden selection:bg-[#2453FF]/15 selection:text-[#2453FF]">
      {/* Ambient Depth Gradients */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[640px] bg-gradient-to-b from-[#EAF2FF]/80 via-[#F7FAFF]/30 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-12 left-[15%] bg-[#2453FF]/8 -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-24 right-[15%] bg-[#4779FF]/10 -z-10"
        aria-hidden="true"
      />

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col justify-start">
        {/* ========================================================================= */}
        {/* PREMIUM TOOL HEADER (Compact, Tool-First)                                  */}
        {/* ========================================================================= */}
        <section className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 animate-in fade-in duration-200">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#07152F] tracking-tight mb-3">
            Quick IQ Test
          </h1>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed mb-5">
            Challenge yourself with 10 original reasoning questions in about five minutes. Get free instant results and explanations—no signup needed.
          </p>

          {/* 4 Benefit Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#07152F] border border-[#E2EAF7] shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#2453FF] fill-[#2453FF]" />
              <span>10 Questions</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#07152F] border border-[#E2EAF7] shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#2453FF]" />
              <span>About 5 Minutes</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#07152F] border border-[#E2EAF7] shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant Results</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#07152F] border border-[#E2EAF7] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2453FF]" />
              <span>No Signup</span>
            </span>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE QUICK ASSESSMENT TOOL                                         */}
        {/* ========================================================================= */}
        <section className="w-full flex-1 flex flex-col justify-center">
          <QuickTestClient />
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
