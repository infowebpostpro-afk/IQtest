'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  HelpCircle,
  AlertTriangle,
  CheckCircle2,
  Calculator,
  TrendingUp,
  BarChart2,
  ChevronDown,
  ExternalLink,
  Info,
  Scale,
  Sparkles,
  ArrowUp,
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is a good IQ score?',
    answer:
      'There is no universal threshold that makes an IQ score good or bad for every person or situation. On our chart, 100 is the modeled average, while scores such as 115 and 130 fall one and two standard deviations above it. A score should be interpreted using the relevant test’s norms, purpose, and measurement limitations. It should not be treated as a complete judgment of someone’s abilities or potential.',
  },
  {
    question: 'What is the average IQ score?',
    answer:
      'The average on many commonly used modern IQ scales is standardized to 100. Our interactive chart uses that value as its center, with a standard deviation of 15. Under the theoretical normal model, an IQ of 100 corresponds to the 50th percentile. Actual test interpretation depends on the assessment and its reference population.',
  },
  {
    question: 'What does an IQ of 115 mean?',
    answer:
      'On a scale with mean 100 and standard deviation 15, an IQ of 115 is one standard deviation above the mean. Its theoretical percentile is approximately 84.13. This describes its position in the modeled score distribution, not a person’s guaranteed performance in education, work, or everyday life.',
  },
  {
    question: 'What does an IQ of 130 mean?',
    answer:
      'An IQ of 130 is two standard deviations above the average on our reference scale. Its theoretical percentile is approximately 97.72. It falls toward the upper tail of the model. Formal interpretation depends on the particular assessment, and a score entered into this website is not proof of qualification for any organization.',
  },
  {
    question: 'What percentage of people fall between IQ 85 and 115?',
    answer:
      'In an ideal normal distribution with mean 100 and standard deviation 15, approximately 68.27% of scores fall between 85 and 115. This is the familiar one-standard-deviation interval. It is a mathematical property of the selected model, not a directly observed percentage from visitors to our website.',
  },
  {
    question: 'Is an IQ percentile the same as a test percentage?',
    answer:
      'No. A test percentage describes the share of questions answered correctly. A percentile describes the position of a score within a defined reference distribution. For example, getting 80% of practice questions correct does not prove you are at the 80th percentile. A meaningful percentile interpretation requires appropriate norms.',
  },
  {
    question: 'Can I use my online IQ test score on this chart?',
    answer:
      'Only if you understand what the number represents. A raw practice score such as 7/10 or 70% is not a standardized IQ score and should not be entered as though it were one. If an online test reports an IQ number without credible information about its norms and validation, treat that number cautiously. Our chart cannot verify whether it is trustworthy.',
  },
];

