import { describe, it, expect } from 'vitest';
import {
  calculatePercentileFromIQ,
  calculateIQFromPercentile,
  calculateZScore,
  inverseNormalCdf,
  normalCdf,
  formatPercentile,
  formatIQ,
  validateIQInput,
  validatePercentileInput,
  calculateIQPercentileResult,
  DEFAULT_MEAN,
  DEFAULT_SD,
} from '@/lib/iqPercentile/math';

describe('IQ Percentile Calculator - Mathematical Specifications', () => {
  describe('1. Reference Cases (Mean 100, SD 15: IQ to Percentile)', () => {
    it('calculates theoretical percentiles matching section 20 test fixtures', () => {
      // IQ 70 ≈ 2.275%
      expect(calculatePercentileFromIQ(70, 100, 15)).toBeCloseTo(2.275, 2);

      // IQ 85 ≈ 15.865%
      expect(calculatePercentileFromIQ(85, 100, 15)).toBeCloseTo(15.865, 2);

      // IQ 100 = 50%
      expect(calculatePercentileFromIQ(100, 100, 15)).toBeCloseTo(50.0, 4);

      // IQ 115 ≈ 84.135%
      expect(calculatePercentileFromIQ(115, 100, 15)).toBeCloseTo(84.135, 2);

      // IQ 130 ≈ 97.725%
      expect(calculatePercentileFromIQ(130, 100, 15)).toBeCloseTo(97.725, 2);

      // IQ 145 ≈ 99.865%
      expect(calculatePercentileFromIQ(145, 100, 15)).toBeCloseTo(99.865, 2);
    });
  });

  describe('2. Inverse Conversions (Mean 100, SD 15: Percentile to IQ)', () => {
    it('calculates theoretical IQ scores matching section 20 test fixtures', () => {
      // 10th percentile ≈ 80.78
      expect(calculateIQFromPercentile(10, 100, 15)).toBeCloseTo(80.78, 1);

      // 25th percentile ≈ 89.88
      expect(calculateIQFromPercentile(25, 100, 15)).toBeCloseTo(89.88, 1);

      // 50th percentile = 100
      expect(calculateIQFromPercentile(50, 100, 15)).toBeCloseTo(100.0, 4);

      // 75th percentile ≈ 110.12
      expect(calculateIQFromPercentile(75, 100, 15)).toBeCloseTo(110.12, 1);

      // 90th percentile ≈ 119.22
      expect(calculateIQFromPercentile(90, 100, 15)).toBeCloseTo(119.22, 1);

      // 95th percentile ≈ 124.67
      expect(calculateIQFromPercentile(95, 100, 15)).toBeCloseTo(124.67, 1);

      // 99th percentile ≈ 134.90
      expect(calculateIQFromPercentile(99, 100, 15)).toBeCloseTo(134.9, 1);
    });
  });

  describe('3. Alternative Standard Deviations (SD 16 and SD 24)', () => {
    it('correctly computes with SD = 16 (Historical Stanford-Binet 4 scale)', () => {
      // +1 SD at IQ 116 -> ~84.135%
      expect(calculatePercentileFromIQ(116, 100, 16)).toBeCloseTo(84.135, 2);

      // -1 SD at IQ 84 -> ~15.865%
      expect(calculatePercentileFromIQ(84, 100, 16)).toBeCloseTo(15.865, 2);

      // 95th percentile: 100 + 16 * 1.644853 ≈ 126.32
      expect(calculateIQFromPercentile(95, 100, 16)).toBeCloseTo(126.32, 1);
    });

    it('correctly computes with SD = 24 (Cattell Culture Fair scale)', () => {
      // +1 SD at IQ 124 -> ~84.135%
      expect(calculatePercentileFromIQ(124, 100, 24)).toBeCloseTo(84.135, 2);

      // -1 SD at IQ 76 -> ~15.865%
      expect(calculatePercentileFromIQ(76, 100, 24)).toBeCloseTo(15.865, 2);

      // 95th percentile: 100 + 24 * 1.644853 ≈ 139.48
      expect(calculateIQFromPercentile(95, 100, 24)).toBeCloseTo(139.48, 1);
    });
  });

  describe('4. Bi-directional Round Trips', () => {
    it('preserves values across forward and inverse conversions', () => {
      const testIQs = [70, 85, 92, 100, 115, 128, 140, 160];
      testIQs.forEach((originalIQ) => {
        const pct = calculatePercentileFromIQ(originalIQ, 100, 15);
        const reconstructedIQ = calculateIQFromPercentile(pct, 100, 15);
        expect(reconstructedIQ).toBeCloseTo(originalIQ, 2);
      });

      const testPcts = [1, 5, 16, 50, 75, 84, 95, 99, 99.9];
      testPcts.forEach((originalPct) => {
        const iq = calculateIQFromPercentile(originalPct, 100, 15);
        const reconstructedPct = calculatePercentileFromIQ(iq, 100, 15);
        expect(reconstructedPct).toBeCloseTo(originalPct, 2);
      });
    });
  });

  describe('5. Tail Precision and Formatting', () => {
    it('never displays theoretical percentiles of 0 or 100 for finite values', () => {
      expect(formatPercentile(99.9995)).toBe('> 99.99th');
      expect(formatPercentile(0.0005)).toBe('< 0.01st');
      expect(formatPercentile(84.134)).toBe('84.13th');
      expect(formatPercentile(50.0)).toBe('50th');
      expect(formatPercentile(1.0)).toBe('1st');
      expect(formatPercentile(2.0)).toBe('2nd');
      expect(formatPercentile(3.0)).toBe('3rd');
    });

    it('formats IQ scores cleanly', () => {
      expect(formatIQ(100.001)).toBe('100');
      expect(formatIQ(115.0)).toBe('115');
      expect(formatIQ(124.6728)).toBe('124.67');
    });
  });

  describe('6. Input Validation (Section 10)', () => {
    it('validates IQ inputs within [40, 200]', () => {
      expect(validateIQInput(115).isValid).toBe(true);
      expect(validateIQInput('115').isValid).toBe(true);
      expect(validateIQInput(40).isValid).toBe(true);
      expect(validateIQInput(200).isValid).toBe(true);

      expect(validateIQInput('').isValid).toBe(false);
      expect(validateIQInput('abc').isValid).toBe(false);
      expect(validateIQInput(39).isValid).toBe(false);
      expect(validateIQInput(201).isValid).toBe(false);
      expect(validateIQInput(NaN).isValid).toBe(false);
      expect(validateIQInput(Infinity).isValid).toBe(false);
    });

    it('validates Percentile inputs strictly within (0, 100)', () => {
      expect(validatePercentileInput(50).isValid).toBe(true);
      expect(validatePercentileInput('84.13').isValid).toBe(true);
      expect(validatePercentileInput(0.01).isValid).toBe(true);
      expect(validatePercentileInput(99.99).isValid).toBe(true);

      // Boundaries 0 and 100 must be rejected
      expect(validatePercentileInput(0).isValid).toBe(false);
      expect(validatePercentileInput(100).isValid).toBe(false);
      expect(validatePercentileInput(-5).isValid).toBe(false);
      expect(validatePercentileInput(105).isValid).toBe(false);
      expect(validatePercentileInput('').isValid).toBe(false);
      expect(validatePercentileInput('xyz').isValid).toBe(false);
    });
  });

  describe('7. Full Result Bundle (calculateIQPercentileResult)', () => {
    it('generates consistent complete statistical bundle for IQ 115', () => {
      const res = calculateIQPercentileResult('iqToPercentile', 115, 15, 100);
      expect(res.mode).toBe('iqToPercentile');
      expect(res.iq).toBe(115);
      expect(res.zScore).toBeCloseTo(1.0, 2);
      expect(res.diffFromMean).toBe(15);
      expect(res.percentile).toBeCloseTo(84.13, 1);
      expect(res.formattedPercentile).toBe('84.13th');
      expect(res.formattedZScore).toBe('+1.00σ');
      expect(res.upperTailPercentage).toBeCloseTo(15.87, 1);
    });

    it('generates consistent complete statistical bundle for 95th percentile', () => {
      const res = calculateIQPercentileResult('percentileToIq', 95, 15, 100);
      expect(res.mode).toBe('percentileToIq');
      expect(res.percentile).toBe(95);
      expect(res.iq).toBeCloseTo(124.67, 1);
      expect(res.zScore).toBeCloseTo(1.64, 2);
      expect(res.formattedIQ).toBe('124.67');
      expect(res.upperTailPercentage).toBe(5);
    });
  });
});
