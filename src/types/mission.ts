/**
 * SPACE GRAVEYARD — NASA Mission Data Layer Types
 */

export type CelestialBody = 'Moon' | 'Mars';

export type HardwareCategory =
  | 'Lunar Module Descent Stage'
  | 'Lunar Roving Vehicle'
  | 'Stationary Lander'
  | 'Entry, Descent, and Landing (EDL) Gear'
  | 'Rover'
  | 'Impact Stage';

export type MissionStatus = 'Abandoned' | 'Completed' | 'Silent';

export type FactType = 'FACT' | 'DATA' | 'INTERPRETATION';

export interface NASASource {
  title: string;
  sourceName: string;
  url: string;
  accessedDate?: string;
  attribution: string;
}

export interface FactValue<T> {
  value: T;
  sourceUrl: string;
  attribution: string;
  factType: FactType;
  notes?: string;
}

export interface PlanetaryCoordinate {
  latitude: number;
  longitude: number;
  regionName: string;
  featureName?: string;
  celestialBody: CelestialBody;
  referenceFrame: string;
  sourceUrl: string;
  attribution: string;
}

export interface RouteWaypoint {
  solOrDay?: number;
  dateStr: string;
  coordinate: PlanetaryCoordinate;
  cumulativeDistanceKm: number;
  description: string;
  sourceUrl: string;
}

export interface InstrumentDetail {
  name: string;
  acronym?: string;
  description: string;
  scientificPurpose: string;
  whatItMeasured: string;
  statusAtMissionEnd: string;
  sourceUrl: string;
  attribution: string;
}

export interface ComponentDetail {
  name: string;
  description: string;
  role: string;
  materialComposition?: string | null;
  sourceUrl: string;
}

export interface DiscoveryRecord {
  title: string;
  description: string;
  scientificSignificance: string;
  sourceUrl: string;
  attribution: string;
  factType: FactType;
}

export interface ImageAsset {
  url: string;
  title: string;
  caption: string;
  credit: string;
  nasaId?: string | null;
  sourceUrl: string;
}

export interface LastSignalDetails {
  lastCommDate: string;
  lastActivity: string;
  endingEvent: string;
  finalLocation: PlanetaryCoordinate;
  causeOfSilence: string;
  scientificLegacySummary: string;
  telemetrySnapshot?: {
    powerOutputWatts?: number;
    temperatureCelsius?: number;
    batteryPercentage?: number;
  };
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'Launch' | 'Arrival' | 'Milestone' | 'Discovery' | 'Last Signal' | 'Mission End';
  nasaRefUrl?: string;
}

export interface MissionData {
  id: string;
  missionName: string;
  destination: CelestialBody;
  hardwareType: HardwareCategory;
  currentStatus: MissionStatus;
  
  // Dates
  launchDate: FactValue<string>;
  arrivalLandingDate: FactValue<string>;
  lastCommunicationDate: FactValue<string>;
  missionEndDate: FactValue<string>;
  
  // Mission Specs
  missionObjective: FactValue<string>;
  hardwareDescription: FactValue<string>;
  massKg?: FactValue<{ launchMassKg?: number | null; landingMassKg?: number | null }>;
  powerSource: FactValue<string>;
  components: ComponentDetail[];
  instruments: InstrumentDetail[];
  scientificPurpose: FactValue<string>;
  discoveries: DiscoveryRecord[];
  
  // Metrics
  missionDurationDays: FactValue<number>;
  distanceTraveledKm: FactValue<number | null>;
  
  // Locations
  landingLocation: PlanetaryCoordinate;
  finalLastKnownLocation: PlanetaryCoordinate;
  routeData: RouteWaypoint[] | null;
  
  // Mission End & Signature "The Last Signal" Details
  missionEndReason: FactValue<string>;
  silenceCauseDetails: FactValue<string>;
  scientificLegacy: FactValue<string>;
  lastSignal?: LastSignalDetails;
  timeline: TimelineEvent[];
  
  // Images & Attribution
  images: ImageAsset[];
  imageCredits: string[];
  nasaSourceUrls: NASASource[];
  datasetUrls: NASASource[];
  
  // Missing data audit
  remainingMissingData: string[];
}
