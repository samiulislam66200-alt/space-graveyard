import MissionLifespanChart from '../../components/dataviz/MissionLifespanChart';
import TraverseDistanceChart from '../../components/dataviz/TraverseDistanceChart';
import SolarPowerDecayChart from '../../components/dataviz/SolarPowerDecayChart';
import InstrumentPayloadChart from '../../components/dataviz/InstrumentPayloadChart';
import { BarChart2, ShieldCheck, Database } from 'lucide-react';

export default function VisualizationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-space-border/60 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
          <BarChart2 className="w-4 h-4 text-cyan-400" />
          <span>DATA-DRIVEN SCIENCE ENGINE</span>
        </div>

        <h1 className="font-mono text-3xl sm:text-5xl font-extrabold uppercase text-slate-100 tracking-tight">
          NASA Data Visualizations
        </h1>

        <p className="text-slate-300 font-sans text-sm sm:text-base max-w-3xl leading-relaxed">
          Every chart in this section answers a meaningful scientific question backed strictly by official NASA Planetary Data System (PDS) and JPL telemetry records. No decorative or invented data.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            Every chart includes WHAT, WHY, and WHERE annotations
          </span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <Database className="w-4 h-4 text-amber-400" />
            Interactive hover tooltips with exact NASA telemetry
          </span>
        </div>
      </div>

      {/* Grid of 4 Meaningful Scientific Visualizations */}
      <div className="space-y-12">
        {/* Visualization 1 */}
        <MissionLifespanChart />

        {/* Visualization 2 */}
        <TraverseDistanceChart />

        {/* Visualization 3 */}
        <SolarPowerDecayChart />

        {/* Visualization 4 */}
        <InstrumentPayloadChart />
      </div>
    </div>
  );
}
