import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, BookOpen, Users, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us – Open-Access Cognitive Reasoning & Psychometrics',
  description:
    'Learn about the IQ Test reasoning platform, our psychometric methodology, mission for open-access cognitive education, and commitment to transparency.',
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FBFF] text-[#07152F]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#2453FF] border border-blue-200 mb-3">
            <Users className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>About The Platform</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#07152F] tracking-tight">
            About IQ Test &amp; Psychometric Tools
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#60718B] leading-relaxed">
            Our mission is to provide transparent, peer-reviewed, open-access cognitive practice assessments and educational psychometric resources.
          </p>
        </div>

        <div className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#E2EAF7] shadow-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#07152F]">1. Open Access &amp; Privacy-First Philosophy</h2>
            <p className="text-sm text-[#60718B] leading-relaxed">
              We believe cognitive practice should be accessible without financial barriers, misleading subscriptions, or aggressive data harvesting. All assessments, practice question banks, and statistical calculation tools on this website are 100% free with no account creation or credit card requirement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#07152F]">2. Scientific Foundations</h2>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Our tools and educational models are built on classical test theory and the Gaussian normal distribution curve (mean = 100, standard deviation = 15). We emphasize transparent explanations, rigorous error analysis, and accurate statistical models rather than inflated scores designed to flatter users.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#07152F]">3. Psychometric &amp; Clinical Disclaimers</h2>
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 text-xs sm:text-sm text-blue-900 leading-relaxed">
              <strong>Important Clinical Notice:</strong> Online practice tests provide educational benchmarks for reasoning speed, pattern recognition, and problem solving. They are self-directed exercises and do not replace supervised, clinically standardized assessments administered by licensed psychologists, such as the WAIS-IV, WISC-V, or Stanford-Binet.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#07152F]">4. Contact &amp; Inquiries</h2>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Have questions regarding our questions, mathematical models, or statistical calculations? Reach out to our editorial and psychometric review team via our <Link href="/contact/" className="text-[#2453FF] font-semibold underline">contact page</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

