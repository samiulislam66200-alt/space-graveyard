import { MissionData, CelestialBody, MissionStatus, HardwareCategory, NASASource } from '../../types/mission';
import { apollo11Eagle } from './moon/apollo11-eagle';
import { apollo15LRV } from './moon/apollo15-lrv';
import { surveyor3 } from './moon/surveyor3';
import { opportunityRover } from './mars/opportunity';
import { insightLander } from './mars/insight';
import { perseveranceEDL } from './mars/perseverance-edl';

export const ALL_MISSIONS: MissionData[] = [
  apollo11Eagle,
  opportunityRover,
  apollo15LRV,
  insightLander,
  perseveranceEDL,
  surveyor3
];

export function getAllMissions(): MissionData[] {
  return ALL_MISSIONS;
}

export function getMissionBySlug(slug: string): MissionData | undefined {
  return ALL_MISSIONS.find((mission) => mission.id === slug);
}

export function getMissionsByDestination(destination: CelestialBody): MissionData[] {
  return ALL_MISSIONS.filter((mission) => mission.destination === destination);
}

export function getMissionsByHardwareType(hardwareType: HardwareCategory): MissionData[] {
  return ALL_MISSIONS.filter((mission) => mission.hardwareType === hardwareType);
}

export function getMissionsByStatus(status: MissionStatus): MissionData[] {
  return ALL_MISSIONS.filter((mission) => mission.currentStatus === status);
}

export function getAllNASAProvenanceSources(): NASASource[] {
  const sourcesMap = new Map<string, NASASource>();
  ALL_MISSIONS.forEach((mission) => {
    mission.nasaSourceUrls.forEach((src) => sourcesMap.set(src.url, src));
    mission.datasetUrls.forEach((src) => sourcesMap.set(src.url, src));
  });
  return Array.from(sourcesMap.values());
}
