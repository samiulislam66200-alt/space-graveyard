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
              Inspect real verified NASA mission hardware resting on alien soil.
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
          {ALL_MISSIONS.map((mission, index) => {
            const isMoon = mission.destination === 'Moon';
            const primaryDiscovery = mission.discoveries[0];
            const heroImg = mission.images[0];

            return (
              <motion.article
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-[#0b101d] border border-space-border/80 rounded-xl overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all group shadow-lg"
              >
                <div>
                  {/* Card Header Image / Placeholder */}
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                    {heroImg ? (
                      <Image
                        src={heroImg.url}
                        alt={heroImg.title || mission.missionName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-slate-400">
                        NASA ARCHIVAL IMAGE
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-transparent to-black/40" />

                    {/* Celestial Body Badge */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded border shadow-md ${
                        isMoon 
                          ? 'bg-slate-900/90 text-slate-200 border-slate-600' 
                          : 'bg-rose-950/90 text-rose-300 border-rose-800'
                      }`}>
                        {mission.destination}
                      </span>
                      <span className="font-mono text-[10px] uppercase font-semibold px-2.5 py-1 rounded bg-slate-900/90 text-amber-400 border border-amber-500/30">
                        {mission.hardwareType}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded flex items-center gap-1 border ${
                        mission.currentStatus === 'Silent'
                          ? 'bg-amber-950/90 text-amber-400 border-amber-700'
                          : 'bg-slate-950/90 text-slate-400 border-slate-700'
                      }`}>
                        <ShieldAlert className="w-3 h-3" />
                        {mission.currentStatus}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-mono text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                        {mission.missionName}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                        {mission.landingLocation.regionName} ({mission.landingLocation.latitude.toFixed(2)}°, {mission.landingLocation.longitude.toFixed(2)}°)
                      </p>
                    </div>

                    {/* Stats metrics */}
                    <div className="grid grid-cols-2 gap-2 p-3 bg-slate-950/60 rounded border border-space-border/40 font-mono text-xs">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">Duration</div>
                        <div className="text-slate-200 font-semibold">{mission.missionDurationDays.value} {isMoon ? 'Days' : 'Sols'}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">Distance</div>
                        <div className="text-slate-200 font-semibold">
                          {mission.distanceTraveledKm?.value ? `${mission.distanceTraveledKm.value} km` : 'Stationary'}
                        </div>
                      </div>
                    </div>

                    {/* Key Discovery */}
                    {primaryDiscovery && (
                      <div className="space-y-1">
                        <div className="font-mono text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>Key Discovery:</span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans line-clamp-2 leading-relaxed">
                          {primaryDiscovery.title} — {primaryDiscovery.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 py-4 bg-slate-900/50 border-t border-space-border/40">
                  <Link
                    href={`/mission/${mission.id}`}
                    className="w-full inline-flex items-center justify-between font-mono text-xs text-slate-300 group-hover:text-amber-400 uppercase tracking-wider font-semibold"
                  >
                    <span>Read Machine Story</span>
                    <Navigation className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
