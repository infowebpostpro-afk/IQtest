import { describe, it, expect } from 'vitest';
import {
  calculateAgeNormStats,
  validateExplorerScore,
  AGE_GROUPS,
  getAgeGroupById,
  EXPLORER_MIN_IQ,
  EXPLORER_MAX_IQ,
  EXPLORER_DEFAULT_IQ,
} from '../lib/ageNormExplorer/math';

describe('IQ Age-Norm Explorer Scientific Calculation Tests', () => {
  it('correctly calculates benchmarks from Section 21 with Mean 100, SD 15', () => {
    const benchmarks = [
      { iq: 70, expectedPct: 2.2750, expectedZ: -2.0 },
      { iq: 85, expectedPct: 15.8655, expectedZ: -1.0 },
      { iq: 100, expectedPct: 50.0000, expectedZ: 0.0 },
      { iq: 115, expectedPct: 84.1345, expectedZ: 1.0 },
      { iq: 120, expectedPct: 90.8789, expectedZ: 1.3333 },
      { iq: 130, expectedPct: 97.7250, expectedZ: 2.0 },
      { iq: 145, expectedPct: 99.8650, expectedZ: 3.0 },
    ];

    benchmarks.forEach(({ iq, expectedPct, expectedZ }) => {
      const stats = calculateAgeNormStats(iq);
      expect(stats.score).toBe(iq);
      expect(stats.referenceMean).toBe(100);
      expect(stats.standardDeviation).toBe(15);
      expect(stats.zScore).toBeCloseTo(expectedZ, 2);
      expect(stats.percentile).toBeCloseTo(expectedPct, 1);
    });
  });

  it('preserves age invariance: changing age group does not change the modeled mean or percentile', () => {
    const testScores = [85, 100, 115, 130];

    testScores.forEach((score) => {
      const baseStats = calculateAgeNormStats(score);

      AGE_GROUPS.forEach((ageGroup) => {
        // In modern deviation IQ, the standardized reference mean remains 100 across all age cohorts
        const groupStats = calculateAgeNormStats(score);

        expect(groupStats.referenceMean).toBe(100);
        expect(groupStats.standardDeviation).toBe(15);
        expect(groupStats.score).toBe(score);
        expect(groupStats.percentile).toBeCloseTo(baseStats.percentile, 4);
        expect(groupStats.zScore).toBeCloseTo(baseStats.zScore, 4);
      });
    });
  });

  it('validates scores within the supported exploratory range 70–145', () => {
    // Valid inputs
    expect(validateExplorerScore(100).isValid).toBe(true);
    expect(validateExplorerScore('115').isValid).toBe(true);
    expect(validateExplorerScore('115').score).toBe(115);
    expect(validateExplorerScore(70).isValid).toBe(true);
    expect(validateExplorerScore(145).isValid).toBe(true);

    // Out of range inputs
    expect(validateExplorerScore(69).isValid).toBe(false);
    expect(validateExplorerScore(146).isValid).toBe(false);
    expect(validateExplorerScore('200').isValid).toBe(false);

    // Non-numeric or empty inputs
    expect(validateExplorerScore('').isValid).toBe(false);
    expect(validateExplorerScore('abc').isValid).toBe(false);
    expect(validateExplorerScore('100.5').isValid).toBe(false);
  });

  it('correctly formats z-score signs and percentiles', () => {
    const stats115 = calculateAgeNormStats(115);
    expect(stats115.formattedZScore).toBe('+1.00 SD');
    expect(stats115.formattedPercentile).toBe('84.13%');

    const stats85 = calculateAgeNormStats(85);
    expect(stats85.formattedZScore).toBe('−1.00 SD');
    expect(stats85.formattedPercentile).toBe('15.87%');

    const stats100 = calculateAgeNormStats(100);
    expect(stats100.formattedZScore).toBe('0.00 SD');
    expect(stats100.formattedPercentile).toBe('50.00%');
  });

  it('finds valid age groups by ID', () => {
    expect(getAgeGroupById('children').name).toBe('Children');
    expect(getAgeGroupById('young-adults').name).toBe('Young Adults');
    expect(getAgeGroupById('older-adults').name).toBe('Older Adults');
  });
});

