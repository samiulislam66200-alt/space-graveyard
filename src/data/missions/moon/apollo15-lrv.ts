import { MissionData } from '../../../types/mission';

export const apollo15LRV: MissionData = {
  id: 'apollo-15-lrv',
  missionName: 'Apollo 15 Lunar Roving Vehicle (LRV-002)',
  destination: 'Moon',
  hardwareType: 'Lunar Roving Vehicle',
  currentStatus: 'Abandoned',
  
  launchDate: {
    value: '1971-07-26',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063A',
    attribution: 'NASA NSSDC Master Catalog',
    factType: 'FACT'
  },
  arrivalLandingDate: {
    value: '1971-07-30',
    sourceUrl: 'https://history.nasa.gov/alsj/a15/a15.html',
    attribution: 'NASA Apollo Lunar Surface Journal',
    factType: 'FACT'
  },
  lastCommunicationDate: {
    value: '1971-08-02',
    sourceUrl: 'https://history.nasa.gov/alsj/a15/a15.html',
    attribution: 'NASA Apollo Lunar Surface Journal',
    factType: 'FACT'
  },
  missionEndDate: {
    value: '1971-08-02',
    sourceUrl: 'https://history.nasa.gov/alsj/a15/a15.html',
    attribution: 'NASA Apollo Surface Journal',
    factType: 'FACT'
  },

  missionObjective: {
    value: 'Expand astronaut surface exploration range across the Hadley-Apennine region, transport heavy scientific equipment, collect geological samples near Hadley Rille, and broadcast live television during LM Falcon ascent.',
    sourceUrl: 'https://www.nasa.gov/mission_pages/apollo/missions/apollo15.html',
    attribution: 'NASA Headquarters',
    factType: 'FACT'
  },

  hardwareDescription: {
    value: 'An open-frame electric vehicle measuring 3.1 meters long and 1.8 meters wide, featuring four individually motorized wheels, T-handle steering controller, lawn-chair style seats, high-gain parabolic antenna, and remotely operated TV camera.',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C',
    attribution: 'NASA NSSDC Catalog',
    factType: 'FACT'
  },

  massKg: {
    value: { launchMassKg: 210, landingMassKg: 210 },
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C',
    attribution: 'Boeing / NASA MSFC',
    factType: 'DATA'
  },

  powerSource: {
    value: 'Two non-rechargeable 36-volt Silver-Zinc batteries delivering 121 Amp-hours each.',
    sourceUrl: 'https://history.nasa.gov/alsj/a15/a15.lrvman.pdf',
    attribution: 'Boeing Aerospace / NASA MSFC LRV Manual',
    factType: 'FACT'
  },

  components: [
    {
      name: 'Electric Wheel Drive System',
      description: 'Four 0.25-horsepower DC electric motors sealed inside titanium wheel hubs with 80:1 harmonic drive steering gearboxes.',
      role: 'Provided 4-wheel drive capability up to 13 km/h speed.',
      materialComposition: 'Woven zinc-coated steel wire tires with titanium chevron treads.',
      sourceUrl: 'https://history.nasa.gov/alsj/a15/a15.lrvman.pdf'
    }
  ],

  instruments: [
    {
      name: 'Ground-Controlled Color TV Camera',
      acronym: 'GCTA',
      description: 'Remote panning and tilting color camera mounted on the LRV front bumper.',
      scientificPurpose: 'Provide scientists in Houston real-time visual assessment of geological features.',
      whatItMeasured: 'High-resolution surface video and geological strata context.',
      statusAtMissionEnd: 'Operated until internal thermal limit reached post-liftoff.',
      sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1971-063A-08',
      attribution: 'RCA / NASA MSFC'
    }
  ],

  scientificPurpose: {
    value: 'Enable long-distance geological traverses across mountainous terrain, collect pristine crustal samples, and study the formation of lunar rilles.',
    sourceUrl: 'https://www.nasa.gov/mission_pages/apollo/missions/apollo15.html',
    attribution: 'NASA Science Directorate',
    factType: 'FACT'
  },

  discoveries: [
    {
      title: 'Discovery of the "Genesis Rock" (Sample 15415)',
      description: 'Astronauts David Scott and James Irwin discovered a 4.1 billion-year-old sample of pure white ferroan anorthosite at Spur Crater.',
      scientificSignificance: 'Confirmed the Lunar Magma Ocean hypothesis, proving the primordial lunar crust crystallized from a global molten ocean.',
      sourceUrl: 'https://curator.jsc.nasa.gov/lunar/samples/apollo15/',
      attribution: 'NASA JSC Astromaterials Curation',
      factType: 'FACT'
    }
  ],

  missionDurationDays: {
    value: 3.1,
    sourceUrl: 'https://history.nasa.gov/alsj/a15/a15.html',
    attribution: 'NASA Apollo Surface Journal',
    factType: 'DATA'
  },

  distanceTraveledKm: {
    value: 27.76,
    sourceUrl: 'https://history.nasa.gov/alsj/a15/a15.html',
    attribution: 'NASA Apollo Surface Journal Data',
    factType: 'DATA'
  },

  landingLocation: {
    latitude: 26.1322,
    longitude: 3.6339,
    regionName: 'Hadley-Apennine Region',
    featureName: 'Hadley Base (LM Falcon Site)',
    celestialBody: 'Moon',
    referenceFrame: 'Lunar Planetographic (IAU/IAG 2000)',
    sourceUrl: 'https://www.lroc.asu.edu/posts/505',
    attribution: 'LROC / Arizona State University'
  },

  finalLastKnownLocation: {
    latitude: 26.1322,
    longitude: 3.6339,
    regionName: 'Hadley-Apennine Region',
    featureName: 'Hadley Base (Parked ~96m East of Falcon)',
    celestialBody: 'Moon',
    referenceFrame: 'Lunar Planetographic (IAU/IAG 2000)',
    sourceUrl: 'https://www.lroc.asu.edu/posts/505',
    attribution: 'LROC High Resolution Imaging'
  },

  routeData: null,

  missionEndReason: {
    value: 'The LRV completed all planned geological traverses and was intentionally parked in a location where its Ground-Controlled TV Camera could film the ascent stage liftoff.',
    sourceUrl: 'https://history.nasa.gov/alsj/a15/a15.html',
    attribution: 'NASA Apollo Program',
    factType: 'FACT'
  },

  silenceCauseDetails: {
    value: 'Batteries expired following post-liftoff television transmission. The rover remains intact at Hadley Base as an archaeological site.',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C',
    attribution: 'NASA NSSDC',
    factType: 'FACT'
  },

  scientificLegacy: {
    value: 'Transformed lunar exploration from static landing footprints into mobile geological field work, setting the design blueprint for all future planetary rovers.',
    sourceUrl: 'https://www.nasa.gov/mission_pages/apollo/missions/apollo15.html',
    attribution: 'NASA History Office',
    factType: 'INTERPRETATION'
  },

  lastSignal: {
    lastCommDate: '1971-08-02',
    lastActivity: 'Positioned ~96m East of LM Falcon to film ascent stage liftoff via remotely controlled GCTA TV camera.',
    endingEvent: 'Filmed Apollo 15 LM Falcon liftoff live on television; camera operated until internal battery exhaustion.',
    finalLocation: {
      latitude: 26.1322,
      longitude: 3.6339,
      regionName: 'Hadley-Apennine Region',
      featureName: 'Hadley Base (Parked East of LM Falcon)',
      celestialBody: 'Moon',
      referenceFrame: 'Lunar Planetographic (IAU/IAG 2000)',
      sourceUrl: 'https://www.lroc.asu.edu/posts/505',
      attribution: 'LROC / ASU'
    },
    causeOfSilence: 'Silver-Zinc battery depletion following post-liftoff TV transmission.',
    scientificLegacySummary: 'Pioneered crewed off-world vehicular mobility and sample collection across 27.76 km.'
  },

  timeline: [
    {
      id: 'a15-1',
      date: '1971-07-26',
      title: 'Launch of Apollo 15',
      description: 'Saturn V launched Apollo 15 carrying LRV-002.',
      category: 'Launch',
      nasaRefUrl: 'https://history.nasa.gov/alsj/a15/'
    },
    {
      id: 'a15-2',
      date: '1971-07-30',
      title: 'Hadley-Apennine Landing',
      description: 'LM Falcon landed near Hadley Rille.',
      category: 'Arrival',
      nasaRefUrl: 'https://history.nasa.gov/alsj/a15/'
    },
    {
      id: 'a15-3',
      date: '1971-08-01',
      title: 'Discovery of Genesis Rock (Sample 15415)',
      description: 'Found 4.1 billion year old anorthosite crust at Spur Crater.',
      category: 'Discovery',
      nasaRefUrl: 'https://curator.jsc.nasa.gov/lunar/samples/apollo15/'
    },
    {
      id: 'a15-4',
      date: '1971-08-02',
      title: 'Parked to Film Liftoff / Final TV Transmission',
      description: 'Parked ~96m East of LM Falcon; broadcasted ascent liftoff.',
      category: 'Last Signal',
      nasaRefUrl: 'https://history.nasa.gov/alsj/a15/'
    }
  ],

  images: [
    {
      url: 'https://www.nasa.gov/wp-content/uploads/2023/03/494663main_AS15-88-11866_full.jpg',
      title: 'Apollo 15 Lunar Roving Vehicle at Hadley Rille',
      caption: 'Astronaut James Irwin stands beside the LRV at the rim of Hadley Rille.',
      credit: 'NASA / David Scott',
      nasaId: 'AS15-88-11866',
      sourceUrl: 'https://images.nasa.gov/details-as15-88-11866'
    }
  ],

  imageCredits: ['NASA / David Scott'],

  nasaSourceUrls: [
    {
      title: 'Apollo 15 LRV Spacecraft Record',
      sourceName: 'NASA NSSDC Master Catalog',
      url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C',
      attribution: 'NASA Goddard'
    }
  ],

  datasetUrls: [
    {
      title: 'LROC Apollo 15 Image Set',
      sourceName: 'LROC / ASU',
      url: 'https://www.lroc.asu.edu/posts/505',
      attribution: 'LROC / ASU'
    }
  ],

  remainingMissingData: [
    'Exact structural corrosion / micrometeorite pitting rate on wire tire mesh (uninspected since 1971).'
  ]
};
