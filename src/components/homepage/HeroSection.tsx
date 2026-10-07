'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Database, ChevronDown, Radio, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Background Subtle Glowing Grid / Glows */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        {/* Top Challenge Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 font-mono text-xs shadow-lg shadow-amber-500/5"
        >
          <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>2026 NASA SPACE APPS CHALLENGE</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-sans text-xs font-medium">ABANDONED BUT NOT FORGOTTEN</span>
        </motion.div>

        {/* Title & Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 uppercase">
            SPACE GRAVEYARD
          </h1>
          <p className="text-lg sm:text-2xl font-mono text-amber-400 tracking-wide max-w-3xl mx-auto font-medium">
            &ldquo;Every machine left a footprint. Every footprint tells a story.&rdquo;
          </p>
        </motion.div>

        {/* Short Explanation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed font-sans"
        >
          Over six decades of space exploration, humanity sent extraordinary mechanical emissaries to the Moon and Mars. When their batteries failed or their missions concluded, they remained on alien soil. This is the story of what NASA sent, what they discovered, and why their legacy lives on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/explorer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-500 text-slate-950 font-mono font-bold text-sm tracking-wider uppercase hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 group"
          >
            <Rocket className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            Explore the Machines
          </Link>

          <Link
            href="/data-explorer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-mono font-semibold text-sm tracking-wider uppercase hover:bg-slate-800 hover:border-slate-500 transition-all"
          >
            <Database className="w-4 h-4 text-cyan-400" />
            Explore NASA Data
          </Link>
        </motion.div>

        {/* NASA Provenance Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 flex items-center justify-center gap-2 text-xs font-mono text-slate-400"
        >
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Verified NASA Planetary Data System (PDS) &amp; JPL Archival Data</span>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-1 font-mono text-[10px] tracking-widest uppercase pointer-events-none"
      >
        <span>Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-amber-500" />
      </motion.div>
    </section>
  );
}
