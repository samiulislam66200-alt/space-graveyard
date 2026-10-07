import { getAllNASAProvenanceSources } from '../../data/missions';
import { Database, ExternalLink, ShieldCheck } from 'lucide-react';

export default function DataExplorerPage() {
  const sources = getAllNASAProvenanceSources();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase">
          <Database className="w-3.5 h-3.5" />
          <span>Data Provenance Registry</span>
        </div>
        <h1 className="font-mono text-3xl sm:text-5xl font-bold uppercase text-slate-100">
          NASA Data Explorer
        </h1>
        <p className="text-slate-400 font-sans max-w-2xl text-sm sm:text-base">
          100% transparent inventory of official NASA Planetary Data System (PDS), JPL Photojournal, and NSSDC master catalog sources used across SPACE GRAVEYARD.
        </p>
      </div>

      <div className="bg-[#0b101d] border border-space-border/80 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs text-slate-300">
            <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider border-b border-space-border/60">
              <tr>
                <th className="px-6 py-4">Dataset Name</th>
                <th className="px-6 py-4">NASA Source</th>
                <th className="px-6 py-4">Attribution</th>
                <th className="px-6 py-4">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-space-border/40">
              {sources.map((src, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40">
                  <td className="px-6 py-4 font-bold text-slate-100">{src.title}</td>
                  <td className="px-6 py-4 text-cyan-400">{src.sourceName}</td>
                  <td className="px-6 py-4 text-slate-400">{src.attribution}</td>
                  <td className="px-6 py-4">
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-400 hover:underline"
                    >
                      <span>Access Dataset</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
