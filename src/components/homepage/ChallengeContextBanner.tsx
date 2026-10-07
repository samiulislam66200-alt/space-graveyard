import Link from 'next/link';
import { Database, FileText, Globe } from 'lucide-react';

export default function ChallengeContextBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0b101d] border border-amber-500/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 font-mono text-xs font-semibold uppercase">
            <Globe className="w-3.5 h-3.5" />
            <span>2026 NASA Space Apps Challenge Statement</span>
          </div>

          <h2 className="font-mono text-2xl sm:text-4xl font-bold text-slate-100 uppercase tracking-tight">
            “Abandoned but not Forgotten: Storytelling about NASA&apos;s Discarded Equipment”
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            This educational platform was created to transform archival NASA mission telemetry and planetary coordinates into an accessible, deeply respectful storytelling experience. Every hardware location is verified through official NASA Planetary Data System (PDS) datasets and high-resolution orbital imaging.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
            <div className="p-4 rounded-lg bg-slate-900/80 border border-space-border/60 space-y-1">
              <div className="text-amber-400 font-bold uppercase">Zero Invented Facts</div>
              <div className="text-slate-400 font-sans text-xs">
                All coordinates, mission dates, instrument specs, and distances are 100% sourced from official NASA archives.
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/80 border border-space-border/60 space-y-1">
              <div className="text-cyan-400 font-bold uppercase">Data Provenance Transparency</div>
              <div className="text-slate-400 font-sans text-xs">
                Every claim is classified into FACT, DATA, or INTERPRETATION with direct source links.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/data-explorer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold uppercase hover:bg-slate-800 transition-colors"
            >
              <Database className="w-4 h-4" />
              <span>Inspect NASA Datasets</span>
            </Link>

            <Link
              href="/sources"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs font-semibold uppercase hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>View Citations &amp; Credits</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
