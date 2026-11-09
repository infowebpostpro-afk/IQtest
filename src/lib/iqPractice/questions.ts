/**
 * IQ Practice Question Bank
 * 48 original questions: 12 per category, 4 per difficulty level
 */

import { Question } from './types';

export const QUESTIONS: Question[] = [
  // ==================================================================
  // NUMERICAL REASONING (12 questions)
  // ==================================================================

  // BEGINNER - 4 questions
  {
    id: 'num-b-001',
    category: 'numerical',
    difficulty: 'beginner',
    question: 'What number comes next in the sequence: 2, 6, 10, 14, ?',
    options: [
      { id: 'A', text: '16' },
      { id: 'B', text: '18' },
      { id: 'C', text: '20' },
      { id: 'D', text: '22' },
    ],
    correctAnswerId: 'B',
    hint1: 'Look at how much each number increases from the previous one.',
    hint2: 'The difference between consecutive numbers is always 4.',
    explanation: 'This is a simple arithmetic progression. Each number increases by 4: 2 → 6 (+4), 6 → 10 (+4), 10 → 14 (+4). Therefore, the next number is 14 + 4 = 18.',
    commonMistake: 'Some might think the pattern is doubling, but 2×2=4, not 6. Check consecutive differences first.',
  },
  {
    id: 'num-b-002',
    category: 'numerical',
    difficulty: 'beginner',
    question: 'What number is missing: 5, 10, ?, 20, 25',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '13' },
      { id: 'C', text: '15' },
      { id: 'D', text: '18' },
    ],
    correctAnswerId: 'C',
    hint1: 'This sequence increases by the same amount each time.',
    hint2: '5 to 10 is +5, and 20 to 25 is +5. What\'s between 10 and 20?',
    explanation: 'The sequence increases by 5 each time: 5 → 10 (+5), 10 → 15 (+5), 15 → 20 (+5), 20 → 25 (+5). The missing number is 15.',
  },
  {
    id: 'num-b-003',
    category: 'numerical',
    difficulty: 'beginner',
    question: 'Complete the pattern: 3, 9, 27, ?',
    options: [
      { id: 'A', text: '45' },
      { id: 'B', text: '54' },
      { id: 'C', text: '63' },
      { id: 'D', text: '81' },
    ],
    correctAnswerId: 'D',
    hint1: 'Each number is multiplied by the same factor.',
    hint2: '3 × 3 = 9, 9 × 3 = 27. What is 27 × 3?',
    explanation: 'This is a geometric progression where each term is multiplied by 3: 3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81. The next number is 81.',
  },
  {
    id: 'num-b-004',
    category: 'numerical',
    difficulty: 'beginner',
    question: 'What number completes the series: 1, 4, 9, 16, ?',
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '21' },
      { id: 'C', text: '24' },
      { id: 'D', text: '25' },
    ],
    correctAnswerId: 'D',
    hint1: 'These are perfect squares of consecutive integers.',
    hint2: '1² = 1, 2² = 4, 3² = 9, 4² = 16. What is 5²?',
    explanation: 'The sequence consists of perfect squares: 1² = 1, 2² = 4, 3² = 9, 4² = 16. The next term is 5² = 25.',
  },

  // INTERMEDIATE - 4 questions
  {
    id: 'num-i-001',
    category: 'numerical',
    difficulty: 'intermediate',
    question: 'What number comes next: 3, 7, 15, 31, ?',
    options: [
      { id: 'A', text: '47' },
      { id: 'B', text: '59' },
      { id: 'C', text: '63' },
      { id: 'D', text: '65' },
    ],
    correctAnswerId: 'C',
    hint1: 'The rule involves multiplying and adding, not just addition.',
    hint2: 'Each number is doubled, then 1 is added: (3×2)+1=7, (7×2)+1=15.',
    explanation: 'The pattern is: multiply by 2, then add 1. 3 × 2 + 1 = 7, 7 × 2 + 1 = 15, 15 × 2 + 1 = 31. Therefore, 31 × 2 + 1 = 63.',
  },
  {
    id: 'num-i-002',
    category: 'numerical',
    difficulty: 'intermediate',
    question: 'Find the missing number: 2, 5, 11, 23, ?',
    options: [
      { id: 'A', text: '35' },
      { id: 'B', text: '41' },
      { id: 'C', text: '47' },
      { id: 'D', text: '53' },
    ],
    correctAnswerId: 'C',
    hint1: 'Look at the differences between consecutive numbers.',
    hint2: 'The differences themselves double: 3, 6, 12. What\'s the next difference?',
    explanation: 'Calculate the differences: 5-2=3, 11-5=6, 23-11=12. The differences double each time (3, 6, 12). The next difference is 24, so 23 + 24 = 47.',
  },
  {
    id: 'num-i-003',
    category: 'numerical',
    difficulty: 'intermediate',
    question: 'What is the next number: 1, 1, 2, 3, 5, 8, ?',
    options: [
      { id: 'A', text: '11' },
      { id: 'B', text: '12' },
      { id: 'C', text: '13' },
      { id: 'D', text: '15' },
    ],
    correctAnswerId: 'C',
    hint1: 'Each number is the sum of the two previous numbers.',
    hint2: '3 + 5 = 8. What is 5 + 8?',
    explanation: 'This is the Fibonacci sequence where each term is the sum of the two preceding terms: 1+1=2, 1+2=3, 2+3=5, 3+5=8. The next term is 5 + 8 = 13.',
  },
  {
    id: 'num-i-004',
    category: 'numerical',
    difficulty: 'intermediate',
    question: 'Complete the pattern: 4, 9, 25, 49, ?',
    options: [
      { id: 'A', text: '64' },
      { id: 'B', text: '81' },
      { id: 'C', text: '100' },
      { id: 'D', text: '121' },
    ],
    correctAnswerId: 'D',
    hint1: 'These are squares of odd numbers, but not consecutive.',
    hint2: '2²=4, 3²=9, 5²=25, 7²=49. Notice the base numbers: 2, 3, 5, 7.',
    explanation: 'The pattern is squares of prime numbers: 2² = 4, 3² = 9, 5² = 25, 7² = 49. The next prime is 11, so 11² = 121.',
  },

  // CHALLENGING - 4 questions
  {
    id: 'num-c-001',
    category: 'numerical',
    difficulty: 'challenging',
    question: 'What number comes next: 2, 12, 36, 80, ?',
    options: [
      { id: 'A', text: '120' },
      { id: 'B', text: '144' },
      { id: 'C', text: '150' },
      { id: 'D', text: '180' },
    ],
    correctAnswerId: 'C',
    hint1: 'Try relating each number to its position in the sequence.',
    hint2: 'Position 1: 1×1×2=2, Position 2: 2×2×3=12, Position 3: 3×3×4=36.',
    explanation: 'Each term equals: position × position × (position + 1). For position 1: 1×1×2 = 2. Position 2: 2×2×3 = 12. Position 3: 3×3×4 = 36. Position 4: 4×4×5 = 80. Position 5: 5×5×6 = 150.',
  },
  {
    id: 'num-c-002',
    category: 'numerical',
    difficulty: 'challenging',
    question: 'Find the missing number: 1, 4, 27, 256, ?',
    options: [
      { id: 'A', text: '625' },
      { id: 'B', text: '1024' },
      { id: 'C', text: '3125' },
      { id: 'D', text: '4096' },
    ],
    correctAnswerId: 'C',
    hint1: 'Each number is a power related to its position.',
    hint2: '1¹ = 1, 2² = 4, 3³ = 27, 4⁴ = 256. What is 5⁵?',
    explanation: 'The pattern is n raised to the power of n: 1¹ = 1, 2² = 4, 3³ = 27, 4⁴ = 256. The next term is 5⁵ = 3125.',
  },
  {
    id: 'num-c-003',
    category: 'numerical',
    difficulty: 'challenging',
    question: 'What number completes: 3, 8, 18, 38, ?',
    options: [
      { id: 'A', text: '58' },
      { id: 'B', text: '68' },
      { id: 'C', text: '78' },
      { id: 'D', text: '88' },
    ],
    correctAnswerId: 'C',
    hint1: 'The relationship between consecutive terms involves multiplication and addition.',
    hint2: '3×2+2=8, 8×2+2=18, 18×2+2=38. Apply the same rule to 38.',
    explanation: 'The rule is: multiply by 2, then add 2. 3 × 2 + 2 = 8, 8 × 2 + 2 = 18, 18 × 2 + 2 = 38. Therefore, 38 × 2 + 2 = 78.',
  },
  {
    id: 'num-c-004',
    category: 'numerical',
    difficulty: 'challenging',
    question: 'What is the next number: 1, 8, 27, 64, 125, ?',
    options: [
      { id: 'A', text: '196' },
      { id: 'B', text: '216' },
      { id: 'C', text: '256' },
      { id: 'D', text: '343' },
    ],
    correctAnswerId: 'B',
    hint1: 'These are cubes of consecutive integers.',
    hint2: '1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125. What is 6³?',
    explanation: 'The sequence consists of cubes: 1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125. The next term is 6³ = 216.',
  },

  // ==================================================================
  // LOGICAL REASONING (12 questions)
  // ==================================================================

  // BEGINNER - 4 questions
  {
    id: 'log-b-001',
    category: 'logical',
    difficulty: 'beginner',
    question: 'If all roses are flowers, and some flowers are red, which statement must be true?',
    options: [
      { id: 'A', text: 'All roses are red' },
      { id: 'B', text: 'Some roses are red' },
      { id: 'C', text: 'Some red things are roses' },
      { id: 'D', text: 'No definite conclusion about roses and redness can be drawn' },
    ],
    correctAnswerId: 'D',
    hint1: 'Think carefully about what "some" means in logic.',
    hint2: 'The second statement only says "some flowers are red" - it doesn\'t specify which flowers.',
    explanation: 'We know all roses are flowers, and some flowers are red. However, we don\'t know if the red flowers include any roses. The red flowers could be entirely different from roses. Therefore, no definite conclusion about roses being red can be drawn.',
    commonMistake: 'Many assume "some flowers are red" means roses might be red, but this is not logically certain.',
  },
  {
    id: 'log-b-002',
    category: 'logical',
    difficulty: 'beginner',
    question: 'If X is taller than Y, and Y is taller than Z, which must be true?',
    options: [
      { id: 'A', text: 'X is the tallest' },
      { id: 'B', text: 'Z is the shortest' },
      { id: 'C', text: 'X is taller than Z' },
      { id: 'D', text: 'All of the above' },
    ],
    correctAnswerId: 'D',
    hint1: 'Use the transitive property of ordering.',
    hint2: 'If X > Y and Y > Z, then by transitivity, X > Z. What does this tell us about heights?',
    explanation: 'From X > Y and Y > Z, we can conclude X > Z by transitivity. This means X is taller than Z, making X the tallest and Z the shortest. Therefore, all statements A, B, and C are true.',
  },
  {
    id: 'log-b-003',
    category: 'logical',
    difficulty: 'beginner',
    question: 'If it rains, then the ground gets wet. The ground is wet. What can you conclude?',
    options: [
      { id: 'A', text: 'It rained' },
      { id: 'B', text: 'It might have rained, but we cannot be certain' },
      { id: 'C', text: 'It did not rain' },
      { id: 'D', text: 'Someone poured water on the ground' },
    ],
    correctAnswerId: 'B',
    hint1: 'This is about the direction of logical implication.',
    hint2: '"If A then B" does not mean "If B then A". The ground could be wet for other reasons.',
    explanation: 'The statement "If it rains, then the ground gets wet" means rain is sufficient for wet ground, but not necessary. The ground could be wet from sprinklers, a spilled drink, or other causes. Therefore, we cannot conclude it rained just because the ground is wet.',
    commonMistake: 'This is the formal logical fallacy of affirming the consequent.',
  },
  {
    id: 'log-b-004',
    category: 'logical',
    difficulty: 'beginner',
    question: 'All cats are mammals. Fluffy is a cat. What must be true?',
    options: [
      { id: 'A', text: 'Fluffy is a mammal' },
      { id: 'B', text: 'All mammals are cats' },
      { id: 'C', text: 'Fluffy might not be a mammal' },
      { id: 'D', text: 'Fluffy is the only cat' },
    ],
    correctAnswerId: 'A',
    hint1: 'This uses the basic syllogism form.',
    hint2: 'If all members of group A are in group B, and X is in group A, then X must be in group B.',
    explanation: 'This is a valid categorical syllogism: All cats are mammals (major premise), Fluffy is a cat (minor premise). Therefore, Fluffy is a mammal (conclusion). This follows directly from the given premises.',
  },

  // INTERMEDIATE - 4 questions
  {
    id: 'log-i-001',
    category: 'logical',
    difficulty: 'intermediate',
    question: 'If either A or B is true, but not both, and A is false, what is B?',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' },
      { id: 'C', text: 'Cannot be determined' },
      { id: 'D', text: 'Both true and false' },
    ],
    correctAnswerId: 'A',
    hint1: 'This is an exclusive OR (XOR) operation.',
    hint2: 'XOR means exactly one of the two is true. If A is false, B must be true.',
    explanation: 'The statement "either A or B is true, but not both" describes exclusive OR (XOR). In XOR, exactly one of the two inputs must be true. Since A is false, B must be true to satisfy the condition.',
  },
  {
    id: 'log-i-002',
    category: 'logical',
    difficulty: 'intermediate',
    question: 'In a race, Alice finished before Bob. Bob finished before Carol. Dave finished after Carol. Who finished last?',
    options: [
      { id: 'A', text: 'Alice' },
      { id: 'B', text: 'Bob' },
      { id: 'C', text: 'Carol' },
      { id: 'D', text: 'Dave' },
    ],
    correctAnswerId: 'D',
    hint1: 'Chain the relationships together.',
    hint2: 'Alice < Bob < Carol < Dave (where < means "finished before").',
    explanation: 'Chaining the order: Alice finished before Bob (Alice < Bob), Bob before Carol (Bob < Carol), and Dave after Carol (Carol < Dave). The full order is Alice, Bob, Carol, Dave. Dave finished last.',
  },
  {
    id: 'log-i-003',
    category: 'logical',
    difficulty: 'intermediate',
    question: 'If "All P are Q" is true and "No Q are R" is true, which must be true?',
    options: [
      { id: 'A', text: 'All P are R' },
      { id: 'B', text: 'No P are R' },
      { id: 'C', text: 'Some P are R' },
      { id: 'D', text: 'Some P are not R' },
    ],
    correctAnswerId: 'B',
    hint1: 'Draw or imagine a Venn diagram.',
    hint2: 'If all P are inside Q, and Q has no overlap with R, then P cannot overlap with R.',
    explanation: 'All P are Q means the circle for P is entirely inside Q. No Q are R means Q and R have no overlap. Since P is inside Q and Q doesn\'t touch R, P cannot overlap with R. Therefore, no P are R.',
  },
  {
    id: 'log-i-004',
    category: 'logical',
    difficulty: 'intermediate',
    question: 'If the statement "All birds can fly" is false, which must be true?',
    options: [
      { id: 'A', text: 'No birds can fly' },
      { id: 'B', text: 'Some birds cannot fly' },
      { id: 'C', text: 'All birds cannot fly' },
      { id: 'D', text: 'Some birds can fly' },
    ],
    correctAnswerId: 'B',
    hint1: 'The negation of "all are" is "some are not".',
    hint2: 'To falsify "all X are Y", you only need one counterexample where X is not Y.',
    explanation: 'The logical negation of "All birds can fly" is "Some birds cannot fly" (or equivalently, "Not all birds can fly"). Finding even one flightless bird (like a penguin or ostrich) falsifies the universal claim. We don\'t need to prove NO birds can fly.',
  },

  // CHALLENGING - 4 questions
  {
    id: 'log-c-001',
    category: 'logical',
    difficulty: 'challenging',
    question: 'If A implies B, and B implies C, and C is false, what is A?',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' },
      { id: 'C', text: 'Cannot be determined' },
      { id: 'D', text: 'Both true and false' },
    ],
    correctAnswerId: 'B',
    hint1: 'This uses Modus Tollens (denying the consequent).',
    hint2: 'If A → B → C and C is false, then B must be false (by Modus Tollens on B → C). What about A?',
    explanation: 'We have A → B and B → C. Since C is false, B must be false (if B were true, C would be true). Since B is false and A → B, A must also be false (by Modus Tollens). Therefore, A is false.',
  },
  {
    id: 'log-c-002',
    category: 'logical',
    difficulty: 'challenging',
    question: 'Five people A, B, C, D, E sit in a row. A sits next to B. C sits at an end. D sits between A and E. Who sits in the middle?',
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'B' },
      { id: 'C', text: 'D' },
      { id: 'D', text: 'E' },
    ],
    correctAnswerId: 'C',
    hint1: 'Try different arrangements that satisfy all conditions.',
    hint2: 'Since C is at an end, we have C _ _ _ _. D is between A and E, so A-D-E or E-D-A. A and B are adjacent.',
    explanation: 'Position the row from left to right. C is at an end: C _ _ _ _. D must be between A and E, so the arrangement must include A-D-E or E-D-E. Given A must be next to B, the only valid arrangement is C-B-A-D-E (or its mirror E-D-A-B-C). In either case, D sits in the middle (position 3 of 5).',
  },
  {
    id: 'log-c-003',
    category: 'logical',
    difficulty: 'challenging',
    question: 'If "Some X are Y" and "All Y are Z" are both true, which must be true?',
    options: [
      { id: 'A', text: 'Some X are Z' },
      { id: 'B', text: 'All X are Z' },
      { id: 'C', text: 'No X are Z' },
      { id: 'D', text: 'Some Z are X' },
    ],
    correctAnswerId: 'A',
    hint1: 'Use Venn diagram reasoning.',
    hint2: 'If some X are in Y, and all Y are in Z, then those X that are in Y must also be in Z.',
    explanation: 'Some X are Y means there is overlap between X and Y. All Y are Z means the entire Y circle is inside Z. The X that overlap with Y must therefore also be inside Z. Thus, some X are Z. We cannot conclude all X are Z (some X might not be in Y).',
  },
  {
    id: 'log-c-004',
    category: 'logical',
    difficulty: 'challenging',
    question: 'A person says "I am lying." Is this statement true or false?',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' },
      { id: 'C', text: 'Both true and false' },
      { id: 'D', text: 'Neither true nor false (paradox)' },
    ],
    correctAnswerId: 'D',
    hint1: 'Consider what happens if you assume it\'s true, then if you assume it\'s false.',
    hint2: 'If it\'s true, then the person is lying, which means the statement is false. If it\'s false, then they\'re not lying, so it\'s true.',
    explanation: 'This is the classic Liar Paradox. If the statement "I am lying" is true, then the person is indeed lying, which makes the statement false. If it\'s false, then the person is not lying, which makes the statement true. The statement creates a self-referential contradiction and cannot be consistently assigned a truth value—it\'s a paradox.',
  },

  // ==================================================================
  // ABSTRACT REASONING (12 questions)
  // ==================================================================

  // BEGINNER - 4 questions
  {
    id: 'abs-b-001',
    category: 'abstract',
    difficulty: 'beginner',
    question: 'In the sequence below, what shape comes next? Triangle, Square, Pentagon, ?',
    options: [
      { id: 'A', text: 'Hexagon' },
      { id: 'B', text: 'Circle' },
      { id: 'C', text: 'Octagon' },
      { id: 'D', text: 'Diamond' },
    ],
    correctAnswerId: 'A',
    hint1: 'Count the number of sides in each shape.',
    hint2: 'Triangle has 3 sides, Square has 4, Pentagon has 5. The number of sides increases by 1.',
    explanation: 'The pattern shows polygons with increasing numbers of sides: Triangle (3 sides), Square (4 sides), Pentagon (5 sides). The next shape should have 6 sides, which is a Hexagon.',
  },
  {
    id: 'abs-b-002',
    category: 'abstract',
    difficulty: 'beginner',
    question: 'Which shape completes the pattern: Circle, Circle with dot, Circle with two dots, ?',
    options: [
      { id: 'A', text: 'Circle with three dots' },
      { id: 'B', text: 'Circle with one dot' },
      { id: 'C', text: 'Empty circle' },
      { id: 'D', text: 'Circle with four dots' },
    ],
    correctAnswerId: 'A',
    hint1: 'Notice how the number of dots changes.',
    hint2: '0 dots, 1 dot, 2 dots. The number of dots increases by 1 each time.',
    explanation: 'The pattern adds one dot to the circle each time: 0 dots, 1 dot, 2 dots. The next step should have 3 dots inside the circle.',
  },
  {
    id: 'abs-b-003',
    category: 'abstract',
    difficulty: 'beginner',
    question: 'What comes next in the pattern: Up arrow, Right arrow, Down arrow, ?',
    options: [
      { id: 'A', text: 'Up arrow' },
      { id: 'B', text: 'Left arrow' },
      { id: 'C', text: 'Right arrow' },
      { id: 'D', text: 'Diagonal arrow' },
    ],
    correctAnswerId: 'B',
    hint1: 'The arrows are rotating in a specific direction.',
    hint2: 'Up → Right → Down is clockwise rotation. What follows Down clockwise?',
    explanation: 'The arrows rotate 90 degrees clockwise each time: Up → Right → Down. The next rotation brings us to Left arrow.',
  },
  {
    id: 'abs-b-004',
    category: 'abstract',
    difficulty: 'beginner',
    question: 'Which completes the sequence: Small, Medium, Large, ?',
    options: [
      { id: 'A', text: 'Small' },
      { id: 'B', text: 'Medium' },
      { id: 'C', text: 'Extra Large' },
      { id: 'D', text: 'Giant' },
    ],
    correctAnswerId: 'C',
    hint1: 'The size is increasing.',
    hint2: 'Small → Medium → Large. What size category comes after Large?',
    explanation: 'The pattern shows increasing size: Small, Medium, Large. The logical next size category is Extra Large (XL).',
  },

  // INTERMEDIATE - 4 questions
  {
    id: 'abs-i-001',
    category: 'abstract',
    difficulty: 'intermediate',
    question: 'In a 2x2 grid, top-left has 1 line, top-right has 2 lines, bottom-left has 3 lines. How many lines in bottom-right?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' },
    ],
    correctAnswerId: 'C',
    hint1: 'Look at how the number of lines changes across rows and columns.',
    hint2: 'Row 1: 1, 2 (increases by 1). Row 2: 3, ? (should also increase by 1).',
    explanation: 'In each row, the number of lines increases by 1 from left to right. Row 1: 1 → 2. Row 2: 3 → ? should be 4. Alternatively, columns also increase by 1: Column 1: 1 → 3, Column 2: 2 → 4.',
  },
  {
    id: 'abs-i-002',
    category: 'abstract',
    difficulty: 'intermediate',
    question: 'Pattern: Solid circle, Half-filled circle, Empty circle, ? What comes next?',
    options: [
      { id: 'A', text: 'Solid circle' },
      { id: 'B', text: 'Quarter-filled circle' },
      { id: 'C', text: 'Three-quarter filled circle' },
      { id: 'D', text: 'Striped circle' },
    ],
    correctAnswerId: 'A',
    hint1: 'This pattern cycles through fill levels.',
    hint2: 'Full → Half → Empty. The pattern decreases by half each time, then restarts.',
    explanation: 'The fill level decreases by half each step: Full (100%) → Half (50%) → Empty (0%). The pattern then cycles back to the beginning, so the next is Solid/Full circle again.',
  },
  {
    id: 'abs-i-003',
    category: 'abstract',
    difficulty: 'intermediate',
    question: 'Sequence: One shape, Two touching shapes, Three touching shapes, ?',
    options: [
      { id: 'A', text: 'One shape' },
      { id: 'B', text: 'Two shapes' },
      { id: 'C', text: 'Four touching shapes' },
      { id: 'D', text: 'Five shapes' },
    ],
    correctAnswerId: 'C',
    hint1: 'Count the number of shapes in each step.',
    hint2: '1 shape, 2 shapes, 3 shapes. The count increases by 1 each time.',
    explanation: 'The number of shapes increases by 1 each time: 1 → 2 → 3. The next step should have 4 shapes. The shapes are touching/connected.',
  },
  {
    id: 'abs-i-004',
    category: 'abstract',
    difficulty: 'intermediate',
    question: 'What shape pattern comes next: Diagonal line, Cross, X with circle, ?',
    options: [
      { id: 'A', text: 'Vertical line' },
      { id: 'B', text: 'X with square' },
      { id: 'C', text: 'Star' },
      { id: 'D', text: 'Diagonal line again' },
    ],
    correctAnswerId: 'A',
    hint1: 'The pattern alternates between simple and complex shapes.',
    hint2: 'Line (simple), Cross (complex), X with circle (complex with addition). Look at the rotation.',
    explanation: 'The shapes rotate and add elements: Diagonal line → Cross (two diagonal lines) → X with circle (adds circle). The pattern suggests alternating direction, returning to a vertical line which is the next rotational variant.',
  },

  // CHALLENGING - 4 questions
  {
    id: 'abs-c-001',
    category: 'abstract',
    difficulty: 'challenging',
    question: 'In a sequence, shapes alternate between triangle and square. Triangles increase in size, squares decrease. What comes after a large triangle?',
    options: [
      { id: 'A', text: 'Small square' },
      { id: 'B', text: 'Medium square' },
      { id: 'C', text: 'Larger triangle' },
      { id: 'D', text: 'Small triangle' },
    ],
    correctAnswerId: 'A',
    hint1: 'Track two separate patterns: shape type and size.',
    hint2: 'After triangle comes square. Squares get smaller, so after a large triangle comes the smallest square.',
    explanation: 'Two patterns run simultaneously: (1) Shape alternates Triangle-Square-Triangle-Square. (2) Triangle size increases, Square size decreases. After a large triangle, we need a square, and since squares decrease in size, it should be the smallest square.',
  },
  {
    id: 'abs-c-002',
    category: 'abstract',
    difficulty: 'challenging',
    question: 'Pattern: 1 dot, 4 dots in square, 9 dots in square, ?',
    options: [
      { id: 'A', text: '12 dots' },
      { id: 'B', text: '16 dots in square' },
      { id: 'C', text: '18 dots' },
      { id: 'D', text: '25 dots in square' },
    ],
    correctAnswerId: 'B',
    hint1: 'These are perfect square numbers.',
    hint2: '1 = 1², 4 = 2², 9 = 3². What is 4²?',
    explanation: 'The number of dots follows perfect squares: 1² = 1, 2² = 4, 3² = 9. The next is 4² = 16 dots arranged in a square grid.',
  },
  {
    id: 'abs-c-003',
    category: 'abstract',
    difficulty: 'challenging',
    question: 'Sequence: Shape with 1 side, shape with 2 sides (impossible), shape with 3 sides, shape with 4 sides. What comes next if the actual pattern skips the impossible shape?',
    options: [
      { id: 'A', text: 'Shape with 5 sides' },
      { id: 'B', text: 'Shape with 6 sides' },
      { id: 'C', text: 'Shape with 3 sides again' },
      { id: 'D', text: 'Circle' },
    ],
    correctAnswerId: 'A',
    hint1: 'Focus on the actual polygons shown.',
    hint2: 'Triangle (3), Square (4). The actual sequence counts polygon sides: 3, 4. Next is 5.',
    explanation: 'While the sequence description mentions 1 and 2 sides, polygons with 1 or 2 sides don\'t exist. The actual visible shapes are Triangle (3 sides) and Square (4 sides). The pattern increases by 1, so the next is a Pentagon with 5 sides.',
  },
  {
    id: 'abs-c-004',
    category: 'abstract',
    difficulty: 'challenging',
    question: 'In a 3x3 matrix, rows show rotation: 0°, 90°, 180°. Columns show adding a dot. What is in position (3,3)?',
    options: [
      { id: 'A', text: 'Shape rotated 270° with no dot' },
      { id: 'B', text: 'Shape rotated 270° with one dot' },
      { id: 'C', text: 'Shape rotated 180° with two dots' },
      { id: 'D', text: 'Shape rotated 90° with one dot' },
    ],
    correctAnswerId: 'B',
    hint1: 'Combine the row rule (rotation) and column rule (dots).',
    hint2: 'Row 3 means 180° rotation. Column 3 means one dot added. 180° is same as showing back.',
    explanation: 'Row 3 has 180° rotation (which appears as the original orientation flipped). Column 3 has one dot. Therefore, position (3,3) shows the shape rotated 180° with one dot. Since 180° shows the same as 0° rotation for symmetrical shapes, this is equivalent to showing the shape with one dot.',
  },

  // ==================================================================
  // SPATIAL REASONING (12 questions)
  // ==================================================================

  // BEGINNER - 4 questions
  {
    id: 'spa-b-001',
    category: 'spatial',
    difficulty: 'beginner',
    question: 'If a square is rotated 90 degrees clockwise, what does it look like?',
    options: [
      { id: 'A', text: 'A diamond shape' },
      { id: 'B', text: 'A rectangle' },
      { id: 'C', text: 'The same square' },
      { id: 'D', text: 'A triangle' },
    ],
    correctAnswerId: 'C',
    hint1: 'A square has 4 equal sides and 90-degree angles.',
    hint2: 'Rotating a square by 90 degrees doesn\'t change its appearance—it looks the same.',
    explanation: 'A square is rotationally symmetric. Rotating it by 90 degrees (a quarter turn) results in the exact same shape and orientation. A square looks identical at 0°, 90°, 180°, and 270° rotations.',
  },
  {
    id: 'spa-b-002',
    category: 'spatial',
    difficulty: 'beginner',
    question: 'If you fold a square piece of paper in half diagonally, what shape do you get?',
    options: [
      { id: 'A', text: 'Rectangle' },
      { id: 'B', text: 'Triangle' },
      { id: 'C', text: 'Smaller square' },
      { id: 'D', text: 'Diamond' },
    ],
    correctAnswerId: 'B',
    hint1: 'Imagine or visualize folding along the diagonal.',
    hint2: 'A diagonal fold creates two triangular halves that align perfectly.',
    explanation: 'Folding a square along its diagonal creates two congruent right triangles that align perfectly. The resulting shape is a triangle (specifically an isosceles right triangle) with the folded edge as the hypotenuse.',
  },
  {
    id: 'spa-b-003',
    category: 'spatial',
    difficulty: 'beginner',
    question: 'A rectangle has length 4 and width 2. If you rotate it 90 degrees, what are its new dimensions?',
    options: [
      { id: 'A', text: 'Length 4, width 2' },
      { id: 'B', text: 'Length 2, width 4' },
      { id: 'C', text: 'Length 4, width 4' },
      { id: 'D', text: 'Length 2, width 2' },
    ],
    correctAnswerId: 'B',
    hint1: 'Rotation swaps length and width.',
    hint2: 'The long side becomes the short side and vice versa after 90° rotation.',
    explanation: 'When a rectangle is rotated 90 degrees, its length and width swap. The original length (4) becomes the new width, and the original width (2) becomes the new length. The new dimensions are length 2, width 4.',
  },
  {
    id: 'spa-b-004',
    category: 'spatial',
    difficulty: 'beginner',
    question: 'How many right angles does a rectangle have?',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '8' },
    ],
    correctAnswerId: 'C',
    hint1: 'Look at each corner of a rectangle.',
    hint2: 'A rectangle has 4 corners, and each corner is a 90-degree right angle.',
    explanation: 'A rectangle is a quadrilateral with four interior angles. By definition, all four angles are right angles (90 degrees). Therefore, a rectangle has exactly 4 right angles.',
  },

  // INTERMEDIATE - 4 questions
  {
    id: 'spa-i-001',
    category: 'spatial',
    difficulty: 'intermediate',
    question: 'If a cube has a red face on top and a blue face on the front, which face is on the right?',
    options: [
      { id: 'A', text: 'Red' },
      { id: 'B', text: 'Blue' },
      { id: 'C', text: 'Green' },
      { id: 'D', text: 'Cannot be determined' },
    ],
    correctAnswerId: 'D',
    hint1: 'Think about the cube\'s orientation and available information.',
    hint2: 'We know two adjacent faces (top and front), but we don\'t know which color is on the right side.',
    explanation: 'A cube has 6 faces. Knowing that the top is red and front is blue tells us about two adjacent faces. However, without knowing the cube\'s color scheme or which colors are opposite each other, we cannot determine what color is on the right face. It could be any of the remaining 4 colors.',
  },
  {
    id: 'spa-i-002',
    category: 'spatial',
    difficulty: 'intermediate',
    question: 'A shape is reflected across a vertical line. If the original had a point in the top-left, where is it after reflection?',
    options: [
      { id: 'A', text: 'Top-left' },
      { id: 'B', text: 'Top-right' },
      { id: 'C', text: 'Bottom-left' },
      { id: 'D', text: 'Bottom-right' },
    ],
    correctAnswerId: 'B',
    hint1: 'Mirror reflection flips left and right positions.',
    hint2: 'In a vertical mirror, left becomes right and right becomes left.',
    explanation: 'A vertical mirror reflection flips the horizontal positions while keeping vertical positions the same. A point in the top-left moves to the top-right. The top position stays the same, but left becomes right.',
  },
  {
    id: 'spa-i-003',
    category: 'spatial',
    difficulty: 'intermediate',
    question: 'If you cut a square diagonally from corner to corner, how many pieces do you get?',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' },
    ],
    correctAnswerId: 'B',
    hint1: 'A single straight cut through a shape divides it.',
    hint2: 'One diagonal line passing through the square divides it into two regions.',
    explanation: 'A single straight cut (the diagonal) divides the square into exactly two pieces. These pieces are congruent right triangles. One cut always produces two pieces unless the cut doesn\'t actually pass through the shape.',
  },
  {
    id: 'spa-i-004',
    category: 'spatial',
    difficulty: 'intermediate',
    question: 'Which rotation is equivalent to a 270-degree clockwise rotation?',
    options: [
      { id: 'A', text: '90-degree clockwise' },
      { id: 'B', text: '90-degree counterclockwise' },
      { id: 'C', text: '180-degree rotation' },
      { id: 'D', text: '360-degree rotation' },
    ],
    correctAnswerId: 'B',
    hint1: 'Clockwise and counterclockwise rotations can add up to 360 degrees.',
    hint2: '270° clockwise is the same as going the other way to reach the same position.',
    explanation: 'Rotating 270 degrees clockwise is equivalent to rotating 90 degrees counterclockwise (360° - 270° = 90°). Both rotations bring the object to the same final orientation, just taking different paths to get there.',
  },

  // CHALLENGING - 4 questions
  {
    id: 'spa-c-001',
    category: 'spatial',
    difficulty: 'challenging',
    question: 'A cube net has 6 faces. When folded, which faces are opposite each other if face 1 is adjacent to faces 2, 3, 4, and 5?',
    options: [
      { id: 'A', text: 'Face 2' },
      { id: 'B', text: 'Face 3' },
      { id: 'C', text: 'Face 6' },
      { id: 'D', text: 'Cannot be determined' },
    ],
    correctAnswerId: 'C',
    hint1: 'A cube face has 4 adjacent faces and 1 opposite face.',
    hint2: 'If face 1 is adjacent to 4 different faces (2,3,4,5), the only remaining face must be opposite.',
    explanation: 'Each face of a cube is adjacent to exactly 4 other faces and opposite to exactly 1 face. Since face 1 is adjacent to faces 2, 3, 4, and 5 (all 4 of its adjacent faces), the only remaining face (face 6) must be the opposite face.',
  },
  {
    id: 'spa-c-002',
    category: 'spatial',
    difficulty: 'challenging',
    question: 'If a shape is rotated 90 degrees clockwise and then reflected across a vertical line, is this equivalent to which single transformation?',
    options: [
      { id: 'A', text: '90-degree counterclockwise rotation' },
      { id: 'B', text: '90-degree clockwise rotation' },
      { id: 'C', text: 'Reflection across a horizontal line' },
      { id: 'D', text: 'Reflection across a diagonal line' },
    ],
    correctAnswerId: 'C',
    hint1: 'Try this transformation on a simple shape like an asymmetric letter.',
    hint2: 'Test with "L": rotate 90° clockwise, then mirror vertically. Compare to other transformations.',
    explanation: 'The combination of a 90-degree clockwise rotation followed by a vertical reflection is equivalent to a single reflection across a horizontal line. You can verify this with any asymmetric shape—the final positions match both transformation sequences.',
  },
  {
    id: 'spa-c-003',
    category: 'spatial',
    difficulty: 'challenging',
    question: 'A rectangular prism has dimensions 2×3×4. What is the length of its space diagonal?',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '√29' },
      { id: 'C', text: '√31' },
      { id: 'D', text: '9' },
    ],
    correctAnswerId: 'B',
    hint1: 'Use the 3D Pythagorean theorem: d = √(l² + w² + h²)',
    hint2: 'Calculate: √(2² + 3² + 4²) = √(4 + 9 + 16)',
    explanation: 'Using the 3D Pythagorean theorem: d = √(l² + w² + h²) = √(2² + 3² + 4²) = √(4 + 9 + 16) = √29. Therefore, the space diagonal is √29.',
    commonMistake: 'Don\'t forget to square all three dimensions before adding under the square root.',
  },
  {
    id: 'spa-c-004',
    category: 'spatial',
    difficulty: 'challenging',
    question: 'If you rotate a shape 180 degrees, reflect it horizontally, then rotate 180 degrees again, what is the net effect?',
    options: [
      { id: 'A', text: 'No change (identity)' },
      { id: 'B', text: 'Horizontal reflection' },
      { id: 'C', text: 'Vertical reflection' },
      { id: 'D', text: '90-degree rotation' },
    ],
    correctAnswerId: 'B',
    hint1: 'Two 180° rotations cancel each other out.',
    hint2: 'The sequence simplifies to just a horizontal reflection.',
    explanation: 'Two 180-degree rotations cancel each other out (they are equivalent to doing nothing). The sequence simplifies to just a horizontal reflection. Therefore, the net effect is a horizontal reflection of the original shape.',
  },
];

