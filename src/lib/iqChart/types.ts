export interface IQScoreStats {
  iq: number;
  zScore: number;
  differenceFromMean: number;
  percentile: number;
  rarityRatio: string;
  classificationCategory: string;
}

export interface ScoreRangeInterval {
  id: string;
  label: string;
  minIq: number;
  maxIq: number;
  percentage: number;
  zRangeLabel: string;
  description: string;
}

export interface ComparisonStats {
  scoreA: number;
  scoreB: number;
  differencePoints: number;
  zScoreA: number;
  zScoreB: number;
  percentileA: number;
  percentileB: number;
  percentileDifference: number;
  intervalPercentage: number;
}
