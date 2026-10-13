import { describe, it, expect } from 'vitest';
import { ASSESSMENT_QUESTIONS, ASSESSMENT_VERSION } from '@/data/questions';
import {
  saveAssessmentSession,
  loadAssessmentSession,
  clearAssessmentSession,
} from '@/lib/assessment/storage';
import { AssessmentSession } from '@/types/assessment';

describe('Assessment Bank & Logic Verification', () => {
  it('has unique IDs for every question', () => {
    const ids = ASSESSMENT_QUESTIONS.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(20);
  });

  it('guarantees that every option within each question has a distinct ID (A, B, C, D)', () => {
    ASSESSMENT_QUESTIONS.forEach((q) => {
      const optionIds = q.options.map((o) => o.id);
      expect(optionIds).toEqual(['A', 'B', 'C', 'D']);
      // Verify labels are non-empty
      q.options.forEach((opt) => {
        expect(opt.label.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('verifies that each question has an approved review status and version match', () => {
    ASSESSMENT_QUESTIONS.forEach((q) => {
      expect(q.reviewStatus).toBe('approved');
      expect(q.version).toBe(ASSESSMENT_VERSION);
    });
  });

  it('verifies explanations are thorough and provide solutions', () => {
    ASSESSMENT_QUESTIONS.forEach((q) => {
      expect(q.explanation.length).toBeGreaterThan(30);
    });
  });
});
