'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  GitBranch,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Check,
  X,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  Smartphone,
  Info,
  Scale,
  Brain,
  ListChecks,
  ChevronDown,
  Target,
  BarChart3,
  Lightbulb,
  Activity,
  Compass,
  FileCheck,
} from 'lucide-react';

interface LogicalComprehensiveArticleProps {
  onStartClick?: () => void;
}

export const LogicalComprehensiveArticle: React.FC<LogicalComprehensiveArticleProps> = ({
  onStartClick,
}) => {
  // Interactive Worked Examples State
  const [activeExampleIndex, setActiveExampleIndex] = useState<number>(0);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const toggleRevealSolution = (idx: number) => {
    setRevealedSolutions((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleStart = () => {
    if (onStartClick) {
      onStartClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <article className="w-full max-w-[1240px] mx-auto py-12 text-[#07152F] leading-relaxed no-print space-y-20">
      {/* ========================================================================= */}
      {/* 1. H2: WHAT IS A LOGICAL REASONING TEST?                                  */}
      {/* ========================================================================= */}
      <section id="what-is-logical-reasoning" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Reasoning Fundamentals</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            What Is a Logical Reasoning Test?
          </h2>
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_10px_30px_rgba(7,21,47,0.04)] text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
          <p>
            A logical reasoning test is an assessment that asks you to solve problems using facts, rules, relationships, and patterns. Instead of testing how many facts you can remember, it challenges you to think carefully about the information provided and choose a conclusion that follows from it.
          </p>
          <p>
            Logical reasoning questions appear in aptitude assessments, educational exercises, and problem-solving challenges. Some use short written statements. Others involve ordering rules, number patterns, or conditions such as &quot;if A happens, then B must happen.&quot;
          </p>
          <div className="p-4 rounded-2xl bg-[#F8FBFF] border-l-4 border-[#2453FF] text-[#07152F] font-semibold text-sm sm:text-base">
            The key skill is knowing the difference between what the information proves and what it merely suggests.
          </div>
          <p>
            For example, if all members of a team have completed safety training, you can conclude that a particular team member has completed the training. You cannot conclude that everyone who has completed safety training belongs to that team.
          </p>
          <p className="font-medium text-[#07152F]">
            This difference is central to many logical reasoning test questions.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. H2: WHAT DOES A LOGICAL REASONING TEST MEASURE?                         */}
      {/* ========================================================================= */}
      <section id="what-it-measures" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Brain className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Core Cognitive Competencies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            What Does a Logical Reasoning Test Measure?
          </h2>
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_10px_30px_rgba(7,21,47,0.04)] text-sm sm:text-base text-[#475569] leading-relaxed space-y-5">
          <p>
            A logical ability test typically explores how you apply rules, identify relationships, recognize patterns, and evaluate conclusions.
          </p>
          <p>
            Different question formats emphasize different tasks. Deductive questions require conclusions supported by the premises. Inductive questions ask you to identify a likely rule from examples.
          </p>
          <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              Our online practice test introduces several common formats, but it is not a professionally standardized assessment of reasoning ability or intelligence.
            </div>
          </div>
          <p>
            Use it to become familiar with questions, practise solving them, and understand where mistakes occur.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. H2: HOW DOES OUR ONLINE LOGICAL REASONING TEST WORK?                    */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Four Structured Phases</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            How Does Our Online Logical Reasoning Test Work?
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Our online logical reasoning test provides 20 multiple-choice questions across four reasoning categories.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-1">
            It is designed as a self-contained practice experience with free results and explanations. You can work through problems, submit your answers, and review the reasoning behind each solution.
          </p>
        </div>

        {/* 4 Interactive Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-xl bg-[#EEF2FF] text-[#2453FF] flex items-center justify-center text-xs font-black">
                  1
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#2453FF]">
                  Configuration
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#07152F] mb-2">
                Step 1: Start the Test
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                Select Start Logical Reasoning Test in the assessment above.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                Read the instructions and check whether the optional timer is enabled.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                You do not need specialized mathematical knowledge. Most questions depend on careful reading, understanding relationships, and applying relatively simple rules.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Try to work somewhere you can concentrate without frequent interruptions.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-xs font-black">
                  2
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">
                  Problem Solving
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#07152F] mb-2">
                Step 2: Answer the Reasoning Questions
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                Each question presents a problem and four possible answers.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                You may need to decide which conclusion must be true, apply an if-then rule, arrange people or objects in a particular order, or identify the next item in a sequence.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                Read the entire question before choosing an option. Small words such as all, only, some, and unless can change the meaning of a rule.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Use the question navigation controls to review or change responses before final submission.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-black">
                  3
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  Instant Scoring
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#07152F] mb-2">
                Step 3: Submit and See Your Results
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                After completing the questions, submit your answers to receive your practice result.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                The score represents the number of correct responses out of 20.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                For example, 15 correct answers produce a score of 15/20, or 75%.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Incorrect and unanswered questions receive no points in this practice scoring system.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-black">
                  4
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">
                  Answer Analysis
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#07152F] mb-2">
                Step 4: Review the Answers
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                The most useful part of a logical reasoning practice test often comes after submission.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                Read the explanations for questions you missed. Identify which rule you misunderstood or which assumption led you to the wrong conclusion.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                The explanations are intended to help you improve your approach to similar problems, not simply memorize an answer key.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. H2: TYPES OF LOGICAL REASONING QUESTIONS                               */}
      {/* ========================================================================= */}
      <section id="types-of-questions" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Test Blueprint &amp; Distribution</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            Types of Logical Reasoning Questions
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Our logical reasoning test questions cover four main categories. Each requires a different approach, but all depend on applying information consistently.
          </p>
        </div>

        {/* Blueprint Table */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F8FBFF] text-[#07152F] border-b border-[#E2EAF7]">
                <tr>
                  <th className="py-3.5 px-5 font-bold">Question type</th>
                  <th className="py-3.5 px-5 font-bold text-center">Questions</th>
                  <th className="py-3.5 px-5 font-bold">Main reasoning task</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#475569]">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Deductive reasoning and syllogisms</td>
                  <td className="py-3.5 px-5 font-bold text-[#2453FF] text-center">6</td>
                  <td className="py-3.5 px-5">Determine what must follow from stated facts</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Conditional logic</td>
                  <td className="py-3.5 px-5 font-bold text-[#2453FF] text-center">5</td>
                  <td className="py-3.5 px-5">Apply if-then and necessary-condition rules</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Ordering and arrangement</td>
                  <td className="py-3.5 px-5 font-bold text-[#2453FF] text-center">5</td>
                  <td className="py-3.5 px-5">Organize items using multiple constraints</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Inductive reasoning and sequences</td>
                  <td className="py-3.5 px-5 font-bold text-[#2453FF] text-center">4</td>
                  <td className="py-3.5 px-5">Identify a consistent pattern or rule</td>
                </tr>
                <tr className="bg-[#F8FBFF]/80 font-bold text-[#07152F]">
                  <td className="py-3.5 px-5">Total</td>
                  <td className="py-3.5 px-5 text-center text-[#2453FF]">20</td>
                  <td className="py-3.5 px-5">Mixed logical reasoning practice</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Detailed Subsections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
          {/* Deductive Reasoning */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#07152F]">
              Deductive Reasoning and Syllogisms
            </h3>
            <p>
              Deductive reasoning starts with given statements and asks what logically follows.
            </p>
            <p>For example:</p>
            <div className="p-3 bg-[#F8FBFF] rounded-xl border border-slate-200 text-xs font-mono space-y-1 text-[#07152F]">
              <div>All roses in a collection are flowers.</div>
              <div>Every flower in that collection has a label.</div>
            </div>
            <p>
              You can conclude that every rose in the collection has a label.
            </p>
            <p>
              You cannot conclude that every labeled object is a rose. The label might belong to another kind of flower or object.
            </p>
            <p>
              A deductive reasoning test often uses terms such as all, some, and none. These terms have specific meanings.
            </p>
            <p>
              &quot;All A are B&quot; does not establish that all B are A.
            </p>
            <p>
              &quot;Some A are B&quot; establishes that at least one A is B, but does not establish that most or all A are B.
            </p>
            <p className="font-semibold text-[#07152F]">
              When solving syllogisms, focus on what the statements guarantee rather than what seems realistic.
            </p>
          </div>

          {/* Conditional Logic */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#07152F]">
              Conditional Logic and If-Then Rules
            </h3>
            <p>
              Conditional logic involves relationships between events or conditions.
            </p>
            <p>A typical rule is:</p>
            <div className="p-3 bg-[#F8FBFF] rounded-xl border border-slate-200 text-xs italic text-[#07152F]">
              &quot;If an order is marked urgent, it receives priority handling.&quot;
            </div>
            <p>
              This means an urgent order must receive priority handling.
            </p>
            <p>
              However, an order that receives priority handling is not necessarily marked urgent. There might be another reason for giving it priority.
            </p>
            <p>
              The important distinction is between a sufficient condition and a necessary consequence.
            </p>
            <p>
              Conditional reasoning questions may ask what must happen, what cannot happen, or whether the information is sufficient to reach a conclusion.
            </p>
          </div>

          {/* Ordering and Arrangement */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#07152F]">
              Ordering and Arrangement Puzzles
            </h3>
            <p>
              Ordering problems provide several constraints about positions, times, or sequences.
            </p>
            <p>
              You may be asked to arrange people in a line, schedule presentations, or determine which object belongs in a particular position.
            </p>
            <p>
              For example, if Maya sits immediately before Noah, their positions must stay together in that order.
            </p>
            <p>
              Another clue might say that Olivia sits before Maya.
            </p>
            <p>
              The challenge is to satisfy every condition at the same time.
            </p>
            <p>
              An effective strategy is to draw numbered spaces and enter the most restrictive information first.
            </p>
            <p className="font-semibold text-[#07152F]">
              This reduces the chance of overlooking a clue.
            </p>
          </div>

          {/* Inductive Reasoning */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#07152F]">
              Inductive Reasoning and Sequences
            </h3>
            <p>
              Inductive reasoning involves identifying patterns in examples.
            </p>
            <p>
              A common inductive reasoning test question shows a sequence of numbers, letters, or symbols and asks what comes next.
            </p>
            <p>For example:</p>
            <div className="p-3 bg-[#F8FBFF] rounded-xl border border-slate-200 text-xs font-mono font-bold text-[#2453FF]">
              3, 6, 12, 24, ?
            </div>
            <p>
              A natural rule is multiplication by two, making 48 the intended next value.
            </p>
            <p>
              More challenging sequences may use alternating operations, changing differences, or combinations of rules.
            </p>
            <p>
              Unlike a strict deductive conclusion, a pattern inferred from a finite sequence is not always mathematically unique. Good practice questions therefore need a clear intended rule and answer options that support an unambiguous solution in context.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. H2: FOUR WORKED EXAMPLES (PROMINENT & HIGH-VALUE EDUCATIONAL SECTION)   */}
      {/* ========================================================================= */}
      <section id="worked-examples" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200 mb-3 shadow-2xs">
            <Lightbulb className="w-3.5 h-3.5 text-purple-600" />
            <span>Interactive Educational Practice</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            Logical Reasoning Questions and Answers: Four Worked Examples
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            The following original logical reasoning questions and answers demonstrate the main techniques used in our practice assessment.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-1">
            These examples are separate from the 20-question test above.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-1 font-semibold text-[#07152F]">
            Try solving each one before reading the explanation. Understanding why the correct answer follows is more valuable than simply memorizing the answer.
          </p>
        </div>

        {/* 4 Prominent Worked Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example 1 */}
          <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_10px_30px_rgba(7,21,47,0.04)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2453FF] bg-blue-50 px-2.5 py-1 rounded-full">
                  Example 1: Deductive Reasoning
                </span>
                <span className="text-xs font-bold text-slate-400">Syllogism</span>
              </div>

              <div>
                <strong className="block text-xs font-bold text-[#07152F] mb-1">Question:</strong>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Read the following statements.
                </p>
                <div className="p-3 my-2 bg-[#F8FBFF] rounded-xl border border-slate-200 text-xs font-mono text-[#07152F] space-y-1">
                  <div>All editors in a project are team members.</div>
                  <div>Every team member has completed orientation.</div>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#07152F] mt-2">
                  Which conclusion must be true?
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">A. Every team member is an editor.</div>
                <div className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 font-bold">B. All editors in the project have completed orientation.</div>
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">C. Everyone who completed orientation is an editor.</div>
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">D. No editors have completed orientation.</div>
              </div>

              <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-950">
                Correct answer: B. All editors in the project have completed orientation.
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed pt-2">
                <strong className="block text-xs font-bold text-[#07152F]">Step-by-step explanation:</strong>
                <p>First, the question tells us that every editor belongs to the team.</p>
                <p>Second, every team member has completed orientation.</p>
                <p>Therefore, any editor in the project must also have completed orientation.</p>
                <div className="p-2.5 bg-slate-50 rounded-lg text-xs font-mono text-[#2453FF] font-bold">
                  The relationship is: Editors → Team members → People who completed orientation.
                </div>
                <p>Option A reverses the first relationship. Being a team member does not automatically make someone an editor.</p>
                <p>Option C reverses the final relationship. Completing orientation does not establish that someone is an editor.</p>
                <p>Option D contradicts the stated chain.</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-[#2453FF] font-semibold">
              <strong>Key lesson:</strong> If all A belong to B and all B belong to C, then all A belong to C. The reverse does not automatically follow.
            </div>
          </div>

          {/* Example 2 */}
          <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_10px_30px_rgba(7,21,47,0.04)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full">
                  Example 2: Conditional Logic
                </span>
                <span className="text-xs font-bold text-slate-400">Modus Tollens</span>
              </div>

              <div>
                <strong className="block text-xs font-bold text-[#07152F] mb-1">Question:</strong>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  A security system follows this rule:
                </p>
                <div className="p-3 my-2 bg-[#F8FBFF] rounded-xl border border-slate-200 text-xs italic text-[#07152F]">
                  &quot;If the system is armed, the green indicator light is on.&quot;
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  You observe that the green indicator light is off.
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#07152F] mt-2">
                  What must be true?
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">A. The system is armed.</div>
                <div className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 font-bold">B. The system is not armed.</div>
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">C. The indicator light is broken.</div>
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">D. The system was armed earlier.</div>
              </div>

              <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-950">
                Correct answer: B. The system is not armed.
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed pt-2">
                <strong className="block text-xs font-bold text-[#07152F]">Step-by-step explanation:</strong>
                <div className="p-2.5 bg-slate-50 rounded-lg text-xs font-mono text-[#2453FF] font-bold">
                  The rule states: Armed → Light on.
                </div>
                <p>If the system were armed, the green light would have to be on.</p>
                <p>But the light is off.</p>
                <p>Therefore, the system cannot be armed while the stated rule holds.</p>
                <p className="font-semibold text-[#07152F]">
                  This uses a valid logical pattern called modus tollens: If P, then Q. Not Q. Therefore, not P.
                </p>
                <p>Option C introduces a possible equipment fault that the question never establishes. When solving a formal logic problem, apply the given rule rather than inventing an exception.</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-amber-800 font-semibold bg-amber-50/50 p-2.5 rounded-xl">
              <strong>Common mistake:</strong> Believing that observing Q always proves P. From &quot;if armed, then light on,&quot; seeing the light on would not necessarily prove the system is armed.
            </div>
          </div>

          {/* Example 3 */}
          <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_10px_30px_rgba(7,21,47,0.04)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                  Example 3: Ordering and Arrangement
                </span>
                <span className="text-xs font-bold text-slate-400">Position Puzzle</span>
              </div>

              <div>
                <strong className="block text-xs font-bold text-[#07152F] mb-1">Question:</strong>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Four people—Maya, Noah, Olivia, and Paul—must present one after another.
                </p>
                <div className="p-3 my-2 bg-[#F8FBFF] rounded-xl border border-slate-200 text-xs text-[#07152F] space-y-1">
                  <div>• Maya presents immediately before Noah.</div>
                  <div>• Olivia presents before Maya.</div>
                  <div>• Paul presents last.</div>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#07152F] mt-2">
                  What is the correct presentation order?
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">A. Maya, Noah, Olivia, Paul</div>
                <div className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 font-bold">B. Olivia, Maya, Noah, Paul</div>
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">C. Olivia, Noah, Maya, Paul</div>
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">D. Noah, Olivia, Maya, Paul</div>
              </div>

              <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-950">
                Correct answer: B. Olivia, Maya, Noah, Paul.
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed pt-2">
                <strong className="block text-xs font-bold text-[#07152F]">Step-by-step explanation:</strong>
                <p>Begin with the most restrictive clue.</p>
                <p>Paul presents last, so position four must contain Paul.</p>
                <p>Maya presents immediately before Noah. That means they must occupy consecutive positions, with Maya first.</p>
                <p>Olivia presents before Maya.</p>
                <p>The only arrangement satisfying all three rules is: Olivia, Maya, Noah, Paul.</p>
                <p>Option A places Olivia after Maya, which violates the third clue.</p>
                <p>Option C reverses Maya and Noah.</p>
                <p>Option D also violates the required Maya-before-Noah relationship.</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-amber-700 font-semibold">
              <strong>Key lesson:</strong> Place fixed positions and adjacent pairs first, then check the remaining constraints.
            </div>
          </div>

          {/* Example 4 */}
          <div className="p-6 sm:p-7 bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_10px_30px_rgba(7,21,47,0.04)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Example 4: Inductive Number Sequence
                </span>
                <span className="text-xs font-bold text-slate-400">Sequence Analysis</span>
              </div>

              <div>
                <strong className="block text-xs font-bold text-[#07152F] mb-1">Question:</strong>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  What number comes next?
                </p>
                <div className="p-3 my-2 bg-[#F8FBFF] rounded-xl border border-slate-200 text-sm font-mono font-bold text-[#2453FF]">
                  4, 9, 16, 25, 36, ?
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">A. 42</div>
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">B. 45</div>
                <div className="p-2.5 rounded-xl border border-slate-200 text-[#475569]">C. 48</div>
                <div className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 font-bold">D. 49</div>
              </div>

              <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-950">
                Correct answer: D. 49.
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed pt-2">
                <strong className="block text-xs font-bold text-[#07152F]">Step-by-step explanation:</strong>
                <p>Look at the terms as square numbers:</p>
                <div className="p-2.5 bg-slate-50 rounded-lg text-xs font-mono space-y-0.5 text-[#07152F]">
                  <div>4 = 2²</div>
                  <div>9 = 3²</div>
                  <div>16 = 4²</div>
                  <div>25 = 5²</div>
                  <div>36 = 6²</div>
                </div>
                <p>The next square is: 7² = 49.</p>
                <p>You can also examine the differences: +5, +7, +9, +11. The next difference is +13. 36 + 13 = 49.</p>
                <p>Both methods support the intended pattern.</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-emerald-700 font-semibold">
              <strong>Key lesson:</strong> For numerical sequences, examine differences and common mathematical structures before trying complicated rules.
            </div>
          </div>
        </div>

        {/* What Should You Learn Subsection */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-4">
          <h3 className="font-heading text-xl font-bold text-[#07152F]">
            What Should You Learn From These Examples?
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            The four examples use different methods, but they share one principle: every proposed answer must fit the information given.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#07152F]">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              In deduction, a correct conclusion must follow from the premises.
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              In conditional logic, the direction of the implication matters.
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              In arrangement puzzles, every constraint must be satisfied.
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              In sequences, the intended rule should explain the complete pattern.
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] pt-2">
            You can find additional self-paced exercises in our{' '}
            <Link href="/iq-practice-questions/" className="font-bold text-[#2453FF] hover:underline">
              IQ Practice Questions
            </Link>{' '}
            tool.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. H2: HOW TO SOLVE LOGICAL REASONING QUESTIONS STEP BY STEP              */}
      {/* ========================================================================= */}
      <section id="solving-method" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Target className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Problem-Solving Framework</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            How to Solve Logical Reasoning Questions Step by Step
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            You don&apos;t need a special trick for every question. A consistent solving method helps you avoid many common errors.
          </p>
        </div>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="font-heading text-lg font-bold text-[#07152F]">
                Identify the Given Facts and Rules
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Begin by separating the actual statements from your assumptions.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Suppose a question says: &quot;Only registered visitors may enter the laboratory.&quot;
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              This tells you that registration is necessary for entry. It does not guarantee that every registered visitor will enter.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold">
              Write the relationship in plain language before examining the answers.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h3 className="font-heading text-lg font-bold text-[#07152F]">
                Decide What Must Be True
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Many deductive questions ask for a necessary conclusion.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              That means the answer must follow whenever the supplied premises are true.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Something can be possible without being necessary.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              For example, suppose every mechanic in a workshop wears protective glasses.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Someone wearing protective glasses might be a mechanic, but could also be a visitor or supervisor.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              The statement doesn&apos;t establish that everyone wearing glasses is a mechanic.
            </p>
            <div className="p-3 bg-[#F8FBFF] rounded-xl border border-blue-100 text-xs text-[#07152F]">
              When you&apos;re uncertain, imagine a situation where the suggested conclusion is false but the original premises remain true. If such a situation is possible, the conclusion is not guaranteed.
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center">
                3
              </span>
              <h3 className="font-heading text-lg font-bold text-[#07152F]">
                Eliminate Unsupported Conclusions
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Read all the options carefully.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Incorrect answers often introduce information that was never stated.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Watch for words such as always, never, only, and exactly.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              A conclusion that sounds reasonable in everyday life may still be logically unsupported.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold">
              Cross out options that reverse a relationship or assume more than the evidence provides.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center">
                4
              </span>
              <h3 className="font-heading text-lg font-bold text-[#07152F]">
                Check Every Condition
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              For ordering puzzles, write a short list of constraints.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              For a conditional question, confirm which direction the rule operates.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              For sequences, check whether the proposed pattern explains every displayed transition.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold">
              Don&apos;t stop at an answer that fits only part of the problem.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#2453FF] font-bold text-xs flex items-center justify-center">
                5
              </span>
              <h3 className="font-heading text-lg font-bold text-[#07152F]">
                Review Your Method After Answering
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              When the explanation appears, compare it with your own approach.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Did you misunderstand a word? Reverse a conditional rule? Overlook a clue?
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold text-[#07152F]">
              Recording the cause of an error is more useful for future practice than simply noticing that you chose the wrong option.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. H2: UNDERSTANDING YOUR LOGICAL REASONING TEST RESULTS                  */}
      {/* ========================================================================= */}
      <section id="understanding-results" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <BarChart3 className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Transparent Score Interpretation</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            Understanding Your Logical Reasoning Test Results
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Our logical reasoning test with answers provides an immediate practice score after submission.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-1">
            The total reflects the number of questions answered correctly out of 20.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-1">
            Each correct answer earns one point. Incorrect and unanswered questions earn zero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
          {/* How score calculated */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#07152F]">
              How Is the Score Calculated?
            </h3>
            <p>The formula is:</p>
            <div className="p-3 bg-[#F8FBFF] rounded-xl border border-blue-200 text-xs font-mono font-bold text-[#2453FF]">
              Accuracy = (Correct answers ÷ Total questions) × 100
            </div>
            <p>Suppose you answer:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>15 questions correctly.</li>
              <li>4 questions incorrectly.</li>
              <li>1 question remains unanswered.</li>
            </ul>
            <p>Your score is 15/20. Your accuracy is 75%.</p>
            <p>This means you answered 75% of the test questions correctly.</p>
            <p className="font-semibold text-[#07152F]">
              It does not mean your IQ is 75 or that you performed better than 75% of other people.
            </p>
          </div>

          {/* Category breakdown */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#07152F]">
              What Does Your Category Breakdown Mean?
            </h3>
            <p>
              The assessment contains different logical reasoning formats.
            </p>
            <p>
              A category breakdown helps you see which questions you solved correctly and which deserve another look.
            </p>
            <p>
              For example, you may recognize number sequences more easily than conditional statements.
            </p>
            <p>
              However, each category contains relatively few questions. These small samples do not establish stable measurements of your underlying abilities.
            </p>
            <p className="font-semibold text-[#07152F]">
              Use them as prompts for further practice rather than as definitive labels.
            </p>
          </div>

          {/* Retake test */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#07152F]">
              Should You Retake the Test?
            </h3>
            <p>
              You can retake a practice test to become familiar with its format and review your reasoning.
            </p>
            <p>
              If you see the same questions again, your score may increase because you remember the answers.
            </p>
            <p>
              That improvement is not the same as demonstrating a scientifically measured increase in general reasoning ability.
            </p>
            <p className="font-semibold text-[#07152F]">
              For better learning, review explanations and try unfamiliar questions.
            </p>
          </div>

          {/* Standardized score limitation */}
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-3">
            <h3 className="font-heading text-lg font-bold text-[#07152F]">
              Is This a Standardized Logical Ability Score?
            </h3>
            <p className="font-bold text-[#07152F]">
              No. Our practice score is a straightforward record of correct answers.
            </p>
            <p>
              We do not present the result as an employer aptitude ranking, a clinical score, a population percentile, or a professionally validated IQ measurement.
            </p>
            <p>
              A standardized interpretation requires appropriate norming and evidence about how scores should be used.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. H2: HOW TO PREPARE FOR A LOGICAL REASONING APTITUDE TEST               */}
      {/* ========================================================================= */}
      <section id="preparation-guide" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Practical Assessment Strategy</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            How to Prepare for a Logical Reasoning Aptitude Test
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Logical reasoning assessments are used in different educational and employment settings.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-1">
            The format, timing, and scoring depend on the organization and test provider.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-1">
            Our free logical reasoning test can help you practise common problem types, but it should not be assumed to reproduce any particular employer&apos;s assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Learn the Question Types First
            </h3>
            <p>
              Identify whether the assessment you expect includes deduction, numerical patterns, ordering, inductive reasoning, or another format.
            </p>
            <p>
              If you have an invitation from a test provider, check the official instructions.
            </p>
            <p>
              For example, a deductive assessment may involve mostly written statements, while an inductive test may rely more heavily on shapes or sequences.
            </p>
            <p className="font-semibold text-[#07152F]">
              Practising the right format can help you use your preparation time more effectively.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Practise Without a Timer Before Adding Pressure
            </h3>
            <p>
              Start by understanding how the questions work.
            </p>
            <p>
              Once you&apos;re comfortable, practise with a time limit that matches the actual assessment you expect.
            </p>
            <p>
              Rushing before you understand the rules can reinforce errors.
            </p>
            <p className="font-semibold text-[#07152F]">
              An optional timer is useful for practising pace, but speed should not replace careful reasoning.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Create Simple Diagrams
            </h3>
            <p>
              Use arrows, numbered positions, or a small table to organize information.
            </p>
            <p>
              For conditional questions, write: P → Q.
            </p>
            <p>
              For ordering questions, draw spaces corresponding to the required positions.
            </p>
            <p className="font-semibold text-[#07152F]">
              This reduces the need to remember every constraint mentally.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Study Your Incorrect Answers
            </h3>
            <p>
              After practising, group mistakes by type.
            </p>
            <p>
              Did you reverse an implication? Misread &quot;some&quot; as &quot;all&quot;? Forget an ordering condition? Choose a number pattern too quickly?
            </p>
            <p className="font-semibold text-[#07152F]">
              Spend additional practice time on the errors that occur repeatedly.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2.5 md:col-span-2 lg:col-span-2">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Read the Real Test Instructions
            </h3>
            <p>
              Some aptitude tests penalize incorrect answers, restrict backward navigation, or use adaptive question selection. Others do not.
            </p>
            <p>
              Do not assume the controls or scoring of our practice tool match every real assessment.
            </p>
            <p className="font-semibold text-[#07152F]">
              Follow the official instructions for the specific test you&apos;re preparing to take.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. H2: COMMON MISTAKES IN LOGICAL REASONING TESTS                          */}
      {/* ========================================================================= */}
      <section id="common-mistakes" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Pitfalls &amp; Better Strategies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            Common Mistakes in Logical Reasoning Tests
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Many incorrect answers result from a small misunderstanding rather than a lack of effort.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F8FBFF] text-[#07152F] border-b border-[#E2EAF7]">
                <tr>
                  <th className="py-3.5 px-5 font-bold">Common mistake</th>
                  <th className="py-3.5 px-5 font-bold">Better approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#475569]">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Reversing an if-then rule</td>
                  <td className="py-3.5 px-5">Check which statement is the condition and which is the consequence</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Treating &quot;some&quot; as &quot;all&quot;</td>
                  <td className="py-3.5 px-5">Interpret &quot;some&quot; as at least one</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Adding real-world assumptions</td>
                  <td className="py-3.5 px-5">Use only the stated premises</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Ignoring one arrangement clue</td>
                  <td className="py-3.5 px-5">Verify every constraint</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Choosing a pattern too quickly</td>
                  <td className="py-3.5 px-5">Check the full sequence</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Confusing possible with necessary</td>
                  <td className="py-3.5 px-5">Ask whether the conclusion must follow</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Mistake Breakdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Reversing Conditional Statements
            </h3>
            <p>
              &quot;If A, then B&quot; does not establish &quot;if B, then A.&quot;
            </p>
            <p>
              For example, if rain makes the road wet, seeing a wet road doesn&apos;t prove that rain occurred. Another source of water might explain it.
            </p>
            <p className="font-semibold text-[#07152F]">
              This is one of the most common traps in conditional reasoning.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Overinterpreting Quantifiers
            </h3>
            <p>
              &quot;Some students study mathematics&quot; does not mean all students study mathematics.
            </p>
            <p>
              Likewise, &quot;All architects are professionals&quot; does not mean every professional is an architect.
            </p>
            <p className="font-semibold text-[#07152F]">
              Read quantifiers precisely.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Ignoring a Single Constraint
            </h3>
            <p>
              An ordering solution may appear correct until you notice that two items were required to be adjacent.
            </p>
            <p className="font-semibold text-[#07152F]">
              Check your proposed arrangement against every instruction before submitting.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Using an Incomplete Sequence Rule
            </h3>
            <p>
              A proposed sequence rule might explain the last two numbers but fail earlier terms.
            </p>
            <p className="font-semibold text-[#07152F]">
              Before accepting it, confirm that it produces all the given transitions.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-2 md:col-span-2">
            <h3 className="font-heading text-base font-bold text-[#07152F]">
              Focusing Only on the Final Score
            </h3>
            <p>
              A higher score can feel encouraging, but the explanation behind each answer is the primary learning opportunity.
            </p>
            <p className="font-semibold text-[#07152F]">
              Review difficult questions even when your answer was correct by chance.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. H2: LOGICAL REASONING TEST VS. IQ TEST: WHAT'S THE DIFFERENCE?        */}
      {/* ========================================================================= */}
      <section id="logical-vs-iq" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <GitBranch className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Assessment Comparison</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            Logical Reasoning Test vs. IQ Test: What&apos;s the Difference?
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A logical reasoning test focuses on tasks involving relationships, deductions, conditions, and patterns.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-1">
            An IQ-style assessment may include a broader combination of numerical, visual, logical, and spatial reasoning questions.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-1">
            Our website offers both types of practice.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F8FBFF] text-[#07152F] border-b border-[#E2EAF7]">
                <tr>
                  <th className="py-3.5 px-5 font-bold">Feature</th>
                  <th className="py-3.5 px-5 font-bold text-[#2453FF]">Logical Reasoning Test</th>
                  <th className="py-3.5 px-5 font-bold">Full IQ Test</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#475569]">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Main focus</td>
                  <td className="py-3.5 px-5 font-bold text-[#2453FF]">Logical rules and conclusions</td>
                  <td className="py-3.5 px-5">Broader reasoning practice</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Questions</td>
                  <td className="py-3.5 px-5 font-bold text-[#2453FF]">20</td>
                  <td className="py-3.5 px-5">20</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Deductive questions</td>
                  <td className="py-3.5 px-5 font-bold text-[#2453FF]">Major component</td>
                  <td className="py-3.5 px-5">One part of the assessment</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Numerical and visual reasoning</td>
                  <td className="py-3.5 px-5 font-bold text-[#2453FF]">Selected formats</td>
                  <td className="py-3.5 px-5">Multiple categories</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Answer explanations</td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600">Yes</td>
                  <td className="py-3.5 px-5 text-emerald-600">Yes</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-[#07152F]">Standardized IQ result</td>
                  <td className="py-3.5 px-5">No</td>
                  <td className="py-3.5 px-5">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <p>
            Choose the logical reasoning assessment when you want focused practice in deductions, conditional rules, arrangements, and sequences.
          </p>
          <p>
            Choose our{' '}
            <Link href="/" className="font-bold text-[#2453FF] hover:underline">
              Free IQ Test
            </Link>{' '}
            when you want a broader reasoning challenge.
          </p>
          <p>
            For individual exercises with hints and worked solutions, explore the{' '}
            <Link href="/iq-practice-questions/" className="font-bold text-[#2453FF] hover:underline">
              IQ Practice Questions
            </Link>{' '}
            page.
          </p>
          <p className="font-semibold text-[#07152F]">
            Neither practice assessment should be interpreted as a professionally standardized measure of intelligence.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. H2: FREQUENTLY ASKED QUESTIONS ABOUT LOGICAL REASONING TESTS           */}
      {/* ========================================================================= */}
      <section id="faq" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Common Questions Answered</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-4">
            Frequently Asked Questions About Logical Reasoning Tests
          </h2>
        </div>

        <div className="space-y-3.5 max-w-3xl mx-auto">
          {[
            {
              q: 'Is this logical reasoning test free?',
              a: 'Yes. Our free logical reasoning test is designed to provide 20 practice questions and immediate results without requiring payment or registration. You can work through common reasoning formats, see how many questions you answered correctly, and review the explanations. The results describe your performance on this particular practice set, not an official aptitude ranking or a standardized IQ score.',
            },
            {
              q: 'What types of logical reasoning questions are included?',
              a: 'The test covers deductive reasoning, syllogisms, conditional logic, ordering and arrangement puzzles, and inductive sequences. The planned distribution includes six deductive questions, five conditional questions, five ordering questions, and four inductive questions. Together, these formats introduce several ways that reasoning skills are explored in educational and aptitude-style assessments.',
            },
            {
              q: 'How long does a logical reasoning test take?',
              a: 'The time depends on the number of questions, their difficulty, and the test provider. Our 20-question practice assessment is designed to be manageable in one sitting, with optional timing. Different employers and assessment providers may use shorter or longer tests, so check their instructions before preparing for a specific assessment.',
            },
            {
              q: "What's the difference between deductive and inductive reasoning?",
              a: 'Deductive reasoning applies stated premises to reach a conclusion that must follow if those premises are true. Inductive reasoning examines examples and identifies a likely pattern or general rule. A syllogism is a common deductive question, while a number sequence is a common inductive exercise. Both involve structured thinking but use different forms of evidence.',
            },
            {
              q: 'Can I see answers and explanations after finishing?',
              a: 'Yes. After submitting the assessment, you can review the correct answers and their explanations. Each explanation should show how the solution follows from the problem’s rules. When reviewing mistakes, focus on the reasoning step you missed rather than memorizing the correct option. That will make your practice more useful when you encounter unfamiliar problems.',
            },
            {
              q: 'Can I improve my logical reasoning through practice?',
              a: 'Practice can help you recognize common question formats, learn solution strategies, and reduce errors caused by unfamiliarity. Reviewing explanations is especially useful for conditional rules, syllogisms, and ordering problems. However, becoming better at specific practice questions does not automatically demonstrate an increase in general intelligence or guarantee a higher score on a different standardized assessment.',
            },
            {
              q: 'Is a logical reasoning test the same as an IQ test?',
              a: 'No. Logical reasoning assessments focus on a particular set of reasoning tasks, while comprehensive intelligence assessments may examine several broader abilities. Some IQ-style tests contain logical reasoning questions, but the two terms are not interchangeable. Our logical reasoning test and general IQ Test are informal practice tools, not substitutes for professionally standardized intelligence testing.',
            },
          ].map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-[#E2EAF7] shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="font-heading text-sm sm:text-base font-bold text-[#07152F]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#2453FF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. H2: ABOUT OUR LOGICAL REASONING TEST AND SCORING METHOD               */}
      {/* ========================================================================= */}
      <section id="about-and-scoring" className="scroll-mt-24 space-y-6">
        <div className="p-8 sm:p-10 bg-gradient-to-br from-[#07152F] via-[#0B1E44] to-[#07152F] text-white rounded-3xl shadow-xl space-y-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-400 border border-white/15">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Transparent Practice Architecture</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-white">
            About Our Logical Reasoning Test and Scoring Method
          </h2>

          <div className="max-w-3xl mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3.5 text-left">
            <p>
              Our Logical Reasoning Test is designed as an original, educational practice assessment.
            </p>
            <p>
              The planned test includes 20 multiple-choice questions across four areas:
            </p>
            <ul className="space-y-1 list-disc list-inside text-slate-200">
              <li>Six deductive reasoning and syllogism questions.</li>
              <li>Five conditional logic questions.</li>
              <li>Five ordering and arrangement questions.</li>
              <li>Four inductive reasoning and sequence questions.</li>
            </ul>
            <p>
              Each question has one intended correct answer.
            </p>
            <p>
              A correct answer earns one point. Incorrect and unanswered questions earn zero points.
            </p>
            <p>
              The final practice score is shown out of 20, with percentage accuracy calculated from the number of correct responses.
            </p>
            <p>
              Answer explanations are provided to help visitors understand the reasoning process and review mistakes.
            </p>
            <p>
              The assessment is not normed against a representative population and does not provide a validated percentile, clinical diagnosis, or standardized IQ score.
            </p>
            <p>
              Its purpose is to offer accessible reasoning practice, introduce common question formats, and help visitors learn from the solutions.
            </p>
            <p>
              For information about the principles of valid psychological test interpretation, refer to the{' '}
              <a
                href="https://www.testingstandards.net/open-access-files.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline font-semibold hover:text-emerald-300"
              >
                Standards for Educational and Psychological Testing
              </a>
              .
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 max-w-xl mx-auto text-xs sm:text-sm text-slate-300">
            <p className="mb-4">
              Ready to challenge your reasoning? Return to the Logical Reasoning Test above, solve the questions, and review the explanations to strengthen your approach to future problems.
            </p>
            <button
              type="button"
              onClick={handleStart}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#2453FF] hover:bg-[#1B40DF] transition-all shadow-md cta-glow cursor-pointer"
            >
              <span>Start Logical Reasoning Test</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

