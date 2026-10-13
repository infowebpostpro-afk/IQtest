'use client';

import React, { useEffect, useState } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { AssessmentMode } from '@/types/assessment';

interface TimerDisplayProps {
  mode: AssessmentMode;
  startTime: number;
  durationSeconds?: number;
  onExpire?: () => void;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({
  mode,
  startTime,
  durationSeconds = 15 * 60, // 15 mins
  onExpire,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(durationSeconds);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  useEffect(() => {
    const updateTimer = () => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      setElapsedSeconds(elapsed);

      if (mode === 'timed_15') {
        const remaining = Math.max(0, durationSeconds - elapsed);
        setSecondsRemaining(remaining);
        if (remaining <= 0 && onExpire) {
          onExpire();
        }
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [mode, startTime, durationSeconds, onExpire]);

  const formatTime = (totalSecs: number) => {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (mode === 'untimed') {
    return (
      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-md">
        <Clock className="w-3.5 h-3.5" />
        <span>Elapsed: {formatTime(elapsedSeconds)}</span>
      </div>
    );
  }

  const isLowTime = secondsRemaining <= 120; // 2 minutes left

  return (
    <div
      className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md transition-colors ${
        isLowTime
          ? 'bg-red-50 text-red-600 border border-red-200 animate-pulse'
          : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
      }`}
      aria-label={`Time remaining: ${formatTime(secondsRemaining)}`}
    >
      {isLowTime ? (
        <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
      ) : (
        <Clock className="w-3.5 h-3.5 text-indigo-600" />
      )}
      <span>{formatTime(secondsRemaining)} remaining</span>
    </div>
  );
};
