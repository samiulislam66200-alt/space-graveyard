import DidYouKnowCard from '../../components/education/DidYouKnowCard';
import InstrumentExplainer from '../../components/education/InstrumentExplainer';
import MissionQuizModal from '../../components/education/MissionQuizModal';
import { GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-space-border/60 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>STUDENTS &amp; YOUNG SPACE ENTHUSIASTS</span>
        </div>

        <h1 className="font-mono text-3xl sm:text-5xl font-extrabold uppercase text-slate-100 tracking-tight">
          Education Mode &amp; Science Hub
        </h1>

        <p className="text-slate-300 font-sans text-sm sm:text-base max-w-3xl leading-relaxed">
          Interactive science explainers, &ldquo;Did You Know?&rdquo; curiosity facts, instrument physics breakdowns, and Space Apps quizzes. Designed to make off-world engineering accessible without sacrificing scientific accuracy.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            100% Verified NASA Facts &amp; Physics
          </span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Designed for K-12 Students, Teachers &amp; Communicators
          </span>
        </div>
      </div>

      {/* 1. Did You Know Curiosity Cards */}
      <div className="space-y-6">
        <h2 className="font-mono text-2xl font-bold uppercase text-slate-100">
          “Did You Know?” Curiosity Cards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DidYouKnowCard
            title="Zero Power Required for 55+ Years"
            fact="The Apollo 11 Laser Ranging Retroreflector (LRRR) placed on the Moon in 1969 uses zero electrical power and has no batteries. It consists of 100 glass corner cubes that still bounce laser beams back to Earth observatories today!"
            analogy="Like a bicycle reflector on your bike wheel, but engineered with fused-silica glass that survives extreme space vacuum and radiation."
            nasaRef="NASA JPL Laser Ranging Group"
          />

          <DidYouKnowCard
            title="Driving 75 Times Farther Than Planned"
            fact="Opportunity Rover was designed to survive 90 Sols (90 Martian days) and drive 600 meters. Instead, it operated for 5,352 Sols and drove 45.16 kilometers across Mars!"
            analogy="Imagine buying a car built to drive from home to the grocery store, and ending up driving across the entire state of Rhode Island!"
            nasaRef="NASA JPL MER Telemetry Archive"
          />

          <DidYouKnowCard
            title="Astronauts Visiting Discarded Hardware"
            fact="On November 19, 1969, Apollo 12 astronauts Pete Conrad and Alan Bean landed LM Intrepid 180 meters from Surveyor 3 (which landed in 1967) and physically unbolted its TV camera to return it to Earth."
            analogy="The only time in human history that astronauts visited a spacecraft left on another world!"
            nasaRef="NASA Apollo 12 Surface Journal"
          />
        </div>
      </div>

      {/* 2. Interactive Instrument Physics Explainer */}
      <InstrumentExplainer />

      {/* 3. Interactive Space Apps Quiz */}
      <MissionQuizModal />
    </div>
  );
}
