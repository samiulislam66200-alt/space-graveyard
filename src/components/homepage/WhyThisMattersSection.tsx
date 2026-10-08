import Link from 'next/link';
import { Award, Compass, GraduationCap, ShieldCheck, Database, Layers, Radio, Sparkles } from 'lucide-react';

export default function WhyThisMattersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="bg-[#0b101d] border border-amber-500/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl space-y-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>MISSION IMPACT &amp; PURPOSE</span>
          </div>

          <h2 className="font-mono text-3xl sm:text-5xl font-extrabold uppercase text-slate-100 tracking-tight">
            Why Space Graveyard Matters
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Every machine left behind on extraterrestrial soil is not simply debris. They are historical monuments of human ambition, engineering experiments, and physical scientific archives resting where humans placed them.
          </p>
        </div>

        {/* 4 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 font-sans">
          <div className="p-5 bg-slate-950 rounded-xl border border-space-border/80 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-slate-100 uppercase">For Students &amp; Educators</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transforms complex NASA telemetry into accessible, beginner-friendly science explainers and interactive quizzes without dumbing down the science.
            </p>
          </div>

          <div className="p-5 bg-slate-950 rounded-xl border border-space-border/80 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-slate-100 uppercase">Data Provenance Integrity</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every coordinate, mass, date, and odometry reading is traceable directly to peer-reviewed NASA PDS, JPL, and NSSDC records.
            </p>
          </div>

          <div className="p-5 bg-slate-950 rounded-xl border border-space-border/80 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-slate-100 uppercase">The Last Signal Storytelling</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Documents the poignant transition from active discovery to final silence, framing inactive hardware as archaeological monuments.
            </p>
          </div>

          <div className="p-5 bg-slate-950 rounded-xl border border-space-border/80 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-slate-100 uppercase">Scientifically Responsible</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Strictly classifies all claims into FACT, DATA, INTERPRETATION, or SPECULATION, preserving scientific rigor and uncertainty.
            </p>
          </div>
        </div>

        {/* Measurable Project Outcomes Metrics Bar */}
        <div className="p-6 bg-slate-950 border border-space-border/80 rounded-xl font-mono text-xs space-y-4 relative z-10">
          <div className="text-amber-400 font-bold uppercase tracking-wider text-center sm:text-left">
            MEASURABLE PROJECT ARCHITECTURE OUTCOMES
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            <div className="p-3 bg-[#0b101d] rounded border border-space-border/60">
              <div className="text-2xl font-extrabold text-amber-400">6</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">Featured Hardware Missions</div>
            </div>

            <div className="p-3 bg-[#0b101d] rounded border border-space-border/60">
              <div className="text-2xl font-extrabold text-cyan-400">2</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">Celestial Bodies (Moon &amp; Mars)</div>
            </div>

            <div className="p-3 bg-[#0b101d] rounded border border-space-border/60">
              <div className="text-2xl font-extrabold text-emerald-400">4</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">Scientific Data Charts</div>
            </div>

            <div className="p-3 bg-[#0b101d] rounded border border-space-border/60">
              <div className="text-2xl font-extrabold text-purple-400">5</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">Interactive Quiz Questions</div>
            </div>

            <div className="p-3 bg-[#0b101d] rounded border border-space-border/60 col-span-2 sm:col-span-1">
              <div className="text-2xl font-extrabold text-rose-400">100%</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">Traceable NASA Provenance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
