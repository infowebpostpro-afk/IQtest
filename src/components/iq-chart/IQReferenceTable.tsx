'use client';

import React, { useState, useMemo } from 'react';
import {
  MEAN,
  MIN_IQ,
  MAX_IQ,
  calculateZScore,
  calculatePercentile,
  formatPercentile,
  getCategoryDescription,
} from '@/lib/iqChart/math';
import { Table, Search, ArrowUpDown, Check, Filter } from 'lucide-react';

interface IQReferenceTableProps {
  currentScore: number;
  onSelectScore: (score: number) => void;
}

export const IQReferenceTable: React.FC<IQReferenceTableProps> = ({
  currentScore,
  onSelectScore,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllScores, setShowAllScores] = useState<boolean>(false);

  // Common benchmark scores in steps of 5
  const commonScores = useMemo(() => {
    return [40, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160];
  }, []);

  // Complete list of all scores from 40 to 160
  const allScores = useMemo(() => {
    const list: number[] = [];
    for (let i = MIN_IQ; i <= MAX_IQ; i++) {
      list.push(i);
    }
    return list;
  }, []);

  // Filtered rows
  const displayedScores = useMemo(() => {
    const baseList = showAllScores ? allScores : commonScores;
    if (!searchQuery.trim()) {
      return baseList;
    }
    const queryNum = parseInt(searchQuery.trim(), 10);
    if (!isNaN(queryNum)) {
      return allScores.filter((score) => score.toString().includes(searchQuery.trim()));
    }
    return baseList;
  }, [showAllScores, allScores, commonScores, searchQuery]);

  return (
    <div className="w-full bg-white rounded-3xl border border-[#E2EAF7] p-5 sm:p-7 shadow-[0_4px_24px_rgba(7,21,47,0.03)] space-y-5">
      {/* Table Controls & Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-lg font-extrabold text-[#07152F] flex items-center gap-2">
            <Table className="w-4 h-4 text-[#2453FF]" />
            <span>IQ Score Reference Table</span>
          </h2>
          <p className="text-xs text-[#60718B]">
            Theoretical z-scores and cumulative percentiles based on μ=100, σ=15. Click any row to load into chart.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Find IQ (e.g. 115)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs font-semibold rounded-xl bg-[#F7FAFF] border border-[#E2EAF7] focus:outline-none focus:ring-2 focus:ring-[#2453FF]/20 focus:border-[#2453FF] w-40 sm:w-48"
              aria-label="Filter IQ scores"
            />
          </div>

          {/* Toggle All vs Benchmarks */}
          <button
            type="button"
            onClick={() => setShowAllScores((prev) => !prev)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              showAllScores
                ? 'bg-[#EEF2FF] text-[#2453FF] border border-[#2453FF]/30'
                : 'bg-slate-100 text-[#60718B] hover:text-[#07152F] hover:bg-slate-200'
            }`}
          >
            {showAllScores ? 'Showing All (40–160)' : 'Show All Scores'}
          </button>
        </div>
      </div>

      {/* Table Component */}
      <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden">
        <div className="max-h-[380px] overflow-y-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="IQ Score Reference Table">
            <thead className="sticky top-0 bg-[#F7FAFF] text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7] z-10 shadow-2xs">
              <tr>
                <th scope="col" className="py-3 px-4 sm:px-6">IQ Score</th>
                <th scope="col" className="py-3 px-3 sm:px-4">Diff from Mean</th>
                <th scope="col" className="py-3 px-3 sm:px-4 font-mono">Z-Score</th>
                <th scope="col" className="py-3 px-4 sm:px-6 text-right">Approx. Percentile</th>
                <th scope="col" className="py-3 px-3 sm:px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2EAF7] bg-white">
              {displayedScores.map((iqVal) => {
                const z = calculateZScore(iqVal);
                const diff = iqVal - MEAN;
                const pct = calculatePercentile(iqVal);
                const isSelected = iqVal === currentScore;

                return (
                  <tr
                    key={iqVal}
                    onClick={() => onSelectScore(iqVal)}
                    className={`transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#EEF2FF] font-bold text-[#2453FF]'
                        : 'hover:bg-[#F7FAFF]/80 text-[#07152F]'
                    }`}
                  >
                    <td className="py-2.5 px-4 sm:px-6 font-mono font-black">
                      <div className="flex items-center gap-2">
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-[#2453FF]" />
                        )}
                        <span>{iqVal}</span>
                        {iqVal === 100 && (
                          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                            Mean
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 sm:px-4 font-mono text-[#60718B]">
                      {diff > 0 ? `+${diff}` : diff}
                    </td>
                    <td className="py-2.5 px-3 sm:px-4 font-mono text-[#60718B]">
                      {z > 0 ? `+${z.toFixed(2)}` : z.toFixed(2)}σ
                    </td>
                    <td className="py-2.5 px-4 sm:px-6 text-right font-mono font-bold text-[#2453FF]">
                      {formatPercentile(pct)}
                    </td>
                    <td className="py-2.5 px-3 sm:px-4 text-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectScore(iqVal);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#2453FF] text-white shadow-2xs'
                            : 'bg-slate-100 text-[#60718B] hover:bg-[#2453FF] hover:text-white'
                        }`}
                        aria-label={`Select IQ ${iqVal}`}
                      >
                        {isSelected ? 'Active' : 'Select'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#60718B] gap-2 pt-1">
        <span>Showing {displayedScores.length} reference points.</span>
        <span>Theoretical normal model output. Not clinical diagnosis.</span>
      </div>
    </div>
  );
};
