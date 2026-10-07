'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ALL_MISSIONS } from '../../data/missions';
import { MapPin, ArrowRight, ShieldAlert, Sparkles, Navigation } from 'lucide-react';

export default function FeaturedHardwareGrid() {
  return (
    <section className="py-20 bg-[#070b14] border-y border-space-border/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 bg-slate-900 border border-cyan-500/30 px-3 py-1 rounded-full">
              Featured Registry
            </span>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold text-slate-100 uppercase tracking-tight">
              Discarded Hardware of Moon &amp; Mars
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-sans max-w-xl">
              Inspect archival NASA mission hardware resting on alien soil.
            </p>
          </div>

          <Link
            href="/explorer"
            className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 hover:text-amber-300 uppercase tracking-wider bg-slate-900 border border-amber-500/30 px-4 py-2.5 rounded-lg hover:border-amber-500 transition-colors w-fit"
          >
            <span>View All Hardware</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_MISSIONS.map((mission, idx) => {
            const isMoon = mission.destination === 'Moon';
            const cardImg = mission.images && mission.images.length > 0 ? mission.images[0] : null;

            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0b101d] border border-space-border/80 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                    {cardImg ? (
                      <Image
                        src={cardImg.url}
                        alt={cardImg.title || mission.missionName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center font-mono text-xs text-slate-400">
                        NASA IMAGE ARCHIVE
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider ${
                        isMoon ? 'bg-amber-950/90 text-amber-300 border border-amber-800' : 'bg-rose-950/90 text-rose-300 border border-rose-800'
                      }`}>
                        {mission.destination}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <div className="font-mono text-[11px] text-cyan-400 font-bold uppercase">
                        {mission.hardwareType}
                      </div>
                      <h3 className="font-mono text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                        {mission.missionName}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-xs font-sans leading-relaxed line-clamp-2">
                      {mission.missionObjective.value}
                    </p>

                    <div className="pt-2 grid grid-cols-2 gap-2 font-mono text-[11px] border-t border-space-border/40">
                      <div>
                        <span className="text-slate-400 block text-[10px]">LANDED</span>
                        <span className="text-slate-200 font-bold">{mission.arrivalLandingDate.value}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">STATUS</span>
                        <span className="text-rose-400 font-bold">{mission.currentStatus}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/mission/${mission.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-space-border/80 text-slate-200 font-mono text-xs font-bold uppercase hover:bg-slate-800 hover:text-amber-400 transition-all"
                  >
                    <span>Read Mission Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
