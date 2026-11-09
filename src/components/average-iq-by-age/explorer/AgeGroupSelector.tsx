'use client';

import React from 'react';
import { Users, Info } from 'lucide-react';
import { AGE_GROUPS } from '@/lib/ageNormExplorer/math';

interface AgeGroupSelectorProps {
  selectedId: string;
  onChange: (id: string) => void;
  label?: string;
  idPrefix?: string;
}

export const AgeGroupSelector: React.FC<AgeGroupSelectorProps> = ({
  selectedId,
  onChange,
  label = 'Select Age Group',
  idPrefix = 'primary',
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={`${idPrefix}-age-select`}
          className="text-xs font-bold text-[#07152F] uppercase tracking-wider flex items-center gap-1.5"
        >
          <Users className="w-3.5 h-3.5 text-[#2453FF]" />
          <span>{label}</span>
        </label>
        <span className="text-[11px] text-[#60718B] font-medium hidden sm:inline">
          Educational age reference band
        </span>
      </div>

      {/* Desktop & Tablet: Segmented control */}
      <div className="hidden sm:grid grid-cols-5 gap-1.5 p-1 bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7]">
        {AGE_GROUPS.map((group) => {
          const isSelected = group.id === selectedId;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => onChange(group.id)}
              className={`py-2 px-2 rounded-xl text-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] ${
                isSelected
                  ? 'bg-white text-[#2453FF] font-extrabold shadow-xs border border-[#2453FF]/20 ring-1 ring-[#2453FF]/15'
                  : 'text-[#60718B] hover:text-[#07152F] hover:bg-white/60 font-semibold'
              }`}
            >
              <span className="block text-xs leading-tight">{group.name}</span>
              <span className="block text-[10px] font-mono opacity-80 mt-0.5">
                {group.ageRange}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile: Compact dropdown */}
      <div className="sm:hidden">
        <select
          id={`${idPrefix}-age-select`}
          value={selectedId}
          onChange={(e) => onChange(e.target.value)}
          className="w-full py-2.5 px-3 bg-white border border-[#E2EAF7] rounded-xl text-xs font-bold text-[#07152F] shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#2453FF]"
        >
          {AGE_GROUPS.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name} (Ages {group.ageRange})
            </option>
          ))}
        </select>
      </div>

      <p className="text-[11px] text-[#60718B] leading-relaxed flex items-start gap-1 pt-0.5">
        <Info className="w-3.5 h-3.5 text-[#2453FF] shrink-0 mt-0.5" />
        <span>Actual standardized tests use their own age ranges and normative intervals.</span>
      </p>
    </div>
  );
};

