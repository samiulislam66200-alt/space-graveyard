'use client';

import { MissionData } from '../../types/mission';
import { Calendar, Radio, ShieldAlert, Award, ExternalLink } from 'lucide-react';

interface FinalSilenceTimelineProps {
  mission: MissionData;
}

export default function FinalSilenceTimeline({ mission }: FinalSilenceTimelineProps) {
  // Sort timeline events chronologically
  const events = [...mission.timeline].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase font-semibold">
          <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Cinematic Timeline</span>
        </div>
        <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase text-slate-100">
          Chronology to Silence: {mission.missionName}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-2xl">
          Empirical timeline from launch to the final silence event.
        </p>
      </div>

      <div className="relative border-l-2 border-space-border/80 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8 py-4">
        {events.map((evt, idx) => {
          const isFinal = evt.category === 'Last Signal' || evt.category === 'Mission End';
          const isLaunch = evt.category === 'Launch' || evt.category === 'Arrival';

          return (
            <div key={evt.id || idx} className="relative group">
              {/* Dot Icon */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-mono font-bold ${
                isFinal 
                  ? 'bg-rose-950 text-rose-400 border-rose-600 ring-4 ring-rose-950/60' 
                  : isLaunch 
                    ? 'bg-cyan-950 text-cyan-400 border-cyan-600'
                    : 'bg-slate-900 text-amber-400 border-amber-600/60'
              }`}>
                {idx + 1}
              </div>

              {/* Event Content Card */}
              <div className={`bg-[#0b101d] border rounded-xl p-5 space-y-2 transition-colors ${
                isFinal ? 'border-rose-900/60 bg-rose-950/10' : 'border-space-border/80 hover:border-slate-700'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {evt.date}
                  </span>

                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold border ${
                    isFinal 
                      ? 'bg-rose-950 text-rose-400 border-rose-800' 
                      : 'bg-slate-900 text-slate-300 border-slate-700'
                  }`}>
                    {evt.category}
                  </span>
                </div>

                <h4 className="font-mono text-base font-bold text-slate-100">
                  {evt.title}
                </h4>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {evt.description}
                </p>

                {evt.nasaRefUrl && (
                  <div className="pt-2 text-[11px] font-mono">
                    <a
                      href={evt.nasaRefUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-400 hover:underline"
                    >
                      <span>NASA Event Reference</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
