export type QuestionCategory = 'numerical' | 'logical' | 'abstract' | 'spatial';

export type QuestionDifficulty = 'introductory' | 'intermediate' | 'advanced';

export type ReviewStatus = 'approved' | 'draft' | 'under_review';

export interface VisualAsset {
  type: 'matrix_2x2' | 'matrix_3x3' | 'sequence_row' | 'single_diagram' | 'transformation_rule';
  // SVG puzzle descriptor or identifier
  puzzleId: string;
  data?: Record<string, unknown>;
}

export interface QuestionOption {
  id: string; // e.g., 'A', 'B', 'C', 'D'
  label: string; // Text description or mathematical notation
  visualAsset?: VisualAsset;
  accessibilityLabel?: string;
}

export interface Question {
  id: string;
  category: QuestionCategory;
  difficulty: QuestionDifficulty;
  prompt: string;
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption]; // strictly 4 options
  correctOptionId: string;
  explanation: string;
  visualAsset?: VisualAsset;
  accessibilityDescription: string;
  version: string;
  reviewStatus: ReviewStatus;
}

export type AssessmentMode = 'untimed' | 'timed_15';

export interface AssessmentSession {
  version: string;
  mode: AssessmentMode;
  startTime: number;
  remainingSeconds: number; // for timed mode
  lastUpdated: number;
  currentQuestionIndex: number;
  answers: Record<string, string>; // questionId -> optionId
  flaggedQuestionIds: string[];
  isCompleted: boolean;
  completionTimeMs?: number;
}

export interface CategoryScore {
  category: QuestionCategory;
  categoryName: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface AssessmentResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  categoryScores: Record<QuestionCategory, CategoryScore>;
  assessmentVersion: string;
  completedAt: string;
  mode: AssessmentMode;
}
