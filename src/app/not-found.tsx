import Link from 'next/link';
import { Compass, Home, Radio } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 space-y-6 text-center font-mono">
      <div className="w-16 h-16 rounded-full bg-slate-900 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-xl">
        <Radio className="w-8 h-8 animate-pulse text-amber-400" />
      </div>

      <div className="space-y-2 max-w-md">
        <div className="text-amber-400 font-extrabold tracking-widest text-lg uppercase">
          404 — UNMAPPED SPACE COORDINATE
        </div>
        <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
          The requested trajectory or mission record does not exist in our NASA hardware catalog.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/explorer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase hover:bg-amber-400 transition-colors shadow-lg"
        >
          <Compass className="w-4 h-4" />
          <span>Mission Explorer</span>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs uppercase hover:bg-slate-800 transition-colors"
        >
          <Home className="w-4 h-4 text-cyan-400" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
