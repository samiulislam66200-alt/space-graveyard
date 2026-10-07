import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#030509] border-t border-space-border/60 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 font-mono text-xs">
        {/* Col 1: About */}
        <div className="md:col-span-2 space-y-3">
          <div className="text-sm font-bold text-slate-100 tracking-wider">
            SPACE GRAVEYARD — The Machines We Left Behind
          </div>
          <p className="text-slate-400 leading-relaxed font-sans text-xs">
            Built for the 2026 NASA Space Apps Challenge: &ldquo;Abandoned but not Forgotten: Storytelling about NASA&apos;s Discarded Equipment on the Moon and Mars.&rdquo;
          </p>
          <div className="text-slate-400 font-sans text-xs">
            Tagline: <span className="italic text-amber-400 font-mono">&ldquo;Every machine left a footprint. Every footprint tells a story.&rdquo;</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-2">
          <div className="text-slate-200 font-semibold uppercase tracking-wider">Navigation</div>
          <ul className="space-y-1.5 text-slate-400">
            <li><Link href="/explorer" className="hover:text-amber-400 transition-colors">Mission Explorer</Link></li>
            <li><Link href="/data-explorer" className="hover:text-amber-400 transition-colors">NASA Data Explorer</Link></li>
            <li><Link href="/education" className="hover:text-amber-400 transition-colors">Education Mode</Link></li>
            <li><Link href="/sources" className="hover:text-amber-400 transition-colors">Sources &amp; Citations</Link></li>
          </ul>
        </div>

        {/* Col 3: NASA Attribution */}
        <div className="space-y-2">
          <div className="text-slate-200 font-semibold uppercase tracking-wider">NASA Data Provenance</div>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            Data sourced from official NASA Planetary Data System (PDS), JPL Photojournal, NSSDC Master Catalog, and Lunar Reconnaissance Orbiter Camera (LROC) archives.
          </p>
          <div className="pt-2">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-800">
              100% VERIFIED NASA DATA
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-space-border/30 text-center font-mono text-[11px] text-slate-400">
        This project is an educational entry created for the NASA Space Apps Challenge. All mission photos and spacecraft telemetry remain the property of NASA/JPL-Caltech.
      </div>
    </footer>
  );
}
