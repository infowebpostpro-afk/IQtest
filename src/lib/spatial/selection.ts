import { BaseSpatialQuestion, SpatialCategory } from './types';
import { SPATIAL_QUESTION_BANK } from './bank';

/**
 * Standard 20-Question Spatial Assessment Selection:
 * - Mental rotation: 5
 * - Cube folding: 4
 * - Mirror reflections: 3
 * - Paper folding: 3
 * - Spatial orientation: 3
 * - Block counting: 2
 * Total: 20 questions
 *
 * Difficulty distribution:
 * - Introductory: 6
 * - Intermediate: 8
 * - Challenging: 6
 */

export function selectStandard20Questions(
  excludeIds: string[] = [],
  seed = Date.now()
): BaseSpatialQuestion[] {
  // Deterministic PRNG based on seed for reproducible retakes
  let s = seed;
  const pseudoRandom = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  const categoryQuotas: Record<SpatialCategory, number> = {
    mental_rotation: 5,
    cube_folding: 4,
    mirror_reflection: 3,
    paper_folding: 3,
    spatial_orientation: 3,
    block_counting: 2,
  };

  const selected: BaseSpatialQuestion[] = [];

  // Categorize bank questions
  const byCategory: Record<SpatialCategory, BaseSpatialQuestion[]> = {
    mental_rotation: [],
    cube_folding: [],
    mirror_reflection: [],
    paper_folding: [],
    spatial_orientation: [],
    block_counting: [],
  };

  SPATIAL_QUESTION_BANK.forEach((q) => {
    byCategory[q.category].push(q);
  });

  (Object.keys(categoryQuotas) as SpatialCategory[]).forEach((cat) => {
    const quota = categoryQuotas[cat];
    const pool = byCategory[cat];

    // Partition pool into unvisited vs previously visited
    const unvisited = pool.filter((q) => !excludeIds.includes(q.id));
    const activePool = unvisited.length >= quota ? unvisited : pool;

    // Shuffle activePool deterministically
    const shuffled = [...activePool].sort(() => pseudoRandom() - 0.5);

    selected.push(...shuffled.slice(0, quota));
  });

  // Interleave questions to avoid clustering all items from one category together
  const categoryOrder: SpatialCategory[] = [
    'mental_rotation',
    'cube_folding',
    'mirror_reflection',
    'paper_folding',
    'spatial_orientation',
    'block_counting',
    'mental_rotation',
    'cube_folding',
    'mirror_reflection',
    'paper_folding',
    'spatial_orientation',
    'block_counting',
    'mental_rotation',
    'cube_folding',
    'mirror_reflection',
    'paper_folding',
    'spatial_orientation',
    'mental_rotation',
    'cube_folding',
    'mental_rotation',
  ];

  const bucketMap: Record<SpatialCategory, BaseSpatialQuestion[]> = {
    mental_rotation: selected.filter((q) => q.category === 'mental_rotation'),
    cube_folding: selected.filter((q) => q.category === 'cube_folding'),
    mirror_reflection: selected.filter((q) => q.category === 'mirror_reflection'),
    paper_folding: selected.filter((q) => q.category === 'paper_folding'),
    spatial_orientation: selected.filter((q) => q.category === 'spatial_orientation'),
    block_counting: selected.filter((q) => q.category === 'block_counting'),
  };

  const ordered: BaseSpatialQuestion[] = [];
  categoryOrder.forEach((cat) => {
    const item = bucketMap[cat].shift();
    if (item) ordered.push(item);
  });

  // Fallback in case any remain
  Object.values(bucketMap).forEach((items) => {
    items.forEach((item) => ordered.push(item));
  });

  return ordered.slice(0, 20);
}
