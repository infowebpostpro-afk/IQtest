import React from 'react';
import type { Metadata } from 'next';
import { SpatialTestClient } from './SpatialTestClient';

export const metadata: Metadata = {
  title: 'Spatial Reasoning Test – Free Practice With Answers',
  description:
    'Take a free spatial reasoning test with 20 visual questions on mental rotation, cube folding, mirror images and 3D shapes. Get worked answers online.',
  alternates: {
    canonical: '/spatial-reasoning-test',
  },
  openGraph: {
    title: 'Spatial Reasoning Test – Free Practice With Answers',
    description:
      'Take a free spatial reasoning test with 20 visual questions on mental rotation, cube folding, mirror images and 3D shapes. Get worked answers online.',
    url: '/spatial-reasoning-test',
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
        '@id': 'https://theiqtest.org/spatial-reasoning-test#webpage',
        url: 'https://theiqtest.org/spatial-reasoning-test',
        name: 'Spatial Reasoning Test – Free Practice With Answers',
        description:
          'Take a free spatial reasoning test with 20 visual questions on mental rotation, cube folding, mirror images and 3D shapes. Get worked answers online.',
        inLanguage: 'en',
      },
      {
        '@type': 'Quiz',
        '@id': 'https://theiqtest.org/spatial-reasoning-test#quiz',
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
      {
        '@type': 'FAQPage',
        '@id': 'https://theiqtest.org/spatial-reasoning-test#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a spatial reasoning test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A spatial reasoning test asks you to visualize and manipulate two-dimensional or three-dimensional objects. Common tasks include mental rotation, cube folding, mirror reflections, paper folding, spatial orientation, and block counting. These tests are often used for aptitude practice and some technical recruitment assessments.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is a spatial reasoning test the same as a spatial awareness test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The terms are often used interchangeably on aptitude-testing websites. Both may involve understanding objects, positions, directions, and visual transformations. However, the exact question types and skills assessed depend on the provider and purpose of the test.',
            },
          },
          {
            '@type': 'Question',
            name: 'What questions appear in a spatial reasoning test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Typical questions involve rotated shapes, folded cube nets, mirror images, paper hole-punching patterns, different views of three-dimensional objects, and counting cubes in block structures.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is this spatial reasoning practice test free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The interactive spatial reasoning test is free and does not require an account. It includes 20 visual questions and worked explanations after submission.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does a spatial reasoning test take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The duration depends on the assessment. Our planned Test Mode offers an optional 15-minute timer for 20 questions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can spatial reasoning improve with practice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, research supports the trainability of spatial skills. Practice can help people learn transformation strategies and improve performance on spatial tasks.',
            },
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

