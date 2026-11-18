import { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const migrationDate = '2026-11-17';
  const baselineDate = '2026-11-09';

  const routes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      lastModified: migrationDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: absoluteUrl('/test'),
      lastModified: migrationDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/quick-iq-test'),
      lastModified: migrationDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/logical-reasoning-test'),
      lastModified: migrationDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/abstract-reasoning-test'),
      lastModified: migrationDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/spatial-reasoning-test'),
      lastModified: migrationDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/iq-score-chart'),
      lastModified: baselineDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/iq-percentile-calculator'),
      lastModified: baselineDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/average-iq-by-age'),
      lastModified: baselineDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/iq-practice-questions'),
      lastModified: baselineDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/about'),
      lastModified: baselineDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: absoluteUrl('/contact'),
      lastModified: migrationDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: absoluteUrl('/privacy'),
      lastModified: baselineDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: absoluteUrl('/terms'),
      lastModified: baselineDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return routes;
}
