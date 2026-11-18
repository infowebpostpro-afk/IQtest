import React from 'react';
import type { Metadata } from 'next';
import { AbstractTestClient } from './AbstractTestClient';

export const metadata: Metadata = {
  title: 'Abstract Reasoning Test – Free Practice With Answers',
  description:
    'Take a free abstract reasoning test with 20 visual questions, instant results and worked answers. Practise shape patterns, matrices and sequences online.',
  alternates: {
    canonical: '/abstract-reasoning-test',
  },
  openGraph: {
    title: 'Abstract Reasoning Test – Free Practice With Answers',
    description:
      'Take a free abstract reasoning test with 20 visual questions, instant results and worked answers. Practise shape patterns, matrices and sequences online.',
    url: '/abstract-reasoning-test',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abstract Reasoning Test – Free Practice With Answers',
    description:
      'Take a free abstract reasoning test with 20 visual questions, instant results and worked answers. Practise shape patterns, matrices and sequences online.',
  },
};

export default function AbstractReasoningTestPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://theiqtest.org/abstract-reasoning-test#webpage',
        url: 'https://theiqtest.org/abstract-reasoning-test',
        name: 'Abstract Reasoning Test – Free Practice With Answers',
        description:
          'Take a free abstract reasoning test with 20 visual questions, instant results and worked answers. Practise shape patterns, matrices and sequences online.',
        inLanguage: 'en',
      },
      {
        '@type': 'Quiz',
        '@id': 'https://theiqtest.org/abstract-reasoning-test#quiz',
        name: 'Abstract Reasoning Test – 20 Visual Questions With Instant Answers',
        description:
          'A free visual assessment platform evaluating figure sequences, 2x2 and 3x3 matrices, odd-one-out figures, and visual analogies with vector SVG graphics and worked explanations.',
        educationalLevel: 'General Public',
        timeRequired: 'PT15M',
        typicalAgeRange: '16-',
        hasPart: [
          {
            '@type': 'Question',
            name: 'Figure Sequences & Progressive Rotations',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Matrix Reasoning (2x2 & 3x3 Grids)',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Odd-One-Out Topological Identification',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Visual Analogies & Shape Transformations',
            eduQuestionType: 'Multiple choice',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://theiqtest.org/abstract-reasoning-test#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an abstract reasoning test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An abstract reasoning test presents visual problems involving geometric figures, patterns, and transformations. You must identify the relationship between the figures and apply it to find the correct answer. Common formats include shape sequences, missing matrices, odd-one-out questions, and visual analogies.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is this abstract reasoning test free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our abstract reasoning practice tool is designed to provide a free set of visual questions with answers and explanations. No payment or registration is required for the core assessment.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many questions are included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The planned test contains 20 original visual questions: six figure sequences, six matrix reasoning questions, four odd-one-out puzzles, and four visual analogies.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of patterns appear in abstract reasoning tests?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Common patterns involve shape changes, counting, movement, rotation, reflection, and shading. Some questions use one rule, while others combine multiple transformations.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I solve abstract reasoning questions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start by looking for changes in shape, count, position, orientation, and fill. Identify a possible rule and test whether it applies throughout the question. In a matrix, examine rows and columns separately.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I solve 3×3 matrix questions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Examine the complete rows first and look for changes such as rotation, increasing quantity, or shape substitution. Then inspect the columns for another relationship. The missing figure may need to satisfy rules operating in both directions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is abstract reasoning the same as inductive reasoning?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not exactly. Abstract reasoning commonly involves visual figures and unfamiliar patterns, while inductive reasoning describes the process of inferring a general rule from examples.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is an abstract reasoning test the same as an IQ test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Abstract reasoning tasks may form one component of a broader intelligence assessment, but a short online abstract reasoning practice test is not equivalent to a professionally standardized IQ test.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can practice improve my abstract reasoning test performance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Practice can help you become familiar with visual question types, recognize common transformations, and develop more systematic solving strategies.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will I see answers and explanations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The planned assessment includes answer explanations to help you understand each visual rule. In Test Mode, answers are reviewed after submitting. In Learn Mode, explanations appear after checking individual responses.',
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
      <AbstractTestClient />
    </>
  );
}

