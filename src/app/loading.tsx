import { Activity } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 space-y-4 text-center font-mono">
      <div className="w-16 h-16 rounded-full bg-slate-900 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-xl">
        <Activity className="w-8 h-8 animate-pulse" />
      </div>

      <div className="space-y-1">
        <div className="text-amber-400 font-bold tracking-widest text-sm uppercase">
          NASA DSN Telemetry Stream Ingesting...
        </div>
        <div className="text-slate-400 text-xs">
          FETCHING PLANETARY COORDINATES &amp; ARCHIVAL INSTRUMENT RECORDS
        </div>
      </div>

      <div className="w-48 h-1 bg-slate-900 rounded-full overflow-hidden border border-space-border/60">
        <div className="w-full h-full bg-amber-500 animate-pulse" />
      </div>
    </div>
  );
}
