import React from 'react';
import { HelpCircle, Layers, CheckCircle } from 'lucide-react';

export const FutureArticleContainer: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 border-t border-slate-200 mt-12 no-print"
      aria-label="Educational Assessment Methodology"
    >
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Assessment Guide &amp; Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            How Cognitive Reasoning is Evaluated
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            This assessment exercises fundamental cognitive problem-solving capabilities across four distinct analytical domains.
          </p>
        </div>

        {/* Cognitive Domains Table */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            The Four Core Reasoning Domains
          </h3>
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="p-3 sm:p-4">Domain</th>
                  <th className="p-3 sm:p-4">Primary Cognitive Focus</th>
                  <th className="p-3 sm:p-4">Sample Problem Pattern</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Numerical</td>
                  <td className="p-3 sm:p-4">Quantitative relationships &amp; sequence rules</td>
                  <td className="p-3 sm:p-4">Increasing differences, interleaved series</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Logical</td>
                  <td className="p-3 sm:p-4">Deductive inference &amp; formal constraints</td>
                  <td className="p-3 sm:p-4">Contrapositive rules, ordering constraints</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Abstract</td>
                  <td className="p-3 sm:p-4">Visual pattern completion &amp; transformation</td>
                  <td className="p-3 sm:p-4">Matrix progression, superposition cancellation (XOR)</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Spatial</td>
                  <td className="p-3 sm:p-4">Mental manipulation &amp; perspective taking</td>
                  <td className="p-3 sm:p-4">Planar rotation, mirror reflection, cube net folding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Disclosures */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="space-y-2.5">
            <details className="group rounded-xl border border-slate-200 bg-white p-4 transition-colors open:bg-slate-50/50">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex items-center justify-between">
                <span>Is this assessment completely free?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes. All 20 questions, score computations, domain performance breakdowns, and explanations are immediately accessible without any paywall, subscription, or email registration.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-white p-4 transition-colors open:bg-slate-50/50">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex items-center justify-between">
                <span>How is my score calculated?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Scoring is transparent: Each correct answer earns 1 point. Incorrect or skipped questions receive 0 points. Your accuracy percentage represents your raw score divided by 20. We report transparent empirical metrics without fabricated percentile or standard deviation claims.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-white p-4 transition-colors open:bg-slate-50/50">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 list-none flex items-center justify-between">
                <span>Can I resume my test if my browser closes?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes. Test sessions are automatically preserved in your local browser storage. If you refresh or accidentally navigate away, you will be prompted to resume right where you left off.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};
