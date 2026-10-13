import { Question } from '@/types/assessment';

export const ASSESSMENT_VERSION = '1.0.0';

export const ASSESSMENT_QUESTIONS: Question[] = [
  // ==========================================
  // NUMERICAL REASONING (Q1 - Q5)
  // ==========================================
  {
    id: 'num-01',
    category: 'numerical',
    difficulty: 'introductory',
    prompt: 'What number logically completes the sequence: 3, 7, 15, 31, 63, ?',
    options: [
      { id: 'A', label: '124' },
      { id: 'B', label: '127' },
      { id: 'C', label: '131' },
      { id: 'D', label: '135' },
    ],
    correctOptionId: 'B',
    explanation:
      'Each term is calculated by doubling the previous term and adding 1: (3×2)+1=7, (7×2)+1=15, (15×2)+1=31, (31×2)+1=63. Following this consistent rule, (63×2)+1 = 127. Alternatively, the successive differences double each step (+4, +8, +16, +32, +64), giving 63 + 64 = 127.',
    accessibilityDescription:
      'Number sequence starting at 3, followed by 7, 15, 31, 63, and a question mark.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'num-02',
    category: 'numerical',
    difficulty: 'introductory',
    prompt: 'Identify the next value in the alternating series: 4, 12, 8, 24, 20, 60, ?',
    options: [
      { id: 'A', label: '54' },
      { id: 'B', label: '56' },
      { id: 'C', label: '58' },
      { id: 'D', label: '180' },
    ],
    correctOptionId: 'B',
    explanation:
      'The sequence alternates between two arithmetic operations: multiplying by 3, then subtracting 4. (4 × 3 = 12; 12 - 4 = 8; 8 × 3 = 24; 24 - 4 = 20; 20 × 3 = 60). The next required step is subtracting 4: 60 - 4 = 56.',
    accessibilityDescription:
      'Alternating number sequence: 4, 12, 8, 24, 20, 60, followed by a missing value.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'num-03',
    category: 'numerical',
    difficulty: 'intermediate',
    prompt: 'Determine the missing number: 2, 5, 11, 20, 32, ?',
    options: [
      { id: 'A', label: '44' },
      { id: 'B', label: '46' },
      { id: 'C', label: '47' },
      { id: 'D', label: '49' },
    ],
    correctOptionId: 'C',
    explanation:
      'Examine the differences between consecutive terms: 5 - 2 = 3; 11 - 5 = 6; 20 - 11 = 9; 32 - 20 = 12. The differences form a sequence of multiples of 3 (+3, +6, +9, +12). The next difference is +15, so 32 + 15 = 47.',
    accessibilityDescription:
      'Number series with expanding increments: 2, 5, 11, 20, 32, and an unknown final term.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'num-04',
    category: 'numerical',
    difficulty: 'intermediate',
    prompt:
      'A function transforms inputs according to a uniform mathematical rule: (3 → 26), (4 → 63), (5 → 124). What is the output for 6?',
    options: [
      { id: 'A', label: '185' },
      { id: 'B', label: '215' },
      { id: 'C', label: '217' },
      { id: 'D', label: '242' },
    ],
    correctOptionId: 'B',
    explanation:
      'Each output corresponds to the cube of the input minus 1 (f(n) = n³ - 1): 3³ - 1 = 27 - 1 = 26; 4³ - 1 = 64 - 1 = 63; 5³ - 1 = 125 - 1 = 124. For input 6: 6³ - 1 = 216 - 1 = 215.',
    accessibilityDescription:
      'Input-output pairs demonstrating a cubic relationship: 3 to 26, 4 to 63, 5 to 124, asking for input 6.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'num-05',
    category: 'numerical',
    difficulty: 'advanced',
    prompt: 'Find the missing value in this interleaved sequence: 14, 2, 28, 6, 56, 18, 112, ?',
    options: [
      { id: 'A', label: '36' },
      { id: 'B', label: '54' },
      { id: 'C', label: '72' },
      { id: 'D', label: '224' },
    ],
    correctOptionId: 'B',
    explanation:
      'This sequence combines two independent streams: Odd positions (1st, 3rd, 5th, 7th) double each time: 14, 28, 56, 112. Even positions (2nd, 4th, 6th, 8th) triple each time: 2, 6, 18, ?. The 8th term requires tripling the 6th term: 18 × 3 = 54.',
    accessibilityDescription:
      'Eight-element interleaved sequence with two alternating rules: 14, 2, 28, 6, 56, 18, 112, and a blank.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },

  // ==========================================
  // LOGICAL REASONING (Q6 - Q10)
  // ==========================================
  {
    id: 'log-01',
    category: 'logical',
    difficulty: 'introductory',
    prompt:
      'Premise 1: All elements in Category A possess Attribute X.\nPremise 2: Item K does not possess Attribute X.\n\nWhich conclusion is logically guaranteed to be true?',
    options: [
      { id: 'A', label: 'Item K belongs to Category A.' },
      { id: 'B', label: 'Item K does not belong to Category A.' },
      { id: 'C', label: 'Category A has no elements.' },
      { id: 'D', label: 'Attribute X applies to all categories.' },
    ],
    correctOptionId: 'B',
    explanation:
      'By contraposition (Modus Tollens): If being in Category A requires possessing Attribute X, any item lacking Attribute X cannot be in Category A. Because Item K lacks Attribute X, it cannot belong to Category A.',
    accessibilityDescription:
      'Logical deduction prompt based on two premises about Category A and Attribute X.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'log-02',
    category: 'logical',
    difficulty: 'introductory',
    prompt:
      'Rule: If the pressure monitor triggers an alert, the relief vent opens immediately.\nObservation: The relief vent is currently closed.\n\nWhat can be deduced with absolute certainty?',
    options: [
      { id: 'A', label: 'The pressure monitor triggered an alert.' },
      { id: 'B', label: 'The pressure monitor did not trigger an alert.' },
      { id: 'C', label: 'The pressure monitor is malfunctioning.' },
      { id: 'D', label: 'The relief vent is scheduled to open.' },
    ],
    correctOptionId: 'B',
    explanation:
      'Under formal conditional logic (If P, then Q), observing "not Q" (relief vent closed) guarantees "not P" (the pressure monitor did not trigger an alert). Any other conclusion introduces unstated assumptions.',
    accessibilityDescription:
      'Conditional logic statement: If pressure alert triggers, relief vent opens. Observation: vent is closed.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'log-03',
    category: 'logical',
    difficulty: 'intermediate',
    prompt:
      'Five candidates (P, Q, R, S, T) finish an evaluation with strictly unique ranks:\n1. P ranks higher than Q.\n2. R ranks lower than S, but higher than P.\n3. T ranks immediately lower than Q.\n\nWhat is the exact ranking from highest to lowest?',
    options: [
      { id: 'A', label: 'S, P, R, Q, T' },
      { id: 'B', label: 'S, R, P, Q, T' },
      { id: 'C', label: 'R, S, P, T, Q' },
      { id: 'D', label: 'S, R, Q, P, T' },
    ],
    correctOptionId: 'B',
    explanation:
      'From condition 2, S > R > P. From condition 1, P > Q, establishing S > R > P > Q. From condition 3, T is immediately after Q, completing the unambiguous chain: S > R > P > Q > T.',
    accessibilityDescription:
      'Linear ordering puzzle containing three relative ranking constraints for candidates P, Q, R, S, T.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'log-04',
    category: 'logical',
    difficulty: 'intermediate',
    prompt:
      'A secure 3-digit code consists of distinct non-zero digits (D1, D2, D3) in strictly increasing order (D1 < D2 < D3). The sum of all three digits equals 7. What is the value of the middle digit D2?',
    options: [
      { id: 'A', label: '2' },
      { id: 'B', label: '3' },
      { id: 'C', label: '4' },
      { id: 'D', label: 'Cannot be determined' },
    ],
    correctOptionId: 'A',
    explanation:
      'The digits must be distinct positive integers. The smallest possible sum of three distinct positive integers is 1 + 2 + 3 = 6. The only combination of three distinct positive integers summing to 7 is 1 + 2 + 4 = 7. Arranged in strictly increasing order (1 < 2 < 4), the middle digit D2 is uniquely 2.',
    accessibilityDescription:
      'Deduction problem: 3 distinct positive digits sum to 7 in strictly increasing order. Find the middle digit.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'log-05',
    category: 'logical',
    difficulty: 'advanced',
    prompt:
      'Three specialists—Alpha, Beta, and Gamma—are examined. Exactly one always speaks the truth, while the other two always make false statements.\n- Alpha says: "Gamma makes false statements."\n- Beta says: "Alpha always speaks the truth."\n- Gamma says: "Beta makes false statements."\n\nWho is the sole truth-speaker?',
    options: [
      { id: 'A', label: 'Alpha' },
      { id: 'B', label: 'Beta' },
      { id: 'C', label: 'Gamma' },
      { id: 'D', label: 'None of them' },
    ],
    correctOptionId: 'C',
    explanation:
      'If Alpha were truthful, Beta’s statement ("Alpha speaks truth") would also be true, violating the condition of exactly one truth-speaker. If Beta were truthful, Alpha would also be truthful, creating the same contradiction. If Gamma is truthful, Gamma’s statement is true (Beta is false), Alpha’s statement is false (claiming Gamma is false when Gamma is truthful), and Beta’s statement is false. This fulfills all constraints, making Gamma the sole truth-speaker.',
    accessibilityDescription:
      'Classic Knights and Knaves constraint logic puzzle with three speakers and exactly one truth-teller.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },

  // ==========================================
  // ABSTRACT REASONING (Q11 - Q15) - SVG Puzzles
  // ==========================================
  {
    id: 'abs-01',
    category: 'abstract',
    difficulty: 'introductory',
    prompt:
      'Identify the visual element that completes the sequence based on the progression of concentric elements.',
    options: [
      {
        id: 'A',
        label: 'Outer square with 3 concentric rings and a central cross',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-01-opt-A' },
      },
      {
        id: 'B',
        label: 'Outer square with 4 concentric rings',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-01-opt-B' },
      },
      {
        id: 'C',
        label: 'Outer square with 5 concentric rings',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-01-opt-C' },
      },
      {
        id: 'D',
        label: 'Outer triangle with 4 concentric rings',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-01-opt-D' },
      },
    ],
    correctOptionId: 'B',
    explanation:
      'The sequence maintains a fixed outer square boundary while the number of concentric inner circles increases by exactly 1 in each successive frame (1 circle → 2 circles → 3 circles). Frame 4 must contain an outer square with 4 concentric inner circles.',
    visualAsset: { type: 'sequence_row', puzzleId: 'abs-01-stimulus' },
    accessibilityDescription:
      'A row of 3 frames showing a square with 1, 2, and 3 concentric circles, followed by a fourth missing frame.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'abs-02',
    category: 'abstract',
    difficulty: 'introductory',
    prompt:
      'Complete the 2×2 matrix by identifying the rule connecting the top row to the bottom row.',
    options: [
      {
        id: 'A',
        label: 'White hexagon containing solid indigo circle',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-02-opt-A' },
      },
      {
        id: 'B',
        label: 'Solid indigo hexagon containing white circle',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-02-opt-B' },
      },
      {
        id: 'C',
        label: 'Solid indigo hexagon containing white square',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-02-opt-C' },
      },
      {
        id: 'D',
        label: 'Solid indigo hexagon containing solid indigo square',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-02-opt-D' },
      },
    ],
    correctOptionId: 'C',
    explanation:
      'In the top row, the figure undergoes contrast inversion: the outer shape changes from hollow/white to solid indigo, while the inner shape changes from solid indigo to hollow/white. Applying this inversion rule to the bottom row (white hexagon with solid indigo square) produces a solid indigo hexagon with a white square.',
    visualAsset: { type: 'matrix_2x2', puzzleId: 'abs-02-stimulus' },
    accessibilityDescription:
      'A 2x2 matrix where row 1 inverts color fills of outer and inner geometric components.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'abs-03',
    category: 'abstract',
    difficulty: 'intermediate',
    prompt:
      'Determine the next frame in the series following the movement of the marker along the perimeter.',
    options: [
      {
        id: 'A',
        label: 'Octagon with marker at top (12 o’clock)',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-03-opt-A' },
      },
      {
        id: 'B',
        label: 'Octagon with marker at bottom-left (7:30)',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-03-opt-B' },
      },
      {
        id: 'C',
        label: 'Octagon with marker at left (9 o’clock)',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-03-opt-C' },
      },
      {
        id: 'D',
        label: 'Octagon with marker at right (3 o’clock)',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-03-opt-D' },
      },
    ],
    correctOptionId: 'C',
    explanation:
      'The marker dot advances clockwise around the vertices of the octagon by exactly 2 positions (90 degrees) each step: Frame 1 is at 12 o’clock (top), Frame 2 is at 3 o’clock (right), Frame 3 is at 6 o’clock (bottom). Moving another 90 degrees clockwise places the marker at 9 o’clock (left).',
    visualAsset: { type: 'sequence_row', puzzleId: 'abs-03-stimulus' },
    accessibilityDescription:
      'A sequence of octagons showing a dot rotating clockwise around the perimeter by 90 degrees in each step.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'abs-04',
    category: 'abstract',
    difficulty: 'intermediate',
    prompt:
      'Identify the missing cell in the 2×2 matrix governing polygon edges and intersecting lines.',
    options: [
      {
        id: 'A',
        label: 'Hexagon containing 3 horizontal lines',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-04-opt-A' },
      },
      {
        id: 'B',
        label: 'Hexagon containing 4 horizontal lines',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-04-opt-B' },
      },
      {
        id: 'C',
        label: 'Heptagon (7-sided) containing 4 horizontal lines',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-04-opt-C' },
      },
      {
        id: 'D',
        label: 'Pentagon containing 4 horizontal lines',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-04-opt-D' },
      },
    ],
    correctOptionId: 'B',
    explanation:
      'Across each row, the number of sides in the polygon increases by 1, and the number of horizontal intersecting lines increases by 1. Top row: 3 sides with 1 line → 4 sides with 2 lines. Bottom row: 5 sides (pentagon) with 3 lines → 6 sides (hexagon) with 4 lines.',
    visualAsset: { type: 'matrix_2x2', puzzleId: 'abs-04-stimulus' },
    accessibilityDescription:
      'A 2x2 matrix demonstrating concurrent increment in polygon sides and interior horizontal line count.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'abs-05',
    category: 'abstract',
    difficulty: 'advanced',
    prompt:
      'In this 3×3 pattern grid, the third column combines elements from the first two columns according to a logical cancellation rule (XOR). Which option completes the third row?',
    options: [
      {
        id: 'A',
        label: 'Grid with only a top-left to bottom-right diagonal',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-05-opt-A' },
      },
      {
        id: 'B',
        label: 'Grid with only a horizontal middle line',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-05-opt-B' },
      },
      {
        id: 'C',
        label: 'Grid with crossed diagonals forming an X with no middle line',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-05-opt-C' },
      },
      {
        id: 'D',
        label: 'Grid with crossed diagonals and a horizontal middle line',
        visualAsset: { type: 'single_diagram', puzzleId: 'abs-05-opt-D' },
      },
    ],
    correctOptionId: 'C',
    explanation:
      'Across each row, features that appear in only one cell are preserved, while features present in BOTH cells cancel each other out (exclusive OR / XOR logic). In Row 3, Cell 1 has a diagonal line and a horizontal middle line. Cell 2 has the opposite diagonal and a horizontal middle line. The horizontal middle line appears in both and is cancelled out, leaving the two crossed diagonals forming an X.',
    visualAsset: { type: 'matrix_3x3', puzzleId: 'abs-05-stimulus' },
    accessibilityDescription:
      'A 3x3 visual matrix demonstrating feature superposition with cancellation of common lines across rows.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },

  // ==========================================
  // SPATIAL REASONING (Q16 - Q20) - SVG Puzzles
  // ==========================================
  {
    id: 'spa-01',
    category: 'spatial',
    difficulty: 'introductory',
    prompt:
      'Which of the four options represents a valid rigid planar rotation of the reference figure (without reflection or flipping)?',
    options: [
      {
        id: 'A',
        label: 'Figure rotated 90° clockwise with congruent tip orientation',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-01-opt-A' },
      },
      {
        id: 'B',
        label: 'Mirrored figure with reversed tip chirality',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-01-opt-B' },
      },
      {
        id: 'C',
        label: 'Inverted figure with opposite aspect ratio',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-01-opt-C' },
      },
      {
        id: 'D',
        label: 'Reflected figure rotated 180°',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-01-opt-D' },
      },
    ],
    correctOptionId: 'A',
    explanation:
      'When an asymmetrical L-bracket is rotated 90 degrees clockwise in the 2D plane, its horizontal arm points down and its vertical stem points right, preserving the clockwise orientation of its terminal dot. Option A is a strict rotation; the other options are reflections that alter the figure’s chirality.',
    visualAsset: { type: 'single_diagram', puzzleId: 'spa-01-stimulus' },
    accessibilityDescription:
      'An asymmetrical geometric L-bracket with a marked endpoint to test planar 2D rotation without reflection.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'spa-02',
    category: 'spatial',
    difficulty: 'introductory',
    prompt:
      'Identify the exact reflection of the reference geometric glyph across the vertical reflection axis.',
    options: [
      {
        id: 'A',
        label: 'Unchanged translation without reflection',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-02-opt-A' },
      },
      {
        id: 'B',
        label: 'Correct lateral reflection across vertical axis',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-02-opt-B' },
      },
      {
        id: 'C',
        label: 'Vertical flip across horizontal axis',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-02-opt-C' },
      },
      {
        id: 'D',
        label: '180° rotation',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-02-opt-D' },
      },
    ],
    correctOptionId: 'B',
    explanation:
      'Reflection across a vertical axis reverses left and right coordinates while keeping vertical (up-down) coordinates unchanged. The triangular protrusion that pointed left now points right, while the top accent remains at the top. Option B correctly mirrors the glyph.',
    visualAsset: { type: 'single_diagram', puzzleId: 'spa-02-stimulus' },
    accessibilityDescription:
      'An asymmetrical polygon next to a dashed vertical mirror axis, asking for the correct reflection.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'spa-03',
    category: 'spatial',
    difficulty: 'intermediate',
    prompt:
      'Examine the unfolded net of a cube displaying six distinct symbols. Which of the following represents a valid 3D perspective view when the net is folded into a cube?',
    options: [
      {
        id: 'A',
        label: 'View showing Circle, Star, and Square simultaneously',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-03-opt-A' },
      },
      {
        id: 'B',
        label: 'View showing Cross, Triangle, and Diamond simultaneously',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-03-opt-B' },
      },
      {
        id: 'C',
        label: 'View showing Square, Diamond, and Star simultaneously',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-03-opt-C' },
      },
      {
        id: 'D',
        label: 'View showing Circle, Square, and Cross sharing a single vertex',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-03-opt-D' },
      },
    ],
    correctOptionId: 'D',
    explanation:
      'In the unfolded net: Square is opposite Diamond; Cross is opposite Triangle; Circle is opposite Star. Opposite faces can never be visible simultaneously in a single 3D view, eliminating A, B, and C. Circle, Square, and Cross are mutually adjacent faces sharing a common vertex, making D the uniquely valid perspective.',
    visualAsset: { type: 'single_diagram', puzzleId: 'spa-03-stimulus' },
    accessibilityDescription:
      'An unfolded cube net with six labeled geometric faces to test mental folding and adjacent faces.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'spa-04',
    category: 'spatial',
    difficulty: 'intermediate',
    prompt:
      'Two tokens move on a 4×4 grid. Token Blue moves 1 step East (right) each second. Token Purple moves 1 step North (up) each second. Tokens wrap around when leaving an edge. At t=0, Blue is at (row 1, col 2) and Purple is at (row 3, col 2). Where are both tokens at t=2?',
    options: [
      {
        id: 'A',
        label: 'Blue at (row 1, col 3); Purple at (row 2, col 2)',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-04-opt-A' },
      },
      {
        id: 'B',
        label: 'Blue at (row 1, col 4); Purple at (row 1, col 2)',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-04-opt-B' },
      },
      {
        id: 'C',
        label: 'Blue at (row 2, col 4); Purple at (row 2, col 2)',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-04-opt-C' },
      },
      {
        id: 'D',
        label: 'Blue at (row 1, col 2); Purple at (row 3, col 4)',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-04-opt-D' },
      },
    ],
    correctOptionId: 'B',
    explanation:
      'After 2 seconds: Token Blue moves East by 2 columns: column 2 + 2 = column 4 (staying in row 1). Token Purple moves North by 2 rows: row 3 - 2 = row 1 (staying in column 2). At t=2, Blue is at (row 1, col 4) and Purple is at (row 1, col 2).',
    visualAsset: { type: 'single_diagram', puzzleId: 'spa-04-stimulus' },
    accessibilityDescription:
      'A 4x4 coordinate grid tracking independent directional movement vectors of two distinct markers over time.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'spa-05',
    category: 'spatial',
    difficulty: 'advanced',
    prompt:
      'A solid 3D stepped staircase consists of unit cubes: Column 1 (left) is 3 cubes high, Column 2 (center) is 2 cubes high, and Column 3 (right) is 1 cube high, all aligned along a single line. Viewed from the Right side elevation (looking straight at Column 3), what 2D profile is seen?',
    options: [
      {
        id: 'A',
        label: 'A 2D column 1 unit wide and 1 unit high',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-05-opt-A' },
      },
      {
        id: 'B',
        label: 'A 2D column 1 unit wide and 3 units high',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-05-opt-B' },
      },
      {
        id: 'C',
        label: 'A stepped profile 3 units wide with heights 3, 2, and 1',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-05-opt-C' },
      },
      {
        id: 'D',
        label: 'A 2D rectangle 3 units wide and 3 units high',
        visualAsset: { type: 'single_diagram', puzzleId: 'spa-05-opt-D' },
      },
    ],
    correctOptionId: 'B',
    explanation:
      'When viewing the 3-column stepped structure along its primary axis from the right, the line of sight looks down the row of columns. The columns behind Column 3 (height 1) extend upward: Column 2 extends to height 2 and Column 1 extends to height 3. Looking directly along the depth axis, the silhouette is a single vertical column of width 1 whose maximum elevation reaches 3 units high.',
    visualAsset: { type: 'single_diagram', puzzleId: 'spa-05-stimulus' },
    accessibilityDescription:
      'An isometric 3D drawing of a 3-step block structure asking for the projected 2D orthographic right elevation profile.',
    version: ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
];
