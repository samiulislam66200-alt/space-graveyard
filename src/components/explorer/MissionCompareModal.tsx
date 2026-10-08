'use client';

import { useState } from 'react';
import { ALL_MISSIONS } from '../../data/missions';
import { MissionData } from '../../types/mission';
import { Scale, X, Check, ArrowRight, ShieldCheck, MapPin, Calendar } from 'lucide-react';

interface MissionCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMissionId?: string;
}

export default function MissionCompareModal({ isOpen, onClose, initialMissionId }: MissionCompareModalProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    initialMissionId ? [initialMissionId, ALL_MISSIONS.find((m) => m.id !== initialMissionId)?.id || ALL_MISSIONS[1].id] : ['opportunity-rover', 'insight-lander', 'apollo-11-eagle']
  );

  if (!isOpen) return null;

  const toggleMission = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 2) {
        setSelectedIds(selectedIds.filter((mId) => mId !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        setSelectedIds([...selectedIds.slice(1), id]);
      }
    }
  };

  const comparedMissions = selectedIds
    .map((id) => ALL_MISSIONS.find((m) => m.id === id))
    .filter(Boolean) as MissionData[];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0b101d] border border-amber-500/40 rounded-2xl max-w-5xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-space-border/60 pb-4 font-mono">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase">
              <Scale className="w-3.5 h-3.5 text-amber-400" />
              <span>COMPARE MISSIONS SIDE-BY-SIDE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase text-slate-100">
              Hardware Matrix Comparison
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-space-border/60 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mission Selector Chips */}
        <div className="space-y-2 font-mono text-xs">
          <div className="text-slate-400 uppercase font-bold text-[10px]">
            Select 2 or 3 Missions to Compare (Click to toggle):
          </div>

          <div className="flex flex-wrap gap-2">
            {ALL_MISSIONS.map((m) => {
              const isSel = selectedIds.includes(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => toggleMission(m.id)}
                  className={`px-3 py-1.5 rounded-lg border font-bold uppercase transition-all flex items-center gap-1.5 ${
                    isSel
                      ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-lg'
                      : 'bg-slate-950 border-space-border/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isSel && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{m.missionName.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Side-by-Side Comparison Grid Table */}
        <div className="overflow-x-auto border border-space-border/60 rounded-xl bg-slate-950">
          <table className="w-full text-left font-mono text-xs text-slate-300 divide-y divide-space-border/40">
            <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="p-4 w-1/4">Telemetry Metric</th>
                {comparedMissions.map((m) => (
                  <th key={m.id} className="p-4 text-amber-400 font-bold border-l border-space-border/40">
                    {m.missionName}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-space-border/40">
              <tr>
                <td className="p-4 font-bold text-slate-400 uppercase text-[10px]">Destination</td>
                {comparedMissions.map((m) => (
                  <td key={m.id} className="p-4 border-l border-space-border/40 font-bold text-slate-100">
                    {m.destination}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-400 uppercase text-[10px]">Hardware Type</td>
                {comparedMissions.map((m) => (
                  <td key={m.id} className="p-4 border-l border-space-border/40 text-cyan-300">
                    {m.hardwareType}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-400 uppercase text-[10px]">Landing Date</td>
                {comparedMissions.map((m) => (
                  <td key={m.id} className="p-4 border-l border-space-border/40 font-sans">
                    {m.arrivalLandingDate.value}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-400 uppercase text-[10px]">Operational Duration</td>
                {comparedMissions.map((m) => (
                  <td key={m.id} className="p-4 border-l border-space-border/40 font-bold text-amber-400">
                    {m.missionDurationDays.value} {m.destination === 'Moon' ? 'Days' : 'Sols'}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-400 uppercase text-[10px]">Distance Traveled</td>
                {comparedMissions.map((m) => (
                  <td key={m.id} className="p-4 border-l border-space-border/40">
                    {m.distanceTraveledKm?.value ? `${m.distanceTraveledKm.value} km` : 'Stationary'}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-400 uppercase text-[10px]">Primary Location</td>
                {comparedMissions.map((m) => (
                  <td key={m.id} className="p-4 border-l border-space-border/40 text-[11px] font-sans">
                    {m.landingLocation.regionName} ({m.landingLocation.latitude.toFixed(4)}°, {m.landingLocation.longitude.toFixed(4)}°)
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-400 uppercase text-[10px]">Primary Science Instrument</td>
                {comparedMissions.map((m) => (
                  <td key={m.id} className="p-4 border-l border-space-border/40 text-[11px] font-sans">
                    {m.instruments[0]?.name || 'N/A'}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-400 uppercase text-[10px]">Last Signal Date</td>
                {comparedMissions.map((m) => (
                  <td key={m.id} className="p-4 border-l border-space-border/40 text-rose-400 font-bold">
                    {m.lastCommunicationDate?.value || 'Data unavailable'}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-400 uppercase text-[10px]">Cause of Silence</td>
                {comparedMissions.map((m) => (
                  <td key={m.id} className="p-4 border-l border-space-border/40 text-[11px] font-sans leading-relaxed text-slate-300">
                    {m.silenceCauseDetails?.value || m.missionEndReason?.value}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-space-border/40 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1 text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
            NASA-Sourced Comparative Matrix
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold uppercase hover:bg-amber-400 transition-colors"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  );
}
