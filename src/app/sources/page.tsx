import { ALL_MISSIONS } from '../../data/missions';
import MissionSourcesCard from '../../components/sources/MissionSourcesCard';
import { FileText, ShieldCheck, Database, Image as ImageIcon, Globe, BookOpen } from 'lucide-react';

export default function SourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-space-border/60 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider">
          <FileText className="w-4 h-4 text-amber-400" />
          <span>ACADEMIC CREDIBILITY &amp; TRANSPARENCY</span>
        </div>

        <h1 className="font-mono text-3xl sm:text-5xl font-extrabold uppercase text-slate-100 tracking-tight">
          Sources, Citations &amp; Credits
        </h1>

        <p className="text-slate-300 font-sans text-sm sm:text-base max-w-3xl leading-relaxed">
          Every factual claim, planetary coordinate, hardware dimension, and telemetry event across SPACE GRAVEYARD is traceable directly to verified NASA, JPL, and Planetary Data System (PDS) archives. Zero placeholder or fake URLs are used.
        </p>

        {/* Legend of Data Types */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
          <div className="p-3 bg-[#0b101d] border border-amber-500/30 rounded-lg flex items-center gap-3">
            <Globe className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-amber-400 font-bold uppercase">NASA &amp; JPL Portals</div>
              <div className="text-slate-400 text-[11px] font-sans">Official mission homepages &amp; flight journals</div>
            </div>
          </div>

          <div className="p-3 bg-[#0b101d] border border-cyan-500/30 rounded-lg flex items-center gap-3">
            <Database className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="text-cyan-400 font-bold uppercase">NASA PDS Datasets</div>
              <div className="text-slate-400 text-[11px] font-sans">Peer-reviewed raw sensor archives</div>
            </div>
          </div>

          <div className="p-3 bg-[#0b101d] border border-emerald-500/30 rounded-lg flex items-center gap-3">
            <ImageIcon className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-emerald-400 font-bold uppercase">NASA Image Credits</div>
              <div className="text-slate-400 text-[11px] font-sans">LROC, HiRISE &amp; Photojournal IDs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sources list grouped by mission */}
      <div className="space-y-10">
        <h2 className="font-mono text-2xl font-bold uppercase text-slate-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          <span>Mission-by-Mission Provenance Breakdown</span>
        </h2>

        {ALL_MISSIONS.map((mission) => (
          <MissionSourcesCard key={mission.id} mission={mission} />
        ))}
      </div>
    </div>
  );
}
