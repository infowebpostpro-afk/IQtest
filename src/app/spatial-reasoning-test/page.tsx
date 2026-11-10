import React from 'react';
import type { Metadata } from 'next';
import { SpatialTestClient } from './SpatialTestClient';

export const metadata: Metadata = {
  title: 'Spatial Reasoning Test – Free Practice With Answers',
  description:
    'Take a free spatial reasoning test with 20 visual questions on mental rotation, cube folding, mirror images and 3D shapes. Get worked answers online.',
  alternates: {
    canonical: '/spatial-reasoning-test/',
  },
  openGraph: {
    title: 'Spatial Reasoning Test – Free Practice With Answers',
    description:
      'Take a free spatial reasoning test with 20 visual questions on mental rotation, cube folding, mirror images and 3D shapes. Get worked answers online.',
    url: '/spatial-reasoning-test/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spatial Reasoning Test – Free Practice With Answers',
    description:
      'Take a free spatial reasoning test with 20 visual questions on mental rotation, cube folding, mirror images and 3D shapes. Get worked answers online.',
  },
};

export default function SpatialReasoningTestPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://iqtest.org/spatial-reasoning-test/#webpage',
        url: 'https://iqtest.org/spatial-reasoning-test/',
        name: 'Spatial Reasoning Test – Free Practice With Answers',
        description:
          'Take a free spatial reasoning test with 20 visual questions on mental rotation, cube folding, mirror images and 3D shapes. Get worked answers online.',
        inLanguage: 'en',
      },
      {
        '@type': 'Quiz',
        '@id': 'https://iqtest.org/spatial-reasoning-test/#quiz',
        name: 'Spatial Reasoning Test – 20 Visual Questions With Instant Answers',
        description:
          'A free visual assessment platform evaluating mental rotation, cube folding nets, mirror reflections, paper folding, orthographic views, and 3D block counting.',
        educationalLevel: 'General Public',
        timeRequired: 'PT15M',
        typicalAgeRange: '16-',
        hasPart: [
          {
            '@type': 'Question',
            name: 'Mental Rotation of 2D and 3D Objects',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Cube Folding and 6-Square Nets',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Mirror Reflections Across Declared Axes',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Paper Folding & Hole Punch Patterns',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Orthographic Views & 3D Projections',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Block Counting with Solid Base Columns',
            eduQuestionType: 'Multiple choice',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpatialTestClient />
    </>
  );
}

