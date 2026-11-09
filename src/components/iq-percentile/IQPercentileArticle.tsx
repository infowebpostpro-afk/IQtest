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
    question: 'What IQ is the 95th percentile?',
    answer:
      'On a normal-distribution IQ scale with mean 100 and standard deviation 15, the 95th percentile corresponds to approximately IQ 124.67. If you need a whole-number reference, that rounds to about 125. The result changes if the standard deviation changes. For an official assessment, consult the test\'s published norms rather than assuming the generic calculation exactly matches its reported percentile.',
  },
  {
    question: 'What percentile is an IQ of 120?',
    answer:
      'An IQ of 120 corresponds to approximately the 90.88th percentile under the default mean-100, SD-15 model. The modeled share above that score is approximately 9.12%, or about 1 in 11. This is a theoretical statistical conversion. It does not establish the validity of a person\'s entered score or guarantee the same percentile on every assessment.',
  },
  {
    question: 'What percentile is an IQ of 130?',
    answer:
      'An IQ of 130 corresponds to approximately the 97.72nd percentile with mean 100 and standard deviation 15. Its theoretical upper-tail probability is approximately 2.28%, or roughly 1 in 44. On an SD-24 scale, the same numerical score corresponds to a substantially different percentile, demonstrating why the correct scoring convention matters.',
  },
  {
    question: 'What IQ is the 99th percentile?',
    answer:
      'The 99th percentile corresponds to approximately IQ 134.90 when the mean is 100 and the standard deviation is 15. It corresponds to about IQ 137.22 on an SD-16 scale and about IQ 155.83 on an SD-24 scale. These are mathematical reference values. Always verify the original test\'s norms before using a converted value for formal interpretation.',
  },
  {
    question: 'Why do IQ percentiles change with standard deviation?',
    answer:
      'Standard deviation determines how widely scores are spread around the mean. When the standard deviation changes, the same numerical IQ score represents a different distance from 100. That changes its z-score and percentile. For example, IQ 130 is two standard deviations above the mean with SD 15, but only 1.25 standard deviations above it with SD 24.',
  },
  {
    question: 'Is an IQ percentile the same as a percentage correct?',
    answer:
      'No. Percentage correct measures the proportion of test items answered correctly. Percentile rank indicates the position of a result within a defined reference distribution. Getting 90% of quiz questions right doesn\'t mean you are at the 90th percentile. An appropriate standardized assessment and relevant norms are needed to support that interpretation.',
  },
  {
    question: 'What does "1 in 44" mean for IQ 130?',
    answer:
      'Under a theoretical normal distribution with mean 100 and SD 15, approximately 2.28% of modeled scores fall at or above IQ 130. The reciprocal of that probability is approximately 44, giving the familiar "1 in 44" estimate. It describes the upper tail of the mathematical model, not an exact headcount or confirmation of any individual score.',
  },
  {
    question: 'Why do two IQ percentile calculators give different answers?',
    answer:
      'The calculators may use different standard deviations, different rounding rules, or different reference models. One may also use test-specific norms instead of a generic normal distribution. Compare the calculation assumptions before deciding whether the values genuinely disagree. If you have an official test report, its supplied percentile and interpretation should take priority.',
  },
  {
    question: 'Can I calculate my percentile from a free online IQ test?',
    answer:
      'Not from a raw number correct or a percentage alone. A result such as 7/10 or 70% does not provide enough information to establish a standardized IQ percentile. The test would need appropriate norms and evidence supporting that interpretation. Our calculator accepts standardized IQ values for theoretical conversion; it does not transform informal quiz scores into validated intelligence measurements.',
  },
  {
    question: 'Can an IQ percentile calculator determine Mensa eligibility?',
    answer:
      'No. Mensa membership is based on qualifying performance on an approved, properly administered intelligence test. Mensa International generally uses the upper two percent, or 98th-percentile, requirement, but accepts only qualifying evidence under its testing rules. An entered score and a theoretical percentile from this calculator do not establish membership eligibility. Refer to Mensa\'s official requirements for accepted testing methods and documentation.',
  },
];

