import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PracticeHero } from '@/components/iq-practice/PracticeHero';
import { PracticeContainer } from '@/components/iq-practice/PracticeContainer';

export const metadata: Metadata = {
  title: 'IQ Practice Questions With Answers & Explanations',
  description:
    'Practise 48 original IQ-style questions with answers, hints and step-by-step explanations. Explore number patterns, logic, abstract and spatial puzzles.',
  alternates: {
    canonical: '/iq-practice-questions/',
  },
  openGraph: {
    title: 'IQ Practice Questions With Answers & Explanations',
    description:
      'Practise 48 original IQ-style questions with answers, hints and step-by-step explanations. Explore number patterns, logic, abstract and spatial puzzles.',
    url: '/iq-practice-questions/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IQ Practice Questions With Answers & Explanations',
    description:
      'Practise 48 original IQ-style questions with answers, hints and step-by-step explanations. Explore number patterns, logic, abstract and spatial puzzles.',
  },
};

export default function IQPracticeQuestionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://theiqtest.org/iq-practice-questions/#webpage',
        url: 'https://theiqtest.org/iq-practice-questions/',
        name: 'IQ Practice Questions With Answers & Explanations',
        description:
          'Practise 48 original IQ-style questions with answers, hints and step-by-step explanations. Explore number patterns, logic, abstract and spatial puzzles.',
        inLanguage: 'en',
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://theiqtest.org/iq-practice-questions/#app',
        name: 'IQ Practice Lab',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Interactive practice platform with 48 original IQ-style reasoning questions, progressive hints, worked solutions, and learning progress tracking.',
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFF] text-[#07152F] relative overflow-hidden selection:bg-[#2453FF]/15 selection:text-[#2453FF]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subtle Ambient Background Gradients */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[640px] bg-gradient-to-b from-[#EBF2FF]/80 via-[#F7FAFF]/30 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full h-[520px] bg-grid-pattern opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-12 left-[15%] bg-[#2453FF]/6 -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-24 right-[12%] bg-[#4779FF]/8 -z-10"
        aria-hidden="true"
      />

      {/* Global Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Compact Hero Section */}
        <PracticeHero />

        {/* Main Practice Container wrapped in Suspense for search params */}
        <Suspense
          fallback={
            <div className="w-full max-w-4xl mx-auto h-96 flex items-center justify-center bg-white rounded-3xl border border-[#E2EAF7]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#60718B]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2453FF] animate-pulse" />
                <span>Loading Practice Lab...</span>
              </div>
            </div>
          }
        >
          <PracticeContainer />
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
