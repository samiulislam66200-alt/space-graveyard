import { MissionData } from '../../../types/mission';

export const apollo11Eagle: MissionData = {
  id: 'apollo-11-eagle',
  missionName: 'Apollo 11 Lunar Module Descent Stage (Eagle)',
  destination: 'Moon',
  hardwareType: 'Lunar Module Descent Stage',
  currentStatus: 'Abandoned',
  
  launchDate: {
    value: '1969-07-16',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059A',
    attribution: 'NASA NSSDC Master Catalog',
    factType: 'FACT'
  },
  arrivalLandingDate: {
    value: '1969-07-20',
    sourceUrl: 'https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html',
    attribution: 'NASA History Office',
    factType: 'FACT'
  },
  lastCommunicationDate: {
    value: '1969-07-21',
    sourceUrl: 'https://history.nasa.gov/alsj/a11/a11.html',
    attribution: 'NASA Apollo Lunar Surface Journal',
    factType: 'FACT'
  },
  missionEndDate: {
    value: '1969-07-21',
    sourceUrl: 'https://history.nasa.gov/alsj/a11/a11.html',
    attribution: 'NASA Apollo Lunar Surface Journal',
    factType: 'FACT'
  },

  missionObjective: {
    value: 'Perform the first crewed lunar landing, serve as the descent and landing platform for Lunar Module Eagle, enable the deployment of Apollo 11 surface scientific experiments (EASEP) and returned lunar sample collection, and serve as the launch platform for the Ascent Stage.',
    sourceUrl: 'https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html',
    attribution: 'NASA Headquarters',
    factType: 'FACT'
  },

  hardwareDescription: {
    value: 'The Descent Stage (LM-5) served as the landing platform and launchpad for Lunar Module Eagle. An octagonal aluminum alloy structure supported by four truss-type landing legs, it housed the Descent Propulsion System (DPS) rocket engine, hypergolic propellant tanks, water and oxygen storage, and Modular Equipment Stowage Assemblies (MESA).',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C',
    attribution: 'NASA NSSDC Spacecraft Details',
    factType: 'FACT'
  },

  massKg: {
    value: { launchMassKg: 10334, landingMassKg: 2034 },
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C',
    attribution: 'NASA NSSDC',
    factType: 'DATA'
  },

  powerSource: {
    value: 'Four non-rechargeable Silver-Zinc batteries located in the descent stage providing 28V DC power (28 kWh total capacity).',
    sourceUrl: 'https://history.nasa.gov/alsj/a11/LM04_Handbook_Flight_Crew_pp109-170.pdf',
    attribution: 'Grumman Aerospace / NASA Apollo Flight Crew Handbook',
    factType: 'FACT'
  },

  components: [
    {
      name: 'Descent Propulsion System (DPS)',
      description: 'Gimballed, throttleable rocket engine (1,050 to 9,870 lbf thrust) using Aerozine 50 and Nitrogen Tetroxide.',
      role: 'Controlled lunar descent and soft landing.',
      materialComposition: 'Titanium pressure vessels, columbium engine nozzle extension.',
      sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C'
    },
    {
      name: 'Landing Gear Subsystem',
      description: 'Four cantilever legs with crushable aluminum honeycomb shock absorbers and 37-inch diameter landing pads.',
      role: 'Absorbed impact energy upon touchdown.',
      materialComposition: 'Aluminum alloy 2024-T3, crushable honeycomb cores.',
      sourceUrl: 'https://history.nasa.gov/alsj/a11/a11LM-Tech-Summary.pdf'
    }
  ],

  instruments: [
    {
      name: 'Passive Seismic Experiment Package',
      acronym: 'PSEP',
      description: 'Self-contained solar-powered seismometer package deployed separately on the lunar regolith ~16 meters from Eagle during Apollo 11 EVA.',
      scientificPurpose: 'Measure natural moonquakes, meteoroid impacts, and free oscillations of the Moon.',
      whatItMeasured: 'Seismic wave velocity and crustal thickness.',
      statusAtMissionEnd: 'Operated for 21 days until internal electronics overheated during lunar noon.',
      sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1969-059C-01',
      attribution: 'NASA NSSDC Experiment Record'
    },
    {
      name: 'Laser Ranging Retroreflector',
      acronym: 'LRRR',
      description: 'Passive array of 100 fused silica corner-cube reflectors mounted in an aluminum panel, deployed separately on the lunar surface during the Apollo 11 EVA.',
      scientificPurpose: 'Reflect Earth-based laser pulses to precisely measure Earth-Moon distance.',
      whatItMeasured: 'Earth-Moon orbital distance, lunar librations, and lunar recession rate.',
      statusAtMissionEnd: 'Operational indefinitely (requires no power). Still actively pinged today.',
      sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1969-059C-02',
      attribution: 'NASA NSSDC Experiment Record'
    }
  ],

  scientificPurpose: {
    value: 'Apollo 11 surface EVA science studied lunar surface composition, measured lunar seismic activity, determined lunar soil mechanical properties, and placed the Laser Ranging Retroreflector.',
    sourceUrl: 'https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html',
    attribution: 'NASA Science Mission Directorate',
    factType: 'FACT'
  },

  discoveries: [
    {
      title: 'Titanium-Rich Lunar Mare Basalt Composition',
      description: 'Returned lunar samples (21.5 kg) collected during Apollo 11 surface EVA proved lunar maria consist of ancient basaltic lava flows rich in titanium, formed 3.6 to 3.9 billion years ago.',
      scientificSignificance: 'Proved the Moon experienced widespread volcanic activity and differentiation.',
      sourceUrl: 'https://curator.jsc.nasa.gov/lunar/samples/apollo11/',
      attribution: 'NASA Johnson Space Center Astromaterials Curation',
      factType: 'FACT'
    },
    {
      title: 'Centimeter-Precision Earth-Moon Distance Measurements',
      description: 'The separately deployed LRRR retroreflector enabled ground observatories to measure the Moon distance to within centimeters.',
      scientificSignificance: 'Discovered the Moon is receding from Earth at 3.8 cm per year.',
      sourceUrl: 'https://tmpls.jpl.nasa.gov/',
      attribution: 'NASA JPL Laser Ranging Group',
      factType: 'FACT'
    }
  ],

  missionDurationDays: {
    value: 0.9,
    sourceUrl: 'https://history.nasa.gov/alsj/a11/a11.html',
    attribution: 'NASA Apollo Surface Journal',
    factType: 'DATA'
  },

  distanceTraveledKm: {
    value: null,
    sourceUrl: 'https://history.nasa.gov/alsj/a11/a11.html',
    attribution: 'NASA Apollo Surface Journal',
    factType: 'DATA'
  },

  landingLocation: {
    latitude: 0.67409,
    longitude: 23.47298,
    regionName: 'Mare Tranquillitatis (Sea of Tranquility)',
    featureName: 'Statio Tranquillitatis (Tranquility Base)',
    celestialBody: 'Moon',
    referenceFrame: 'Lunar Planetographic (IAU/IAG 2000)',
    sourceUrl: 'https://www.lroc.asu.edu/posts/273',
    attribution: 'LROC / Arizona State University'
  },

  finalLastKnownLocation: {
    latitude: 0.67409,
    longitude: 23.47298,
    regionName: 'Mare Tranquillitatis (Sea of Tranquility)',
    featureName: 'Statio Tranquillitatis',
    celestialBody: 'Moon',
    referenceFrame: 'Lunar Planetographic (IAU/IAG 2000)',
    sourceUrl: 'https://www.lroc.asu.edu/posts/273',
    attribution: 'LROC Orbital Images'
  },

  routeData: null,

  missionEndReason: {
    value: 'The Descent Stage completed its primary mission upon supporting the landing and serving as the launch platform for the Ascent Stage liftoff.',
    sourceUrl: 'https://history.nasa.gov/alsj/a11/a11.html',
    attribution: 'NASA Apollo Program Record',
    factType: 'FACT'
  },

  silenceCauseDetails: {
    value: 'Batteries were fully exhausted shortly after the crew launched in the Ascent Stage. The descent stage hardware remains in place as an undisturbed archaeological landing platform.',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C',
    attribution: 'NASA NSSDC',
    factType: 'FACT'
  },

  scientificLegacy: {
    value: 'Established human planetary landing capability. Apollo 11 surface experiments and returned samples provided fundamental insights into lunar history, while the separately deployed LRRR continues to yield gravity measurements over 55 years later.',
    sourceUrl: 'https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html',
    attribution: 'NASA Headquarters',
    factType: 'INTERPRETATION'
  },

  lastSignal: {
    lastCommDate: '1969-07-21',
    lastActivity: 'Descent Propulsion System engine performed soft touchdown at Tranquility Base; Ascent Stage launched July 21, 1969.',
    endingEvent: 'Descent Stage remained on lunar surface as permanent launch platform for Ascent Stage departure.',
    finalLocation: {
      latitude: 0.67409,
      longitude: 23.47298,
      regionName: 'Mare Tranquillitatis',
      featureName: 'Tranquility Base',
      celestialBody: 'Moon',
      referenceFrame: 'Lunar Planetographic (IAU/IAG 2000)',
      sourceUrl: 'https://www.lroc.asu.edu/posts/273',
      attribution: 'LROC / ASU'
    },
    causeOfSilence: 'Batteries depleted after Ascent Stage departure; descent platform preserved as historic site.',
    scientificLegacySummary: 'Apollo 11 surface EVA delivered 21.5 kg of lunar samples and deployed LRRR laser reflector.'
  },

  timeline: [
    {
      id: 'a11-1',
      date: '1969-07-16',
      title: 'Launch from Kennedy Space Center',
      description: 'Saturn V SA-506 rocket launched Apollo 11.',
      category: 'Launch',
      nasaRefUrl: 'https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html'
    },
    {
      id: 'a11-2',
      date: '1969-07-20',
      title: 'Touchdown at Tranquility Base',
      description: 'LM Eagle landed at Mare Tranquillitatis.',
      category: 'Arrival',
      nasaRefUrl: 'https://history.nasa.gov/alsj/a11/a11.html'
    },
    {
      id: 'a11-3',
      date: '1969-07-21',
      title: 'First Step & EASEP Deployment',
      description: 'Neil Armstrong and Buzz Aldrin deployed PSEP seismometer and LRRR laser reflector on the lunar regolith.',
      category: 'Discovery',
      nasaRefUrl: 'https://history.nasa.gov/alsj/a11/a11.html'
    },
    {
      id: 'a11-4',
      date: '1969-07-21',
      title: 'Ascent Stage Liftoff / Descent Stage Separation',
      description: 'Descent Stage remained on surface as launch platform for Ascent Stage.',
      category: 'Last Signal',
      nasaRefUrl: 'https://history.nasa.gov/alsj/a11/a11.html'
    }
  ],

  images: [
    {
      url: 'https://www.nasa.gov/wp-content/uploads/2023/03/492586main_AS11-40-5921_full.jpg',
      title: 'Apollo 11 Lunar Module Eagle Descent Stage',
      caption: 'Astronaut Buzz Aldrin stands near the leg of the Lunar Module Eagle Descent Stage at Tranquility Base.',
      credit: 'NASA / Neil Armstrong',
      nasaId: 'AS11-40-5921',
      sourceUrl: 'https://images.nasa.gov/details-as11-40-5921'
    }
  ],

  imageCredits: ['NASA / Neil Armstrong'],

  nasaSourceUrls: [
    {
      title: 'Apollo 11 Lunar Module Record',
      sourceName: 'NASA NSSDC Master Catalog',
      url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C',
      attribution: 'NASA Goddard'
    }
  ],

  datasetUrls: [
    {
      title: 'LROC Apollo 11 Data',
      sourceName: 'PDS Cartography and Imaging Node',
      url: 'https://pds-imaging.jpl.nasa.gov/volumes/lro.html',
      attribution: 'NASA PDS / ASU'
    }
  ],

  remainingMissingData: [
    'Exact temperature degradation curve of descent stage aluminum frame over 50+ years (unmeasured).'
  ]
};
