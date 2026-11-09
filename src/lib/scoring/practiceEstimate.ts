/**
 * Practice score estimation mapping raw assessment scores to theoretical
 * practice IQ score ranges on a standard mean=100, SD=15 scale.
 *
 * NOTE: This is an informal educational approximation for practice benchmarking,
 * explicitly not a clinical diagnostic assessment.
 */

export interface PracticeIQEstimate {
  minIQ: number;
  maxIQ: number;
  midpointIQ: number;
  rarityTier: string;
  percentileRange: string;
  disclaimer: string;
}

export function estimatePracticeIQ(correctCount: number, totalQuestions: number): PracticeIQEstimate {
  // Normalize ratio
  const ratio = Math.max(0, Math.min(1, correctCount / totalQuestions));

  // Mapping curve centered at ratio = 0.5 -> IQ 100
  // Scaling roughly -3 SD (55) to +3 SD (145) with slight damping at extremes
  // Full scale: 0/20 -> 70-80, 10/20 -> 96-104, 20/20 -> 135-145
  const estimatedMeanIQ = 70 + ratio * 70; // 0 -> 70, 0.5 -> 105, 1.0 -> 140
  const bandHalfWidth = totalQuestions <= 10 ? 6 : 4; // Wider uncertainty margin for shorter quick test

  const minIQ = Math.max(70, Math.round(estimatedMeanIQ - bandHalfWidth));
  const maxIQ = Math.min(145, Math.round(estimatedMeanIQ + bandHalfWidth));
  const midpointIQ = Math.round((minIQ + maxIQ) / 2);

  let rarityTier = 'Average Range';
  let percentileRange = '25th – 75th percentile';

  if (midpointIQ >= 130) {
    rarityTier = 'Very High / Top Tier Range';
    percentileRange = 'Top 2% (98th+ percentile)';
  } else if (midpointIQ >= 120) {
    rarityTier = 'Superior / High Average Range';
    percentileRange = 'Top 10% (90th – 97th percentile)';
  } else if (midpointIQ >= 110) {
    rarityTier = 'Above Average Range';
    percentileRange = '75th – 90th percentile';
  } else if (midpointIQ >= 90) {
    rarityTier = 'Average / Mid-Distribution Range';
    percentileRange = '25th – 75th percentile';
  } else if (midpointIQ >= 80) {
    rarityTier = 'Low Average Range';
    percentileRange = '10th – 25th percentile';
  } else {
    rarityTier = 'Lower Practice Range';
    percentileRange = 'Below 10th percentile';
  }

  return {
    minIQ,
    maxIQ,
    midpointIQ,
    rarityTier,
    percentileRange,
    disclaimer:
      'Informal practice estimate for educational self-assessment only. Clinical IQ scores require supervised standardized testing (WAIS/Stanford-Binet) across broad representative populations.',
  };
}

