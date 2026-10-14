import {
  Question,
  AssessmentResult,
  CategoryScore,
  QuestionCategory,
  AssessmentMode,
} from '@/types/assessment';
import { CATEGORY_LABELS } from '@/lib/assessment/scoring';
import { QUICK_ASSESSMENT_VERSION } from '@/data/quickQuestions';

export function calculateQuickAssessmentResult(
  questions: Question[],
  answers: Record<string, string>,
  timeSpentSeconds: number,
  mode: AssessmentMode = 'untimed',
  assessmentVersion: string = QUICK_ASSESSMENT_VERSION
): AssessmentResult {
  const totalQuestions = questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const categoryCounts: Record<QuestionCategory, { total: number; correct: number }> = {
    numerical: { total: 0, correct: 0 },
    logical: { total: 0, correct: 0 },
    abstract: { total: 0, correct: 0 },
    spatial: { total: 0, correct: 0 },
  };

  questions.forEach((q) => {
    if (!categoryCounts[q.category]) {
      categoryCounts[q.category] = { total: 0, correct: 0 };
    }
    categoryCounts[q.category].total += 1;

    const selectedOption = answers[q.id];
    if (!selectedOption) {
      unansweredCount += 1;
    } else if (selectedOption === q.correctOptionId) {
      correctCount += 1;
      categoryCounts[q.category].correct += 1;
    } else {
      incorrectCount += 1;
    }
  });

  const accuracyPercentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const categoryScores: Record<QuestionCategory, CategoryScore> = {
    numerical: {
      category: 'numerical',
      categoryName: CATEGORY_LABELS.numerical,
      total: categoryCounts.numerical.total,
      correct: categoryCounts.numerical.correct,
      percentage:
        categoryCounts.numerical.total > 0
          ? Math.round((categoryCounts.numerical.correct / categoryCounts.numerical.total) * 100)
          : 0,
    },
    logical: {
      category: 'logical',
      categoryName: CATEGORY_LABELS.logical,
      total: categoryCounts.logical.total,
      correct: categoryCounts.logical.correct,
      percentage:
        categoryCounts.logical.total > 0
          ? Math.round((categoryCounts.logical.correct / categoryCounts.logical.total) * 100)
          : 0,
    },
    abstract: {
      category: 'abstract',
      categoryName: CATEGORY_LABELS.abstract,
      total: categoryCounts.abstract.total,
      correct: categoryCounts.abstract.correct,
      percentage:
        categoryCounts.abstract.total > 0
          ? Math.round((categoryCounts.abstract.correct / categoryCounts.abstract.total) * 100)
          : 0,
    },
    spatial: {
      category: 'spatial',
      categoryName: CATEGORY_LABELS.spatial,
      total: categoryCounts.spatial.total,
      correct: categoryCounts.spatial.correct,
      percentage:
        categoryCounts.spatial.total > 0
          ? Math.round((categoryCounts.spatial.correct / categoryCounts.spatial.total) * 100)
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
