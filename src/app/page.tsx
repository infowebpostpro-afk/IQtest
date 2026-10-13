import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/hero/HeroSection';
import { ComprehensiveArticle } from '@/components/article/ComprehensiveArticle';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FBFF] text-[#0F172A] relative overflow-hidden selection:bg-[#4F46E5]/15 selection:text-[#4F46E5]">
      {/* Subtle Ambient Background Gradients & Grid Depth */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[780px] bg-gradient-to-b from-[#EEF5FF]/90 via-[#F8FBFF]/40 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full h-[640px] bg-grid-pattern opacity-40 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-24 left-[15%] bg-[#4F46E5]/10 -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-44 right-[12%] bg-[#38BDF8]/12 -z-10"
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
