import { describe, it, expect } from 'vitest';
import {
  calculateZScore,
  calculatePercentile,
  calculateRangePercentage,
  formatPercentile,
  IQ_RANGES,
} from '../lib/iqChart/math';

describe('IQ Score Chart Mathematical Verification', () => {
  it('correctly calculates benchmarks from Section 22', () => {
    // IQ 100: z = 0, Percentile = 50%
    expect(calculateZScore(100)).toBe(0);
    expect(calculatePercentile(100)).toBeCloseTo(50, 1);

    // IQ 115: z = +1, Percentile ≈ 84.13%
    expect(calculateZScore(115)).toBe(1);
    expect(calculatePercentile(115)).toBeCloseTo(84.13, 1);

    // IQ 85: z = -1, Percentile ≈ 15.87%
    expect(calculateZScore(85)).toBe(-1);
    expect(calculatePercentile(85)).toBeCloseTo(15.87, 1);

    // IQ 130: z = +2, Percentile ≈ 97.72%
    expect(calculateZScore(130)).toBe(2);
    expect(calculatePercentile(130)).toBeCloseTo(97.72, 1);

    // IQ 70: z = -2, Percentile ≈ 2.28%
    expect(calculateZScore(70)).toBe(-2);
    expect(calculatePercentile(70)).toBeCloseTo(2.28, 1);
  });

  it('correctly calculates normal distribution area between IQ 85 and 115 as ~68.27%', () => {
    const area = calculateRangePercentage(85, 115);
    expect(area).toBeCloseTo(68.27, 1);
  });

  it('correctly formats extreme percentiles without rounding to 0% or 100%', () => {
    const pct160 = calculatePercentile(160);
    expect(pct160).toBeGreaterThan(99.99);
    expect(formatPercentile(pct160)).not.toBe('100%');
    expect(formatPercentile(pct160)).not.toBe('100.00%');

    const pct40 = calculatePercentile(40);
    expect(pct40).toBeLessThan(0.01);
    expect(formatPercentile(pct40)).not.toBe('0%');
    expect(formatPercentile(pct40)).not.toBe('0.00%');
  });

  it('verifies that the sum of the 6 standardized intervals equals 100%', () => {
    const total = IQ_RANGES.reduce((sum, r) => sum + r.percentage, 0);
    expect(total).toBeCloseTo(100.0, 1);
  });
});
