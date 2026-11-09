import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { IQChartHero } from '@/components/iq-chart/IQChartHero';
import { IQChartContainer } from '@/components/iq-chart/IQChartContainer';
import { IQChartArticle } from '@/components/iq-chart/IQChartArticle';

export const metadata: Metadata = {
  title: 'IQ Score Chart – IQ Scale, Ranges & Bell Curve',
  description:
    'Explore our interactive IQ score chart with IQ ranges, a bell curve, and theoretical percentiles. Enter a score to see where it falls on the scale.',
  alternates: {
    canonical: '/iq-score-chart/',
  },
  openGraph: {
    title: 'IQ Score Chart – IQ Scale, Ranges & Bell Curve',
    description:
      'Explore our interactive IQ score chart with IQ ranges, a bell curve, and theoretical percentiles. Enter a score to see where it falls on the scale.',
    url: '/iq-score-chart/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IQ Score Chart – IQ Scale, Ranges & Bell Curve',
    description:
      'Explore our interactive IQ score chart with IQ ranges, a bell curve, and theoretical percentiles. Enter a score to see where it falls on the scale.',
  },
};

export default function IQScoreChartPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://iqtest.org/iq-score-chart/#webpage',
        url: 'https://iqtest.org/iq-score-chart/',
        name: 'IQ Score Chart – IQ Scale, Ranges & Bell Curve',
        description:
          'Explore our interactive IQ score chart with IQ ranges, a bell curve, and theoretical percentiles. Enter a score to see where it falls on the scale.',
        inLanguage: 'en',
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://iqtest.org/iq-score-chart/#app',
        name: 'Interactive IQ Score Chart & Bell Curve',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Interactive normal distribution bell curve model for standardized IQ scores with mean 100 and standard deviation 15.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://iqtest.org/iq-score-chart/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a good IQ score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'There is no universal threshold that makes an IQ score good or bad for every person or situation. On our chart, 100 is the modeled average, while scores such as 115 and 130 fall one and two standard deviations above it. A score should be interpreted using the relevant test’s norms, purpose, and measurement limitations. It should not be treated as a complete judgment of someone’s abilities or potential.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the average IQ score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The average on many commonly used modern IQ scales is standardized to 100. Our interactive chart uses that value as its center, with a standard deviation of 15. Under the theoretical normal model, an IQ of 100 corresponds to the 50th percentile. Actual test interpretation depends on the assessment and its reference population.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does an IQ of 115 mean?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On a scale with mean 100 and standard deviation 15, an IQ of 115 is one standard deviation above the mean. Its theoretical percentile is approximately 84.13. This describes its position in the modeled score distribution, not a person’s guaranteed performance in education, work, or everyday life.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does an IQ of 130 mean?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An IQ of 130 is two standard deviations above the average on our reference scale. Its theoretical percentile is approximately 97.72. It falls toward the upper tail of the model. Formal interpretation depends on the particular assessment, and a score entered into this website is not proof of qualification for any organization.',
            },
          },
          {
            '@type': 'Question',
            name: 'What percentage of people fall between IQ 85 and 115?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In an ideal normal distribution with mean 100 and standard deviation 15, approximately 68.27% of scores fall between 85 and 115. This is the familiar one-standard-deviation interval. It is a mathematical property of the selected model, not a directly observed percentage from visitors to our website.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is an IQ percentile the same as a test percentage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. A test percentage describes the share of questions answered correctly. A percentile describes the position of a score within a defined reference distribution. For example, getting 80% of practice questions correct does not prove you are at the 80th percentile. A meaningful percentile interpretation requires appropriate norms.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use my online IQ test score on this chart?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only if you understand what the number represents. A raw practice score such as 7/10 or 70% is not a standardized IQ score and should not be entered as though it were one. If an online test reports an IQ number without credible information about its norms and validation, treat that number cautiously. Our chart cannot verify whether it is trustworthy.',
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
        <IQChartHero />

        {/* Interactive Tool Container */}
        <Suspense
          fallback={
            <div className="w-full h-96 flex items-center justify-center bg-white rounded-3xl border border-[#E2EAF7]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#60718B]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2453FF] animate-pulse" />
                <span>Loading Interactive Chart...</span>
              </div>
            </div>
          }
        >
          <IQChartContainer />
        </Suspense>

        {/* Educational SEO Article */}
        <IQChartArticle />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
