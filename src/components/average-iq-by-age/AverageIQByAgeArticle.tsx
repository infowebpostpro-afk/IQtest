'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  HelpCircle,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  BarChart2,
  ChevronDown,
  ExternalLink,
  Info,
  Scale,
  Sparkles,
  ArrowUp,
  Brain,
  Users,
  Compass,
  FileText,
  Activity,
  Layers,
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is the average IQ by age?',
    answer:
      'On many modern age-normed IQ scales, the average standardized score is approximately 100 for each supported age group. This is because scores are interpreted relative to an appropriate normative comparison group. It does not mean people of different ages have identical knowledge, cognitive performance, or raw test results.',
  },
  {
    question: 'What is the average IQ for a 10-year-old?',
    answer:
      'The average IQ for a 10-year-old is approximately 100 on a properly age-normed intelligence assessment using the conventional mean-100 scale. A result is interpreted relative to other children in the appropriate age-reference group. An informal online quiz score should not automatically be treated as a standardized IQ result.',
  },
  {
    question: 'What is the average IQ for a 13-year-old?',
    answer:
      'The average standardized IQ for a 13-year-old is approximately 100. At this age, cognitive skills are still developing, but a correctly age-normed score compares the teenager with an appropriate group of peers. Raw performance can increase over time without producing an equivalent increase in standardized IQ.',
  },
  {
    question: 'What is the average IQ for a 16-year-old?',
    answer:
      'The average IQ reference for a 16-year-old is approximately 100 on a suitable age-normed test. Certain child and adult assessment instruments overlap at this age. Selecting the appropriate test depends on the assessment purpose and the qualified examiner\'s judgment.',
  },
  {
    question: 'What is the average IQ for a 20-year-old?',
    answer:
      'The average standardized IQ for a 20-year-old is approximately 100 on a conventional age-normed scale. This does not mean cognitive performance stops developing at age 20. Different abilities may improve, remain stable, or change at different stages of adulthood.',
  },
  {
    question: 'What is the average IQ at 30 or 40?',
    answer:
      'The reference mean remains approximately 100 at ages 30 and 40 on age-normed assessments. A person\'s actual score depends on assessment performance and the relevant norms, not simply chronological age. Knowledge-based and speeded cognitive tasks may follow different age-related patterns.',
  },
  {
    question: 'What is the average IQ at 60 or 70?',
    answer:
      'The average age-normed IQ reference is approximately 100 at ages 60 and 70 on assessments designed and standardized for those ages. This does not imply identical raw performance to younger adults. Older adults may show different patterns across processing speed, memory, reasoning, and accumulated knowledge.',
  },
  {
    question: 'Does IQ decrease with age?',
    answer:
      'Some underlying cognitive abilities, particularly certain speeded tasks, may show age-related declines. However, other abilities follow different trajectories, and age-normed IQ scores are interpreted relative to same-age reference groups. An individual\'s standardized IQ does not automatically decrease by a fixed number of points each decade.',
  },
  {
    question: 'At what age does intelligence peak?',
    answer:
      'There is no single age at which every cognitive ability peaks. Research shows that different abilities have different average developmental and aging patterns. Some speeded tasks reach their strongest average performance relatively early, while vocabulary and knowledge-based abilities can peak later. Individual differences are substantial.',
  },
  {
    question: 'What is a good IQ for my age?',
    answer:
      'Rather than judging a score by age alone, compare it with the norms and interpretation supplied by the assessment. An IQ of 100 is generally near the reference mean on common modern scales. A score above or below 100 describes relative performance, but a complete interpretation should consider measurement uncertainty and the purpose of testing.',
  },
  {
    question: 'Is IQ 100 average at every age?',
    answer:
      'On many modern age-normed IQ scales, yes: 100 is the reference mean for the normed age groups. But not every test uses identical norms, age ranges, or score scales. The figure is a characteristic of the standardized scoring system, not a claim that every human population or online testing dataset has an observed mean of exactly 100.',
  },
  {
    question: 'Can online IQ test scores be compared across ages?',
    answer:
      'Only when the assessment has appropriate norms and evidence supporting the intended comparison. A raw score from a short online reasoning quiz is generally not enough. Different tests may use different questions, scoring procedures, and reference groups. For meaningful interpretation, consult the original assessment\'s scoring information.',
  },
];

