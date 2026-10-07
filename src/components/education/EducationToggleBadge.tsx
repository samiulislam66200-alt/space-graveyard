'use client';

import { useEducation } from '../../context/EducationContext';
import { GraduationCap, ToggleLeft, ToggleRight } from 'lucide-react';

export default function EducationToggleBadge() {
  const { isEducationMode, toggleEducationMode } = useEducation();

  return (
    <button
      onClick={toggleEducationMode}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs transition-all border ${
        isEducationMode
          ? 'bg-amber-500/20 text-amber-400 border-amber-500/50 shadow-md'
          : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-slate-200'
      }`}
      title="Toggle Education Mode for simple science explainers and curiosity facts"
    >
      <GraduationCap className="w-3.5 h-3.5" />
      <span className="font-semibold uppercase tracking-wider hidden sm:inline">
        Education: {isEducationMode ? 'ON' : 'OFF'}
      </span>
      {isEducationMode ? (
        <ToggleRight className="w-4 h-4 text-amber-400" />
      ) : (
        <ToggleLeft className="w-4 h-4 text-slate-500" />
      )}
    </button>
  );
}
