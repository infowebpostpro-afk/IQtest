'use client';

import React from 'react';
import { PuzzleDiagramData, FigureFrame } from '@/types/abstractAssessment';
import { FrameBox } from './AbstractSvgPrimitives';
import { ArrowRight } from 'lucide-react';

interface DiagramRendererProps {
  diagram: PuzzleDiagramData;
  className?: string;
}

export const PuzzleDiagramRenderer: React.FC<DiagramRendererProps> = ({
  diagram,
  className = '',
}) => {
  switch (diagram.type) {
    case 'sequence': {
      const { frames } = diagram.data;
      return (
        <div className={`w-full max-w-2xl mx-auto ${className}`}>
          <div className="grid grid-cols-4 gap-2 sm:gap-3.5 items-center">
            {frames.map((frame, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <FrameBox frame={frame} />
                <span className="text-[11px] font-bold text-slate-400 mt-1 sm:mt-1.5 font-mono">
                  {frame.isTarget ? 'Target ?' : `Step ${idx + 1}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'matrix': {
      const { rows, cols, cells } = diagram.data;
      const gridColsClass = cols === 2 ? 'grid-cols-2 max-w-xs' : 'grid-cols-3 max-w-md';

      return (
        <div className={`w-full mx-auto ${gridColsClass} ${className}`}>
          <div className={`grid ${cols === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2 sm:gap-2.5 p-2.5 sm:p-3 bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-[#E2EAF7]`}>
            {cells.map((cell, idx) => (
              <div key={idx} className="aspect-square">
                <FrameBox frame={cell} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'analogy': {
      const { sourceA, targetB, sourceC, targetD } = diagram.data;
      return (
        <div className={`w-full max-w-2xl mx-auto ${className}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-slate-50/70 p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-[#E2EAF7]">
            {/* Pair 1: A -> B */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              <div className="flex flex-col items-center w-24 sm:w-28">
                <FrameBox frame={sourceA} />
                <span className="text-[10px] font-bold text-slate-500 mt-1 font-mono">Figure A</span>
              </div>
              <div className="flex flex-col items-center px-1">
                <ArrowRight className="w-5 h-5 text-[#2453FF]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2453FF]">is to</span>
              </div>
              <div className="flex flex-col items-center w-24 sm:w-28">
                <FrameBox frame={targetB} />
                <span className="text-[10px] font-bold text-slate-500 mt-1 font-mono">Figure B</span>
              </div>
            </div>

            {/* Analogy Separator */}
            <div className="hidden sm:flex flex-col items-center justify-center h-16 border-l border-slate-300/80 px-2">
              <span className="text-xs font-black text-slate-400 font-mono">AS</span>
            </div>
            <div className="sm:hidden w-full border-t border-slate-200 my-1 flex justify-center">
              <span className="bg-slate-50 px-2 text-[10px] font-black text-slate-400 -mt-2">AS</span>
            </div>

            {/* Pair 2: C -> Target */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              <div className="flex flex-col items-center w-24 sm:w-28">
                <FrameBox frame={sourceC} />
                <span className="text-[10px] font-bold text-slate-500 mt-1 font-mono">Figure C</span>
              </div>
              <div className="flex flex-col items-center px-1">
                <ArrowRight className="w-5 h-5 text-[#2453FF]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2453FF]">is to</span>
              </div>
              <div className="flex flex-col items-center w-24 sm:w-28">
                <FrameBox frame={targetD || { isTarget: true, elements: [] }} />
                <span className="text-[10px] font-bold text-[#2453FF] mt-1 font-mono">Target ?</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'odd_one_out': {
      const { figures } = diagram.data;
      return (
        <div className={`w-full max-w-2xl mx-auto ${className}`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
            {figures.map((fig, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <FrameBox frame={fig} />
                <span className="text-[11px] font-bold text-slate-500 mt-1 font-mono">
                  {fig.label || `Option ${String.fromCharCode(65 + idx)}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
};

