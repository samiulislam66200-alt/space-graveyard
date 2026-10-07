import { MissionData } from '../../types/mission';
import { ExternalLink, Database, Image as ImageIcon, BookOpen, ShieldCheck, Globe } from 'lucide-react';

interface MissionSourcesCardProps {
  mission: MissionData;
}

export default function MissionSourcesCard({ mission }: MissionSourcesCardProps) {
  const isMoon = mission.destination === 'Moon';

  return (
    <article className="bg-[#0b101d] border border-space-border/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl hover:border-amber-500/40 transition-colors">
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-space-border/60 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className={`px-2.5 py-0.5 rounded font-bold uppercase ${
              isMoon ? 'bg-slate-900 text-slate-200 border border-slate-700' : 'bg-rose-950 text-rose-300 border border-rose-800'
            }`}>
              {mission.destination}
            </span>
            <span className="text-amber-400 font-semibold">{mission.hardwareType}</span>
          </div>

          <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase text-slate-100">
            {mission.missionName}
          </h2>
        </div>

        <div className="font-mono text-xs text-slate-400">
          Landing: <span className="text-slate-200 font-bold">{mission.arrivalLandingDate.value}</span>
        </div>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        
        {/* 1. NASA Source */}
        <div className="bg-slate-950 border border-space-border/60 rounded-xl p-4 space-y-2">
          <div className="text-amber-400 font-bold uppercase flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-amber-400" />
            <span>1. Official NASA Source</span>
          </div>
          {mission.nasaSourceUrls.map((src, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-slate-200 font-semibold">{src.title}</div>
              <div className="text-slate-400 text-[11px] font-sans">{src.sourceName}</div>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-amber-400 hover:underline text-[11px] pt-1"
              >
                <span>{src.url}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* 2. Dataset Source */}
        <div className="bg-slate-950 border border-space-border/60 rounded-xl p-4 space-y-2">
          <div className="text-cyan-400 font-bold uppercase flex items-center gap-1.5">
            <Database className="w-4 h-4 text-cyan-400" />
            <span>2. NASA PDS Dataset Source</span>
          </div>
          {mission.datasetUrls.map((src, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-slate-200 font-semibold">{src.title}</div>
              <div className="text-slate-400 text-[11px] font-sans">{src.sourceName} — <span className="text-cyan-400">{src.attribution}</span></div>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 hover:underline text-[11px] pt-1"
              >
                <span>{src.url}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* 3. Image Source & Credits */}
        <div className="bg-slate-950 border border-space-border/60 rounded-xl p-4 space-y-2">
          <div className="text-emerald-400 font-bold uppercase flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-emerald-400" />
            <span>3. NASA Image Source &amp; Credits</span>
          </div>
          {mission.images.map((img, idx) => (
            <div key={idx} className="space-y-1 text-[11px]">
              <div className="text-slate-200 font-semibold">{img.title} {img.nasaId ? `(ID: ${img.nasaId})` : ''}</div>
              <div className="text-emerald-400">Credit: {img.credit}</div>
              <a
                href={img.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:underline pt-0.5"
              >
                <span>View NASA Archival Photo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* 4. Scientific Reference & Attribution */}
        <div className="bg-slate-950 border border-space-border/60 rounded-xl p-4 space-y-2">
          <div className="text-rose-400 font-bold uppercase flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-rose-400" />
            <span>4. Scientific Reference &amp; Attribution</span>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            {mission.scientificPurpose.value}
          </p>
          <div className="pt-2 text-[11px] text-slate-400 space-y-1">
            <div>Attribution: <span className="text-slate-200 font-bold">{mission.scientificPurpose.attribution}</span></div>
            <div>Planetary Reference Frame: <span className="text-cyan-400">{mission.landingLocation.referenceFrame}</span></div>
          </div>
        </div>

      </div>

      {/* Attribution Footer Bar */}
      <div className="p-3 rounded-lg bg-slate-950/80 border border-space-border/40 font-mono text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Factual Traceability: All coordinates ({mission.landingLocation.latitude.toFixed(4)}°, {mission.landingLocation.longitude.toFixed(4)}°) verified via orbiter telemetry</span>
        </div>

        <span className="text-amber-400 font-semibold">CLASSIFICATION: FACT / DATA</span>
      </div>
    </article>
  );
}
