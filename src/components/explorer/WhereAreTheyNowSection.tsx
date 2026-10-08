'use client';

import Link from 'next/link';
import { MapPin, Navigation, ArrowRight, ExternalLink } from 'lucide-react';
import { ALL_MISSIONS } from '../../data/missions';

export default function WhereAreTheyNowSection() {
  return (
    <section className="bg-[#0b101d] border border-space-border/80 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-space-border/60 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold uppercase">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Extraterrestrial Physical Inventory</span>
          </div>

          <h2 className="font-mono text-2xl sm:text-4xl font-extrabold uppercase text-slate-100 tracking-tight">
            Where Are They Now?
          </h2>

          <p className="text-slate-300 font-sans text-xs sm:text-sm max-w-2xl leading-relaxed">
            Concise factual summary of current resting locations and hardware preserve status on lunar and martian soil.
          </p>
        </div>

        <Link
          href="/explorer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold uppercase hover:bg-slate-800 transition-colors w-fit"
        >
          <Navigation className="w-4 h-4 text-cyan-400" />
          <span>View Surface Map</span>
        </Link>
      </div>

      {/* Grid of 6 Missions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-xs">
        {ALL_MISSIONS.map((mission) => {
          const loc = mission.finalLastKnownLocation || mission.landingLocation;
          const isMoon = mission.destination === 'Moon';

          return (
            <div
              key={mission.id}
              className="bg-slate-950 border border-space-border/80 rounded-xl p-5 space-y-3 hover:border-amber-500/50 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className={`px-2 py-0.5 rounded font-bold uppercase border ${
                    isMoon ? 'bg-slate-900 text-slate-200 border-slate-700' : 'bg-rose-950 text-rose-300 border-rose-800'
                  }`}>
                    {mission.destination}
                  </span>

                  <span className="text-cyan-400 font-bold uppercase">
                    {mission.hardwareType}
                  </span>
                </div>

                <h3 className="font-mono text-base font-bold text-slate-100">
                  {mission.missionName}
                </h3>

                <div className="p-3 bg-[#0b101d] rounded border border-space-border/60 space-y-1 font-mono text-[11px]">
                  <div className="text-amber-400 font-bold uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Resting Location:</span>
                  </div>
                  <div className="text-slate-100 font-bold">{loc.regionName}</div>
                  {loc.featureName && <div className="text-slate-400 text-[10px]">{loc.featureName}</div>}
                  <div className="text-cyan-400 font-mono text-[10px] pt-1">
                    Coords: {loc.latitude.toFixed(5)}°, {loc.longitude.toFixed(5)}°
                  </div>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed pt-1">
                  {mission.silenceCauseDetails?.value || mission.missionEndReason?.value}
                </p>
              </div>

              <div className="pt-3 border-t border-space-border/40 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-400 font-bold uppercase">{mission.currentStatus}</span>

                <Link
                  href={`/mission/${mission.id}`}
                  className="text-amber-400 hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
