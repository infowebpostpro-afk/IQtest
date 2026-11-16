import React from 'react';
import type { Metadata } from 'next';
import { QuickTestClient } from './QuickTestClient';

export const metadata: Metadata = {
  title: 'Quick IQ Test – 10 Questions With Free Instant Results',
  description:
    'Take a quick IQ test with 10 original reasoning questions. Get free instant results and clear explanations in about 5 minutes. No signup needed.',
  alternates: {
    canonical: '/quick-iq-test/',
  },
  openGraph: {
    title: 'Quick IQ Test – 10 Questions With Free Instant Results',
    description:
      'Take a quick IQ test with 10 original reasoning questions. Get free instant results and clear explanations in about 5 minutes. No signup needed.',
    url: '/quick-iq-test/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick IQ Test – 10 Questions With Free Instant Results',
    description:
      'Take a quick IQ test with 10 original reasoning questions. Get free instant results and clear explanations in about 5 minutes. No signup needed.',
  },
};

export default function QuickIQTestPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://theiqtest.org/quick-iq-test/#webpage',
        url: 'https://theiqtest.org/quick-iq-test/',
        name: 'Quick IQ Test – 10 Questions With Free Instant Results',
        description:
          'Take a quick IQ test with 10 original reasoning questions. Get free instant results and clear explanations in about 5 minutes. No signup needed.',
        inLanguage: 'en',
      },
      {
        '@type': 'Quiz',
        '@id': 'https://theiqtest.org/quick-iq-test/#quiz',
        name: 'Quick IQ Test – 10 Questions in About 5 Minutes',
        description:
          'A short 10-question reasoning practice test covering numerical sequences, abstract patterns, logical deductions, and spatial rotations with free instant scoring.',
        educationalLevel: 'General Public',
        timeRequired: 'PT5M',
        typicalAgeRange: '16-',
        hasPart: [
          {
            '@type': 'Question',
            name: 'Numerical Reasoning Sequence',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Abstract Visual Pattern',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Deductive Logic Statement',
            eduQuestionType: 'Multiple choice',
          },
          {
            '@type': 'Question',
            name: 'Spatial Mental Rotation',
            eduQuestionType: 'Multiple choice',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://theiqtest.org/quick-iq-test/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is this quick IQ test free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The quick reasoning assessment is designed to be free, including its basic results and answer explanations. You can start the ten-question test without creating an account or paying for a report. Your result shows your accuracy on the practice questions, not a standardized intelligence quotient. The goal is to make short reasoning practice convenient and accessible.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does a 10-question IQ test take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Most visitors can aim to spend approximately five minutes on this short challenge, although the actual time depends on the questions and individual pace. Our Quick IQ Test is untimed by default, so you don't need to rush. Take enough time to understand each problem and review the available answers before making your choice.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can I get instant results without signing up?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can submit your ten answers and see your practice score immediately without providing an email address or creating an account. The result includes your correct-answer count, percentage accuracy, and explanations. This makes the tool suitable for anyone searching for a quick free IQ test with instant results and no unnecessary registration steps.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is a short IQ test accurate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "A short IQ test can accurately calculate how many questions you answered correctly, but that doesn't mean it can accurately measure standardized IQ. Ten questions provide limited information, and our assessment has not been normed against a representative population. Treat your result as practice feedback rather than a scientific measurement of overall intelligence.",
            },
          },
          {
            '@type': 'Question',
            name: 'What types of IQ questions are included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "The assessment contains ten multiple-choice questions: three numerical reasoning problems, three abstract-pattern questions, two logical deduction problems, and two spatial reasoning challenges. You'll encounter number relationships, visual rules, conclusions based on statements, and geometric transformations. Each question has four options and one intended correct answer.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can I retake the Quick IQ Test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can restart the assessment if you want to practise again or review the question formats. Remember that answering the same questions repeatedly may improve your score through familiarity. Rather than focusing only on achieving a higher percentage, pay attention to why each answer is correct and practise different puzzles when available.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I take the quick IQ test or the full IQ test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Choose the quick version if you have about five minutes and want a short introduction to reasoning questions. Choose the full version if you prefer a longer, 20-question challenge. Both provide practice feedback rather than professionally standardized IQ scores. You can start with the short version and move to the full IQ Test whenever you're ready.",
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
      <QuickTestClient />
    </>
  );
}
