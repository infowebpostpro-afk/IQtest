'use client';

import React from 'react';
import { SpatialScene, SvgElementData } from '@/lib/spatial/types';

interface SvgElementProps {
  element: SvgElementData;
}

const RenderSvgElement: React.FC<SvgElementProps> = ({ element }) => {
  const {
    type,
    x,
    y,
    width,
    height,
    cx,
    cy,
    r,
    points,
    d,
    x1,
    y1,
    x2,
    y2,
    fill,
    stroke,
    strokeWidth,
    strokeDasharray,
    transform,
    opacity,
    text,
    fontSize,
    fontWeight,
    textAnchor,
    children,
  } = element;

  switch (type) {
    case 'rect':
      return (
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={element.x ? 6 : undefined}
          fill={fill || 'none'}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          transform={transform}
          opacity={opacity}
        />
      );
    case 'circle':
      return (
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill={fill || 'none'}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          transform={transform}
          opacity={opacity}
        />
      );
    case 'polygon':
      return (
        <polygon
          points={points}
          fill={fill || 'none'}
          stroke={stroke}
          strokeWidth={strokeWidth}
          transform={transform}
          opacity={opacity}
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
          transform={transform}
          opacity={opacity}
        />
      );
    case 'path':
      return (
        <path
          d={d}
          fill={fill || 'none'}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          transform={transform}
          opacity={opacity}
        />
      );
    case 'text':
      return (
        <text
          x={x}
          y={y}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={fill || '#07152F'}
          textAnchor={textAnchor || 'start'}
          transform={transform}
          opacity={opacity}
          className="select-none font-sans"
        >
          {text}
        </text>
      );
    case 'g':
      return (
        <g transform={transform} opacity={opacity}>
          {children?.map((child, idx) => (
            <RenderSvgElement key={idx} element={child} />
          ))}
        </g>
      );
    default:
      return null;
  }
};

interface SpatialSvgRendererProps {
  scene: SpatialScene;
  className?: string;
  maxHeight?: string;
}

export const SpatialSvgRenderer: React.FC<SpatialSvgRendererProps> = ({
  scene,
  className = '',
  maxHeight = '240px',
}) => {
  return (
    <div
      className={`relative flex items-center justify-center w-full overflow-hidden select-none ${className}`}
      style={{ maxHeight }}
    >
      <svg
        viewBox={scene.viewBox}
        className="w-full h-full max-h-full object-contain"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={scene.description}
      >
        {scene.elements.map((el, idx) => (
          <RenderSvgElement key={idx} element={el} />
        ))}
      </svg>
    </div>
  );
};

