import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FileText, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use – IQ Test Platform',
  description:
    'Terms of service and psychometric usage guidelines for using our educational IQ assessments and interactive calculators.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FBFF] text-[#07152F]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#2453FF] border border-blue-200 mb-3">
            <FileText className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#07152F] tracking-tight">
            Terms of Use
          </h1>
          <p className="mt-2 text-xs text-[#60718B]">
            Effective Date: January 1, 2026 • Last Reviewed: November 2026
          </p>
        </div>

        <div className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#E2EAF7] shadow-sm text-sm text-[#60718B] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">1. Nature of Educational Service</h2>
            <p>
              The IQ tests, practice questions, statistical charts, and percentile tools provided on this website are designed exclusively for self-directed educational practice, cognitive exploration, and personal entertainment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">2. Non-Clinical Disclaimer</h2>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs sm:text-sm">
              <strong>Explicit Disclaimer:</strong> Results obtained on this website are not clinically certified psychometric assessments. They must not be used for medical diagnosis, cognitive disability evaluation, psychological assessment, school placement, employment qualification, or legal proceedings.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">3. Intellectual Property</h2>
            <p>
              All questions, visual SVG matrices, geometric patterns, explanatory texts, calculations, and software architecture are protected by intellectual property laws. You may not republish, scrape, or commercially distribute questions or tools without written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">4. Limitation of Liability</h2>
            <p>
              In no event shall the platform creators or contributors be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the services or interpretation of test results.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#07152F]">5. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use and our Privacy Policy.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

