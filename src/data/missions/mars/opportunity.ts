import { MissionData } from '../../../types/mission';

export const opportunityRover: MissionData = {
  id: 'opportunity-rover',
  missionName: 'Opportunity Rover (MER-B)',
  destination: 'Mars',
  hardwareType: 'Rover',
  currentStatus: 'Silent',
  
  launchDate: {
    value: '2003-07-07',
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-032A',
    attribution: 'NASA NSSDC Master Catalog',
    factType: 'FACT'
  },
  arrivalLandingDate: {
    value: '2004-01-25',
    sourceUrl: 'https://mars.nasa.gov/mer/mission/overview/',
    attribution: 'NASA JPL Mars Exploration Rover Project',
    factType: 'FACT'
  },
  lastCommunicationDate: {
    value: '2018-06-10',
    sourceUrl: 'https://mars.nasa.gov/news/8413/nasas-opportunity-rover-mission-exits-silent-mode/',
    attribution: 'NASA JPL News',
    factType: 'FACT'
  },
  missionEndDate: {
    value: '2019-02-13',
    sourceUrl: 'https://www.nasa.gov/press-release/nasa-s-record-setting-opportunity-rover-mission-comes-to-end',
    attribution: 'NASA Headquarters Press Release',
    factType: 'FACT'
  },

  missionObjective: {
    value: 'Search for and characterize a wide range of rocks and soils that hold clues to past water activity on Mars, particularly at Meridiani Planum where hematite minerals were detected from orbit.',
    sourceUrl: 'https://mars.nasa.gov/mer/mission/science/goals/',
    attribution: 'NASA JPL',
    factType: 'FACT'
  },

  hardwareDescription: {
    value: 'Six-wheeled solar-powered rover equipped with a rocker-bogie suspension, deployable mast for optical cameras, and an articulated robotic arm (Instrument Deployment Device) carrying micro-analysis tools.',
    sourceUrl: 'https://mars.nasa.gov/mer/mission/spacecraft/rover/',
    attribution: 'NASA JPL Spacecraft Specs',
    factType: 'FACT'
  },

  massKg: {
    value: { launchMassKg: 1063, landingMassKg: 185 },
    sourceUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-032A',
    attribution: 'NASA NSSDC',
    factType: 'DATA'
  },

  powerSource: {
    value: 'Solar panel array generating up to 140 Watts under full sun, paired with two 8 Amp-hour rechargeable Lithium-ion batteries.',
    sourceUrl: 'https://mars.nasa.gov/mer/mission/spacecraft/rover/power/',
    attribution: 'NASA JPL',
    factType: 'FACT'
  },

  components: [
    {
      name: 'Rocker-Bogie Suspension System',
      description: '6-wheel drive system without springs, allowing wheels to traverse obstacles up to 26 cm tall while maintaining ground contact.',
      role: 'Rough terrain navigation and mobility.',
      materialComposition: 'Titanium tubing and aluminum hubs.',
      sourceUrl: 'https://mars.nasa.gov/mer/mission/spacecraft/rover/wheels/'
    },
    {
      name: 'Instrument Deployment Device (IDD Robotic Arm)',
      description: '5-degree-of-freedom robotic arm carrying payload instruments directly to rock targets.',
      role: 'Precise positioning of microscopic cameras and spectrometers.',
      sourceUrl: 'https://mars.nasa.gov/mer/mission/spacecraft/rover/arm/'
    }
  ],

  instruments: [
    {
      name: 'Panoramic Camera',
      acronym: 'Pancam',
      description: 'High-resolution stereo color camera mounted on the mast assembly with 13 filter wheels.',
      scientificPurpose: 'Examine surface geology, terrain topography, and atmospheric dust opacity.',
      whatItMeasured: 'Multispectral mineral reflection and atmospheric optical depth (tau).',
      statusAtMissionEnd: 'Operational until final dust storm.',
      sourceUrl: 'https://mars.nasa.gov/mer/mission/spacecraft/rover/pancam/',
      attribution: 'Cornell University / NASA JPL'
    },
    {
      name: 'Microscopic Imager',
      acronym: 'MI',
      description: 'Monochrome microscopic lens mounted on the robotic arm providing 30-micron resolution.',
      scientificPurpose: 'Examine fine-scale texture of rock surfaces and soil grains.',
      whatItMeasured: 'Grain shapes, cementation patterns, and fine mineral structures.',
      statusAtMissionEnd: 'Operational through Sol 5111.',
      sourceUrl: 'https://mars.nasa.gov/mer/mission/spacecraft/rover/mi/',
      attribution: 'USGS Astrogeology / NASA JPL'
    }
  ],

  scientificPurpose: {
    value: 'Determine whether liquid water once flowed on Mars, assess past habitability, and document climate evolution recorded in sedimentary rock layers.',
    sourceUrl: 'https://mars.nasa.gov/mer/mission/science/',
    attribution: 'NASA Science Mission Directorate',
    factType: 'FACT'
  },

  discoveries: [
    {
      title: 'Discovery of Hematite "Blueberries"',
      description: 'Opportunity discovered millions of millimeter-sized gray hematite spherules eroding out of sedimentary rock inside Eagle Crater.',
      scientificSignificance: 'Proved the spherules formed as mineral concretions precipitated from liquid groundwater flowing through permeable rock.',
      sourceUrl: 'https://mars.nasa.gov/news/mer/opportunity-discovers-hematite-spherules/',
      attribution: 'NASA JPL / Science Journal',
      factType: 'FACT'
    },
    {
      title: 'Discovery of Jarosite (Acidic Water Evidence)',
      description: 'Mössbauer spectrometer detected jarosite, a potassium iron sulfate hydroxide mineral.',
      scientificSignificance: 'Jarosite provided evidence for acidic, water-related alteration in the ancient Martian environment.',
      sourceUrl: 'https://mars.nasa.gov/news/press-releases/2004/jarosite-discovery/',
      attribution: 'NASA JPL Press Release',
      factType: 'FACT'
    }
  ],

  missionDurationDays: {
    value: 5352,
    sourceUrl: 'https://mars.nasa.gov/mer/mission/overview/',
    attribution: 'NASA JPL MER Project',
    factType: 'DATA'
  },

  distanceTraveledKm: {
    value: 45.16,
    sourceUrl: 'https://mars.nasa.gov/news/8413/nasas-opportunity-rover-mission-exits-silent-mode/',
    attribution: 'NASA JPL MER Telemetry',
    factType: 'DATA'
  },

  landingLocation: {
    latitude: -1.9483,
    longitude: 354.47417,
    regionName: 'Meridiani Planum',
    featureName: 'Eagle Crater',
    celestialBody: 'Mars',
    referenceFrame: 'IAU Mars 2000',
    sourceUrl: 'https://mars.nasa.gov/mer/mission/timeline/landing/',
    attribution: 'NASA JPL MER Navigation Group'
  },

  finalLastKnownLocation: {
    latitude: -2.224,
    longitude: 354.654,
    regionName: 'Endeavour Crater Rim',
    featureName: 'Perseverance Valley',
    celestialBody: 'Mars',
    referenceFrame: 'IAU Mars 2000',
    sourceUrl: 'https://www.jpl.nasa.gov/news/nasas-opportunity-rover-dies-on-mars',
    attribution: 'NASA JPL Telemetry / MRO HiRISE'
  },

  routeData: [
    {
      solOrDay: 1,
      dateStr: '2004-01-25',
      coordinate: {
        latitude: -1.9483,
        longitude: 354.47417,
        regionName: 'Meridiani Planum',
        featureName: 'Eagle Crater Landing Site',
        celestialBody: 'Mars',
        referenceFrame: 'IAU Mars 2000',
        sourceUrl: 'https://mars.nasa.gov/mer/',
        attribution: 'NASA JPL'
      },
      cumulativeDistanceKm: 0,
      description: 'Bounced into Eagle Crater inside air bags.',
      sourceUrl: 'https://mars.nasa.gov/mer/'
    },
    {
      solOrDay: 5111,
      dateStr: '2018-06-10',
      coordinate: {
        latitude: -2.224,
        longitude: 354.654,
        regionName: 'Endeavour Crater Rim',
        featureName: 'Perseverance Valley',
        celestialBody: 'Mars',
        referenceFrame: 'IAU Mars 2000',
        sourceUrl: 'https://mars.nasa.gov/mer/',
        attribution: 'NASA JPL'
      },
      cumulativeDistanceKm: 45.16,
      description: 'Final telemetry transmission before global dust storm blanketed solar panels.',
      sourceUrl: 'https://mars.nasa.gov/mer/'
    }
  ],

  missionEndReason: {
    value: 'A Mars-wide dust storm severely reduced sunlight reaching Opportunity\'s solar arrays. The rover lost communication on June 10, 2018. After more than 1,000 recovery commands failed, NASA declared the mission complete on February 13, 2019.',
    sourceUrl: 'https://www.jpl.nasa.gov/news/nasas-opportunity-rover-dies-on-mars',
    attribution: 'NASA JPL MER Project Statement',
    factType: 'FACT'
  },

  silenceCauseDetails: {
    value: 'A Mars-wide dust storm severely reduced sunlight reaching Opportunity\'s solar arrays. The rover lost communication on June 10, 2018. After more than 1,000 recovery commands failed, NASA declared the mission complete on February 13, 2019.',
    sourceUrl: 'https://mars.nasa.gov/news/8413/nasas-opportunity-rover-mission-exits-silent-mode/',
    attribution: 'NASA JPL Engineering',
    factType: 'FACT'
  },

  scientificLegacy: {
    value: 'Revolutionized human understanding of Mars as a dynamic planet that once possessed liquid water environments. Demonstrated the viability of long-term mobile planetary exploration.',
    sourceUrl: 'https://www.nasa.gov/press-release/nasa-s-record-setting-opportunity-rover-mission-comes-to-end',
    attribution: 'NASA Administrator Statement',
    factType: 'INTERPRETATION'
  },

  lastSignal: {
    lastCommDate: '2018-06-10',
    lastActivity: 'Measuring atmospheric dust opacity (tau = 10.8) inside Perseverance Valley on Sol 5111.',
    endingEvent: 'Global Mars dust storm severely reduced sunlight, and the rover lost communication on June 10, 2018.',
    finalLocation: {
      latitude: -2.224,
      longitude: 354.654,
      regionName: 'Endeavour Crater Rim',
      featureName: 'Perseverance Valley',
      celestialBody: 'Mars',
      referenceFrame: 'IAU Mars 2000',
      sourceUrl: 'https://www.jpl.nasa.gov/news/nasas-opportunity-rover-dies-on-mars',
      attribution: 'NASA JPL MER Project'
    },
    causeOfSilence: 'A Mars-wide dust storm severely reduced sunlight reaching Opportunity\'s solar arrays. Communication was lost on June 10, 2018; NASA declared mission complete on Feb 13, 2019.',
    scientificLegacySummary: 'Set off-world driving record of 45.16 km and provided evidence for ancient water-related alteration on Mars.'
  },

  timeline: [
    {
      id: 'opp-1',
      date: '2003-07-07',
      title: 'Launch from Cape Canaveral',
      description: 'Delta II rocket launched Opportunity (MER-B).',
      category: 'Launch',
      nasaRefUrl: 'https://mars.nasa.gov/mer/'
    },
    {
      id: 'opp-2',
      date: '2004-01-25',
      title: 'Landing in Eagle Crater',
      description: 'Airbag touchdown inside 22-meter crater on Meridiani Planum.',
      category: 'Arrival',
      nasaRefUrl: 'https://mars.nasa.gov/mer/'
    },
    {
      id: 'opp-3',
      date: '2004-03-02',
      title: 'Discovery of Jarosite & Mineral Concretions',
      description: 'Jarosite provided evidence for acidic, water-related alteration in ancient Martian environment.',
      category: 'Discovery',
      nasaRefUrl: 'https://mars.nasa.gov/news/press-releases/2004/jarosite-discovery/'
    },
    {
      id: 'opp-4',
      date: '2014-07-28',
      title: 'World Off-Road Driving Record (40.25 km)',
      description: 'Passed Soviet Lunokhod 2 distance record.',
      category: 'Milestone',
      nasaRefUrl: 'https://mars.nasa.gov/mer/'
    },
    {
      id: 'opp-5',
      date: '2018-06-10',
      title: 'Sol 5111 Last Signal in Perseverance Valley',
      description: 'Global dust storm severely reduced sunlight; final comm received.',
      category: 'Last Signal',
      nasaRefUrl: 'https://mars.nasa.gov/news/8413/nasas-opportunity-rover-mission-exits-silent-mode/'
    },
    {
      id: 'opp-6',
      date: '2019-02-13',
      title: 'Official Mission Declaration of Completion',
      description: 'NASA declared completion after over 1,000 recovery commands received no response.',
      category: 'Mission End',
      nasaRefUrl: 'https://www.jpl.nasa.gov/news/nasas-opportunity-rover-dies-on-mars'
    }
  ],

  images: [
    {
      url: 'https://photojournal.jpl.nasa.gov/jpeg/PIA18081.jpg',
      title: 'Opportunity Rover Self-Portrait on Mars',
      caption: 'Self-portrait of Opportunity taken by Pancam on Sol 3631 (March 22, 2014) showing solar array dust coverage.',
      credit: 'NASA/JPL-Caltech/Cornell Univ./Arizona State Univ.',
      nasaId: 'PIA18081',
      sourceUrl: 'https://photojournal.jpl.nasa.gov/catalog/PIA18081'
    }
  ],

  imageCredits: ['NASA / JPL-Caltech / Cornell University / USGS'],

  nasaSourceUrls: [
    {
      title: 'NASA Mars Exploration Rover Opportunity Portal',
      sourceName: 'NASA JPL Mars Exploration Program',
      url: 'https://mars.nasa.gov/mer/',
      attribution: 'NASA JPL'
    }
  ],

  datasetUrls: [
    {
      title: 'MER Opportunity PDS Geosciences Data Archive',
      sourceName: 'NASA Planetary Data System (PDS) Geosciences Node',
      url: 'https://pds-geosciences.wustl.edu/missions/mer/',
      attribution: 'Washington University in St. Louis / NASA PDS'
    }
  ],

  remainingMissingData: [
    'Exact present physical state of solar panels (whether dust clearing wind occurred after mission end is unconfirmed).'
  ]
};