export const IQChartArticle: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const scrollToChart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="w-full space-y-12 sm:space-y-16 text-[#07152F] antialiased">
      {/* ========================================================================= */}
      {/* SECTION 1: HOW TO READ OUR IQ SCORE CHART                                 */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <BookOpen className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Interactive Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            How to Read Our IQ Score Chart
          </h2>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-[#60718B] leading-relaxed">
          <p>
            An IQ score chart helps you understand where a standardized intelligence test score falls on a reference scale. Instead of looking at a number alone, you can see how far it is from the average, where it sits on a bell curve, and how it compares with the distribution represented by the chart.
          </p>
          <p>
            Our interactive IQ chart uses a common reference model with an average score of 100 and a standard deviation of 15. It is designed to help you explore the numbers visually, not to administer an IQ test or diagnose intellectual ability.
          </p>
        </div>

        {/* Step-by-Step Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Step 1 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-[#2453FF] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                1
              </span>
              <h3 className="text-lg font-bold text-[#07152F]">
                Step 1: Enter an IQ Score
              </h3>
            </div>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Start by entering a standardized IQ score into the tool. You can also move the slider or select one of the preset scores, such as 85, 100, 115, or 130.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              The chart highlights the selected number and shows its position on the horizontal IQ scale. For example, choosing 115 places your marker to the right of 100 because 115 is above the modeled average.
            </p>
            <p className="text-xs font-semibold text-[#2453FF] bg-[#EEF2FF] p-2.5 rounded-xl border border-[#2453FF]/20">
              Make sure you enter an actual standardized IQ score rather than the percentage of questions you answered correctly in an online quiz.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-[#2453FF] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                2
              </span>
              <h3 className="text-lg font-bold text-[#07152F]">
                Step 2: Find Your Position on the Bell Curve
              </h3>
            </div>
            <p className="text-sm text-[#60718B] leading-relaxed">
              The curved graph represents a theoretical distribution of scores. Its highest point is near 100 because values around the average are more common under the model.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              The curve becomes lower toward both ends, representing scores that occur less frequently. When you change your selected IQ score, the marker moves along the curve. This provides a simple way to visualize the difference between scores such as 90, 100, and 120.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-[#2453FF] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                3
              </span>
              <h3 className="text-lg font-bold text-[#07152F]">
                Step 3: Understand the Distance From Average
              </h3>
            </div>
            <p className="text-sm text-[#60718B] leading-relaxed">
              The tool also shows how far the selected score is from 100. A score of 115 is 15 points above the average. On this particular scale, that equals one standard deviation.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A score of 85 is 15 points below the average, or one standard deviation in the opposite direction. This distance provides more useful statistical context than calling a score simply high or low.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-[#2453FF] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                4
              </span>
              <h3 className="text-lg font-bold text-[#07152F]">
                Step 4: Explore the Theoretical Percentile
              </h3>
            </div>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A percentile describes the percentage of a reference distribution at or below a particular score. Under our normal-distribution model, an IQ of 115 corresponds to approximately the 84th percentile.
            </p>
            <p className="text-sm text-[#60718B] leading-relaxed">
              That means about 84% of the modeled distribution falls at or below that point. These values are mathematical estimates based on the chart’s assumptions. Your official test report may use different norms, precision, or scoring rules.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: IQ SCORE RANGES AND LEVELS EXPLAINED                           */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <BarChart2 className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Score Classifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            IQ Score Ranges and Levels Explained
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            An IQ score ranges chart divides the scale into intervals so readers can understand how different scores relate to the modeled average. The most important reference point is 100. On commonly used modern IQ scales, scores are standardized around this value.
          </p>
          <p>
            However, IQ classification names are not universal. Different assessment publishers may use different terms, boundaries, and interpretation guidelines. For that reason, our IQ levels chart describes score positions without assigning diagnostic labels.
          </p>
        </div>

        {/* Range Reference Table */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-[#07152F]">
            IQ Score Range Reference Table
          </h3>
          <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="IQ Score Range Reference Table">
                <thead className="bg-[#F7FAFF] text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7]">
                  <tr>
                    <th scope="col" className="py-3 px-4 sm:px-6">IQ score range</th>
                    <th scope="col" className="py-3 px-4 sm:px-6">Position relative to 100</th>
                    <th scope="col" className="py-3 px-4 sm:px-6">Interpretation on this chart</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2EAF7] bg-white">
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#07152F]">Below 70</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">More than 2 SD below</td>
                    <td className="py-3 px-4 sm:px-6 text-[#07152F] font-medium">Lower tail of the modeled distribution</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#07152F]">70–84</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">Approximately 1–2 SD below</td>
                    <td className="py-3 px-4 sm:px-6 text-[#07152F] font-medium">Below the central reference interval</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors bg-[#EEF2FF]/30">
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">85–99</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">Below the mean, within 1 SD</td>
                    <td className="py-3 px-4 sm:px-6 text-[#07152F] font-medium">Lower portion of the central interval</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors bg-[#EEF2FF]/30">
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#2453FF]">100–114</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">From the mean to just under +1 SD</td>
                    <td className="py-3 px-4 sm:px-6 text-[#07152F] font-medium">Upper portion of the central interval</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#07152F]">115–129</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">From +1 to just under +2 SD</td>
                    <td className="py-3 px-4 sm:px-6 text-[#07152F] font-medium">Above the central reference interval</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#07152F]">130 and above</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">At least 2 SD above</td>
                    <td className="py-3 px-4 sm:px-6 text-[#07152F] font-medium">Upper tail of the modeled distribution</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[#F7FAFF] p-3 text-xs text-[#60718B] border-t border-[#E2EAF7]">
              The intervals are display groupings, not universal clinical classifications. They assume mean 100 and standard deviation 15. Their endpoints follow whole-number score conventions.
            </div>
          </div>
        </div>

        {/* Sub-sections */}
        <div className="space-y-6 pt-2">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Is the Normal IQ Range?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              The phrase normal IQ range is commonly used in searches, but it can be misleading because it suggests a strict dividing line between normal and abnormal intelligence.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A clearer statistical description is the central interval of the modeled distribution. On a scale with mean 100 and standard deviation 15, approximately 68% of scores fall between 85 and 115 under a perfect normal distribution.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This does not mean everyone outside that interval has a problem, nor does it mean everyone within it has identical abilities. People differ in many ways, and a single test score cannot capture every aspect of their thinking, learning, creativity, or practical skills.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              How Should You Interpret IQ Levels?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              An IQ level chart provides context for numerical scores. It does not explain an individual’s educational needs, personality, potential, or achievements.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For example, two people with the same overall score may show different patterns of performance across the tasks included in a comprehensive assessment. Likewise, two scores that differ by a few points are not necessarily meaningfully different when measurement uncertainty is considered.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If your score comes from a professionally administered assessment, its official interpretation should take priority over a generic online chart.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why Different IQ Charts Use Different Labels
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              You may encounter websites that describe score intervals as average, superior, gifted, or other categories. These labels can come from different assessment systems, historical conventions, or unofficial websites. They should not automatically be transferred from one test to another.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Our chart focuses on measurable relationships: the distance from 100, the standard-deviation position, and the theoretical distribution. This helps keep the explanation consistent without making claims that require the specific test’s scoring manual.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: UNDERSTANDING THE IQ BELL CURVE                                */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Statistical Modeling</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Understanding the IQ Bell Curve
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            An IQ bell curve is a visual representation of how scores are distributed under a statistical model. The curve has a rounded peak in the middle and gradually slopes downward on both sides. Its shape resembles a bell, which explains the name.
          </p>
          <p>
            In our chart, the central point is IQ 100. Scores closer to 100 appear near the tallest part of the curve. Scores farther away appear toward the thinner tails.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why Is the Bell Curve Highest at IQ 100?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              The chart uses a normal distribution centered on 100. In a normal distribution, observations near the mean are more common than observations far from it.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The model is also symmetrical. A score 15 points above the mean has the same modeled distance from the center as a score 15 points below it. This symmetry is a property of the mathematical model, not a claim that every real population or assessment follows a perfect bell curve.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#07152F]">
              The 68–95–99.7 Rule
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              One useful way to understand the IQ distribution chart is through standard deviations. For an ideal normal distribution:
            </p>

            <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden max-w-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="68-95-99.7 Rule Table">
                <thead className="bg-[#F7FAFF] text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7]">
                  <tr>
                    <th scope="col" className="py-3 px-4 sm:px-6">IQ interval</th>
                    <th scope="col" className="py-3 px-4 sm:px-6">Distance from mean</th>
                    <th scope="col" className="py-3 px-4 sm:px-6 text-right">Approximate modeled share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2EAF7] bg-white font-mono">
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#2453FF]">85–115</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">Within 1 SD</td>
                    <td className="py-3 px-4 sm:px-6 text-right font-bold text-[#07152F]">68.27%</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#2453FF]">70–130</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">Within 2 SD</td>
                    <td className="py-3 px-4 sm:px-6 text-right font-bold text-[#07152F]">95.45%</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#2453FF]">55–145</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">Within 3 SD</td>
                    <td className="py-3 px-4 sm:px-6 text-right font-bold text-[#07152F]">99.73%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base text-[#60718B] leading-relaxed">
              These percentages explain why the middle of the curve contains most modeled scores. They also show why scores become increasingly uncommon as their distance from 100 increases. For example, the interval from 70 to 130 covers a much larger area under the curve than the interval from 115 to 130 alone.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Do the Left and Right Sides Mean?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              The left side of the bell curve contains scores below 100. The right side contains scores above 100.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Neither side should be treated as a complete description of a person’s abilities. The graph represents relative positions on one statistical scale, not success in school, professional potential, social ability, or personal worth.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Is the Bell Curve a Picture of Actual People?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Our interactive IQ graph is a theoretical reference model. It doesn’t plot a live sample of individuals, and it doesn’t contain personal results from visitors to our website.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A real assessment’s score distribution depends on how the test was standardized, which population was sampled, how norms were developed, and when they were updated. Use the bell curve to understand statistical relationships, not as proof that every group or test follows exactly the same distribution.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHAT IS THE AVERAGE IQ SCORE?                                  */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Scale className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Scale Baseline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            What Is the Average IQ Score?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            On many commonly used modern standardized IQ scales, the average IQ score is set to 100. This value is not a percentage and does not mean a person answered every question correctly.
          </p>
          <p>
            It is the central value established through the test’s standardization process. When a test uses mean 100 and standard deviation 15, the score of 100 is the midpoint of the modeled distribution.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why Is 100 Considered Average?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              IQ scores are commonly reported as standardized scores. Test developers examine performance in an appropriate reference sample and establish norms for interpreting individual results. The reported score is then expressed using a defined scale.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For the model used by our chart, that scale has a mean of 100. A score of 100 therefore represents the center of the reference distribution, not a perfect score on the underlying test questions.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Is an IQ of 100 the 50th Percentile?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Yes, under the chart’s continuous, symmetrical normal-distribution model. The 50th percentile represents the midpoint of the modeled distribution. Approximately half of the distribution lies below that point and half lies above it.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Actual reported percentile ranks can differ slightly depending on a particular assessment’s norms, score rounding, and reporting conventions.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Does Average IQ Change With Age?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Age can matter when interpreting actual psychological test results because some assessments use age-specific norms. A standardized score is typically interpreted against the reference group defined by the test.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              That means you should not assume the same raw performance has the same standardized meaning at every age. Our IQ scale chart does not accept age as an input and does not calculate age-adjusted scores. For detailed age-related explanations, see our{' '}
              <Link href="/average-iq-by-age" className="font-semibold text-[#2453FF] hover:underline">
                Average IQ by Age
              </Link>{' '}
              guide.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: WHAT DO DIFFERENT IQ SCORES MEAN?                              */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Calculator className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Score Interpretations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            What Do Different IQ Scores Mean?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            People often search for an IQ chart because they want to understand a particular number. The examples below explain common scores using the chart’s theoretical model. They are mathematical reference points, not individual psychological evaluations.
          </p>
        </div>

        {/* Individual Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* IQ 70 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xl text-[#07152F]">IQ 70</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">−2.00σ</span>
            </div>
            <h3 className="text-sm font-bold text-[#07152F]">Two Standard Deviations Below</h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              An IQ score of 70 is 30 points below 100. With a standard deviation of 15, that places it two standard deviations below the modeled average. Its theoretical percentile is approximately 2.28th.
            </p>
            <p className="text-xs text-slate-500 italic pt-1">
              A score of 70 alone must not be used to diagnose any condition. Clinical evaluations require comprehensive evidence.
            </p>
          </div>

          {/* IQ 85 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xl text-[#07152F]">IQ 85</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">−1.00σ</span>
            </div>
            <h3 className="text-sm font-bold text-[#07152F]">One Standard Deviation Below</h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              An IQ of 85 is 15 points below the model’s average. Its theoretical percentile is approximately 15.87th. This score sits at the lower boundary of the central interval that extends from 85 to 115.
            </p>
            <p className="text-xs text-slate-500 italic pt-1">
              It indicates statistical position, not an individual’s overall capabilities or real-world skills.
            </p>
          </div>

          {/* IQ 100 */}
          <div className="bg-[#EEF2FF]/60 rounded-2xl border border-[#2453FF]/30 p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xl text-[#2453FF]">IQ 100</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#2453FF] text-white">Mean (0.00σ)</span>
            </div>
            <h3 className="text-sm font-bold text-[#07152F]">At the Center of the Scale</h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              An IQ of 100 is equal to the modeled average. Its z-score is zero, and its theoretical percentile is exactly 50th. The chart marker appears at the center and at the highest point of the bell curve.
            </p>
            <p className="text-xs text-[#2453FF] font-medium pt-1">
              The primary reference point: lower scores fall to the left, higher scores to the right.
            </p>
          </div>

          {/* IQ 115 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xl text-[#07152F]">IQ 115</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">+1.00σ</span>
            </div>
            <h3 className="text-sm font-bold text-[#07152F]">One Standard Deviation Above</h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              An IQ of 115 is 15 points above 100, which equals one standard deviation above the mean. Its theoretical percentile is approximately 84.13th.
            </p>
            <p className="text-xs text-slate-500 italic pt-1">
              About 84% of scores fall at or below this value in the theoretical normal distribution.
            </p>
          </div>

          {/* IQ 130 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xl text-[#07152F]">IQ 130</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">+2.00σ</span>
            </div>
            <h3 className="text-sm font-bold text-[#07152F]">Two Standard Deviations Above</h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              An IQ of 130 is 30 points above 100 (+2.0 SD). Its theoretical percentile is approximately 97.72nd, placing it in the upper tail of the modeled distribution.
            </p>
            <p className="text-xs text-slate-500 italic pt-1">
              Entered numbers in online charts cannot prove eligibility for formal societies or programs.
            </p>
          </div>

          {/* IQ 145 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-xl text-[#07152F]">IQ 145</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">+3.00σ</span>
            </div>
            <h3 className="text-sm font-bold text-[#07152F]">Three Standard Deviations Above</h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              An IQ of 145 is 45 points above 100 (+3.0 SD). Its theoretical percentile is approximately 99.87th. Far into the upper tail, small normative nuances matter substantially.
            </p>
            <p className="text-xs text-slate-500 italic pt-1">
              Extreme scores require careful consideration of test measurement precision and floor/ceiling effects.
            </p>
          </div>
        </div>

        {/* Common IQ Score Reference Table */}
        <div className="space-y-3 pt-2">
          <h3 className="text-lg sm:text-xl font-bold text-[#07152F]">
            Common IQ Score Reference Table
          </h3>
          <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden max-w-2xl">
            <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="Common IQ Score Reference Table">
              <thead className="bg-[#F7FAFF] text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7]">
                <tr>
                  <th scope="col" className="py-3 px-4 sm:px-6">IQ score</th>
                  <th scope="col" className="py-3 px-4 sm:px-6 font-mono">Z-score</th>
                  <th scope="col" className="py-3 px-4 sm:px-6 text-right">Theoretical percentile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] bg-white font-mono">
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">70</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">−2.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">2.28th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">85</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">−1.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">15.87th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors bg-[#EEF2FF]/40">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#2453FF]">100</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">0.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">50th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">115</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+1.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">84.13th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">130</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+2.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">97.72nd</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">145</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+3.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">99.87th</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-[#F7FAFF] p-3 text-xs text-[#60718B] border-t border-[#E2EAF7] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>All examples assume a normal distribution with mean 100 and SD 15. Values are rounded.</span>
              <button
                type="button"
                onClick={scrollToChart}
                className="text-[#2453FF] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer shrink-0"
              >
                <span>Use score presets above</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: HOW DOES STANDARD DEVIATION WORK ON THE IQ SCALE?              */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Scale className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Dispersion Metrics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            How Does Standard Deviation Work on the IQ Scale?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            Standard deviation describes how spread out scores are around the average. Our IQ standard deviation chart uses a value of 15 points. That means a difference of 15 IQ points corresponds to one standard deviation on this particular scale.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              One Standard Deviation
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A score of 115 is one standard deviation above 100. A score of 85 is one standard deviation below 100. In a normal distribution, approximately 68.27% of modeled observations fall within one standard deviation on either side of the mean. This is why the interval 85–115 is useful as a central reference.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Two Standard Deviations
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A score of 130 is two standard deviations above 100. A score of 70 is two standard deviations below 100. Approximately 95.45% of the theoretical normal distribution falls between these two values. Only about 4.55% of the modeled distribution lies outside that interval, split equally between its two tails.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Three Standard Deviations
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A score of 145 is three standard deviations above 100. A score of 55 is three standard deviations below 100. Approximately 99.73% of the theoretical normal distribution falls between those values.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This illustrates how quickly modeled frequencies decrease farther from the center. It does not guarantee that every test can measure extreme scores with equal precision.
            </p>
          </div>

          {/* Z-Score Math Box */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#07152F] flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#2453FF]" />
              <span>How to Calculate a Z-Score</span>
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A z-score expresses the distance from the mean in standard-deviation units. The formula is:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-2xs">
              Z-score = (IQ score − 100) ÷ 15
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono text-[#60718B]">
              <div className="p-3 bg-white rounded-xl border border-[#E2EAF7]">
                <strong className="text-[#07152F] block font-sans mb-1">For IQ 130:</strong>
                (130 − 100) ÷ 15 = 2 → Result: <span className="text-[#2453FF] font-bold">+2.00σ</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E2EAF7]">
                <strong className="text-[#07152F] block font-sans mb-1">For IQ 85:</strong>
                (85 − 100) ÷ 15 = −1 → Result: <span className="text-[#2453FF] font-bold">−1.00σ</span>
              </div>
            </div>
            <p className="text-xs text-[#60718B] leading-relaxed">
              Our tool performs this calculation automatically when you enter a score. If a different standardized assessment uses another scale, its appropriate mean and standard deviation must be used instead.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: HOW DO IQ SCORES RELATE TO PERCENTILES?                        */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Percentile Mathematics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            How Do IQ Scores Relate to Percentiles?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            An IQ percentile describes where a standardized score falls relative to a reference distribution. For example, the 84th percentile means that approximately 84% of the reference distribution falls at or below that score.
          </p>
          <p className="font-semibold text-[#07152F]">
            It does not mean 84% of test questions were answered correctly. That distinction is essential.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              IQ Score vs. Percentage Correct
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Suppose you complete an online reasoning quiz with 20 questions and answer 16 correctly. Your accuracy is 80%.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              But that does not automatically correspond to the 80th percentile or to a particular IQ score. To interpret a test result against other people, an appropriate norming process is necessary.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A percentage correct describes your performance on the questions. A percentile describes relative position in a defined distribution.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why Does Our Chart Show Approximate Percentiles?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Our tool applies the normal cumulative distribution function to the selected IQ score using mean 100 and standard deviation 15. It estimates the proportion of the theoretical distribution at or below that value.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For example, IQ 130 corresponds to approximately the 97.72nd percentile in this model. That is a mathematically derived reference value, not a percentile taken from your personal test report.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Can Two Tests Give Different Percentiles?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Yes. Tests can have different norm groups, score distributions, scale definitions, rounding conventions, and measurement precision.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If you have a formal assessment report, use the percentile and interpretation supplied by that test’s publisher or qualified administrator. For dedicated score-to-percentile conversion, visit our <Link href="/iq-percentile-calculator" className="font-semibold text-[#2453FF] hover:underline">IQ Percentile Calculator</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: COMMON MISTAKES WHEN READING AN IQ CHART                       */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 mb-3">
            <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Pitfalls to Avoid</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Common Mistakes When Reading an IQ Chart
          </h2>
          <p className="text-base text-[#60718B] mt-2">
            IQ charts are useful, but several common misunderstandings can lead to incorrect conclusions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Mistake 1 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2">
            <h3 className="text-base font-bold text-[#07152F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>Mistake 1: Treating a Quiz Percentage as an IQ Score</span>
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Scoring 90% on a practice test does not mean your IQ is 90. Likewise, answering all ten questions correctly does not automatically indicate an IQ of 150 or any other particular value. Raw accuracy and standardized IQ are different measures.
            </p>
          </div>

          {/* Mistake 2 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2">
            <h3 className="text-base font-bold text-[#07152F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>Mistake 2: Confusing IQ Scores With Percentiles</span>
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              An IQ of 115 is not the 115th percentile. Percentiles normally range from 0 to 100, while IQ scores use a different scale. On our chart, IQ 115 corresponds to approximately the 84th percentile under the selected model.
            </p>
          </div>

          {/* Mistake 3 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2">
            <h3 className="text-base font-bold text-[#07152F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>Mistake 3: Assuming Every IQ Scale Uses SD 15</span>
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Our chart uses a common model, but not every intelligence test reports scores using identical conventions. Some historical and alternative scales use different standard deviations. You must know which scoring system produced the number before interpreting it.
            </p>
          </div>

          {/* Mistake 4 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2">
            <h3 className="text-base font-bold text-[#07152F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>Mistake 4: Treating Classification Labels as Universal</span>
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Different IQ score classification charts may assign different names to the same interval. Those names can be useful within a specific assessment system, but they are not universal scientific definitions. Our chart emphasizes numerical position rather than assigning fixed personal labels.
            </p>
          </div>

          {/* Mistake 5 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2">
            <h3 className="text-base font-bold text-[#07152F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>Mistake 5: Ignoring Measurement Uncertainty</span>
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              Psychological test scores are estimates based on observed performance. Even well-developed assessments have measurement error. A difference of a few points should not be treated as an exact measure of the difference between two people’s abilities.
            </p>
          </div>

          {/* Mistake 6 */}
          <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 space-y-2">
            <h3 className="text-base font-bold text-[#07152F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>Mistake 6: Using the Chart for a Diagnosis</span>
            </h3>
            <p className="text-sm text-[#60718B] leading-relaxed">
              A bell curve cannot diagnose an intellectual, learning, or developmental condition. Professional evaluations consider additional information, including the purpose of testing and relevant functional evidence. A self-entered number on a website is not a clinical assessment.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: HOW ACCURATE IS AN IQ SCORE CHART?                             */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Info className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Psychometric Scope</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            How Accurate Is an IQ Score Chart?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            Our interactive IQ score chart is designed to calculate and display positions within a specified mathematical model. Its statistical calculations can be accurate for that model while still having important limitations when applied to an individual person’s test result.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Mathematical Accuracy vs. Psychological Accuracy
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Mathematical accuracy concerns whether the tool correctly calculates z-scores, modeled percentiles, and areas under the curve. Psychological accuracy concerns whether a particular score meaningfully describes the ability the assessment was designed to measure. These are different questions.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Our chart can calculate the theoretical percentile for IQ 115 without knowing whether the score came from a properly standardized assessment. That does not validate the original score.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why the Source of the IQ Score Matters
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              An official standardized test score is interpreted using the test’s documentation and norms. An informal online IQ quiz may lack the research required to support the same interpretation.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Even if both produce a number that looks like an IQ score, they should not automatically be treated as equivalent. The chart cannot determine whether a number was produced by a valid assessment.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why Confidence Intervals Matter
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A formal score report may include a confidence interval or other information about measurement precision. This reflects the fact that observed scores are not perfectly exact.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Our chart displays the entered score as a mathematical point. It does not calculate a test-specific confidence interval. For individual interpretation, consult the original test report.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Does IQ Measure Everything About Intelligence?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              No single standardized score captures every aspect of a person’s knowledge, judgment, motivation, creativity, learning, or everyday functioning. Different assessments measure different combinations of abilities.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A chart is helpful for understanding a numerical scale, but it cannot describe the full complexity of an individual. For more background, explore our <span className="font-semibold text-[#07152F]">What Is IQ?</span> guide when published.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS ABOUT IQ SCORES                    */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <HelpCircle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Frequently Asked Questions About IQ Scores
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] mt-2">
            Key questions and scientific answers regarding standardized IQ scores, percentiles, and bell curve distributions.
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
      {/* SECTION 11: ABOUT OUR IQ SCORE CHART AND CALCULATIONS                     */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-br from-white to-[#F7FAFF] rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Methodology &amp; Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            About Our IQ Score Chart and Calculations
          </h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#60718B] leading-relaxed">
          <p>
            Our IQ Score Chart is an educational visualization based on a theoretical normal distribution. It uses the following reference parameters:
          </p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2453FF] mt-1 shrink-0" />
              <span><strong className="text-[#07152F]">Mean IQ score:</strong> 100.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2453FF] mt-1 shrink-0" />
              <span><strong className="text-[#07152F]">Standard deviation:</strong> 15.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2453FF] mt-1 shrink-0" />
              <span><strong className="text-[#07152F]">Standardized distance:</strong> z = (IQ − 100) ÷ 15.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2453FF] mt-1 shrink-0" />
              <span><strong className="text-[#07152F]">Theoretical percentile:</strong> normal cumulative distribution at the calculated z-score.</span>
            </li>
          </ul>

          <p>
            The bell curve shows the modeled density of scores across the reference scale. When you enter a number, the tool calculates its position relative to 100 and displays the corresponding theoretical percentile.
          </p>
          <p>
            The IQ score table, curve markers, score presets, and comparison values use the same underlying mathematical assumptions. These calculations are not based on live visitor data or actual individual assessment records.
          </p>
        </div>

        {/* Notice of Important Limitations */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900 leading-relaxed space-y-2">
          <p className="font-bold text-amber-950 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Important Limitations</span>
          </p>
          <p>
            The chart cannot validate an IQ score, determine whether an assessment was administered correctly, provide a diagnosis, or replace the interpretation in an official test report. The model is intended to help visitors understand statistical concepts, compare numerical reference points, and read standardized scores more carefully.
          </p>
        </div>

        {/* External Authoritative References */}
        <div className="space-y-3 pt-2">
          <p className="text-xs sm:text-sm font-semibold text-[#07152F]">
            Authoritative testing guidance and international assessment standards:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.testingstandards.net/open-access-files.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2EAF7] text-xs sm:text-sm font-semibold text-[#2453FF] hover:bg-[#EEF2FF] hover:border-[#2453FF]/30 transition-colors shadow-2xs"
            >
              <span>Standards for Educational and Psychological Testing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.mensa.org/getting-your-iq-tested-faqs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2EAF7] text-xs sm:text-sm font-semibold text-[#2453FF] hover:bg-[#EEF2FF] hover:border-[#2453FF]/30 transition-colors shadow-2xs"
            >
              <span>Mensa International’s IQ Testing FAQs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom CTA to Return to Chart */}
        <div className="pt-6 border-t border-[#E2EAF7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#60718B]">
            Explore the interactive IQ Score Chart above to compare scores, visualize the bell curve, and better understand the standardized IQ scale.
          </p>
          <button
            type="button"
            onClick={scrollToChart}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2453FF] text-white text-xs sm:text-sm font-bold cta-glow hover:bg-[#1a44e6] cursor-pointer transition-colors shrink-0"
          >
            <span>Back to Interactive Tool</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </article>
  );
};
