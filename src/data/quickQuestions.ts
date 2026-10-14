import { Question } from '@/types/assessment';

export const QUICK_ASSESSMENT_VERSION = '1.0.0';

export const QUICK_ASSESSMENT_QUESTIONS: Question[] = [
  // ==========================================
  // NUMERICAL REASONING (Q1 - Q3)
  // ==========================================
  {
    id: 'quick-num-01',
    category: 'numerical',
    difficulty: 'introductory',
    prompt: 'What number logically completes the sequence: 5, 11, 23, 47, 95, ?',
    options: [
      { id: 'A', label: '189' },
      { id: 'B', label: '191' },
      { id: 'C', label: '193' },
      { id: 'D', label: '195' },
    ],
    correctOptionId: 'B',
    explanation:
      'Each successive term is obtained by doubling the preceding term and adding 1: (5 × 2) + 1 = 11; (11 × 2) + 1 = 23; (23 × 2) + 1 = 47; (47 × 2) + 1 = 95. Applying the identical rule to 95 produces: (95 × 2) + 1 = 190 + 1 = 191. Alternatively, the consecutive differences double each step (+6, +12, +24, +48, +96), yielding 95 + 96 = 191.',
    accessibilityDescription:
      'Number series starting at 5, followed by 11, 23, 47, 95, and a blank position.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'quick-num-02',
    category: 'numerical',
    difficulty: 'intermediate',
    prompt: 'Determine the next value in the alternating operation series: 3, 9, 6, 18, 15, 45, ?',
    options: [
      { id: 'A', label: '40' },
      { id: 'B', label: '42' },
      { id: 'C', label: '44' },
      { id: 'D', label: '135' },
    ],
    correctOptionId: 'B',
    explanation:
      'The series alternates between two arithmetic operations: multiplying by 3, then subtracting 3. Specifically: 3 × 3 = 9; 9 - 3 = 6; 6 × 3 = 18; 18 - 3 = 15; 15 × 3 = 45. The next operation in the cycle is subtracting 3: 45 - 3 = 42.',
    accessibilityDescription:
      'Alternating number sequence: 3, 9, 6, 18, 15, 45, followed by a missing final value.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'quick-num-03',
    category: 'numerical',
    difficulty: 'advanced',
    prompt: 'Identify the missing number governed by expanding differences: 3, 5, 9, 17, 33, ?',
    options: [
      { id: 'A', label: '49' },
      { id: 'B', label: '57' },
      { id: 'C', label: '65' },
      { id: 'D', label: '67' },
    ],
    correctOptionId: 'C',
    explanation:
      'Examine the differences between consecutive terms: 5 - 3 = 2; 9 - 5 = 4; 17 - 9 = 8; 33 - 17 = 16. The successive increments form powers of 2 (+2, +4, +8, +16). The next increment must be 16 × 2 = +32. Adding 32 to the previous term gives 33 + 32 = 65.',
    accessibilityDescription:
      'Number series with exponentially increasing step differences: 3, 5, 9, 17, 33, followed by a question mark.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },

  // ==========================================
  // ABSTRACT REASONING (Q4 - Q6) - SVG Puzzles
  // ==========================================
  {
    id: 'quick-abs-01',
    category: 'abstract',
    difficulty: 'introductory',
    prompt:
      'Identify the visual element that logically completes the rotational sequence of the arrow pointer.',
    options: [
      {
        id: 'A',
        label: 'Arrow pointing upward (12 o’clock)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-01-opt-A' },
      },
      {
        id: 'B',
        label: 'Arrow pointing diagonal down-right (4:30)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-01-opt-B' },
      },
      {
        id: 'C',
        label: 'Arrow pointing left (9 o’clock)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-01-opt-C' },
      },
      {
        id: 'D',
        label: 'Arrow pointing downward (6 o’clock)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-01-opt-D' },
      },
    ],
    correctOptionId: 'C',
    explanation:
      'The arrow indicator rotates clockwise by exactly 90 degrees (one quarter-turn) in each successive frame: Frame 1 points Up (12 o’clock), Frame 2 points Right (3 o’clock), and Frame 3 points Down (6 o’clock). Continuing the uniform 90° clockwise rotation requires the fourth frame to point Left (9 o’clock).',
    visualAsset: { type: 'sequence_row', puzzleId: 'quick-abs-01-stimulus' },
    accessibilityDescription:
      'Sequence of four square frames where a bold arrow rotates clockwise by 90 degrees each step, ending with a question mark.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'quick-abs-02',
    category: 'abstract',
    difficulty: 'intermediate',
    prompt:
      'Complete the 2×2 matrix by identifying the rule connecting geometric shape nesting and fill state.',
    options: [
      {
        id: 'A',
        label: 'Square containing a hollow outline star',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-02-opt-A' },
      },
      {
        id: 'B',
        label: 'Circle containing a solid blue star',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-02-opt-B' },
      },
      {
        id: 'C',
        label: 'Square containing a solid blue star',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-02-opt-C' },
      },
      {
        id: 'D',
        label: 'Triangle containing a solid blue star',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-02-opt-D' },
      },
    ],
    correctOptionId: 'C',
    explanation:
      'Across each row, the outer container geometry remains unchanged while the inner element transitions from a hollow white outline to a solid blue fill. In the top row: Triangle with outline circle becomes Triangle with solid blue circle. In the bottom row: Square with outline star must correspondingly become Square with solid blue star.',
    visualAsset: { type: 'matrix_2x2', puzzleId: 'quick-abs-02-stimulus' },
    accessibilityDescription:
      'A 2x2 matrix where row 1 transforms an inner hollow circle to solid blue inside a triangle, and row 2 shows a square with an inner star needing the same fill transformation.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'quick-abs-03',
    category: 'abstract',
    difficulty: 'advanced',
    prompt:
      'In this four-frame sequence, a circular dot moves clockwise by 1 quadrant while a square marker moves counter-clockwise by 1 quadrant. Which figure completes Frame 4?',
    options: [
      {
        id: 'A',
        label: 'Dot in bottom-left, square in bottom-right',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-03-opt-A' },
      },
      {
        id: 'B',
        label: 'Dot in bottom-right, square in top-right',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-03-opt-B' },
      },
      {
        id: 'C',
        label: 'Dot in top-left, square in bottom-left',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-03-opt-C' },
      },
      {
        id: 'D',
        label: 'Both dot and square in bottom-left',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-abs-03-opt-D' },
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Track the independent paths of both markers across the 4 quadrants: The circular dot advances clockwise (Frame 1: Top-Left → Frame 2: Top-Right → Frame 3: Bottom-Right → Frame 4: Bottom-Left). Simultaneously, the square marker moves counter-clockwise (Frame 1: Top-Right → Frame 2: Top-Left → Frame 3: Bottom-Left → Frame 4: Bottom-Right). Therefore, Frame 4 must display the dot in the bottom-left and the square in the bottom-right.',
    visualAsset: { type: 'sequence_row', puzzleId: 'quick-abs-03-stimulus' },
    accessibilityDescription:
      'Sequence of four circles divided into four quadrants showing a dot moving clockwise and a square moving counter-clockwise.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },

  // ==========================================
  // LOGICAL REASONING (Q7 - Q8)
  // ==========================================
  {
    id: 'quick-log-01',
    category: 'logical',
    difficulty: 'intermediate',
    prompt:
      'Premise 1: Every member of the executive board is a shareholder.\nPremise 2: Jordan is not a shareholder.\n\nWhich conclusion is logically certain to be true?',
    options: [
      { id: 'A', label: 'Jordan used to be an executive board member.' },
      { id: 'B', label: 'Jordan is not an executive board member.' },
      { id: 'C', label: 'Some shareholders are not executive board members.' },
      { id: 'D', label: 'Jordan will become a shareholder next year.' },
    ],
    correctOptionId: 'B',
    explanation:
      'By the rule of Modus Tollens (contraposition in formal deductive logic): If condition P (being an executive board member) strictly implies condition Q (being a shareholder), then having "not Q" (not being a shareholder) unequivocally guarantees "not P" (not being an executive board member). Jordan cannot be an executive board member.',
    accessibilityDescription:
      'Deductive logic statement based on membership in the executive board and shareholder status.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'quick-log-02',
    category: 'logical',
    difficulty: 'advanced',
    prompt:
      'Four colored containers (Blue, Red, Green, Yellow) are arranged in a horizontal row from left to right:\n1. The Blue container is at the far left (Position 1).\n2. The Green container is immediately to the left of the Yellow container.\n3. The Yellow container is at the far right (Position 4).\n\nWhat is the exact left-to-right order of the containers?',
    options: [
      { id: 'A', label: 'Blue, Green, Red, Yellow' },
      { id: 'B', label: 'Blue, Red, Green, Yellow' },
      { id: 'C', label: 'Red, Blue, Green, Yellow' },
      { id: 'D', label: 'Blue, Green, Yellow, Red' },
    ],
    correctOptionId: 'B',
    explanation:
      'Condition 1 fixes Blue at Position 1 [Blue, _, _, _]. Condition 3 fixes Yellow at Position 4 [Blue, _, _, Yellow]. Condition 2 requires Green to be immediately adjacent to the left of Yellow, placing Green at Position 3 [Blue, _, Green, Yellow]. The only remaining container is Red, which must occupy Position 2. The unambiguous left-to-right ordering is Blue, Red, Green, Yellow.',
    accessibilityDescription:
      'Spatial and deductive arrangement problem determining the positions of four colored containers.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },

  // ==========================================
  // SPATIAL REASONING (Q9 - Q10) - SVG Puzzles
  // ==========================================
  {
    id: 'quick-spa-01',
    category: 'spatial',
    difficulty: 'introductory',
    prompt:
      'Which figure represents an exact 90-degree clockwise rotation of the target polygon shown below?',
    options: [
      {
        id: 'A',
        label: 'Horizontal L-shape pointing foot downward',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-01-opt-A' },
      },
      {
        id: 'B',
        label: 'Inverted vertical L-shape (180° rotation)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-01-opt-B' },
      },
      {
        id: 'C',
        label: 'Horizontal L-shape pointing foot upward (270° rotation)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-01-opt-C' },
      },
      {
        id: 'D',
        label: 'Reflected horizontal shape (mirror image)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-01-opt-D' },
      },
    ],
    correctOptionId: 'A',
    explanation:
      'The target figure is an upright L-shape whose vertical stem points up and bottom horizontal foot points right. When rotated 90 degrees clockwise, the vertical stem swings into a horizontal bar pointing right, and the rightward foot turns downward at the right end. Figure A correctly depicts this exact transformation without reflection.',
    visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-01-stimulus' },
    accessibilityDescription:
      'Target diagram displaying an upright asymmetric L-shaped polygon to be rotated 90 degrees clockwise.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'quick-spa-02',
    category: 'spatial',
    difficulty: 'intermediate',
    prompt:
      'When the flat cross-shaped net shown below is folded along the dotted lines into a 3D cube, which 3D perspective is geometrically possible?',
    options: [
      {
        id: 'A',
        label: 'Cube showing Circle (top), Plus (front), and Star (left)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-02-opt-A' },
      },
      {
        id: 'B',
        label: 'Cube showing Star and Triangle adjacent (mutually opposite faces)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-02-opt-B' },
      },
      {
        id: 'C',
        label: 'Cube showing Circle and Square adjacent (mutually opposite faces)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-02-opt-C' },
      },
      {
        id: 'D',
        label: 'Cube showing Plus and Diamond adjacent (mutually opposite faces)',
        visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-02-opt-D' },
      },
    ],
    correctOptionId: 'A',
    explanation:
      'In a folded cube, opposite faces cannot share an edge and can never be seen simultaneously. Analyzing the net reveals three pairs of mutually opposite faces: (Circle opposite Square), (Star opposite Triangle), and (Plus opposite Diamond). Options B, C, and D all depict opposite faces sharing an edge, which is physically impossible. Option A correctly presents three mutually adjacent faces: Circle (top), Plus (front), and Star (left).',
    visualAsset: { type: 'single_diagram', puzzleId: 'quick-spa-02-stimulus' },
    accessibilityDescription:
      'A six-face cross cube net with Circle, Square, Plus, Diamond, Star, and Triangle symbols.',
    version: QUICK_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
];
