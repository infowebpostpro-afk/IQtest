import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Mail, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us – IQ Test Support & Feedback',
  description:
    'Get in touch with the IQ Test platform team for editorial feedback, mathematical corrections, psychometric inquiries, or technical support.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FBFF] text-[#07152F]">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#2453FF] border border-blue-200 mb-3">
            <Mail className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#07152F] tracking-tight">
            Contact &amp; Psychometric Inquiries
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#60718B] leading-relaxed">
            Have questions about question logic, feedback on calculations, or inquiries about educational partnerships? We welcome your input.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-[#E2EAF7] shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-[#07152F]">Send Feedback or Inquiry</h2>
            <p className="text-xs sm:text-sm text-[#60718B]">
              For question error reports, please include the specific question ID (e.g. `abs-seq-02` or `num-04`) and your step-by-step reasoning.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#07152F]">
                <Mail className="w-4 h-4 text-[#2453FF]" />
                <span>Editorial &amp; Review Team Email:</span>
              </div>
              <a
                href="mailto:contact@theiqtest.org"
                className="text-base font-semibold text-[#2453FF] hover:underline"
              >
                contact@theiqtest.org
              </a>
              <p className="text-xs text-slate-500">
                Typical response time: 24–48 business hours.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2453FF] flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#07152F]">Support Hours</h3>
              <p className="text-xs text-[#60718B] leading-relaxed">
                Monday – Friday: 9:00 AM – 5:00 PM EST. Inquiries submitted on weekends are addressed the following business day.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#07152F]">Privacy Assurance</h3>
              <p className="text-xs text-[#60718B] leading-relaxed">
                Your email and correspondence are strictly confidential and will never be shared or used for promotional lists.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

