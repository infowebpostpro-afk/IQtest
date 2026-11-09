// Type definitions for the Abstract Reasoning Test Visual SVG System

export type AbstractCategory = 'sequences' | 'matrices' | 'odd_one_out' | 'analogies';
export type AbstractDifficulty = 'introductory' | 'intermediate' | 'advanced';

export interface GeometricElement {
  type: 'circle' | 'rect' | 'polygon' | 'line' | 'star' | 'cross' | 'arrow' | 'dot' | 'arc' | 'group';
  cx?: number;
  cy?: number;
  r?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  points?: string;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  strokeLinecap?: 'butt' | 'round' | 'square';
  rotation?: number; // degrees
  scale?: number;
  opacity?: number;
  children?: GeometricElement[];
}

export interface FigureFrame {
  id?: string;
  label?: string; // e.g. "1", "2", "A", "B", "?"
  isTarget?: boolean;
  elements: GeometricElement[];
  viewBox?: string; // default "0 0 100 100"
}

export interface MatrixData {
  rows: number; // 2 or 3
  cols: number; // 2 or 3
  cells: FigureFrame[]; // row-major order: row 0 cols, row 1 cols...
}

export interface SequenceData {
  frames: FigureFrame[]; // usually 4 frames: 3 given + 1 target '?'
}

export interface AnalogyData {
  sourceA: FigureFrame;
  targetB: FigureFrame;
  sourceC: FigureFrame;
  targetD?: FigureFrame; // target cell
}

export interface OddOneOutData {
  figures: FigureFrame[]; // 4 or 5 candidate figures
}

export type PuzzleDiagramData =
  | { type: 'sequence'; data: SequenceData }
  | { type: 'matrix'; data: MatrixData }
  | { type: 'analogy'; data: AnalogyData }
  | { type: 'odd_one_out'; data: OddOneOutData };

export interface AbstractOption {
  id: 'A' | 'B' | 'C' | 'D';
  label: string;
  figure: FigureFrame;
  accessibilityLabel: string;
}

export interface AbstractQuestion {
  id: string; // e.g. "abs-seq-01"
  category: AbstractCategory;
  difficulty: AbstractDifficulty;
  prompt: string;
  figureType: 'sequence' | 'matrix_2x2' | 'matrix_3x3' | 'odd_one_out' | 'analogy';
  diagram: PuzzleDiagramData;
  options: [AbstractOption, AbstractOption, AbstractOption, AbstractOption];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  intendedRule: string;
  ruleParameters: {
    shape?: string;
    count?: string;
    position?: string;
    orientation?: string;
    fill?: string;
    operation?: string;
    symmetry?: string;
  };
  reasoningSteps: string[];
  explanation: string;
  commonMistake: string;
  accessibilityDescription: string;
  reviewStatus: 'approved' | 'draft' | 'under_review';
}
