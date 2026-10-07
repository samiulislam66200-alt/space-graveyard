import { MissionData } from '../../../types/mission';

export const perseveranceEDL: MissionData = {
  id: 'perseverance-edl',
  missionName: 'Perseverance EDL Gear (Descent Stage, Parachute & Heat Shield)',
  destination: 'Mars',
  hardwareType: 'Entry, Descent, and Landing (EDL) Gear',
  currentStatus: 'Abandoned',
  
  launchDate: {
    value: '2020-07-30',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052A',
    attribution: 'NASA NSSDC Master Catalog',
    factType: 'FACT'
  },
  arrivalLandingDate: {
    value: '2021-02-18',
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/',
    attribution: 'NASA JPL Mars 2020 Project',
    factType: 'FACT'
  },
  lastCommunicationDate: {
    value: '2021-02-18',
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/entry-descent-landing/',
    attribution: 'NASA JPL Telemetry Stream',
    factType: 'FACT'
  },
  missionEndDate: {
    value: '2021-02-18',
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/',
    attribution: 'NASA JPL Project Record',
    factType: 'FACT'
  },

  missionObjective: {
    value: 'Protect the Perseverance rover and Ingenuity helicopter during atmospheric entry (20,000 km/h), decelerate to subsonic velocity via supersonic parachute, and lower the rover onto Jezero Crater via Skycrane tether.',
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/entry-descent-landing/',
    attribution: 'NASA JPL Mars 2020 Team',
    factType: 'FACT'
  },

  hardwareDescription: {
    value: 'A multi-part entry and landing stack comprising: 1) Carbon-phenolic Heat Shield; 2) Backshell with 21.5-meter supersonic orange-and-white nylon parachute; 3) 8-thruster monopropellant rocket Descent Stage (Skycrane).',
    sourceUrl: 'https://mars.nasa.gov/mars2020/spacecraft/rover/edl/',
    attribution: 'NASA JPL Spacecraft Architecture',
    factType: 'FACT'
  },

  massKg: {
    value: { launchMassKg: 3400, landingMassKg: 1740 },
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052A',
    attribution: 'NASA NSSDC',
    factType: 'DATA'
  },

  powerSource: {
    value: 'Hydrazine monopropellant thrusters (Descent Stage) and thermal batteries on backshell (non-rechargeable).',
    sourceUrl: 'https://mars.nasa.gov/mars2020/spacecraft/rover/edl/',
    attribution: 'NASA JPL',
    factType: 'FACT'
  },

  components: [
    {
      name: 'Descent Stage ("Skycrane")',
      description: '8-thruster hydrazine rocket stage that hovered 20 meters above Mars surface while lowering Perseverance via nylon tethers.',
      role: 'Final touchdown maneuver and controlled flyaway crash ~700m NW.',
      materialComposition: 'Titanium framework and carbon-composite tanks.',
      sourceUrl: 'https://mars.nasa.gov/mars2020/spacecraft/rover/edl/'
    }
  ],

  instruments: [
    {
      name: 'Mars Entry, Descent, and Landing Instrumentation 2',
      acronym: 'MEDLI2',
      description: 'Suite of 28 pressure, temperature, and heat flux sensors embedded throughout the heat shield and backshell.',
      scientificPurpose: 'Measure aero-thermal performance and atmospheric entry heating in real time.',
      whatItMeasured: 'Sub-surface heat shield temperatures, drag pressures, and atmospheric density profiles.',
      statusAtMissionEnd: 'Operational throughout descent; destroyed upon impact after separation.',
      sourceUrl: 'https://mars.nasa.gov/mars2020/spacecraft/instruments/medli2/',
      attribution: 'NASA Langley / NASA Ames / NASA JPL'
    }
  ],

  scientificPurpose: {
    value: 'Deliver Perseverance safely onto Jezero Crater crater floor and characterize Mars atmospheric entry heating and parachute physics.',
    sourceUrl: 'https://mars.nasa.gov/mars2020/science/goals/',
    attribution: 'NASA Science Directorate',
    factType: 'FACT'
  },

  discoveries: [
    {
      title: 'First HD Color Video & Audio of Martian Entry & Landing',
      description: 'EDL cameras captured full 230-second video of parachute deployment, heat shield drop, and skycrane touchdown.',
      scientificSignificance: 'Validated supersonic parachute inflation behavior under real Martian atmospheric conditions.',
      sourceUrl: 'https://mars.nasa.gov/news/8870/nasas-mars-2020-perseverance-rover-sends-first-hd-video-of-landing/',
      attribution: 'NASA JPL Press Release',
      factType: 'FACT'
    }
  ],

  missionDurationDays: {
    value: 0.005,
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/',
    attribution: 'NASA JPL EDL Telemetry',
    factType: 'DATA'
  },

  distanceTraveledKm: {
    value: null,
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/',
    attribution: 'NASA JPL',
    factType: 'DATA'
  },

  landingLocation: {
    latitude: 18.4447,
    longitude: 77.4508,
    regionName: 'Jezero Crater',
    featureName: 'Octavia E. Butler Landing Site (Rover Touchdown)',
    celestialBody: 'Mars',
    referenceFrame: 'IAU Mars 2000',
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/summary/',
    attribution: 'NASA JPL Mars 2020 Navigation'
  },

  finalLastKnownLocation: {
    latitude: 18.449,
    longitude: 77.443,
    regionName: 'Jezero Crater Floor',
    featureName: 'Descent Stage Impact Zone (Parachute at 18.455° N, 77.439° E)',
    celestialBody: 'Mars',
    referenceFrame: 'IAU Mars 2000',
    sourceUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA24420',
    attribution: 'NASA JPL / MRO HiRISE Orbital Photography'
  },

  routeData: null,

  missionEndReason: {
    value: 'The EDL hardware fulfilled its design purpose upon landing Perseverance and was intentionally separated/discarded across Jezero Crater.',
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/',
    attribution: 'NASA JPL Mars 2020 Team',
    factType: 'FACT'
  },

  silenceCauseDetails: {
    value: 'Descent stage rocket engines expended remaining hydrazine propellant during the 1.5 km controlled flyaway maneuver, impacting the ground at ~100 km/h as planned.',
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/entry-descent-landing/',
    attribution: 'NASA JPL EDL Flight Dynamics',
    factType: 'FACT'
  },

  scientificLegacy: {
    value: 'Pioneered Terrain-Relative Navigation (TRN) and MEDLI2 instrumentation, establishing the engineering benchmark for future Mars Sample Return landers.',
    sourceUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/',
    attribution: 'NASA JPL Engineering Directorate',
    factType: 'INTERPRETATION'
  },

  lastSignal: {
    lastCommDate: '2021-02-18',
    lastActivity: 'Transmitting real-time MEDLI2 aero-thermal telemetry and camera video while lowering Perseverance via 6-meter nylon tethers.',
    endingEvent: 'Rover touchdown detected; skycrane tethers cut; descent stage executed controlled flyaway maneuver to impact ~700m NW.',
    finalLocation: {
      latitude: 18.449,
      longitude: 77.443,
      regionName: 'Jezero Crater Floor',
      featureName: 'Descent Stage Impact Zone',
      celestialBody: 'Mars',
      referenceFrame: 'IAU Mars 2000',
      sourceUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA24420',
      attribution: 'NASA JPL / MRO HiRISE'
    },
    causeOfSilence: 'Intentional separation post-touchdown; hydrazine fuel spent during flyaway impact.',
    scientificLegacySummary: 'Recorded first HD video/audio of supersonic parachute deployment in thin Martian atmosphere.'
  },

  timeline: [
    {
      id: 'edl-1',
      date: '2020-07-30',
      title: 'Launch from Cape Canaveral',
      description: 'Atlas V rocket launched Mars 2020 carrying Perseverance & EDL stack.',
      category: 'Launch',
      nasaRefUrl: 'https://mars.nasa.gov/mars2020/'
    },
    {
      id: 'edl-2',
      date: '2021-02-18',
      title: 'Atmospheric Reentry (Mach 1.83 Parachute Deploy)',
      description: '21.5m supersonic parachute deployed in thin Martian atmosphere.',
      category: 'Milestone',
      nasaRefUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/'
    },
    {
      id: 'edl-3',
      date: '2021-02-18',
      title: 'Skycrane Touchdown & Tether Separation',
      description: 'Descent stage lowered rover onto Jezero crater floor.',
      category: 'Last Signal',
      nasaRefUrl: 'https://mars.nasa.gov/mars2020/timeline/landing/'
    },
    {
      id: 'edl-4',
      date: '2021-02-18',
      title: 'Controlled Flyaway Crash (~700m NW)',
      description: 'Descent stage flew away to impact site as planned.',
      category: 'Mission End',
      nasaRefUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA24420'
    }
  ],

  images: [
    {
      url: 'https://photojournal.jpl.nasa.gov/jpeg/PIA24420.jpg',
      title: 'HiRISE View of Perseverance Landing Gear Scattered across Mars',
      caption: 'MRO HiRISE orbiter photograph showing parachute, backshell, heat shield, and descent stage impact.',
      credit: 'NASA/JPL-Caltech/Univ. of Arizona',
      nasaId: 'PIA24420',
      sourceUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA24420'
    }
  ],

  imageCredits: ['NASA / JPL-Caltech / University of Arizona (HiRISE)'],

  nasaSourceUrls: [
    {
      title: 'NASA Mars 2020 EDL Overview',
      sourceName: 'NASA JPL',
      url: 'https://mars.nasa.gov/mars2020/timeline/landing/entry-descent-landing/',
      attribution: 'NASA JPL'
    }
  ],

  datasetUrls: [
    {
      title: 'MEDLI2 Sensor PDS Dataset',
      sourceName: 'NASA PDS Atmospheres Node',
      url: 'https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/MARS/mars2020.html',
      attribution: 'NASA PDS / NMSU'
    }
  ],

  remainingMissingData: [
    'Exact thermal deformation profile of backshell composite skin post-impact (uninspected in-situ).'
  ]
};
