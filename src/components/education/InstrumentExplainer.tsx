'use client';

import { useState } from 'react';
import { Layers, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const explainers = [
  {
    id: 'seis',
    name: 'SEIS (Mars Seismometer)',
    mission: 'InSight Lander',
    question: 'How do scientists listen to Marsquakes without digging?',
    simpleAnswer: 'SEIS acts like a microphone for planetary ground vibrations. When rocks snap deep inside Mars, shockwaves travel through the planet. SEIS measures movements as tiny as a single hydrogen atom!',
    howItWorksStepByStep: [
      '1. Robotic arm places the SEIS dome directly onto Martian soil.',
      '2. Heavy thermal shield protects it from wind and temperature swings.',
      '3. Internal pendulums detect ground shifts down to picometer precision.',
      '4. Scientists compare wave speeds to map the thickness of Mars crust and liquid core.'
    ],
    verifiedSource: 'NASA JPL / CNES (France) SEIS Instrument Team'
  },
  {
    id: 'lrrr',
    name: 'LRRR (Laser Retroreflector)',
    mission: 'Apollo 11 & Apollo 15',
    question: 'How can an instrument work for 55+ years with ZERO electricity?',
    simpleAnswer: 'LRRR is made of 100 special fused-silica glass corner cubes. When an observatory on Earth fires a laser beam at Tranquility Base, the corner shape bounces the light straight back to Earth like a mirror on a bicycle pedal!',
    howItWorksStepByStep: [
      '1. Earth observatory fires a high-power green laser beam at the Moon.',
      '2. Laser travels ~384,400 km in 1.28 seconds.',
      '3. 100 silica glass corner-cubes reflect the laser photons straight back.',
      '4. Scientists measure the 2.56-second round-trip time to calculate Moon distance within 1 cm!'
    ],
    verifiedSource: 'NASA JPL Laser Ranging Group'
  },
  {
    id: 'apxs',
    name: 'APXS (Alpha Particle X-Ray Spectrometer)',
    mission: 'Opportunity Rover',
    question: 'How does a rover figure out what atoms a rock is made of?',
    simpleAnswer: 'APXS places a tiny radioactive curium source near a rock. It shoots alpha particles and X-rays at the rock. When these hit atoms in the rock, the atoms glow back in unique X-ray fingerprints!',
    howItWorksStepByStep: [
      '1. Robotic arm presses APXS directly against a ground rock target.',
      '2. Curium-244 emits alpha particles into the rock surface.',
      '3. Energy knocks inner-shell electrons out of rock atoms.',
      '4. Outer electrons drop down, releasing characteristic X-rays that identify Iron, Silicon, Chlorine, and Sulfur.'
    ],
    verifiedSource: 'NASA PDS Geosciences Node / Max Planck Institute'
  }
];

export default function InstrumentExplainer() {
  const [activeId, setActiveId] = useState('seis');
  const activeExplainer = explainers.find((e) => e.id === activeId) || explainers[0];

  return (
    <div className="bg-[#0b101d] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
      <div className="space-y-2 border-b border-space-border/60 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-700/50 text-cyan-400 font-mono text-xs font-bold uppercase">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>INTERACTIVE SCIENCE EXPLAINER</span>
        </div>

        <h3 className="font-mono text-2xl font-bold uppercase text-slate-100">
          “How Does This Instrument Work?”
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
          Select a NASA payload instrument to see how complex physics is explained in beginner-friendly, scientifically accurate terms.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {explainers.map((exp) => (
          <button
            key={exp.id}
            onClick={() => setActiveId(exp.id)}
            className={`px-4 py-2 rounded-lg font-bold uppercase transition-all ${
              activeId === exp.id
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/60 shadow-lg'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-space-border/60'
            }`}
          >
            {exp.name}
          </button>
        ))}
      </div>

      {/* Selected Instrument Detail Card */}
      <div className="bg-slate-950 border border-space-border/80 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-space-border/40 pb-3">
          <div>
            <h4 className="font-mono text-lg font-bold text-slate-100">{activeExplainer.name}</h4>
            <div className="font-mono text-xs text-amber-400">Deployed on: {activeExplainer.mission}</div>
          </div>
          <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-800 uppercase">
            Beginner-Friendly Physics
          </span>
        </div>

        <div className="space-y-2">
          <div className="font-mono text-xs text-cyan-300 font-bold uppercase">Key Question:</div>
          <div className="text-sm font-sans font-semibold text-slate-100 leading-snug">
            {activeExplainer.question}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-1">
            {activeExplainer.simpleAnswer}
          </p>
        </div>

        {/* Step-by-Step Mechanism */}
        <div className="space-y-2 pt-2 border-t border-space-border/40 font-mono text-xs">
          <div className="text-amber-400 font-bold uppercase">How It Works Step-by-Step:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 font-sans">
            {activeExplainer.howItWorksStepByStep.map((step, idx) => (
              <div key={idx} className="p-2.5 rounded bg-slate-900 border border-space-border/50 text-xs">
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="text-[11px] font-mono text-slate-400 pt-2 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Source: {activeExplainer.verifiedSource}</span>
        </div>
      </div>
    </div>
  );
}
