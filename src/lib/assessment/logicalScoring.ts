import { AssessmentMode } from '@/types/assessment';
import { LogicalQuestion, LOGICAL_CATEGORY_LABELS } from '@/data/logicalQuestions';

export type LogicalCategory = 'deductive' | 'conditional' | 'ordering' | 'inductive';

export interface LogicalCategoryScore {
  category: LogicalCategory;
  categoryName: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface LogicalAssessmentResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  categoryScores: Record<LogicalCategory, LogicalCategoryScore>;
  assessmentVersion: string;
  completedAt: string;
  mode: AssessmentMode;
}

export function calculateLogicalAssessmentResult(
  questions: LogicalQuestion[],
  answers: Record<string, string>,
  timeSpentSeconds: number,
  mode: AssessmentMode = 'untimed',
  assessmentVersion: string = '1.0.0'
): LogicalAssessmentResult {
  const totalQuestions = questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const categoryCounts: Record<LogicalCategory, { total: number; correct: number }> = {
    deductive: { total: 0, correct: 0 },
    conditional: { total: 0, correct: 0 },
    ordering: { total: 0, correct: 0 },
    inductive: { total: 0, correct: 0 },
  };

  questions.forEach((q) => {
    categoryCounts[q.category].total += 1;

    const selected = answers[q.id];
    if (!selected) {
      unansweredCount += 1;
    } else if (selected === q.correctOptionId) {
      correctCount += 1;
      categoryCounts[q.category].correct += 1;
    } else {
      incorrectCount += 1;
    }
  });

  const accuracyPercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const categoryScores: Record<LogicalCategory, LogicalCategoryScore> = {
    deductive: {
      category: 'deductive',
      categoryName: LOGICAL_CATEGORY_LABELS.deductive,
      total: categoryCounts.deductive.total,
      correct: categoryCounts.deductive.correct,
      percentage: categoryCounts.deductive.total > 0
        ? Math.round((categoryCounts.deductive.correct / categoryCounts.deductive.total) * 100)
        : 0,
    },
    conditional: {
      category: 'conditional',
      categoryName: LOGICAL_CATEGORY_LABELS.conditional,
      total: categoryCounts.conditional.total,
      correct: categoryCounts.conditional.correct,
      percentage: categoryCounts.conditional.total > 0
        ? Math.round((categoryCounts.conditional.correct / categoryCounts.conditional.total) * 100)
        : 0,
    },
    ordering: {
      category: 'ordering',
      categoryName: LOGICAL_CATEGORY_LABELS.ordering,
      total: categoryCounts.ordering.total,
      correct: categoryCounts.ordering.correct,
      percentage: categoryCounts.ordering.total > 0
        ? Math.round((categoryCounts.ordering.correct / categoryCounts.ordering.total) * 100)
        : 0,
    },
    inductive: {
      category: 'inductive',
      categoryName: LOGICAL_CATEGORY_LABELS.inductive,
      total: categoryCounts.inductive.total,
      correct: categoryCounts.inductive.correct,
      percentage: categoryCounts.inductive.total > 0
        ? Math.round((categoryCounts.inductive.correct / categoryCounts.inductive.total) * 100)
        : 0,
    },
  };

  return {
    totalQuestions,
    correctCount,
    incorrectCount,
    unansweredCount,
    accuracyPercentage,
    timeSpentSeconds,
    categoryScores,
    assessmentVersion,
    completedAt: new Date().toISOString(),
    mode,
  };
}

