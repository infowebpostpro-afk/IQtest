'use client';

import React from 'react';
import { GeometricElement, FigureFrame } from '@/types/abstractAssessment';

interface SvgElementProps {
  element: GeometricElement;
}

export const SvgElementRenderer: React.FC<SvgElementProps> = ({ element }) => {
  const {
    type,
    cx = 50,
    cy = 50,
    r = 10,
    x = 0,
    y = 0,
    width = 20,
    height = 20,
    points = '',
    x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0,
    fill = 'none',
    stroke = '#07152F',
    strokeWidth = 2,
    strokeDasharray,
    rotation = 0,
    opacity = 1,
    children,
  } = element;

  const transform = rotation ? `rotate(${rotation} ${cx || x + width / 2 || 50} ${cy || y + height / 2 || 50})` : undefined;

  switch (type) {
    case 'circle':
      return (
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          opacity={opacity}
          transform={transform}
        />
      );
    case 'rect':
      return (
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={4}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          opacity={opacity}
          transform={transform}
        />
      );
    case 'polygon':
      return (
        <polygon
          points={points}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          opacity={opacity}
          transform={transform}
        />
      );
    case 'line':
      return (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          opacity={opacity}
          transform={transform}
        />
      );
    case 'cross':
      return (
        <g transform={transform} opacity={opacity}>
          <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
        </g>
      );
    case 'dot':
      return <circle cx={cx} cy={cy} r={r || 4} fill={fill === 'none' ? stroke : fill} opacity={opacity} />;
    case 'arrow':
      return (
        <g transform={transform} opacity={opacity}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
          <polygon
            points={`${x2},${y2 - 5} ${x2 + 7},${y2} ${x2},${y2 + 5}`}
            fill={stroke}
            transform={`rotate(${rotation || 0} ${x2} ${y2})`}
          />
        </g>
      );
    case 'group':
      return (
        <g transform={transform} opacity={opacity}>
          {children?.map((child, i) => (
            <SvgElementRenderer key={i} element={child} />
          ))}
        </g>
      );
    default:
      return null;
  }
};

interface FrameBoxProps {
  frame: FigureFrame;
  className?: string;
  showBorder?: boolean;
}

export const FrameBox: React.FC<FrameBoxProps> = ({
  frame,
  className = '',
  showBorder = true,
}) => {
  const viewBox = frame.viewBox || '0 0 100 100';

  if (frame.isTarget) {
    return (
      <div
        className={`w-full aspect-square bg-[#EEF4FF] border-2 border-dashed border-[#2453FF] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center relative shadow-inner ${className}`}
        aria-label="Target Missing Cell to solve"
      >
        <span className="font-heading font-black text-2xl sm:text-3xl text-[#2453FF] animate-pulse">?</span>
        <span className="text-[10px] sm:text-[11px] font-bold text-[#2453FF]/70 tracking-wider uppercase mt-0.5">Missing</span>
      </div>
    );
  }

  return (
    <div
      className={`w-full aspect-square rounded-xl sm:rounded-2xl relative flex items-center justify-center p-1 sm:p-1.5 transition-all ${
        showBorder ? 'bg-white border border-[#E2EAF7] shadow-2xs' : 'bg-transparent'
      } ${className}`}
    >
      <svg viewBox={viewBox} className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle grid reference lines for internal diagram harmony */}
        <line x1="50" y1="5" x2="50" y2="95" stroke="#E2EAF7" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#E2EAF7" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />

        {frame.elements.map((elem, idx) => (
          <SvgElementRenderer key={idx} element={elem} />
        ))}
      </svg>
      {frame.label && (
        <span className="absolute bottom-1 right-1.5 text-[9px] font-bold font-mono text-slate-400 bg-white/80 px-1 rounded">
          {frame.label}
        </span>
      )}
    </div>
  );
};

