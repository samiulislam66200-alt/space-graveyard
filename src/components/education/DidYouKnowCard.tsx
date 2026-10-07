'use client';

import { Lightbulb, Sparkles } from 'lucide-react';

interface DidYouKnowProps {
  title: string;
  fact: string;
  analogy?: string;
  nasaRef?: string;
}

export default function DidYouKnowCard({ title, fact, analogy, nasaRef }: DidYouKnowProps) {
  return (
    <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 rounded-xl p-5 space-y-3 shadow-lg relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>DID YOU KNOW?</span>
        </div>

        <Sparkles className="w-4 h-4 text-amber-400 opacity-60" />
      </div>

      <h4 className="font-mono text-base font-bold text-slate-100">
        {title}
      </h4>

      <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
        {fact}
      </p>

      {analogy && (
        <div className="p-3 bg-slate-950/80 rounded border border-space-border/60 text-xs font-mono text-cyan-300">
          💡 <span className="font-bold text-slate-100">Simple Analogy:</span> {analogy}
        </div>
      )}

      {nasaRef && (
        <div className="text-[11px] font-mono text-slate-400 pt-1">
          Source: {nasaRef}
        </div>
      )}
    </div>
  );
}
