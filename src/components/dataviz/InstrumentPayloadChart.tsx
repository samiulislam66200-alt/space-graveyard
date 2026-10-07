'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ExternalLink, HelpCircle, Layers } from 'lucide-react';

const payloadData = [
  {
    category: 'Opportunity Rover',
    imaging: 3, // Pancam, Navcam, Hazcam
    spectroscopy: 3, // Mini-TES, Mössbauer, APXS
    seismology: 0,
    soilMechanics: 1, // RAT (Rock Abrasion Tool)
    atmospheric: 1, // Pancam tau solar filter
  },
  {
    category: 'Apollo 15 LRV',
    imaging: 1, // Ground-Controlled TV Camera (GCTA)
    spectroscopy: 0,
    seismology: 0,
    soilMechanics: 0,
    atmospheric: 0,
  },
  {
    category: 'InSight Lander',
    imaging: 2, // IDC & ICC cameras
    spectroscopy: 0,
    seismology: 1, // SEIS 6-axis seismometer
    soilMechanics: 1, // HP3 mole thermal probe
    atmospheric: 1, // APSS weather station
  },
  {
    category: 'Perseverance EDL Stack',
    imaging: 7, // EDL camera suite (parachute, skycrane, rover down/up)
    spectroscopy: 0,
    seismology: 0,
    soilMechanics: 0,
    atmospheric: 1, // MEDLI2 heat flux & pressure sensors
  },
  {
    category: 'Apollo 11 Eagle',
    imaging: 1, // Maurer 16mm motion picture camera
    spectroscopy: 0,
    seismology: 1, // PSEP seismometer
    soilMechanics: 1, // Solar Wind Composition foil / Soil penetrometer
    atmospheric: 0,
  },
  {
    category: 'Surveyor 3',
    imaging: 1, // Slow-Scan TV camera
    spectroscopy: 0,
    seismology: 0,
    soilMechanics: 1, // Soil Mechanics Surface Sampler scoop
    atmospheric: 0,
  }
];

export default function InstrumentPayloadChart() {
  return (
    <div className="bg-[#0b101d] border border-space-border/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
      {/* Title & Question */}
      <div className="space-y-2 border-b border-space-border/60 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Scientific Question 04</span>
        </div>

        <h3 className="font-mono text-xl sm:text-2xl font-extrabold uppercase text-slate-100">
          How did instrument payload composition differ across hardware categories?
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
          Breakdown of scientific instrument suites (Imaging, Spectroscopy, Seismology, Soil Mechanics, Atmospheric) deployed across Rovers, Stationary Landers, EDL Stack, and Descent Packages.
        </p>
      </div>

      {/* Chart Canvas */}
      <div className="h-80 w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={payloadData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
            <XAxis dataKey="category" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }} />
            <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }} label={{ value: 'Instrument Count', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#05070d] border border-amber-500/60 p-3 rounded shadow-xl font-mono text-xs space-y-1">
                      <div className="text-slate-100 font-bold">{payload[0].payload.category}</div>
                      {payload.map((entry, idx) => (
                        <div key={idx} style={{ color: entry.color }}>
                          {entry.name}: <span className="font-bold">{entry.value}</span>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: '11px', paddingTop: '10px' }} />
            <Bar dataKey="imaging" name="Imaging & Optics" fill="#06b6d4" stackId="a" />
            <Bar dataKey="spectroscopy" name="Spectroscopy" fill="#f59e0b" stackId="a" />
            <Bar dataKey="seismology" name="Seismology & Geodesy" fill="#e11d48" stackId="a" />
            <Bar dataKey="soilMechanics" name="Soil Mechanics & Scoops" fill="#10b981" stackId="a" />
            <Bar dataKey="atmospheric" name="Atmospheric & Thermal" fill="#8b5cf6" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Annotation Box: WHAT, WHY, WHERE */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-space-border/40 font-mono text-xs">
        <div className="p-3 bg-slate-950 rounded border border-space-border/60">
          <div className="text-amber-400 font-bold uppercase text-[10px]">WHAT YOU ARE SEEING</div>
          <p className="text-slate-300 font-sans text-xs mt-1">
            Categorized instrument counts across mobile rovers vs. stationary landers vs. entry/descent hardware.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded border border-space-border/60">
          <div className="text-cyan-400 font-bold uppercase text-[10px]">WHY IT MATTERS</div>
          <p className="text-slate-300 font-sans text-xs mt-1">
            Rovers prioritized mobility &amp; mineral spectroscopy; landers prioritized deep seismic &amp; soil mechanics.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded border border-space-border/60 flex flex-col justify-between">
          <div>
            <div className="text-emerald-400 font-bold uppercase text-[10px]">NASA ARCHIVAL DATA SOURCE</div>
            <div className="text-slate-400 text-xs font-sans mt-1">NSSDCA Master Catalog Instrument Files</div>
          </div>
          <a
            href="https://nssdc.gsfc.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline inline-flex items-center gap-1 text-[11px] mt-2"
          >
            <span>Inspect NSSDCA Registry</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
