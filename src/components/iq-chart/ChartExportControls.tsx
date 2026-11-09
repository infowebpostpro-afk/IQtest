'use client';

import React, { useState } from 'react';
import {
  MEAN,
  STANDARD_DEVIATION,
  formatPercentile,
  calculatePercentile,
} from '@/lib/iqChart/math';
import { Download, Share2, Check, FileImage, FileCode, AlertCircle } from 'lucide-react';

interface ChartExportControlsProps {
  score: number;
  isCompareMode?: boolean;
  scoreB?: number;
}

export const ChartExportControls: React.FC<ChartExportControlsProps> = ({
  score,
  isCompareMode = false,
  scoreB = 115,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [exporting, setExporting] = useState<boolean>(false);

  // Generate shareable link with search params
  const handleCopyShareLink = async () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('score', score.toString());
      if (isCompareMode) {
        url.searchParams.set('compare', 'true');
        url.searchParams.set('scoreB', scoreB.toString());
      } else {
        url.searchParams.delete('compare');
        url.searchParams.delete('scoreB');
      }

      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  // Build standalone SVG string with full labels, title, disclaimer, and styling
  const generateExportableSvgString = (): string => {
    const width = 1000;
    const height = 540;
    const pct = calculatePercentile(score);
    const zNum = (score - MEAN) / STANDARD_DEVIATION;
    const zStr = (zNum > 0 ? '+' : '') + zNum.toFixed(2);

    // SVG bell curve math
    const padL = 60;
    const padR = 60;
    const padT = 110;
    const chartW = width - padL - padR;
    const chartH = 320;
    const baseline = padT + chartH;

    const getX = (iq: number) => padL + ((iq - 40) / 120) * chartW;
    const getY = (iq: number) => {
      const exponent = -0.5 * Math.pow((iq - 100) / 15, 2);
      const pdf = (1 / (15 * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
      const maxPdf = 1 / (15 * Math.sqrt(2 * Math.PI));
      return baseline - (pdf / maxPdf) * (chartH - 20);
    };

    let curvePath = '';
    for (let iq = 40; iq <= 160; iq += 0.5) {
      const x = getX(iq);
      const y = getY(iq);
      curvePath += `${curvePath === '' ? 'M' : 'L'} ${x.toFixed(2)},${y.toFixed(2)} `;
    }

    let areaPath = `M ${getX(40)},${baseline} `;
    for (let iq = 40; iq <= score; iq += 0.5) {
      const x = getX(iq);
      const y = getY(iq);
      areaPath += `L ${x.toFixed(2)},${y.toFixed(2)} `;
    }
    areaPath += `L ${getX(score)},${baseline} Z`;

    const xScore = getX(score);
    const yScore = getY(score);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="#FFFFFF" />

  <!-- Title & Subtitle -->
  <text x="60" y="45" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="900" fill="#07152F">IQ Score Chart</text>
  <text x="60" y="72" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#60718B">Theoretical Normal Distribution (Mean = 100, SD = 15)</text>

  <!-- Status Badge -->
  <rect x="740" y="28" width="200" height="32" rx="16" fill="#EEF2FF" stroke="#2453FF" stroke-width="1.2" />
  <text x="840" y="49" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" fill="#2453FF">IQ ${score} · Percentile ${formatPercentile(pct)}</text>

  <!-- Baseline -->
  <line x1="${padL}" y1="${baseline}" x2="${padL + chartW}" y2="${baseline}" stroke="#CBD5E1" stroke-width="2" />

  <!-- Shaded Area -->
  <path d="${areaPath}" fill="#2453FF" fill-opacity="0.18" />

  <!-- Main Curve -->
  <path d="${curvePath}" fill="none" stroke="#2453FF" stroke-width="3.5" stroke-linecap="round" />

  <!-- Grid Lines at SDs -->
  ${[55, 70, 85, 100, 115, 130, 145]
    .map((sdIq) => {
      const gx = getX(sdIq);
      const isM = sdIq === 100;
      return `<line x1="${gx}" y1="${padT}" x2="${gx}" y2="${baseline}" stroke="${isM ? '#94A3B8' : '#E2EAF7'}" stroke-width="${isM ? '1.8' : '1.2'}" stroke-dasharray="${isM ? 'none' : '4 4'}" />
      <text x="${gx}" y="${baseline + 20}" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="${isM ? '#07152F' : '#475569'}">${sdIq}</text>
      <text x="${gx}" y="${baseline + 36}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="${isM ? '#2453FF' : '#64748B'}">${isM ? 'Mean' : sdIq < 100 ? `${(sdIq - 100) / 15}σ` : `+${(sdIq - 100) / 15}σ`}</text>`;
    })
    .join('\n')}

  <!-- Selected Score Marker -->
  <line x1="${xScore}" y1="${yScore}" x2="${xScore}" y2="${baseline}" stroke="#2453FF" stroke-width="2.5" />
  <circle cx="${xScore}" cy="${yScore}" r="6" fill="#2453FF" stroke="#FFFFFF" stroke-width="2.5" />

  <!-- Tooltip Box -->
  <rect x="${xScore - 60}" y="${Math.max(padT - 10, yScore - 38)}" width="120" height="28" rx="8" fill="#07152F" />
  <text x="${xScore}" y="${Math.max(padT - 10, yScore - 38) + 18}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">IQ ${score} (z=${zStr})</text>

  <!-- Disclaimer Footer -->
  <rect x="${padL}" y="${height - 40}" width="${chartW}" height="28" rx="6" fill="#F8FAFC" />
  <text x="${width / 2}" y="${height - 22}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="500" fill="#64748B">The chart shows a theoretical IQ score distribution (mean 100, SD 15). Official interpretations depend on specific test normative data.</text>
</svg>`;
  };

  // Download SVG file
  const handleDownloadSvg = () => {
    const svgStr = generateExportableSvgString();
    const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `iq-score-chart-${score}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Download PNG file via Canvas
  const handleDownloadPng = () => {
    setExporting(true);
    const svgStr = generateExportableSvgString();
    const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1000 * 2; // High DPI 2x
      canvas.height = 540 * 2;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(2, 2);
        ctx.drawImage(img, 0, 0);
        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = `iq-score-chart-${score}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      URL.revokeObjectURL(url);
      setExporting(false);
    };

    img.src = url;
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-[#E2EAF7] p-5 sm:p-7 shadow-[0_4px_24px_rgba(7,21,47,0.03)] space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-[#07152F] flex items-center gap-2">
            <Download className="w-4 h-4 text-[#2453FF]" />
            <span>Export &amp; Share Chart</span>
          </h2>
          <p className="text-xs text-[#60718B]">
            Save the current visualization as a high-resolution image or copy a direct link.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={handleDownloadSvg}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#07152F] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            title="Download vector SVG"
          >
            <FileCode className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Download SVG</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadPng}
            disabled={exporting}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#07152F] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer disabled:opacity-50"
            title="Download PNG image"
          >
            <FileImage className="w-3.5 h-3.5 text-indigo-600" />
            <span>{exporting ? 'Generating...' : 'Download PNG'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyShareLink}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-[#2453FF] text-white hover:bg-[#1B40DF] shadow-xs'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Chart Link</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Embedded Disclaimer Notice */}
      <div className="p-3 bg-[#F7FAFF] rounded-xl border border-[#E2EAF7] flex items-center justify-between text-xs text-[#60718B]">
        <span>
          Exports include chart title, scale parameters (mean 100, SD 15), selected score, and scientific disclaimer.
        </span>
      </div>
    </div>
  );
};
