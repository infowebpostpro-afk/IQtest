import { Question } from '@/types/assessment';

export const LOGICAL_ASSESSMENT_VERSION = '1.0.0';

export interface LogicalQuestion extends Omit<Question, 'category'> {
  category: 'deductive' | 'conditional' | 'ordering' | 'inductive';
  reasoningSteps: string[];
  commonMistake: string;
  estimatedTimeSeconds: number;
}

export const LOGICAL_CATEGORY_LABELS: Record<'deductive' | 'conditional' | 'ordering' | 'inductive', string> = {
  deductive: 'Deductive Reasoning & Syllogisms',
  conditional: 'Conditional Logic',
  ordering: 'Ordering & Arrangement',
  inductive: 'Inductive Reasoning & Sequences',
};

export const LOGICAL_ASSESSMENT_QUESTIONS: LogicalQuestion[] = [
  // ==========================================
  // DEDUCTIVE REASONING AND SYLLOGISMS (6 Qs)
  // ==========================================
  {
    id: 'lr-ded-01',
    category: 'deductive',
    difficulty: 'introductory',
    prompt:
      'Statements:\n• All researchers in the robotics lab are computer scientists.\n• Every computer scientist holds security clearance.\n\nWhich conclusion must be true?',
    options: [
      { id: 'A', label: 'Every person who holds security clearance is a robotics researcher.' },
      { id: 'B', label: 'All researchers in the robotics lab hold security clearance.' },
      { id: 'C', label: 'Some researchers in the robotics lab do not hold security clearance.' },
      { id: 'D', label: 'No computer scientists work outside the robotics lab.' },
    ],
    correctOptionId: 'B',
    explanation:
      'By transitive deduction: Robotics Researchers ⊆ Computer Scientists ⊆ People with Security Clearance. Therefore, all researchers in the robotics lab must hold security clearance. Option A reverses the relationship; Option C contradicts the deduction; Option D is unsupported.',
    reasoningSteps: [
      'Premise 1 establishes: All Robotics Researchers are Computer Scientists (R ⊆ CS).',
      'Premise 2 establishes: All Computer Scientists have Security Clearance (CS ⊆ SC).',
      'By the transitive property of subset inclusion: R ⊆ SC (All Robotics Researchers have Security Clearance).',
      'Option B directly expresses this guaranteed deduction.',
    ],
    commonMistake:
      'Assuming subset relationships are reversible (believing that because all R are SC, all SC must be R).',
    estimatedTimeSeconds: 40,
    accessibilityDescription:
      'Deductive syllogism linking robotics researchers to computer scientists and security clearance.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ded-02',
    category: 'deductive',
    difficulty: 'introductory',
    prompt:
      'Statements:\n• No managers are eligible for overtime compensation.\n• Some members of the audit committee are managers.\n\nWhich conclusion must be true?',
    options: [
      { id: 'A', label: 'All members of the audit committee are eligible for overtime compensation.' },
      { id: 'B', label: 'Some members of the audit committee are not eligible for overtime compensation.' },
      { id: 'C', label: 'No members of the audit committee are eligible for overtime compensation.' },
      { id: 'D', label: 'All managers serve on the audit committee.' },
    ],
    correctOptionId: 'B',
    explanation:
      'Because some members of the audit committee are managers, and no managers receive overtime, those specific committee members who are managers cannot be eligible for overtime. Thus, some members of the audit committee are not eligible for overtime compensation.',
    reasoningSteps: [
      'Premise 2 confirms that an intersection exists between Audit Committee and Managers.',
      'Premise 1 states that the set of Managers has zero overlap with the set of Overtime Eligible people.',
      'Therefore, the audit committee members who are managers cannot be eligible for overtime.',
      'This guarantees that at least some audit committee members are not eligible (Option B).',
    ],
    commonMistake:
      'Overgeneralizing "some" into "all" or "none" (concluding that no committee members receive overtime).',
    estimatedTimeSeconds: 45,
    accessibilityDescription:
      'Syllogism evaluating managers, audit committee members, and overtime compensation eligibility.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ded-03',
    category: 'deductive',
    difficulty: 'intermediate',
    prompt:
      'Statements:\n• All solar panels installed on the roof generate direct current.\n• Every electrical device generating direct current requires an inverter for grid supply.\n\nWhich conclusion must be true?',
    options: [
      { id: 'A', label: 'All solar panels installed on the roof require an inverter for grid supply.' },
      { id: 'B', label: 'All devices requiring an inverter are solar panels installed on the roof.' },
      { id: 'C', label: 'Devices that do not generate direct current never require an inverter.' },
      { id: 'D', label: 'Some solar panels on the roof do not generate direct current.' },
    ],
    correctOptionId: 'A',
    explanation:
      'Since every rooftop solar panel belongs to the set of direct current generators, and every direct current generator requires an inverter, all rooftop panels necessarily require an inverter for grid supply.',
    reasoningSteps: [
      'Rooftop Panels ⊆ DC Generators.',
      'DC Generators ⊆ Require Inverter.',
      'Therefore, Rooftop Panels ⊆ Require Inverter.',
      'Option A states this necessary conclusion.',
    ],
    commonMistake:
      'Confusing the necessary requirement (inverter) with an exclusive property possessed only by solar panels (Option B).',
    estimatedTimeSeconds: 40,
    accessibilityDescription:
      'Syllogism connecting rooftop solar panels to direct current and inverter requirements.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ded-04',
    category: 'deductive',
    difficulty: 'intermediate',
    prompt:
      'Statements:\n• Every violin in the concert hall is made of seasoned spruce.\n• No instruments made of seasoned spruce are waterproof.\n\nWhich conclusion must be true?',
    options: [
      { id: 'A', label: 'Some violins in the concert hall are waterproof.' },
      { id: 'B', label: 'No violins in the concert hall are waterproof.' },
      { id: 'C', label: 'All waterproof instruments are made of seasoned spruce.' },
      { id: 'D', label: 'Every instrument made of seasoned spruce is a violin in the concert hall.' },
    ],
    correctOptionId: 'B',
    explanation:
      'If all concert hall violins are made of seasoned spruce, and the set of seasoned spruce instruments has zero overlap with waterproof instruments, then no violins in the concert hall can be waterproof.',
    reasoningSteps: [
      'Concert Violins ⊆ Seasoned Spruce Instruments.',
      'Seasoned Spruce Instruments ∩ Waterproof Instruments = ∅ (completely disjoint).',
      'Because Concert Violins are entirely inside Seasoned Spruce, they also have zero intersection with Waterproof Instruments.',
      'Conclusion: No violins in the concert hall are waterproof (Option B).',
    ],
    commonMistake:
      'Reversing the universal affirmative to think all seasoned spruce instruments must be concert violins.',
    estimatedTimeSeconds: 45,
    accessibilityDescription:
      'Categorical logic deduction regarding violins, seasoned spruce construction, and water resistance.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ded-05',
    category: 'deductive',
    difficulty: 'advanced',
    prompt:
      'Statements:\n• All certified financial auditors are licensed CPAs.\n• Some licensed CPAs are registered tax attorneys.\n\nWhat can be definitively concluded about certified financial auditors?',
    options: [
      { id: 'A', label: 'All certified financial auditors are registered tax attorneys.' },
      { id: 'B', label: 'Some certified financial auditors are registered tax attorneys.' },
      { id: 'C', label: 'No certified financial auditors are registered tax attorneys.' },
      { id: 'D', label: 'It cannot be determined whether any certified financial auditors are registered tax attorneys.' },
    ],
    correctOptionId: 'D',
    explanation:
      'While all auditors are CPAs, the subset of CPAs who are tax attorneys might not overlap with the auditor subset. It is possible that some are, all are, or none are. Therefore, the relationship cannot be definitively determined from the given premises alone.',
    reasoningSteps: [
      'Auditors ⊆ CPAs.',
      'Some CPAs are Tax Attorneys (intersection exists between CPAs and Tax Attorneys).',
      'The premise does NOT specify whether this intersection overlaps with the Auditor subset within CPAs.',
      'The overlap could be non-empty, partial, or completely zero.',
      'Thus, no definitive conclusion can be drawn from the premises alone (Option D).',
    ],
    commonMistake:
      'Committing the fallacy of the undistributed middle by assuming that two subsets of a larger category must intersect.',
    estimatedTimeSeconds: 50,
    accessibilityDescription:
      'Syllogism testing categorical non-overlap and the limits of deductive certainty.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ded-06',
    category: 'deductive',
    difficulty: 'intermediate',
    prompt:
      'Statements:\n• No reptiles have mammary glands.\n• All alligators are reptiles.\n\nWhich conclusion must be true?',
    options: [
      { id: 'A', label: 'All animals with mammary glands are alligators.' },
      { id: 'B', label: 'No alligators have mammary glands.' },
      { id: 'C', label: 'Some alligators have mammary glands.' },
      { id: 'D', label: 'All reptiles are alligators.' },
    ],
    correctOptionId: 'B',
    explanation:
      'Alligators are completely contained within the reptile category, and the reptile category is mutually exclusive with animals having mammary glands. Thus, no alligators have mammary glands.',
    reasoningSteps: [
      'Reptiles ∩ Animals with Mammary Glands = ∅.',
      'Alligators ⊆ Reptiles.',
      'Any member of Alligators is a member of Reptiles and therefore cannot have mammary glands.',
      'Conclusion: No alligators have mammary glands (Option B).',
    ],
    commonMistake:
      'Thinking that a negative universal statement leaves room for exceptions in specific sub-species.',
    estimatedTimeSeconds: 35,
    accessibilityDescription:
      'Classical syllogism examining class inclusion and mutual exclusivity.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },

  // ==========================================
  // CONDITIONAL LOGIC (5 Qs)
  // ==========================================
  {
    id: 'lr-con-01',
    category: 'conditional',
    difficulty: 'introductory',
    prompt:
      'Rule: "If the server temperature exceeds 75°C, the auxiliary cooling fan activates."\nObservation: The auxiliary cooling fan is currently inactive.\n\nWhat must be true according to the rule?',
    options: [
      { id: 'A', label: 'The server temperature exceeds 75°C.' },
      { id: 'B', label: 'The server temperature does not exceed 75°C.' },
      { id: 'C', label: 'The cooling fan is defective.' },
      { id: 'D', label: 'The server is completely powered off.' },
    ],
    correctOptionId: 'B',
    explanation:
      'This follows the rule of Modus Tollens (If P → Q; ¬Q; therefore ¬P). Because the auxiliary fan is inactive (¬Q), the server temperature cannot exceed 75°C (¬P). We must apply the rule without inventing outside hardware faults.',
    reasoningSteps: [
      'Conditional rule: Temp > 75°C (P) → Fan Active (Q).',
      'Observation: Fan is NOT Active (¬Q).',
      'By Modus Tollens (denying the consequent): ¬Q guarantees ¬P.',
      'Therefore, the temperature does NOT exceed 75°C (Option B).',
    ],
    commonMistake:
      'Inventing external mechanical failures (e.g. "the fan is broken") instead of sticking strictly to the stated logical premise.',
    estimatedTimeSeconds: 40,
    accessibilityDescription:
      'Conditional if-then deduction testing modus tollens in an IT server scenario.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-con-02',
    category: 'conditional',
    difficulty: 'intermediate',
    prompt:
      'Rule: "If an account has VIP membership, order shipping is free."\nObservation: David received free shipping on his order.\n\nWhat can be definitively concluded?',
    options: [
      { id: 'A', label: 'David definitely has a VIP membership.' },
      { id: 'B', label: 'David definitely does not have a VIP membership.' },
      { id: 'C', label: 'David may or may not have a VIP membership.' },
      { id: 'D', label: 'Free shipping is only available to VIP members.' },
    ],
    correctOptionId: 'C',
    explanation:
      'Concluding that David is a VIP member would be the fallacy of affirming the consequent (If P → Q, observing Q does not prove P). David could have received free shipping through a promotional code, minimum order value, or gift voucher.',
    reasoningSteps: [
      'Rule: VIP (P) → Free Shipping (Q). VIP is a sufficient condition, not stated as the only condition.',
      'Observation: Free Shipping (Q).',
      'Affirming the consequent (If P → Q and Q, therefore P) is logically invalid.',
      'Free shipping could stem from other factors (promotions, order thresholds).',
      'Conclusion: David may or may not have a VIP membership (Option C).',
    ],
    commonMistake:
      'Affirming the consequent by assuming that because the result occurred, the specific trigger must have caused it.',
    estimatedTimeSeconds: 45,
    accessibilityDescription:
      'Conditional statement demonstrating the fallacy of affirming the consequent.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-con-03',
    category: 'conditional',
    difficulty: 'intermediate',
    prompt:
      'Rule: "The building alarm sounds only if an exterior window or door is breached."\nObservation: The building alarm is currently sounding.\n\nWhat must be true according to the rule?',
    options: [
      { id: 'A', label: 'An exterior window or door has been breached.' },
      { id: 'B', label: 'The alarm was triggered by an internal smoke sensor.' },
      { id: 'C', label: 'The exterior doors and windows are fully intact.' },
      { id: 'D', label: 'The alarm sounded by accident.' },
    ],
    correctOptionId: 'A',
    explanation:
      'The phrasing "P only if Q" establishes Q as a necessary condition for P (Alarm → Breach). Because the alarm has sounded, the breach condition must have occurred.',
    reasoningSteps: [
      'Logical phrasing: "P only if Q" translates formally to P → Q.',
      'Here: Alarm Sounds (P) → Breach Occurred (Q).',
      'Observation: Alarm is sounding (P is True).',
      'By Modus Ponens: Breach Occurred (Q is True).',
      'Conclusion: An exterior window or door has been breached (Option A).',
    ],
    commonMistake:
      'Confusing "if" with "only if". "P only if Q" makes Q necessary, so P cannot happen without Q.',
    estimatedTimeSeconds: 45,
    accessibilityDescription:
      'Necessary condition rule evaluating the logical phrase "only if".',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-con-04',
    category: 'conditional',
    difficulty: 'advanced',
    prompt:
      'Rules:\n1. If a chemical reaction is exothermic, the solution temperature rises.\n2. If the solution temperature rises, the indicator dye turns cobalt blue.\n\nObservation: The reaction in Flask X is exothermic.\n\nWhat conclusion must follow?',
    options: [
      { id: 'A', label: 'The indicator dye does not turn cobalt blue.' },
      { id: 'B', label: 'The indicator dye turns cobalt blue.' },
      { id: 'C', label: 'The solution temperature drops.' },
      { id: 'D', label: 'No conclusion can be drawn without knowing the solution volume.' },
    ],
    correctOptionId: 'B',
    explanation:
      'By the chain rule (Hypothetical Syllogism): Exothermic → Temperature Rises → Dye Turns Blue. Since the reaction is exothermic, both subsequent conditions must logically follow.',
    reasoningSteps: [
      'Premise 1: Exothermic (A) → Temp Rises (B).',
      'Premise 2: Temp Rises (B) → Indicator Turns Cobalt Blue (C).',
      'Hypothetical Syllogism combines them: A → C.',
      'Observation confirms A is true.',
      'Therefore, C must be true: The indicator dye turns cobalt blue (Option B).',
    ],
    commonMistake:
      'Assuming unmentioned physical factors (like volume or container shape) can invalidate pure logical deductions.',
    estimatedTimeSeconds: 40,
    accessibilityDescription:
      'Multi-step conditional chain linking exothermic reaction to indicator dye color change.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-con-05',
    category: 'conditional',
    difficulty: 'intermediate',
    prompt:
      'Rule: "Unless the system security patch is applied, remote database access is disabled."\nObservation: Remote database access is currently enabled.\n\nWhat must be true?',
    options: [
      { id: 'A', label: 'The system security patch has been applied.' },
      { id: 'B', label: 'The security patch failed to install.' },
      { id: 'C', label: 'Remote database access will be disabled shortly.' },
      { id: 'D', label: 'The system is vulnerable to remote attacks.' },
    ],
    correctOptionId: 'A',
    explanation:
      '"Unless P, Q" means "If not P, then Q". The contrapositive is "If not Q, then P". Here, since remote access is not disabled (it is enabled), the security patch must have been applied.',
    reasoningSteps: [
      'Standard logic formulation: "Unless P, Q" = ¬P → Q.',
      'Here: ¬PatchApplied → AccessDisabled.',
      'Contrapositive (which is logically equivalent): ¬AccessDisabled → PatchApplied.',
      'Observation: Access is enabled (¬AccessDisabled).',
      'Deduction: The system security patch has been applied (Option A).',
    ],
    commonMistake:
      'Failing to recognize that "unless" introduces a negative condition whose violation triggers the necessary prerequisite.',
    estimatedTimeSeconds: 50,
    accessibilityDescription:
      'Conditional rule testing the interpretation of "unless" and contrapositive deduction.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },

  // ==========================================
  // ORDERING AND ARRANGEMENT PUZZLES (5 Qs)
  // ==========================================
  {
    id: 'lr-ord-01',
    category: 'ordering',
    difficulty: 'introductory',
    prompt:
      'Five runners—Avery, Blake, Cameron, Devon, and Ellis—finished a cross-country race in distinct positions.\n• Avery finished before Blake.\n• Cameron finished between Avery and Blake.\n• Devon finished in last place (5th).\n• Ellis finished before Avery.\n\nWho won the race in 1st place?',
    options: [
      { id: 'A', label: 'Avery' },
      { id: 'B', label: 'Blake' },
      { id: 'C', label: 'Ellis' },
      { id: 'D', label: 'Cameron' },
    ],
    correctOptionId: 'C',
    explanation:
      'From the constraints: Devon is 5th. Avery is before Blake, Cameron is between them (Avery, Cameron, Blake in sequence). Ellis finished before Avery. Placing them together: 1st: Ellis, 2nd: Avery, 3rd: Cameron, 4th: Blake, 5th: Devon. Ellis finished in 1st place.',
    reasoningSteps: [
      'Clue 3 fixes position 5: Devon.',
      'Clues 1 and 2 establish relative order: Avery > Cameron > Blake.',
      'Clue 4 places Ellis ahead of Avery: Ellis > Avery > Cameron > Blake.',
      'Fitting this 4-runner chain into positions 1 through 4 gives: 1: Ellis, 2: Avery, 3: Cameron, 4: Blake, 5: Devon.',
      'Conclusion: Ellis won in 1st place (Option C).',
    ],
    commonMistake:
      'Misinterpreting "Cameron finished between Avery and Blake" as adjacent without ordering relative to Ellis.',
    estimatedTimeSeconds: 45,
    accessibilityDescription:
      'Linear ordering puzzle ranking five runners based on relative finish times.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ord-02',
    category: 'ordering',
    difficulty: 'intermediate',
    prompt:
      'Four books—History, Science, Mathematics, and Art—stand in a row on a shelf from left to right (positions 1 to 4).\n• Science is placed immediately to the left of Mathematics.\n• History is placed somewhere to the left of Science.\n• Art is placed in position 4 (the far right).\n\nWhat is the exact order of books from left to right?',
    options: [
      { id: 'A', label: 'History, Mathematics, Science, Art' },
      { id: 'B', label: 'History, Science, Mathematics, Art' },
      { id: 'C', label: 'Science, Mathematics, History, Art' },
      { id: 'D', label: 'Art, History, Science, Mathematics' },
    ],
    correctOptionId: 'B',
    explanation:
      'Position 4 is Art. Science and Mathematics must be adjacent as [Science, Math]. History must be to the left of Science, leaving position 1 for History, position 2 for Science, and position 3 for Mathematics: [History, Science, Mathematics, Art].',
    reasoningSteps: [
      'Position 4 is fixed: Art.',
      'Positions 1, 2, and 3 remain.',
      'Science and Mathematics must be immediately adjacent as [Science, Math].',
      'History must be somewhere left of Science.',
      'The only valid placement for the block [Science, Math] is positions 2 and 3, which forces History into position 1.',
      'Full sequence: History, Science, Mathematics, Art (Option B).',
    ],
    commonMistake:
      'Reversing Science and Mathematics (placing Mathematics to the left instead of right).',
    estimatedTimeSeconds: 40,
    accessibilityDescription:
      'Shelf arrangement problem determining the sequential left-to-right order of four books.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ord-03',
    category: 'ordering',
    difficulty: 'intermediate',
    prompt:
      'Five colleagues—Jack, Karen, Leo, Mia, and Nick—are assigned individual work shifts Monday through Friday (one shift per day).\n• Leo works on Wednesday.\n• Karen works on the day immediately after Leo.\n• Jack works two days before Leo.\n• Nick works on Friday.\n\nOn which day does Mia work?',
    options: [
      { id: 'A', label: 'Monday' },
      { id: 'B', label: 'Tuesday' },
      { id: 'C', label: 'Thursday' },
      { id: 'D', label: 'Friday' },
    ],
    correctOptionId: 'B',
    explanation:
      'Leo works on Wednesday (day 3). Karen works immediately after Leo on Thursday (day 4). Jack works two days before Leo on Monday (day 1). Nick works on Friday (day 5). This leaves Tuesday (day 2) as the only available shift for Mia.',
    reasoningSteps: [
      'Shift slots: Mon(1), Tue(2), Wed(3), Thu(4), Fri(5).',
      'Leo is assigned Wed(3).',
      'Karen works day immediately after Leo: Thu(4).',
      'Jack works two days before Leo: Wed - 2 = Mon(1).',
      'Nick is assigned Fri(5).',
      'The only remaining unassigned day is Tuesday (day 2), which must belong to Mia (Option B).',
    ],
    commonMistake:
      'Miscounting "two days before Wednesday" as Tuesday instead of Monday.',
    estimatedTimeSeconds: 45,
    accessibilityDescription:
      'Work schedule assignment arranging five employees across Monday to Friday.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ord-04',
    category: 'ordering',
    difficulty: 'introductory',
    prompt:
      'Four towers—Alpha, Beta, Gamma, and Delta—have different heights.\n• Beta is taller than Alpha.\n• Gamma is taller than Beta.\n• Delta is shorter than Alpha.\n\nWhich tower is the tallest?',
    options: [
      { id: 'A', label: 'Alpha' },
      { id: 'B', label: 'Beta' },
      { id: 'C', label: 'Gamma' },
      { id: 'D', label: 'Delta' },
    ],
    correctOptionId: 'C',
    explanation:
      'Combining the height inequalities: Delta < Alpha < Beta < Gamma. Gamma is taller than Beta, which is taller than Alpha, which is taller than Delta. Therefore, Gamma is the tallest tower.',
    reasoningSteps: [
      'Clue 1: Alpha < Beta.',
      'Clue 2: Beta < Gamma.',
      'Clue 3: Delta < Alpha.',
      'Combining inequalities from shortest to tallest: Delta < Alpha < Beta < Gamma.',
      'The maximum element is Gamma (Option C).',
    ],
    commonMistake:
      'Mixing up greater-than and less-than relationships in comparative prose.',
    estimatedTimeSeconds: 30,
    accessibilityDescription:
      'Transitive height ranking puzzle comparing four towers.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ord-05',
    category: 'ordering',
    difficulty: 'advanced',
    prompt:
      'Five parcels—J, K, L, M, and N—are delivered sequentially from 1st to 5th.\n• Parcel M is delivered 1st.\n• Parcel N is delivered 5th.\n• Parcel K is delivered immediately before Parcel L.\n• Parcel J is delivered immediately after Parcel L.\n\nWhich parcel is delivered in 3rd position?',
    options: [
      { id: 'A', label: 'Parcel J' },
      { id: 'B', label: 'Parcel K' },
      { id: 'C', label: 'Parcel L' },
      { id: 'D', label: 'Parcel M' },
    ],
    correctOptionId: 'C',
    explanation:
      'Position 1 is occupied by Parcel M, and Position 5 is occupied by Parcel N. This leaves positions 2, 3, and 4 open. Parcel K is immediately before Parcel L, and Parcel J is immediately after Parcel L, creating the consecutive triplet [K, L, J]. Therefore: 2nd = K, 3rd = L, 4th = J. Parcel L is delivered in 3rd position.',
    reasoningSteps: [
      'Slot 1 = M, Slot 5 = N.',
      'Slots 2, 3, 4 are open.',
      'K is immediately before L (K, L).',
      'J is immediately after L (L, J).',
      'This creates the strict 3-element block [K, L, J].',
      'Placing into slots 2, 3, 4: Slot 2 = K, Slot 3 = L, Slot 4 = J.',
      'Slot 3 is occupied by Parcel L (Option C).',
    ],
    commonMistake:
      'Placing Parcel J before Parcel L instead of immediately after.',
    estimatedTimeSeconds: 45,
    accessibilityDescription:
      'Sequential delivery order puzzle arranging five packages.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },

  // ==========================================
  // INDUCTIVE REASONING AND SEQUENCES (4 Qs)
  // ==========================================
  {
    id: 'lr-ind-01',
    category: 'inductive',
    difficulty: 'introductory',
    prompt:
      'Identify the missing number in the geometric progression: 2, 6, 18, 54, ?',
    options: [
      { id: 'A', label: '108' },
      { id: 'B', label: '144' },
      { id: 'C', label: '162' },
      { id: 'D', label: '172' },
    ],
    correctOptionId: 'C',
    explanation:
      'Each successive term is multiplied by 3: 2 × 3 = 6; 6 × 3 = 18; 18 × 3 = 54. Continuing the pattern: 54 × 3 = 162.',
    reasoningSteps: [
      'Analyze the ratios between adjacent terms: 6 / 2 = 3; 18 / 6 = 3; 54 / 18 = 3.',
      'The common ratio r is 3.',
      'Calculate the next term: 54 × 3 = 162.',
      'Option C matches 162.',
    ],
    commonMistake:
      'Doubling instead of tripling (e.g., selecting 108 = 54 × 2).',
    estimatedTimeSeconds: 30,
    accessibilityDescription:
      'Inductive numerical sequence multiplying by 3 at each transition.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ind-02',
    category: 'inductive',
    difficulty: 'intermediate',
    prompt:
      'What number logically completes the series: 5, 11, 23, 47, ?',
    options: [
      { id: 'A', label: '89' },
      { id: 'B', label: '94' },
      { id: 'C', label: '95' },
      { id: 'D', label: '99' },
    ],
    correctOptionId: 'C',
    explanation:
      'Each number doubles and adds 1 [x(n) = 2x(n-1) + 1]: 5×2+1 = 11; 11×2+1 = 23; 23×2+1 = 47. Following this rule: 47×2+1 = 95. Alternatively, the successive differences double (+6, +12, +24, +48), giving 47 + 48 = 95.',
    reasoningSteps: [
      'Method 1 (Recursive formulation): 5 × 2 + 1 = 11; 11 × 2 + 1 = 23; 23 × 2 + 1 = 47.',
      'Applying to 47: 47 × 2 + 1 = 94 + 1 = 95.',
      'Method 2 (First differences): 11 - 5 = 6; 23 - 11 = 12; 47 - 23 = 24.',
      'Differences double: 6, 12, 24, so next difference is 48.',
      '47 + 48 = 95 (Option C).',
    ],
    commonMistake:
      'Doubling 47 to get 94 without adding the +1 increment.',
    estimatedTimeSeconds: 40,
    accessibilityDescription:
      'Inductive sequence where terms double and increase by one.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ind-03',
    category: 'inductive',
    difficulty: 'introductory',
    prompt:
      'Which letter comes next in the alphabetical sequence: B, E, H, K, N, ?',
    options: [
      { id: 'A', label: 'P' },
      { id: 'B', label: 'Q' },
      { id: 'C', label: 'R' },
      { id: 'D', label: 'S' },
    ],
    correctOptionId: 'B',
    explanation:
      'Converting letters to alphabetical positions: B (2), E (5), H (8), K (11), N (14). Each step advances by +3 positions. 14 + 3 = 17, which corresponds to the letter Q.',
    reasoningSteps: [
      'Map letters to numbers: B=2, E=5, H=8, K=11, N=14.',
      'Observe constant difference: 5 - 2 = 3; 8 - 5 = 3; 11 - 8 = 3; 14 - 11 = 3.',
      'Add 3 to 14: 14 + 3 = 17.',
      'Convert 17 back to alphabet: 17th letter is Q (Option B).',
    ],
    commonMistake:
      'Skipping only 2 alphabet positions instead of 3 (selecting P, which is 16).',
    estimatedTimeSeconds: 30,
    accessibilityDescription:
      'Alphabetical letter sequence advancing by three positions per step.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
  {
    id: 'lr-ind-04',
    category: 'inductive',
    difficulty: 'intermediate',
    prompt:
      'Determine the missing value in the alternating progression: 10, 15, 12, 17, 14, 19, ?',
    options: [
      { id: 'A', label: '15' },
      { id: 'B', label: '16' },
      { id: 'C', label: '21' },
      { id: 'D', label: '24' },
    ],
    correctOptionId: 'B',
    explanation:
      'The series alternates between adding 5 and subtracting 3: 10 (+5) = 15; 15 (-3) = 12; 12 (+5) = 17; 17 (-3) = 14; 14 (+5) = 19. The next operation is subtracting 3: 19 - 3 = 16.',
    reasoningSteps: [
      'Examine consecutive step changes: +5, -3, +5, -3, +5.',
      'The alternating pattern is +5, -3, +5, -3, +5, -3.',
      'The last operation performed was +5 (14 to 19).',
      'The next operation must be -3: 19 - 3 = 16 (Option B).',
    ],
    commonMistake:
      'Repeating +5 (yielding 24) instead of executing the alternating -3 operation.',
    estimatedTimeSeconds: 35,
    accessibilityDescription:
      'Alternating number sequence with operations +5 and -3.',
    version: LOGICAL_ASSESSMENT_VERSION,
    reviewStatus: 'approved',
  },
];
