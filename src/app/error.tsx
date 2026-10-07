'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Space Graveyard Telemetry Exception:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 space-y-6 text-center font-mono">
      <div className="w-16 h-16 rounded-full bg-rose-950/80 border border-rose-600 flex items-center justify-center text-rose-400 shadow-xl">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <div className="space-y-2 max-w-md">
        <div className="text-rose-400 font-bold tracking-widest text-base uppercase">
          TELEMETRY SIGNAL LOST (ERROR 500)
        </div>
        <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
          An unhandled data stream anomaly occurred. No factual mission data has been corrupted.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase hover:bg-amber-400 transition-colors shadow-lg"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Signal Stream</span>
        </button>

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