export const IQPercentileArticle: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const scrollToCalculator = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="w-full space-y-12 sm:space-y-16 text-[#07152F] antialiased">
      {/* ========================================================================= */}
      {/* SECTION 1: WHAT IS AN IQ PERCENTILE?                                       */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Info className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Core Concept</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            What Is an IQ Percentile?
          </h2>
        </div>

        <div className="relative z-10 space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            An IQ percentile rank describes where a standardized score falls relative to a reference distribution.
          </p>
          <p>
            If an IQ score corresponds to the 90th percentile, approximately 90% of the reference distribution is at or below that score. Approximately 10% falls above it, using the theoretical continuous model.
          </p>
          <p>
            Percentiles help make standardized scores easier to interpret because they describe relative position rather than only a numerical distance from the average.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="bg-gradient-to-br from-[#F7FAFF] to-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#2453FF]" />
              IQ Score vs. IQ Percentile
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              An IQ score and an IQ percentile are not the same thing.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              An IQ score is expressed on a standardized scale, commonly centered at 100.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A percentile represents a relative position from 0 to 100.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For example, an IQ of 115 corresponds to approximately the 84.13th percentile in a normal model with mean 100 and standard deviation 15.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This does not mean the person's IQ is 84.13 or that they answered 84.13% of test questions correctly.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl border border-rose-200/80 p-5 sm:p-6 space-y-3">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
              Is a Percentile the Same as Percentage Correct?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              No.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Imagine taking a practice quiz with 20 questions and answering 16 correctly.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Your percentage correct is 80%.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              But without appropriate population norms, you cannot conclude that you are at the 80th percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A test percentage tells you how many questions you answered correctly. A percentile tells you where a standardized result falls within a defined reference distribution.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This distinction is essential when using an online IQ percentile converter.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: HOW TO CONVERT IQ TO PERCENTILE                                 */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Calculator className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Forward Conversion</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            How to Convert IQ to Percentile
          </h2>
        </div>

        <div className="relative z-10 space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            An IQ to percentile calculator uses the relationship between a standardized IQ score and a statistical distribution.
          </p>
          <p>
            Our tool assumes a normally distributed reference scale with a mean of 100 and the standard deviation selected by the user.
          </p>
          <p>
            The calculation has two steps.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="bg-gradient-to-br from-[#F7FAFF] to-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-4">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#2453FF]" />
              Step 1: Calculate the Z-Score
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A z-score expresses how far a value is from the mean in standard-deviation units.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The formula is:
            </p>
            <div className="p-4 bg-gradient-to-r from-[#2453FF]/10 to-[#4779FF]/10 rounded-xl border border-[#2453FF]/20 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              Z = (IQ − Mean) ÷ Standard Deviation
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              For our default scale:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              Z = (IQ − 100) ÷ 15
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              A positive result indicates a score above the mean. A negative result indicates a score below it.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For example, IQ 130 produces:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              Z = (130 − 100) ÷ 15 = 2
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              The score is two standard deviations above the modeled average.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F7FAFF] to-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-4">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#2453FF]" />
              Step 2: Convert the Z-Score to a Percentile
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              The next step uses the standard normal cumulative distribution function, represented by Φ.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The IQ percentile formula is:
            </p>
            <div className="p-4 bg-gradient-to-r from-[#2453FF]/10 to-[#4779FF]/10 rounded-xl border border-[#2453FF]/20 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              Percentile = 100 × Φ(Z)
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              The function returns the proportion of the theoretical distribution at or below the selected z-score.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              You don't need to calculate it manually. Our calculator performs the conversion immediately.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-200/80 p-5 sm:p-6 space-y-4">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Worked Example: IQ 130 to Percentile
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Suppose your standardized IQ score is 130 and the relevant scale uses SD 15.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              First, calculate the z-score:
            </p>
            <div className="p-4 bg-white rounded-xl border border-emerald-200/80 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              Z = (130 − 100) ÷ 15 = 2
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              The standard normal cumulative probability at Z = 2 is approximately 0.97725.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Multiply by 100:
            </p>
            <div className="p-4 bg-white rounded-xl border border-emerald-200/80 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              0.97725 × 100 = 97.725%
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              <strong className="text-[#07152F]">Result:</strong> IQ 130 corresponds to approximately the 97.72nd percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The modeled share above that value is about 2.28%.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This is a theoretical conversion, not an independently verified population measurement.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200/80 p-5 sm:p-6 space-y-4">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              Another Example: IQ 85 to Percentile
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              For IQ 85 using SD 15:
            </p>
            <div className="p-4 bg-white rounded-xl border border-blue-200/80 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              Z = (85 − 100) ÷ 15 = −1
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              The standard normal cumulative probability at Z = −1 is approximately 0.15866.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Therefore:
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              IQ 85 corresponds to approximately the 15.87th percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This means about 15.87% of the theoretical distribution falls at or below the selected score.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The same calculation process works for other values within the tool's supported input range.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: HOW TO CONVERT PERCENTILE TO IQ                                 */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Reverse Conversion</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            How to Convert Percentile to IQ
          </h2>
        </div>

        <div className="relative z-10 space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            Sometimes you know a percentile but not the corresponding IQ score.
          </p>
          <p>
            A percentile to IQ calculator performs the reverse conversion using the inverse standard normal cumulative distribution function.
          </p>
          <p>
            This is useful when exploring questions such as:
          </p>
          <ul className="space-y-1 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-[#2453FF] font-bold">•</span>
              <span>What IQ corresponds to the 95th percentile?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2453FF] font-bold">•</span>
              <span>What IQ is at the 99th percentile?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2453FF] font-bold">•</span>
              <span>What IQ corresponds to the 75th percentile?</span>
            </li>
          </ul>
          <p>
            The answer depends on the scoring scale.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="bg-gradient-to-br from-[#F7FAFF] to-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-4">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#2453FF]" />
              Step 1: Convert the Percentile Into a Probability
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Divide the percentile by 100.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For the 95th percentile:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              95 ÷ 100 = 0.95
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              This probability represents the share of the theoretical distribution at or below the desired position.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F7FAFF] to-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-4">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#2453FF]" />
              Step 2: Calculate the Inverse Z-Score
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Use the inverse normal cumulative distribution function:
            </p>
            <div className="p-4 bg-gradient-to-r from-[#2453FF]/10 to-[#4779FF]/10 rounded-xl border border-[#2453FF]/20 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              Z = Φ⁻¹(Percentile ÷ 100)
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              For the 95th percentile:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              Z = Φ⁻¹(0.95)
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              Z ≈ 1.64485
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              This means the 95th percentile is approximately 1.645 standard deviations above the mean.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-200/80 p-5 sm:p-6 space-y-4">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Step 3: Convert the Z-Score Into IQ
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              The reverse formula is:
            </p>
            <div className="p-4 bg-gradient-to-r from-emerald-100/50 to-emerald-50/50 rounded-xl border border-emerald-200/80 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              IQ = Mean + (Z × Standard Deviation)
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              Using mean 100 and SD 15:
            </p>
            <div className="p-4 bg-white rounded-xl border border-emerald-200/80 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              IQ = 100 + (1.64485 × 15)
            </div>
            <div className="p-4 bg-white rounded-xl border border-emerald-200/80 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              IQ ≈ 124.67
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              <strong className="text-[#07152F]">Result:</strong> The 95th percentile corresponds to approximately IQ 124.67 on the SD 15 scale.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If a test reports only whole-number scores, the nearest whole-number reference is approximately 125.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-200/80 p-5 sm:p-6 space-y-4">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              Example: What IQ Is the 99th Percentile?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              The 99th percentile corresponds to a z-score of approximately 2.32635.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Using SD 15:
            </p>
            <div className="p-4 bg-white rounded-xl border border-purple-200/80 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              IQ = 100 + (2.32635 × 15)
            </div>
            <div className="p-4 bg-white rounded-xl border border-purple-200/80 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
              IQ ≈ 134.90
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              Therefore, the 99th percentile is approximately IQ 134.90 under the default model.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              With a different standard deviation, the corresponding IQ number would change.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              That is why it's important to select the correct scale before interpreting your result.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: WHICH IQ STANDARD DEVIATION SHOULD YOU CHOOSE?                  */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Scale className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Scale Selection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Which IQ Standard Deviation Should You Choose?
          </h2>
        </div>

        <div className="relative z-10 space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            Choosing the correct standard deviation is one of the most important parts of an accurate theoretical conversion.
          </p>
          <p>
            A standard deviation describes how far scores are spread around the mean.
          </p>
          <p>
            Our calculator offers three settings: 15, 16, and 24.
          </p>
          <p>
            These represent different scoring conventions, not different levels of intelligence.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200/80 p-5 sm:p-6 space-y-3">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              SD 15: Common Modern Reference Scale
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              SD 15 is the default setting.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              It is used in several widely recognized contemporary IQ scoring systems, including modern Wechsler scales and Stanford–Binet Fifth Edition.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              On this scale:
            </p>
            <ul className="space-y-1 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#2453FF] font-bold">•</span>
                <span>IQ 100 represents the mean.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2453FF] font-bold">•</span>
                <span>IQ 115 is one standard deviation above the mean.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2453FF] font-bold">•</span>
                <span>IQ 130 is two standard deviations above the mean.</span>
              </li>
            </ul>
            <p className="text-base text-[#60718B] leading-relaxed">
              If your documented standardized test uses this scale, select SD 15.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-200/80 p-5 sm:p-6 space-y-3">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600" />
              SD 16: An Alternative IQ Scale
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Some older assessment systems and reporting conventions have used a standard deviation of 16.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              With this setting, an IQ score of 116 is one standard deviation above the mean.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              An IQ score of 132 is two standard deviations above the mean.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Do not assume SD 16 applies simply because your test is called Stanford–Binet. Different editions can use different reporting conventions.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Check the exact version and score documentation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-200/80 p-5 sm:p-6 space-y-3">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600" />
              SD 24: A Wider Historical Scale
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Some historical intelligence-test scoring conventions, including certain Cattell references, have used a standard deviation around 24.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              On a mean-100, SD-24 scale:
            </p>
            <ul className="space-y-1 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#2453FF] font-bold">•</span>
                <span>IQ 124 is one standard deviation above the mean.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2453FF] font-bold">•</span>
                <span>IQ 148 is two standard deviations above the mean.</span>
              </li>
            </ul>
            <p className="text-base text-[#60718B] leading-relaxed">
              The numerical scores look different because the scale is wider.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This does not mean the underlying ability changes when the scale changes.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The chosen standard deviation changes how the same number is interpreted.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F7FAFF] to-white rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-3">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#2453FF]" />
              How Much Difference Does the Scale Make?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Consider an entered IQ score of 130.
            </p>
            <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden max-w-2xl shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="Scale Comparison Table">
                <thead className="bg-gradient-to-r from-[#2453FF]/10 to-[#4779FF]/10 text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7]">
                  <tr>
                    <th scope="col" className="py-3 px-4 sm:px-6">Selected scale</th>
                    <th scope="col" className="py-3 px-4 sm:px-6 font-mono">Z-score</th>
                    <th scope="col" className="py-3 px-4 sm:px-6 text-right">Theoretical percentile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2EAF7] bg-white font-mono">
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#07152F]">SD 15</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">+2.00</td>
                    <td className="py-3 px-4 sm:px-6 text-right font-bold text-[#2453FF]">97.72nd</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#07152F]">SD 16</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">+1.875</td>
                    <td className="py-3 px-4 sm:px-6 text-right font-bold text-[#2453FF]">96.96th</td>
                  </tr>
                  <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#07152F]">SD 24</td>
                    <td className="py-3 px-4 sm:px-6 text-[#60718B]">+1.25</td>
                    <td className="py-3 px-4 sm:px-6 text-right font-bold text-[#2453FF]">89.44th</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              The entered IQ remains 130, but its theoretical position changes because the standard deviation is different.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This is why a percentile from one scoring system should not be compared directly with a percentile calculated under another system.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl border border-rose-200/80 p-5 sm:p-6 space-y-3">
            <h3 className="text-xl font-bold text-[#07152F] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
              How to Find the Right Scale for Your Test
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Start with your original score report.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Look for the test's full name, edition, and reporting scale.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Then consult the test publisher's documentation or ask the qualified professional who administered it.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If you cannot establish the scale, do not assume that switching between SD values identifies your true percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              You can use the calculator to explore possible results, but those remain illustrative calculations.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For a formal evaluation, use the interpretation supplied with the assessment.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: COMMON IQ SCORES AND PERCENTILES                               */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <BookOpen className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Quick Reference</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Common IQ Scores and Percentiles
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            A quick IQ-to-percentile table is useful when you want to check a common number without repeatedly entering values.
          </p>
          <p>
            The following reference table assumes a normal distribution with mean 100 and standard deviation 15.
          </p>
        </div>

        <div className="relative z-10 space-y-3">
          <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden max-w-2xl shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="Common IQ Scores and Percentiles Table">
              <thead className="bg-gradient-to-r from-[#2453FF]/10 to-[#4779FF]/10 text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7]">
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
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">80</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">−1.33</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">9.12th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">85</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">−1.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">15.87th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">90</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">−0.67</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">25.25th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors bg-gradient-to-r from-[#EEF2FF]/60 to-[#2453FF]/10">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#2453FF]">100</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">0.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">50th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">110</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+0.67</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">74.75th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">115</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+1.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">84.13th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">120</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+1.33</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">90.88th</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">125</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+1.67</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">95.22nd</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">130</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+2.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">97.72nd</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">135</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+2.33</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">99.02nd</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">140</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+2.67</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">99.62nd</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-2.5 px-4 sm:px-6 font-bold text-[#07152F]">145</td>
                  <td className="py-2.5 px-4 sm:px-6 text-[#60718B]">+3.00</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-bold text-[#2453FF]">99.87th</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-gradient-to-r from-[#F7FAFF] to-[#EEF2FF]/50 p-3 text-xs text-[#60718B] border-t border-[#E2EAF7]">
              All values are approximate and depend on the selected model.
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-2">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Percentile Is IQ 120?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              On the SD 15 scale, IQ 120 corresponds to approximately the 90.88th percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The modeled share above this score is approximately 9.12%.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Percentile Is IQ 130?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              IQ 130 corresponds to approximately the 97.72nd percentile on the same scale.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The modeled upper-tail share is approximately 2.28%.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Percentile Is IQ 140?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              IQ 140 corresponds to approximately the 99.62nd percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This is a position in the theoretical upper tail, not a verified personal assessment result.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For a detailed visual presentation of score ranges and standard deviations, use our <Link href="/iq-score-chart/" className="font-semibold text-[#2453FF] hover:underline">IQ Score Chart</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: WHAT DOES "1 IN X" IQ RARITY MEAN?                             */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Probability Estimates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            What Does "1 in X" IQ Rarity Mean?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            Some calculators display a result such as "1 in 44" or "top 2.28%."
          </p>
          <p>
            These numbers describe theoretical probability under the selected model.
          </p>
          <p>
            They should not be interpreted as an exact count of identifiable people in the real world.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              How an Upper-Tail Rarity Estimate Works
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Suppose an entered IQ score corresponds to the 97.725th percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The theoretical share above that score is:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-2xs">
              100% − 97.725% = 2.275%
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              In probability form:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-2xs">
              0.02275
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              To express this as a "1 in X" estimate, calculate:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-2xs">
              1 ÷ 0.02275 ≈ 43.96
            </div>
            <p className="text-base text-[#60718B] leading-relaxed">
              Rounded to a convenient whole number, that gives approximately 1 in 44.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For IQ 130 on the SD 15 scale, this means the model places about one score in 44 at or above that position.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              It does not mean your own test result has been verified or that exactly one of every 44 people in a particular city has that score.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Upper-Tail vs. Lower-Tail Rarity
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              The direction matters.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For an above-average score, the upper tail represents modeled scores at or above the selected value.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For a below-average score, the lower tail represents modeled scores at or below that value.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For example, IQ 70 on the SD 15 model is near the 2.28th percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Its lower-tail probability is approximately 2.28%, also roughly 1 in 44.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              These two positions are symmetrical in the theoretical distribution, but they refer to opposite tails.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why Extreme Percentiles Need Careful Rounding
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              An IQ percentile calculator may show values such as 99.9 or 99.99.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Those numbers may look similar, but the corresponding tail probabilities are very different.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A percentile of 99.9 leaves 0.1% above it, equivalent to approximately 1 in 1,000 under the model.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A percentile of 99.99 leaves 0.01% above it, equivalent to approximately 1 in 10,000.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              This is why our calculator should retain additional precision for extreme values instead of rounding every result to two decimal places.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: WHY DO DIFFERENT IQ PERCENTILE CALCULATORS SHOW DIFFERENT RESULTS? */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-rose-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 mb-3">
            <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Troubleshooting</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Why Do Different IQ Percentile Calculators Show Different Results?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            Two calculators may return different answers for the same entered IQ score.
          </p>
          <p>
            This does not necessarily mean one of them has a software error.
          </p>
          <p>
            Often, the difference comes from the statistical assumptions being used.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Reason 1: Different Standard Deviations
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              This is one of the most common explanations.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              An IQ of 130 under SD 15 is approximately the 97.72nd percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Under SD 24, the same number is approximately the 89.44th percentile.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Before comparing calculator results, confirm that both tools use the same mean and standard deviation.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Reason 2: Different Rounding Rules
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Some calculators display whole-number percentiles.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Others display two, three, or more decimal places.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For example, approximately 97.725% may be displayed as the 98th percentile after rounding to a whole number.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              These displays can refer to the same underlying result.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The differences become more important in extreme tails, where small changes in displayed percentages can produce large differences in rarity estimates.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Reason 3: Theoretical Models vs. Test-Specific Norms
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Our calculator uses a normal-distribution model.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              An official test report may calculate percentile ranks using actual standardization data or reporting conventions.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The official percentile can differ from the theoretical conversion, especially where score rounding, norm tables, and measurement limitations matter.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Reason 4: Different Versions of a Test
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              The same assessment family may have multiple editions.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Norms, scoring systems, reporting ranges, and interpretation guidelines can change between editions.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Always verify the edition associated with your result.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Reason 5: Entering the Wrong Type of Score
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A raw score, scaled subtest score, standard score, percentage correct, and percentile are not interchangeable.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Entering the wrong type of number can produce a mathematically valid calculation with an entirely inappropriate interpretation.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Before using the calculator, verify that your input is a standardized IQ score on the scale selected.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Should You Do When Results Disagree?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              First, compare the standard deviation settings.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Second, check the mean used by both tools.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Third, compare the displayed precision and rounding.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Finally, check whether one tool uses a generic statistical model while the other uses test-specific norms.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If you have an official assessment report, its test-specific interpretation should take precedence over an online approximation.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: HOW ACCURATE ARE IQ PERCENTILE CALCULATIONS?                    */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Info className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Reliability & Validity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            How Accurate Are IQ Percentile Calculations?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            An IQ percentile conversion can be mathematically accurate without providing a clinically valid interpretation of a person's intelligence.
          </p>
          <p>
            That distinction is important.
          </p>
          <p>
            Our calculator applies a specified mathematical model to the number you enter.
          </p>
          <p>
            It does not determine whether the original IQ score came from a reliable, appropriately standardized assessment.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Mathematical Accuracy
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Mathematical accuracy means that the calculator correctly applies the normal cumulative distribution and inverse distribution formulas.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For example, on a mean-100, SD-15 scale, the z-score of IQ 115 is exactly +1.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The corresponding theoretical percentile is approximately 84.13.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              These values can be independently checked using statistical software or standard normal distribution tables.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Test Validity and Reliability
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A standardized psychological assessment requires evidence that supports its intended score interpretations and uses.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Reliability concerns the precision or consistency of measurements.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Validity concerns the evidence supporting the meaning and use of the results.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A calculator cannot establish these properties for an IQ score supplied by a visitor.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              They depend on the underlying test and the evidence supporting it.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              Why Confidence Intervals Matter
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A reported standardized score is generally an estimate rather than a perfectly exact measurement.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Professional assessment reports may include confidence intervals to communicate score uncertainty.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              For example, an assessment may indicate that a person's estimated score lies within a range at a stated confidence level.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Our calculator does not estimate those intervals because it doesn't know the test's specific measurement error or reliability evidence.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Do not interpret small score differences as proof of meaningful differences between individuals.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              When Should You Use an Official Report Instead?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Use the original report when the result matters for educational planning, clinical evaluation, formal qualification, or other important decisions.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              A generic IQ percentile calculator is useful for learning about score scales and statistical relationships.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              It is not a substitute for a qualified professional's interpretation.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: CAN YOU CONVERT AN ONLINE IQ TEST SCORE INTO A PERCENTILE?     */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-rose-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 mb-3">
            <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Important Limitation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Can You Convert an Online IQ Test Score Into a Percentile?
          </h2>
        </div>

        <div className="space-y-4 text-base text-[#60718B] leading-relaxed">
          <p>
            A score from an ordinary online reasoning quiz cannot automatically be converted into a standardized IQ percentile.
          </p>
          <p>
            This matters if you have taken our free IQ Test or Quick IQ Test.
          </p>
          <p>
            Those tools provide practice feedback based on the questions answered.
          </p>
          <p>
            For example, a result of 8/10 means eight of ten questions were correct.
          </p>
          <p>
            A result of 16/20 means sixteen of twenty questions were correct.
          </p>
          <p>
            Both represent 80% accuracy.
          </p>
          <p>
            Neither result establishes an IQ of 80, a percentile rank of 80, or any other standardized IQ number.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Is Required for a Meaningful Percentile?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              A percentile interpretation requires an appropriate reference distribution or norming data.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              The assessment must also support the interpretation being made.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Without those elements, there is no justified way to convert a simple percentage correct into a standardized IQ percentile.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#07152F]">
              What Should You Do With an Online Practice Score?
            </h3>
            <p className="text-base text-[#60718B] leading-relaxed">
              Use the result to review your answers and understand the reasoning techniques involved.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If you want another challenge, take our <Link href="/" className="font-semibold text-[#2453FF] hover:underline">full IQ Test</Link> or <Link href="/quick-iq-test/" className="font-semibold text-[#2453FF] hover:underline">Quick IQ Test</Link>.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              If you need a formally interpretable IQ result, consult an appropriately qualified assessment professional or an approved testing provider.
            </p>
            <p className="text-base text-[#60718B] leading-relaxed">
              Do not enter practice accuracy percentages into the percentile calculator as though they were IQ scores.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS ABOUT IQ PERCENTILES                 */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <HelpCircle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Frequently Asked Questions About IQ Percentiles
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] mt-2">
            Key questions and scientific answers regarding IQ-to-percentile conversion, standard deviation selection, and theoretical rarity estimates.
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
      {/* SECTION 12: OUR CALCULATION METHOD AND LIMITATIONS                          */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-br from-white to-[#F7FAFF] rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-[0_10px_30px_rgba(7,21,47,0.04)] space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] mb-3">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Methodology & Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] tracking-tight leading-tight">
            Our Calculation Method and Limitations
          </h2>
        </div>

        <div className="relative z-10 space-y-4 text-sm sm:text-base text-[#60718B] leading-relaxed">
          <p>
            Our IQ Percentile Calculator uses a normal-distribution model with a mean of 100 and a user-selected standard deviation of 15, 16, or 24.
          </p>
          <p>
            The calculator supports two conversion directions.
          </p>
          <p>
            For IQ to percentile:
          </p>
          <div className="p-4 bg-gradient-to-r from-[#2453FF]/10 to-[#4779FF]/10 rounded-xl border border-[#2453FF]/20 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
            Z = (IQ − 100) ÷ SD
          </div>
          <div className="p-4 bg-gradient-to-r from-[#2453FF]/10 to-[#4779FF]/10 rounded-xl border border-[#2453FF]/20 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
            Percentile = 100 × Φ(Z)
          </div>
          <p>
            For percentile to IQ:
          </p>
          <div className="p-4 bg-gradient-to-r from-[#2453FF]/10 to-[#4779FF]/10 rounded-xl border border-[#2453FF]/20 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
            Z = Φ⁻¹(Percentile ÷ 100)
          </div>
          <div className="p-4 bg-gradient-to-r from-[#2453FF]/10 to-[#4779FF]/10 rounded-xl border border-[#2453FF]/20 text-center font-mono font-bold text-sm sm:text-base text-[#07152F] shadow-sm">
            IQ = 100 + (Z × SD)
          </div>
          <p>
            Here, Φ is the standard normal cumulative distribution function and Φ⁻¹ is its inverse.
          </p>
          <p>
            The calculator also derives modeled upper-tail probability by subtracting the cumulative probability from one. A "1 in X" estimate is the reciprocal of the relevant tail probability.
          </p>
          <p>
            All values depend on the selected mathematical assumptions.
          </p>
          <p>
            This tool does not administer an intelligence test, validate an entered score, provide a psychological diagnosis, or determine eligibility for a particular institution.
          </p>
          <p>
            Actual assessment reports may use different norming data, reporting practices, test versions, and measures of score uncertainty.
          </p>
          <p>
            The calculator's purpose is to make theoretical IQ-to-percentile relationships understandable and easy to explore.
          </p>
        </div>

        {/* Notice of Important Limitations */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900 leading-relaxed space-y-2">
          <p className="font-bold text-amber-950 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Important Limitations</span>
          </p>
          <p>
            The calculator cannot validate an IQ score, determine whether an assessment was administered correctly, provide a diagnosis, or replace the interpretation in an official test report. The model is intended to help visitors understand statistical concepts, compare numerical reference points, and read standardized scores more carefully.
          </p>
        </div>

        {/* External Authoritative References */}
        <div className="space-y-3 pt-2">
          <p className="text-xs sm:text-sm font-semibold text-[#07152F]">
            Authoritative testing guidance and international assessment standards:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://ncme.org/resources/books/testing-standards/"
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
              <span>Mensa International's Testing FAQs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom CTA to Return to Calculator */}
        <div className="pt-6 border-t border-[#E2EAF7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#60718B]">
            Use the calculator above to convert a standardized IQ score, explore the corresponding theoretical percentile, and see how the result changes with the selected standard deviation.
          </p>
          <button
            type="button"
            onClick={scrollToCalculator}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2453FF] text-white text-xs sm:text-sm font-bold cta-glow hover:bg-[#1a44e6] cursor-pointer transition-colors shrink-0"
          >
            <span>Back to Calculator</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </article>
  );
};
