'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ExternalLink, HelpCircle } from 'lucide-react';

const lifespanData = [
  {
    name: 'Opportunity Rover',
    body: 'Mars',
    planned: 90, // Sols
    actual: 5352, // Sols
    multiplier: '59.4x',
    unit: 'Sols',
    source: 'https://mars.nasa.gov/mer/mission/overview/'
  },
  {
    name: 'InSight Lander',
    body: 'Mars',
    planned: 708, // Sols (1 Mars Year / 2 Earth years)
    actual: 1440, // Sols
    multiplier: '2.03x',
    unit: 'Sols',
    source: 'https://mars.nasa.gov/insight/mission/overview/'
  },
  {
    name: 'Apollo 15 LRV',
    body: 'Moon',
    planned: 78, // Hours baseline design
    actual: 78, // Completed all 3 EVAs (3.1 days surface)
    multiplier: '1.0x',
    unit: 'Hours',
    source: 'https://history.nasa.gov/alsj/a15/a15.html'
  },
  {
    name: 'Surveyor 3',
    body: 'Moon',
    planned: 14, // Days (1 lunar day)
    actual: 14, // Days (frozen on night 1)
    multiplier: '1.0x',
    unit: 'Days',
    source: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A'
  },
  {
    name: 'Apollo 11 Eagle',
    body: 'Moon',
    planned: 21.5, // Hours surface stay
    actual: 21.5,
    multiplier: '1.0x',
    unit: 'Hours',
    source: 'https://history.nasa.gov/alsj/a11/a11.html'
  }
];

export default function MissionLifespanChart() {
  return (
    <div className="bg-[#0b101d] border border-space-border/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Title & Question */}
      <div className="space-y-2 border-b border-space-border/60 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Scientific Question 01</span>
        </div>

        <h3 className="font-mono text-xl sm:text-2xl font-extrabold uppercase text-slate-100">
          How many times did hardware exceed planned design lifespans?
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
          Comparing original engineering prime mission requirements (planned) against total operational duration achieved before final silence.
        </p>
      </div>

      {/* Chart Canvas */}
      <div className="h-80 w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={lifespanData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }} />
            <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }} label={{ value: 'Operational Duration (Log/Units)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-[#05070d] border border-amber-500/60 p-3 rounded shadow-xl font-mono text-xs space-y-1">
                      <div className="text-slate-100 font-bold">{data.name} ({data.body})</div>
                      <div className="text-slate-400">Planned Goal: <span className="text-amber-400 font-bold">{data.planned} {data.unit}</span></div>
                      <div className="text-slate-400">Actual Achieved: <span className="text-cyan-400 font-bold">{data.actual} {data.unit}</span></div>
                      <div className="text-emerald-400 font-bold">Lifespan Exceeded By: {data.multiplier}</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: '11px', paddingTop: '10px' }} />
            <Bar dataKey="planned" name="Planned Design Life" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="actual" name="Actual Operational Life" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Annotation Box: WHAT, WHY, WHERE */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-space-border/40 font-mono text-xs">
        <div className="p-3 bg-slate-950 rounded border border-space-border/60">
          <div className="text-amber-400 font-bold uppercase text-[10px]">WHAT YOU ARE SEEING</div>
          <p className="text-slate-300 font-sans text-xs mt-1">
            Primary vs. actual mission duration (Sols for Mars, Days/Hours for Moon).
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded border border-space-border/60">
          <div className="text-cyan-400 font-bold uppercase text-[10px]">WHY IT MATTERS</div>
          <p className="text-slate-300 font-sans text-xs mt-1">
            Demonstrates how conservative NASA engineering safety margins enabled 59x lifespan extensions.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded border border-space-border/60 flex flex-col justify-between">
          <div>
            <div className="text-emerald-400 font-bold uppercase text-[10px]">NASA ARCHIVAL DATA SOURCE</div>
            <div className="text-slate-400 text-xs font-sans mt-1">NASA JPL MER &amp; InSight Telemetry</div>
          </div>
          <a
            href="https://mars.nasa.gov/mer/mission/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline inline-flex items-center gap-1 text-[11px] mt-2"
          >
            <span>Inspect NASA PDS Log</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
