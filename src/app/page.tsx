import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/hero/HeroSection';
import { ComprehensiveArticle } from '@/components/article/ComprehensiveArticle';

export const metadata: Metadata = {
  title: 'IQ Test – Free Online Test With Instant Results',
  description:
    'Take a free online IQ test with 20 reasoning questions, instant results, and clear explanations. No signup required. Start your test now.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://theiqtest.org/#website',
        url: 'https://theiqtest.org/',
        name: 'IQ Test – Free Online Cognitive Reasoning Assessment',
        description:
          'Free online cognitive reasoning assessment with 20 original questions covering numerical, logical, abstract, and spatial domains.',
        inLanguage: 'en',
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://theiqtest.org/#app',
        name: 'Free Online IQ Test',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFF] text-[#07152F] relative overflow-hidden selection:bg-[#2453FF]/15 selection:text-[#2453FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Subtle Ambient Background Gradients & Grid Depth */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[820px] bg-gradient-to-b from-[#EBF2FF]/80 via-[#F7FAFF]/40 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full h-[680px] bg-grid-pattern opacity-40 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-20 left-[18%] bg-[#2453FF]/8 -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-40 right-[10%] bg-[#4779FF]/10 -z-10"
        aria-hidden="true"
      />

      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Upgraded Hero Section with soft gradients, motion, and depth */}
        <HeroSection />

        {/* 12 Redesigned Editorial Sections with alternating rhythm & premium cards */}
        <ComprehensiveArticle />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
