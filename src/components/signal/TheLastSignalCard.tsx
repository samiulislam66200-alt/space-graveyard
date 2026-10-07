import { MissionData } from '../../types/mission';
import { Radio, Calendar, Activity, ShieldCheck, MapPin, Award } from 'lucide-react';

interface TheLastSignalCardProps {
  mission: MissionData;
}

export default function TheLastSignalCard({ mission }: TheLastSignalCardProps) {
  const lastSignal = mission.lastSignal;
  const finalLoc = lastSignal?.finalLocation || mission.finalLastKnownLocation || mission.landingLocation;

  return (
    <div className="bg-[#0b101d] border border-space-border/80 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-space-border/60 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase">
            <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>The Last Signal Signature Registry</span>
          </div>

          <h2 className="font-mono text-2xl sm:text-4xl font-extrabold uppercase text-slate-100 tracking-tight">
            {mission.missionName}
          </h2>

          <div className="text-slate-400 font-mono text-xs">
            Destination: <span className="text-slate-200 font-bold">{mission.destination}</span> — Hardware Type: <span className="text-slate-200 font-bold">{mission.hardwareType}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="bg-slate-950 p-3 rounded-xl border border-space-border/80 font-mono text-xs space-y-1 text-right sm:text-right">
          <div className="text-slate-400 text-[10px] uppercase">Telemetry Status</div>
          <div className="text-rose-400 font-bold uppercase flex items-center justify-end gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>{mission.currentStatus}</span>
          </div>
        </div>
      </div>

      {/* 7-Point Storytelling Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
        {/* 1. Last Known Communication */}
        <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-5 space-y-2">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>1. Last Known Communication</span>
          </div>
          <div className="font-mono text-lg font-bold text-slate-100">
            {lastSignal?.lastCommDate || mission.lastCommunicationDate?.value || 'Data unavailable'}
          </div>
          <div className="text-xs text-slate-400 font-mono">
            {mission.lastCommunicationDate?.attribution || 'Official NASA Mission Telemetry'}
          </div>
        </div>

        {/* 2. Last Known Activity */}
        <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-5 space-y-2">
          <div className="font-mono text-xs text-cyan-400 font-bold uppercase flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>2. Last Known Activity</span>
          </div>
          <p className="text-xs text-slate-200 font-sans leading-relaxed">
            {lastSignal?.lastActivity || mission.missionObjective?.value || 'Data unavailable'}
          </p>
        </div>

        {/* 3. Final Mission Event */}
        <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-5 space-y-2">
          <div className="font-mono text-xs text-emerald-400 font-bold uppercase flex items-center gap-2">
            <Radio className="w-4 h-4 text-emerald-400" />
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
            Empirical Physical Cause (NASA Archival Engineering Statement)
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
            <Award className="w-4 h-4 text-amber-400" />
            <span>6. Scientific Legacy</span>
          </div>
          <p className="text-xs text-slate-200 font-sans leading-relaxed">
            {lastSignal?.scientificLegacySummary || mission.scientificLegacy?.value}
          </p>
        </div>
      </div>

      {/* 7. Where Hardware Remains */}
      <div className="p-4 bg-slate-950 border border-space-border/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="space-y-1">
          <div className="text-amber-400 font-bold uppercase">7. Where Hardware Believed / Known to Remain</div>
          <div className="text-slate-300 font-sans text-xs">
            Preserved at <span className="font-mono font-bold text-slate-100">{finalLoc.regionName}</span> ({mission.destination}) as an undisturbed archaeological milestone of human planetary exploration.
          </div>
        </div>

        <a
          href={finalLoc.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-slate-900 border border-amber-500/40 text-amber-400 hover:bg-slate-800 transition-colors font-bold uppercase text-[11px] whitespace-nowrap shrink-0 text-center"
        >
          NASA Citation
        </a>
      </div>
    </div>
  );
}
