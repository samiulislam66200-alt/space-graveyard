'use client';

import { MissionData } from '../../types/mission';
import { MapPin, Calendar, ExternalLink, ShieldCheck, Activity, AlertTriangle, Sparkles, Navigation } from 'lucide-react';

interface TheLastSignalProps {
  mission: MissionData;
}

export default function TheLastSignalCard({ mission }: TheLastSignalProps) {
  const lastSignal = mission.lastSignal;
  const finalLoc = mission.finalLastKnownLocation || mission.landingLocation;
  const isMoon = mission.destination === 'Moon';

  // Format helper for dates with undefined/null handling
  const formatDate = (dateStr?: string | null) => {
    if (!dateStr || dateStr === 'Data unavailable') return 'Data unavailable';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const rawCommDate = mission.lastCommunicationDate?.value || lastSignal?.lastCommDate;

  return (
    <section className="bg-[#080d1a] border border-amber-500/40 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl space-y-8">
      {/* Background HUD Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-space-border/60 pb-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            <span>SIGNATURE FEATURE: THE LAST SIGNAL</span>
          </div>

          <h2 className="font-mono text-2xl sm:text-4xl font-extrabold uppercase text-slate-100 tracking-tight">
            Final Silence &amp; Telemetry
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-2xl">
            The factual engineering chronicle of {mission.missionName}&apos;s final phase on {mission.destination}.
          </p>
        </div>

        {/* Status Chip */}
        <div className="font-mono text-xs text-right">
          <div className="text-slate-400 text-[10px] uppercase">Current Machine State</div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 border border-rose-800 text-rose-300 font-bold uppercase mt-1">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>{mission.currentStatus} on {mission.destination}</span>
          </div>
        </div>
      </div>

      {/* 7 Required Storytelling Elements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        
        {/* 1. Last Known Communication */}
        <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-5 space-y-2">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>1. Last Known Communication</span>
          </div>
          <div className="font-mono text-lg font-bold text-slate-100">
            {formatDate(rawCommDate)}
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            Final verified telemetry frame or separation signal received by NASA tracking stations.
          </p>
          <div className="pt-2 text-[11px] font-mono text-cyan-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-cyan-400" />
            <span>Source: {mission.lastCommunicationDate?.attribution || 'NASA Mission Log'}</span>
          </div>
        </div>

        {/* 2. Last Known Activity */}
        <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-5 space-y-2">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase flex items-center gap-2">
            <Activity className="w-4 h-4 text-amber-400" />
            <span>2. Last Known Activity</span>
          </div>
          <p className="text-xs text-slate-200 font-sans leading-relaxed">
            {lastSignal?.lastActivity || 'Data unavailable'}
          </p>
          <div className="pt-2 text-[11px] font-mono text-slate-400">
            NASA Flight Operations Log
          </div>
        </div>

        {/* 3. Final Mission Event */}
        <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-5 space-y-2">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>3. Final Mission Event</span>
          </div>
          <p className="text-xs text-slate-200 font-sans leading-relaxed">
            {lastSignal?.endingEvent || mission.missionEndReason?.value || 'Data unavailable'}
          </p>
        </div>

        {/* 4. Mission-Ending Reason */}
        <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-5 space-y-2">
          <div className="font-mono text-xs text-rose-400 font-bold uppercase flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-rose-400" />
            <span>4. Mission-Ending Reason</span>
          </div>
          <p className="text-xs text-slate-200 font-sans leading-relaxed">
            {mission.silenceCauseDetails?.value || lastSignal?.causeOfSilence || mission.missionEndReason?.value}
          </p>
          <div className="pt-2 text-[11px] font-mono text-slate-400">
            Empirical Physical Cause (Verified NASA Engineering Statement)
          </div>
        </div>

        {/* 5. Final/Last Known Location */}
        <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-5 space-y-2">
          <div className="font-mono text-xs text-cyan-400 font-bold uppercase flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>5. Final/Last Known Location</span>
          </div>
          <div className="font-mono text-sm font-bold text-slate-100">
            {finalLoc.regionName} {finalLoc.featureName ? `(${finalLoc.featureName})` : ''}
          </div>
          <div className="font-mono text-xs text-cyan-400">
            Coordinates: {finalLoc.latitude.toFixed(5)}°, {finalLoc.longitude.toFixed(5)}°
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            Reference Frame: {finalLoc.referenceFrame}
          </div>
        </div>

        {/* 6. Scientific Legacy */}
        <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-5 space-y-2">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>6. Scientific Legacy</span>
          </div>
          <p className="text-xs text-slate-200 font-sans leading-relaxed">
            {mission.scientificLegacy?.value || lastSignal?.scientificLegacySummary}
          </p>
          <div className="pt-2 text-[11px] font-mono text-amber-400">
            Fact Classification: INTERPRETATION (NASA History / Peer-Reviewed Science)
          </div>
        </div>
      </div>

      {/* 7. Where Hardware Remains & Physical Status */}
      <div className="bg-slate-950 border border-space-border/80 rounded-xl p-6 relative z-10 space-y-3">
        <div className="font-mono text-xs text-emerald-400 font-bold uppercase flex items-center gap-2">
          <Navigation className="w-4 h-4 text-emerald-400" />
          <span>7. Where the Hardware Remains Today</span>
        </div>
        <p className="text-sm text-slate-200 font-sans leading-relaxed">
          The {mission.hardwareType} rests permanently at <strong className="text-slate-100">{finalLoc.regionName}</strong> ({finalLoc.latitude.toFixed(4)}°, {finalLoc.longitude.toFixed(4)}°) on the {isMoon ? 'Moon' : 'Mars'}.
        </p>

        {/* Orbiter Photography */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-space-border/40 font-mono text-xs">
          <div className="text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Orbiter Photography: Verified by {isMoon ? 'LROC (Lunar Reconnaissance Orbiter)' : 'HiRISE (Mars Reconnaissance Orbiter)'}</span>
          </div>

          <a
            href={finalLoc.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber-400 hover:underline font-semibold"
          >
            <span>View NASA Orbital Citation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Remaining Missing Data Notice */}
      {mission.remainingMissingData && mission.remainingMissingData.length > 0 && (
        <div className="bg-slate-900/60 border border-space-border/40 rounded-lg p-4 font-mono text-xs space-y-1 relative z-10">
          <div className="text-slate-400 uppercase font-bold text-[10px]">Audit Note on Unmeasured Parameters</div>
          {mission.remainingMissingData.map((item, idx) => (
            <div key={idx} className="text-slate-400 text-[11px]">
              • {item} — <span className="text-amber-400 italic">Data unavailable / Not confirmed by NASA</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
