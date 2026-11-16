import React from 'react';
import type { Metadata } from 'next';
import { LogicalTestClient } from './LogicalTestClient';

export const metadata: Metadata = {
  title: 'Logical Reasoning Test – Free Online Test With Answers',
  description:
    'Take a free logical reasoning test with 20 questions, instant results and clear answer explanations. Practise deduction, conditional logic and more.',
  alternates: {
    canonical: '/logical-reasoning-test/',
  },
  openGraph: {
    title: 'Logical Reasoning Test – Free Online Test With Answers',
    description:
      'Take a free logical reasoning test with 20 questions, instant results and clear answer explanations. Practise deduction, conditional logic and more.',
    url: '/logical-reasoning-test/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logical Reasoning Test – Free Online Test With Answers',
    description:
      'Take a free logical reasoning test with 20 questions, instant results and clear answer explanations. Practise deduction, conditional logic and more.',
  },
};

export default function LogicalReasoningTestPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://theiqtest.org/logical-reasoning-test/#webpage',
        url: 'https://theiqtest.org/logical-reasoning-test/',
        name: 'Logical Reasoning Test – Free Online Test With Answers',
        description:
          'Take a free logical reasoning test with 20 questions, instant results and clear answer explanations. Practise deduction, conditional logic and more.',
        inLanguage: 'en',
      },
      {
        '@type': 'Quiz',
        '@id': 'https://theiqtest.org/logical-reasoning-test/#quiz',
        name: 'Logical Reasoning Test – 20 Questions With Free Instant Results',
        description:
          'A comprehensive 20-question practice assessment covering deductive syllogisms, conditional if-then logic, arrangement constraints, and inductive sequences with instant scoring and explanations.',
        educationalLevel: 'General Public',
        timeRequired: 'PT15M',
        typicalAgeRange: '16-',
        hasPart: [
          {
            '@type': 'Question',
            name: 'Deductive Reasoning and Syllogisms',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Conditional Logic and If-Then Rules',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Ordering and Arrangement Constraints',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Inductive Reasoning and Numerical Sequences',
            eduQuestionType: 'Multiple choice',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://theiqtest.org/logical-reasoning-test/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is this logical reasoning test free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The 20-question practice test is free to take, and your results and explanations appear immediately after submission without registration or fees.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does the 20-question test take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most people spend between 15 and 25 minutes. If you use the optional 15-minute timer, you have about 45 seconds per question.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are these questions identical to those on employment assessments?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. These original questions are designed for self-directed practice and demonstrate the same logical principles used in many pre-employment and academic reasoning tests.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I see the explanations after submitting my answers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Detailed explanations are provided for every question so you can see which rule applies and why the chosen option is correct.',
            },
          },
          {
            '@type': 'Question',
            name: 'How should I prepare for a deductive reasoning test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Practise identifying premises, distinguishing between what is guaranteed and what is possible, and avoiding assumptions that are not directly stated in the prompt.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between a necessary conclusion and an assumption?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A necessary conclusion must be true whenever the premises are true. An assumption is unstated information you treat as true to connect ideas, which can lead to invalid conclusions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use scratch paper during the test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Using scratch paper is strongly recommended, especially for ordering problems, sequence calculations, and conditional logic diagrams.',
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
      <LogicalTestClient />
    </>
  );
}

