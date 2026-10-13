import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#E4EAF3] bg-white mt-auto no-print">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Purpose */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#5546F5] flex items-center justify-center text-white shadow-2xs">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <circle cx="17.5" cy="17.5" r="3.5" />
                </svg>
              </div>
              <span className="font-extrabold text-base text-[#0B1220]">
                IQ <span className="text-[#5546F5]">Test</span>
              </span>
            </div>
            <p className="text-xs text-[#526179] leading-relaxed max-w-sm">
              An open, transparent cognitive reasoning assessment platform featuring original numerical, logical, abstract, and spatial puzzles.
            </p>
          </div>

          {/* Assessment Scope & Method */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1220]">
              Assessment Structure
            </h4>
            <ul className="text-xs text-[#526179] space-y-1.5 font-medium">
              <li>• 20 Original Reviewed Problems</li>
              <li>• 4 Cognitive Domains (5 questions each)</li>
              <li>• Transparent Raw Score &amp; Accuracy</li>
              <li>• Comprehensive Question-by-Question Explanations</li>
            </ul>
          </div>

          {/* Academic & Ethical Disclosure */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1220]">
              Assessment Notice
            </h4>
            <p className="text-xs text-[#526179] leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-[#E4EAF3]">
              This is an educational practice assessment designed for analytical training and reasoning practice. It is not a standardized clinical intelligence quotient (IQ) examination and does not claim medical or psychometric certification.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 IQ Test Practice Platform. Free &amp; Open Access.
          </div>
          <div className="flex items-center gap-4 text-slate-500 font-medium">
            <span>Assessment Version 1.0.0</span>
            <span>•</span>
            <span>No Cookies / Anonymous Session</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
