import { AbstractQuestion } from '@/types/abstractAssessment';

export const ABSTRACT_ASSESSMENT_VERSION = '1.0.0';

export const ABSTRACT_CATEGORY_LABELS: Record<string, string> = {
  sequences: 'Figure Sequences',
  matrices: 'Matrix Reasoning',
  odd_one_out: 'Odd One Out',
  analogies: 'Visual Analogies',
};

export const ABSTRACT_ASSESSMENT_QUESTIONS: AbstractQuestion[] = [
  // =========================================================================
  // CATEGORY 1: FIGURE SEQUENCES (6 QUESTIONS)
  // =========================================================================

  // Question 1 (Introductory): Clockwise rotating pointer (0° -> 45° -> 90° -> 135°)
  {
    id: 'abs-seq-01',
    category: 'sequences',
    difficulty: 'introductory',
    figureType: 'sequence',
    prompt: 'Which figure logically completes the progression by continuing the rotational pattern?',
    intendedRule: 'The internal pointer rotates 45 degrees clockwise at each consecutive step.',
    ruleParameters: {
      orientation: 'Clockwise rotation by 45°',
      shape: 'Circle with oriented directional arrow line',
    },
    diagram: {
      type: 'sequence',
      data: {
        frames: [
          // Step 1: Up (0 deg)
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'line', x1: 50, y1: 50, x2: 50, y2: 20, stroke: '#2453FF', strokeWidth: 3 },
              { type: 'dot', cx: 50, cy: 20, r: 4.5, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 50, cy: 50, r: 3, stroke: '#07152F', fill: '#07152F' },
            ],
          },
          // Step 2: 45 deg clockwise (Up-Right)
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'line', x1: 50, y1: 50, x2: 71.2, y2: 28.8, stroke: '#2453FF', strokeWidth: 3 },
              { type: 'dot', cx: 71.2, cy: 28.8, r: 4.5, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 50, cy: 50, r: 3, stroke: '#07152F', fill: '#07152F' },
            ],
          },
          // Step 3: 90 deg clockwise (Right)
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'line', x1: 50, y1: 50, x2: 80, y2: 50, stroke: '#2453FF', strokeWidth: 3 },
              { type: 'dot', cx: 80, cy: 50, r: 4.5, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 50, cy: 50, r: 3, stroke: '#07152F', fill: '#07152F' },
            ],
          },
          // Step 4: Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: Down-Right (135 deg) -> Correct!
      {
        id: 'A',
        label: 'Pointer directed at 135° (Bottom-Right)',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'line', x1: 50, y1: 50, x2: 71.2, y2: 71.2, stroke: '#2453FF', strokeWidth: 3 },
            { type: 'dot', cx: 71.2, cy: 71.2, r: 4.5, stroke: '#2453FF', fill: '#2453FF' },
            { type: 'dot', cx: 50, cy: 50, r: 3, stroke: '#07152F', fill: '#07152F' },
          ],
        },
        accessibilityLabel: 'Circular dial with pointer pointing bottom-right at 135 degrees',
      },
      // Option B: Straight Down (180 deg) -> Distractor: skipped 135°
      {
        id: 'B',
        label: 'Pointer directed at 180° (Straight Down)',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'line', x1: 50, y1: 50, x2: 50, y2: 80, stroke: '#2453FF', strokeWidth: 3 },
            { type: 'dot', cx: 50, cy: 80, r: 4.5, stroke: '#2453FF', fill: '#2453FF' },
            { type: 'dot', cx: 50, cy: 50, r: 3, stroke: '#07152F', fill: '#07152F' },
          ],
        },
        accessibilityLabel: 'Circular dial with pointer pointing straight down at 180 degrees',
      },
      // Option C: Up-Left (315 deg) -> Distractor: reverse counterclockwise
      {
        id: 'C',
        label: 'Pointer directed at 315° (Up-Left)',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'line', x1: 50, y1: 50, x2: 28.8, y2: 28.8, stroke: '#2453FF', strokeWidth: 3 },
            { type: 'dot', cx: 28.8, cy: 28.8, r: 4.5, stroke: '#2453FF', fill: '#2453FF' },
            { type: 'dot', cx: 50, cy: 50, r: 3, stroke: '#07152F', fill: '#07152F' },
          ],
        },
        accessibilityLabel: 'Circular dial with pointer pointing up-left at 315 degrees',
      },
      // Option D: Straight Left (270 deg) -> Distractor: 180 deg opposite
      {
        id: 'D',
        label: 'Pointer directed at 270° (Straight Left)',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'line', x1: 50, y1: 50, x2: 20, y2: 50, stroke: '#2453FF', strokeWidth: 3 },
            { type: 'dot', cx: 20, cy: 50, r: 4.5, stroke: '#2453FF', fill: '#2453FF' },
            { type: 'dot', cx: 50, cy: 50, r: 3, stroke: '#07152F', fill: '#07152F' },
          ],
        },
        accessibilityLabel: 'Circular dial with pointer pointing straight left at 270 degrees',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Step 1: The pointer is oriented vertically upwards (0° / 12 o\'clock).',
      'Step 2: The pointer rotates 45° clockwise to point towards the top-right corner.',
      'Step 3: The pointer rotates another 45° clockwise to point horizontally right (90° / 3 o\'clock).',
      'Step 4: Continuing the constant 45° clockwise rotation rule (90° + 45° = 135°), the next position must point downwards and right.',
      'Option A precisely matches the 135° angle.',
    ],
    explanation:
      'The pointer rotates clockwise by exactly 45° in each consecutive frame (0° → 45° → 90°). The 4th figure must continue this rotation to 135° (bottom-right direction), corresponding to Option A.',
    commonMistake:
      'Skipping the intermediate diagonal increment and advancing by 90° straight down (Option B).',
    accessibilityDescription:
      'A circular dial with a center-pinned pointer rotating clockwise in 45-degree steps.',
    reviewStatus: 'approved',
  },

  // Question 2 (Introductory): Element count progression with alternating fill (1 to 4 dots)
  {
    id: 'abs-seq-02',
    category: 'sequences',
    difficulty: 'introductory',
    figureType: 'sequence',
    prompt: 'Which figure correctly continues the geometric count and fill pattern?',
    intendedRule: 'The count of dots increases by +1 each frame, while fill color alternates between solid blue and outlined.',
    ruleParameters: {
      count: 'Increases by +1 (1 -> 2 -> 3 -> 4)',
      fill: 'Alternates solid (#2453FF) vs outline (#FFFFFF with #2453FF border)',
    },
    diagram: {
      type: 'sequence',
      data: {
        frames: [
          // Frame 1: 1 solid dot
          {
            elements: [
              { type: 'rect', x: 10, y: 10, width: 80, height: 80, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 50, cy: 50, r: 8, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Frame 2: 2 hollow/outline dots
          {
            elements: [
              { type: 'rect', x: 10, y: 10, width: 80, height: 80, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'circle', cx: 35, cy: 50, r: 8, stroke: '#2453FF', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'circle', cx: 65, cy: 50, r: 8, stroke: '#2453FF', strokeWidth: 2.5, fill: '#FFFFFF' },
            ],
          },
          // Frame 3: 3 solid dots
          {
            elements: [
              { type: 'rect', x: 10, y: 10, width: 80, height: 80, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 26, cy: 50, r: 7, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 50, cy: 50, r: 7, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 74, cy: 50, r: 7, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Frame 4: Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: 4 hollow circles -> Correct!
      {
        id: 'A',
        label: '4 hollow circles with blue outline',
        figure: {
          elements: [
            { type: 'rect', x: 10, y: 10, width: 80, height: 80, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 20, cy: 50, r: 6.5, stroke: '#2453FF', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 40, cy: 50, r: 6.5, stroke: '#2453FF', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 60, cy: 50, r: 6.5, stroke: '#2453FF', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 80, cy: 50, r: 6.5, stroke: '#2453FF', strokeWidth: 2.5, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Four hollow circles in a horizontal row',
      },
      // Option B: 4 solid dots -> Fails fill alternation
      {
        id: 'B',
        label: '4 solid blue dots',
        figure: {
          elements: [
            { type: 'rect', x: 10, y: 10, width: 80, height: 80, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'dot', cx: 20, cy: 50, r: 6.5, stroke: '#2453FF', fill: '#2453FF' },
            { type: 'dot', cx: 40, cy: 50, r: 6.5, stroke: '#2453FF', fill: '#2453FF' },
            { type: 'dot', cx: 60, cy: 50, r: 6.5, stroke: '#2453FF', fill: '#2453FF' },
            { type: 'dot', cx: 80, cy: 50, r: 6.5, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Four solid blue dots in a horizontal row',
      },
      // Option C: 3 hollow circles -> Fails count increment
      {
        id: 'C',
        label: '3 hollow circles',
        figure: {
          elements: [
            { type: 'rect', x: 10, y: 10, width: 80, height: 80, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 26, cy: 50, r: 7, stroke: '#2453FF', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 7, stroke: '#2453FF', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 74, cy: 50, r: 7, stroke: '#2453FF', strokeWidth: 2.5, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Three hollow circles in a horizontal row',
      },
      // Option D: 5 hollow circles -> Jumps +2 instead of +1
      {
        id: 'D',
        label: '5 hollow circles',
        figure: {
          elements: [
            { type: 'rect', x: 10, y: 10, width: 80, height: 80, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 18, cy: 50, r: 5.5, stroke: '#2453FF', strokeWidth: 2, fill: '#FFFFFF' },
            { type: 'circle', cx: 34, cy: 50, r: 5.5, stroke: '#2453FF', strokeWidth: 2, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 5.5, stroke: '#2453FF', strokeWidth: 2, fill: '#FFFFFF' },
            { type: 'circle', cx: 66, cy: 50, r: 5.5, stroke: '#2453FF', strokeWidth: 2, fill: '#FFFFFF' },
            { type: 'circle', cx: 82, cy: 50, r: 5.5, stroke: '#2453FF', strokeWidth: 2, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Five hollow circles in a horizontal row',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Analyze Count: Frame 1 has 1 dot; Frame 2 has 2; Frame 3 has 3. Next must have 4 circles.',
      'Analyze Shading: Frame 1 is Solid; Frame 2 is Hollow; Frame 3 is Solid. The pattern alternates, so Frame 4 must be Hollow.',
      'Combine: 4 circles with hollow (white) fill and blue border.',
      'Option A is the only choice that satisfies both count (4) and shading (hollow).',
    ],
    explanation:
      'Two simultaneous rules govern the sequence: the number of objects increases by 1 each step (1 → 2 → 3 → 4), and the shading alternates (solid → hollow → solid → hollow). The fourth frame must therefore have 4 hollow circles (Option A).',
    commonMistake:
      'Tracking the count increase but neglecting the alternating fill pattern, mistakenly choosing solid dots (Option B).',
    accessibilityDescription:
      'Horizontal dots incrementing in quantity from 1 to 4 while alternating between solid and hollow fill.',
    reviewStatus: 'approved',
  },

  // Question 3 (Intermediate): Nested geometric polygon growth (Triangle -> Square -> Pentagon -> Hexagon)
  {
    id: 'abs-seq-03',
    category: 'sequences',
    difficulty: 'intermediate',
    figureType: 'sequence',
    prompt: 'Which polygon continues the sequence based on vertex count?',
    intendedRule: 'The number of polygon vertices increments by +1 at each step: Triangle (3) -> Square (4) -> Pentagon (5) -> Hexagon (6).',
    ruleParameters: {
      shape: 'Polygon vertices increment by +1',
    },
    diagram: {
      type: 'sequence',
      data: {
        frames: [
          // Frame 1: Triangle (3 sides)
          {
            elements: [
              { type: 'polygon', points: '50,18 80,78 20,78', stroke: '#07152F', strokeWidth: 3, fill: '#EEF4FF' },
              { type: 'dot', cx: 50, cy: 58, r: 4, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Frame 2: Square (4 sides)
          {
            elements: [
              { type: 'polygon', points: '22,22 78,22 78,78 22,78', stroke: '#07152F', strokeWidth: 3, fill: '#EEF4FF' },
              { type: 'dot', cx: 50, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Frame 3: Regular Pentagon (5 sides)
          {
            elements: [
              { type: 'polygon', points: '50,16 82,39 70,78 30,78 18,39', stroke: '#07152F', strokeWidth: 3, fill: '#EEF4FF' },
              { type: 'dot', cx: 50, cy: 52, r: 4, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Frame 4: Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: Regular Hexagon (6 sides) -> Correct!
      {
        id: 'A',
        label: 'Hexagon (6 sides) with centered blue dot',
        figure: {
          elements: [
            { type: 'polygon', points: '50,15 80,32 80,68 50,85 20,68 20,32', stroke: '#07152F', strokeWidth: 3, fill: '#EEF4FF' },
            { type: 'dot', cx: 50, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Regular 6-sided hexagon with center dot',
      },
      // Option B: Octagon (8 sides) -> Skips 6 sides
      {
        id: 'B',
        label: 'Octagon (8 sides)',
        figure: {
          elements: [
            { type: 'polygon', points: '32,16 68,16 84,32 84,68 68,84 32,84 16,68 16,32', stroke: '#07152F', strokeWidth: 3, fill: '#EEF4FF' },
            { type: 'dot', cx: 50, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Regular 8-sided octagon with center dot',
      },
      // Option C: Pentagon repeated -> Fails progression
      {
        id: 'C',
        label: 'Pentagon (5 sides)',
        figure: {
          elements: [
            { type: 'polygon', points: '50,16 82,39 70,78 30,78 18,39', stroke: '#07152F', strokeWidth: 3, fill: '#EEF4FF' },
            { type: 'dot', cx: 50, cy: 52, r: 4, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Pentagon identical to previous frame',
      },
      // Option D: Circle -> Fails polygon vertex rule
      {
        id: 'D',
        label: 'Circle with center dot',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#07152F', strokeWidth: 3, fill: '#EEF4FF' },
            { type: 'dot', cx: 50, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Smooth circle with center dot',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Count the sides of each polygon: Frame 1 has 3 sides (triangle).',
      'Frame 2 has 4 sides (quadrilateral/square).',
      'Frame 3 has 5 sides (pentagon).',
      'The side count follows the sequence: 3, 4, 5, so the next polygon must have 6 sides (hexagon).',
      'Option A is a 6-sided regular hexagon with the invariant central blue dot.',
    ],
    explanation:
      'The number of vertices and edges increments by +1 in each step (3 → 4 → 5 → 6). A hexagon has 6 edges, satisfying the sequence (Option A).',
    commonMistake:
      'Assuming the series jumps directly to an 8-sided octagon by doubling sides (Option B).',
    accessibilityDescription:
      'Polygons increasing in edge count from 3 (triangle) to 4 (square) to 5 (pentagon).',
    reviewStatus: 'approved',
  },

  // Question 4 (Intermediate): Grid position movement (Ball moving clockwise around perimeter corners)
  {
    id: 'abs-seq-04',
    category: 'sequences',
    difficulty: 'intermediate',
    figureType: 'sequence',
    prompt: 'Which figure represents the next position of the blue marker moving around the frame?',
    intendedRule: 'The blue marker moves clockwise to the next corner of the square frame at each step: Top-Left -> Top-Right -> Bottom-Right -> Bottom-Left.',
    ruleParameters: {
      position: 'Clockwise corner rotation (TL -> TR -> BR -> BL)',
    },
    diagram: {
      type: 'sequence',
      data: {
        frames: [
          // Frame 1: Top-Left (28, 28)
          {
            elements: [
              { type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 28, cy: 28, r: 7.5, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Frame 2: Top-Right (72, 28)
          {
            elements: [
              { type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 72, cy: 28, r: 7.5, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Frame 3: Bottom-Right (72, 72)
          {
            elements: [
              { type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 72, cy: 72, r: 7.5, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Frame 4: Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: Center -> Incorrect placement
      {
        id: 'A',
        label: 'Blue marker in the center',
        figure: {
          elements: [
            { type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'dot', cx: 50, cy: 50, r: 7.5, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Square box with blue dot in the dead center',
      },
      // Option B: Bottom-Left (28, 72) -> Correct!
      {
        id: 'B',
        label: 'Blue marker in Bottom-Left corner',
        figure: {
          elements: [
            { type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'dot', cx: 28, cy: 72, r: 7.5, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Square box with blue dot at bottom-left corner',
      },
      // Option C: Top-Left (28, 28) -> Premature loop restart
      {
        id: 'C',
        label: 'Blue marker in Top-Left corner',
        figure: {
          elements: [
            { type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'dot', cx: 28, cy: 28, r: 7.5, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Square box with blue dot at top-left corner',
      },
      // Option D: Top-Right (72, 28) -> Reverse movement
      {
        id: 'D',
        label: 'Blue marker in Top-Right corner',
        figure: {
          elements: [
            { type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'dot', cx: 72, cy: 28, r: 7.5, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Square box with blue dot at top-right corner',
      },
    ],
    correctOptionId: 'B',
    reasoningSteps: [
      'Observe position of the blue dot in Frame 1: Top-Left corner.',
      'In Frame 2: Top-Right corner (moved 1 corner clockwise).',
      'In Frame 3: Bottom-Right corner (moved 1 corner clockwise).',
      'The clockwise perimeter progression demands moving to the remaining corner: Bottom-Left.',
      'Option B displays the dot at the bottom-left corner.',
    ],
    explanation:
      'The dot travels along the outer corners in a single-step clockwise circuit: Top-Left → Top-Right → Bottom-Right → Bottom-Left. Option B is the uniquely correct completion.',
    commonMistake:
      'Restarting the cycle prematurely back at Top-Left (Option C) before visiting the fourth corner.',
    accessibilityDescription:
      'A dot progressing clockwise corner by corner around a square border.',
    reviewStatus: 'approved',
  },

  // Question 5 (Challenging): Dual Simultaneous Rotation (Outer cross rotates +45°, inner triangle rotates -90°)
  {
    id: 'abs-seq-05',
    category: 'sequences',
    difficulty: 'advanced',
    figureType: 'sequence',
    prompt: 'Which figure satisfies both internal and external rotational rules simultaneously?',
    intendedRule: 'The outer cross rotates 45° clockwise per step (+45°), while the inner equilateral triangle rotates 90° counterclockwise (-90°).',
    ruleParameters: {
      orientation: 'Outer cross: +45° clockwise; Inner triangle: -90° counterclockwise',
    },
    diagram: {
      type: 'sequence',
      data: {
        frames: [
          // Step 1: Cross at 0 deg, Triangle pointing UP (0 deg)
          {
            elements: [
              { type: 'cross', cx: 50, cy: 50, r: 35, stroke: '#07152F', strokeWidth: 4, rotation: 0 },
              { type: 'polygon', points: '50,32 64,58 36,58', stroke: '#2453FF', strokeWidth: 2, fill: '#2453FF' },
            ],
          },
          // Step 2: Cross at 45 deg (X shape), Triangle pointing LEFT (-90 deg)
          {
            elements: [
              { type: 'cross', cx: 50, cy: 50, r: 35, stroke: '#07152F', strokeWidth: 4, rotation: 45 },
              { type: 'polygon', points: '32,50 58,36 58,64', stroke: '#2453FF', strokeWidth: 2, fill: '#2453FF' },
            ],
          },
          // Step 3: Cross at 90 deg (plus + shape), Triangle pointing DOWN (-180 deg)
          {
            elements: [
              { type: 'cross', cx: 50, cy: 50, r: 35, stroke: '#07152F', strokeWidth: 4, rotation: 90 },
              { type: 'polygon', points: '50,68 64,42 36,42', stroke: '#2453FF', strokeWidth: 2, fill: '#2453FF' },
            ],
          },
          // Step 4: Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: Cross at 45° (X), Triangle pointing RIGHT (270° / -270°) -> Correct!
      {
        id: 'A',
        label: 'Cross at 45° (X shape) with triangle pointing Right',
        figure: {
          elements: [
            { type: 'cross', cx: 50, cy: 50, r: 35, stroke: '#07152F', strokeWidth: 4, rotation: 45 },
            { type: 'polygon', points: '68,50 42,36 42,64', stroke: '#2453FF', strokeWidth: 2, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Diagonal X cross with inner triangle pointing to the right',
      },
      // Option B: Cross at 0° (+ shape), Triangle pointing RIGHT -> Cross orientation wrong
      {
        id: 'B',
        label: 'Cross at 0° (+ shape) with triangle pointing Right',
        figure: {
          elements: [
            { type: 'cross', cx: 50, cy: 50, r: 35, stroke: '#07152F', strokeWidth: 4, rotation: 0 },
            { type: 'polygon', points: '68,50 42,36 42,64', stroke: '#2453FF', strokeWidth: 2, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Vertical plus cross with inner triangle pointing right',
      },
      // Option C: Cross at 45° (X), Triangle pointing UP -> Triangle didn\'t rotate
      {
        id: 'C',
        label: 'Cross at 45° (X shape) with triangle pointing Up',
        figure: {
          elements: [
            { type: 'cross', cx: 50, cy: 50, r: 35, stroke: '#07152F', strokeWidth: 4, rotation: 45 },
            { type: 'polygon', points: '50,32 64,58 36,58', stroke: '#2453FF', strokeWidth: 2, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Diagonal X cross with inner triangle pointing upwards',
      },
      // Option D: Cross at 45° (X), Triangle pointing LEFT -> Triangle reversed direction
      {
        id: 'D',
        label: 'Cross at 45° (X shape) with triangle pointing Left',
        figure: {
          elements: [
            { type: 'cross', cx: 50, cy: 50, r: 35, stroke: '#07152F', strokeWidth: 4, rotation: 45 },
            { type: 'polygon', points: '32,50 58,36 58,64', stroke: '#2453FF', strokeWidth: 2, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Diagonal X cross with inner triangle pointing left',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Outer element: The cross alternates between + shape (0°), diagonal X shape (45°), and + shape (90°). Thus, Step 4 must be a diagonal X shape (135° = 45°). Options A, C, and D satisfy this.',
      'Inner element: The blue triangle points UP (0°), then LEFT (270° / -90°), then DOWN (180° / -180°). Rotating another 90° counterclockwise points RIGHT (90° / -270°).',
      'Combining both: Outer cross is diagonal (X), inner triangle points RIGHT.',
      'Option A uniquely satisfies both rotational rules.',
    ],
    explanation:
      'The outer cross alternates orientation every 45°, meaning the fourth frame must be an \'X\'. The inner triangle rotates counterclockwise by 90° each step (Up → Left → Down → Right). Combining both gives an \'X\' cross enclosing a right-pointing triangle (Option A).',
    commonMistake:
      'Tracking only one component (e.g. noticing the triangle points right but ignoring the cross shape, or vice-versa).',
    accessibilityDescription:
      'Dual rotating system: an outer cross turning 45 degrees and an inner triangle turning 90 degrees counterclockwise.',
    reviewStatus: 'approved',
  },

  // Question 6 (Challenging): Concentric Ring Radial Growth & Line Division
  {
    id: 'abs-seq-06',
    category: 'sequences',
    difficulty: 'advanced',
    figureType: 'sequence',
    prompt: 'Which figure correctly continues the progression of dividing lines and concentric layers?',
    intendedRule: 'The circle gains +1 concentric layer while internal dividing lines increase by +1 (1 line / 2 halves -> 2 lines / 4 quarters -> 3 lines / 6 sectors).',
    ruleParameters: {
      count: 'Concentric rings: 1 -> 2 -> 3; Diametrical dividing lines: 1 -> 2 -> 3',
    },
    diagram: {
      type: 'sequence',
      data: {
        frames: [
          // Step 1: 1 circle, 1 vertical dividing line (2 sectors)
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'line', x1: 50, y1: 14, x2: 50, y2: 86, stroke: '#2453FF', strokeWidth: 2.5 },
            ],
          },
          // Step 2: 2 circles (r=22, r=36), 2 perpendicular dividing lines (4 sectors)
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'circle', cx: 50, cy: 50, r: 22, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'line', x1: 50, y1: 14, x2: 50, y2: 86, stroke: '#2453FF', strokeWidth: 2.5 },
              { type: 'line', x1: 14, y1: 50, x2: 86, y2: 50, stroke: '#2453FF', strokeWidth: 2.5 },
            ],
          },
          // Step 3: 3 circles (r=12, r=24, r=36), 3 dividing lines at 60 deg intervals (6 sectors)
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'circle', cx: 50, cy: 50, r: 24, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'circle', cx: 50, cy: 50, r: 12, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'line', x1: 50, y1: 14, x2: 50, y2: 86, stroke: '#2453FF', strokeWidth: 2 },
              { type: 'line', x1: 19, y1: 32, x2: 81, y2: 68, stroke: '#2453FF', strokeWidth: 2 },
              { type: 'line', x1: 19, y1: 68, x2: 81, y2: 32, stroke: '#2453FF', strokeWidth: 2 },
            ],
          },
          // Step 4: Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: 4 circles + 4 diametrical lines (8 sectors) -> Correct!
      {
        id: 'A',
        label: '4 concentric circles divided by 4 diametrical lines into 8 equal sectors',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 27, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 18, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 9, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'line', x1: 50, y1: 14, x2: 50, y2: 86, stroke: '#2453FF', strokeWidth: 2 },
            { type: 'line', x1: 14, y1: 50, x2: 86, y2: 50, stroke: '#2453FF', strokeWidth: 2 },
            { type: 'line', x1: 24.5, y1: 24.5, x2: 75.5, y2: 75.5, stroke: '#2453FF', strokeWidth: 2 },
            { type: 'line', x1: 24.5, y1: 75.5, x2: 75.5, y2: 24.5, stroke: '#2453FF', strokeWidth: 2 },
          ],
        },
        accessibilityLabel: 'Four concentric rings with four dividing diameters forming 8 sectors',
      },
      // Option B: 3 circles + 4 lines -> Failed ring increment
      {
        id: 'B',
        label: '3 concentric circles with 4 lines',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 24, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 12, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'line', x1: 50, y1: 14, x2: 50, y2: 86, stroke: '#2453FF', strokeWidth: 2 },
            { type: 'line', x1: 14, y1: 50, x2: 86, y2: 50, stroke: '#2453FF', strokeWidth: 2 },
            { type: 'line', x1: 24.5, y1: 24.5, x2: 75.5, y2: 75.5, stroke: '#2453FF', strokeWidth: 2 },
            { type: 'line', x1: 24.5, y1: 75.5, x2: 75.5, y2: 24.5, stroke: '#2453FF', strokeWidth: 2 },
          ],
        },
        accessibilityLabel: 'Three concentric rings with 4 dividing lines',
      },
      // Option C: 4 circles + only 2 lines -> Failed line increment
      {
        id: 'C',
        label: '4 concentric circles with 2 lines',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 27, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 18, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 9, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'line', x1: 50, y1: 14, x2: 50, y2: 86, stroke: '#2453FF', strokeWidth: 2 },
            { type: 'line', x1: 14, y1: 50, x2: 86, y2: 50, stroke: '#2453FF', strokeWidth: 2 },
          ],
        },
        accessibilityLabel: 'Four concentric rings with only 2 dividing lines',
      },
      // Option D: 5 circles + 5 lines -> Jumps +2 increments
      {
        id: 'D',
        label: '5 concentric circles with 5 lines',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 36, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 29, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 22, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 15, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 8, stroke: '#07152F', strokeWidth: 1.5, fill: '#FFFFFF' },
            { type: 'line', x1: 50, y1: 14, x2: 50, y2: 86, stroke: '#2453FF', strokeWidth: 2 },
          ],
        },
        accessibilityLabel: 'Five concentric rings',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Concentric circles count: 1 circle (Frame 1), 2 circles (Frame 2), 3 circles (Frame 3). Step 4 requires 4 concentric circles.',
      'Diametrical dividing lines count: 1 line (2 halves), 2 lines (4 quadrants), 3 lines (6 equal sectors). Step 4 requires 4 lines (8 equal sectors).',
      'Option A contains both 4 concentric rings and 4 intersecting diameter lines creating 8 equal radial sectors.',
    ],
    explanation:
      'Both properties increment by 1 in unison: rings count (1 → 2 → 3 → 4) and dividing diameter lines (1 → 2 → 3 → 4). The fourth figure must feature 4 concentric circles subdivided by 4 lines into 8 sectors (Option A).',
    commonMistake:
      'Updating the dividing lines count while leaving the concentric ring count unchanged at 3 (Option B).',
    accessibilityDescription:
      'Nested circles growing from 1 to 4 layers with radial lines dividing them into 2, 4, 6, and 8 sectors.',
    reviewStatus: 'approved',
  },

  // =========================================================================
  // CATEGORY 2: MATRIX REASONING (6 QUESTIONS: 2x2 and 3x3)
  // =========================================================================

  // Question 7 (Introductory): 2x2 Matrix — Shape Morph (Row: Circle -> Square, Col: Outline -> Fill)
  {
    id: 'abs-mat-01',
    category: 'matrices',
    difficulty: 'introductory',
    figureType: 'matrix_2x2',
    prompt: 'Which figure completes the 2×2 matrix by satisfying both horizontal and vertical transformation rules?',
    intendedRule: 'Horizontal rule: circle transforms into square of identical size. Vertical rule: hollow/white fill changes to solid blue fill.',
    ruleParameters: {
      shape: 'Row transformation: circle -> square',
      fill: 'Column transformation: hollow -> solid blue fill',
    },
    diagram: {
      type: 'matrix',
      data: {
        rows: 2,
        cols: 2,
        cells: [
          // Cell (0,0): Hollow Circle
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            ],
          },
          // Cell (0,1): Hollow Square
          {
            elements: [
              { type: 'rect', x: 22, y: 22, width: 56, height: 56, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            ],
          },
          // Cell (1,0): Solid Blue Circle
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#2453FF', strokeWidth: 3, fill: '#2453FF' },
            ],
          },
          // Cell (1,1): Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: Solid Blue Square -> Correct!
      {
        id: 'A',
        label: 'Solid blue square',
        figure: {
          elements: [
            { type: 'rect', x: 22, y: 22, width: 56, height: 56, stroke: '#2453FF', strokeWidth: 3, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Solid blue filled square',
      },
      // Option B: Hollow Square -> Fails vertical fill rule
      {
        id: 'B',
        label: 'Hollow square',
        figure: {
          elements: [
            { type: 'rect', x: 22, y: 22, width: 56, height: 56, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Hollow square with white fill',
      },
      // Option C: Solid Blue Circle -> Fails horizontal shape rule
      {
        id: 'C',
        label: 'Solid blue circle',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#2453FF', strokeWidth: 3, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Solid blue filled circle',
      },
      // Option D: Solid Triangle -> Shape not in domain
      {
        id: 'D',
        label: 'Solid blue triangle',
        figure: {
          elements: [
            { type: 'polygon', points: '50,20 78,75 22,75', stroke: '#2453FF', strokeWidth: 3, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Solid blue filled triangle',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Horizontal rule (Row 1): A hollow circle becomes a hollow square (Circle → Square).',
      'Vertical rule (Column 1): A hollow circle becomes a solid blue circle (Hollow → Solid Blue).',
      'Apply to Row 2: The solid blue circle must change from circle to square, maintaining the solid blue fill.',
      'Check Column 2: The hollow square becomes a solid blue square.',
      'Both intersection rules agree: The missing cell must be a solid blue square (Option A).',
    ],
    explanation:
      'Looking across rows, shapes change from circles to squares. Looking down columns, shapes change from hollow to solid blue fill. Applying both rules gives a solid blue square (Option A).',
    commonMistake:
      'Only applying the horizontal rule and neglecting the vertical color change, selecting the hollow square (Option B).',
    accessibilityDescription:
      'A two-by-two matrix with circle to square horizontally and hollow to solid vertically.',
    reviewStatus: 'approved',
  },

  // Question 8 (Introductory): 2x2 Matrix — Inner Element Addition & Outer Scale
  {
    id: 'abs-mat-02',
    category: 'matrices',
    difficulty: 'introductory',
    figureType: 'matrix_2x2',
    prompt: 'Which figure logically completes the matrix?',
    intendedRule: 'Row rule: Outer shape shrinks and a centered cross is placed inside. Column rule: Outer shape changes from square to circle.',
    ruleParameters: {
      shape: 'Outer shape changes from square to circle down columns',
      position: 'Inner cross added across rows',
    },
    diagram: {
      type: 'matrix',
      data: {
        rows: 2,
        cols: 2,
        cells: [
          // Cell (0,0): Empty Square
          {
            elements: [
              { type: 'rect', x: 18, y: 18, width: 64, height: 64, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            ],
          },
          // Cell (0,1): Square with centered cross
          {
            elements: [
              { type: 'rect', x: 18, y: 18, width: 64, height: 64, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
              { type: 'cross', cx: 50, cy: 50, r: 16, stroke: '#2453FF', strokeWidth: 3 },
            ],
          },
          // Cell (1,0): Empty Circle
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 32, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            ],
          },
          // Cell (1,1): Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: Circle with cross -> Correct!
      {
        id: 'A',
        label: 'Circle with centered blue cross',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 32, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'cross', cx: 50, cy: 50, r: 16, stroke: '#2453FF', strokeWidth: 3 },
          ],
        },
        accessibilityLabel: 'Circle containing a centered blue cross',
      },
      // Option B: Empty Circle -> Fails cross addition
      {
        id: 'B',
        label: 'Empty circle',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 32, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Empty circle with no inner element',
      },
      // Option C: Circle with dot -> Wrong inner element
      {
        id: 'C',
        label: 'Circle with inner dot',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 32, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'dot', cx: 50, cy: 50, r: 6, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Circle with a solid dot instead of a cross',
      },
      // Option D: Square with cross -> Fails outer shape change
      {
        id: 'D',
        label: 'Square with cross',
        figure: {
          elements: [
            { type: 'rect', x: 18, y: 18, width: 64, height: 64, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'cross', cx: 50, cy: 50, r: 16, stroke: '#2453FF', strokeWidth: 3 },
          ],
        },
        accessibilityLabel: 'Square with centered cross',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Horizontal rule: Moving from left to right adds a centered blue cross inside the boundary shape.',
      'Vertical rule: Moving from top to bottom transforms the outer bounding shape from a square into a circle.',
      'Applying the horizontal rule to Row 2: An empty circle gains an internal blue cross.',
      'Applying the vertical rule to Column 2: A square containing a cross becomes a circle containing a cross.',
      'Both lines of reasoning unambiguously yield Option A.',
    ],
    explanation:
      'Across rows, a cross is added inside the shape. Down columns, squares transform into circles. Combining these produces a circle with a cross inside (Option A).',
    commonMistake:
      'Confusing the cross addition with a dot or simple fill (Option C).',
    accessibilityDescription:
      'A 2x2 matrix where outer shapes morph from square to circle and inner crosses are introduced.',
    reviewStatus: 'approved',
  },

  // Question 9 (Intermediate): 3x3 Matrix — Row Rotation (0°, 90°, 180°)
  {
    id: 'abs-mat-03',
    category: 'matrices',
    difficulty: 'intermediate',
    figureType: 'matrix_3x3',
    prompt: 'Which figure correctly replaces the question mark in this 3×3 matrix?',
    intendedRule: 'Each row contains the same base shape rotated by 0°, 90°, and 180° clockwise.',
    ruleParameters: {
      orientation: 'Row rotation: 0° -> 90° -> 180° clockwise',
      shape: 'Row 1: Arrow, Row 2: T-bar, Row 3: L-shape',
    },
    diagram: {
      type: 'matrix',
      data: {
        rows: 3,
        cols: 3,
        cells: [
          // Row 1: Arrow pointing UP (0°), RIGHT (90°), DOWN (180°)
          {
            elements: [
              { type: 'arrow', x1: 50, y1: 75, x2: 50, y2: 25, stroke: '#07152F', strokeWidth: 3, rotation: 0 },
            ],
          },
          {
            elements: [
              { type: 'arrow', x1: 25, y1: 50, x2: 75, y2: 50, stroke: '#07152F', strokeWidth: 3, rotation: 90 },
            ],
          },
          {
            elements: [
              { type: 'arrow', x1: 50, y1: 25, x2: 50, y2: 75, stroke: '#07152F', strokeWidth: 3, rotation: 180 },
            ],
          },
          // Row 2: T-shape pointing UP, RIGHT, DOWN
          {
            elements: [
              { type: 'line', x1: 25, y1: 25, x2: 75, y2: 25, stroke: '#2453FF', strokeWidth: 3.5 },
              { type: 'line', x1: 50, y1: 25, x2: 50, y2: 75, stroke: '#2453FF', strokeWidth: 3.5 },
            ],
          },
          {
            elements: [
              { type: 'line', x1: 75, y1: 25, x2: 75, y2: 75, stroke: '#2453FF', strokeWidth: 3.5 },
              { type: 'line', x1: 25, y1: 50, x2: 75, y2: 50, stroke: '#2453FF', strokeWidth: 3.5 },
            ],
          },
          {
            elements: [
              { type: 'line', x1: 25, y1: 75, x2: 75, y2: 75, stroke: '#2453FF', strokeWidth: 3.5 },
              { type: 'line', x1: 50, y1: 25, x2: 50, y2: 75, stroke: '#2453FF', strokeWidth: 3.5 },
            ],
          },
          // Row 3: L-shape at 0° (legs Up & Right), 90° (legs Right & Down), 180° (legs Down & Left - Target)
          {
            elements: [
              { type: 'line', x1: 25, y1: 25, x2: 25, y2: 75, stroke: '#07152F', strokeWidth: 3.5 },
              { type: 'line', x1: 25, y1: 75, x2: 75, y2: 75, stroke: '#07152F', strokeWidth: 3.5 },
            ],
          },
          {
            elements: [
              { type: 'line', x1: 25, y1: 25, x2: 75, y2: 25, stroke: '#07152F', strokeWidth: 3.5 },
              { type: 'line', x1: 75, y1: 25, x2: 75, y2: 75, stroke: '#07152F', strokeWidth: 3.5 },
            ],
          },
          // Cell (2,2): Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: L-shape rotated 180° (legs along top and right, inverted corner at bottom-right) -> Correct!
      {
        id: 'A',
        label: 'L-shape with corner at top-left, rotated 180 degrees',
        figure: {
          elements: [
            { type: 'line', x1: 75, y1: 25, x2: 75, y2: 75, stroke: '#07152F', strokeWidth: 3.5 },
            { type: 'line', x1: 25, y1: 25, x2: 75, y2: 25, stroke: '#07152F', strokeWidth: 3.5 },
          ],
        },
        accessibilityLabel: 'L-shape rotated 180 degrees with legs top and right',
      },
      // Option B: L-shape at 270° (legs down and left)
      {
        id: 'B',
        label: 'L-shape at 270 degrees',
        figure: {
          elements: [
            { type: 'line', x1: 25, y1: 25, x2: 25, y2: 75, stroke: '#07152F', strokeWidth: 3.5 },
            { type: 'line', x1: 25, y1: 25, x2: 75, y2: 25, stroke: '#07152F', strokeWidth: 3.5 },
          ],
        },
        accessibilityLabel: 'L-shape rotated 270 degrees with legs left and top',
      },
      // Option C: L-shape at 0° (unrotated duplicate)
      {
        id: 'C',
        label: 'L-shape unrotated at 0 degrees',
        figure: {
          elements: [
            { type: 'line', x1: 25, y1: 25, x2: 25, y2: 75, stroke: '#07152F', strokeWidth: 3.5 },
            { type: 'line', x1: 25, y1: 75, x2: 75, y2: 75, stroke: '#07152F', strokeWidth: 3.5 },
          ],
        },
        accessibilityLabel: 'Standard unrotated L shape',
      },
      // Option D: Arrow -> Wrong shape category
      {
        id: 'D',
        label: 'Arrow pointing down',
        figure: {
          elements: [
            { type: 'arrow', x1: 50, y1: 25, x2: 50, y2: 75, stroke: '#07152F', strokeWidth: 3, rotation: 180 },
          ],
        },
        accessibilityLabel: 'Arrow pointing downwards',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Row 1 establishes the rule: The arrow rotates clockwise by 90° in Col 2, and by 180° in Col 3.',
      'Row 2 verifies the rule: The T-bar rotates clockwise by 90° in Col 2, and 180° in Col 3.',
      'Row 3 starts with the standard L-shape (0°), followed by 90° clockwise rotation in Col 2.',
      'Col 3 must therefore be the L-shape rotated by 180° from its initial orientation.',
      'Option A corresponds to the 180° clockwise rotation of the L-shape.',
    ],
    explanation:
      'Across each row, figures rotate clockwise by 90° at each step (0° → 90° → 180°). In the bottom row, rotating the original L-shape by 180° produces Option A.',
    commonMistake:
      'Applying a 270° rotation instead of 180° (Option B).',
    accessibilityDescription:
      'A 3x3 matrix where each row rotates a distinct geometric symbol by 90 degrees sequentially.',
    reviewStatus: 'approved',
  },

  // Question 10 (Intermediate): 3x3 Matrix — Distribution of 3 attributes (Circle, Square, Triangle + 1, 2, 3 dots)
  {
    id: 'abs-mat-04',
    category: 'matrices',
    difficulty: 'intermediate',
    figureType: 'matrix_3x3',
    prompt: 'Which figure satisfies the Latin-square distribution across rows and columns?',
    intendedRule: 'Each row and column contains exactly one Circle, one Square, and one Triangle, and exactly one instance of 1, 2, and 3 dots.',
    ruleParameters: {
      shape: 'Latin square of {Circle, Square, Triangle}',
      count: 'Latin square of {1 dot, 2 dots, 3 dots}',
    },
    diagram: {
      type: 'matrix',
      data: {
        rows: 3,
        cols: 3,
        cells: [
          // Row 1: Square(1), Triangle(2), Circle(3)
          {
            elements: [
              { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 50, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          {
            elements: [
              { type: 'polygon', points: '50,18 82,78 18,78', stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 42, cy: 56, r: 4, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 58, cy: 56, r: 4, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 35, cy: 50, r: 3.5, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 50, cy: 50, r: 3.5, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 65, cy: 50, r: 3.5, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Row 2: Triangle(3), Circle(1), Square(2)
          {
            elements: [
              { type: 'polygon', points: '50,18 82,78 18,78', stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 50, cy: 42, r: 3.5, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 40, cy: 62, r: 3.5, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 60, cy: 62, r: 3.5, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 50, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          {
            elements: [
              { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 38, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 62, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Row 3: Circle(2), Square(3), Target (?) -> Needs Triangle with 1 dot!
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 40, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 60, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          {
            elements: [
              { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'dot', cx: 32, cy: 50, r: 3.5, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 50, cy: 50, r: 3.5, stroke: '#2453FF', fill: '#2453FF' },
              { type: 'dot', cx: 68, cy: 50, r: 3.5, stroke: '#2453FF', fill: '#2453FF' },
            ],
          },
          // Cell (2,2): Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: Triangle with 1 dot -> Correct!
      {
        id: 'A',
        label: 'Triangle containing 1 blue dot',
        figure: {
          elements: [
            { type: 'polygon', points: '50,18 82,78 18,78', stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'dot', cx: 50, cy: 56, r: 4, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Triangle containing a single blue dot',
      },
      // Option B: Triangle with 2 dots -> Fails dot count
      {
        id: 'B',
        label: 'Triangle containing 2 blue dots',
        figure: {
          elements: [
            { type: 'polygon', points: '50,18 82,78 18,78', stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'dot', cx: 42, cy: 56, r: 4, stroke: '#2453FF', fill: '#2453FF' },
            { type: 'dot', cx: 58, cy: 56, r: 4, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Triangle containing two blue dots',
      },
      // Option C: Square with 1 dot -> Fails shape requirement
      {
        id: 'C',
        label: 'Square containing 1 blue dot',
        figure: {
          elements: [
            { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'dot', cx: 50, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Square containing one blue dot',
      },
      // Option D: Circle with 1 dot -> Fails shape requirement
      {
        id: 'D',
        label: 'Circle containing 1 blue dot',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
            { type: 'dot', cx: 50, cy: 50, r: 4, stroke: '#2453FF', fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Circle containing one blue dot',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Shape Analysis: Row 3 already contains Circle and Square. Column 3 already contains Circle and Square. Both require a Triangle to complete the set {Circle, Square, Triangle}.',
      'Dot Count Analysis: Row 3 contains 2 dots and 3 dots. Column 3 contains 3 dots and 2 dots. Both require 1 dot to complete the set {1, 2, 3}.',
      'Synthesize: Missing cell must be a Triangle with 1 dot.',
      'Option A matches both criteria exactly.',
    ],
    explanation:
      'Each row and column forms a complete permutation of the three shapes (Circle, Square, Triangle) and the three dot counts (1, 2, 3). The missing position in the bottom right requires a Triangle containing 1 dot (Option A).',
    commonMistake:
      'Identifying the missing triangle but incorrectly repeating 2 dots (Option B).',
    accessibilityDescription:
      'A 3x3 matrix showing permutations of three shapes and three dot quantities.',
    reviewStatus: 'approved',
  },

  // Question 11 (Challenging): 3x3 Matrix — Boolean Addition (Overlay of line segments across row)
  {
    id: 'abs-mat-05',
    category: 'matrices',
    difficulty: 'advanced',
    figureType: 'matrix_3x3',
    prompt: 'Which figure represents the logical combination (overlay) of elements across Row 3?',
    intendedRule: 'The third cell in each row is the geometric union (overlay) of the first two cells.',
    ruleParameters: {
      operation: 'Union (Cell 1 + Cell 2 = Cell 3)',
    },
    diagram: {
      type: 'matrix',
      data: {
        rows: 3,
        cols: 3,
        cells: [
          // Row 1: Vertical line + Horizontal line = Cross (+)
          {
            elements: [
              { type: 'line', x1: 50, y1: 15, x2: 50, y2: 85, stroke: '#07152F', strokeWidth: 3 },
            ],
          },
          {
            elements: [
              { type: 'line', x1: 15, y1: 50, x2: 85, y2: 50, stroke: '#07152F', strokeWidth: 3 },
            ],
          },
          {
            elements: [
              { type: 'line', x1: 50, y1: 15, x2: 50, y2: 85, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 15, y1: 50, x2: 85, y2: 50, stroke: '#07152F', strokeWidth: 3 },
            ],
          },
          // Row 2: Diagonal \ + Diagonal / = X
          {
            elements: [
              { type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#2453FF', strokeWidth: 3 },
            ],
          },
          {
            elements: [
              { type: 'line', x1: 20, y1: 80, x2: 80, y2: 20, stroke: '#2453FF', strokeWidth: 3 },
            ],
          },
          {
            elements: [
              { type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#2453FF', strokeWidth: 3 },
              { type: 'line', x1: 20, y1: 80, x2: 80, y2: 20, stroke: '#2453FF', strokeWidth: 3 },
            ],
          },
          // Row 3: Square frame + Central circle = Square with circle inside (Target)
          {
            elements: [
              { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            ],
          },
          {
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 18, stroke: '#2453FF', strokeWidth: 3, fill: '#FFFFFF' },
            ],
          },
          // Cell (2,2): Target (?)
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: Square enclosing circle -> Correct!
      {
        id: 'A',
        label: 'Square enclosing a centered circle',
        figure: {
          elements: [
            { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 18, stroke: '#2453FF', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Outer square enclosing an inner circle',
      },
      // Option B: Circle enclosing square -> Inverted hierarchy
      {
        id: 'B',
        label: 'Circle enclosing a square',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#2453FF', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'rect', x: 32, y: 32, width: 36, height: 36, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Circle enclosing an inner square',
      },
      // Option C: Square only -> Misses circle component
      {
        id: 'C',
        label: 'Square only',
        figure: {
          elements: [
            { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Empty square without circle',
      },
      // Option D: Circle only -> Misses square component
      {
        id: 'D',
        label: 'Circle only',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 18, stroke: '#2453FF', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Inner circle without square',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'In Row 1: Vertical line in Col 1 + Horizontal line in Col 2 = Cross (+) in Col 3 (Union / Overlay).',
      'In Row 2: Backslash line in Col 1 + Forward slash in Col 2 = X in Col 3 (Union / Overlay).',
      'In Row 3: Square in Col 1 + Centered circle in Col 2 must be overlaid together in Col 3.',
      'Result: A square enclosing the centered circle.',
      'Option A matches this overlay perfectly.',
    ],
    explanation:
      'The third column is created by superimposing (overlaying) the contents of the first two columns. Combining the square in Column 1 with the circle in Column 2 produces a square enclosing a circle (Option A).',
    commonMistake:
      'Inverting the layering and placing the circle outside the square (Option B).',
    accessibilityDescription:
      'A 3x3 matrix where elements in columns 1 and 2 are superimposed to form column 3.',
    reviewStatus: 'approved',
  },

  // Question 12 (Challenging): 3x3 Matrix — XOR Elimination (Elements in both cancel out)
  {
    id: 'abs-mat-06',
    category: 'matrices',
    difficulty: 'advanced',
    figureType: 'matrix_3x3',
    prompt: 'Which figure completes the matrix according to the logical subtraction (XOR) rule?',
    intendedRule: 'Across each row, lines appearing in only ONE of the first two cells are kept; lines appearing in BOTH cells are eliminated.',
    ruleParameters: {
      operation: 'Exclusive OR (XOR) on 4 outer boundary lines',
    },
    diagram: {
      type: 'matrix',
      data: {
        rows: 3,
        cols: 3,
        cells: [
          // Row 1: [Top, Left] XOR [Top, Right] = [Left, Right] (Top cancelled)
          {
            elements: [
              { type: 'line', x1: 20, y1: 20, x2: 80, y2: 20, stroke: '#07152F', strokeWidth: 3.5 }, // Top
              { type: 'line', x1: 20, y1: 20, x2: 20, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Left
            ],
          },
          {
            elements: [
              { type: 'line', x1: 20, y1: 20, x2: 80, y2: 20, stroke: '#07152F', strokeWidth: 3.5 }, // Top
              { type: 'line', x1: 80, y1: 20, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Right
            ],
          },
          {
            elements: [
              { type: 'line', x1: 20, y1: 20, x2: 20, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Left
              { type: 'line', x1: 80, y1: 20, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Right
            ],
          },
          // Row 2: [Bottom, Left] XOR [Bottom, Right] = [Left, Right] (Bottom cancelled)
          {
            elements: [
              { type: 'line', x1: 20, y1: 80, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Bottom
              { type: 'line', x1: 20, y1: 20, x2: 20, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Left
            ],
          },
          {
            elements: [
              { type: 'line', x1: 20, y1: 80, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Bottom
              { type: 'line', x1: 80, y1: 20, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Right
            ],
          },
          {
            elements: [
              { type: 'line', x1: 20, y1: 20, x2: 20, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Left
              { type: 'line', x1: 80, y1: 20, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Right
            ],
          },
          // Row 3: [Top, Bottom, Left] XOR [Left, Right] -> Left cancels out, leaves [Top, Bottom, Right]
          {
            elements: [
              { type: 'line', x1: 20, y1: 20, x2: 80, y2: 20, stroke: '#07152F', strokeWidth: 3.5 }, // Top
              { type: 'line', x1: 20, y1: 80, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Bottom
              { type: 'line', x1: 20, y1: 20, x2: 20, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Left
            ],
          },
          {
            elements: [
              { type: 'line', x1: 20, y1: 20, x2: 20, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Left
              { type: 'line', x1: 80, y1: 20, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Right
            ],
          },
          // Cell (2,2): Target (?) -> Must be [Top, Bottom, Right]
          { isTarget: true, elements: [] },
        ],
      },
    },
    options: [
      // Option A: Top, Bottom, and Right lines (U shape pointing left) -> Correct!
      {
        id: 'A',
        label: 'Lines on Top, Bottom, and Right (Left line cancelled)',
        figure: {
          elements: [
            { type: 'line', x1: 20, y1: 20, x2: 80, y2: 20, stroke: '#07152F', strokeWidth: 3.5 }, // Top
            { type: 'line', x1: 20, y1: 80, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Bottom
            { type: 'line', x1: 80, y1: 20, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 }, // Right
          ],
        },
        accessibilityLabel: 'Three edges of a square: top, bottom, and right',
      },
      // Option B: All 4 lines (Complete square) -> Fails cancellation
      {
        id: 'B',
        label: 'All 4 edges of a square',
        figure: {
          elements: [
            { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 3.5, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Complete 4-sided square',
      },
      // Option C: Left line only -> Kept the duplicate instead of cancelling
      {
        id: 'C',
        label: 'Left vertical line only',
        figure: {
          elements: [
            { type: 'line', x1: 20, y1: 20, x2: 20, y2: 80, stroke: '#07152F', strokeWidth: 3.5 },
          ],
        },
        accessibilityLabel: 'Single left vertical line',
      },
      // Option D: Top and Bottom lines only -> Dropped right line
      {
        id: 'D',
        label: 'Top and bottom horizontal lines only',
        figure: {
          elements: [
            { type: 'line', x1: 20, y1: 20, x2: 80, y2: 20, stroke: '#07152F', strokeWidth: 3.5 },
            { type: 'line', x1: 20, y1: 80, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3.5 },
          ],
        },
        accessibilityLabel: 'Top and bottom parallel lines',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Examine Row 1: Cell 1 has {Top, Left}. Cell 2 has {Top, Right}. The Top line appears in BOTH and is cancelled out. Only unique lines {Left, Right} survive in Cell 3.',
      'Examine Row 2: Cell 1 has {Bottom, Left}. Cell 2 has {Bottom, Right}. The Bottom line appears in BOTH and is cancelled out. Only unique lines {Left, Right} survive in Cell 3.',
      'Row 3 Operation: Cell 1 has {Top, Bottom, Left}. Cell 2 has {Left, Right}.',
      'The Left line appears in BOTH cells, so it cancels out.',
      'The unique lines remaining are {Top, Bottom, Right}.',
      'Option A displays exactly {Top, Bottom, Right}.',
    ],
    explanation:
      'The matrix follows the Exclusive-OR (XOR) rule: line segments common to both input frames are cancelled out, while line segments present in only one frame are preserved. Cancelling the shared Left line leaves the Top, Bottom, and Right segments (Option A).',
    commonMistake:
      'Performing simple addition (OR) instead of XOR, mistakenly retaining all lines to make a complete square (Option B).',
    accessibilityDescription:
      'A 3x3 matrix operating under an XOR rule where overlapping boundary segments eliminate each other.',
    reviewStatus: 'approved',
  },

  // =========================================================================
  // CATEGORY 3: ODD ONE OUT (4 QUESTIONS)
  // =========================================================================

  // Question 13 (Introductory): Odd One Out — Rotational Invariant vs Reflection
  {
    id: 'abs-odd-01',
    category: 'odd_one_out',
    difficulty: 'introductory',
    figureType: 'odd_one_out',
    prompt: 'Which figure does NOT belong with the others based on geometric symmetry?',
    intendedRule: 'Figures A, B, and D are rotated orientations of the same asymmetrical F-shaped design. Figure C is reflected (mirrored) and cannot be produced by rotation alone.',
    ruleParameters: {
      symmetry: 'Chirality / Reflection vs Pure Rotation',
    },
    diagram: {
      type: 'odd_one_out',
      data: {
        figures: [
          // Figure A: Standard F orientation (0 deg)
          {
            label: 'A',
            elements: [
              { type: 'line', x1: 30, y1: 20, x2: 30, y2: 80, stroke: '#07152F', strokeWidth: 4, strokeLinecap: 'round' },
              { type: 'line', x1: 30, y1: 20, x2: 70, y2: 20, stroke: '#2453FF', strokeWidth: 4, strokeLinecap: 'round' },
              { type: 'line', x1: 30, y1: 50, x2: 60, y2: 50, stroke: '#2453FF', strokeWidth: 4, strokeLinecap: 'round' },
            ],
          },
          // Figure B: F rotated 90 deg clockwise
          {
            label: 'B',
            elements: [
              { type: 'line', x1: 80, y1: 30, x2: 20, y2: 30, stroke: '#07152F', strokeWidth: 4, strokeLinecap: 'round' },
              { type: 'line', x1: 80, y1: 30, x2: 80, y2: 70, stroke: '#2453FF', strokeWidth: 4, strokeLinecap: 'round' },
              { type: 'line', x1: 50, y1: 30, x2: 50, y2: 60, stroke: '#2453FF', strokeWidth: 4, strokeLinecap: 'round' },
            ],
          },
          // Figure C: F reflected (mirrored horizontally) -> OUTLIER!
          {
            label: 'C',
            elements: [
              { type: 'line', x1: 70, y1: 20, x2: 70, y2: 80, stroke: '#07152F', strokeWidth: 4, strokeLinecap: 'round' },
              { type: 'line', x1: 70, y1: 20, x2: 30, y2: 20, stroke: '#2453FF', strokeWidth: 4, strokeLinecap: 'round' },
              { type: 'line', x1: 70, y1: 50, x2: 40, y2: 50, stroke: '#2453FF', strokeWidth: 4, strokeLinecap: 'round' },
            ],
          },
          // Figure D: F rotated 180 deg
          {
            label: 'D',
            elements: [
              { type: 'line', x1: 70, y1: 80, x2: 70, y2: 20, stroke: '#07152F', strokeWidth: 4, strokeLinecap: 'round' },
              { type: 'line', x1: 70, y1: 80, x2: 30, y2: 80, stroke: '#2453FF', strokeWidth: 4, strokeLinecap: 'round' },
              { type: 'line', x1: 70, y1: 50, x2: 40, y2: 50, stroke: '#2453FF', strokeWidth: 4, strokeLinecap: 'round' },
            ],
          },
        ],
      },
    },
    options: [
      { id: 'A', label: 'Figure A', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option A' },
      { id: 'B', label: 'Figure B', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option B' },
      { id: 'C', label: 'Figure C', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#2453FF' }] }, accessibilityLabel: 'Option C' },
      { id: 'D', label: 'Figure D', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option D' },
    ],
    correctOptionId: 'C',
    reasoningSteps: [
      'Analyze chiral orientation: Check whether figures can be transformed into one another through simple 2D plane rotation.',
      'Figure A can be rotated 90° clockwise to match Figure B exactly.',
      'Figure A can be rotated 180° to match Figure D.',
      'Figure C has horizontal bars pointing in the opposite chiral direction (reflected/mirrored). No 2D rotation can convert Figure A into Figure C without flipping the plane.',
      'Figure C is the odd one out.',
    ],
    explanation:
      'Figures A, B, and D are all identical figures rotated in two dimensions (0°, 90°, and 180°). Figure C is a mirror reflection (flipped chirality) and cannot be mapped onto the others by 2D rotation alone.',
    commonMistake:
      'Selecting Figure D because it points upside down, missing that it is a valid 180° planar rotation.',
    accessibilityDescription:
      'Four letter-like geometric figures where three are pure rotations of each other and one is mirrored.',
    reviewStatus: 'approved',
  },

  // Question 14 (Intermediate): Odd One Out — Number of Internal Line Intersections
  {
    id: 'abs-odd-02',
    category: 'odd_one_out',
    difficulty: 'intermediate',
    figureType: 'odd_one_out',
    prompt: 'Which figure does NOT belong based on the number of line intersection points?',
    intendedRule: 'Figures A, B, and D each contain exactly 3 line intersection points. Figure C contains only 2 intersections.',
    ruleParameters: {
      count: 'Line intersection points: A=3, B=3, C=2, D=3',
    },
    diagram: {
      type: 'odd_one_out',
      data: {
        figures: [
          // Figure A: Triangle of 3 intersecting lines (3 vertices/intersections)
          {
            label: 'A',
            elements: [
              { type: 'line', x1: 20, y1: 75, x2: 80, y2: 75, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 20, y1: 75, x2: 50, y2: 20, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 80, y1: 75, x2: 50, y2: 20, stroke: '#07152F', strokeWidth: 3 },
              { type: 'dot', cx: 20, cy: 75, r: 4.5, fill: '#2453FF' },
              { type: 'dot', cx: 80, cy: 75, r: 4.5, fill: '#2453FF' },
              { type: 'dot', cx: 50, cy: 20, r: 4.5, fill: '#2453FF' },
            ],
          },
          // Figure B: An asterisk of 3 lines intersecting at center + 2 endpoints touching (3 crossings)
          {
            label: 'B',
            elements: [
              { type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 20, y1: 80, x2: 80, y2: 20, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#07152F', strokeWidth: 3 },
              { type: 'dot', cx: 50, cy: 50, r: 5, fill: '#2453FF' },
              { type: 'dot', cx: 20, cy: 20, r: 3.5, fill: '#2453FF' },
              { type: 'dot', cx: 80, cy: 80, r: 3.5, fill: '#2453FF' },
            ],
          },
          // Figure C: Two parallel lines crossed by one transversal (only 2 intersections!) -> OUTLIER!
          {
            label: 'C',
            elements: [
              { type: 'line', x1: 20, y1: 35, x2: 80, y2: 35, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 20, y1: 65, x2: 80, y2: 65, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 30, y1: 15, x2: 70, y2: 85, stroke: '#07152F', strokeWidth: 3 },
              { type: 'dot', cx: 41.5, cy: 35, r: 4.5, fill: '#2453FF' },
              { type: 'dot', cx: 58.5, cy: 65, r: 4.5, fill: '#2453FF' },
            ],
          },
          // Figure D: Letter H with a diagonal crossbar (3 intersection points)
          {
            label: 'D',
            elements: [
              { type: 'line', x1: 25, y1: 20, x2: 25, y2: 80, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 75, y1: 20, x2: 75, y2: 80, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 25, y1: 35, x2: 75, y2: 65, stroke: '#07152F', strokeWidth: 3 },
              { type: 'line', x1: 25, y1: 65, x2: 75, y2: 35, stroke: '#07152F', strokeWidth: 3 },
              { type: 'dot', cx: 25, cy: 35, r: 3.5, fill: '#2453FF' },
              { type: 'dot', cx: 50, cy: 50, r: 4.5, fill: '#2453FF' },
              { type: 'dot', cx: 75, cy: 35, r: 3.5, fill: '#2453FF' },
            ],
          },
        ],
      },
    },
    options: [
      { id: 'A', label: 'Figure A', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option A' },
      { id: 'B', label: 'Figure B', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option B' },
      { id: 'C', label: 'Figure C', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#2453FF' }] }, accessibilityLabel: 'Option C' },
      { id: 'D', label: 'Figure D', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option D' },
    ],
    correctOptionId: 'C',
    reasoningSteps: [
      'Count the marked blue junction points (intersections):',
      'Figure A has 3 junction points.',
      'Figure B has 3 junction points.',
      'Figure D has 3 junction points.',
      'Figure C contains only 2 junction points where the transversal cuts the two parallel lines.',
      'Figure C breaks the invariant of having 3 intersection nodes.',
    ],
    explanation:
      'Figures A, B, and D all feature exactly 3 intersection nodes. Figure C features only 2 intersection points, making it the odd one out.',
    commonMistake:
      'Counting the number of line segments rather than the intersection nodes.',
    accessibilityDescription:
      'Four line figures where three have 3 intersections and one has only 2 intersections.',
    reviewStatus: 'approved',
  },

  // Question 15 (Intermediate): Odd One Out — Shading Ratio / Area Fill
  {
    id: 'abs-odd-03',
    category: 'odd_one_out',
    difficulty: 'intermediate',
    figureType: 'odd_one_out',
    prompt: 'Which figure is the odd one out based on the proportion of shaded area?',
    intendedRule: 'In Figures A, B, and D, exactly 50% (half) of the total area is shaded. In Figure C, only 25% (one quarter) is shaded.',
    ruleParameters: {
      fill: 'Proportion of shaded area: A=50%, B=50%, C=25%, D=50%',
    },
    diagram: {
      type: 'odd_one_out',
      data: {
        figures: [
          // Figure A: Square split vertically into 2 halves; 1 shaded (50%)
          {
            label: 'A',
            elements: [
              { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'rect', x: 20, y: 20, width: 30, height: 60, stroke: '#07152F', strokeWidth: 1.5, fill: '#2453FF' },
            ],
          },
          // Figure B: Circle split in half horizontally; 1 shaded (50%)
          {
            label: 'B',
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'polygon', points: '20,50 80,50 78,65 65,76 50,80 35,76 22,65', stroke: '#07152F', strokeWidth: 1, fill: '#2453FF' },
              { type: 'line', x1: 20, y1: 50, x2: 80, y2: 50, stroke: '#07152F', strokeWidth: 2 },
            ],
          },
          // Figure C: Square divided into 4 quadrants; only 1 shaded (25%) -> OUTLIER!
          {
            label: 'C',
            elements: [
              { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'rect', x: 20, y: 20, width: 30, height: 30, stroke: '#07152F', strokeWidth: 1.5, fill: '#2453FF' },
              { type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#07152F', strokeWidth: 1.5 },
              { type: 'line', x1: 20, y1: 50, x2: 80, y2: 50, stroke: '#07152F', strokeWidth: 1.5 },
            ],
          },
          // Figure D: Square split diagonally into 2 triangles; 1 shaded (50%)
          {
            label: 'D',
            elements: [
              { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#07152F', strokeWidth: 2.5, fill: '#FFFFFF' },
              { type: 'polygon', points: '20,20 80,20 80,80', stroke: '#07152F', strokeWidth: 1.5, fill: '#2453FF' },
            ],
          },
        ],
      },
    },
    options: [
      { id: 'A', label: 'Figure A', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option A' },
      { id: 'B', label: 'Figure B', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option B' },
      { id: 'C', label: 'Figure C', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#2453FF' }] }, accessibilityLabel: 'Option C' },
      { id: 'D', label: 'Figure D', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option D' },
    ],
    correctOptionId: 'C',
    reasoningSteps: [
      'Calculate the shaded area fraction for each figure:',
      'Figure A: Half of the square is shaded (50% or 1/2).',
      'Figure B: Half of the circle is shaded (50% or 1/2).',
      'Figure D: Half of the square is shaded diagonally (50% or 1/2).',
      'Figure C: Only one quadrant out of four is shaded (25% or 1/4).',
      'Figure C deviates from the 50% shading rule.',
    ],
    explanation:
      'Figures A, B, and D all have exactly 50% of their total surface area shaded blue. Figure C has only 25% (one quarter) shaded, making it the odd one out.',
    commonMistake:
      'Focusing on whether the shape is curved or straight (Circle in B) instead of calculating shaded area fraction.',
    accessibilityDescription:
      'Geometric shapes with shaded portions: three shapes are half-shaded, while one is only one-quarter shaded.',
    reviewStatus: 'approved',
  },

  // Question 16 (Challenging): Odd One Out — Relative Directional Pointer Orientation
  {
    id: 'abs-odd-04',
    category: 'odd_one_out',
    difficulty: 'advanced',
    figureType: 'odd_one_out',
    prompt: 'Which figure breaks the shared angular relationship between its two arrows?',
    intendedRule: 'In Figures A, B, and D, the angle between the two arrows is exactly 90° (perpendicular). In Figure C, the angle is 180° (opposite/collinear).',
    ruleParameters: {
      orientation: 'Angle between arrows: A=90°, B=90°, C=180°, D=90°',
    },
    diagram: {
      type: 'odd_one_out',
      data: {
        figures: [
          // Figure A: One arrow UP, one arrow RIGHT (90 deg angle)
          {
            label: 'A',
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'arrow', x1: 50, y1: 50, x2: 50, y2: 22, stroke: '#07152F', strokeWidth: 3, rotation: 0 },
              { type: 'arrow', x1: 50, y1: 50, x2: 78, y2: 50, stroke: '#2453FF', strokeWidth: 3, rotation: 90 },
            ],
          },
          // Figure B: One arrow RIGHT, one arrow DOWN (90 deg angle)
          {
            label: 'B',
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'arrow', x1: 50, y1: 50, x2: 78, y2: 50, stroke: '#07152F', strokeWidth: 3, rotation: 90 },
              { type: 'arrow', x1: 50, y1: 50, x2: 50, y2: 78, stroke: '#2453FF', strokeWidth: 3, rotation: 180 },
            ],
          },
          // Figure C: One arrow UP, one arrow DOWN (180 deg angle!) -> OUTLIER!
          {
            label: 'C',
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'arrow', x1: 50, y1: 50, x2: 50, y2: 22, stroke: '#07152F', strokeWidth: 3, rotation: 0 },
              { type: 'arrow', x1: 50, y1: 50, x2: 50, y2: 78, stroke: '#2453FF', strokeWidth: 3, rotation: 180 },
            ],
          },
          // Figure D: One arrow DOWN, one arrow LEFT (90 deg angle)
          {
            label: 'D',
            elements: [
              { type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#E2EAF7', strokeWidth: 1.5, fill: '#FFFFFF' },
              { type: 'arrow', x1: 50, y1: 50, x2: 50, y2: 78, stroke: '#07152F', strokeWidth: 3, rotation: 180 },
              { type: 'arrow', x1: 50, y1: 50, x2: 22, y2: 50, stroke: '#2453FF', strokeWidth: 3, rotation: 270 },
            ],
          },
        ],
      },
    },
    options: [
      { id: 'A', label: 'Figure A', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option A' },
      { id: 'B', label: 'Figure B', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option B' },
      { id: 'C', label: 'Figure C', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#2453FF' }] }, accessibilityLabel: 'Option C' },
      { id: 'D', label: 'Figure D', figure: { elements: [{ type: 'dot', cx: 50, cy: 50, r: 10, fill: '#07152F' }] }, accessibilityLabel: 'Option D' },
    ],
    correctOptionId: 'C',
    reasoningSteps: [
      'Measure the internal angle separating the two arrows in each circular dial:',
      'Figure A: 90° angle between Up and Right.',
      'Figure B: 90° angle between Right and Down.',
      'Figure D: 90° angle between Down and Left.',
      'Figure C: 180° angle (arrows point directly away from each other).',
      'Figure C is the only configuration that does not maintain perpendicular 90° separation.',
    ],
    explanation:
      'In Figures A, B, and D, the pair of arrows forms a right angle (90°). In Figure C, the arrows are opposite and collinear (180°), violating the invariant.',
    commonMistake:
      'Looking at absolute pointing directions rather than the relative angle between the two arrows.',
    accessibilityDescription:
      'Four dials with two arrows each: three dials have perpendicular 90-degree arrows, one has opposite 180-degree arrows.',
    reviewStatus: 'approved',
  },

  // =========================================================================
  // CATEGORY 4: VISUAL ANALOGIES (4 QUESTIONS: A -> B :: C -> ?)
  // =========================================================================

  // Question 17 (Introductory): Analogy — Fill Inversion (Solid -> Hollow :: Solid -> Hollow)
  {
    id: 'abs-ana-01',
    category: 'analogies',
    difficulty: 'introductory',
    figureType: 'analogy',
    prompt: 'Figure A is to Figure B as Figure C is to which option?',
    intendedRule: 'The shape remains identical while the fill inverts from solid blue to hollow with dark outline.',
    ruleParameters: {
      fill: 'Inversion from solid blue to hollow white',
    },
    diagram: {
      type: 'analogy',
      data: {
        sourceA: {
          elements: [
            { type: 'rect', x: 22, y: 22, width: 56, height: 56, stroke: '#2453FF', strokeWidth: 3, fill: '#2453FF' },
          ],
        },
        targetB: {
          elements: [
            { type: 'rect', x: 22, y: 22, width: 56, height: 56, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        sourceC: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#2453FF', strokeWidth: 3, fill: '#2453FF' },
          ],
        },
        targetD: { isTarget: true, elements: [] },
      },
    },
    options: [
      // Option A: Hollow Circle -> Correct!
      {
        id: 'A',
        label: 'Hollow circle with dark outline',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Hollow circle with dark boundary',
      },
      // Option B: Solid Blue Circle -> Unchanged
      {
        id: 'B',
        label: 'Solid blue circle',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#2453FF', strokeWidth: 3, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Unchanged solid blue circle',
      },
      // Option C: Hollow Square -> Morphed shape
      {
        id: 'C',
        label: 'Hollow square',
        figure: {
          elements: [
            { type: 'rect', x: 22, y: 22, width: 56, height: 56, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Hollow square',
      },
      // Option D: Hollow Triangle -> Wrong shape
      {
        id: 'D',
        label: 'Hollow triangle',
        figure: {
          elements: [
            { type: 'polygon', points: '50,22 78,75 22,75', stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Hollow triangle',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Identify transformation from A to B: A is a solid blue square; B is the same square with hollow fill and dark outline.',
      'The rule is: Retain geometry, invert fill from solid blue to hollow white.',
      'Apply transformation to Figure C (solid blue circle): It must become a hollow circle of identical radius with dark outline.',
      'Option A matches this result.',
    ],
    explanation:
      'Figure A becomes Figure B by inverting from solid blue fill to hollow white fill while preserving geometry. Applying this same inversion to the circle in Figure C produces a hollow circle (Option A).',
    commonMistake:
      'Reverting back to the square shape from the first pair (Option C).',
    accessibilityDescription:
      'Visual analogy where a solid shape becomes hollow.',
    reviewStatus: 'approved',
  },

  // Question 18 (Intermediate): Analogy — 90° Clockwise Rotation + Center Dot Addition
  {
    id: 'abs-ana-02',
    category: 'analogies',
    difficulty: 'intermediate',
    figureType: 'analogy',
    prompt: 'Figure A is to Figure B as Figure C is to which option?',
    intendedRule: 'The figure rotates 90° clockwise AND gains a central blue dot.',
    ruleParameters: {
      orientation: '90° clockwise rotation',
      count: 'Adds central blue dot',
    },
    diagram: {
      type: 'analogy',
      data: {
        sourceA: {
          elements: [
            // Vertical pill/capsule
            { type: 'rect', x: 38, y: 15, width: 24, height: 70, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        targetB: {
          elements: [
            // Horizontal pill + center dot
            { type: 'rect', x: 15, y: 38, width: 70, height: 24, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'dot', cx: 50, cy: 50, r: 5, fill: '#2453FF' },
          ],
        },
        sourceC: {
          elements: [
            // Triangle pointing UP
            { type: 'polygon', points: '50,18 82,78 18,78', stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        targetD: { isTarget: true, elements: [] },
      },
    },
    options: [
      // Option A: Triangle pointing RIGHT with center dot -> Correct!
      {
        id: 'A',
        label: 'Triangle rotated 90° clockwise (pointing Right) with center dot',
        figure: {
          elements: [
            { type: 'polygon', points: '82,50 22,18 22,82', stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'dot', cx: 42, cy: 50, r: 5, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Right-pointing triangle with center dot',
      },
      // Option B: Triangle pointing RIGHT without center dot -> Forgot dot addition
      {
        id: 'B',
        label: 'Triangle pointing Right without dot',
        figure: {
          elements: [
            { type: 'polygon', points: '82,50 22,18 22,82', stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Right-pointing triangle with no center dot',
      },
      // Option C: Triangle pointing DOWN with center dot -> Rotated 180° instead of 90°
      {
        id: 'C',
        label: 'Triangle pointing Down with center dot',
        figure: {
          elements: [
            { type: 'polygon', points: '50,82 18,22 82,22', stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'dot', cx: 50, cy: 42, r: 5, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Down-pointing triangle with center dot',
      },
      // Option D: Triangle pointing UP with center dot -> Forgot rotation
      {
        id: 'D',
        label: 'Triangle pointing Up with center dot',
        figure: {
          elements: [
            { type: 'polygon', points: '50,18 82,78 18,78', stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'dot', cx: 50, cy: 56, r: 5, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Up-pointing triangle with center dot',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Transformation from A to B has two parts:',
      '1. Rotation: Vertical pill rotates 90° clockwise into horizontal position.',
      '2. Feature addition: A blue dot is added in the center.',
      'Apply both transformations to Figure C (Up-pointing triangle):',
      '1. Rotating 90° clockwise makes it point horizontally to the RIGHT.',
      '2. Adding the central blue dot completes the figure.',
      'Option A satisfies both parts.',
    ],
    explanation:
      'The transformation rule involves rotating the shape 90° clockwise and inserting a central blue dot. A triangle rotated 90° clockwise points right, and with the center dot, forms Option A.',
    commonMistake:
      'Rotating correctly but failing to add the dot (Option B), or adding the dot but forgetting to rotate (Option D).',
    accessibilityDescription:
      'Visual analogy involving simultaneous 90-degree clockwise rotation and center-dot addition.',
    reviewStatus: 'approved',
  },

  // Question 19 (Intermediate): Analogy — Element Subtraction (Outer Shell Stripping)
  {
    id: 'abs-ana-03',
    category: 'analogies',
    difficulty: 'intermediate',
    figureType: 'analogy',
    prompt: 'Figure A is to Figure B as Figure C is to which option?',
    intendedRule: 'The outer concentric shell is removed, isolating the inner nested core shape.',
    ruleParameters: {
      shape: 'Removal of outer boundary layer; inner shape preserved',
    },
    diagram: {
      type: 'analogy',
      data: {
        sourceA: {
          elements: [
            // Outer Square enclosing inner Circle
            { type: 'rect', x: 18, y: 18, width: 64, height: 64, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'circle', cx: 50, cy: 50, r: 18, stroke: '#2453FF', strokeWidth: 3, fill: '#EEF4FF' },
          ],
        },
        targetB: {
          elements: [
            // Inner Circle isolated
            { type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#2453FF', strokeWidth: 3, fill: '#EEF4FF' },
          ],
        },
        sourceC: {
          elements: [
            // Outer Circle enclosing inner Triangle
            { type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'polygon', points: '50,32 68,68 32,68', stroke: '#2453FF', strokeWidth: 3, fill: '#EEF4FF' },
          ],
        },
        targetD: { isTarget: true, elements: [] },
      },
    },
    options: [
      // Option A: Isolated Triangle -> Correct!
      {
        id: 'A',
        label: 'Isolated blue-tinted triangle',
        figure: {
          elements: [
            { type: 'polygon', points: '50,22 78,75 22,75', stroke: '#2453FF', strokeWidth: 3, fill: '#EEF4FF' },
          ],
        },
        accessibilityLabel: 'Single blue-tinted triangle with stroke',
      },
      // Option B: Isolated Circle -> Retained wrong shape
      {
        id: 'B',
        label: 'Isolated circle',
        figure: {
          elements: [
            { type: 'circle', cx: 50, cy: 50, r: 28, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Single circle with dark stroke',
      },
      // Option C: Triangle enclosing circle -> Added shape
      {
        id: 'C',
        label: 'Triangle enclosing circle',
        figure: {
          elements: [
            { type: 'polygon', points: '50,22 78,75 22,75', stroke: '#07152F', strokeWidth: 3, fill: '#EEF4FF' },
            { type: 'circle', cx: 50, cy: 56, r: 12, stroke: '#07152F', strokeWidth: 2, fill: '#FFFFFF' },
          ],
        },
        accessibilityLabel: 'Triangle enclosing a smaller circle',
      },
      // Option D: Square enclosing triangle -> Replaced outer shell
      {
        id: 'D',
        label: 'Square enclosing triangle',
        figure: {
          elements: [
            { type: 'rect', x: 18, y: 18, width: 64, height: 64, stroke: '#07152F', strokeWidth: 3, fill: '#FFFFFF' },
            { type: 'polygon', points: '50,32 68,68 32,68', stroke: '#2453FF', strokeWidth: 3, fill: '#EEF4FF' },
          ],
        },
        accessibilityLabel: 'Square enclosing an inner triangle',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'In the first pair (A → B), Figure A consists of an outer square and an inner circle. Figure B contains only the inner circle.',
      'The transformation rule: Remove the outer enclosing container, keeping only the inner nested element.',
      'Figure C consists of an outer circle enclosing an inner blue triangle.',
      'Applying the rule: Discard the outer circle, leaving the isolated blue triangle.',
      'Option A is the isolated triangle.',
    ],
    explanation:
      'The rule strips away the outer container shape and retains the inner core. Removing the outer circle from Figure C leaves the inner triangle (Option A).',
    commonMistake:
      'Confusing the container with the content and selecting the outer circle (Option B).',
    accessibilityDescription:
      'A nested shape analogy where the external container is stripped to isolate the inner shape.',
    reviewStatus: 'approved',
  },

  // Question 20 (Challenging): Analogy — Horizontal Mirror Reflection + Element Inversion
  {
    id: 'abs-ana-04',
    category: 'analogies',
    difficulty: 'advanced',
    figureType: 'analogy',
    prompt: 'Figure A is to Figure B as Figure C is to which option?',
    intendedRule: 'The figure is reflected across the horizontal midline (vertical flip) and the position of the solid marker is inverted from outer to inner.',
    ruleParameters: {
      symmetry: 'Vertical flip (reflection across X axis)',
      position: 'Dot shifts from outside to inside boundary',
    },
    diagram: {
      type: 'analogy',
      data: {
        sourceA: {
          elements: [
            // Upward pointing arc / cup + dot outside on top
            { type: 'polygon', points: '25,35 50,65 75,35', stroke: '#07152F', strokeWidth: 3.5, fill: 'none' },
            { type: 'dot', cx: 50, cy: 22, r: 5, fill: '#2453FF' },
          ],
        },
        targetB: {
          elements: [
            // Downward pointing arc / cap + dot inside below
            { type: 'polygon', points: '25,65 50,35 75,65', stroke: '#07152F', strokeWidth: 3.5, fill: 'none' },
            { type: 'dot', cx: 50, cy: 50, r: 5, fill: '#2453FF' },
          ],
        },
        sourceC: {
          elements: [
            // Leftward pointing wedge + dot outside on left
            { type: 'polygon', points: '35,25 65,50 35,75', stroke: '#07152F', strokeWidth: 3.5, fill: 'none' },
            { type: 'dot', cx: 22, cy: 50, r: 5, fill: '#2453FF' },
          ],
        },
        targetD: { isTarget: true, elements: [] },
      },
    },
    options: [
      // Option A: Rightward pointing wedge + dot inside -> Correct!
      {
        id: 'A',
        label: 'Reflected wedge with blue dot inside its interior angle',
        figure: {
          elements: [
            { type: 'polygon', points: '65,25 35,50 65,75', stroke: '#07152F', strokeWidth: 3.5, fill: 'none' },
            { type: 'dot', cx: 50, cy: 50, r: 5, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Reflected chevron with dot inside its nook',
      },
      // Option B: Reflected wedge with dot outside -> Failed dot inversion
      {
        id: 'B',
        label: 'Reflected wedge with dot outside',
        figure: {
          elements: [
            { type: 'polygon', points: '65,25 35,50 65,75', stroke: '#07152F', strokeWidth: 3.5, fill: 'none' },
            { type: 'dot', cx: 22, cy: 50, r: 5, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Reflected chevron with dot remaining outside',
      },
      // Option C: Unreflected wedge with dot inside -> Failed reflection
      {
        id: 'C',
        label: 'Unreflected wedge with dot inside',
        figure: {
          elements: [
            { type: 'polygon', points: '35,25 65,50 35,75', stroke: '#07152F', strokeWidth: 3.5, fill: 'none' },
            { type: 'dot', cx: 50, cy: 50, r: 5, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Original chevron with dot moved inside',
      },
      // Option D: Rotated 90 deg -> Used rotation instead of reflection
      {
        id: 'D',
        label: 'Wedge rotated vertically',
        figure: {
          elements: [
            { type: 'polygon', points: '25,65 50,35 75,65', stroke: '#07152F', strokeWidth: 3.5, fill: 'none' },
            { type: 'dot', cx: 50, cy: 50, r: 5, fill: '#2453FF' },
          ],
        },
        accessibilityLabel: 'Vertically oriented chevron',
      },
    ],
    correctOptionId: 'A',
    reasoningSteps: [
      'Analyze Pair 1: Figure A is a V-shaped chevron pointing down with a dot on its convex (exterior) side.',
      'Figure B inverts the chevron direction (flipped 180° / reflected) and moves the dot to its concave (interior) nook.',
      'The rule: Flip the chevron pointing direction and relocate the dot from the exterior side into the interior angle.',
      'Apply to Figure C: The chevron points right (vertex at 65,50) with dot on the exterior left.',
      'Reflecting it makes it point left (vertex at 35,50), and moving the dot into the interior places it at (50,50).',
      'Option A satisfies both geometric reflection and dot inversion.',
    ],
    explanation:
      'The transformation reflects the chevron across its axis of symmetry and relocates the dot from outside the apex into the inside corner. Applying this to Figure C yields Option A.',
    commonMistake:
      'Flipping the chevron but forgetting to move the dot from the outside to the inside nook (Option B).',
    accessibilityDescription:
      'An angular chevron and dot analogy involving reflection and interior/exterior relocation.',
    reviewStatus: 'approved',
  },
];
