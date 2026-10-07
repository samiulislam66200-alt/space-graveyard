import { MissionData } from '../../../types/mission';

export const insightLander: MissionData = {
  id: 'insight-lander',
  missionName: 'InSight Lander',
  destination: 'Mars',
  hardwareType: 'Stationary Lander',
  currentStatus: 'Silent',
  
  launchDate: {
    value: '2018-05-05',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-042A',
    attribution: 'NASA NSSDC Master Catalog',
    factType: 'FACT'
  },
  arrivalLandingDate: {
    value: '2018-11-26',
    sourceUrl: 'https://mars.nasa.gov/insight/timeline/landing/summary/',
    attribution: 'NASA JPL InSight Project',
    factType: 'FACT'
  },
  lastCommunicationDate: {
    value: '2022-12-15',
    sourceUrl: 'https://www.jpl.nasa.gov/news/nasas-insight-retires-after-insightful-mission-on-mars',
    attribution: 'NASA JPL News Statement',
    factType: 'FACT'
  },
  missionEndDate: {
    value: '2022-12-21',
    sourceUrl: 'https://www.jpl.nasa.gov/news/nasas-insight-retires-after-insightful-mission-on-mars',
    attribution: 'NASA Headquarters Declaration',
    factType: 'FACT'
  },

  missionObjective: {
    value: 'Investigate the deep interior structure of Mars, including its crust, mantle, and core, and measure tectonic activity and meteoroid impacts.',
    sourceUrl: 'https://mars.nasa.gov/insight/mission/overview/',
    attribution: 'NASA JPL Mission Overview',
    factType: 'FACT'
  },

  hardwareDescription: {
    value: 'Fixed three-legged lander platform derived from Phoenix lander heritage, equipped with two decagonal solar arrays, Instrument Deployment Arm (IDA), wind/thermal shield enclosure, and ultra-sensitive seismometers.',
    sourceUrl: 'https://mars.nasa.gov/insight/spacecraft/lander/',
    attribution: 'Lockheed Martin / NASA JPL',
    factType: 'FACT'
  },

  massKg: {
    value: { launchMassKg: 694, landingMassKg: 358 },
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-042A',
    attribution: 'NASA NSSDC',
    factType: 'DATA'
  },

  powerSource: {
    value: 'Two 2.15-meter decagonal solar arrays generating up to 600–700 Watts at landing, paired with dual 25 Amp-hour Lithium-ion batteries.',
    sourceUrl: 'https://mars.nasa.gov/insight/spacecraft/lander/power/',
    attribution: 'NASA JPL',
    factType: 'FACT'
  },

  components: [
    {
      name: 'Instrument Deployment Arm (IDA)',
      description: '2.4-meter robotic arm with a 5-finger grapple hook used to place SEIS and HP3 directly onto Martian soil.',
      role: 'Precision placement of surface science instruments.',
      sourceUrl: 'https://mars.nasa.gov/insight/spacecraft/instruments/arm/'
    }
  ],

  instruments: [
    {
      name: 'Seismic Experiment for Interior Structure',
      acronym: 'SEIS',
      description: 'Ultra-sensitive 6-axis seismometer capable of measuring ground vibrations smaller than an atom width.',
      scientificPurpose: 'Detect marsquakes, meteoroid impacts, and subsurface layer reflections.',
      whatItMeasured: 'Seismic wave arrival times, frequencies, and polarization.',
      statusAtMissionEnd: 'Operational until power shutdown.',
      sourceUrl: 'https://mars.nasa.gov/insight/spacecraft/instruments/seis/',
      attribution: 'CNES (France) / IPGP / NASA JPL'
    }
  ],

  scientificPurpose: {
    value: 'Map the internal layering (crust, mantle, core) of a terrestrial planet for the first time outside of Earth and Moon.',
    sourceUrl: 'https://mars.nasa.gov/insight/science/overview/',
    attribution: 'NASA Science Mission Directorate',
    factType: 'FACT'
  },

  discoveries: [
    {
      title: 'First Comprehensive Map of Mars Interior',
      description: 'InSight data revealed Martian crust thickness is 20 to 40 km, mantle extends to 1,560 km, and liquid metallic core radius is ~1,830 km.',
      scientificSignificance: 'Proved Mars core is liquid iron-nickel enriched in lighter elements like sulfur and oxygen.',
      sourceUrl: 'https://www.nasa.gov/news-release/nasas-insight-reveals-the-deep-interior-of-mars/',
      attribution: 'Science Magazine / NASA JPL',
      factType: 'FACT'
    }
  ],

  missionDurationDays: {
    value: 1440,
    sourceUrl: 'https://mars.nasa.gov/insight/mission/overview/',
    attribution: 'NASA JPL Telemetry',
    factType: 'DATA'
  },

  distanceTraveledKm: {
    value: null,
    sourceUrl: 'https://mars.nasa.gov/insight/spacecraft/lander/',
    attribution: 'NASA JPL',
    factType: 'DATA'
  },

  landingLocation: {
    latitude: 4.5024,
    longitude: 135.6234,
    regionName: 'Elysium Planitia',
    featureName: 'Homestead Hollow',
    celestialBody: 'Mars',
    referenceFrame: 'IAU Mars 2000',
    sourceUrl: 'https://mars.nasa.gov/insight/timeline/landing/summary/',
    attribution: 'NASA JPL InSight Landing Team'
  },

  finalLastKnownLocation: {
    latitude: 4.5024,
    longitude: 135.6234,
    regionName: 'Elysium Planitia',
    featureName: 'Homestead Hollow',
    celestialBody: 'Mars',
    referenceFrame: 'IAU Mars 2000',
    sourceUrl: 'https://www.jpl.nasa.gov/news/nasas-insight-retires-after-insightful-mission-on-mars',
    attribution: 'NASA JPL / MRO HiRISE Orbital Photos'
  },

  routeData: null,

  missionEndReason: {
    value: 'Solar arrays became heavily coated with atmospheric dust over 4 years, dropping daily energy production below the operational threshold needed to power survival heaters and radio transceivers.',
    sourceUrl: 'https://www.jpl.nasa.gov/news/nasas-insight-retires-after-insightful-mission-on-mars',
    attribution: 'NASA JPL Statement',
    factType: 'FACT'
  },

  silenceCauseDetails: {
    value: 'Dust thickness on solar panels reduced energy production from 5,000 Watt-hours/sol at landing down to under 300 Watt-hours/sol in December 2022. Final transmission occurred December 15, 2022.',
    sourceUrl: 'https://mars.nasa.gov/insight/news/',
    attribution: 'NASA JPL Engineering Log',
    factType: 'FACT'
  },

  scientificLegacy: {
    value: 'Provided humanity with the first 3D structural atlas of Mars interior, transforming planetary geophysics and terrestrial planet evolution models.',
    sourceUrl: 'https://www.jpl.nasa.gov/news/nasas-insight-retires-after-insightful-mission-on-mars',
    attribution: 'NASA Science Mission Directorate',
    factType: 'INTERPRETATION'
  },

  lastSignal: {
    lastCommDate: '2022-12-15',
    lastActivity: 'Transmitted final engineering status frame and environmental data from Elysium Planitia on Dec 15, 2022.',
    endingEvent: 'Daily energy production fell below survival threshold due to heavy dust accumulation on solar arrays.',
    finalLocation: {
      latitude: 4.5024,
      longitude: 135.6234,
      regionName: 'Elysium Planitia',
      featureName: 'Homestead Hollow',
      celestialBody: 'Mars',
      referenceFrame: 'IAU Mars 2000',
      sourceUrl: 'https://www.jpl.nasa.gov/news/nasas-insight-retires-after-insightful-mission-on-mars',
      attribution: 'NASA JPL'
    },
    causeOfSilence: 'Atmospheric dust coverage reduced solar power output below survival heater threshold.',
    scientificLegacySummary: 'Mapped Mars interior layers (crust, mantle, core) and recorded >1,300 marsquakes.'
  },

  timeline: [
    {
      id: 'ins-1',
      date: '2018-05-05',
      title: 'Launch from Vandenberg Space Force Base',
      description: 'Atlas V rocket launched InSight towards Mars.',
      category: 'Launch',
      nasaRefUrl: 'https://mars.nasa.gov/insight/'
    },
    {
      id: 'ins-2',
      date: '2018-11-26',
      title: 'Touchdown at Elysium Planitia',
      description: 'Landed at Homestead Hollow plain.',
      category: 'Arrival',
      nasaRefUrl: 'https://mars.nasa.gov/insight/'
    },
    {
      id: 'ins-3',
      date: '2018-12-19',
      title: 'SEIS Seismometer Deployment on Soil',
      description: 'Robotic arm deployed SEIS onto Martian soil.',
      category: 'Milestone',
      nasaRefUrl: 'https://mars.nasa.gov/insight/'
    },
    {
      id: 'ins-4',
      date: '2021-07-22',
      title: 'First 3D Atlas of Mars Core & Crust Published',
      description: 'Data published in Science revealing liquid metal core radius (~1,830 km).',
      category: 'Discovery',
      nasaRefUrl: 'https://www.nasa.gov/news-release/nasas-insight-reveals-the-deep-interior-of-mars/'
    },
    {
      id: 'ins-5',
      date: '2022-12-15',
      title: 'Final Communication Transmitted',
      description: 'Final telemetry frame received before solar power depletion.',
      category: 'Last Signal',
      nasaRefUrl: 'https://www.jpl.nasa.gov/news/nasas-insight-retires-after-insightful-mission-on-mars'
    },
    {
      id: 'ins-6',
      date: '2022-12-21',
      title: 'Official Mission End Declaration',
      description: 'NASA declared mission end after two missed comm calls.',
      category: 'Mission End',
      nasaRefUrl: 'https://www.jpl.nasa.gov/news/nasas-insight-retires-after-insightful-mission-on-mars'
    }
  ],

  images: [
    {
      url: 'https://photojournal.jpl.nasa.gov/jpeg/PIA25287.jpg',
      title: 'InSight Lander Final Selfie on Mars',
      caption: 'Final selfie of InSight taken by robotic arm showing dust accumulation.',
      credit: 'NASA/JPL-Caltech',
      nasaId: 'PIA25287',
      sourceUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA25287'
    }
  ],

  imageCredits: ['NASA / JPL-Caltech'],

  nasaSourceUrls: [
    {
      title: 'InSight Mission Home',
      sourceName: 'NASA JPL Mars Exploration Program',
      url: 'https://mars.nasa.gov/insight/',
      attribution: 'NASA JPL'
    }
  ],

  datasetUrls: [
    {
      title: 'InSight SEIS PDS Dataset',
      sourceName: 'NASA PDS Geosciences Node',
      url: 'https://pds-geosciences.wustl.edu/missions/insight/',
      attribution: 'NASA PDS / WUSTL'
    }
  ],

  remainingMissingData: [
    'Sub-surface core temperature at 5 meter depth (unmeasured due to HP3 mole mechanical impedance).'
  ]
};
