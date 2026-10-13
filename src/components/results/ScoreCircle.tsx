'use client';

import React from 'react';

interface ScoreCircleProps {
  score: number;
  total: number;
  percentage: number;
}

export const ScoreCircle: React.FC<ScoreCircleProps> = ({
  score,
  total,
  percentage,
}) => {
  const radius = 70;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90 transform"
        aria-hidden="true"
      >
        {/* Background Track */}
        <circle
          stroke="#E2E8F0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress Stroke */}
        <circle
          stroke="#5546F5"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      {/* Inner Label */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-extrabold text-[#0B1220] leading-none">
          {score}
          <span className="text-base font-semibold text-slate-400">/{total}</span>
        </span>
        <span className="text-xs font-bold text-[#5546F5] mt-1">
          {percentage}% Accuracy
        </span>
      </div>
    </div>
  );
};
