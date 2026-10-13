import { describe, it, expect } from 'vitest';
import { calculateAssessmentResult } from '@/lib/assessment/scoring';
import { ASSESSMENT_QUESTIONS, ASSESSMENT_VERSION } from '@/data/questions';
import { Question } from '@/types/assessment';

describe('Assessment Question Bank Integrity', () => {
  it('contains exactly 20 reviewed questions', () => {
    expect(ASSESSMENT_QUESTIONS.length).toBe(20);
  });

  it('contains exactly 5 questions per cognitive category', () => {
    const categories = ASSESSMENT_QUESTIONS.map((q) => q.category);
    const count = (cat: string) => categories.filter((c) => c === cat).length;

    expect(count('numerical')).toBe(5);
    expect(count('logical')).toBe(5);
    expect(count('abstract')).toBe(5);
    expect(count('spatial')).toBe(5);
  });

  it('validates strongly typed schema and unambiguous answers for every question', () => {
    ASSESSMENT_QUESTIONS.forEach((q: Question) => {
      expect(q.id).toBeDefined();
      expect(q.prompt).toBeTruthy();
      expect(q.explanation).toBeTruthy();
      expect(q.version).toBe(ASSESSMENT_VERSION);
      expect(q.reviewStatus).toBe('approved');
      expect(q.options.length).toBe(4);

      const optionIds = q.options.map((opt) => opt.id);
      expect(optionIds).toEqual(['A', 'B', 'C', 'D']);
      expect(optionIds).toContain(q.correctOptionId);
      expect(q.accessibilityDescription).toBeTruthy();

      // Ensure visual assets exist for abstract and spatial questions
      if (q.category === 'abstract' || q.category === 'spatial') {
        expect(q.visualAsset).toBeDefined();
        expect(q.visualAsset?.puzzleId).toBeTruthy();
      }
    });
  });
});

describe('Assessment Scoring Engine (Section 22 Requirements)', () => {
  it('computes 20/20 = 100% correctly', () => {
    const allCorrectAnswers: Record<string, string> = {};
    ASSESSMENT_QUESTIONS.forEach((q) => {
      allCorrectAnswers[q.id] = q.correctOptionId;
    });

    const result = calculateAssessmentResult(ASSESSMENT_QUESTIONS, allCorrectAnswers, 600);

    expect(result.totalQuestions).toBe(20);
    expect(result.correctCount).toBe(20);
    expect(result.incorrectCount).toBe(0);
    expect(result.unansweredCount).toBe(0);
    expect(result.accuracyPercentage).toBe(100);
    expect(result.categoryScores.numerical.correct).toBe(5);
    expect(result.categoryScores.logical.correct).toBe(5);
    expect(result.categoryScores.abstract.correct).toBe(5);
    expect(result.categoryScores.spatial.correct).toBe(5);
  });

  it('computes 0/20 = 0% correctly when all answers are wrong', () => {
    const allWrongAnswers: Record<string, string> = {};
    ASSESSMENT_QUESTIONS.forEach((q) => {
      // Pick an option that is definitely not the correct one
      const wrong = q.options.find((opt) => opt.id !== q.correctOptionId)!.id;
      allWrongAnswers[q.id] = wrong;
    });

    const result = calculateAssessmentResult(ASSESSMENT_QUESTIONS, allWrongAnswers, 400);

    expect(result.correctCount).toBe(0);
    expect(result.incorrectCount).toBe(20);
    expect(result.unansweredCount).toBe(0);
    expect(result.accuracyPercentage).toBe(0);
  });

  it('computes 10/20 = 50% correctly', () => {
    const halfCorrectAnswers: Record<string, string> = {};
    ASSESSMENT_QUESTIONS.forEach((q, idx) => {
      if (idx < 10) {
        halfCorrectAnswers[q.id] = q.correctOptionId;
      } else {
        const wrong = q.options.find((opt) => opt.id !== q.correctOptionId)!.id;
        halfCorrectAnswers[q.id] = wrong;
      }
    });

    const result = calculateAssessmentResult(ASSESSMENT_QUESTIONS, halfCorrectAnswers, 500);

    expect(result.correctCount).toBe(10);
    expect(result.incorrectCount).toBe(10);
    expect(result.accuracyPercentage).toBe(50);
  });

  it('computes 15 correct, 3 incorrect, 2 unanswered = 75% correctly', () => {
    const answers: Record<string, string> = {};
    // 15 correct
    for (let i = 0; i < 15; i++) {
      answers[ASSESSMENT_QUESTIONS[i].id] = ASSESSMENT_QUESTIONS[i].correctOptionId;
    }
    // 3 incorrect
    for (let i = 15; i < 18; i++) {
      const wrong = ASSESSMENT_QUESTIONS[i].options.find(
        (opt) => opt.id !== ASSESSMENT_QUESTIONS[i].correctOptionId
      )!.id;
      answers[ASSESSMENT_QUESTIONS[i].id] = wrong;
    }
    // 2 unanswered (index 18, 19 left blank)

    const result = calculateAssessmentResult(ASSESSMENT_QUESTIONS, answers, 720);

    expect(result.correctCount).toBe(15);
    expect(result.incorrectCount).toBe(3);
    expect(result.unansweredCount).toBe(2);
    expect(result.accuracyPercentage).toBe(75);
  });
});
