export type CalculationMode = 'iqToPercentile' | 'percentileToIq';

export type StandardDeviationOption = 15 | 16 | 24;

export interface ValidationResult {
  isValid: boolean;
  value?: number;
  error?: string;
}

export interface IQPercentileResult {
  mode: CalculationMode;
  mean: number;
  sd: StandardDeviationOption;
  iq: number;
  percentile: number;
  zScore: number;
  diffFromMean: number;
  upperTailPercentage: number;
  lowerTailPercentage: number;
  formattedPercentile: string;
  formattedZScore: string;
  formattedDiff: string;
  formattedIQ: string;
  rarityDescription: string;
}
