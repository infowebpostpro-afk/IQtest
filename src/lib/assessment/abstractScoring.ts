import { AssessmentMode } from '@/types/assessment';
import { AbstractQuestion, AbstractCategory } from '@/types/abstractAssessment';
import { ABSTRACT_CATEGORY_LABELS } from '@/data/abstractQuestions';

export interface AbstractCategoryScore {
  category: AbstractCategory;
  categoryName: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface AbstractAssessmentResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  categoryScores: Record<AbstractCategory, AbstractCategoryScore>;
  assessmentVersion: string;
  completedAt: string;
  mode: AssessmentMode;
}

export function calculateAbstractAssessmentResult(
  questions: AbstractQuestion[],
  answers: Record<string, string>,
  timeSpentSeconds: number,
  mode: AssessmentMode = 'untimed',
  assessmentVersion: string = '1.0.0'
): AbstractAssessmentResult {
  const totalQuestions = questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const categoryCounts: Record<AbstractCategory, { total: number; correct: number }> = {
    sequences: { total: 0, correct: 0 },
    matrices: { total: 0, correct: 0 },
    odd_one_out: { total: 0, correct: 0 },
    analogies: { total: 0, correct: 0 },
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

  const accuracyPercentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const categoryScores = (
    Object.keys(categoryCounts) as AbstractCategory[]
  ).reduce((acc, cat) => {
    const data = categoryCounts[cat];
    acc[cat] = {
      category: cat,
      categoryName: ABSTRACT_CATEGORY_LABELS[cat] || cat,
      total: data.total,
      correct: data.correct,
      percentage: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
    };
    return acc;
  }, {} as Record<AbstractCategory, AbstractCategoryScore>);

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

