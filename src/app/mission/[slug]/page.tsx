import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getMissionBySlug, ALL_MISSIONS } from '../../../data/missions';
import TheLastSignalCard from '../../../components/signal/TheLastSignalCard';
import FinalSilenceTimeline from '../../../components/signal/FinalSilenceTimeline';
import PlanetarySurfaceMap from '../../../components/maps/PlanetarySurfaceMap';
import MeetTheMachine from '../../../components/hardware/MeetTheMachine';
import { MapPin, ArrowLeft, ShieldAlert, Sparkles, Calendar, CheckCircle } from 'lucide-react';

export function generateStaticParams() {
  return ALL_MISSIONS.map((m) => ({ slug: m.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mission = getMissionBySlug(slug);

  if (!mission) {
    return {
      title: 'Mission Not Found — SPACE GRAVEYARD',
    };
  }

  return {
    title: `${mission.missionName} — SPACE GRAVEYARD`,
    description: `${mission.missionObjective.value}. Storytelling about NASA discarded equipment on ${mission.destination}.`,
  };
}

export default async function MissionStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mission = getMissionBySlug(slug);

  if (!mission) {
    notFound();
  }

  const isMoon = mission.destination === 'Moon';
  const heroImg = mission.images[0];
  const finalLoc = mission.finalLastKnownLocation || mission.landingLocation;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/explorer"
          className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 hover:text-amber-300 uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Mission Explorer</span>
        </Link>

        <span className="font-mono text-xs text-cyan-400 bg-slate-900 border border-cyan-900 px-3 py-1 rounded">
          VERIFIED NASA ARCHIVAL RECORD
        </span>
      </div>

      {/* Hero Header Banner */}
      <div className="bg-[#0b101d] border border-space-border/80 rounded-2xl overflow-hidden shadow-2xl relative">
        <div className="relative h-72 sm:h-96 w-full bg-slate-950">
          {heroImg ? (
            <Image
              src={heroImg.url}
              alt={heroImg.title || mission.missionName}
              fill
              className="object-cover opacity-75"
              priority
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center font-mono text-slate-500">
              NASA ARCHIVAL IMAGE
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-[#0b101d]/60 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
            <span className={`font-mono text-xs uppercase font-bold px-3 py-1 rounded border shadow-lg ${
              isMoon ? 'bg-slate-900/90 text-slate-100 border-slate-600' : 'bg-rose-950/90 text-rose-300 border-rose-800'
            }`}>
              {mission.destination}
            </span>

            <span className="font-mono text-xs uppercase font-semibold px-3 py-1 rounded bg-slate-900/90 text-amber-400 border border-amber-500/40">
              {mission.hardwareType}
            </span>

            <span className="font-mono text-xs uppercase font-semibold px-3 py-1 rounded bg-slate-950/90 text-rose-400 border border-rose-800 flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              {mission.currentStatus}
            </span>
          </div>
        </div>

        {/* Header Title Section */}
        <div className="p-6 sm:p-10 -mt-20 relative z-10 space-y-4">
          <h1 className="font-mono text-3xl sm:text-5xl font-extrabold uppercase text-slate-100 tracking-tight leading-tight">
            {mission.missionName}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Calendar className="w-4 h-4 text-amber-400" />
              Landing Date: {mission.arrivalLandingDate.value}
            </span>

            <span className="flex items-center gap-1.5 text-cyan-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {mission.landingLocation.regionName} ({mission.landingLocation.latitude.toFixed(4)}°, {mission.landingLocation.longitude.toFixed(4)}°)
            </span>
          </div>
        </div>
      </div>

      {/* 9-Section Narrative Layout */}
      <div className="space-y-12">
        
        {/* Section 1: WHY DID WE SEND IT? */}
        <section className="bg-[#0b101d] border border-space-border/80 rounded-xl p-6 sm:p-8 space-y-4 shadow-lg">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
            SECTION 01
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            Why Did We Send It?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {mission.missionObjective.value}
          </p>
          <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Citation: {mission.missionObjective.attribution}</span>
          </div>
        </section>

        {/* Section 2: MEET THE MACHINE (INTERACTIVE SCHEMATIC) */}
        <MeetTheMachine mission={mission} />

        {/* Section 3: THE JOURNEY */}
        <section className="bg-[#0b101d] border border-space-border/80 rounded-xl p-6 sm:p-8 space-y-4 shadow-lg">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
            SECTION 03
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            The Journey &amp; Surface Landing
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 bg-slate-950 rounded border border-space-border/60 space-y-1">
              <div className="text-slate-400">LAUNCH DATE</div>
              <div className="text-slate-100 font-bold text-sm">{mission.launchDate.value}</div>
              <div className="text-[11px] text-slate-400 font-sans">{mission.launchDate.attribution}</div>
            </div>

            <div className="p-4 bg-slate-950 rounded border border-space-border/60 space-y-1">
              <div className="text-slate-400">TOUCHDOWN DATE</div>
              <div className="text-amber-400 font-bold text-sm">{mission.arrivalLandingDate.value}</div>
              <div className="text-[11px] text-slate-400 font-sans">{mission.arrivalLandingDate.attribution}</div>
            </div>
          </div>
        </section>

        {/* Section 4: WHAT DID IT DO? */}
        <section className="bg-[#0b101d] border border-space-border/80 rounded-xl p-6 sm:p-8 space-y-4 shadow-lg">
          <div className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            SECTION 04
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            What Did It Do?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Over {mission.missionDurationDays.value} {isMoon ? 'days' : 'sols'}, {mission.missionName} operated on {mission.destination}. {mission.distanceTraveledKm?.value ? `It traversed ${mission.distanceTraveledKm.value} km across alien terrain.` : 'It operated as a stationary scientific laboratory.'}
          </p>
        </section>

        {/* Section 5 & 6: DISCOVERIES & THE SCIENCE */}
        <section className="bg-[#0b101d] border border-space-border/80 rounded-xl p-6 sm:p-8 space-y-6 shadow-lg">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
            SECTION 05 &amp; 06
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            What Did It Discover? The Science Enabled
          </h2>

          <div className="space-y-4">
            {mission.discoveries.map((disc, idx) => (
              <div key={idx} className="bg-slate-950 border border-amber-500/30 rounded-xl p-5 space-y-2">
                <div className="font-mono text-sm font-bold text-amber-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{disc.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                  {disc.description}
                </p>
                <div className="text-xs text-cyan-300 font-mono pt-1">
                  Scientific Significance: {disc.scientificSignificance}
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-1">
                  Source: {disc.attribution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: THE LAST SIGNAL (SIGNATURE FEATURE) */}
        <TheLastSignalCard mission={mission} />

        {/* Timeline Chronology to Silence */}
        <FinalSilenceTimeline mission={mission} />

        {/* Section 8: WHERE IS IT NOW? (INTERACTIVE SURFACE MAP) */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider px-2">
            SECTION 08
          </div>
          <PlanetarySurfaceMap mission={mission} />
        </section>

        {/* Section 9: WHY DOES IT STILL MATTER? */}
        <section className="bg-[#0b101d] border border-space-border/80 rounded-xl p-6 sm:p-8 space-y-4 shadow-lg">
          <div className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
            SECTION 09
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            Why Does It Still Matter?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {mission.scientificLegacy?.value || mission.lastSignal?.scientificLegacySummary}
          </p>
        </section>

      </div>
    </div>
  );
}
