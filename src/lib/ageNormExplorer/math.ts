import { AgeGroup, AgeNormCalculation } from './types';
import {
  calculateZScore,
  calculatePercentile,
  normalPdf,
  formatPercentile,
  MEAN,
  STANDARD_DEVIATION,
} from '@/lib/iqChart/math';

export const EXPLORER_MIN_IQ = 70;
export const EXPLORER_MAX_IQ = 145;
export const EXPLORER_DEFAULT_IQ = 100;

export const EXPLORER_PRESETS = [
  { label: 'One SD Below', score: 85, badge: '−1.0 SD' },
  { label: 'Average', score: 100, badge: 'Mean' },
  { label: 'One SD Above', score: 115, badge: '+1.0 SD' },
  { label: 'Two SD Above', score: 130, badge: '+2.0 SD' },
];

export const AGE_GROUPS: AgeGroup[] = [
  {
    id: 'children',
    name: 'Children',
    ageRange: '6–12',
    description: 'Ages 6 to 12 years',
    cognitiveNote:
      'Cognitive abilities, language, and working memory develop rapidly during this period. Standardized IQ is scored against same-age peers, meaning an average score of 100 reflects age-appropriate developmental expectations rather than adult raw abilities.',
  },
  {
    id: 'teenagers',
    name: 'Teenagers',
    ageRange: '13–19',
    description: 'Ages 13 to 19 years',
    cognitiveNote:
      'Adolescence involves continued maturation of abstract reasoning, processing speed, and executive functions. Age-normed scoring accounts for these developmental changes, so a score of 100 remains the peer average across all teenage cohorts.',
  },
  {
    id: 'young-adults',
    name: 'Young Adults',
    ageRange: '20–29',
    description: 'Ages 20 to 29 years',
    cognitiveNote:
      'Fluid reasoning, processing speed, and spatial recall often reach high relative performance during young adulthood. Deviation IQ compares young adults with other young adults to maintain a standardized reference mean of 100.',
  },
  {
    id: 'adults',
    name: 'Adults',
    ageRange: '30–59',
    description: 'Ages 30 to 59 years',
    cognitiveNote:
      'Crystallized abilities, vocabulary, and accumulated problem-solving strategies often remain robust or continue to expand. While speed on certain timed tasks may begin subtle shifts, age-based norms keep standardized IQ centered at 100.',
  },
  {
    id: 'older-adults',
    name: 'Older Adults',
    ageRange: '60+',
    description: 'Ages 60+ years',
    cognitiveNote:
      'Knowledge and verbal skills remain comparatively resilient across late adulthood, while processing speed and memory may follow different age patterns. Age-appropriate norms ensure fair interpretation centered at 100 without younger-adult bias.',
  },
];

export const DEFAULT_AGE_GROUP_ID = 'young-adults';
export const DEFAULT_COMPARE_AGE_GROUP_ID = 'children';

export function getAgeGroupById(id: string): AgeGroup {
  return AGE_GROUPS.find((ag) => ag.id === id) || AGE_GROUPS[2];
}

/**
 * Validates an IQ score for the Age-Norm Explorer (70–145).
 */
export function validateExplorerScore(input: string | number): {
  isValid: boolean;
  score: number;
  errorMessage?: string;
} {
  if (typeof input === 'string') {
    const trimmed = input.trim();
    if (trimmed === '') {
      return { isValid: false, score: EXPLORER_DEFAULT_IQ, errorMessage: 'Please enter a whole number score.' };
    }
    const parsed = Number(trimmed);
    if (!Number.isInteger(parsed) || isNaN(parsed)) {
      return { isValid: false, score: EXPLORER_DEFAULT_IQ, errorMessage: 'Score must be a whole number.' };
    }
    if (parsed < EXPLORER_MIN_IQ || parsed > EXPLORER_MAX_IQ) {
      return {
        isValid: false,
        score: Math.min(EXPLORER_MAX_IQ, Math.max(EXPLORER_MIN_IQ, parsed)),
        errorMessage: `Please enter a score between ${EXPLORER_MIN_IQ} and ${EXPLORER_MAX_IQ}.`,
      };
    }
    return { isValid: true, score: parsed };
  }

  if (input < EXPLORER_MIN_IQ || input > EXPLORER_MAX_IQ) {
    return {
      isValid: false,
      score: Math.min(EXPLORER_MAX_IQ, Math.max(EXPLORER_MIN_IQ, input)),
      errorMessage: `Score must be between ${EXPLORER_MIN_IQ} and ${EXPLORER_MAX_IQ}.`,
    };
  }
  return { isValid: true, score: Math.round(input) };
}

/**
 * Calculates standardized normal statistics.
 * In accordance with psychometric science and modern deviation IQ scoring:
 * Reference mean is 100 and SD is 15 across all age groups.
 */
export function calculateAgeNormStats(score: number): AgeNormCalculation {
  const zScore = calculateZScore(score);
  const percentile = calculatePercentile(score);

  let formattedZScore = `${zScore.toFixed(2)} SD`;
  if (zScore > 0) {
    formattedZScore = `+${zScore.toFixed(2)} SD`;
  } else if (zScore < 0) {
    formattedZScore = `−${Math.abs(zScore).toFixed(2)} SD`;
  }

  return {
    score,
    referenceMean: MEAN,
    standardDeviation: STANDARD_DEVIATION,
    zScore,
    percentile,
    formattedPercentile: formatPercentile(percentile),
    formattedZScore,
  };
}

export { normalPdf, MEAN, STANDARD_DEVIATION };
