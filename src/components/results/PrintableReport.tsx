'use client';

import React from 'react';
import { AssessmentResult } from '@/types/assessment';
import { CATEGORY_LABELS } from '@/lib/assessment/scoring';

interface PrintableReportProps {
  result: AssessmentResult;
}

export const PrintableReport: React.FC<PrintableReportProps> = ({ result }) => {
  const formattedDate = new Date(result.completedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="print-only print-page p-8 max-w-2xl mx-auto bg-white text-slate-900 border border-slate-300 rounded-xl my-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Cognitive Reasoning Assessment Report
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Free Educational Reasoning Assessment • Version {result.assessmentVersion}
          </p>
        </div>
        <div className="text-right text-xs text-slate-500">
          <p className="font-semibold">{formattedDate}</p>
          <p className="capitalize">Mode: {result.mode.replace('_', ' ')}</p>
        </div>
      </div>

      {/* Raw Score Summary Card */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 mb-6 text-center">
        <div>
          <span className="text-xs text-slate-500 uppercase tracking-wider block">Raw Score</span>
          <span className="text-2xl font-bold text-slate-900">
            {result.correctCount} / {result.totalQuestions}
          </span>
        </div>
        <div>
          <span className="text-xs text-slate-500 uppercase tracking-wider block">Accuracy</span>
          <span className="text-2xl font-bold text-indigo-600">
            {result.accuracyPercentage}%
          </span>
        </div>
        <div>
          <span className="text-xs text-slate-500 uppercase tracking-wider block">Completion Time</span>
          <span className="text-2xl font-bold text-slate-900">
            {Math.floor(result.timeSpentSeconds / 60)}m {result.timeSpentSeconds % 60}s
          </span>
        </div>
      </div>

      {/* Category Breakdown Table */}
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
          Domain Performance Breakdown
        </h2>
        <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-100 border-b border-slate-200 text-slate-700">
            <tr>
              <th className="p-2.5">Category</th>
              <th className="p-2.5 text-center">Questions</th>
              <th className="p-2.5 text-center">Correct</th>
              <th className="p-2.5 text-right">Accuracy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {Object.values(result.categoryScores).map((cat) => (
              <tr key={cat.category}>
                <td className="p-2.5 font-medium">{cat.categoryName}</td>
                <td className="p-2.5 text-center">{cat.total}</td>
                <td className="p-2.5 text-center font-bold">{cat.correct}</td>
                <td className="p-2.5 text-right font-semibold">{cat.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Standard Academic Limitation Notice */}
      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-[11px] leading-relaxed">
        <p className="font-semibold mb-1 text-slate-800">Assessment Scope &amp; Limitations Notice:</p>
        <p>
          This document represents raw test performance on 20 original reasoning problems designed for cognitive practice and intellectual challenge. It does not constitute a standardized clinical intelligence quotient (IQ) score and cannot be used for diagnostic, institutional, or psychometric qualification purposes.
        </p>
      </div>
    </div>
  );
};
