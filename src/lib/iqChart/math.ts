import { IQScoreStats, ScoreRangeInterval, ComparisonStats } from './types';

export const MEAN = 100;
export const STANDARD_DEVIATION = 15;
export const MIN_IQ = 40;
export const MAX_IQ = 160;

export const IQ_PRESETS = [70, 85, 100, 115, 130, 145];

/**
 * Calculates standard z-score for a given IQ.
 * z = (IQ - 100) / 15
 */
export function calculateZScore(iq: number): number {
  return (iq - MEAN) / STANDARD_DEVIATION;
}

/**
 * Normal Probability Density Function (PDF)
 * f(x) = (1 / (sigma * sqrt(2 * pi))) * exp(-0.5 * ((x - mu) / sigma)^2)
 */
export function normalPdf(
  x: number,
  mean: number = MEAN,
  sd: number = STANDARD_DEVIATION
): number {
  const exponent = -0.5 * Math.pow((x - mean) / sd, 2);
  return (1 / (sd * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
}

/**
 * High-precision Error Function (erf)
 * Abramowitz and Stegun Formula 7.1.26
 * Maximum error: < 1.5e-7
 */
export function erf(x: number): number {
  const sign = x >= 0 ? 1 : -1;
  const absX = Math.abs(x);

  const p = 0.3275911;
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;

  const t = 1.0 / (1.0 + p * absX);
  const poly = ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t;
  const y = 1.0 - poly * Math.exp(-absX * absX);

  return sign * y;
}

/**
 * Standard Normal Cumulative Distribution Function Φ(z)
 * Returns probability between 0 and 1.
 */
export function normalCdf(z: number): number {
  return 0.5 * (1.0 + erf(z / Math.SQRT2));
}

/**
 * Calculates theoretical percentile for a given IQ.
 * Percentile = 100 * Φ(z)
 */
export function calculatePercentile(iq: number): number {
  const z = calculateZScore(iq);
  return normalCdf(z) * 100;
}

/**
 * Adaptive formatting for percentiles.
 * Ensures extreme values far from the mean are not rounded to 0% or 100%.
 */
export function formatPercentile(percentile: number): string {
  if (percentile >= 99.99) {
    if (percentile >= 99.999) return '> 99.99%';
    return percentile.toFixed(3) + '%';
  }
  if (percentile <= 0.01) {
    if (percentile <= 0.001) return '< 0.01%';
    return percentile.toFixed(3) + '%';
  }
  if (percentile >= 99.9 || percentile <= 0.1) {
    return percentile.toFixed(2) + '%';
  }
  return percentile.toFixed(2) + '%';
}

/**
 * Calculates the theoretical percentage of population falling within an IQ interval.
 */
export function calculateRangePercentage(minIq: number, maxIq: number): number {
  const zMin = calculateZScore(minIq);
  const zMax = calculateZScore(maxIq);
  const cdfMin = normalCdf(zMin);
  const cdfMax = normalCdf(zMax);
  return Math.max(0, (cdfMax - cdfMin) * 100);
}

/**
 * Returns descriptive relative frequency / rarity ratio.
 */
export function getRarityDescription(iq: number): string {
  const pct = calculatePercentile(iq);

  if (iq >= 100) {
    const higherPct = 100 - pct;
    if (higherPct <= 0.001) return 'Fewer than 1 in 100,000 score above this';
    if (higherPct <= 0.01) return 'Approximately 1 in 10,000 score above this';
    if (higherPct <= 0.13) return 'Approximately 1 in 750 score above this';
    if (higherPct <= 0.4) return 'Approximately 1 in 250 score above this';
    if (higherPct <= 2.28) return 'Approximately 1 in 44 score at or above this';
    if (higherPct <= 5.0) return 'Approximately 1 in 20 score at or above this';
    if (higherPct <= 15.87) return 'Approximately 1 in 6 score at or above this';
    if (higherPct <= 30.0) return 'Approximately 1 in 3 score at or above this';
    return 'Within the upper half of the normal curve';
  } else {
    if (pct <= 0.001) return 'Fewer than 1 in 100,000 score below this';
    if (pct <= 0.01) return 'Approximately 1 in 10,000 score below this';
    if (pct <= 0.13) return 'Approximately 1 in 750 score below this';
    if (pct <= 2.28) return 'Approximately 1 in 44 score at or below this';
    if (pct <= 5.0) return 'Approximately 1 in 20 score at or below this';
    if (pct <= 15.87) return 'Approximately 1 in 6 score at or below this';
    if (pct <= 30.0) return 'Approximately 1 in 3 score at or below this';
    return 'Within the lower half of the normal curve';
  }
}

/**
 * Returns neutral scientific interval category.
 */
export function getCategoryDescription(iq: number): string {
  if (iq >= 130) return 'Very High Range (≥ +2.0σ)';
  if (iq >= 115) return 'High Average Range (+1.0σ to +2.0σ)';
  if (iq >= 85) return 'Average / Mid-Range (-1.0σ to +1.0σ)';
  if (iq >= 70) return 'Low Average Range (-2.0σ to -1.0σ)';
  return 'Lower Range (< -2.0σ)';
}

/**
 * Complete statistical bundle for a single score.
 */
export function getIQStats(iq: number): IQScoreStats {
  const z = calculateZScore(iq);
  const diff = iq - MEAN;
  const pct = calculatePercentile(iq);

  return {
    iq,
    zScore: parseFloat(z.toFixed(2)),
    differenceFromMean: diff,
    percentile: pct,
    rarityRatio: getRarityDescription(iq),
    classificationCategory: getCategoryDescription(iq),
  };
}

/**
 * Comparison stats between two scores A and B.
 */
export function getComparisonStats(scoreA: number, scoreB: number): ComparisonStats {
  const zA = calculateZScore(scoreA);
  const zB = calculateZScore(scoreB);
  const pctA = calculatePercentile(scoreA);
  const pctB = calculatePercentile(scoreB);

  const lower = Math.min(scoreA, scoreB);
  const upper = Math.max(scoreA, scoreB);
  const intervalPct = calculateRangePercentage(lower, upper);

  return {
    scoreA,
    scoreB,
    differencePoints: Math.abs(scoreB - scoreA),
    zScoreA: parseFloat(zA.toFixed(2)),
    zScoreB: parseFloat(zB.toFixed(2)),
    percentileA: pctA,
    percentileB: pctB,
    percentileDifference: Math.abs(pctB - pctA),
    intervalPercentage: intervalPct,
  };
}

/**
 * Standard IQ exploration ranges specified in Section 11 of the specification.
 * Boundary intervals:
 * Below 70 (< -2σ): ~2.28%
 * 70–84 (-2σ to -1σ): ~13.59%
 * 85–99 (-1σ to μ): ~34.13%
 * 100–114 (μ to +1σ): ~34.13%
 * 115–129 (+1σ to +2σ): ~13.59%
 * 130 and above (≥ +2σ): ~2.28%
 */
export const IQ_RANGES: ScoreRangeInterval[] = [
  {
    id: 'below-70',
    label: 'Below 70',
    minIq: 40,
    maxIq: 70,
    percentage: 2.28,
    zRangeLabel: '< -2.00σ',
    description: 'Scores more than 2 standard deviations below the mean.',
  },
  {
    id: '70-84',
    label: '70–84',
    minIq: 70,
    maxIq: 85,
    percentage: 13.59,
    zRangeLabel: '-2.00σ to -1.00σ',
    description: 'Scores between 1 and 2 standard deviations below the mean.',
  },
  {
    id: '85-99',
    label: '85–99',
    minIq: 85,
    maxIq: 100,
    percentage: 34.13,
    zRangeLabel: '-1.00σ to Mean (0.0σ)',
    description: 'Scores within 1 standard deviation below the population mean.',
  },
  {
    id: '100-114',
    label: '100–114',
    minIq: 100,
    maxIq: 115,
    percentage: 34.13,
    zRangeLabel: 'Mean (0.0σ) to +1.00σ',
    description: 'Scores within 1 standard deviation above the population mean.',
  },
  {
    id: '115-129',
    label: '115–129',
    minIq: 115,
    maxIq: 130,
    percentage: 13.59,
    zRangeLabel: '+1.00σ to +2.00σ',
    description: 'Scores between 1 and 2 standard deviations above the mean.',
  },
  {
    id: '130-above',
    label: '130 and above',
    minIq: 130,
    maxIq: 160,
    percentage: 2.28,
    zRangeLabel: '≥ +2.00σ',
    description: 'Scores 2 or more standard deviations above the mean.',
  },
];