export const validateQuestions = (): {
  isValid: boolean;
  errors: string[];
  summary: {
    total: number;
    byCategory: Record<string, number>;
    byDifficulty: Record<string, number>;
  };
} => {
  const errors: string[] = [];
  const byCategory: Record<string, number> = {
    numerical: 0,
    logical: 0,
    abstract: 0,
    spatial: 0,
  };
  const byDifficulty: Record<string, number> = {
    beginner: 0,
    intermediate: 0,
    challenging: 0,
  };

  QUESTIONS.forEach((q, index) => {
    // Check required fields
    if (!q.id) errors.push(`Question ${index}: Missing id`);
    if (!q.category) errors.push(`Question ${index}: Missing category`);
    if (!q.difficulty) errors.push(`Question ${index}: Missing difficulty`);
    if (!q.question) errors.push(`Question ${index}: Missing question text`);
    if (!q.options || q.options.length !== 4) {
      errors.push(`Question ${index}: Must have exactly 4 options`);
    }
    if (!q.correctAnswerId) errors.push(`Question ${index}: Missing correctAnswerId`);
    if (!q.hint1) errors.push(`Question ${index}: Missing hint1`);
    if (!q.hint2) errors.push(`Question ${index}: Missing hint2`);
    if (!q.explanation) errors.push(`Question ${index}: Missing explanation`);

    // Check that correctAnswerId exists in options
    if (q.correctAnswerId && q.options) {
      const optionExists = q.options.some((opt) => opt.id === q.correctAnswerId);
      if (!optionExists) {
        errors.push(`Question ${index}: correctAnswerId "${q.correctAnswerId}" not found in options`);
      }
    }

    // Count categories
    if (q.category) {
      byCategory[q.category] = (byCategory[q.category] || 0) + 1;
    }

    // Count difficulties
    if (q.difficulty) {
      byDifficulty[q.difficulty] = (byDifficulty[q.difficulty] || 0) + 1;
    }
  });

  // Check for duplicate IDs
  const ids = QUESTIONS.map((q) => q.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    errors.push(`Duplicate question IDs found`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    summary: {
      total: QUESTIONS.length,
      byCategory,
      byDifficulty,
    },
  };
};
