/**
 * Domain types for the IQ Age-Norm Explorer
 */

export interface AgeGroup {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  cognitiveNote: string;
}

export interface AgeNormExplorerState {
  ageGroupId: string;
  score: number;
  isCompareMode: boolean;
  compareAgeGroupId: string;
}

export interface AgeNormCalculation {
  score: number;
  referenceMean: number;
  standardDeviation: number;
  zScore: number;
  percentile: number;
  formattedPercentile: string;
  formattedZScore: string;
}

