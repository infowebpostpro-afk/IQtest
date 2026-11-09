import {
  CalculationMode,
  StandardDeviationOption,
  ValidationResult,
  IQPercentileResult,
} from './types';

export const DEFAULT_MEAN = 100;
export const DEFAULT_SD: StandardDeviationOption = 15;
export const SD_OPTIONS: readonly StandardDeviationOption[] = [15, 16, 24];

export const MIN_SUPPORTED_IQ = 40;
export const MAX_SUPPORTED_IQ = 200;

export const IQ_PRESETS = [85, 100, 115, 130, 145];
export const PERCENTILE_PRESETS = [10, 25, 50, 75, 90, 95, 99];

/**
 * Calculates standard z-score for a given score.
 * z = (IQ - mean) / sd
 */
export function calculateZScore(
  iq: number,
  mean: number = DEFAULT_MEAN,
  sd: number = DEFAULT_SD
): number {
  return (iq - mean) / sd;
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
 * Returns probability in range (0, 1).
 */
export function normalCdf(z: number): number {
  return 0.5 * (1.0 + erf(z / Math.SQRT2));
}

/**
 * Computes the inverse standard normal cumulative distribution function (probit function)
 * using Peter J. Acklam's high-precision rational approximation algorithm.
 * Relative error < 1.15e-9 across (0, 1).
 *
 * @param p Probability strictly between 0 and 1
 */
export function inverseNormalCdf(p: number): number {
  if (p <= 0 || p >= 1) {
    if (p === 0) return -Infinity;
    if (p === 1) return Infinity;
    return NaN;
  }

  // Coefficients in central region
  const a = [
    -39.69683028665376, 220.9460984245205, -275.9285104469687,
    138.357751867269, -30.6647980661472, 2.506628277459239,
  ];
  const b = [
    -54.47609879822406, 161.5858368580409, -155.6989798598866,
    66.80131188771972, -13.28068155288572,
  ];

  // Coefficients in tail regions
  const c = [
    -0.007784894002430293, -0.3223964580411363, -2.400758277161838,
    -2.549732539343734, 4.374664141464968, 2.938163982698783,
  ];
  const d = [
    0.007784695709041462, 0.3224671290700398, 2.4451341371429,
    3.754408661907416,
  ];

  // Breakpoints
  const pLow = 0.02425;
  const pHigh = 1.0 - pLow;

  let q: number;

  if (p < pLow) {
    // Lower tail
    q = Math.sqrt(-2.0 * Math.log(p));
    return (
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1.0)
    );
  }

  if (p > pHigh) {
    // Upper tail
    q = Math.sqrt(-2.0 * Math.log(1.0 - p));
    return (
      -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1.0)
    );
  }

  // Central region
  q = p - 0.5;
  const r = q * q;
  return (
    ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q) /
    (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1.0)
  );
}

/**
 * Calculates theoretical percentile from an IQ score.
 * Percentile = 100 * Φ((IQ - mean) / sd)
 */
export function calculatePercentileFromIQ(
  iq: number,
  mean: number = DEFAULT_MEAN,
  sd: number = DEFAULT_SD
): number {
  const z = calculateZScore(iq, mean, sd);
  return normalCdf(z) * 100;
}

/**
 * Calculates theoretical IQ from a percentile rank.
 * IQ = mean + sd * Φ⁻¹(percentile / 100)
 */
export function calculateIQFromPercentile(
  percentile: number,
  mean: number = DEFAULT_MEAN,
  sd: number = DEFAULT_SD
): number {
  const p = percentile / 100;
  const z = inverseNormalCdf(p);
  return mean + sd * z;
}

/**
 * Generates an English ordinal suffix (st, nd, rd, th).
 * For decimals, English ordinal conventions conventionally attach based on the last pronounced digit
 * (e.g. 97.72nd, 84.13th, 99.87th, 50th, 91st).
 */
