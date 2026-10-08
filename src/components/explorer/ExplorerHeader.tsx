'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Compass, ShieldCheck, Scale, GraduationCap, MapPin } from 'lucide-react';
import { ALL_MISSIONS } from '../../data/missions';
import MissionCompareModal from './MissionCompareModal';

export default function ExplorerHeader() {
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const totalCount = ALL_MISSIONS.length;
  const moonCount = ALL_MISSIONS.filter((m) => m.destination === 'Moon').length;
  const marsCount = ALL_MISSIONS.filter((m) => m.destination === 'Mars').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-space-border/60 pb-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>NASA Mission Registry</span>
            </div>

            <Link
              href="/education"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-300 font-mono text-xs uppercase font-bold hover:bg-amber-900 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Learn Mode Hub</span>
            </Link>
          </div>

          <h1 className="font-mono text-3xl sm:text-5xl font-bold uppercase text-slate-100 tracking-tight">
            Mission Explorer
          </h1>

          <p className="text-slate-400 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
            Browse and search archival NASA hardware left behind on lunar and martian soil. All dates, coordinates, and scientific purposes are sourced from official NASA and PDS records.
          </p>
        </div>

        {/* Action Controls & HUD Chips */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <button
            onClick={() => setIsCompareOpen(true)}
            className="px-4 py-2.5 rounded-lg bg-slate-900 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg"
          >
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Compare Missions</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <div className="px-3 py-2 rounded bg-[#0b101d] border border-space-border/80 flex items-center gap-2">
              <span className="text-slate-400">TOTAL RECORDED:</span>
              <span className="text-amber-400 font-bold">{totalCount}</span>
            </div>

            <div className="px-3 py-2 rounded bg-[#0b101d] border border-space-border/80 flex items-center gap-2">
              <span className="text-slate-400">MOON:</span>
              <span className="text-slate-200 font-bold">{moonCount}</span>
            </div>

            <div className="px-3 py-2 rounded bg-[#0b101d] border border-space-border/80 flex items-center gap-2">
              <span className="text-slate-400">MARS:</span>
              <span className="text-rose-400 font-bold">{marsCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Modal */}
      <MissionCompareModal isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />
    </div>
  );
}
