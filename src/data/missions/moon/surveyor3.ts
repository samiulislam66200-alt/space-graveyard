import { MissionData } from '../../../types/mission';

export const surveyor3: MissionData = {
  id: 'surveyor-3',
  missionName: 'Surveyor 3',
  destination: 'Moon',
  hardwareType: 'Stationary Lander',
  currentStatus: 'Abandoned',
  
  launchDate: {
    value: '1967-04-17',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
    attribution: 'NASA NSSDC Master Catalog',
    factType: 'FACT'
  },
  arrivalLandingDate: {
    value: '1967-04-20',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
    attribution: 'NASA Goddard Space Flight Center',
    factType: 'FACT'
  },
  lastCommunicationDate: {
    value: '1967-05-03',
    sourceUrl: 'https://history.nasa.gov/SP-184/sp184.htm',
    attribution: 'NASA SP-184 Surveyor Project Report',
    factType: 'FACT'
  },
  missionEndDate: {
    value: '1967-05-03',
    sourceUrl: 'https://history.nasa.gov/SP-184/sp184.htm',
    attribution: 'NASA Project Report',
    factType: 'FACT'
  },

  missionObjective: {
    value: 'Perform a soft landing on Oceanus Procellarum, transmit television images of the lunar surface, analyze soil bearing strength, and support Apollo site selection.',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
    attribution: 'NASA JPL / Hughes Aircraft',
    factType: 'FACT'
  },

  hardwareDescription: {
    value: 'A 3-legged aluminum tubular tripod structure measuring 3.3 meters high, featuring a top-mounted solar array, high-gain planar array antenna, TV camera assembly, and a motorized soil scoop arm.',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
    attribution: 'NASA NSSDC',
    factType: 'FACT'
  },

  massKg: {
    value: { launchMassKg: 1026, landingMassKg: 302 },
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
    attribution: 'NASA NSSDC',
    factType: 'DATA'
  },

  powerSource: {
    value: 'Solar array delivering 85 Watts power paired with rechargeable Silver-Zinc batteries.',
    sourceUrl: 'https://history.nasa.gov/SP-184/sp184.htm',
    attribution: 'NASA JPL',
    factType: 'FACT'
  },

  components: [
    {
      name: 'Soil Mechanics Surface Sampler Scoop',
      description: 'Motorized pantograph arm equipped with a 12 cm long x 5 cm wide scoop bucket.',
      role: 'Dug four trenches up to 18 cm deep to test soil shear strength.',
      materialComposition: 'Stainless steel bucket and aluminum arm assembly.',
      sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1967-035A-02'
    }
  ],

  instruments: [
    {
      name: 'Surveyor Slow-Scan TV Camera',
      description: 'Vidicon tube camera with variable focus and 25-degree field of view.',
      scientificPurpose: 'Assess lunar surface topography, particle size distribution, and landing footpad impressions.',
      whatItMeasured: 'Visible light reflectance and surface texture.',
      statusAtMissionEnd: 'Operated through first lunar day; returned to Earth by Apollo 12 crew in 1969.',
      sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1967-035A-01',
      attribution: 'NASA JPL / Hughes'
    }
  ],

  scientificPurpose: {
    value: 'Verify that lunar surface soil could support the weight of the Apollo Lunar Module without collapsing or sinking.',
    sourceUrl: 'https://history.nasa.gov/SP-184/sp184.htm',
    attribution: 'NASA Science Directorate',
    factType: 'FACT'
  },

  discoveries: [
    {
      title: 'Confirmed Lunar Soil Bearing Capacity for Apollo Landings',
      description: 'Surveyor 3 trenching experiments demonstrated lunar regolith possesses cohesive bearing strength of ~0.7 N/cm², sufficient for heavy human landers.',
      scientificSignificance: 'Eliminated fears that Apollo landers would sink into deep fluffy dust.',
      sourceUrl: 'https://history.nasa.gov/SP-184/sp184.htm',
      attribution: 'NASA SP-184 Analysis Team',
      factType: 'FACT'
    },
    {
      title: 'First Human Retrieval of Off-World Hardware (Apollo 12)',
      description: 'On Nov 19, 1969, Apollo 12 astronauts Pete Conrad and Alan Bean landed LM Intrepid 180m away, walked to Surveyor 3, and unbolted its TV camera and scoop to bring back to Earth.',
      scientificSignificance: 'Provided engineers the first empirical data on long-term space weathering, radiation discoloration, and micrometeorite pitting over 2.5 years on the Moon.',
      sourceUrl: 'https://history.nasa.gov/alsj/a12/a12.surveyor.html',
      attribution: 'NASA Apollo 12 Surface Journal',
      factType: 'FACT'
    }
  ],

  missionDurationDays: {
    value: 13,
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
    attribution: 'NASA NSSDC',
    factType: 'DATA'
  },

  distanceTraveledKm: {
    value: null,
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
    attribution: 'NASA NSSDC',
    factType: 'DATA'
  },

  landingLocation: {
    latitude: -3.01562,
    longitude: -23.41855,
    regionName: 'Oceanus Procellarum (Ocean of Storms)',
    featureName: 'Surveyor Crater',
    celestialBody: 'Moon',
    referenceFrame: 'Lunar Planetographic (IAU/IAG 2000)',
    sourceUrl: 'https://www.lroc.asu.edu/posts/141',
    attribution: 'LROC / Arizona State University'
  },

  finalLastKnownLocation: {
    latitude: -3.01562,
    longitude: -23.41855,
    regionName: 'Oceanus Procellarum',
    featureName: 'Surveyor Crater (180m from Apollo 12 site)',
    celestialBody: 'Moon',
    referenceFrame: 'Lunar Planetographic (IAU/IAG 2000)',
    sourceUrl: 'https://www.lroc.asu.edu/posts/141',
    attribution: 'LROC Orbital Images'
  },

  routeData: null,

  missionEndReason: {
    value: 'Electronics frozen during the 14-day extreme cold (-150°C) of the lunar night. Batteries did not recover during second lunar day.',
    sourceUrl: 'https://history.nasa.gov/SP-184/sp184.htm',
    attribution: 'NASA Project Report',
    factType: 'FACT'
  },

  silenceCauseDetails: {
    value: 'Extreme thermal contraction during lunar night cracked internal soldered circuit connections.',
    sourceUrl: 'https://history.nasa.gov/SP-184/sp184.htm',
    attribution: 'NASA JPL Post-Mission Analysis',
    factType: 'FACT'
  },

  scientificLegacy: {
    value: 'Demonstrated the feasibility of soft lunar landings and established the precedent for hardware return and space material degradation analysis.',
    sourceUrl: 'https://history.nasa.gov/alsj/a12/a12.surveyor.html',
    attribution: 'NASA History Office',
    factType: 'INTERPRETATION'
  },

  lastSignal: {
    lastCommDate: '1967-05-03',
    lastActivity: 'Transmitted frame 6,315 showing lunar sunset across Oceanus Procellarum crater rim on May 3, 1967.',
    endingEvent: 'Extreme 14-day lunar night froze electronics; batteries failed to recharge when solar panels re-illuminated.',
    finalLocation: {
      latitude: -3.01562,
      longitude: -23.41855,
      regionName: 'Oceanus Procellarum',
      featureName: 'Surveyor Crater',
      celestialBody: 'Moon',
      referenceFrame: 'Lunar Planetographic (IAU/IAG 2000)',
      sourceUrl: 'https://www.lroc.asu.edu/posts/141',
      attribution: 'LROC / ASU'
    },
    causeOfSilence: 'Extreme thermal contraction (-150°C) cracked solder joints during 14-day lunar night.',
    scientificLegacySummary: 'Visited by Apollo 12 astronauts in 1969 who unbolted TV camera for Earth analysis.'
  },

  timeline: [
    {
      id: 'sur-1',
      date: '1967-04-17',
      title: 'Launch from Cape Kennedy',
      description: 'Atlas-Centaur rocket launched Surveyor 3.',
      category: 'Launch',
      nasaRefUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A'
    },
    {
      id: 'sur-2',
      date: '1967-04-20',
      title: 'Touchdown in Surveyor Crater',
      description: 'Soft-landed inside Oceanus Procellarum crater slope.',
      category: 'Arrival',
      nasaRefUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A'
    },
    {
      id: 'sur-3',
      date: '1967-05-03',
      title: 'Final Sunset Photo & Thermal Freeze',
      description: 'Transmitted 6,315th television image before lunar night.',
      category: 'Last Signal',
      nasaRefUrl: 'https://history.nasa.gov/SP-184/sp184.htm'
    },
    {
      id: 'sur-4',
      date: '1969-11-19',
      title: 'Visited by Apollo 12 Astronauts (Hardware Returned)',
      description: 'Pete Conrad & Alan Bean landed 180m away and retrieved TV camera.',
      category: 'Milestone',
      nasaRefUrl: 'https://history.nasa.gov/alsj/a12/a12.surveyor.html'
    }
  ],

  images: [
    {
      url: 'https://history.nasa.gov/alsj/a12/AS12-48-7133HR.jpg',
      title: 'Apollo 12 Astronaut Pete Conrad Inspecting Surveyor 3',
      caption: 'Astronaut Pete Conrad examines Surveyor 3 lander 180m from Intrepid LM.',
      credit: 'NASA / Alan Bean',
      nasaId: 'AS12-48-7133',
      sourceUrl: 'https://history.nasa.gov/alsj/a12/AS12-48-7133HR.jpg'
    }
  ],

  imageCredits: ['NASA / Alan Bean (Apollo 12)'],

  nasaSourceUrls: [
    {
      title: 'Surveyor 3 Spacecraft Record',
      sourceName: 'NASA NSSDC Master Catalog',
      url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
      attribution: 'NASA Goddard'
    }
  ],

  datasetUrls: [
    {
      title: 'LROC Surveyor 3 Data',
      sourceName: 'LROC / ASU',
      url: 'https://www.lroc.asu.edu/posts/141',
      attribution: 'LROC / ASU'
    }
  ],

  remainingMissingData: [
    'Sub-surface soil moisture (not measured by 1967 sensors; presumed zero).'
  ]
};