export function getOrdinalSuffix(n: number | string): string {
  const str = n.toString().trim();
  // If decimal exists, the suffix is governed by the last digit
  if (str.includes('.')) {
    const lastChar = str.charAt(str.length - 1);
    const lastTwo = str.slice(-2);
    if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') return 'th';
    switch (lastChar) {
      case '1':
        return 'st';
      case '2':
        return 'nd';
      case '3':
        return 'rd';
      default:
        return 'th';
    }
  }

  const intPart = Math.floor(typeof n === 'number' ? n : parseFloat(n));
  const tens = intPart % 100;
  if (tens >= 11 && tens <= 13) return 'th';
  switch (intPart % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

/**
 * Adaptive formatting for theoretical percentiles.
 * Ensures finite IQ values never display exactly 0% or 100% due to rounding.
 */
export function formatPercentile(
  percentile: number,
  includeOrdinal: boolean = true
): string {
  if (percentile >= 99.999) {
    return includeOrdinal ? '> 99.99th' : '> 99.99%';
  }
  if (percentile <= 0.001) {
    return includeOrdinal ? '< 0.01st' : '< 0.01%';
  }

  let formattedNumber: string;
  if (percentile >= 99.9 || percentile <= 0.1) {
    formattedNumber = percentile.toFixed(3);
  } else {
    formattedNumber = percentile.toFixed(2);
  }

  // Remove trailing zeros in decimals if exact whole (e.g. 50.00 -> 50)
  if (formattedNumber.endsWith('.00')) {
    formattedNumber = formattedNumber.slice(0, -3);
  }

  if (!includeOrdinal) {
    return `${formattedNumber}%`;
  }

  const suffix = getOrdinalSuffix(formattedNumber);
  return `${formattedNumber}${suffix}`;
}

/**
 * Format IQ score with appropriate precision.
 */
export function formatIQ(iq: number): string {
  // If virtually an integer, display integer
  if (Math.abs(iq - Math.round(iq)) < 0.005) {
    return Math.round(iq).toString();
  }
  return iq.toFixed(2);
}

/**
 * Returns human-readable relative rarity description.
 */
export function getRarityDescription(percentile: number): string {
  if (Math.abs(percentile - 50.0) < 0.01) {
    return 'At the exact midpoint (median) of the normal reference curve';
  }

  if (percentile > 50) {
    const higherPct = 100 - percentile;
    if (higherPct <= 0.001) return 'Fewer than 1 in 100,000 score above this';
    if (higherPct <= 0.01) return 'Approximately 1 in 10,000 score above this';
    if (higherPct <= 0.13) return 'Approximately 1 in 750 score above this';
    if (higherPct <= 0.4) return 'Approximately 1 in 250 score above this';
    if (higherPct <= 1.0) return 'Approximately 1 in 100 score at or above this';
    if (higherPct <= 2.28) return 'Approximately 1 in 44 score at or above this';
    if (higherPct <= 5.0) return 'Approximately 1 in 20 score at or above this';
    if (higherPct <= 10.0) return 'Approximately 1 in 10 score at or above this';
    if (higherPct <= 15.87) return 'Approximately 1 in 6 score at or above this';
    if (higherPct <= 25.0) return 'Top quartile (top 25%) of the reference scale';
    return 'Within the upper half of the normal reference curve';
  } else {
    const lowerPct = percentile;
    if (lowerPct <= 0.001) return 'Fewer than 1 in 100,000 score below this';
    if (lowerPct <= 0.01) return 'Approximately 1 in 10,000 score below this';
    if (lowerPct <= 0.13) return 'Approximately 1 in 750 score below this';
    if (lowerPct <= 0.4) return 'Approximately 1 in 250 score below this';
    if (lowerPct <= 1.0) return 'Approximately 1 in 100 score at or below this';
    if (lowerPct <= 2.28) return 'Approximately 1 in 44 score at or below this';
    if (lowerPct <= 5.0) return 'Approximately 1 in 20 score at or below this';
    if (lowerPct <= 10.0) return 'Approximately 1 in 10 score at or below this';
    if (lowerPct <= 15.87) return 'Approximately 1 in 6 score at or below this';
    if (lowerPct <= 25.0) return 'Bottom quartile (lower 25%) of the reference scale';
    return 'Within the lower half of the normal reference curve';
  }
}

/**
 * Validates IQ input according to Section 10 of specification:
 * - Numeric IQ input from 40 to 200.
 * - Reject empty, non-numeric, NaN, Infinity, out-of-range.
 */
export function validateIQInput(input: string | number): ValidationResult {
  if (typeof input === 'string') {
    const trimmed = input.trim();
    if (trimmed === '') {
      return { isValid: false, error: 'Please enter an IQ score.' };
    }
    const parsed = Number(trimmed);
    if (isNaN(parsed) || !isFinite(parsed)) {
      return { isValid: false, error: 'Please enter a valid numeric IQ score.' };
    }
    if (parsed < MIN_SUPPORTED_IQ || parsed > MAX_SUPPORTED_IQ) {
      return {
        isValid: false,
        value: parsed,
        error: `Please enter an IQ score between ${MIN_SUPPORTED_IQ} and ${MAX_SUPPORTED_IQ}.`,
      };
    }
    return { isValid: true, value: parsed };
  }

  if (isNaN(input) || !isFinite(input)) {
    return { isValid: false, error: 'Please enter a valid numeric IQ score.' };
  }
  if (input < MIN_SUPPORTED_IQ || input > MAX_SUPPORTED_IQ) {
    return {
      isValid: false,
      value: input,
      error: `Please enter an IQ score between ${MIN_SUPPORTED_IQ} and ${MAX_SUPPORTED_IQ}.`,
    };
  }
  return { isValid: true, value: input };
}

/**
 * Validates Percentile input according to Section 10 of specification:
 * - Strictly greater than 0 and strictly less than 100 (0 < p < 100).
 * - Reject 0 and 100 because unbounded quantiles.
 * - Reject empty, non-numeric, NaN, Infinity.
 */
export function validatePercentileInput(input: string | number): ValidationResult {
  if (typeof input === 'string') {
    const trimmed = input.trim();
    if (trimmed === '') {
      return { isValid: false, error: 'Please enter a percentile rank.' };
    }
    const parsed = Number(trimmed);
    if (isNaN(parsed) || !isFinite(parsed)) {
      return { isValid: false, error: 'Please enter a valid numeric percentile.' };
    }
    if (parsed <= 0 || parsed >= 100) {
      return {
        isValid: false,
        value: parsed,
        error: 'Percentile rank must be strictly between 0 and 100 (exclusive).',
      };
    }
    return { isValid: true, value: parsed };
  }

  if (isNaN(input) || !isFinite(input)) {
    return { isValid: false, error: 'Please enter a valid numeric percentile.' };
  }
  if (input <= 0 || input >= 100) {
    return {
      isValid: false,
      value: input,
      error: 'Percentile rank must be strictly between 0 and 100 (exclusive).',
    };
  }
  return { isValid: true, value: input };
}

/**
 * Complete calculation result bundle for given inputs and mode.
 */
export function calculateIQPercentileResult(
  mode: CalculationMode,
  rawInput: number,
  sd: StandardDeviationOption = DEFAULT_SD,
  mean: number = DEFAULT_MEAN
): IQPercentileResult {
  let iq: number;
  let percentile: number;

  if (mode === 'iqToPercentile') {
    iq = rawInput;
    percentile = calculatePercentileFromIQ(iq, mean, sd);
  } else {
    percentile = rawInput;
    iq = calculateIQFromPercentile(percentile, mean, sd);
  }

  const zScore = calculateZScore(iq, mean, sd);
  const diffFromMean = iq - mean;
  const upperTailPercentage = Math.max(0, 100 - percentile);
  const lowerTailPercentage = percentile;

  const formattedPercentile = formatPercentile(percentile, true);
  const formattedZScore =
    zScore > 0 ? `+${zScore.toFixed(2)}σ` : `${zScore.toFixed(2)}σ`;
  const formattedDiff =
    diffFromMean > 0
      ? `+${diffFromMean.toFixed(2)} points`
      : `${diffFromMean.toFixed(2)} points`;
  const formattedIQ = formatIQ(iq);
  const rarityDescription = getRarityDescription(percentile);

  return {
    mode,
    mean,
    sd,
    iq,
    percentile,
    zScore,
    diffFromMean,
    upperTailPercentage,
    lowerTailPercentage,
    formattedPercentile,
    formattedZScore,
    formattedDiff,
    formattedIQ,
    rarityDescription,
  };
}
