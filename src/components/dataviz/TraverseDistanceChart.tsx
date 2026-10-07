'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ExternalLink, HelpCircle } from 'lucide-react';

const distanceData = [
  {
    name: 'Opportunity Rover (MER-B)',
    body: 'Mars',
    goalKm: 0.6, // 600 meters prime requirement
    actualKm: 45.16,
    multiplier: '75.2x',
    source: 'https://mars.nasa.gov/news/8413/nasas-opportunity-rover-mission-exits-silent-mode/'
  },
  {
    name: 'Apollo 15 LRV (LRV-002)',
    body: 'Moon',
    goalKm: 10.0, // 10 km baseline radius limit
    actualKm: 27.8,
    multiplier: '2.78x',
    source: 'https://history.nasa.gov/alsj/a15/a15.html'
  }
];

export default function TraverseDistanceChart() {
  return (
    <div className="bg-[#0b101d] border border-space-border/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Title & Question */}
      <div className="space-y-2 border-b border-space-border/60 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Scientific Question 02</span>
        </div>

        <h3 className="font-mono text-xl sm:text-2xl font-extrabold uppercase text-slate-100">
          How far did Opportunity &amp; Apollo 15 LRV travel compared with prime requirements?
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
          Comparing original prime mission mobility design goals (km) against final cumulative surface driving odometers.
        </p>
      </div>

      {/* Chart Canvas */}
      <div className="h-72 w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={distanceData} layout="vertical" margin={{ top: 20, right: 30, left: 140, bottom: 20 }}>
            <XAxis type="number" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }} unit=" km" />
            <YAxis type="category" dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-[#05070d] border border-amber-500/60 p-3 rounded shadow-xl font-mono text-xs space-y-1">
                      <div className="text-slate-100 font-bold">{data.name} ({data.body})</div>
                      <div className="text-slate-400">Prime Mission Goal: <span className="text-amber-400 font-bold">{data.goalKm} km</span></div>
                      <div className="text-slate-400">Actual Odometer: <span className="text-cyan-400 font-bold">{data.actualKm} km</span></div>
                      <div className="text-emerald-400 font-bold">Goal Exceeded By: {data.multiplier}</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: '11px', paddingTop: '10px' }} />
            <Bar dataKey="goalKm" name="Prime Mission Goal (km)" fill="#f59e0b" radius={[0, 4, 4, 0]} />
            <Bar dataKey="actualKm" name="Actual Driven Distance (km)" fill="#10b981" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Annotation Box: WHAT, WHY, WHERE */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-space-border/40 font-mono text-xs">
        <div className="p-3 bg-slate-950 rounded border border-space-border/60">
          <div className="text-amber-400 font-bold uppercase text-[10px]">WHAT YOU ARE SEEING</div>
          <p className="text-slate-300 font-sans text-xs mt-1">
            Distance driven in kilometers: Opportunity (45.16 km on Mars) and Apollo 15 LRV (27.8 km on Moon).
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded border border-space-border/60">
          <div className="text-cyan-400 font-bold uppercase text-[10px]">WHY IT MATTERS</div>
          <p className="text-slate-300 font-sans text-xs mt-1">
            Driving tens of kilometers allowed rovers to cross multiple impact craters and sample distinct geological eras.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded border border-space-border/60 flex flex-col justify-between">
          <div>
            <div className="text-emerald-400 font-bold uppercase text-[10px]">NASA ARCHIVAL DATA SOURCE</div>
            <div className="text-slate-400 text-xs font-sans mt-1">NASA JPL MER &amp; Apollo Surface Journal</div>
          </div>
          <a
            href="https://mars.nasa.gov/news/8413/nasas-opportunity-rover-mission-exits-silent-mode/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline inline-flex items-center gap-1 text-[11px] mt-2"
          >
            <span>Inspect Driving Telemetry</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
