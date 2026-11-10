export type SpatialCategory =
  | 'mental_rotation'
  | 'cube_folding'
  | 'mirror_reflection'
  | 'paper_folding'
  | 'spatial_orientation'
  | 'block_counting';

export type SpatialDifficulty = 'introductory' | 'intermediate' | 'challenging';

export type OptionId = 'A' | 'B' | 'C' | 'D';

export type ValidationStatus = 'verified' | 'rejected' | 'pending';

export interface SvgElementData {
  type: 'rect' | 'circle' | 'polygon' | 'line' | 'path' | 'text' | 'g';
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rx?: number;
  ry?: number;
  cx?: number;
  cy?: number;
  r?: number;
  points?: string;
  d?: string;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  transform?: string;
  opacity?: number;
  text?: string;
  fontSize?: number;
  fontWeight?: string;
  textAnchor?: 'start' | 'middle' | 'end';
  children?: SvgElementData[];
}

export interface SpatialScene {
  viewBox: string; // e.g. "0 0 100 100" or "0 0 160 160"
  elements: SvgElementData[];
  description: string;
}

export interface SpatialOption {
  id: OptionId;
  scene: SpatialScene;
  accessibleDescription: string;
}

export interface ExplanationStep {
  title: string;
  description: string;
  diagram?: SpatialScene;
  keyRule?: string;
}

export interface BaseSpatialQuestion {
  id: string;
  version: number;
  category: SpatialCategory;
  difficulty: SpatialDifficulty;
  prompt: string;
  stimulusScene: SpatialScene;
  options: [SpatialOption, SpatialOption, SpatialOption, SpatialOption];
  correctOptionId: OptionId;
  ruleExplanation: string;
  distractorExplanations: Record<OptionId, string>;
  explanationSteps: ExplanationStep[];
  validationStatus: ValidationStatus;
  validatorVersion: string;
  seed?: number;
  accessibleDescription: string;
}

export interface SpatialCategoryInfo {
  id: SpatialCategory;
  name: string;
  shortName: string;
  description: string;
  testCount: number;
  bankCount: number;
  iconName: string;
}

export const SPATIAL_CATEGORIES: Record<SpatialCategory, SpatialCategoryInfo> = {
  mental_rotation: {
    id: 'mental_rotation',
    name: 'Mental Rotation',
    shortName: 'Rotation',
    description: 'Rotating 2D and 3D figures mentally to identify identical shapes vs reflections.',
    testCount: 5,
    bankCount: 15,
    iconName: 'RotateCw',
  },
  cube_folding: {
    id: 'cube_folding',
    name: 'Cube Folding & Nets',
    shortName: 'Cube Nets',
    description: 'Folding flat 6-square nets into 3D cubes with accurate face adjacency and orientation.',
    testCount: 4,
    bankCount: 12,
    iconName: 'Box',
  },
  mirror_reflection: {
    id: 'mirror_reflection',
    name: 'Mirror Reflections',
    shortName: 'Reflections',
    description: 'Transforming asymmetric shapes across vertical, horizontal, or diagonal reflection axes.',
    testCount: 3,
    bankCount: 9,
    iconName: 'FlipHorizontal',
  },
  paper_folding: {
    id: 'paper_folding',
    name: 'Paper Folding',
    shortName: 'Paper Folds',
    description: 'Tracking multi-step folds and punched holes when the sheet is completely unfolded.',
    testCount: 3,
    bankCount: 9,
    iconName: 'Layers',
  },
  spatial_orientation: {
    id: 'spatial_orientation',
    name: 'Spatial Orientation & Views',
    shortName: 'Orthographic Views',
    description: 'Deriving top, front, side, and rotated orthographic projections of 3D polycubes.',
    testCount: 3,
    bankCount: 9,
    iconName: 'Eye',
  },
  block_counting: {
    id: 'block_counting',
    name: 'Block Counting',
    shortName: 'Block Stacks',
    description: 'Determining total visible and hidden solid unit cubes in 3D stepped structures.',
    testCount: 2,
    bankCount: 6,
    iconName: 'Grid',
  },
};

export interface SpatialCategoryScore {
  category: SpatialCategory;
  categoryName: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface SpatialAssessmentResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  accuracyPercentage: number;
  categoryScores: SpatialCategoryScore[];
  timeSpentSeconds: number;
  flaggedCount: number;
  submittedAt: number;
  answers: Record<string, OptionId>;
}

export interface SpatialAssessmentSession {
  version: string;
  mode: 'untimed' | 'timed_15';
  startTime: number;
  remainingSeconds: number;
  lastUpdated: number;
  currentQuestionIndex: number;
  questionIds: string[];
  answers: Record<string, OptionId>;
  flaggedQuestionIds: string[];
  isCompleted: boolean;
  completionTimeMs?: number;
}
