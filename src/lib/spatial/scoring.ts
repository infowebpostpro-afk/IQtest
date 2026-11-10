import { BaseSpatialQuestion, SpatialAssessmentResult, SpatialAssessmentSession, OptionId } from './types';
import { SPATIAL_QUESTION_BANK, SPATIAL_ASSESSMENT_VERSION } from './bank';

export function calculateSpatialAssessmentResult(
  answers: Record<string, OptionId>,
  questions: BaseSpatialQuestion[],
  timeSpentSeconds = 0,
  flaggedIds: string[] = []
): SpatialAssessmentResult {
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const categoryMap: Record<string, { total: number; correct: number; name: string }> = {};

  questions.forEach((q) => {
    if (!categoryMap[q.category]) {
      categoryMap[q.category] = {
        total: 0,
        correct: 0,
        name: q.category.replace('_', ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      };
    }

    categoryMap[q.category].total += 1;

    const userAnswer = answers[q.id];
    if (!userAnswer) {
      unansweredCount += 1;
    } else if (userAnswer === q.correctOptionId) {
      correctCount += 1;
      categoryMap[q.category].correct += 1;
    } else {
      incorrectCount += 1;
    }
  });

  const accuracyPercentage =
    questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  const categoryScores = Object.entries(categoryMap).map(([category, val]) => ({
    category: category as BaseSpatialQuestion['category'],
    categoryName: val.name,
    total: val.total,
    correct: val.correct,
    percentage: val.total > 0 ? Math.round((val.correct / val.total) * 100) : 0,
  }));

  return {
    totalQuestions: questions.length,
    correctCount,
    incorrectCount,
    unansweredCount,
    accuracyPercentage,
    categoryScores,
    timeSpentSeconds,
    flaggedCount: flaggedIds.length,
    submittedAt: Date.now(),
    answers,
  };
}

