'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shapes,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Check,
  X,
  Sparkles,
  Award,
  Layers,
  Info,
  Brain,
  ChevronDown,
  Target,
  BarChart3,
  Lightbulb,
  AlertTriangle,
  RotateCcw,
  Compass,
  FileCheck,
  Eye,
  Scan,
  Grid,
} from 'lucide-react';

interface AbstractComprehensiveArticleProps {
  onStartClick?: () => void;
}

export const AbstractComprehensiveArticle: React.FC<AbstractComprehensiveArticleProps> = ({
  onStartClick,
}) => {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleScrollToTop = () => {
    if (onStartClick) {
      onStartClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: 'What is an abstract reasoning test?',
      a: 'An abstract reasoning test presents visual problems involving geometric figures, patterns, and transformations. You must identify the relationship between the figures and apply it to find the correct answer. Common formats include shape sequences, missing matrices, odd-one-out questions, and visual analogies. These tasks usually require little specialized vocabulary and focus on how you interpret unfamiliar visual information.',
    },
    {
      q: 'Is this abstract reasoning test free?',
      a: 'Yes. Our abstract reasoning practice tool is designed to provide a free set of visual questions with answers and explanations. No payment or registration is required for the core assessment. You can use it to explore common question formats and review your reasoning. The results are educational practice feedback rather than a professionally standardized ability score.',
    },
    {
      q: 'How many questions are included?',
      a: 'The assessment contains 20 original visual questions: six figure sequences, six matrix reasoning questions, four odd-one-out puzzles, and four visual analogies. Together, these formats offer a range of pattern-recognition challenges. The supporting article also includes separate worked examples that help explain the main solving techniques.',
    },
    {
      q: 'What types of patterns appear in abstract reasoning tests?',
      a: 'Common patterns involve shape changes, counting, movement, rotation, reflection, and shading. Some questions use one rule, while others combine multiple transformations. A matrix might change the number of shapes from left to right while changing the shape type from top to bottom. Learning to inspect these features systematically is a useful preparation technique.',
    },
    {
      q: 'How do I solve abstract reasoning questions?',
      a: 'Start by looking for changes in shape, count, position, orientation, and fill. Identify a possible rule and test whether it applies throughout the question. In a matrix, examine rows and columns separately. Then compare each answer option with the complete rule. Avoid selecting an option merely because it resembles the previous figure.',
    },
    {
      q: 'How do I solve 3×3 matrix questions?',
      a: 'Examine the complete rows first and look for changes such as rotation, increasing quantity, or shape substitution. Then inspect the columns for another relationship. The missing figure may need to satisfy rules operating in both directions. Use elimination to remove options that violate any required property, and check the completed grid before submitting.',
    },
    {
      q: 'Is abstract reasoning the same as inductive reasoning?',
      a: 'Not exactly. Abstract reasoning commonly involves visual figures and unfamiliar patterns, while inductive reasoning describes the process of inferring a general rule from examples. Many abstract reasoning questions use inductive reasoning, so the two terms frequently overlap in aptitude-test preparation. The exact meaning depends on the assessment provider and question format.',
    },
    {
      q: 'Is an abstract reasoning test the same as an IQ test?',
      a: 'No. Abstract reasoning tasks may form one component of a broader intelligence assessment, but a short online abstract reasoning practice test is not equivalent to a professionally standardized IQ test. Our tool measures performance on its own question set and does not establish an official IQ score, percentile rank, or clinical interpretation.',
    },
    {
      q: 'Can practice improve my abstract reasoning test performance?',
      a: 'Practice can help you become familiar with visual question types, recognize common transformations, and develop more systematic solving strategies. Reviewing worked explanations may help you avoid repeating the same mistakes. However, improvement on practice questions does not necessarily demonstrate an increase in general intelligence or guarantee success on a different assessment.',
    },
    {
      q: 'Will I see answers and explanations?',
      a: 'Yes. The assessment includes answer explanations to help you understand each visual rule. In Test Mode, answers are reviewed after submitting the assessment. Learn Mode is designed to provide explanations after checking individual responses. For visual puzzles, the most useful explanations show how shapes move, rotate, change count, or combine.',
    },
  ];

  return (
    <article className="w-full bg-white text-slate-800 py-12 sm:py-16 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 leading-relaxed">
        {/* ========================================================================= */}
        {/* SECTION 1: WHAT IS AN ABSTRACT REASONING TEST? (Starts with H2)           */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Shapes className="w-3.5 h-3.5" />
            <span>Nonverbal Problem-Solving Guide</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            What Is an Abstract Reasoning Test?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            An abstract reasoning test measures how well you can identify relationships, recognize patterns, and apply rules to unfamiliar visual information. Instead of asking you to remember facts or explain words, it presents shapes, symbols, and diagrams that follow a particular pattern.
          </p>

          <p className="text-slate-600 text-base">
            Your task is to discover the rule and use it to select the correct answer.
          </p>

          <p className="text-slate-600 text-base">
            For example, you might see five geometric figures and need to work out which shape comes next. Another question may show a 3×3 grid with one missing square. To solve it, you need to understand how the figures change across the rows or columns.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 text-sm text-slate-700">
            <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <p>
              Abstract reasoning questions commonly appear in aptitude assessments, educational exercises, and nonverbal reasoning activities. They are particularly useful for practising how to approach unfamiliar problems.
            </p>
          </div>

          <p className="text-slate-600 text-base">
            Our free abstract reasoning test lets you explore these question formats using original visual puzzles, with answers and explanations to help you learn.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: WHAT DOES AN ABSTRACT REASONING TEST MEASURE?                  */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            What Does an Abstract Reasoning Test Measure?
          </h3>

          <p className="text-slate-600 text-base">
            Abstract reasoning questions mainly involve recognizing visual relationships and identifying the rules that connect different figures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                Pattern Recognition
              </span>
              <p className="text-sm text-slate-700">
                Identifying changes that repeat across shapes and positions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                Rule Discovery
              </span>
              <p className="text-sm text-slate-700">
                Working out how figures are transformed between steps or across grid axes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                Visual Comparison
              </span>
              <p className="text-sm text-slate-700">
                Noticing differences in shape, position, count, orientation, or shading.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                Applying Rules
              </span>
              <p className="text-sm text-slate-700">
                Using an identified relationship to accurately predict a missing figure.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 sm:col-span-2">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                Combining Information
              </span>
              <p className="text-sm text-slate-700">
                Following two or more changes simultaneously without losing track of independent variables.
              </p>
            </div>
          </div>

          <p className="text-slate-600 text-base">
            These tasks are sometimes described as nonverbal or figural reasoning.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-0.5">Assessment Scope & Context:</strong>
              Although an abstract reasoning aptitude test may be part of a broader assessment, our online practice test is not a professionally standardized intelligence measure. Your results show how you performed on the questions presented. They do not establish an official IQ score or population percentile.
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: HOW DOES OUR FREE ABSTRACT REASONING TEST WORK?               */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            How Does Our Free Abstract Reasoning Test Work?
          </h2>

          <p className="text-slate-600 text-base">
            Our abstract reasoning test online is designed to give you practical experience with visual pattern questions. The planned assessment contains 20 questions across four categories: figure sequences, matrix reasoning, odd-one-out puzzles, and visual analogies.
          </p>

          <p className="text-slate-600 text-base">
            You can use the test to practise recognizing rules, evaluate your answers, and understand the reasoning behind each solution.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Step 1: Choose Test Mode or Learn Mode
              </h3>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Test Mode</strong> is designed for a complete practice assessment. You work through the questions and receive your results after submitting.
              </p>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Learn Mode</strong> focuses on understanding the questions. You can check an answer and review its explanation as you work.
              </p>
              <p className="text-xs text-indigo-700 font-medium">
                Recommendation: If you are unfamiliar with abstract reasoning, begin with Learn Mode. If you want to challenge yourself without seeing solutions during the attempt, choose Test Mode.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Step 2: Solve the Visual Questions
              </h3>
              <p className="text-sm text-slate-600 mb-1.5">
                Look at each diagram carefully. Pay attention to shape, number of elements, position, direction, and shading.
              </p>
              <p className="text-sm text-slate-600">
                A simple question may use one rule, while a more challenging puzzle may combine several changes. Choose the answer that fits the complete pattern rather than the first option that looks similar.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Step 3: Check Your Answers
              </h3>
              <p className="text-sm text-slate-600 mb-1.5">
                In Test Mode, complete the assessment and submit your responses to see your score. In Learn Mode, check answers individually to understand the reasoning.
              </p>
              <p className="text-xs text-slate-500">
                A suggested 15-minute timer may be available for timed practice. This is a practice setting, not an official testing standard.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Step 4: Review the Explanations
              </h3>
              <p className="text-sm text-slate-600 mb-1.5">
                The explanations show how the underlying visual rules work. When you miss a question, identify the feature you overlooked.
              </p>
              <p className="text-sm text-slate-600">
                Did the figure rotate? Did an object move? Was there a second rule controlling the shading? Understanding the reason behind a mistake is more useful than memorizing a particular answer.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: TYPES OF ABSTRACT REASONING QUESTIONS (With Table)              */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Types of Abstract Reasoning Questions
          </h2>

          <p className="text-slate-600 text-base">
            Abstract reasoning questions come in several formats. Some use sequences of figures, while others require you to complete a matrix or identify a shared relationship.
          </p>

          <p className="text-slate-600 text-base">
            Our proposed test includes four main types.
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Question type</th>
                  <th scope="col" className="p-3.5 sm:p-4">Questions</th>
                  <th scope="col" className="p-3.5 sm:p-4">Main task</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Figure sequences</td>
                  <td className="p-3.5 sm:p-4">6</td>
                  <td className="p-3.5 sm:p-4">Identify the next figure in an ordered progression</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Matrix reasoning</td>
                  <td className="p-3.5 sm:p-4">6</td>
                  <td className="p-3.5 sm:p-4">Complete a missing grid cell governed by row and column rules</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Odd one out</td>
                  <td className="p-3.5 sm:p-4">4</td>
                  <td className="p-3.5 sm:p-4">Find the figure that breaks a shared visual rule</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Visual analogies</td>
                  <td className="p-3.5 sm:p-4">4</td>
                  <td className="p-3.5 sm:p-4">Apply a transformation rule to a new figure pair</td>
                </tr>
                <tr className="bg-slate-50/80 font-bold text-slate-900">
                  <td className="p-3.5 sm:p-4">Total</td>
                  <td className="p-3.5 sm:p-4">20</td>
                  <td className="p-3.5 sm:p-4 text-indigo-700">Visual reasoning practice</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep Dives into Each Type */}
          <div className="space-y-4 pt-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Figure Sequences</h3>
              <p className="text-slate-600 text-sm mb-2">
                A figure sequence presents several images arranged in an order. Your task is to identify what changes between consecutive figures and predict the next one. For example, an arrow might rotate 90 degrees clockwise with every step. Other sequences use shapes that alternate between filled and unfilled, objects that move from one corner to another, or a changing number of dots.
              </p>
              <p className="text-slate-600 text-sm mb-2">
                More difficult figure sequences may combine two rules. A triangle might rotate clockwise while its shading alternates between black and white. The correct answer must satisfy both patterns.
              </p>
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-900 font-semibold">
                Solving tip: Examine one visual feature at a time before considering combinations.
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Matrix Reasoning Questions</h3>
              <p className="text-slate-600 text-sm mb-2">
                Matrix reasoning questions show figures arranged in a grid, commonly 2×2 or 3×3, with one cell missing. You must find the figure that completes the grid. The pattern might run horizontally, vertically, or in both directions.
              </p>
              <p className="text-slate-600 text-sm mb-2">
                For example, each row could contain the same type of shape while the number of shapes increases from left to right. Another matrix might use rotation across rows and changes in shading down columns. These questions can be more demanding because the missing figure may need to satisfy multiple independent rules.
              </p>
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-900 font-semibold">
                Solving tip: Check rows and columns separately before deciding on the answer.
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Odd-One-Out Shape Questions</h3>
              <p className="text-slate-600 text-sm mb-2">
                Odd-one-out questions present a group of figures. Most figures share a particular visual relationship, while one breaks it. You must identify the exception. The shared rule might concern:
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700 font-medium pl-2 mb-2">
                <li className="flex items-center gap-1.5">• Number of elements</li>
                <li className="flex items-center gap-1.5">• Symmetry</li>
                <li className="flex items-center gap-1.5">• Rotation</li>
                <li className="flex items-center gap-1.5">• Position</li>
                <li className="flex items-center gap-1.5">• Number of sides</li>
                <li className="flex items-center gap-1.5">• Shading or fill</li>
              </ul>
              <p className="text-slate-600 text-sm mb-2">
                The challenge is to identify the relevant property rather than simply choosing the figure that looks most unusual.
              </p>
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-900 font-semibold">
                Solving tip: Look for an objective feature shared by all but one figure.
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Visual Analogies</h3>
              <p className="text-slate-600 text-sm mb-2">
                Visual analogy questions compare two pairs of figures. The first pair demonstrates a transformation. You must apply the same transformation to the second pair. The structure is often:
              </p>
              <div className="p-2.5 bg-slate-100 rounded-lg text-center font-mono font-bold text-slate-800 text-sm mb-2">
                Figure A → Figure B :: Figure C → ?
              </div>
              <p className="text-slate-600 text-sm mb-2">
                For example, the first figure might rotate clockwise and change from an outline to a filled shape. To solve the analogy, apply both changes to the third figure.
              </p>
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-900 font-semibold">
                Solving tip: Describe the transformation from A to B before looking at the answer options.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: FOUR WORKED EXAMPLES WITH ACCESSIBLE SVG ILLUSTRATIONS        */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Abstract Reasoning Questions and Answers: Four Worked Examples
            </h2>
            <p className="text-slate-600 text-base">
              The following abstract reasoning test examples demonstrate four common question formats. They are separate learning examples, not questions from the main test bank. Try to identify each pattern before reading its solution.
            </p>
          </div>

          {/* WORKED EXAMPLE 1: Figure Sequence */}
          <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-5 sm:p-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Example 1: Figure Sequence — Rotation and Shading
              </h3>
            </div>

            <p className="text-sm font-semibold text-slate-800">
              Question: Which figure comes next?
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              The sequence contains an arrow and a circular marker.
            </p>

            {/* Stimulus Sequence Diagram (SVG) */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200">
              <span className="sr-only">
                Figure sequence with 4 frames: Frame 1 has up arrow with outline circle, Frame 2 has right arrow with filled circle, Frame 3 has down arrow with outline circle, Frame 4 has left arrow with filled circle, Frame 5 is question mark.
              </span>
              <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-lg mx-auto">
                {/* Frame 1: Up arrow, outline circle */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-slate-300 bg-slate-50/50 flex items-center justify-center p-2">
                    <svg viewBox="0 0 60 60" className="w-full h-full" aria-hidden="true">
                      {/* Arrow Up */}
                      <line x1="30" y1="46" x2="30" y2="16" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="30,10 20,24 40,24" fill="#07152F" />
                      {/* Outline circle at bottom right */}
                      <circle cx="46" cy="46" r="6" stroke="#2453FF" strokeWidth="3" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1">1</span>
                </div>

                {/* Frame 2: Right arrow, filled circle */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-slate-300 bg-slate-50/50 flex items-center justify-center p-2">
                    <svg viewBox="0 0 60 60" className="w-full h-full" aria-hidden="true">
                      {/* Arrow Right */}
                      <line x1="14" y1="30" x2="44" y2="30" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="50,30 36,20 36,40" fill="#07152F" />
                      {/* Filled circle at bottom left */}
                      <circle cx="14" cy="46" r="6" fill="#2453FF" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1">2</span>
                </div>

                {/* Frame 3: Down arrow, outline circle */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-slate-300 bg-slate-50/50 flex items-center justify-center p-2">
                    <svg viewBox="0 0 60 60" className="w-full h-full" aria-hidden="true">
                      {/* Arrow Down */}
                      <line x1="30" y1="14" x2="30" y2="44" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="30,50 20,36 40,36" fill="#07152F" />
                      {/* Outline circle at top left */}
                      <circle cx="14" cy="14" r="6" stroke="#2453FF" strokeWidth="3" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1">3</span>
                </div>

                {/* Frame 4: Left arrow, filled circle */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-slate-300 bg-slate-50/50 flex items-center justify-center p-2">
                    <svg viewBox="0 0 60 60" className="w-full h-full" aria-hidden="true">
                      {/* Arrow Left */}
                      <line x1="46" y1="30" x2="16" y2="30" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="10,30 24,20 24,40" fill="#07152F" />
                      {/* Filled circle at top right */}
                      <circle cx="46" cy="14" r="6" fill="#2453FF" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1">4</span>
                </div>

                {/* Frame 5: Target ? */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-dashed border-indigo-400 bg-indigo-50/40 flex items-center justify-center text-indigo-600 font-black text-xl">
                    ?
                  </div>
                  <span className="text-[11px] font-bold text-indigo-600 mt-1">5</span>
                </div>
              </div>
            </div>

            {/* Answer Options A, B, C, D (SVG) */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Choose the next figure:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Option A: Up arrow, filled marker */}
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                  <span className="absolute top-2 left-2 text-xs font-bold text-slate-400">A</span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="30" y1="46" x2="30" y2="16" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="30,10 20,24 40,24" fill="#07152F" />
                      <circle cx="46" cy="46" r="6" fill="#2453FF" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-600 text-center font-medium">Up · Filled</span>
                </div>

                {/* Option B: Right arrow, outline marker */}
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                  <span className="absolute top-2 left-2 text-xs font-bold text-slate-400">B</span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="14" y1="30" x2="44" y2="30" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="50,30 36,20 36,40" fill="#07152F" />
                      <circle cx="14" cy="46" r="6" stroke="#2453FF" strokeWidth="3" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-600 text-center font-medium">Right · Outline</span>
                </div>

                {/* Option C: Up arrow, outline marker (CORRECT) */}
                <div className="p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50/30 flex flex-col items-center relative ring-2 ring-emerald-500/20">
                  <span className="absolute top-2 left-2 text-xs font-bold text-emerald-700">C</span>
                  <span className="absolute top-2 right-2 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded">
                    Correct
                  </span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="30" y1="46" x2="30" y2="16" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="30,10 20,24 40,24" fill="#07152F" />
                      <circle cx="46" cy="46" r="6" stroke="#2453FF" strokeWidth="3" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-emerald-800 text-center font-bold">Up · Outline</span>
                </div>

                {/* Option D: Down arrow, filled marker */}
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                  <span className="absolute top-2 left-2 text-xs font-bold text-slate-400">D</span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="30" y1="14" x2="30" y2="44" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="30,50 20,36 40,36" fill="#07152F" />
                      <circle cx="14" cy="14" r="6" fill="#2453FF" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-600 text-center font-medium">Down · Filled</span>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Correct Answer: C. Up arrow with outline marker.</span>
              </div>
              <p className="text-slate-600">
                <strong>Explanation:</strong> There are two separate rules.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>
                  First, the arrow rotates 90 degrees clockwise at each step: Up → Right → Down → Left → Up.
                </li>
                <li>
                  Second, the circular marker alternates between outline and filled: Outline → Filled → Outline → Filled → Outline.
                </li>
              </ul>
              <p className="text-slate-600">
                The next figure must therefore contain an upward arrow and an outline marker. Option A follows rotation but uses the wrong marker fill; Option B has the correct marker fill but the wrong direction; Option D follows neither requirement.
              </p>
              <div className="pt-2 border-t border-slate-100 text-indigo-900 font-semibold text-xs">
                Key lesson: In visual sequences, check whether two features change independently.
              </div>
            </div>
          </div>

          {/* WORKED EXAMPLE 2: 3x3 Matrix */}
          <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-5 sm:p-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Example 2: Matrix Reasoning — Rows and Columns
              </h3>
            </div>

            <p className="text-sm font-semibold text-slate-800">
              Question: Which group of shapes completes this 3×3 matrix?
            </p>

            {/* 3x3 Matrix Grid (SVG) */}
            <div className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 flex justify-center">
              <div className="grid grid-cols-3 gap-2.5 max-w-sm w-full">
                {/* Row 1: 1 Circle | 2 Circles | 3 Circles */}
                <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="30" cy="30" r="10" stroke="#07152F" strokeWidth="2.5" fill="#3884FF" fillOpacity="0.2" />
                  </svg>
                </div>
                <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="20" cy="30" r="8" stroke="#07152F" strokeWidth="2" fill="#3884FF" fillOpacity="0.2" />
                    <circle cx="40" cy="30" r="8" stroke="#07152F" strokeWidth="2" fill="#3884FF" fillOpacity="0.2" />
                  </svg>
                </div>
                <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="15" cy="30" r="7" stroke="#07152F" strokeWidth="2" fill="#3884FF" fillOpacity="0.2" />
                    <circle cx="30" cy="30" r="7" stroke="#07152F" strokeWidth="2" fill="#3884FF" fillOpacity="0.2" />
                    <circle cx="45" cy="30" r="7" stroke="#07152F" strokeWidth="2" fill="#3884FF" fillOpacity="0.2" />
                  </svg>
                </div>

                {/* Row 2: 1 Triangle | 2 Triangles | 3 Triangles */}
                <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <polygon points="30,18 18,42 42,42" stroke="#07152F" strokeWidth="2.5" fill="#6366F1" fillOpacity="0.2" />
                  </svg>
                </div>
                <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <polygon points="20,20 10,40 30,40" stroke="#07152F" strokeWidth="2" fill="#6366F1" fillOpacity="0.2" />
                    <polygon points="40,20 30,40 50,40" stroke="#07152F" strokeWidth="2" fill="#6366F1" fillOpacity="0.2" />
                  </svg>
                </div>
                <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <polygon points="15,22 7,38 23,38" stroke="#07152F" strokeWidth="2" fill="#6366F1" fillOpacity="0.2" />
                    <polygon points="30,22 22,38 38,38" stroke="#07152F" strokeWidth="2" fill="#6366F1" fillOpacity="0.2" />
                    <polygon points="45,22 37,38 53,38" stroke="#07152F" strokeWidth="2" fill="#6366F1" fillOpacity="0.2" />
                  </svg>
                </div>

                {/* Row 3: 1 Square | 2 Squares | ? */}
                <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <rect x="20" y="20" width="20" height="20" stroke="#07152F" strokeWidth="2.5" fill="#10B981" fillOpacity="0.2" />
                  </svg>
                </div>
                <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <rect x="12" y="22" width="16" height="16" stroke="#07152F" strokeWidth="2" fill="#10B981" fillOpacity="0.2" />
                    <rect x="32" y="22" width="16" height="16" stroke="#07152F" strokeWidth="2" fill="#10B981" fillOpacity="0.2" />
                  </svg>
                </div>
                <div className="aspect-square rounded-xl border-2 border-dashed border-indigo-400 bg-indigo-50/40 flex items-center justify-center text-indigo-600 font-black text-2xl">
                  ?
                </div>
              </div>
            </div>

            {/* Answer Options A, B, C, D */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Answer options:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Option A: Two squares */}
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                  <span className="absolute top-2 left-2 text-xs font-bold text-slate-400">A</span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <rect x="12" y="22" width="16" height="16" stroke="#07152F" strokeWidth="2" fill="#10B981" fillOpacity="0.2" />
                      <rect x="32" y="22" width="16" height="16" stroke="#07152F" strokeWidth="2" fill="#10B981" fillOpacity="0.2" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-600 text-center font-medium">Two squares</span>
                </div>

                {/* Option B: Three circles */}
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                  <span className="absolute top-2 left-2 text-xs font-bold text-slate-400">B</span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <circle cx="15" cy="30" r="7" stroke="#07152F" strokeWidth="2" fill="#3884FF" fillOpacity="0.2" />
                      <circle cx="30" cy="30" r="7" stroke="#07152F" strokeWidth="2" fill="#3884FF" fillOpacity="0.2" />
                      <circle cx="45" cy="30" r="7" stroke="#07152F" strokeWidth="2" fill="#3884FF" fillOpacity="0.2" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-600 text-center font-medium">Three circles</span>
                </div>

                {/* Option C: Four squares */}
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                  <span className="absolute top-2 left-2 text-xs font-bold text-slate-400">C</span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <rect x="10" y="16" width="16" height="16" stroke="#07152F" strokeWidth="1.5" fill="#10B981" fillOpacity="0.2" />
                      <rect x="34" y="16" width="16" height="16" stroke="#07152F" strokeWidth="1.5" fill="#10B981" fillOpacity="0.2" />
                      <rect x="10" y="34" width="16" height="16" stroke="#07152F" strokeWidth="1.5" fill="#10B981" fillOpacity="0.2" />
                      <rect x="34" y="34" width="16" height="16" stroke="#07152F" strokeWidth="1.5" fill="#10B981" fillOpacity="0.2" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-600 text-center font-medium">Four squares</span>
                </div>

                {/* Option D: Three squares (CORRECT) */}
                <div className="p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50/30 flex flex-col items-center relative ring-2 ring-emerald-500/20">
                  <span className="absolute top-2 left-2 text-xs font-bold text-emerald-700">D</span>
                  <span className="absolute top-2 right-2 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded">
                    Correct
                  </span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <rect x="8" y="24" width="12" height="12" stroke="#07152F" strokeWidth="2" fill="#10B981" fillOpacity="0.2" />
                      <rect x="24" y="24" width="12" height="12" stroke="#07152F" strokeWidth="2" fill="#10B981" fillOpacity="0.2" />
                      <rect x="40" y="24" width="12" height="12" stroke="#07152F" strokeWidth="2" fill="#10B981" fillOpacity="0.2" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-emerald-800 text-center font-bold">Three squares</span>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Correct Answer: D. Three squares.</span>
              </div>
              <p className="text-slate-600">
                <strong>Explanation:</strong> Begin by examining the rows. The first row contains only circles, the second only triangles, and the third only squares. Therefore, the missing cell must contain squares.
              </p>
              <p className="text-slate-600">
                Now examine the columns. Column 1 contains one shape, Column 2 contains two shapes, and Column 3 contains three shapes. The missing cell is at row 3, column 3: it must contain three squares.
              </p>
              <div className="pt-2 border-t border-slate-100 text-indigo-900 font-semibold text-xs">
                Key lesson: A matrix answer can require a rule across rows and a second rule across columns.
              </div>
            </div>
          </div>

          {/* WORKED EXAMPLE 3: Odd One Out */}
          <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-5 sm:p-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Example 3: Odd One Out — Shared Shape Property
              </h3>
            </div>

            <p className="text-sm font-semibold text-slate-800">
              Question: Four figures are shown. Which one does not follow the common rule?
            </p>

            {/* 4 SVG candidate figures */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Figure A: Square with 2 dots */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                <span className="absolute top-2 left-2 text-xs font-bold text-slate-500">A</span>
                <div className="w-16 h-16 my-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <rect x="10" y="10" width="40" height="40" stroke="#07152F" strokeWidth="2.5" fill="#F8FAFC" />
                    <circle cx="23" cy="30" r="4" fill="#2453FF" />
                    <circle cx="37" cy="30" r="4" fill="#2453FF" />
                  </svg>
                </div>
                <span className="text-xs text-slate-600 font-medium">Square · 2 Dots</span>
              </div>

              {/* Figure B: Triangle with 2 dots */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                <span className="absolute top-2 left-2 text-xs font-bold text-slate-500">B</span>
                <div className="w-16 h-16 my-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <polygon points="30,8 10,48 50,48" stroke="#07152F" strokeWidth="2.5" fill="#F8FAFC" />
                    <circle cx="24" cy="36" r="4" fill="#2453FF" />
                    <circle cx="36" cy="36" r="4" fill="#2453FF" />
                  </svg>
                </div>
                <span className="text-xs text-slate-600 font-medium">Triangle · 2 Dots</span>
              </div>

              {/* Figure C: Circle with 2 dots */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                <span className="absolute top-2 left-2 text-xs font-bold text-slate-500">C</span>
                <div className="w-16 h-16 my-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="30" cy="30" r="22" stroke="#07152F" strokeWidth="2.5" fill="#F8FAFC" />
                    <circle cx="23" cy="30" r="4" fill="#2453FF" />
                    <circle cx="37" cy="30" r="4" fill="#2453FF" />
                  </svg>
                </div>
                <span className="text-xs text-slate-600 font-medium">Circle · 2 Dots</span>
              </div>

              {/* Figure D: Hexagon with 3 dots (ODD ONE OUT - CORRECT) */}
              <div className="p-3.5 rounded-xl border-2 border-emerald-500 bg-emerald-50/30 flex flex-col items-center relative ring-2 ring-emerald-500/20">
                <span className="absolute top-2 left-2 text-xs font-bold text-emerald-700">D</span>
                <span className="absolute top-2 right-2 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded">
                  Odd One Out
                </span>
                <div className="w-16 h-16 my-2">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <polygon points="30,8 48,18 48,42 30,52 12,42 12,18" stroke="#07152F" strokeWidth="2.5" fill="#F8FAFC" />
                    <circle cx="20" cy="30" r="3.5" fill="#EF4444" />
                    <circle cx="30" cy="30" r="3.5" fill="#EF4444" />
                    <circle cx="40" cy="30" r="3.5" fill="#EF4444" />
                  </svg>
                </div>
                <span className="text-xs text-emerald-800 font-bold">Hexagon · 3 Dots</span>
              </div>
            </div>

            {/* Explanation */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Correct Answer: D. The hexagon containing three dots.</span>
              </div>
              <p className="text-slate-600">
                <strong>Explanation:</strong> The outside shapes are different, so choosing the odd one out based on whether the figure is a circle, triangle, or polygon will not reveal a consistent rule.
              </p>
              <p className="text-slate-600">
                Instead, compare the elements inside each shape. Figures A, B, and C each contain exactly two dots. Figure D contains three dots. Therefore, D breaks the common rule. The number of sides is a distraction.
              </p>
              <div className="pt-2 border-t border-slate-100 text-indigo-900 font-semibold text-xs">
                Key lesson: When shapes look different, inspect their internal elements and shared relationships before deciding which is the exception.
              </div>
            </div>
          </div>

          {/* WORKED EXAMPLE 4: Visual Analogy */}
          <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-5 sm:p-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Example 4: Visual Analogy — Rotation and Fill
              </h3>
            </div>

            <p className="text-sm font-semibold text-slate-800">
              Question: Apply the same transformation to the second pair.
            </p>

            {/* Visual Analogy Stimulus: Pair 1 (A -> B) :: Pair 2 (C -> ?) */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
                {/* Figure A */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl border border-slate-200 bg-slate-50 p-2 flex items-center justify-center">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="30" y1="46" x2="30" y2="18" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="30,12 20,24 40,24" fill="#07152F" />
                      <circle cx="45" cy="45" r="5" stroke="#2453FF" strokeWidth="2.5" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-500 mt-1">Figure A</span>
                </div>

                <span className="text-lg font-black text-slate-400">→</span>

                {/* Figure B */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl border border-slate-200 bg-slate-50 p-2 flex items-center justify-center">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="14" y1="30" x2="42" y2="30" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="48,30 36,20 36,40" fill="#07152F" />
                      <circle cx="15" cy="45" r="5" fill="#2453FF" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-500 mt-1">Figure B</span>
                </div>

                <span className="text-xl font-black text-indigo-600 px-1">::</span>

                {/* Figure C */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl border border-slate-200 bg-slate-50 p-2 flex items-center justify-center">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="30" y1="14" x2="30" y2="42" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="30,48 20,36 40,36" fill="#07152F" />
                      <circle cx="15" cy="15" r="5" stroke="#2453FF" strokeWidth="2.5" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-500 mt-1">Figure C</span>
                </div>

                <span className="text-lg font-black text-slate-400">→</span>

                {/* Figure D Target */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl border-2 border-dashed border-indigo-400 bg-indigo-50/40 p-2 flex items-center justify-center text-indigo-600 font-black text-xl">
                    ?
                  </div>
                  <span className="text-xs font-bold text-indigo-600 mt-1">Figure D</span>
                </div>
              </div>
            </div>

            {/* Answer Options A, B, C, D */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Answer options:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Option A: Left arrow, filled circle (CORRECT) */}
                <div className="p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50/30 flex flex-col items-center relative ring-2 ring-emerald-500/20">
                  <span className="absolute top-2 left-2 text-xs font-bold text-emerald-700">A</span>
                  <span className="absolute top-2 right-2 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded">
                    Correct
                  </span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="46" y1="30" x2="18" y2="30" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="12,30 24,20 24,40" fill="#07152F" />
                      <circle cx="45" cy="15" r="5" fill="#2453FF" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-emerald-800 text-center font-bold">Left · Filled</span>
                </div>

                {/* Option B: Left arrow, outline circle */}
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                  <span className="absolute top-2 left-2 text-xs font-bold text-slate-400">B</span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="46" y1="30" x2="18" y2="30" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="12,30 24,20 24,40" fill="#07152F" />
                      <circle cx="45" cy="15" r="5" stroke="#2453FF" strokeWidth="2.5" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-600 text-center font-medium">Left · Outline</span>
                </div>

                {/* Option C: Right arrow, filled circle */}
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                  <span className="absolute top-2 left-2 text-xs font-bold text-slate-400">C</span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="14" y1="30" x2="42" y2="30" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="48,30 36,20 36,40" fill="#07152F" />
                      <circle cx="15" cy="45" r="5" fill="#2453FF" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-600 text-center font-medium">Right · Filled</span>
                </div>

                {/* Option D: Down arrow, filled circle */}
                <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col items-center relative">
                  <span className="absolute top-2 left-2 text-xs font-bold text-slate-400">D</span>
                  <div className="w-12 h-12 my-1">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      <line x1="30" y1="14" x2="30" y2="42" stroke="#07152F" strokeWidth="4" strokeLinecap="round" />
                      <polygon points="30,48 20,36 40,36" fill="#07152F" />
                      <circle cx="15" cy="15" r="5" fill="#2453FF" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-600 text-center font-medium">Down · Filled</span>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Correct Answer: A. Left arrow with a filled circle.</span>
              </div>
              <p className="text-slate-600">
                <strong>Explanation:</strong> Compare Figure A with Figure B: The arrow rotates 90 degrees clockwise, and the circle changes from outline to filled.
              </p>
              <p className="text-slate-600">
                Apply both transformations to Figure C: A downward arrow rotated 90 degrees clockwise points left. Its outline circle becomes filled. Therefore, Figure D must contain a left-pointing arrow and a filled circle.
              </p>
              <div className="pt-2 border-t border-slate-100 text-indigo-900 font-semibold text-xs">
                Key lesson: A visual analogy requires the same complete transformation to be applied to the second pair.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: HOW TO SOLVE ABSTRACT REASONING PATTERNS: FIVE-FEATURE SCAN   */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              How to Solve Abstract Reasoning Patterns: The Five-Feature Scan
            </h2>
            <p className="text-slate-600 text-base">
              Many difficult-looking visual puzzles become easier to approach when you examine their elements systematically. Instead of guessing, use our <strong>Five-Feature Scan</strong> to identify the changes that matter.
            </p>
            <p className="text-xs text-slate-500 italic mt-1">
              This is a practical learning checklist, not a formally validated psychological method.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            {/* Step 1: Shape */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                  1
                </span>
                <h3 className="font-bold text-indigo-950 text-sm mb-1.5">Shape</h3>
                <p className="text-xs text-indigo-900/80 leading-relaxed">
                  Identify main geometric figures. Does a circle turn into a triangle? Do shapes alternate or combine?
                </p>
              </div>
            </div>

            {/* Step 2: Count */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                  2
                </span>
                <h3 className="font-bold text-indigo-950 text-sm mb-1.5">Count</h3>
                <p className="text-xs text-indigo-900/80 leading-relaxed">
                  Count dots, lines, sides, or nested shapes. Look for progressions (+1, doubling, alternating parity).
                </p>
              </div>
            </div>

            {/* Step 3: Position */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                  3
                </span>
                <h3 className="font-bold text-indigo-950 text-sm mb-1.5">Position</h3>
                <p className="text-xs text-indigo-900/80 leading-relaxed">
                  Track movement across corners, axes, perimeter loops, or grid cells (clockwise or counter-clockwise).
                </p>
              </div>
            </div>

            {/* Step 4: Orientation */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                  4
                </span>
                <h3 className="font-bold text-indigo-950 text-sm mb-1.5">Orientation</h3>
                <p className="text-xs text-indigo-900/80 leading-relaxed">
                  Observe rotation (45°, 90°, 180°) vs reflection (mirroring). Reflection flips handedness; rotation preserves it.
                </p>
              </div>
            </div>

            {/* Step 5: Fill & Shading */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                  5
                </span>
                <h3 className="font-bold text-indigo-950 text-sm mb-1.5">Fill and Shading</h3>
                <p className="text-xs text-indigo-900/80 leading-relaxed">
                  Notice black, white, striped, or inverted fills. Check whether fills alternate or follow row/column logic.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="text-sm font-bold text-slate-900">Apply and Verify the Rule</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Once you&apos;ve identified a likely rule, test it. Does it explain every transition? Is a second rule needed? Does the proposed answer satisfy all the relevant visual relationships? If two options seem correct, recheck whether one follows only part of the pattern.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: HOW TO SOLVE 3x3 MATRIX REASONING QUESTIONS                    */}
        {/* ========================================================================= */}
        <section className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            How to Solve 3×3 Matrix Reasoning Questions
          </h2>

          <p className="text-slate-600 text-base">
            A 3×3 matrix contains nine positions arranged in three rows and three columns. One position is missing, and you must determine which figure belongs there. These puzzles often seem complicated because several visual properties can change at once. The solution is to examine the grid systematically.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Step 1</span>
              <h3 className="text-sm font-bold text-slate-900">Check the Rule Across Each Row</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Start with the first complete row and compare its three figures. Once you identify a possible row rule (such as rotation or increasing element count), check whether it also holds in the second row.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Step 2</span>
              <h3 className="text-sm font-bold text-slate-900">Check the Rule Down Each Column</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Next, examine each column vertically. The shapes might transform from circles to triangles to squares, or shading may invert. Do not assume vertical rules must mirror horizontal rules.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Step 3</span>
              <h3 className="text-sm font-bold text-slate-900">Combine Multiple Rules</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                The missing figure may need to satisfy both a row rule and a column rule simultaneously. Choosing an option that satisfies only the horizontal count rule but violates the vertical shape rule will result in an incorrect answer.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Step 4</span>
              <h3 className="text-sm font-bold text-slate-900">Eliminate Incomplete Answers</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Check each candidate against the full matrix. Eliminate distractors that have the right shape but the wrong orientation, or correct position with incorrect shading.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Step 5</span>
              <h3 className="text-sm font-bold text-slate-900">Verify the Whole Grid</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Before submitting, mentally reconstruct the completed matrix. Check every row and column relevant to the inferred rules. If the proposed answer creates a contradiction, reconsider the pattern.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: ABSTRACT REASONING TEST TIPS AND PREPARATION                   */}
        {/* ========================================================================= */}
        <section className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Abstract Reasoning Test Tips and Preparation
          </h2>

          <p className="text-slate-600 text-base">
            Preparing for an abstract reasoning aptitude test involves becoming familiar with visual question formats and learning how to examine patterns efficiently. The most useful preparation is deliberate practice with clear feedback.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Start With Untimed Questions</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Focus on understanding the rule rather than answering quickly. Once you&apos;re comfortable with rotations and counts, introduce timed practice.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Recognize Common Transformations</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Review the five visual features regularly. Recognizing each rule independently makes complex multi-layer problems straightforward to dissect.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Don&apos;t Spend Too Long on One Question</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                In a timed test, a difficult question can consume time you need elsewhere. Mark the problem, move ahead, and return if time permits.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Use Elimination Carefully</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Compare options with verified rules. Eliminating options with incorrect counts narrows your decision space rapidly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Review Mistakes by Pattern Type</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Identify recurring errors: did you overlook a position shift, confuse reflection with rotation, or inspect only rows?
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Prepare for Your Specific Provider</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Abstract, nonverbal, inductive, and diagrammatic assessments vary across test publishers (e.g. SHL, Korn Ferry). Consult official guides.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: UNDERSTANDING YOUR TEST RESULTS (With Math Formula)             */}
        {/* ========================================================================= */}
        <section className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Understanding Your Abstract Reasoning Test Results
          </h2>

          <p className="text-slate-600 text-base">
            After completing the assessment, your result shows how many questions you answered correctly. The scoring method is straightforward:
          </p>

          <div className="p-5 rounded-2xl bg-indigo-900 text-white text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-indigo-300">
              Scoring Calculation Formula
            </span>
            <div className="text-xl sm:text-2xl font-black font-mono">
              Accuracy % = (Correct Answers ÷ Total Questions) × 100
            </div>
            <p className="text-xs text-indigo-200">
              Example: 16 correct out of 20 = (16 ÷ 20) × 100 = 80% Practice Accuracy
            </p>
          </div>

          <p className="text-slate-600 text-sm">
            This means you answered 80% of this specific question set correctly. It does not mean you are at the 80th percentile, and it does not establish an IQ of 80.
          </p>

          <div className="space-y-3 pt-2">
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">What Does the Category Breakdown Show?</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The assessment contains four visual question formats. Your results may indicate, for example, that you answered more figure-sequence questions correctly than matrix questions. That information can help you choose what to practise next. However, each category contains only four or six questions; such small samples are not sufficient to establish reliable measurements of separate cognitive abilities.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Does a Higher Retake Score Mean You&apos;re More Intelligent?</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Not necessarily. If you repeat the same questions, you may remember the correct answers or become familiar with the patterns. A higher score may reflect practice, recall, or improved familiarity with those particular items rather than an increase in general intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: ABSTRACT VS INDUCTIVE VS LOGICAL REASONING (With Table)        */}
        {/* ========================================================================= */}
        <section className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Abstract vs. Inductive vs. Logical Reasoning: What&apos;s the Difference?
          </h2>

          <p className="text-slate-600 text-base">
            These terms overlap, but they describe somewhat different aspects of human reasoning:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Reasoning type</th>
                  <th scope="col" className="p-3.5 sm:p-4">Main focus</th>
                  <th scope="col" className="p-3.5 sm:p-4">Typical example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-indigo-700">Abstract reasoning</td>
                  <td className="p-3.5 sm:p-4">Discovering relationships among unfamiliar visual figures</td>
                  <td className="p-3.5 sm:p-4">Missing shape in a 2×2 or 3×3 matrix</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Inductive reasoning</td>
                  <td className="p-3.5 sm:p-4">Inferring likely rules from specific examples</td>
                  <td className="p-3.5 sm:p-4">Completing a visual or numerical sequence</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Logical reasoning</td>
                  <td className="p-3.5 sm:p-4">Drawing necessary conclusions from rules or premises</td>
                  <td className="p-3.5 sm:p-4">Solving conditional if-then or syllogism problems</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Diagrammatic reasoning</td>
                  <td className="p-3.5 sm:p-4">Following operations and directional flowcharts in diagrams</td>
                  <td className="p-3.5 sm:p-4">Tracking an object through sequential operators</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-600 text-sm">
            A visual pattern question can involve both abstract and inductive reasoning. Likewise, some diagrammatic reasoning questions require logical deduction. The categories are not mutually exclusive.
          </p>

          {/* Internal Cross-Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <Link
              href="/logical-reasoning-test"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all block group"
            >
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-0.5">
                Verbal & Deductive Logic
              </span>
              <strong className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors block">
                Logical Reasoning Test →
              </strong>
              <p className="text-[11px] text-slate-500 mt-1">
                Written premises, if-then rules, and ordering constraints.
              </p>
            </Link>

            <Link
              href="/iq-practice-questions"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all block group"
            >
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-0.5">
                Mixed Question Bank
              </span>
              <strong className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors block">
                IQ Practice Questions →
              </strong>
              <p className="text-[11px] text-slate-500 mt-1">
                Worked answers across numerical, verbal, and pattern items.
              </p>
            </Link>

            <Link
              href="/"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all block group"
            >
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-0.5">
                Full Assessment
              </span>
              <strong className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors block">
                Free IQ Test →
              </strong>
              <p className="text-[11px] text-slate-500 mt-1">
                Comprehensive 20-question challenge across multiple reasoning formats.
              </p>
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: COMMON MISTAKES IN ABSTRACT REASONING TESTS (With Table)       */}
        {/* ========================================================================= */}
        <section className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Common Mistakes in Abstract Reasoning Tests
          </h2>

          <p className="text-slate-600 text-base">
            Visual reasoning errors often happen when a person identifies part of a pattern but overlooks another important feature.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Common mistake</th>
                  <th scope="col" className="p-3.5 sm:p-4">Better approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 text-rose-700 font-bold">Confusing reflection with rotation</td>
                  <td className="p-3.5 sm:p-4 text-emerald-800">Track an asymmetric feature to see whether its orientation is reversed</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 text-rose-700 font-bold">Ignoring a second rule</td>
                  <td className="p-3.5 sm:p-4 text-emerald-800">Check shape, count, position, orientation, and fill separately</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 text-rose-700 font-bold">Looking only across rows</td>
                  <td className="p-3.5 sm:p-4 text-emerald-800">Examine columns as well</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 text-rose-700 font-bold">Choosing an option too early</td>
                  <td className="p-3.5 sm:p-4 text-emerald-800">Test the rule against every figure in the sequence or grid</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 text-rose-700 font-bold">Focusing on irrelevant differences</td>
                  <td className="p-3.5 sm:p-4 text-emerald-800">Identify properties shared across the complete set</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3.5 sm:p-4 text-rose-700 font-bold">Guessing from appearance</td>
                  <td className="p-3.5 sm:p-4 text-emerald-800">Describe the transformation explicitly in words</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-600">
            <p>
              <strong>Don&apos;t Assume Every Puzzle Uses One Rule:</strong> Some beginner questions use a single transformation. More challenging abstract reasoning questions may combine two or three independent changes (e.g. a shape rotating clockwise while its internal dot moves counterclockwise).
            </p>
            <p>
              <strong>Don&apos;t Confuse Reflection With Rotation:</strong> A reflected figure may look similar to a rotated figure, particularly when the shape has strong symmetry. Track distinctive elements such as an off-center dot or asymmetrical marking to confirm.
            </p>
            <p>
              <strong>Don&apos;t Ignore the Full Pattern:</strong> A rule must explain more than the last transition. Check that your interpretation fits every figure in the sequence or every row and column of the matrix.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: ACCESSIBLE ACCORDION FAQS                                    */}
        {/* ========================================================================= */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Frequently Asked Questions About Abstract Reasoning Tests
            </h2>
          </div>

          <div className="space-y-2.5 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-slate-900 text-sm sm:text-base hover:text-indigo-600 transition-colors cursor-pointer select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180 text-indigo-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12: QUESTION DESIGN, SCORING METHOD & STANDARDS                  */}
        {/* ========================================================================= */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Our Question Design and Scoring Method
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed">
            Our Abstract Reasoning Test is designed as an educational practice tool using original visual questions. The 20-question assessment covers figure sequences, matrix reasoning, odd-one-out puzzles, and visual analogies. Each question has four answer choices and one intended correct answer.
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            The scoring method awards one point for a correct response and zero points for an incorrect or unanswered response. The final score is displayed out of 20, with percentage accuracy calculated from correct answers.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-2">
            <p>
              This practice assessment has not been normed against a representative population and should not be used to determine IQ, diagnose a condition, or establish eligibility for an institution. It is designed to help visitors explore visual reasoning, understand unfamiliar patterns, and learn from their answers.
            </p>
            <p>
              For general principles of psychological assessment and score interpretation, consult the{' '}
              <a
                href="https://www.testingstandards.net/open-access-files.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-semibold underline"
              >
                Standards for Educational and Psychological Testing
              </a>
              .
            </p>
          </div>

          {/* Interactive CTA to return to test above */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-lg sm:text-xl font-black">Ready to Practise?</div>
              <p className="text-xs sm:text-sm text-indigo-200 max-w-md">
                Return to the Abstract Reasoning Test above, solve the visual puzzles, and use the explanations to understand the patterns behind each answer.
              </p>
            </div>
            <button
              onClick={handleScrollToTop}
              className="px-6 py-3.5 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 font-black text-sm shadow-lg whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer"
            >
              <Shapes className="w-4 h-4" />
              <span>Begin Assessment</span>
            </button>
          </div>
        </section>
      </div>
    </article>
  );
};

