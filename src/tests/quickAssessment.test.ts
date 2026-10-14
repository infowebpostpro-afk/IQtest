import { describe, it, expect, beforeEach } from 'vitest';
import {
  QUICK_ASSESSMENT_QUESTIONS,
  QUICK_ASSESSMENT_VERSION,
} from '@/data/quickQuestions';
import { calculateQuickAssessmentResult } from '@/lib/assessment/quickScoring';
import {
  saveQuickAssessmentSession,
  loadQuickAssessmentSession,
  clearQuickAssessmentSession,
} from '@/lib/assessment/quickStorage';
import { AssessmentSession } from '@/types/assessment';

describe('Quick IQ Test — Question Bank & Integrity Verification', () => {
  it('contains exactly 10 questions', () => {
    expect(QUICK_ASSESSMENT_QUESTIONS.length).toBe(10);
  });

  it('verifies exact category distribution: 3 numerical, 3 abstract, 2 logical, 2 spatial', () => {
    const categoryCounts = QUICK_ASSESSMENT_QUESTIONS.reduce(
      (acc, q) => {
        acc[q.category] = (acc[q.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    expect(categoryCounts['numerical']).toBe(3);
    expect(categoryCounts['abstract']).toBe(3);
    expect(categoryCounts['logical']).toBe(2);
    expect(categoryCounts['spatial']).toBe(2);
  });

  it('guarantees unique IDs for every question in the quick question bank', () => {
    const ids = QUICK_ASSESSMENT_QUESTIONS.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(10);
  });

  it('guarantees each question has strictly 4 options with distinct IDs (A, B, C, D)', () => {
    QUICK_ASSESSMENT_QUESTIONS.forEach((q) => {
      const optionIds = q.options.map((o) => o.id);
      expect(optionIds).toEqual(['A', 'B', 'C', 'D']);
      q.options.forEach((opt) => {
        expect(opt.label.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('verifies every correctOptionId corresponds to a valid option (A, B, C, or D)', () => {
    QUICK_ASSESSMENT_QUESTIONS.forEach((q) => {
      const validIds = q.options.map((o) => o.id);
      expect(validIds).toContain(q.correctOptionId);
    });
  });

  it('verifies all explanations are thorough and provide clear educational rationale', () => {
    QUICK_ASSESSMENT_QUESTIONS.forEach((q) => {
      expect(q.explanation.length).toBeGreaterThan(40);
      expect(q.reviewStatus).toBe('approved');
      expect(q.version).toBe(QUICK_ASSESSMENT_VERSION);
    });
  });

  it('verifies diagram accessibility descriptions are present for all visual puzzles', () => {
    QUICK_ASSESSMENT_QUESTIONS.forEach((q) => {
      if (q.visualAsset) {
        expect(q.accessibilityDescription.trim().length).toBeGreaterThan(15);
      }
    });
  });
});

describe('Quick IQ Test — Deterministic Scoring Engine', () => {
  it('calculates 10/10 correct = 100% accuracy', () => {
    const allCorrectAnswers: Record<string, string> = {};
    QUICK_ASSESSMENT_QUESTIONS.forEach((q) => {
      allCorrectAnswers[q.id] = q.correctOptionId;
    });

    const result = calculateQuickAssessmentResult(
      QUICK_ASSESSMENT_QUESTIONS,
      allCorrectAnswers,
      180
    );

    expect(result.totalQuestions).toBe(10);
    expect(result.correctCount).toBe(10);
    expect(result.incorrectCount).toBe(0);
    expect(result.unansweredCount).toBe(0);
    expect(result.accuracyPercentage).toBe(100);
  });

  it('calculates 7/10 correct = 70% accuracy', () => {
    const answers: Record<string, string> = {};
    // Answer first 7 correctly, last 3 incorrectly
    QUICK_ASSESSMENT_QUESTIONS.slice(0, 7).forEach((q) => {
      answers[q.id] = q.correctOptionId;
    });
    QUICK_ASSESSMENT_QUESTIONS.slice(7, 10).forEach((q) => {
      // Pick an incorrect option
      const wrong = q.options.find((o) => o.id !== q.correctOptionId)!.id;
      answers[q.id] = wrong;
    });

    const result = calculateQuickAssessmentResult(
      QUICK_ASSESSMENT_QUESTIONS,
      answers,
      240
    );

    expect(result.totalQuestions).toBe(10);
    expect(result.correctCount).toBe(7);
    expect(result.incorrectCount).toBe(3);
    expect(result.unansweredCount).toBe(0);
    expect(result.accuracyPercentage).toBe(70);
  });

  it('calculates 5/10 correct = 50% accuracy', () => {
    const answers: Record<string, string> = {};
    QUICK_ASSESSMENT_QUESTIONS.slice(0, 5).forEach((q) => {
      answers[q.id] = q.correctOptionId;
    });
    QUICK_ASSESSMENT_QUESTIONS.slice(5, 10).forEach((q) => {
      const wrong = q.options.find((o) => o.id !== q.correctOptionId)!.id;
      answers[q.id] = wrong;
    });

    const result = calculateQuickAssessmentResult(
      QUICK_ASSESSMENT_QUESTIONS,
      answers,
      150
    );

    expect(result.correctCount).toBe(5);
    expect(result.incorrectCount).toBe(5);
    expect(result.accuracyPercentage).toBe(50);
  });

  it('calculates 0/10 correct = 0% accuracy', () => {
    const answers: Record<string, string> = {};
    QUICK_ASSESSMENT_QUESTIONS.forEach((q) => {
      const wrong = q.options.find((o) => o.id !== q.correctOptionId)!.id;
      answers[q.id] = wrong;
    });

    const result = calculateQuickAssessmentResult(
      QUICK_ASSESSMENT_QUESTIONS,
      answers,
      120
    );

    expect(result.correctCount).toBe(0);
    expect(result.incorrectCount).toBe(10);
    expect(result.accuracyPercentage).toBe(0);
  });

  it('calculates 7 correct, 2 incorrect, 1 unanswered = 70% accuracy', () => {
    const answers: Record<string, string> = {};
    // 7 correct
    QUICK_ASSESSMENT_QUESTIONS.slice(0, 7).forEach((q) => {
      answers[q.id] = q.correctOptionId;
    });
    // 2 incorrect
    QUICK_ASSESSMENT_QUESTIONS.slice(7, 9).forEach((q) => {
      const wrong = q.options.find((o) => o.id !== q.correctOptionId)!.id;
      answers[q.id] = wrong;
    });
    // Question 10 left unanswered (omitted from answers record)

    const result = calculateQuickAssessmentResult(
      QUICK_ASSESSMENT_QUESTIONS,
      answers,
      210
    );

    expect(result.totalQuestions).toBe(10);
    expect(result.correctCount).toBe(7);
    expect(result.incorrectCount).toBe(2);
    expect(result.unansweredCount).toBe(1);
    expect(result.accuracyPercentage).toBe(70);
  });

  it('strictly guarantees NO standardized IQ number or clinical claims are attached to results', () => {
    const answers: Record<string, string> = {
      [QUICK_ASSESSMENT_QUESTIONS[0].id]: QUICK_ASSESSMENT_QUESTIONS[0].correctOptionId,
    };
    const result = calculateQuickAssessmentResult(
      QUICK_ASSESSMENT_QUESTIONS,
      answers,
      60
    );

    const resultRecord = result as unknown as Record<string, unknown>;
    expect(resultRecord['iqScore']).toBeUndefined();
    expect(resultRecord['standardizedIQ']).toBeUndefined();
    expect(resultRecord['percentile']).toBeUndefined();
    expect(resultRecord['clinicalRating']).toBeUndefined();
  });
});

describe('Quick IQ Test — Local Storage Session Recovery', () => {
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
    clearQuickAssessmentSession();
  });

  it('correctly persists and recovers in-progress quick assessment session', () => {
    const mockSession: AssessmentSession = {
      version: QUICK_ASSESSMENT_VERSION,
      mode: 'untimed',
      startTime: 1000,
      remainingSeconds: 0,
      lastUpdated: 2000,
      currentQuestionIndex: 4,
      answers: {
        'quick-num-01': 'B',
        'quick-num-02': 'B',
      },
      flaggedQuestionIds: ['quick-num-03'],
      isCompleted: false,
    };

    saveQuickAssessmentSession(mockSession);
    const loaded = loadQuickAssessmentSession(QUICK_ASSESSMENT_VERSION);

    expect(loaded).not.toBeNull();
    expect(loaded?.currentQuestionIndex).toBe(4);
    expect(loaded?.answers['quick-num-01']).toBe('B');
    expect(loaded?.flaggedQuestionIds).toEqual(['quick-num-03']);

    clearQuickAssessmentSession();
    expect(loadQuickAssessmentSession()).toBeNull();
  });
});
