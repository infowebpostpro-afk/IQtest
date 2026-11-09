'use client';

import React, { useState } from 'react';
import { ChevronDown, Eye, CheckCircle2, Search } from 'lucide-react';

interface FiveFeatureScanPanelProps {
  defaultExpanded?: boolean;
  className?: string;
}

export const FiveFeatureScanPanel: React.FC<FiveFeatureScanPanelProps> = ({
  defaultExpanded = false,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const features = [
    {
      num: 1,
      title: 'Shape & Geometry',
      desc: 'Count sides and vertices. Is it curving, straight, regular, or morphing into another polygon?',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      num: 2,
      title: 'Count & Quantity',
      desc: 'Count internal/external objects, dots, intersecting segments, and concentric layers (+1, -1, alternating).',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      num: 3,
      title: 'Position & Movement',
      desc: 'Track clockwise/counterclockwise corner travel, horizontal translations, or inside/outside boundary shift.',
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      num: 4,
      title: 'Orientation & Rotation',
      desc: 'Measure rotation angles (45°, 90°, 180°), axis reflection (mirroring), or chiral flips.',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      num: 5,
      title: 'Fill & Shading',
      desc: 'Check solid vs hollow states, hatching patterns, XOR cancellations, or area proportion ratios (e.g. 50% vs 25%).',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
  ];

  return (
    <div className={`bg-white rounded-2xl border border-[#E2EAF7] shadow-2xs overflow-hidden transition-all ${className}`}>
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left hover:bg-slate-50/80 transition-colors cursor-pointer"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2453FF] flex items-center justify-center font-bold">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-xs sm:text-sm text-[#07152F]">
                The Five-Feature Scan Method
              </span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-blue-100 text-[#2453FF]">
                Visual Strategy
              </span>
            </div>
            <p className="text-[11px] text-[#60718B]">
              Systematic 5-step checklist for solving abstract &amp; visual pattern puzzles
            </p>
          </div>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="p-3.5 sm:p-4 pt-0 border-t border-slate-100 animate-in fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-3">
            {features.map((f) => (
              <div
                key={f.num}
                className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black border ${f.color}`}>
                      {f.num}
                    </span>
                    <span className="font-heading font-black text-xs text-[#07152F]">
                      {f.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#475569] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

