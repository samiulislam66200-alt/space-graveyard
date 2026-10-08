'use client';

import { Database, ArrowRight, Layers, Eye, ShieldCheck, Globe, LineChart, Radio, GraduationCap } from 'lucide-react';

interface MappingItem {
  nasaSource: string;
  sourceType: string;
  dataExtracted: string;
  howWeTransform: string;
  whatUserSees: string;
  featureTarget: string;
  icon: any;
  color: string;
}

const dataMappings: MappingItem[] = [
  {
    nasaSource: 'NASA / JPL Mars Exploration Program',
    sourceType: 'Official Flight & Mission Archives',
    dataExtracted: 'Opportunity landing coordinates (-1.9483°, 354.47417°), 45.16 km odometry, Sol 5111 final signal',
    howWeTransform: 'Parsed telemetry timestamps & coordinates into vector SVG projection points and driving polylines',
    whatUserSees: 'Interactive Planetary GIS Surface Map & Traverse Polyline Chart',
    featureTarget: 'PlanetarySurfaceMap & TraverseDistanceChart',
    icon: Globe,
    color: 'text-amber-400 border-amber-500/40 bg-amber-950/20'
  },
  {
    nasaSource: 'NASA Planetary Data System (PDS)',
    sourceType: 'Peer-Reviewed Sensor Repositories',
    dataExtracted: 'SEIS seismometer data, APXS spectrometer readings, Pancam optical filters, MEDLI2 heat flux sensors',
    howWeTransform: 'Categorized instrument payloads into functional scientific categories (Imaging, Seismology, Spectroscopy, Thermal)',
    whatUserSees: 'Recharts Scientific Instrument Payload Distribution & Subsystem Teardown Inspector',
    featureTarget: 'InstrumentPayloadChart & MeetTheMachine',
    icon: LineChart,
    color: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/20'
  },
  {
    nasaSource: 'NASA NSSDC Master Catalog',
    sourceType: 'Spacecraft Design Registries',
    dataExtracted: 'Launch masses, Silver-Zinc battery specifications, DPS rocket thrust curves, structural dimensions',
    howWeTransform: 'Structured raw hardware metadata into a 3-tab interactive subsystem inspector',
    whatUserSees: 'Interactive Hardware Subsystem Inspector & Power Breakdown',
    featureTarget: 'MeetTheMachine Component Tabs',
    icon: Layers,
    color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/20'
  },
  {
    nasaSource: 'LROC / Arizona State University',
    sourceType: 'High-Resolution Orbital Imagery',
    dataExtracted: 'Apollo 11 Tranquility Base & Apollo 15 Hadley-Apennine landing site coordinates and orbital photo IDs',
    howWeTransform: 'Cross-referenced LROC orbital frame coordinates with lunar planetographic reference frames',
    whatUserSees: 'High-resolution lunar landing site coordinates & orbital citations',
    featureTarget: 'PlanetarySurfaceMap & SourcesPage',
    icon: Eye,
    color: 'text-purple-400 border-purple-500/40 bg-purple-950/20'
  },
  {
    nasaSource: 'Apollo Lunar Surface Journal (ALSJ)',
    sourceType: 'Historical Flight Logs & Transcripts',
    dataExtracted: 'LRRR retroreflector placement logs, LRV GCTA TV transmission liftoff timeline, Surveyor 3 camera retrieval logs',
    howWeTransform: 'Synthesized chronological timeline events and beginner-friendly physics explainers',
    whatUserSees: 'The Last Signal Timeline, Education Mode & "Did You Know?" Cards',
    featureTarget: 'FinalSilenceTimeline & EducationHub',
    icon: GraduationCap,
    color: 'text-rose-400 border-rose-500/40 bg-rose-950/20'
  }
];

export default function NASADataToExperienceMap() {
  return (
    <section className="bg-[#0b101d] border border-space-border/80 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-3 border-b border-space-border/60 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Database className="w-4 h-4 text-cyan-400" />
          <span>NASA DATA TRANSPARENCY PIPELINE</span>
        </div>

        <h2 className="font-mono text-2xl sm:text-4xl font-extrabold uppercase text-slate-100 tracking-tight">
          From NASA Data to What You See
        </h2>

        <p className="text-slate-300 font-sans text-sm sm:text-base max-w-3xl leading-relaxed">
          How open NASA scientific datasets are ingested, transformed, and presented as interactive storytelling and scientific visualizations.
        </p>
      </div>

      {/* 4-Step Pipeline Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 font-mono text-xs text-center border-b border-space-border/40 pb-6">
        <div className="p-3 bg-slate-950 rounded-lg border border-amber-500/30 text-amber-400 font-bold uppercase flex items-center justify-center gap-2">
          <span>1. NASA Source</span>
        </div>
        <div className="p-3 bg-slate-950 rounded-lg border border-cyan-500/30 text-cyan-400 font-bold uppercase flex items-center justify-center gap-2">
          <span>2. Telemetry / Data</span>
        </div>
        <div className="p-3 bg-slate-950 rounded-lg border border-emerald-500/30 text-emerald-400 font-bold uppercase flex items-center justify-center gap-2">
          <span>3. Data Transformation</span>
        </div>
        <div className="p-3 bg-slate-950 rounded-lg border border-purple-500/30 text-purple-400 font-bold uppercase flex items-center justify-center gap-2">
          <span>4. What You See</span>
        </div>
      </div>

      {/* Pipeline Cards Grid */}
      <div className="space-y-4">
        {dataMappings.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div
              key={idx}
              className={`p-5 rounded-xl border transition-all space-y-4 ${item.color}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 font-mono text-xs border-b border-space-border/40 pb-3">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-slate-100 uppercase text-sm">{item.nasaSource}</span>
                  <span className="text-slate-400 text-[11px] font-sans">({item.sourceType})</span>
                </div>

                <span className="px-2.5 py-1 rounded bg-slate-900 border border-space-border/60 text-slate-300 text-[11px]">
                  Mapped Component: <span className="text-cyan-300 font-bold">{item.featureTarget}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
                <div className="space-y-1 bg-slate-950/80 p-3 rounded border border-space-border/60">
                  <div className="font-mono text-[10px] uppercase font-bold text-amber-400">DATA EXTRACTED</div>
                  <p className="text-slate-300 leading-relaxed">{item.dataExtracted}</p>
                </div>

                <div className="space-y-1 bg-slate-950/80 p-3 rounded border border-space-border/60">
                  <div className="font-mono text-[10px] uppercase font-bold text-cyan-400">TRANSFORMATION LOGIC</div>
                  <p className="text-slate-300 leading-relaxed">{item.howWeTransform}</p>
                </div>

                <div className="space-y-1 bg-slate-950/80 p-3 rounded border border-space-border/60">
                  <div className="font-mono text-[10px] uppercase font-bold text-emerald-400">WHAT THE USER SEES</div>
                  <p className="text-slate-300 leading-relaxed">{item.whatUserSees}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
