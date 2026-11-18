import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy – IQ Test Platform',
  description:
    'Our strict zero-signup, anonymous session privacy policy. Learn how we safeguard your data and respect your anonymity.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FBFF] text-[#07152F]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#07152F] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-[#60718B]">
            Effective Date: January 1, 2026 • Last Reviewed: November 2026
          </p>
        </div>

        <div className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#E2EAF7] shadow-sm text-sm text-[#60718B] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">1. Zero Mandatory Registration</h2>
            <p>
              We do not require you to create an account, register an email address, or provide any personally identifying information (PII) to take any test or utilize any calculation tool on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">2. Local Client-Side Scoring</h2>
            <p>
              All test responses, timer progress, score computations, and percentile calculations are processed locally within your browser. We do not store your individual test answers or scores in an identifiable database profile.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">3. Cookies and Local Storage</h2>
            <p>
              We use minimal browser local storage strictly to remember test session progress in the event of an inadvertent page refresh. We do not use persistent cross-site tracking cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">4. Third-Party Sharing</h2>
            <p>
              We never sell, rent, monetize, or disclose visitor data to third-party data brokers, marketing agencies, or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect improvements in our data handling practices. Any updates will be posted directly to this page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

