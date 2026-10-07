'use client';

import { motion } from 'framer-motion';
import { Send, Zap, MoonStar, Award } from 'lucide-react';

const narrativeSteps = [
  {
    number: '01',
    icon: Send,
    title: 'WHAT NASA SENT',
    heading: 'Engineering Sent Across the Void',
    description: 'To explore worlds where humans could not yet survive, NASA designed robotic pioneers. From the lightweight aluminum legs of Apollo landers to six-wheeled nuclear rovers and supersonic parachutes, these machines were built to endure radiation, extreme vacuums, and sub-zero planetary nights.',
    accentColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/30'
  },
  {
    number: '02',
    icon: Zap,
    title: 'THE SCIENCE THEY ENABLED',
    heading: 'Rewriting Our Understanding of the Solar System',
    description: 'Equipped with X-ray spectrometers, seismometers, panoramic cameras, and core drills, these instruments extracted secrets from alien soil. They proved ancient liquid water once flowed on Mars, mapped the internal metallic core of the Red Planet, and returned pristine lunar crust samples 4.1 billion years old.',
    accentColor: 'border-amber-500/40 text-amber-400 bg-amber-950/30'
  },
  {
    number: '03',
    icon: MoonStar,
    title: 'WHY THEY WERE LEFT BEHIND',
    heading: 'Silenced, Expended, but Never Forgotten',
    description: 'No hardware on the Moon or Mars was abandoned out of neglect. Descent stages served as essential launchpads for returning astronauts. Solar arrays eventually succumbed to global Martian dust storms. Stationary landers froze when primary power cells depleted. Each hardware site marks a completed mission threshold.',
    accentColor: 'border-rose-500/40 text-rose-400 bg-rose-950/30'
  },
  {
    number: '04',
    icon: Award,
    title: 'WHY THEIR LEGACY MATTERS',
    heading: 'Monuments of Human Ingenuity',
    description: 'Today, discarded equipment serves active scientific roles. Retroreflectors on Apollo 11 continue to reflect Earth lasers 55 years later. Descent stage crash sites provide density profiles for future landers. And every stationary rover rests as a permanent monument to human curiosity.',
    accentColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30'
  }
];

export default function StoryScrollNarrative() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-3">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-slate-900 border border-amber-500/30 px-3 py-1 rounded-full">
          The Core Narrative
        </span>
        <h2 className="font-mono text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight uppercase">
          From Launch Pad to Alien Soil
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
          Four chapters defining the lifecycle of NASA&apos;s discarded planetary hardware.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {narrativeSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0b101d] border border-space-border/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border font-mono text-xs font-bold uppercase ${step.accentColor}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {step.title}
                  </span>
                  <span className="font-mono text-2xl font-extrabold text-slate-700">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-mono text-lg sm:text-xl font-bold text-slate-100">
                  {step.heading}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 border-t border-space-border/40 mt-6 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>NASA ARCHIVAL HISTORY</span>
                <span className="text-amber-400">VERIFIED FACT</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
