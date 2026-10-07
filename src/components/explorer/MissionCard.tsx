'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MissionData } from '../../types/mission';
import { MapPin, Calendar, ArrowRight, ShieldAlert, Zap } from 'lucide-react';

interface MissionCardProps {
  mission: MissionData;
  index: number;
}

export default function MissionCard({ mission, index }: MissionCardProps) {
  const isMoon = mission.destination === 'Moon';
  const heroImage = mission.images[0];
  
  // Format period e.g. "Jul 1969 – Jul 1969" or "Jan 2004 – Jun 2018"
  const formatDateYear = (dateStr: string) => {
    if (!dateStr) return 'Unconfirmed';
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? dateStr : date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const periodStr = `${formatDateYear(mission.arrivalLandingDate.value)} – ${formatDateYear(mission.lastCommunicationDate.value || mission.missionEndDate.value)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
      className="bg-[#0b101d] border border-space-border/80 rounded-xl overflow-hidden flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 group shadow-lg"
    >
      <div>
        {/* Card Image Header */}
        <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
          {heroImage ? (
            <Image
              src={heroImage.url}
              alt={heroImage.title || mission.missionName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-slate-400">
              NASA ARCHIVAL HARDWARE PHOTO
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-transparent to-black/50" />

          {/* Destination Badge */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded border shadow-md ${
              isMoon 
                ? 'bg-slate-900/90 text-slate-100 border-slate-600' 
                : 'bg-rose-950/90 text-rose-300 border-rose-800'
            }`}>
              {mission.destination}
            </span>

            <span className="font-mono text-[10px] uppercase font-semibold px-2.5 py-1 rounded bg-slate-900/90 text-amber-400 border border-amber-500/40">
              {mission.hardwareType}
            </span>
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span className={`font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded flex items-center gap-1 border ${
              mission.currentStatus === 'Silent'
                ? 'bg-amber-950/90 text-amber-300 border-amber-700'
                : 'bg-slate-950/90 text-slate-300 border-slate-700'
            }`}>
              <ShieldAlert className="w-3 h-3 text-amber-400" />
              {mission.currentStatus}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="font-mono text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
              {mission.missionName}
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-slate-400 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                {periodStr}
              </span>
              <span className="flex items-center gap-1 text-cyan-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                {mission.landingLocation.regionName}
              </span>
            </div>
          </div>

          {/* Scientific Purpose */}
          <div className="space-y-1.5 p-3 rounded bg-slate-950/70 border border-space-border/50">
            <div className="font-mono text-[11px] text-amber-400 font-semibold uppercase flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Scientific Purpose:</span>
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
              {mission.scientificPurpose.value}
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-slate-900/40 border-t border-space-border/40">
        <Link
          href={`/mission/${mission.id}`}
          className="w-full inline-flex items-center justify-between font-mono text-xs text-slate-300 group-hover:text-amber-400 uppercase tracking-wider font-semibold"
        >
          <span>Explore Mission Story</span>
          <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
