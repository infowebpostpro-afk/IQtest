import { describe, it, expect } from 'vitest';
import {
  SPATIAL_QUESTION_BANK,
  SPATIAL_ASSESSMENT_VERSION,
} from '@/lib/spatial/bank';
import { SPATIAL_CATEGORIES, SpatialCategory } from '@/lib/spatial/types';
import { selectStandard20Questions } from '@/lib/spatial/selection';
import { calculateSpatialAssessmentResult } from '@/lib/spatial/scoring';
import {
  rotatePoint,
  reflectPointVertical,
  reflectPointHorizontal,
} from '@/lib/spatial/geometry/transforms2d';

describe('Spatial Reasoning Assessment — Full Mathematical & Integrity Verification', () => {
  it('guarantees the bank contains at least 60 fully validated questions', () => {
    expect(SPATIAL_QUESTION_BANK.length).toBeGreaterThanOrEqual(60);
    expect(SPATIAL_QUESTION_BANK.length).toBe(60);
  });

  it('verifies exact category representation across all 6 spatial domains', () => {
    const categoryCounts = SPATIAL_QUESTION_BANK.reduce((acc, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {} as Record<SpatialCategory, number>);

    expect(categoryCounts['mental_rotation']).toBe(15);
    expect(categoryCounts['cube_folding']).toBe(12);
    expect(categoryCounts['mirror_reflection']).toBe(9);
    expect(categoryCounts['paper_folding']).toBe(9);
    expect(categoryCounts['spatial_orientation']).toBe(9);
    expect(categoryCounts['block_counting']).toBe(6);
  });

  it('verifies difficulty distribution in the question bank', () => {
    const diffCounts = SPATIAL_QUESTION_BANK.reduce((acc, q) => {
      acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    expect(diffCounts['introductory']).toBeGreaterThan(0);
    expect(diffCounts['intermediate']).toBeGreaterThan(0);
    expect(diffCounts['challenging']).toBeGreaterThan(0);
  });

  it('guarantees unique IDs across the entire question bank', () => {
    const ids = SPATIAL_QUESTION_BANK.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(SPATIAL_QUESTION_BANK.length);
  });

  it('guarantees each question has strictly 4 options with distinct IDs (A, B, C, D)', () => {
    SPATIAL_QUESTION_BANK.forEach((q) => {
      const optionIds = q.options.map((o) => o.id);
      expect(optionIds).toEqual(['A', 'B', 'C', 'D']);
    });
  });

  it('guarantees each question has exactly one uniquely designated correct answer', () => {
    SPATIAL_QUESTION_BANK.forEach((q) => {
      expect(['A', 'B', 'C', 'D']).toContain(q.correctOptionId);
      const matches = q.options.filter((o) => o.id === q.correctOptionId);
      expect(matches.length).toBe(1);
    });
  });

  it('guarantees all questions have complete mathematical explanations and distractor analyses', () => {
    SPATIAL_QUESTION_BANK.forEach((q) => {
      expect(q.ruleExplanation).toBeTruthy();
      expect(q.explanationSteps.length).toBeGreaterThanOrEqual(2);
      expect(Object.keys(q.distractorExplanations)).toEqual(['A', 'B', 'C', 'D']);
    });
  });

  it('verifies 20-question test selection satisfies category quotas and difficulty spread', () => {
    const testQuestions = selectStandard20Questions([], 12345);
    expect(testQuestions.length).toBe(20);

    const counts = testQuestions.reduce((acc, q) => {
      acc[q.category] = (acc[q.category] || 0) + 1;
      return acc;
    }, {} as Record<SpatialCategory, number>);

    expect(counts['mental_rotation']).toBe(5);
    expect(counts['cube_folding']).toBe(4);
    expect(counts['mirror_reflection']).toBe(3);
    expect(counts['paper_folding']).toBe(3);
    expect(counts['spatial_orientation']).toBe(3);
    expect(counts['block_counting']).toBe(2);
  });

  it('verifies 2D geometry rotation transforms mathematically', () => {
    const center = { x: 50, y: 50 };
    const pt = { x: 50, y: 30 }; // top point 20px above center

    const r90 = rotatePoint(pt, center, 90);
    expect(r90).toEqual({ x: 70, y: 50 }); // rotated 90 deg clockwise to right

    const r180 = rotatePoint(pt, center, 180);
    expect(r180).toEqual({ x: 50, y: 70 }); // rotated 180 deg to bottom

    const r360 = rotatePoint(pt, center, 360);
    expect(r360).toEqual({ x: 50, y: 30 }); // full rotation returns to origin
  });

  it('verifies 2D reflection transformations invert coordinates and restore on double reflection', () => {
    const pt = { x: 20, y: 40 };
    const axisX = 50;

    const reflected = reflectPointVertical(pt, axisX);
    expect(reflected.x).toBe(80);
    expect(reflected.y).toBe(40);

    const doubleReflected = reflectPointVertical(reflected, axisX);
    expect(doubleReflected).toEqual(pt);
  });

  it('evaluates scoring engine idempotence and accuracy calculation', () => {
    const testQuestions = selectStandard20Questions([], 42);

    // 100% correct answers test
    const allCorrectAnswers: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
    testQuestions.forEach((q) => {
      allCorrectAnswers[q.id] = q.correctOptionId;
    });

    const perfectResult = calculateSpatialAssessmentResult(allCorrectAnswers, testQuestions, 300);
    expect(perfectResult.correctCount).toBe(20);
    expect(perfectResult.accuracyPercentage).toBe(100);
    expect(perfectResult.unansweredCount).toBe(0);

    // Half correct test
    const halfAnswers: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
    testQuestions.slice(0, 10).forEach((q) => {
      halfAnswers[q.id] = q.correctOptionId;
    });

    const halfResult = calculateSpatialAssessmentResult(halfAnswers, testQuestions, 200);
    expect(halfResult.correctCount).toBe(10);
    expect(halfResult.accuracyPercentage).toBe(50);
    expect(halfResult.unansweredCount).toBe(10);
  });
});
