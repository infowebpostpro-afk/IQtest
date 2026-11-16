import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AverageIQByAgeHero } from '@/components/average-iq-by-age/AverageIQByAgeHero';
import { IQAgeNormExplorer } from '@/components/average-iq-by-age/IQAgeNormExplorer';
import { AverageIQByAgeArticle } from '@/components/average-iq-by-age/AverageIQByAgeArticle';

export const metadata: Metadata = {
  title: 'Average IQ by Age: Chart for Kids, Teens & Adults',
  description:
    'Discover the average IQ by age, with a clear chart for children, teens and adults. Learn why age-normed IQ averages 100 and how cognitive skills change.',
  alternates: {
    canonical: '/average-iq-by-age/',
  },
  openGraph: {
    title: 'Average IQ by Age: Chart for Kids, Teens & Adults',
    description:
      'Discover the average IQ by age, with a clear chart for children, teens and adults. Learn why age-normed IQ averages 100 and how cognitive skills change.',
    url: '/average-iq-by-age/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Average IQ by Age: Chart for Kids, Teens & Adults',
    description:
      'Discover the average IQ by age, with a clear chart for children, teens and adults. Learn why age-normed IQ averages 100 and how cognitive skills change.',
  },
};

export default function AverageIQByAgePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://theiqtest.org/average-iq-by-age/#webpage',
        url: 'https://theiqtest.org/average-iq-by-age/',
        name: 'Average IQ by Age: Chart for Kids, Teens & Adults',
        description:
          'Discover the average IQ by age, with a clear chart for children, teens and adults. Learn why age-normed IQ averages 100 and how cognitive skills change.',
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://theiqtest.org/average-iq-by-age/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the average IQ by age?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On many modern age-normed IQ scales, the average standardized score is approximately 100 for each supported age group. This is because scores are interpreted relative to an appropriate normative comparison group. It does not mean people of different ages have identical knowledge, cognitive performance, or raw test results.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the average IQ for a 10-year-old?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The average IQ for a 10-year-old is approximately 100 on a properly age-normed intelligence assessment using the conventional mean-100 scale. A result is interpreted relative to other children in the appropriate age-reference group. An informal online quiz score should not automatically be treated as a standardized IQ result.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the average IQ for a 13-year-old?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The average standardized IQ for a 13-year-old is approximately 100. At this age, cognitive skills are still developing, but a correctly age-normed score compares the teenager with an appropriate group of peers. Raw performance can increase over time without producing an equivalent increase in standardized IQ.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the average IQ for a 16-year-old?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The average IQ reference for a 16-year-old is approximately 100 on a suitable age-normed test. Certain child and adult assessment instruments overlap at this age. Selecting the appropriate test depends on the assessment purpose and the qualified examiner\'s judgment.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the average IQ for a 20-year-old?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The average standardized IQ for a 20-year-old is approximately 100 on a conventional age-normed scale. This does not mean cognitive performance stops developing at age 20. Different abilities may improve, remain stable, or change at different stages of adulthood.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the average IQ at 30 or 40?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The reference mean remains approximately 100 at ages 30 and 40 on age-normed assessments. A person\'s actual score depends on assessment performance and the relevant norms, not simply chronological age. Knowledge-based and speeded cognitive tasks may follow different age-related patterns.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the average IQ at 60 or 70?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The average age-normed IQ reference is approximately 100 at ages 60 and 70 on assessments designed and standardized for those ages. This does not imply identical raw performance to younger adults. Older adults may show different patterns across processing speed, memory, reasoning, and accumulated knowledge.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does IQ decrease with age?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Some underlying cognitive abilities, particularly certain speeded tasks, may show age-related declines. However, other abilities follow different trajectories, and age-normed IQ scores are interpreted relative to same-age reference groups. An individual\'s standardized IQ does not automatically decrease by a fixed number of points each decade.',
            },
          },
          {
            '@type': 'Question',
            name: 'At what age does intelligence peak?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'There is no single age at which every cognitive ability peaks. Research shows that different abilities have different average developmental and aging patterns. Some speeded tasks reach their strongest average performance relatively early, while vocabulary and knowledge-based abilities can peak later. Individual differences are substantial.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is a good IQ for my age?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Rather than judging a score by age alone, compare it with the norms and interpretation supplied by the assessment. An IQ of 100 is generally near the reference mean on common modern scales. A score above or below 100 describes relative performance, but a complete interpretation should consider measurement uncertainty and the purpose of testing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is IQ 100 average at every age?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On many modern age-normed IQ scales, yes: 100 is the reference mean for the normed age groups. But not every test uses identical norms, age ranges, or score scales. The figure is a characteristic of the standardized scoring system, not a claim that every human population or online testing dataset has an observed mean of exactly 100.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can online IQ test scores be compared across ages?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only when the assessment has appropriate norms and evidence supporting the intended comparison. A raw score from a short online reasoning quiz is generally not enough. Different tests may use different questions, scoring procedures, and reference groups. For meaningful interpretation, consult the original assessment\'s scoring information.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFF] text-[#07152F] relative overflow-hidden selection:bg-[#2453FF]/15 selection:text-[#2453FF]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subtle Ambient Background Gradients */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[640px] bg-gradient-to-b from-[#EBF2FF]/80 via-[#F7FAFF]/30 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full h-[520px] bg-grid-pattern opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-12 left-[15%] bg-[#2453FF]/6 -z-10"
        aria-hidden="true"
      />
      <div
        className="hero-glow top-24 right-[12%] bg-[#4779FF]/8 -z-10"
        aria-hidden="true"
      />

      {/* Global Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 sm:space-y-12">
        {/* Compact Hero Section */}
        <AverageIQByAgeHero />

        {/* Interactive IQ Age-Norm Explorer */}
        <IQAgeNormExplorer />

        {/* Educational SEO Article */}
        <AverageIQByAgeArticle />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

