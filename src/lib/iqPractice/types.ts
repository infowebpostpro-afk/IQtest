/**
 * IQ Practice Question Types
 * Strongly typed schema for the 48-question practice bank
 */

export type QuestionCategory = 'numerical' | 'logical' | 'abstract' | 'spatial';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'challenging';

export interface AnswerOption {
  id: string;
  text: string;
  illustration?: React.ReactNode;
}

export interface Question {
  id: string;
  category: QuestionCategory;
  difficulty: DifficultyLevel;
  question: string;
  illustration?: React.ReactNode;
  options: AnswerOption[];
  correctAnswerId: string;
  hint1: string;
  hint2: string;
  explanation: string;
  commonMistake?: string;
  accessibleImageDescription?: string;
}

export interface UserAttempt {
  questionId: string;
  selectedAnswerId: string;
  isCorrect: boolean;
  hintsUsed: number;
  timestamp: number;
}

export interface UserProgress {
  attemptedQuestions: Set<string>;
  correctAnswers: Set<string>;
  incorrectAnswers: Set<string>;
  skippedQuestions: Set<string>;
  bookmarkedQuestions: Set<string>;
  hintsUsed: Map<string, number>;
  attempts: UserAttempt[];
  currentCategory: QuestionCategory | 'all';
  currentDifficulty: DifficultyLevel | 'all';
  lastUpdated: number;
}

export interface PracticeStats {
  totalQuestions: number;
  attemptedCount: number;
  correctCount: number;
  incorrectCount: number;
  accuracy: number;
  remainingCount: number;
  completedByCategory: Record<QuestionCategory, number>;
  mistakesToReview: number;
  bookmarkedCount: number;
}

export const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  numerical: 'Numerical Reasoning',
  logical: 'Logical Reasoning',
  abstract: 'Abstract Reasoning',
  spatial: 'Spatial Reasoning',
};

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  challenging: 'Challenging',
};

export const CATEGORY_COLORS: Record<QuestionCategory, string> = {
  numerical: 'bg-blue-50 border-blue-200 text-blue-700',
  logical: 'bg-purple-50 border-purple-200 text-purple-700',
  abstract: 'bg-amber-50 border-amber-200 text-amber-700',
  spatial: 'bg-emerald-50 border-emerald-200 text-emerald-700',
};

export const DIFFICULTY_COLORS: Record<DifficultyLevel, string> = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  challenging: 'bg-red-100 text-red-800',
};
