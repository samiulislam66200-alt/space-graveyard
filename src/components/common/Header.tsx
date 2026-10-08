'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Database, GraduationCap, FileText, Satellite, Radio, BarChart2, Menu, X, Sparkles } from 'lucide-react';
import EducationToggleBadge from '../education/EducationToggleBadge';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Explorer', href: '/explorer', icon: Compass },
    { label: 'The Last Signal', href: '/last-signal', icon: Radio },
    { label: 'Visualizations', href: '/visualizations', icon: BarChart2 },
    { label: 'NASA Data', href: '/data-explorer', icon: Database },
    { label: 'Learn Mode', href: '/education', icon: GraduationCap, highlight: true },
    { label: 'Sources', href: '/sources', icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#05070d]/90 backdrop-blur-md border-b border-space-border/60">
      {/* Top NASA Telemetry HUD Banner */}
      <div className="bg-[#0b101d] border-b border-space-border/40 px-4 py-1 text-[11px] font-mono text-slate-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-amber-500 font-semibold tracking-wider">NASA SPACE APPS 2026</span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline">CHALLENGE: ABANDONED BUT NOT FORGOTTEN</span>
        </div>
        <div className="flex items-center gap-3">
          <EducationToggleBadge />
          <span className="hidden sm:inline text-cyan-400">ARCHIVAL DATA: VERIFIED PDS</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="p-2 rounded bg-slate-900 border border-amber-500/30 group-hover:border-amber-500 transition-colors">
              <Satellite className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <div className="font-mono text-lg font-bold tracking-widest text-slate-100 group-hover:text-amber-400 transition-colors">
                SPACE GRAVEYARD
              </div>
              <div className="text-[10px] font-mono text-slate-400 tracking-wider">
                THE MACHINES WE LEFT BEHIND
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              const isHighlight = item.highlight;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/40'
                      : isHighlight
                      ? 'bg-amber-950/60 text-amber-300 border border-amber-500/40 hover:bg-amber-900/60'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isHighlight ? 'text-amber-400' : 'text-amber-500/80'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-space-border/80 text-amber-400 hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05070d] border-b border-space-border/80 px-4 py-4 space-y-2 font-mono text-xs shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg uppercase tracking-wider font-semibold transition-colors ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <Icon className="w-4 h-4 text-amber-400" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
