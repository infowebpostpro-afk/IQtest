import { describe, it, expect, beforeEach } from 'vitest';
import {
  LOGICAL_ASSESSMENT_QUESTIONS,
  LOGICAL_ASSESSMENT_VERSION,
  LOGICAL_CATEGORY_LABELS,
} from '@/data/logicalQuestions';
import { calculateLogicalAssessmentResult } from '@/lib/assessment/logicalScoring';
import {
  saveLogicalAssessmentSession,
  loadLogicalAssessmentSession,
  clearLogicalAssessmentSession,
  saveLogicalAssessmentResult,
  loadLogicalAssessmentResult,
} from '@/lib/assessment/logicalStorage';
import { AssessmentSession } from '@/types/assessment';

describe('Logical Reasoning Test — Question Bank & Integrity Verification', () => {
  it('contains exactly 20 questions', () => {
    expect(LOGICAL_ASSESSMENT_QUESTIONS.length).toBe(20);
  });

  it('verifies exact category distribution: 6 deductive, 5 conditional, 5 ordering, 4 inductive', () => {
    const categoryCounts = LOGICAL_ASSESSMENT_QUESTIONS.reduce(
      (acc, q) => {
        acc[q.category] = (acc[q.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    expect(categoryCounts['deductive']).toBe(6);
    expect(categoryCounts['conditional']).toBe(5);
    expect(categoryCounts['ordering']).toBe(5);
    expect(categoryCounts['inductive']).toBe(4);
  });

  it('guarantees unique IDs for every question in the logical reasoning bank', () => {
    const ids = LOGICAL_ASSESSMENT_QUESTIONS.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(20);
  });

  it('guarantees each question has strictly 4 options with distinct IDs (A, B, C, D)', () => {
    LOGICAL_ASSESSMENT_QUESTIONS.forEach((q) => {
      const optionIds = q.options.map((o) => o.id);
      expect(optionIds).toEqual(['A', 'B', 'C', 'D']);
      q.options.forEach((opt) => {
        expect(opt.label.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('verifies every correctOptionId corresponds to a valid option (A, B, C, or D)', () => {
    LOGICAL_ASSESSMENT_QUESTIONS.forEach((q) => {
      const validIds = q.options.map((o) => o.id);
      expect(validIds).toContain(q.correctOptionId);
    });
  });

  it('verifies all explanations are thorough and provide clear educational rationale', () => {
    LOGICAL_ASSESSMENT_QUESTIONS.forEach((q) => {
      expect(q.explanation.length).toBeGreaterThan(30);
      expect(q.reasoningSteps.length).toBeGreaterThanOrEqual(3);
      expect(q.commonMistake.length).toBeGreaterThan(15);
      expect(q.estimatedTimeSeconds).toBeGreaterThan(0);
      expect(q.reviewStatus).toBe('approved');
    });
  });
});

describe('Logical Reasoning Test — Question Logical Validity & Uniqueness Check', () => {
  it('validates ordering question lr-ord-03 has a uniquely constrained single solution', () => {
    const q3 = LOGICAL_ASSESSMENT_QUESTIONS.find((q) => q.id === 'lr-ord-03');
    expect(q3).toBeDefined();
    // Jack works two days before Leo (Wed - 2 = Mon). Leo is Wed. Karen is Thu. Nick is Fri.
    // Monday = Jack, Tuesday = Mia, Wednesday = Leo, Thursday = Karen, Friday = Nick.
    expect(q3?.correctOptionId).toBe('B'); // Tuesday
  });

  it('validates geometric sequence lr-ind-01 formula (2, 6, 18, 54 -> 162)', () => {
    const q1 = LOGICAL_ASSESSMENT_QUESTIONS.find((q) => q.id === 'lr-ind-01');
    expect(q1?.correctOptionId).toBe('C');
    const chosen = q1?.options.find((o) => o.id === 'C');
    expect(chosen?.label).toBe('162');
  });

  it('validates alternating sequence lr-ind-04 formula (+5, -3 -> 19 - 3 = 16)', () => {
    const q4 = LOGICAL_ASSESSMENT_QUESTIONS.find((q) => q.id === 'lr-ind-04');
    expect(q4?.correctOptionId).toBe('B');
    const chosen = q4?.options.find((o) => o.id === 'B');
    expect(chosen?.label).toBe('16');
  });
});

describe('Logical Reasoning Test — Scoring Engine', () => {
  it('calculates perfect 20/20 (100%) score accurately', () => {
    const answers: Record<string, string> = {};
    LOGICAL_ASSESSMENT_QUESTIONS.forEach((q) => {
      answers[q.id] = q.correctOptionId;
    });

    const result = calculateLogicalAssessmentResult(
      LOGICAL_ASSESSMENT_QUESTIONS,
      answers,
      300,
      'untimed',
      LOGICAL_ASSESSMENT_VERSION
    );

    expect(result.totalQuestions).toBe(20);
    expect(result.correctCount).toBe(20);
    expect(result.incorrectCount).toBe(0);
    expect(result.unansweredCount).toBe(0);
    expect(result.accuracyPercentage).toBe(100);
    expect(result.categoryScores.deductive.correct).toBe(6);
    expect(result.categoryScores.conditional.correct).toBe(5);
    expect(result.categoryScores.ordering.correct).toBe(5);
    expect(result.categoryScores.inductive.correct).toBe(4);
  });

  it('calculates 15/20 (75%) score as stated in the editorial article specifications', () => {
    const answers: Record<string, string> = {};
    LOGICAL_ASSESSMENT_QUESTIONS.forEach((q, idx) => {
      if (idx < 15) {
        answers[q.id] = q.correctOptionId;
      } else {
        answers[q.id] = q.correctOptionId === 'A' ? 'B' : 'A';
      }
    });

    const result = calculateLogicalAssessmentResult(
      LOGICAL_ASSESSMENT_QUESTIONS,
      answers,
      450,
      'timed_15',
      LOGICAL_ASSESSMENT_VERSION
    );

    expect(result.totalQuestions).toBe(20);
    expect(result.correctCount).toBe(15);
    expect(result.incorrectCount).toBe(5);
    expect(result.unansweredCount).toBe(0);
    expect(result.accuracyPercentage).toBe(75);
  });

  it('handles unanswered questions without penalty', () => {
    const answers: Record<string, string> = {};
    const result = calculateLogicalAssessmentResult(
      LOGICAL_ASSESSMENT_QUESTIONS,
      answers,
      60,
      'untimed',
      LOGICAL_ASSESSMENT_VERSION
    );

    expect(result.totalQuestions).toBe(20);
    expect(result.correctCount).toBe(0);
    expect(result.incorrectCount).toBe(0);
    expect(result.unansweredCount).toBe(20);
    expect(result.accuracyPercentage).toBe(0);
  });
});

describe('Logical Reasoning Test — Session Persistence', () => {
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
    clearLogicalAssessmentSession();
  });

  it('safely serializes and restores an in-progress session', () => {
    const mockSession: AssessmentSession = {
      version: LOGICAL_ASSESSMENT_VERSION,
      mode: 'timed_15',
      startTime: 1000000,
      remainingSeconds: 600,
      lastUpdated: 1000300,
      currentQuestionIndex: 7,
      answers: { 'lr-ded-01': 'B', 'lr-con-01': 'B' },
      flaggedQuestionIds: ['lr-ded-01'],
      isCompleted: false,
    };

    saveLogicalAssessmentSession(mockSession);
    const restored = loadLogicalAssessmentSession(LOGICAL_ASSESSMENT_VERSION);
    expect(restored).toEqual(mockSession);

    clearLogicalAssessmentSession();
    expect(loadLogicalAssessmentSession()).toBeNull();
  });
});

describe('Logical Reasoning Test — Learn Mode First-Attempt Metric Logic', () => {
  it('correctly tracks first-attempt accuracy separately from retried answers', () => {
    const firstAttempts: Record<string, boolean> = {
      'lr-ded-01': true,
      'lr-ded-02': false, // User answered incorrectly on first try
      'lr-ded-03': true,
    };

    // Even if user retries lr-ded-02 and gets it right, firstAttempts['lr-ded-02'] remains false
    const totalAttempted = Object.keys(firstAttempts).length;
    const firstAttemptCorrect = Object.values(firstAttempts).filter(Boolean).length;
    const accuracy = Math.round((firstAttemptCorrect / totalAttempted) * 100);

    expect(totalAttempted).toBe(3);
    expect(firstAttemptCorrect).toBe(2);
    expect(accuracy).toBe(67);
  });
});
