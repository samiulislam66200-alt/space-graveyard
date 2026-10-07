import { ALL_MISSIONS } from '../../data/missions';
import TheLastSignalCard from '../../components/signal/TheLastSignalCard';
import FinalSilenceTimeline from '../../components/signal/FinalSilenceTimeline';
import { Radio } from 'lucide-react';

export default function LastSignalPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>SIGNATURE STORYTELLING FEATURE</span>
        </div>

        <h1 className="font-mono text-3xl sm:text-5xl font-extrabold uppercase text-slate-100 tracking-tight">
          THE LAST SIGNAL
        </h1>

        <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
          Visualizing the final phase, final communication date, mission-ending events, and permanent resting locations of NASA hardware on the Moon and Mars. Zero fabricated drama—built on verified NASA archival telemetry.
        </p>
      </div>

      {/* Render Last Signal Card & Timeline for every mission */}
      <div className="space-y-20">
        {ALL_MISSIONS.map((mission) => (
          <div key={mission.id} className="space-y-8 border-b border-space-border/60 pb-16">
            <TheLastSignalCard mission={mission} />
            <FinalSilenceTimeline mission={mission} />
          </div>
        ))}
      </div>
    </div>
  );
}
