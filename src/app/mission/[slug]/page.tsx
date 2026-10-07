import { getMissionBySlug, ALL_MISSIONS } from '../../../data/missions';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Scale,
  Radio,
  FileText,
  ShieldCheck,
  ExternalLink,
  Award,
  BookOpen
} from 'lucide-react';
import MeetTheMachine from '../../../components/hardware/MeetTheMachine';
import FinalSilenceTimeline from '../../../components/signal/FinalSilenceTimeline';
import PlanetarySurfaceMap from '../../../components/maps/PlanetarySurfaceMap';

export async function generateStaticParams() {
  return ALL_MISSIONS.map((m) => ({
    slug: m.id
  }));
}

interface MissionPageProps {
  params: { slug: string };
}

export default function MissionDetailPage({ params }: MissionPageProps) {
  const mission = getMissionBySlug(params.slug);

  if (!mission) {
    notFound();
  }

  const isMoon = mission.destination === 'Moon';
  const heroImg = mission.images && mission.images.length > 0 ? mission.images[0] : null;
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
          NASA ARCHIVAL MISSION RECORD
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-[#0b101d]/60 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className={`px-3 py-1 rounded-full font-bold uppercase ${
                isMoon ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-rose-950 text-rose-300 border border-rose-800'
              }`}>
                {mission.destination}
              </span>
              <span className="bg-slate-900/90 border border-space-border/80 px-3 py-1 rounded text-slate-300">
                {mission.hardwareType}
              </span>
              <span className="bg-slate-900/90 border border-cyan-950 px-3 py-1 rounded text-cyan-400">
                Status: {mission.currentStatus}
              </span>
            </div>

            <h1 className="font-mono text-3xl sm:text-5xl font-extrabold uppercase text-slate-100 tracking-tight drop-shadow-md">
              {mission.missionName}
            </h1>
          </div>
        </div>
      </div>

      {/* 9-SECTION STRUCTURED NARRATIVE LAYOUT */}
      <div className="space-y-12">
        {/* Section 1: QUICK FACTS HUD */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-4 bg-[#0b101d] border border-space-border/80 rounded-xl space-y-1">
            <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Launch Date</span>
            </div>
            <div className="text-slate-100 font-bold text-sm">{mission.launchDate.value}</div>
            <div className="text-[10px] text-cyan-400 truncate">{mission.launchDate.attribution}</div>
          </div>

          <div className="p-4 bg-[#0b101d] border border-space-border/80 rounded-xl space-y-1">
            <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Landing / Site</span>
            </div>
            <div className="text-slate-100 font-bold text-sm truncate">{mission.landingLocation.regionName}</div>
            <div className="text-[10px] text-cyan-400 truncate">{mission.arrivalLandingDate.value}</div>
          </div>

          <div className="p-4 bg-[#0b101d] border border-space-border/80 rounded-xl space-y-1">
            <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hardware Mass</span>
            </div>
            <div className="text-slate-100 font-bold text-sm">
              {mission.massKg ? (typeof mission.massKg.value === 'object' ? `${mission.massKg.value.landingMassKg} kg (surface)` : `${mission.massKg.value} kg`) : 'Data unavailable'}
            </div>
            <div className="text-[10px] text-cyan-400 truncate">{mission.massKg?.attribution || 'NASA Records'}</div>
          </div>

          <div className="p-4 bg-[#0b101d] border border-space-border/80 rounded-xl space-y-1">
            <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
              <Radio className="w-3.5 h-3.5 text-rose-400" />
              <span>Last Signal</span>
            </div>
            <div className="text-slate-100 font-bold text-sm">{mission.lastCommunicationDate?.value || 'Data unavailable'}</div>
            <div className="text-[10px] text-rose-400 truncate">{mission.lastCommunicationDate?.attribution}</div>
          </div>
        </section>

        {/* Section 2: WHY WAS IT SENT? */}
        <section className="bg-[#0b101d] border border-space-border/80 rounded-xl p-6 sm:p-8 space-y-4 shadow-lg">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
            SECTION 02
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            Why Was It Sent? (Mission Purpose)
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {mission.missionObjective.value}
          </p>
          <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Source: {mission.missionObjective.attribution}</span>
          </div>
        </section>

        {/* Section 3: THE MACHINE */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            SECTION 03
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            The Machine: Subsystems &amp; Power
          </h2>
          <MeetTheMachine mission={mission} />
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
            Over {mission.missionDurationDays.value} {isMoon ? 'days' : 'sols'}, {mission.missionName} operated on {mission.destination}. {mission.distanceTraveledKm?.value ? `It traversed ${mission.distanceTraveledKm.value} km across alien terrain.` : 'It operated from a stationary surface site.'}
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
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{disc.title}</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                  {disc.description}
                </p>
                <div className="p-3 bg-[#0b101d] rounded border border-space-border/60 text-xs text-cyan-300 font-mono">
                  <span className="font-bold text-cyan-400">Scientific Significance: </span>
                  {disc.scientificSignificance}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: THE LAST SIGNAL & FINAL SILENCE */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-rose-400 font-bold uppercase tracking-wider">
            SECTION 07 — SIGNATURE FEATURE
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            The Last Signal: Final Silence Timeline
          </h2>
          <FinalSilenceTimeline mission={mission} />
        </section>

        {/* Section 8: WHERE IS IT NOW? PLANETARY SURFACE MAP */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            SECTION 08
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            Where Is It Now? Precise Surface Coordinates
          </h2>
          <PlanetarySurfaceMap mission={mission} />
        </section>

        {/* Section 9: PROVENANCE & SOURCES */}
        <section className="bg-[#0b101d] border border-space-border/80 rounded-xl p-6 sm:p-8 shadow-lg space-y-4">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
            SECTION 09
          </div>
          <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
            NASA Source Bibliography &amp; Data Provenance
          </h2>

          <div className="space-y-3 font-mono text-xs">
            {mission.nasaSourceUrls.map((src, idx) => (
              <div key={idx} className="p-3 bg-slate-950 rounded border border-space-border/60 flex items-center justify-between gap-4">
                <div>
                  <div className="text-slate-200 font-bold">{src.title}</div>
                  <div className="text-slate-400 text-[11px] font-sans">{src.attribution}</div>
                </div>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1 shrink-0 font-bold"
                >
                  <span>NASA Record</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
