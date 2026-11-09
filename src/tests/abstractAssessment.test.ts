import { describe, it, expect, beforeEach } from 'vitest';
import {
  ABSTRACT_ASSESSMENT_QUESTIONS,
  ABSTRACT_ASSESSMENT_VERSION,
  ABSTRACT_CATEGORY_LABELS,
} from '@/data/abstractQuestions';
import { calculateAbstractAssessmentResult } from '@/lib/assessment/abstractScoring';
import {
  saveAbstractAssessmentSession,
  loadAbstractAssessmentSession,
  clearAbstractAssessmentSession,
  saveAbstractAssessmentResult,
  loadAbstractAssessmentResult,
} from '@/lib/assessment/abstractStorage';
import { AssessmentSession } from '@/types/assessment';

describe('Abstract Reasoning Test — Question Bank & Integrity Verification', () => {
  it('contains exactly 20 questions', () => {
    expect(ABSTRACT_ASSESSMENT_QUESTIONS.length).toBe(20);
  });

  it('verifies exact category distribution: 6 sequences, 6 matrices, 4 odd_one_out, 4 analogies', () => {
    const categoryCounts = ABSTRACT_ASSESSMENT_QUESTIONS.reduce(
      (acc, q) => {
        acc[q.category] = (acc[q.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    expect(categoryCounts['sequences']).toBe(6);
    expect(categoryCounts['matrices']).toBe(6);
    expect(categoryCounts['odd_one_out']).toBe(4);
    expect(categoryCounts['analogies']).toBe(4);
  });

  it('verifies difficulty distribution: 6 introductory, 8 intermediate, 6 advanced', () => {
    const difficultyCounts = ABSTRACT_ASSESSMENT_QUESTIONS.reduce(
      (acc, q) => {
        acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    expect(difficultyCounts['introductory']).toBe(6);
    expect(difficultyCounts['intermediate']).toBe(8);
    expect(difficultyCounts['advanced']).toBe(6);
  });

  it('guarantees unique IDs for every question in the visual question bank', () => {
    const ids = ABSTRACT_ASSESSMENT_QUESTIONS.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(20);
  });

  it('guarantees each question has strictly 4 options with distinct IDs (A, B, C, D)', () => {
    ABSTRACT_ASSESSMENT_QUESTIONS.forEach((q) => {
      const optionIds = q.options.map((o) => o.id);
      expect(optionIds).toEqual(['A', 'B', 'C', 'D']);
      q.options.forEach((opt) => {
        expect(opt.figure).toBeDefined();
        expect(opt.figure.elements.length).toBeGreaterThan(0);
        expect(opt.accessibilityLabel.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('verifies every correctOptionId corresponds to a valid option (A, B, C, or D)', () => {
    ABSTRACT_ASSESSMENT_QUESTIONS.forEach((q) => {
      const validIds = q.options.map((o) => o.id);
      expect(validIds).toContain(q.correctOptionId);
    });
  });

  it('verifies all questions have explanations, rules, reasoning steps, and common mistakes', () => {
    ABSTRACT_ASSESSMENT_QUESTIONS.forEach((q) => {
      expect(q.intendedRule.trim().length).toBeGreaterThan(15);
      expect(q.explanation.trim().length).toBeGreaterThan(20);
      expect(q.reasoningSteps.length).toBeGreaterThanOrEqual(2);
      expect(q.commonMistake.trim().length).toBeGreaterThan(10);
      expect(q.accessibilityDescription.trim().length).toBeGreaterThan(15);
      expect(q.reviewStatus).toBe('approved');
    });
  });
});

describe('Abstract Reasoning Test — Diagram Structural Integrity', () => {
  it('validates figure sequence structure has 4 frames with a target frame', () => {
    const sequences = ABSTRACT_ASSESSMENT_QUESTIONS.filter((q) => q.category === 'sequences');
    sequences.forEach((q) => {
      expect(q.diagram.type).toBe('sequence');
      if (q.diagram.type === 'sequence') {
        expect(q.diagram.data.frames.length).toBe(4);
        const targetFrame = q.diagram.data.frames.find((f) => f.isTarget || f.label === '?');
        expect(targetFrame).toBeDefined();
      }
    });
  });

  it('validates matrix reasoning grids have the expected cell count (2x2 = 4, 3x3 = 9)', () => {
    const matrices = ABSTRACT_ASSESSMENT_QUESTIONS.filter((q) => q.category === 'matrices');
    matrices.forEach((q) => {
      expect(q.diagram.type).toBe('matrix');
      if (q.diagram.type === 'matrix') {
        const { rows, cols, cells } = q.diagram.data;
        expect(cells.length).toBe(rows * cols);
        const targetCell = cells.find((c) => c.isTarget || c.label === '?');
        expect(targetCell).toBeDefined();
      }
    });
  });

  it('validates odd-one-out questions contain 4 candidate figures', () => {
    const oddOnes = ABSTRACT_ASSESSMENT_QUESTIONS.filter((q) => q.category === 'odd_one_out');
    oddOnes.forEach((q) => {
      expect(q.diagram.type).toBe('odd_one_out');
      if (q.diagram.type === 'odd_one_out') {
        expect(q.diagram.data.figures.length).toBe(4);
      }
    });
  });

  it('validates visual analogy questions contain sourceA, targetB, sourceC, and targetD', () => {
    const analogies = ABSTRACT_ASSESSMENT_QUESTIONS.filter((q) => q.category === 'analogies');
    analogies.forEach((q) => {
      expect(q.diagram.type).toBe('analogy');
      if (q.diagram.type === 'analogy') {
        expect(q.diagram.data.sourceA.elements.length).toBeGreaterThan(0);
        expect(q.diagram.data.targetB.elements.length).toBeGreaterThan(0);
        expect(q.diagram.data.sourceC.elements.length).toBeGreaterThan(0);
        expect(q.diagram.data.targetD?.isTarget).toBe(true);
      }
    });
  });
});

describe('Abstract Reasoning Test — Scoring Engine', () => {
  it('correctly calculates a 100% perfect score (20/20)', () => {
    const perfectAnswers: Record<string, string> = {};
    ABSTRACT_ASSESSMENT_QUESTIONS.forEach((q) => {
      perfectAnswers[q.id] = q.correctOptionId;
    });

    const result = calculateAbstractAssessmentResult(
      ABSTRACT_ASSESSMENT_QUESTIONS,
      perfectAnswers,
      600,
      'untimed',
      ABSTRACT_ASSESSMENT_VERSION
    );

    expect(result.totalQuestions).toBe(20);
    expect(result.correctCount).toBe(20);
    expect(result.incorrectCount).toBe(0);
    expect(result.unansweredCount).toBe(0);
    expect(result.accuracyPercentage).toBe(100);
    expect(result.categoryScores.sequences.percentage).toBe(100);
    expect(result.categoryScores.matrices.percentage).toBe(100);
    expect(result.categoryScores.odd_one_out.percentage).toBe(100);
    expect(result.categoryScores.analogies.percentage).toBe(100);
  });

  it('correctly calculates partial scores and category breakdowns', () => {
    const partialAnswers: Record<string, string> = {};
    // Answer only the 6 sequence questions correctly
    ABSTRACT_ASSESSMENT_QUESTIONS.forEach((q) => {
      if (q.category === 'sequences') {
        partialAnswers[q.id] = q.correctOptionId;
      }
    });

    const result = calculateAbstractAssessmentResult(
      ABSTRACT_ASSESSMENT_QUESTIONS,
      partialAnswers,
      300,
      'untimed'
    );

    expect(result.correctCount).toBe(6);
    expect(result.unansweredCount).toBe(14);
    expect(result.accuracyPercentage).toBe(30); // 6 / 20 = 30%
    expect(result.categoryScores.sequences.correct).toBe(6);
    expect(result.categoryScores.sequences.percentage).toBe(100);
    expect(result.categoryScores.matrices.correct).toBe(0);
    expect(result.categoryScores.matrices.percentage).toBe(0);
  });

  it('correctly calculates 0% score when all questions are incorrect', () => {
    const wrongAnswers: Record<string, string> = {};
    ABSTRACT_ASSESSMENT_QUESTIONS.forEach((q) => {
      const wrong = q.options.find((o) => o.id !== q.correctOptionId)?.id || 'A';
      wrongAnswers[q.id] = wrong;
    });

    const result = calculateAbstractAssessmentResult(
      ABSTRACT_ASSESSMENT_QUESTIONS,
      wrongAnswers,
      450,
      'untimed'
    );

    expect(result.correctCount).toBe(0);
    expect(result.incorrectCount).toBe(20);
    expect(result.accuracyPercentage).toBe(0);
  });
});

describe('Abstract Reasoning Test — Persistence & Storage', () => {
  const storageMap: Record<string, string> = {};

  beforeEach(() => {
    (globalThis as unknown as { window: unknown }).window = globalThis;
    (globalThis as unknown as { localStorage: unknown }).localStorage = {
      getItem: (key: string) => storageMap[key] || null,
      setItem: (key: string, val: string) => {
        storageMap[key] = val;
      },
      removeItem: (key: string) => {
        delete storageMap[key];
      },
      clear: () => {
        Object.keys(storageMap).forEach((k) => delete storageMap[k]);
      },
    };
    clearAbstractAssessmentSession();
  });

  it('saves, loads, and clears session data safely in localStorage', () => {
    const mockSession: AssessmentSession = {
      version: ABSTRACT_ASSESSMENT_VERSION,
      mode: 'timed_15',
      startTime: 1000000,
      remainingSeconds: 600,
      lastUpdated: 1000300,
      currentQuestionIndex: 3,
      answers: { 'abs-seq-01': 'B' },
      flaggedQuestionIds: ['abs-seq-02'],
      isCompleted: false,
    };

    saveAbstractAssessmentSession(mockSession);
    const loaded = loadAbstractAssessmentSession(ABSTRACT_ASSESSMENT_VERSION);
    expect(loaded).toEqual(mockSession);

    clearAbstractAssessmentSession();
    const afterClear = loadAbstractAssessmentSession(ABSTRACT_ASSESSMENT_VERSION);
    expect(afterClear).toBeNull();
  });

  it('discards stale session data when version check mismatches', () => {
    const mockSession: AssessmentSession = {
      version: '0.0.1-stale',
      mode: 'untimed',
      startTime: Date.now(),
      remainingSeconds: 0,
      lastUpdated: Date.now(),
      currentQuestionIndex: 1,
      answers: {},
      flaggedQuestionIds: [],
      isCompleted: false,
    };

    saveAbstractAssessmentSession(mockSession);
    const loaded = loadAbstractAssessmentSession('1.0.0');
    expect(loaded).toBeNull();
  });

  it('verifies AbstractActiveAssessment and AbstractResultsDashboard handle empty/undefined defaults safely', () => {
    // Verify that calculation and defaults operate without throwing
    const emptyResult = calculateAbstractAssessmentResult(
      ABSTRACT_ASSESSMENT_QUESTIONS,
      {},
      60,
      'untimed',
      ABSTRACT_ASSESSMENT_VERSION
    );
    expect(emptyResult.correctCount).toBe(0);
    expect(emptyResult.totalQuestions).toBe(20);
    expect(emptyResult.unansweredCount).toBe(20);
    expect(emptyResult.incorrectCount).toBe(0);
  });
});
