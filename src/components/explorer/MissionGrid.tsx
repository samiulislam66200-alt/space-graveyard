'use client';

import { useState, useMemo } from 'react';
import { ALL_MISSIONS } from '../../data/missions';
import MissionCard from './MissionCard';
import { Search, X, SlidersHorizontal, ArrowUpDown, ShieldAlert, RotateCcw } from 'lucide-react';

export default function MissionGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<'ALL' | 'Moon' | 'Mars'>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [sortOrder, setSortOrder] = useState<'NEWEST' | 'OLDEST'>('NEWEST');

  // Extract unique hardware categories
  const hardwareTypes = useMemo(() => {
    const types = new Set(ALL_MISSIONS.map((m) => m.hardwareType));
    return Array.from(types);
  }, []);

  // Filter & Sort Logic
  const filteredMissions = useMemo(() => {
    return ALL_MISSIONS.filter((mission) => {
      // Destination filter
      if (selectedDestination !== 'ALL' && mission.destination !== selectedDestination) {
        return false;
      }

      // Hardware type filter
      if (selectedType !== 'ALL' && mission.hardwareType !== selectedType) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = mission.missionName.toLowerCase().includes(q);
        const matchBody = mission.destination.toLowerCase().includes(q);
        const matchType = mission.hardwareType.toLowerCase().includes(q);
        const matchPurpose = mission.scientificPurpose.value.toLowerCase().includes(q);
        const matchRegion = mission.landingLocation.regionName.toLowerCase().includes(q);

        if (!matchTitle && !matchBody && !matchType && !matchPurpose && !matchRegion) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      const dateA = new Date(a.launchDate.value).getTime();
      const dateB = new Date(b.launchDate.value).getTime();
      return sortOrder === 'NEWEST' ? dateB - dateA : dateA - dateB;
    });
  }, [searchQuery, selectedDestination, selectedType, sortOrder]);

  const hasActiveFilters = searchQuery !== '' || selectedDestination !== 'ALL' || selectedType !== 'ALL';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDestination('ALL');
    setSelectedType('ALL');
    setSortOrder('NEWEST');
  };

  return (
    <div className="space-y-8">
      {/* Filter Bar Controls */}
      <div className="bg-[#0b101d] border border-space-border/80 rounded-xl p-4 sm:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hardware by name, instrument, landing site..."
              className="w-full bg-slate-950 border border-space-border/80 rounded-lg pl-10 pr-10 py-2.5 text-xs font-mono text-slate-100 placeholder:text-slate-400 focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Destination Tabs */}
          <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-space-border/60 font-mono text-xs">
            {(['ALL', 'Moon', 'Mars'] as const).map((dest) => (
              <button
                key={dest}
                onClick={() => setSelectedDestination(dest)}
                className={`px-3 py-1.5 rounded-md font-semibold uppercase transition-all ${
                  selectedDestination === dest
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {dest === 'ALL' ? 'All World' : dest}
              </button>
            ))}
          </div>
        </div>

        {/* Second Row: Dropdown Filters & Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-space-border/40 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {/* Hardware Type Select */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-400 uppercase">Hardware Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-slate-950 border border-space-border/80 rounded px-2.5 py-1.5 text-slate-200 focus:border-amber-500"
              >
                <option value="ALL">All Categories</option>
                {hardwareTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Order Toggle */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400 uppercase">Sort Launch:</span>
            <button
              onClick={() => setSortOrder(sortOrder === 'NEWEST' ? 'OLDEST' : 'NEWEST')}
              className="bg-slate-950 border border-space-border/80 rounded px-3 py-1.5 text-amber-400 font-bold hover:border-amber-500 uppercase transition-colors"
            >
              {sortOrder === 'NEWEST' ? 'Newest First' : 'Oldest First'}
            </button>
          </div>
        </div>

        {/* Active Filter Chips Bar */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-space-border/40 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-400">Active Filters:</span>
              {selectedDestination !== 'ALL' && (
                <span className="bg-amber-950/80 text-amber-400 border border-amber-800 px-2.5 py-0.5 rounded flex items-center gap-1">
                  Destination: {selectedDestination}
                  <button onClick={() => setSelectedDestination('ALL')}><X className="w-3 h-3" /></button>
                </span>
              )}
              {selectedType !== 'ALL' && (
                <span className="bg-cyan-950/80 text-cyan-400 border border-cyan-800 px-2.5 py-0.5 rounded flex items-center gap-1">
                  Type: {selectedType}
                  <button onClick={() => setSelectedType('ALL')}><X className="w-3 h-3" /></button>
                </span>
              )}
              {searchQuery && (
                <span className="bg-slate-900 text-slate-200 border border-slate-700 px-2.5 py-0.5 rounded flex items-center gap-1">
                  &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery('')}><X className="w-3 h-3" /></button>
                </span>
              )}
            </div>

            <button
              onClick={handleResetFilters}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 underline font-semibold"
            >
              <RotateCcw className="w-3 h-3" />
              Reset All
            </button>
          </div>
        )}
      </div>

      {/* Grid Results Status */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-400">
        <div>
          Showing <span className="text-amber-400 font-bold">{filteredMissions.length}</span> of {ALL_MISSIONS.length} registered hardware records
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredMissions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMissions.map((mission, index) => (
            <MissionCard key={mission.id} mission={mission} index={index} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-[#0b101d] border border-space-border/80 rounded-2xl p-12 text-center space-y-4 max-w-lg mx-auto shadow-xl">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
            <ShieldAlert className="w-6 h-6" />
          </div>

          <h3 className="font-mono text-xl font-bold text-slate-100 uppercase">
            No NASA Hardware Found
          </h3>

          <p className="text-slate-400 text-sm font-sans leading-relaxed">
            No verified mission hardware matched your filter query &ldquo;{searchQuery || selectedDestination || selectedType}&rdquo;. Try broadening your search parameters or resetting filters.
          </p>

          <div className="pt-2">
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-mono font-bold text-xs uppercase hover:bg-amber-400 transition-colors shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Explorer Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