export const AverageIQByAgeArticle: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="w-full space-y-12 sm:space-y-16 text-[#07152F] antialiased">
      {/* ========================================================================= */}
      {/* SECTION 1: QUICK ANSWER AND CHART                                         */}
      {/* ========================================================================= */}
      <section id="average-iq-chart" className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8 scroll-mt-24">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <BookOpen className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Overview &amp; Scoring Baseline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Average IQ by Age: Quick Answer and Chart
          </h2>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-[#60718B] leading-relaxed">
          <p>
            The average IQ by age is approximately 100 on commonly used modern, age-normed IQ scales. This applies to children, teenagers, adults, and older adults within the age ranges covered by an appropriate standardized assessment.
          </p>
          <p>
            It may seem surprising that the average IQ of a 10-year-old and a 40-year-old can both be 100. The explanation is simple: modern IQ scores are generally calculated by comparing a person&apos;s performance with people of a similar age, rather than comparing everyone with one universal set of raw scores.
          </p>
          <p>
            A child and an adult can therefore receive the same standardized IQ score even when they answer different questions or demonstrate different levels of raw performance.
          </p>
        </div>

        {/* Average IQ by Age Chart Table */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#07152F] flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-[#2453FF]" />
              <span>Average IQ by Age Chart</span>
            </h3>
            <span className="text-xs font-semibold text-[#60718B] bg-[#F7FAFF] px-2.5 py-1 rounded-lg border border-[#E2EAF7]">
              Model: Mean 100, SD 15
            </span>
          </div>
          <p className="text-sm text-[#60718B] leading-relaxed">
            The following chart uses the conventional mean of 100 and standard deviation of 15 found in several widely used modern intelligence assessments.
          </p>

          <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="Average IQ by Age Reference Chart">
                <thead className="bg-[#F7FAFF] text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7]">
                  <tr>
                    <th scope="col" className="py-3 px-4 sm:px-6">Age group</th>
                    <th scope="col" className="py-3 px-4 sm:px-6">Reference mean IQ</th>
                    <th scope="col" className="py-3 px-4 sm:px-6">Approximate central 68% range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2EAF7] bg-white">
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Children ages 6–9</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Children ages 10–12</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Teenagers ages 13–15</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Older teenagers ages 16–19</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Young adults ages 20–29</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Adults ages 30–39</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Adults ages 40–49</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Adults ages 50–59</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Older adults ages 60–69</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Older adults ages 70–79</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#07152F]">Older adults ages 80+</td>
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100</td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#07152F]">85–115</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[#F7FAFF] p-4 text-xs text-[#60718B] border-t border-[#E2EAF7] space-y-2">
              <p>
                <strong className="text-[#07152F]">How to read this chart:</strong> The value 100 is the reference mean of an age-normed IQ scale. The 85–115 interval represents approximately one standard deviation below and above the mean, containing about 68% of a theoretical normal distribution.
              </p>
              <p>
                This is an illustrative scoring reference, not an independently collected worldwide survey of each age group. The exact age coverage, norm groups, reported scores, and interpretation vary by assessment. For example, the WISC-V covers ages 6:0 through 16:11, while the WAIS-5 covers ages 16:0 through 90:11.
              </p>
              <p>
                The chart does not establish clinical classifications or guarantee that every available IQ test uses the same scale.
              </p>
              <p className="text-[#2453FF] font-medium">
                The important takeaway is that an average standardized IQ score stays centered around 100 because scores are interpreted relative to appropriate age norms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHY IS THE AVERAGE IQ AROUND 100 AT EVERY AGE?                 */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Scale className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Standardization Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Why Is the Average IQ Around 100 at Every Age?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            The average remains near 100 because of how many modern IQ tests are standardized.
          </p>
          <p>
            A test publisher administers an assessment to a reference sample and uses the results to develop norms. These norms allow a person&apos;s performance to be interpreted relative to an appropriate comparison group.
          </p>
          <p>
            When age-based norms are used, a person&apos;s chronological age helps determine which comparison group applies.
          </p>
          <p>
            This is different from simply adding up the questions they answered correctly.
          </p>
        </div>

        <div className="space-y-6 pt-2">
          {/* Sub-section 1 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Does Age-Normed IQ Mean?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              An age-normed IQ score describes performance relative to people of approximately the same age in the test&apos;s normative sample.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Imagine two people:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-base text-[#60718B]">
              <li>A 10-year-old takes an appropriate children&apos;s intelligence assessment and receives IQ 100.</li>
              <li>A 40-year-old takes an appropriate adult assessment and receives IQ 100.</li>
            </ul>
            <p className="text-base text-[#60718B] leading-relaxed">
              Both results indicate performance near the average of the relevant age reference group.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              They do not mean the child and adult have identical vocabulary, knowledge, memory performance, or raw problem-solving scores.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Age norming helps account for expected developmental and age-related differences when interpreting test performance.
            </p>
          </div>

          {/* Sub-section 2 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Raw Scores vs. Standardized IQ Scores
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A raw score usually represents performance before conversion into a norm-referenced score.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              It might be the number of correct answers, points earned, or another task-specific measurement.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A standardized IQ score is produced using the assessment&apos;s scoring procedures and norms.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For example, a child may solve fewer items than an adult on a task while still performing near the average for their own age.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Both could receive standardized scores centered around 100.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The precise conversion depends on the assessment, age group, item difficulty, and scoring rules.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed font-semibold text-[#07152F]">
              This is why you cannot compare raw results from different ages and directly calculate the difference in IQ.
            </p>
          </div>

          {/* Sub-section 3 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Does the 85–115 IQ Range Mean?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              On a theoretical normal IQ distribution with a mean of 100 and standard deviation of 15:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-base text-[#60718B]">
              <li>IQ 85 is one standard deviation below the mean.</li>
              <li>IQ 100 is the mean.</li>
              <li>IQ 115 is one standard deviation above the mean.</li>
            </ul>
            <p className="text-base text-[#60718B] leading-relaxed">
              Approximately 68% of the modeled distribution falls between 85 and 115.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This is a statistical reference range, not a universal clinical label. For example, the WISC-V commonly describes scores from 90 to 109 as average in its own interpretive framework.
            </p>
            <p className="text-xs font-semibold text-[#2453FF] bg-[#EEF2FF] p-3 rounded-xl border border-[#2453FF]/20">
              Always use the classifications and confidence intervals provided by the assessment that produced a person&apos;s score.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: AVERAGE IQ FOR CHILDREN AND TEENAGERS                          */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Users className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Youth Assessment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Average IQ for Children and Teenagers
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            Parents and students often search for the average IQ for kids or specific ages, such as 10, 12, 13, 15, and 16.
          </p>
          <p>
            The answer is generally the same on an appropriately standardized age-normed scale: the reference mean is approximately 100.
          </p>
          <p>
            However, cognitive development during childhood and adolescence is not the same as having a fixed level of raw ability.
          </p>
          <p>
            Children continue developing language, attention, reasoning strategies, knowledge, and other skills as they grow.
          </p>
          <p>
            Age-normed scoring accounts for expected differences in performance between age groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Sub-section 1 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#07152F]">
              What Is the Average IQ for a 10-Year-Old?
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              The average standardized IQ for a 10-year-old is approximately 100 on an age-normed assessment using the conventional IQ scale.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              An IQ of 100 means the child&apos;s performance is near the average of the appropriate age-reference group.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A score of 115 would be approximately one standard deviation above the mean on an SD-15 scale.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              It would not mean the child has the same knowledge or raw performance as an adult with IQ 115.
            </p>
            <p className="text-xs text-[#60718B] italic">
              A properly interpreted score should come from an assessment appropriate for the child&apos;s age, with consideration of its measurement error and other relevant factors.
            </p>
          </div>

          {/* Sub-section 2 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#07152F]">
              What Is the Average IQ for a 12- or 13-Year-Old?
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              For both 12-year-olds and 13-year-olds, the reference average IQ is approximately 100 when using an appropriately age-normed test.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A 13-year-old may perform better on many raw tasks than they did at age 12 while still receiving a similar standardized IQ score.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              That is because the age-based comparison standard also changes.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Growth in school knowledge, vocabulary, and reasoning experience does not necessarily produce an equivalent increase in age-normed IQ.
            </p>
          </div>

          {/* Sub-section 3 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#07152F]">
              What Is the Average IQ for a 15- or 16-Year-Old?
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              The average standardized IQ for a 15-year-old or 16-year-old is also approximately 100.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              During adolescence, some aspects of cognitive performance continue to develop, but changes vary by ability and person.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Age 16 is also a point where certain child and adult assessments overlap in eligibility.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              For instance, Pearson provides guidance on choosing between the WISC-V and WAIS-5 for 16-year-olds, emphasizing that the appropriate instrument depends on the individual&apos;s circumstances and assessment purpose.
            </p>
            <p className="text-xs text-[#2453FF] font-medium">
              The correct test is not selected solely by searching for an average IQ chart.
            </p>
          </div>

          {/* Sub-section 4 */}
          <div className="bg-amber-50/70 rounded-2xl border border-amber-200/80 p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-amber-950 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Should Parents Use an Online IQ Test for a Child?</span>
            </h3>
            <p className="text-sm text-amber-900 leading-relaxed">
              An online reasoning quiz may provide educational practice, but its result should not automatically be treated as a standardized IQ score.
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              Children&apos;s assessments require appropriate age norms, suitable materials, reliable administration, and qualified interpretation when used for important decisions.
            </p>
            <p className="text-xs font-semibold text-amber-950">
              A score from a short unstandardized quiz cannot establish a child&apos;s intelligence percentile, educational needs, or diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: AVERAGE IQ FOR ADULTS AND OLDER ADULTS                         */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Activity className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Adult Lifespan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Average IQ for Adults and Older Adults
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            The average IQ for adults is approximately 100 on a modern, age-normed IQ scale.
          </p>
          <p>
            That reference mean applies across the supported adult age groups, even though different cognitive abilities may change throughout adulthood.
          </p>
          <p>
            A score of 100 at age 25 and a score of 100 at age 65 both indicate performance near the average of the relevant reference group.
          </p>
          <p>
            They do not imply identical performance on every cognitive task.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Ages 20, 30 and 40 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#07152F]">
              Average IQ at Ages 20, 30 and 40
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              People searching for the average IQ for a 20-year-old, at 30, or at 40 will generally find the same standardized reference mean: approximately 100.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              This does not mean cognitive performance is completely unchanged across those decades.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Processing speed, working memory, accumulated knowledge, and other abilities may follow different patterns.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              For example, a person might gain vocabulary and professional knowledge while becoming somewhat slower on a particular speeded task.
            </p>
            <p className="text-xs text-[#2453FF] font-medium pt-1">
              A broad IQ score combines information according to a specific assessment&apos;s rules and is interpreted against suitable norms.
            </p>
          </div>

          {/* Ages 50 and 60 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#07152F]">
              Average IQ at Ages 50 and 60
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              The average standardized IQ reference remains approximately 100 for people in their 50s and 60s when their assessment uses appropriate age norms.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Some speeded tasks may become more challenging with age, but performance varies considerably across people and cognitive domains.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Other skills, including knowledge built through experience, can remain relatively strong.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed font-semibold text-[#07152F]">
              It would be misleading to claim that everyone loses a fixed number of IQ points after age 50.
            </p>
            <p className="text-xs text-[#60718B] pt-1">
              The meaning of an age-normed score depends on the actual test and its comparison population.
            </p>
          </div>

          {/* Ages 70 and 80 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#07152F]">
              Average IQ at Ages 70 and 80
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              The average age-normed IQ reference is also approximately 100 for older adults within the valid age range of the chosen assessment.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              However, assessment selection is particularly important.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A test must have norms that apply to the person&apos;s age, and the examiner must consider the purpose and circumstances of testing.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              An 80-year-old&apos;s standardized score cannot be interpreted appropriately using an unrelated younger-adult norm table.
            </p>
            <p className="text-xs text-[#60718B] italic pt-1">
              Age-related changes in specific cognitive abilities should be understood separately from the mathematical reference mean of a normed IQ scale. An individual&apos;s score may also change over time for many reasons, and no simple age table can predict that person&apos;s result.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: DOES IQ INCREASE OR DECREASE WITH AGE?                         */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Lifespan Trajectories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Does IQ Increase or Decrease With Age?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            There is no single answer that applies equally to every aspect of intelligence.
          </p>
          <p>
            Raw cognitive performance, age-normed IQ scores, and a person&apos;s relative standing are different things.
          </p>
          <p>
            Some cognitive abilities develop rapidly during childhood. Other skills improve through learning and experience across adulthood. Certain abilities may decline with increasing age, although the timing and degree vary.
          </p>
          <p>
            A standardized IQ score can remain similar even as performance on individual tasks changes.
          </p>
        </div>

        <div className="space-y-6 pt-2">
          {/* Sub-section 1 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Cognitive Development During Childhood
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Childhood involves substantial changes in learning, language, reasoning, attention, and other cognitive skills.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              As children grow, they often become capable of solving more complex problems.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Their raw performance on many tasks may improve considerably from one year to the next.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              But age-normed scores compare those achievements with the performance expected in an appropriate reference group.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Therefore, a child who is average relative to peers at age 8 may still be average relative to peers at age 12, even after showing substantial developmental gains.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed font-semibold text-[#07152F]">
              This is one reason chronological age is essential when interpreting children&apos;s standardized test results.
            </p>
          </div>

          {/* Sub-section 2 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Cognitive Changes During Adulthood
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Different abilities follow different age trajectories.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              In a widely cited 2015 study, Joshua Hartshorne and Laura Germine analyzed cognitive performance across a broad range of ages. Their findings showed that different cognitive tasks reached their strongest average performance at different points in life.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Some skills performed best earlier, others showed later peaks or broad periods of relative stability, and some knowledge-based abilities peaked in middle adulthood or beyond.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The research does not support the idea that the entire mind has one universal peak age.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              It also does not mean that everyone follows the same pattern.
            </p>
            <div className="pt-1">
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4441622/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2453FF] hover:underline"
              >
                <span>Study: When Does Cognitive Functioning Peak? — Psychological Science</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Sub-section 3 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why Age-Normed IQ May Remain Similar
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Age-normed IQ measures position relative to an appropriate age-based reference group.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If a person&apos;s performance changes in ways similar to others of the same age, their standardized score may remain relatively stable.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              But this is not guaranteed.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Individual scores can change because of development, health, measurement variability, educational experiences, differences between tests, and other factors.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A 2024 meta-analysis of 205 longitudinal studies involving more than 87,000 participants found that the relative ordering of cognitive abilities generally becomes more stable through childhood and remains comparatively stable across much of adulthood.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The study concerns rank-order stability, not a claim that raw cognitive performance never changes.
            </p>
            <div className="pt-1">
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626988/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2453FF] hover:underline"
              >
                <span>Research: The Stability of Cognitive Abilities — Psychological Bulletin</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: FLUID VS. CRYSTALLIZED INTELLIGENCE BY AGE                     */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Brain className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Cognitive Components</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Fluid vs. Crystallized Intelligence by Age
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            One useful way to understand intelligence and aging is to distinguish between fluid and crystallized cognitive abilities.
          </p>
          <p>
            These categories help explain why different types of thinking can change differently over the lifespan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Fluid Reasoning Card */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#2453FF] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                Gf
              </div>
              <h3 className="text-lg font-bold text-[#07152F]">
                Fluid Reasoning and Processing Speed
              </h3>
            </div>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Fluid reasoning involves solving unfamiliar problems, identifying relationships, and working with information that does not depend heavily on previously learned facts.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Processing speed concerns how quickly someone performs certain mental tasks.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              These abilities are related but not identical.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Performance on some speeded tasks often reaches its average peak earlier in adulthood than certain knowledge-based abilities.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              However, different fluid-reasoning and memory tasks can have different trajectories.
            </p>
            <p className="text-xs font-semibold text-[#2453FF] bg-[#EEF2FF] p-2.5 rounded-xl border border-[#2453FF]/20">
              There is no reliable single age when every aspect of fluid intelligence reaches its maximum.
            </p>
          </div>

          {/* Crystallized Card */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#2453FF] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                Gc
              </div>
              <h3 className="text-lg font-bold text-[#07152F]">
                Crystallized Knowledge and Vocabulary
              </h3>
            </div>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Crystallized intelligence refers broadly to knowledge and skills acquired through learning and experience.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Vocabulary, general information, and familiarity with concepts are examples of knowledge-based abilities.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              These skills may continue to develop during adulthood, and some remain relatively strong later in life.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              For example, a person may acquire technical vocabulary, professional expertise, or broader knowledge over decades.
            </p>
            <p className="text-xs font-semibold text-[#07152F] bg-white p-2.5 rounded-xl border border-[#E2EAF7]">
              This does not mean age automatically increases overall IQ, but it helps explain why experience can support performance on some tasks.
            </p>
          </div>
        </div>

        {/* Sub-section: Single Peak */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xl font-bold text-[#07152F]">
            Why There Is No Single Peak Age for Intelligence
          </h3>
          <p className="text-base text-[#60718B] leading-relaxed">
            Imagine comparing someone in their early 20s with someone in their 50s.
          </p>
          <p className="text-base text-[#60718B] leading-relaxed">
            The younger adult might perform faster on a particular timed task.
          </p>
          <p className="text-base text-[#60718B] leading-relaxed">
            The older adult might have stronger performance on a vocabulary or experience-dependent task.
          </p>
          <p className="text-base text-[#60718B] leading-relaxed">
            Neither observation alone establishes who has a higher general intelligence score.
          </p>
          <p className="text-base text-[#60718B] leading-relaxed">
            Overall cognitive assessment involves multiple abilities and carefully defined scoring procedures.
          </p>
          <p className="text-base text-[#60718B] leading-relaxed">
            The research by Hartshorne and Germine supports the conclusion that cognitive peaks are distributed across different ages rather than occurring at one universal point.
          </p>
          <div className="p-4 rounded-2xl bg-[#EEF2FF] border border-[#2453FF]/20 text-sm font-bold text-[#07152F]">
            The key lesson: Intelligence is not a single raw skill that increases until one birthday and then declines at the same rate for everyone.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: HOW TO COMPARE YOUR IQ WITH OTHERS YOUR AGE                   */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Compass className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Score Context</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            How to Compare Your IQ With Others Your Age
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            If you already have a standardized IQ score, the most useful question is not whether your age group has a higher average than another group.
          </p>
          <p>
            Instead, ask what the score means relative to the norms used by your assessment.
          </p>
        </div>

        <div className="space-y-6">
          {/* Sub-section 1 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Understanding Your Age-Normed IQ Score
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Suppose you have a properly standardized IQ result of 115 from an assessment using mean 100 and standard deviation 15.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              That score is one standard deviation above the reference mean.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              It indicates a position above the average of the relevant normative comparison group.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              However, the exact interpretation depends on the test edition, its norms, measurement uncertainty, and reporting rules.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If you&apos;re comparing two results obtained at different ages, verify that the scores were obtained using appropriate and comparable assessments.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed font-semibold text-[#07152F]">
              Do not simply subtract the numbers and assume the difference represents a true change in intelligence.
            </p>
          </div>

          {/* Sub-section 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#07152F]">
              Understanding an IQ Percentile
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A percentile rank describes a score&apos;s position within a reference distribution.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Under a theoretical normal model with mean 100 and standard deviation 15:
            </p>

            <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden max-w-md">
              <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="IQ Score to Approximate Percentile Table">
                <thead className="bg-[#F7FAFF] text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7]">
                  <tr>
                    <th scope="col" className="py-3 px-4 sm:px-6">IQ score</th>
                    <th scope="col" className="py-3 px-4 sm:px-6 text-right">Approximate percentile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2EAF7] bg-white font-mono">
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">85</td>
                    <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">15.87th</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors bg-[#EEF2FF]/40">
                    <td className="py-2.5 px-4 sm:px-6 font-bold text-[#2453FF]">100</td>
                    <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">50th</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">115</td>
                    <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">84.13th</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">130</td>
                    <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">97.72nd</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base text-[#60718B] leading-relaxed">
              For example, IQ 115 corresponds to approximately the 84th percentile under that model.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This is not the same as answering 84% of test questions correctly.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If you want to explore these theoretical conversions, use our{' '}
              <Link href="/iq-percentile-calculator" className="text-[#2453FF] font-bold hover:underline">
                IQ Percentile Calculator
              </Link>
              . You can also view the distribution visually on our{' '}
              <Link href="/iq-score-chart" className="text-[#2453FF] font-bold hover:underline">
                IQ Score Chart
              </Link>
              .
            </p>
          </div>

          {/* Sub-section 3 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why Your Original Test Report Matters
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              An official test report may provide age-specific percentile ranks, composite scores, confidence intervals, and interpretive guidance.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Those details are more appropriate for formal interpretation than a generic internet chart.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The report should identify the test, edition, relevant norms, and limitations.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A general educational tool cannot reproduce all the details of a particular assessment manual.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: WHY DO ONLINE IQ STATISTICS SHOW DIFFERENT AVERAGES?           */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Methodological Bias</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Why Do Online IQ Statistics Show Different Averages?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            You may see online articles claiming that the average IQ is 95 for one age group and 105 for another.
          </p>
          <p>
            Other websites present averages above or below 100 based on thousands of online test takers.
          </p>
          <p>
            These results can appear to contradict the idea that the average age-normed IQ is approximately 100.
          </p>
          <p>
            The difference usually lies in what was measured, who participated, and how the scores were calculated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Box 1 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#07152F]">
              Self-Selected Online Test Participants
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              People who choose to take an online IQ test are not necessarily representative of everyone in their age group.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              The visitors may differ in education, internet access, language, motivation, familiarity with puzzles, and other factors.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A website&apos;s participants may also be concentrated in particular countries or age groups.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Therefore, an average calculated from its visitors describes that dataset, not necessarily the wider population.
            </p>
            <p className="text-xs text-[#60718B] italic pt-1">
              For instance, an online test provider might calculate an average of 103 among visitors aged 20–29. That number does not establish that the universal average IQ of people in their 20s is 103. It describes the scores reported in that provider&apos;s particular sample.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#07152F]">
              Differences in Scoring and Test Design
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Two websites may produce different age-group averages because their tests are not scored in the same way.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              One may use a standardized age-normed scale.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Another may transform raw online quiz results into estimated IQ-like values using its own scoring method.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A third may report observed scores from a self-selected sample.
            </p>
            <p className="text-xs font-semibold text-[#07152F] pt-1">
              Even if all three websites display the term &quot;IQ,&quot; their numbers may not be directly comparable.
            </p>
            <p className="text-xs text-[#60718B]">
              The same problem occurs when an online test has not clearly documented how its reference population was selected.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#07152F]">
              Why Sample Size Alone Is Not Enough
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A dataset containing 500,000 online participants may appear more reliable than one containing 5,000.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              But a large sample can still be biased.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              If participants were recruited through a particular website, they may not represent all people of the same age.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Scientific interpretation requires attention to the sampling process, test validity, measurement reliability, and scoring method—not merely the number of participants.
            </p>
            <div className="pt-1">
              <a
                href="https://www.testingstandards.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2453FF] hover:underline"
              >
                <span>Standards for Educational and Psychological Testing</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-[#2453FF] font-medium pt-1">
              This is why we present the standardized mean of 100 as a scoring reference, rather than copying observed averages from unrelated online testing populations.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: CAN YOU CALCULATE IQ FROM AGE ALONE?                           */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Scale className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Assessment Validity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Can You Calculate IQ From Age Alone?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p className="text-lg font-bold text-[#07152F]">
            No. Age alone cannot determine a person&apos;s IQ.
          </p>
          <p>
            Knowing that someone is 14, 30, or 70 does not reveal their score on a standardized intelligence assessment.
          </p>
          <p>
            Age helps establish which reference norms should be used.
          </p>
          <p>
            It does not replace actual assessment performance.
          </p>
          <p>
            Historically, some intelligence-testing approaches used a mental-age formula:
          </p>
          <div className="p-4 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7] font-mono text-center font-bold text-[#2453FF] text-base sm:text-lg max-w-md mx-auto">
            IQ = (Mental Age ÷ Chronological Age) × 100
          </div>
          <p>
            That historical ratio approach is not the same as the modern deviation-IQ scoring used by many contemporary assessments.
          </p>
          <p>
            You cannot reliably estimate a modern IQ score by entering someone&apos;s age and guessing their mental age.
          </p>
          <p>
            An age-based IQ calculator that claims to determine personal intelligence from age alone would be misleading.
          </p>
          <p className="text-sm font-semibold text-[#60718B] bg-[#F7FAFF] p-4 rounded-2xl border border-[#E2EAF7]">
            Our age-norm explorer is designed to explain how standardized scores are interpreted, not calculate a person&apos;s intelligence without testing.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: COMMON MISTAKES WHEN READING IQ-BY-AGE CHARTS                  */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Interpretation Guardrails</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Common Mistakes When Reading IQ-by-Age Charts
          </h2>
          <p className="text-base text-[#60718B] mt-2">
            An average IQ by age chart can be useful, but only when its numbers are interpreted correctly.
          </p>
        </div>

        {/* Responsive Comparison Table */}
        <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="Common Mistakes When Reading IQ-by-Age Charts">
              <thead className="bg-[#F7FAFF] text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7]">
                <tr>
                  <th scope="col" className="py-3 px-4 sm:px-6 w-1/2">Common mistake</th>
                  <th scope="col" className="py-3 px-4 sm:px-6 w-1/2">Correct interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] bg-white">
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-rose-700">Assuming IQ automatically increases every year</td>
                  <td className="py-3 px-4 sm:px-6 text-[#07152F]">Age-normed scores are centered around a reference mean</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-rose-700">Comparing children&apos;s and adults&apos; raw test scores</td>
                  <td className="py-3 px-4 sm:px-6 text-[#07152F]">Use appropriate age-based norms</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-rose-700">Treating 80% correct as IQ 80</td>
                  <td className="py-3 px-4 sm:px-6 text-[#07152F]">Percentage correct and standardized IQ are different measurements</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-rose-700">Treating an online website&apos;s visitors as the world population</td>
                  <td className="py-3 px-4 sm:px-6 text-[#07152F]">Examine sampling and test methods</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-rose-700">Assuming everyone loses IQ points after a certain age</td>
                  <td className="py-3 px-4 sm:px-6 text-[#07152F]">Individual trajectories and cognitive domains differ</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-rose-700">Assuming all cognitive skills peak at the same age</td>
                  <td className="py-3 px-4 sm:px-6 text-[#07152F]">Research shows different abilities follow different trajectories</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-rose-700">Treating an IQ score as perfectly exact</td>
                  <td className="py-3 px-4 sm:px-6 text-[#07152F]">Standardized assessment scores have measurement uncertainty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3 text-sm text-[#60718B] leading-relaxed pt-2">
          <p>
            The most important distinction is between a normative reference score and an observed raw performance measurement.
          </p>
          <p>
            An age-normed mean of 100 does not imply that raw cognitive abilities remain unchanged throughout life.
          </p>
          <p>
            Similarly, an observed difference in scores from one online testing dataset does not establish a universal age-related difference in intelligence.
          </p>
          <p className="text-xs font-semibold text-amber-900 bg-amber-50/70 p-3 rounded-xl border border-amber-200/80">
            If a chart does not explain where its numbers came from, treat its conclusions cautiously.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS ABOUT AVERAGE IQ BY AGE            */}
      {/* ========================================================================= */}
      <section id="faq-section" className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8 scroll-mt-24">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <HelpCircle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Frequently Asked Questions About Average IQ by Age
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] mt-2">
            Answers to common questions about age-normed scores, child and adult averages, and cognitive aging.
          </p>
        </div>

        {/* Accessible Accordion Component */}
        <div className="space-y-3" role="region" aria-label="Frequently Asked Questions Accordion">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-[#2453FF]/40 bg-[#F7FAFF] shadow-2xs'
                    : 'border-[#E2EAF7] bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF]"
                >
                  <span className="font-bold text-base sm:text-lg text-[#07152F]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#2453FF] text-white'
                        : 'bg-slate-100 text-[#60718B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#60718B] leading-relaxed border-t border-[#E2EAF7]/60 pt-4"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12: RESEARCH SOURCES AND METHODOLOGY                              */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-br from-white to-[#F7FAFF] rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Evidence &amp; Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Research Sources and Methodology
          </h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#60718B] leading-relaxed">
          <p>
            This page uses the conventional age-normed IQ scoring model, in which the reference mean is 100 and the standard deviation is commonly 15.
          </p>
          <p>
            The age-group chart is an educational illustration of that scoring convention. It is not based on an original population survey, and its repeated mean of 100 should not be interpreted as an observed worldwide statistic for every age.
          </p>
          <p>
            The accompanying Age-Norm Explorer illustrates theoretical relationships between standardized scores and percentile ranks. It does not administer an intelligence assessment, retrieve a test publisher&apos;s proprietary norms, or calculate a personal IQ from age alone.
          </p>

          <p className="font-bold text-[#07152F] pt-2">Our main references are:</p>
          <ol className="space-y-3 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
              <div>
                <strong className="text-[#07152F]">Pearson — Wechsler Intelligence Scale for Children, Fifth Edition (WISC-V).</strong>
                <div>
                  <a
                    href="https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/wisc-v/wisc-v-interpretive-report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#2453FF] font-semibold hover:underline"
                  >
                    <span>Official WISC-V interpretive report</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#60718B] mt-0.5">Explains the mean-100, SD-15 score scale and comparison with same-age children.</p>
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <strong className="text-[#07152F]">Pearson — Wechsler Adult Intelligence Scale, Fifth Edition (WAIS-5).</strong>
                <div>
                  <a
                    href="https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Cognition-%26-Neuro/Wechsler-Adult-Intelligence-Scale-%7C-Fifth-Edition/p/P100071002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#2453FF] font-semibold hover:underline"
                  >
                    <span>Official WAIS-5 documentation</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#60718B] mt-0.5">Provides information about adult assessment, age coverage, scoring, and interpretation.</p>
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
              <div>
                <strong className="text-[#07152F]">Hartshorne and Germine (2015).</strong>
                <div>
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4441622/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#2453FF] font-semibold hover:underline"
                  >
                    <span>When Does Cognitive Functioning Peak?</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#60718B] mt-0.5">Research on how different cognitive abilities reach their strongest average performance at different ages.</p>
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
              <div>
                <strong className="text-[#07152F]">The Stability of Cognitive Abilities: A Meta-Analytic Review of Longitudinal Studies (2024).</strong>
                <div>
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626988/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#2453FF] font-semibold hover:underline"
                  >
                    <span>Read the research</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#60718B] mt-0.5">Examines how the relative stability of cognitive abilities changes across childhood and adulthood.</p>
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
              <div>
                <strong className="text-[#07152F]">Standards for Educational and Psychological Testing.</strong>
                <div>
                  <a
                    href="https://www.testingstandards.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#2453FF] font-semibold hover:underline"
                  >
                    <span>Official testing standards</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#60718B] mt-0.5">Provides principles for interpreting tests, reference populations, norms, and appropriate score use.</p>
              </div>
            </li>
          </ol>

          <p className="pt-2">
            The information on this page is intended for education, not diagnosis or individual psychological evaluation.
          </p>
          <p>
            If you need an official interpretation of an intelligence test result, consult the test report or an appropriately qualified professional.
          </p>
          <p>
            Want to explore your score? Use the Age-Norm Explorer above to understand the age-adjusted reference mean, or try our{' '}
            <Link href="/" className="text-[#2453FF] font-bold hover:underline">
              Free IQ Test
            </Link>{' '}
            for an informal reasoning challenge. Remember that a practice quiz result is not a professionally standardized IQ score.
          </p>
        </div>

        {/* Back to top button */}
        <div className="pt-6 border-t border-[#E2EAF7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#60718B]">
            Explore the reference chart and explanations above to understand age-normed intelligence scoring.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2453FF] text-white text-xs sm:text-sm font-bold cta-glow hover:bg-[#1a44e6] cursor-pointer transition-colors shrink-0"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </article>
  );
};

