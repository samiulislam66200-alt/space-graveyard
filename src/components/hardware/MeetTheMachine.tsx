'use client';

import { useState } from 'react';
import { MissionData } from '../../types/mission';
import { Cpu, Zap, Scale } from 'lucide-react';

interface MeetTheMachineProps {
  mission: MissionData;
}

export default function MeetTheMachine({ mission }: MeetTheMachineProps) {
  const [activeTab, setActiveTab] = useState<'subsystems' | 'instruments' | 'specs'>('subsystems');

  const components = mission.components || [];
  const instruments = mission.instruments || [];

  return (
    <div className="bg-[#0b101d] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Title */}
      <div className="space-y-2 border-b border-space-border/60 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-700/50 text-cyan-400 font-mono text-xs font-bold uppercase">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>INTERACTIVE HARDWARE SCHEMATIC</span>
        </div>

        <h3 className="font-mono text-2xl font-extrabold uppercase text-slate-100">
          Meet the Machine: {mission.missionName}
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
          {mission.hardwareDescription.value}
        </p>
      </div>

      {/* Subsystem Tabs */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        <button
          onClick={() => setActiveTab('subsystems')}
          className={`px-4 py-2 rounded-lg font-bold uppercase transition-all ${
            activeTab === 'subsystems'
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/60 shadow-lg'
              : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-space-border/60'
          }`}
        >
          Subsystems ({components.length})
        </button>

        <button
          onClick={() => setActiveTab('instruments')}
          className={`px-4 py-2 rounded-lg font-bold uppercase transition-all ${
            activeTab === 'instruments'
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/60 shadow-lg'
              : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-space-border/60'
          }`}
        >
          Scientific Instruments ({instruments.length})
        </button>

        <button
          onClick={() => setActiveTab('specs')}
          className={`px-4 py-2 rounded-lg font-bold uppercase transition-all ${
            activeTab === 'specs'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/60 shadow-lg'
              : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-space-border/60'
          }`}
        >
          Power &amp; Mass Specs
        </button>
      </div>

      {/* Tab 1: Subsystems */}
      {activeTab === 'subsystems' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {components.map((comp, idx) => (
            <div key={idx} className="bg-slate-950 border border-space-border/80 rounded-xl p-5 space-y-2 font-mono text-xs">
              <div className="text-amber-400 font-bold text-sm flex items-center justify-between">
                <span>{comp.name}</span>
                <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700 uppercase">Subsystem</span>
              </div>
              <p className="text-slate-300 font-sans text-xs leading-relaxed">
                {comp.description}
              </p>
              <div className="text-cyan-300 pt-1">
                Role: <span className="text-slate-200 font-sans">{comp.role}</span>
              </div>
              {comp.materialComposition && (
                <div className="text-slate-400 text-[11px] pt-0.5">
                  Materials: <span className="text-slate-300">{comp.materialComposition}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Scientific Instruments */}
      {activeTab === 'instruments' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {instruments.map((inst, idx) => (
            <div key={idx} className="bg-slate-950 border border-amber-500/30 rounded-xl p-5 space-y-2 font-mono text-xs">
              <div className="text-amber-400 font-bold text-sm flex items-center justify-between">
                <span>{inst.name} {inst.acronym ? `(${inst.acronym})` : ''}</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 uppercase">
                  {inst.statusAtMissionEnd}
                </span>
              </div>
              <p className="text-slate-300 font-sans text-xs leading-relaxed">
                {inst.description}
              </p>
              <div className="text-cyan-300 pt-1">
                Scientific Purpose: <span className="text-slate-200 font-sans">{inst.scientificPurpose}</span>
              </div>
              <div className="text-slate-400 text-[11px] pt-0.5">
                Measured: <span className="text-slate-300">{inst.whatItMeasured}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Power & Mass Specs */}
      {activeTab === 'specs' && (
        <div className="bg-slate-950 border border-space-border/80 rounded-xl p-6 space-y-4 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#0b101d] rounded border border-space-border/60 space-y-1">
              <div className="text-slate-400 uppercase text-[10px] flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>POWER SOURCE SUBSYSTEM</span>
              </div>
              <div className="text-slate-100 font-bold text-sm">{mission.powerSource.value}</div>
              <div className="text-slate-400 text-[11px] font-sans pt-1">Source: {mission.powerSource.attribution}</div>
            </div>

            <div className="p-4 bg-[#0b101d] rounded border border-space-border/60 space-y-1">
              <div className="text-slate-400 uppercase text-[10px] flex items-center gap-1">
                <Scale className="w-3.5 h-3.5 text-cyan-400" />
                <span>MASS &amp; DIMENSIONS</span>
              </div>
              <div className="text-slate-100 font-bold text-sm">
                {mission.massKg?.value.landingMassKg ? `${mission.massKg.value.landingMassKg} kg (Landing Mass)` : 'Data unavailable'}
              </div>
              <div className="text-slate-400 text-[11px] font-sans pt-1">Launch Mass: {mission.massKg?.value.launchMassKg ? `${mission.massKg.value.launchMassKg} kg` : 'Data unavailable'}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
