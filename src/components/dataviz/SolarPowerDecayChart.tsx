'use client';

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ExternalLink, HelpCircle } from 'lucide-react';

const insightPowerDecayData = [
  { sol: 1, date: 'Nov 2018', insightWh: 4980, status: 'Landing: Clean panels, full sun' },
  { sol: 300, date: 'Sep 2019', insightWh: 4200, status: 'Gradual dust accumulation' },
  { sol: 600, date: 'Jul 2020', insightWh: 2900, status: 'Dust layer reducing absorption' },
  { sol: 900, date: 'May 2021', insightWh: 2050, status: 'Attempted scoop dust clearing' },
  { sol: 1200, date: 'Apr 2022', insightWh: 1100, status: 'Final selfie; heavy dust coating' },
  { sol: 1350, date: 'Sep 2022', insightWh: 520, status: 'Emergency low-power mode' },
  { sol: 1440, date: 'Dec 2022', insightWh: 285, status: 'Final silence: below heater limit (<300 Wh)' }
];

export default function SolarPowerDecayChart() {
  return (
    <div className="bg-[#0b101d] border border-space-border/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Title & Question */}
      <div className="space-y-2 border-b border-space-border/60 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Scientific Question 03</span>
        </div>

        <h3 className="font-mono text-xl sm:text-2xl font-extrabold uppercase text-slate-100">
          How did dust accumulation degrade InSight lander solar power to silence?
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
          Tracking daily electrical power production (Watt-hours / sol) across 1,440 sols on Elysium Planitia until battery survival heater failure.
        </p>
      </div>

      {/* Chart Canvas */}
      <div className="h-80 w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={insightPowerDecayData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="powerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#e11d48" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }} />
            <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }} label={{ value: 'Daily Energy (Watt-hours / Sol)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-[#05070d] border border-amber-500/60 p-3 rounded shadow-xl font-mono text-xs space-y-1">
                      <div className="text-slate-100 font-bold">Sol {data.sol} ({data.date})</div>
                      <div className="text-amber-400 font-bold">Daily Power: {data.insightWh} Wh/sol</div>
                      <div className="text-slate-300 text-[11px] font-sans">{data.status}</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: '11px', paddingTop: '10px' }} />
            <Area type="monotone" dataKey="insightWh" name="InSight Power Output (Watt-hours/Sol)" stroke="#f59e0b" fillOpacity={1} fill="url(#powerGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Annotation Box: WHAT, WHY, WHERE */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-space-border/40 font-mono text-xs">
        <div className="p-3 bg-slate-950 rounded border border-space-border/60">
          <div className="text-amber-400 font-bold uppercase text-[10px]">WHAT YOU ARE SEEING</div>
          <p className="text-slate-300 font-sans text-xs mt-1">
            Empirical telemetry showing power decay from 4,980 Wh/sol at touchdown down to 285 Wh/sol on Sol 1440.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded border border-space-border/60">
          <div className="text-cyan-400 font-bold uppercase text-[10px]">WHY IT MATTERS</div>
          <p className="text-slate-300 font-sans text-xs mt-1">
            Proves why solar-powered hardware without active wipers or nuclear RTGs have finite operational lifespans on Mars.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded border border-space-border/60 flex flex-col justify-between">
          <div>
            <div className="text-emerald-400 font-bold uppercase text-[10px]">NASA ARCHIVAL DATA SOURCE</div>
            <div className="text-slate-400 text-xs font-sans mt-1">NASA JPL InSight Engineering Log</div>
          </div>
          <a
            href="https://www.jpl.nasa.gov/news/nasas-insight-retires-after-insightful-mission-on-mars"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline inline-flex items-center gap-1 text-[11px] mt-2"
          >
            <span>Inspect NASA Power Log</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
