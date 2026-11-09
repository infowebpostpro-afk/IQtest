'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Binary,
  GitBranch,
  Shapes,
  Box,
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
  FileCheck,
  ExternalLink,
} from 'lucide-react';

interface QuickComprehensiveArticleProps {
  onStart: () => void;
}

export const QuickComprehensiveArticle: React.FC<QuickComprehensiveArticleProps> = ({ onStart }) => {
  // =========================================================================
  // STATE FOR INTERACTIVE SECTIONS
  // =========================================================================

  // 1. How It Works Stepper
  const [activeStep, setActiveStep] = useState<number>(0);

  // 2. Interactive Category Tabs
  const [activeCategory, setActiveCategory] = useState<'numerical' | 'abstract' | 'logical' | 'spatial'>('numerical');

  // 4. Interactive Score Simulator
  const [simulatedScore, setSimulatedScore] = useState<number>(7);

  // 5. Practice Questions State
  const [selectedPracticeAnswers, setSelectedPracticeAnswers] = useState<Record<string, string>>({});
  const [revealedPracticeAnswers, setRevealedPracticeAnswers] = useState<Record<string, boolean>>({});

  // 7. Preparation Checklist State
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    quiet: true,
    instructions: true,
    simplest: false,
    noRush: false,
    review: false,
    practice: false,
  });

  const toggleChecklist = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // 9. FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Practice question handler
  const handleSelectPracticeOption = (questionId: string, optionId: string) => {
    setSelectedPracticeAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setRevealedPracticeAnswers((prev) => ({ ...prev, [questionId]: true }));
  };

  const toggleRevealExplanation = (questionId: string) => {
    setRevealedPracticeAnswers((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  // =========================================================================
  // CONTENT DATA
  // =========================================================================

  const stepsData = [
    {
      step: 1,
      title: 'Start Your 10-Question IQ Test',
      summary: 'Launch the assessment with zero friction or personal data entry.',
      paragraphs: [
        'Click Start Quick Test to begin.',
        "You don't need to enter your name, age, email address, or other personal details.",
        'Before starting, make sure you can read the questions comfortably. Some problems involve small visual details or relationships between shapes, so a clear screen helps.',
        'The test is untimed by default. The five-minute duration is an estimate, not a strict requirement.',
      ],
      badge: 'Step 1: Initiation',
    },
    {
      step: 2,
      title: 'Solve Numerical, Logical, and Visual Puzzles',
      summary: 'Work through 10 carefully balanced problems across four core domains.',
      paragraphs: [
        'Each question presents four possible answers.',
        'Some questions ask you to find a missing number in a sequence. Others involve logical statements, geometric patterns, or mental rotation.',
        'Select the answer you believe is correct.',
        'You can move between questions, change an answer, or return to an unfinished problem before submitting the assessment.',
        "Don't worry if a particular question feels difficult. Try identifying the basic rule before considering more complicated possibilities.",
      ],
      badge: 'Step 2: Problem Solving',
    },
    {
      step: 3,
      title: 'Get Your Free Results Instantly',
      summary: 'Immediate raw score and accuracy percentage with no paywalls or email gates.',
      paragraphs: [
        'After completing the 10 questions, submit your answers.',
        'The assessment calculates your result using the number of correct responses.',
        'For example, if you answer seven questions correctly, your score is 7/10, or 70%.',
        "You'll see your result immediately, without paying or waiting for an email.",
        'This percentage represents your performance on the practice questions, not a standardized intelligence quotient.',
      ],
      badge: 'Step 3: Instant Scoring',
    },
    {
      step: 4,
      title: 'Review Your Answers and Learn',
      summary: 'Examine step-by-step logic, pattern keys, and reasoning strategies.',
      paragraphs: [
        "Once you've finished, you can review the questions and read explanations of the correct answers.",
        'For a number-sequence problem, the explanation might identify an increasing difference between the numbers.',
        'For a visual puzzle, it might show how a shape rotates or changes position.',
        'Reviewing these explanations can help you understand unfamiliar reasoning techniques and make your practice session more useful.',
      ],
      badge: 'Step 4: Answer Review',
    },
  ];

  const categoryDetails = {
    numerical: {
      title: 'Numerical Reasoning: Find the Rule',
      count: '3 Questions (30%)',
      lead: 'Numerical reasoning questions involve relationships between numbers.',
      body: [
        'You might see a sequence such as 4, 7, 11, 16 and be asked to determine the next value.',
        'To solve it, examine how much each number changes.',
        'Other problems may use multiplication, alternating operations, or more than one rule.',
        "You generally don't need advanced mathematics. Careful observation and basic arithmetic are more important.",
      ],
      icon: Binary,
      color: 'blue',
      badge: 'Arithmetic & Sequences',
    },
    abstract: {
      title: 'Abstract Reasoning: Recognize Visual Patterns',
      count: '3 Questions (30%)',
      lead: 'Abstract reasoning uses shapes, symbols, and geometric arrangements.',
      body: [
        'A question might show a sequence of circles and triangles, a missing piece in a visual grid, or shapes that change direction.',
        'Your job is to work out what connects the figures.',
        'Look for changes in shape, number, position, rotation, or order.',
        'Because many abstract puzzles use pictures instead of complex sentences, they can be approachable for a broad English-speaking audience. However, familiarity with visual puzzles still affects performance.',
      ],
      icon: Shapes,
      color: 'amber',
      badge: 'Visual Matrices',
    },
    logical: {
      title: 'Logical Reasoning: Follow the Evidence',
      count: '2 Questions (20%)',
      lead: 'Logical reasoning questions ask you to use stated information to reach a conclusion.',
      body: [
        'For example, if every blue square belongs to a particular group and one object is a blue square, you may be able to determine which group contains that object.',
        'The challenge is to follow the given rules without adding unsupported assumptions.',
        "Sometimes the correct conclusion is that there isn't enough information.",
        'These questions reward careful reading and precise thinking.',
      ],
      icon: GitBranch,
      color: 'purple',
      badge: 'Deductive Proofs',
    },
    spatial: {
      title: 'Spatial Reasoning: Imagine Objects Moving',
      count: '2 Questions (20%)',
      lead: 'Spatial reasoning involves visualizing changes in direction or position.',
      body: [
        'You may need to imagine an arrow rotating, a shape reflecting in a mirror, or a dot moving with a square.',
        'For example, an arrow pointing upward will point left after a 90-degree counterclockwise rotation.',
        'A useful strategy is to track one part of the image at a time.',
        'Our mini IQ test includes a small selection of these questions to introduce different ways of thinking without making the experience unnecessarily long.',
      ],
      icon: Box,
      color: 'emerald',
      badge: 'Mental Rotation & Nets',
    },
  };

  const practicePuzzles = [
    {
      id: 'practice-1',
      domain: 'Numerical Reasoning',
      title: 'Practice Question 1: Number Sequence',
      prompt: 'What number comes next?\n2, 6, 12, 20, 30, ?',
      options: [
        { id: 'A', text: '36' },
        { id: 'B', text: '40' },
        { id: 'C', text: '42' },
        { id: 'D', text: '44' },
      ],
      correctId: 'C',
      correctLabel: 'C. 42',
      explanationSteps: [
        'Look at the differences between successive numbers:',
        '6 − 2 = 4',
        '12 − 6 = 6',
        '20 − 12 = 8',
        '30 − 20 = 10',
        'The differences increase by two each time. The next difference is 12.',
        '30 + 12 = 42.',
        'A useful strategy for numerical sequences is to check the differences before trying complicated mathematical operations.',
      ],
    },
    {
      id: 'practice-2',
      domain: 'Abstract Reasoning',
      title: 'Practice Question 2: Abstract Pattern',
      prompt: 'Which symbol completes the pattern?\n▲  ●  ●  |  ▲  ●  ●  |  ▲  ?',
      options: [
        { id: 'A', text: '▲ (Triangle)' },
        { id: 'B', text: '● (Circle)' },
        { id: 'C', text: '■ (Square)' },
        { id: 'D', text: '◆ (Diamond)' },
      ],
      correctId: 'B',
      correctLabel: 'B. ●',
      explanationSteps: [
        'The pattern repeats in groups of three symbols:',
        '▲ ● ●',
        '▲ ● ●',
        '▲ ?',
        'After each triangle, there are two circles. The missing symbol is therefore a circle.',
        'This example uses a repeating arrangement. More challenging visual questions may combine several rules, including rotation, movement, and changes in the number of shapes.',
      ],
    },
    {
      id: 'practice-3',
      domain: 'Logical Reasoning',
      title: 'Practice Question 3: Logical Deduction',
      prompt:
        'Read the statements:\n1. All silver tokens are round.\n2. No round objects in this collection are wooden.\n\nWhich statement must be true?',
      options: [
        { id: 'A', text: 'Every wooden object is a silver token.' },
        { id: 'B', text: 'No silver token is wooden.' },
        { id: 'C', text: 'Every round object is silver.' },
        { id: 'D', text: 'Some silver tokens are wooden.' },
      ],
      correctId: 'B',
      correctLabel: 'B. No silver token is wooden.',
      explanationSteps: [
        'Every silver token is round.',
        'The second statement tells us that no round object in the collection is wooden.',
        'Therefore, none of the silver tokens can be wooden.',
        'The other choices either reverse the original statements or contradict the information provided.',
        'The important technique is to identify what must follow from the premises, not what seems likely in everyday life.',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Is this quick IQ test free?',
      answer:
        'Yes. The quick reasoning assessment is designed to be free, including its basic results and answer explanations. You can start the ten-question test without creating an account or paying for a report. Your result shows your accuracy on the practice questions, not a standardized intelligence quotient. The goal is to make short reasoning practice convenient and accessible.',
    },
    {
      question: 'How long does a 10-question IQ test take?',
      answer:
        "Most visitors can aim to spend approximately five minutes on this short challenge, although the actual time depends on the questions and individual pace. Our Quick IQ Test is untimed by default, so you don't need to rush. Take enough time to understand each problem and review the available answers before making your choice.",
    },
    {
      question: 'Can I get instant results without signing up?',
      answer:
        'Yes. You can submit your ten answers and see your practice score immediately without providing an email address or creating an account. The result includes your correct-answer count, percentage accuracy, and explanations. This makes the tool suitable for anyone searching for a quick free IQ test with instant results and no unnecessary registration steps.',
    },
    {
      question: 'Is a short IQ test accurate?',
      answer:
        "A short IQ test can accurately calculate how many questions you answered correctly, but that doesn't mean it can accurately measure standardized IQ. Ten questions provide limited information, and our assessment has not been normed against a representative population. Treat your result as practice feedback rather than a scientific measurement of overall intelligence.",
    },
    {
      question: 'What types of IQ questions are included?',
      answer:
        'The assessment contains ten multiple-choice questions: three numerical reasoning problems, three abstract-pattern questions, two logical deduction problems, and two spatial reasoning challenges. You\'ll encounter number relationships, visual rules, conclusions based on statements, and geometric transformations. Each question has four options and one intended correct answer.',
    },
    {
      question: 'Can I retake the Quick IQ Test?',
      answer:
        'Yes. You can restart the assessment if you want to practise again or review the question formats. Remember that answering the same questions repeatedly may improve your score through familiarity. Rather than focusing only on achieving a higher percentage, pay attention to why each answer is correct and practise different puzzles when available.',
    },
    {
      question: 'Should I take the quick IQ test or the full IQ test?',
      answer:
        'Choose the quick version if you have about five minutes and want a short introduction to reasoning questions. Choose the full version if you prefer a longer, 20-question challenge. Both provide practice feedback rather than professionally standardized IQ scores. You can start with the short version and move to the full IQ Test whenever you\'re ready.',
    },
  ];

  return (
    <article className="w-full space-y-16 sm:space-y-24 py-8 sm:py-14 text-[#07152F] antialiased">
      {/* ===================================================================== */}
      {/* SECTION 1: HOW DOES OUR QUICK IQ TEST WORK?                           */}
      {/* ===================================================================== */}
      <section id="how-it-works" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
            <Zap className="w-3.5 h-3.5 fill-[#2453FF]" />
            <span>Four-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152F] tracking-tight mb-4">
            How Does Our Quick IQ Test Work?
          </h2>
          <p className="text-base sm:text-lg text-[#60718B] leading-relaxed">
            Our quick online IQ test keeps things simple. You answer 10 multiple-choice questions, submit your responses, and immediately see how many you solved correctly.
          </p>
          <p className="text-sm sm:text-base text-[#60718B] mt-2 leading-relaxed">
            The goal is to offer an accessible reasoning challenge without requiring a long registration process or a complicated setup. You can take the test on a phone, tablet, or desktop computer. It works best when you have a few uninterrupted minutes to focus.
          </p>
        </div>

        {/* 4-Step Interactive Stepper Component */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_4px_24px_rgba(7,21,47,0.04)] overflow-hidden">
          {/* Step Selector Tab Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#E2EAF7] bg-[#F7FAFF]/70">
            {stepsData.map((s, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 text-left transition-all border-b-2 sm:border-b-3 flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#2453FF] shadow-xs'
                      : 'border-transparent hover:bg-white/60 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#2453FF] text-white shadow-sm'
                        : 'bg-[#E2EAF7] text-[#60718B]'
                    }`}
                  >
                    {s.step}
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#60718B]">
                      Step {s.step}
                    </span>
                    <span
                      className={`block text-xs sm:text-sm font-bold truncate ${
                        isSelected ? 'text-[#07152F]' : 'text-[#60718B]'
                      }`}
                    >
                      {s.step === 1 && 'Start Test'}
                      {s.step === 2 && 'Solve Puzzles'}
                      {s.step === 3 && 'Instant Results'}
                      {s.step === 4 && 'Review & Learn'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Content Display */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Full Editorial Text */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#2453FF] bg-[#EEF2FF] border border-[#2453FF]/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2453FF]" />
                  <span>{stepsData[activeStep].badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#07152F] tracking-tight">
                  {stepsData[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-[#2453FF]">
                  {stepsData[activeStep].summary}
                </p>

                <div className="space-y-3 pt-2 text-sm sm:text-base text-[#60718B] leading-relaxed">
                  {stepsData[activeStep].paragraphs.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EAF2FF] text-[#2453FF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <p>{p}</p>
                    </div>
                  ))}
                </div>

                {activeStep === 0 && (
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={onStart}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2453FF] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#1B40DF] transition-all cursor-pointer"
                    >
                      <span>Start Quick Test Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Visual Demonstration Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#F7FAFF] rounded-2xl border border-[#E2EAF7] p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#60718B] border-b border-[#E2EAF7] pb-3">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2453FF]" />
                      <span>Untimed Practice</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-[#E2EAF7] text-[#07152F]">
                      10 Questions Total
                    </span>
                  </div>

                  {activeStep === 0 && (
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-3 bg-white rounded-xl border border-[#E2EAF7]">
                        <span className="text-[#60718B] block text-[11px] font-semibold">User Verification</span>
                        <span className="font-bold text-emerald-600 flex items-center gap-1.5 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" /> No Registration, Email, or Password
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E2EAF7]">
                        <span className="text-[#60718B] block text-[11px] font-semibold">Pacing</span>
                        <span className="font-bold text-[#07152F]">~5 Minutes (Estimated at your leisure)</span>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-3 bg-white rounded-xl border border-[#E2EAF7]">
                        <div className="flex justify-between items-center mb-1 font-bold text-[#07152F]">
                          <span>Question 4 of 10</span>
                          <span className="text-[#2453FF]">Abstract Pattern</span>
                        </div>
                        <div className="w-full bg-[#E2EAF7] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#2453FF] h-full w-[40%]" />
                        </div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E2EAF7] text-[#60718B]">
                        Four options per problem. Move freely between questions, flag difficult items, and change answers anytime.
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-4 bg-white rounded-xl border border-[#E2EAF7] text-center">
                        <span className="text-3xl font-black text-[#2453FF]">7 / 10</span>
                        <span className="block text-xs font-bold text-emerald-600 mt-1">70% Practice Accuracy</span>
                      </div>
                      <p className="text-xs text-[#60718B] text-center">
                        Scores calculate instantly in your local browser session. No paywall, no hidden report fees.
                      </p>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-3 bg-white rounded-xl border border-emerald-200 bg-emerald-50/50">
                        <span className="text-[11px] font-bold text-emerald-800 uppercase block">Correct Answer Key</span>
                        <p className="font-semibold text-[#07152F] text-xs mt-1">
                          Step-by-step logic detailing differences, rotation angles, and premise deduction.
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E2EAF7] flex items-center justify-between text-xs">
                        <span className="font-bold text-[#07152F]">Retake Challenge</span>
                        <span className="text-[#2453FF] font-semibold">Unlimited Free Retakes</span>
                      </div>
                    </div>
                  )}

                  {/* Step Navigation Controls */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#E2EAF7]">
                    <button
                      type="button"
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 text-xs font-bold text-[#60718B] hover:text-[#07152F] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                    >
                      ← Previous Step
                    </button>
                    <button
                      type="button"
                      disabled={activeStep === stepsData.length - 1}
                      onClick={() => setActiveStep((prev) => Math.min(stepsData.length - 1, prev + 1))}
                      className="px-3 py-1.5 text-xs font-bold text-[#2453FF] hover:text-[#1B40DF] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2: WHAT TYPES OF QUESTIONS ARE IN THIS SHORT IQ TEST?         */}
      {/* ===================================================================== */}
      <section id="question-types" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
            <Layers className="w-3.5 h-3.5 fill-[#2453FF]" />
            <span>Curated Problem Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152F] tracking-tight mb-4">
            What Types of Questions Are in This Short IQ Test?
          </h2>
          <p className="text-base sm:text-lg text-[#60718B] leading-relaxed">
            This 10-question IQ test includes four types of reasoning challenges. Each category focuses on a different problem-solving approach. The questions are mixed together to make the experience varied and engaging.
          </p>
        </div>

        {/* Accessible Question Distribution Table */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_4px_20px_rgba(7,21,47,0.03)] overflow-hidden mb-10">
          <div className="px-6 py-5 bg-[#F7FAFF] border-b border-[#E2EAF7] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-extrabold text-[#07152F]">
                Quick IQ Test Question Distribution
              </h3>
              <p className="text-xs text-[#60718B]">
                Balanced allocation across 10 single-choice multiple-choice problems
              </p>
            </div>
            <span className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-[#EEF2FF] text-[#2453FF] border border-[#2453FF]/15">
              10 Questions Total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse" aria-label="Question Distribution by Cognitive Category">
              <thead>
                <tr className="border-b border-[#E2EAF7] bg-white text-[#60718B] text-xs font-bold uppercase tracking-wider">
                  <th scope="col" className="py-3.5 px-6">Question Type</th>
                  <th scope="col" className="py-3.5 px-6 text-center">Number of Questions</th>
                  <th scope="col" className="py-3.5 px-6">Main Activity</th>
                  <th scope="col" className="py-3.5 px-6 text-right">Proportion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#07152F]">
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-4 px-6 font-bold flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Binary className="w-4 h-4" />
                    </div>
                    <span>Numerical reasoning</span>
                  </td>
                  <td className="py-4 px-6 text-center font-black text-blue-600">3</td>
                  <td className="py-4 px-6 text-[#60718B]">Identify number relationships</td>
                  <td className="py-4 px-6 text-right font-semibold text-[#60718B]">30%</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-4 px-6 font-bold flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Shapes className="w-4 h-4" />
                    </div>
                    <span>Abstract reasoning</span>
                  </td>
                  <td className="py-4 px-6 text-center font-black text-amber-600">3</td>
                  <td className="py-4 px-6 text-[#60718B]">Recognize visual patterns</td>
                  <td className="py-4 px-6 text-right font-semibold text-[#60718B]">30%</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-4 px-6 font-bold flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <span>Logical reasoning</span>
                  </td>
                  <td className="py-4 px-6 text-center font-black text-purple-600">2</td>
                  <td className="py-4 px-6 text-[#60718B]">Draw conclusions from given information</td>
                  <td className="py-4 px-6 text-right font-semibold text-[#60718B]">20%</td>
                </tr>
                <tr className="hover:bg-[#F7FAFF]/80 transition-colors">
                  <td className="py-4 px-6 font-bold flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Box className="w-4 h-4" />
                    </div>
                    <span>Spatial reasoning</span>
                  </td>
                  <td className="py-4 px-6 text-center font-black text-emerald-600">2</td>
                  <td className="py-4 px-6 text-[#60718B]">Imagine rotations and positions</td>
                  <td className="py-4 px-6 text-right font-semibold text-[#60718B]">20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#F7FAFF]/50 border-t border-[#E2EAF7] text-xs text-[#60718B]">
            <p className="italic">
              These categories describe the kinds of tasks included. They are not independently validated measurements of four separate cognitive abilities.
            </p>
          </div>
        </div>

        {/* 4 In-Depth Category Deep Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Numerical Reasoning Card */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Binary className="w-5 h-5" />
              </div>
              <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                3 Questions
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-2">
              Numerical Reasoning: Find the Rule
            </h3>
            <p className="text-sm font-semibold text-[#2453FF] mb-3">
              Numerical reasoning questions involve relationships between numbers.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                You might see a sequence such as 4, 7, 11, 16 and be asked to determine the next value.
              </p>
              <p>
                To solve it, examine how much each number changes. Other problems may use multiplication, alternating operations, or more than one rule.
              </p>
              <p>
                You generally don&apos;t need advanced mathematics. Careful observation and basic arithmetic are more important.
              </p>
            </div>
          </div>

          {/* Abstract Reasoning Card */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-7 shadow-xs hover:border-amber-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Shapes className="w-5 h-5" />
              </div>
              <span className="text-xs font-extrabold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                3 Questions
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-2">
              Abstract Reasoning: Recognize Visual Patterns
            </h3>
            <p className="text-sm font-semibold text-amber-700 mb-3">
              Abstract reasoning uses shapes, symbols, and geometric arrangements.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                A question might show a sequence of circles and triangles, a missing piece in a visual grid, or shapes that change direction.
              </p>
              <p>
                Your job is to work out what connects the figures. Look for changes in shape, number, position, rotation, or order.
              </p>
              <p>
                Because many abstract puzzles use pictures instead of complex sentences, they can be approachable for a broad English-speaking audience. However, familiarity with visual puzzles still affects performance.
              </p>
            </div>
          </div>

          {/* Logical Reasoning Card */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-7 shadow-xs hover:border-purple-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <GitBranch className="w-5 h-5" />
              </div>
              <span className="text-xs font-extrabold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                2 Questions
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-2">
              Logical Reasoning: Follow the Evidence
            </h3>
            <p className="text-sm font-semibold text-purple-700 mb-3">
              Logical reasoning questions ask you to use stated information to reach a conclusion.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                For example, if every blue square belongs to a particular group and one object is a blue square, you may be able to determine which group contains that object.
              </p>
              <p>
                The challenge is to follow the given rules without adding unsupported assumptions. Sometimes the correct conclusion is that there isn&apos;t enough information.
              </p>
              <p>
                These questions reward careful reading and precise thinking.
              </p>
            </div>
          </div>

          {/* Spatial Reasoning Card */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-7 shadow-xs hover:border-emerald-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Box className="w-5 h-5" />
              </div>
              <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                2 Questions
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-2">
              Spatial Reasoning: Imagine Objects Moving
            </h3>
            <p className="text-sm font-semibold text-emerald-700 mb-3">
              Spatial reasoning involves visualizing changes in direction or position.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                You may need to imagine an arrow rotating, a shape reflecting in a mirror, or a dot moving with a square.
              </p>
              <p>
                For example, an arrow pointing upward will point left after a 90-degree counterclockwise rotation. A useful strategy is to track one part of the image at a time.
              </p>
              <p>
                Our mini IQ test includes a small selection of these questions to introduce different ways of thinking without making the experience unnecessarily long.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3: WHY TRY A 10-QUESTION IQ TEST? (SAAS BENTO GRID)           */}
      {/* ===================================================================== */}
      <section id="benefits" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 fill-[#2453FF]" />
            <span>Short Assessment Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152F] tracking-tight mb-4">
            Why Try a 10-Question IQ Test?
          </h2>
          <p className="text-base sm:text-lg text-[#60718B] leading-relaxed">
            A longer reasoning assessment isn&apos;t always necessary when your goal is simple curiosity or a short mental challenge. A 10 question IQ test gives you a manageable introduction to several puzzle formats without requiring a large time commitment.
          </p>
        </div>

        {/* White-and-Blue SaaS Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Card 1: Fits Into a Short Break (Span 3) */}
          <div className="md:col-span-3 lg:col-span-3 bg-white rounded-3xl border border-[#E2EAF7] p-7 shadow-[0_4px_24px_rgba(7,21,47,0.03)] flex flex-col justify-between hover:border-[#2453FF]/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2453FF] flex items-center justify-center mb-5">
                <Clock className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#07152F] mb-3">
                It Fits Into a Short Break
              </h3>
              <p className="text-sm text-[#60718B] leading-relaxed mb-3">
                You can take the challenge during a quiet break, between other activities, or whenever you have a few minutes available.
              </p>
              <p className="text-sm text-[#60718B] leading-relaxed">
                The test is designed around approximately five minutes of practice, although individual completion times will vary. You don&apos;t need to rush. Focus on answering carefully rather than achieving a particular completion time.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#2453FF]">
              <span className="w-2 h-2 rounded-full bg-[#2453FF]" />
              <span>Untimed & Stress-Free</span>
            </div>
          </div>

          {/* Card 2: Explore Different Puzzles Quickly (Span 3) */}
          <div className="md:col-span-3 lg:col-span-3 bg-white rounded-3xl border border-[#E2EAF7] p-7 shadow-[0_4px_24px_rgba(7,21,47,0.03)] flex flex-col justify-between hover:border-[#2453FF]/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#07152F] mb-3">
                You Can Explore Different Puzzles Quickly
              </h3>
              <p className="text-sm text-[#60718B] leading-relaxed mb-3">
                A ten-question assessment allows you to try several reasoning formats in one session.
              </p>
              <p className="text-sm text-[#60718B] leading-relaxed">
                You might enjoy number patterns, discover that visual rotations require more concentration, or find logical deductions especially interesting. That&apos;s a useful way to decide which types of puzzles you want to practise further.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-indigo-600">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>4 Distinct Cognitive Styles</span>
            </div>
          </div>

          {/* Card 3: Results Are Available Without Registration (Span 2) */}
          <div className="md:col-span-3 lg:col-span-2 bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-7 shadow-[0_4px_24px_rgba(7,21,47,0.03)] flex flex-col justify-between hover:border-[#2453FF]/30 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#07152F] mb-2.5">
                Results Are Available Without Registration
              </h3>
              <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed mb-3">
                Our free quick IQ test is designed to provide immediate basic results without requiring an account, payment, or email address.
              </p>
              <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                You can concentrate on the questions rather than navigating a lengthy setup process. There is no need to purchase a report to see how many answers you got right.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 pt-3 border-t border-slate-100 block">
              100% Free & Transparent
            </span>
          </div>

          {/* Card 4: You Can Learn From Mistakes (Span 2) */}
          <div className="md:col-span-3 lg:col-span-2 bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-7 shadow-[0_4px_24px_rgba(7,21,47,0.03)] flex flex-col justify-between hover:border-[#2453FF]/30 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#07152F] mb-2.5">
                You Can Learn From Mistakes
              </h3>
              <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed mb-3">
                A raw score tells you what happened during the test. An explanation helps you understand why.
              </p>
              <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                Reviewing a missed question can reveal a mathematical pattern you overlooked or an assumption you made during a logic problem. This is especially useful for visitors who want to practise reasoning rather than collect a score.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-600 pt-3 border-t border-slate-100 block">
              Step-by-Step Logic Keys
            </span>
          </div>

          {/* Card 5: Decide Whether to Take a Longer Test (Span 2) */}
          <div className="md:col-span-3 lg:col-span-2 bg-gradient-to-br from-blue-50/70 to-indigo-50/70 rounded-3xl border border-[#2453FF]/20 p-6 sm:p-7 shadow-[0_4px_24px_rgba(7,21,47,0.03)] flex flex-col justify-between hover:border-[#2453FF]/40 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#2453FF] text-white flex items-center justify-center mb-4 shadow-sm">
                <Target className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#07152F] mb-2.5">
                Decide Whether to Take a Longer Test
              </h3>
              <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed mb-3">
                A short assessment offers a convenient starting point. If you enjoy the questions and want a longer challenge, you can continue to our full 20-question IQ Test.
              </p>
              <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                The full assessment gives you more practice questions across the same broad categories. Neither test should be treated as a substitute for a professionally standardized intelligence assessment.
              </p>
            </div>
            <div className="pt-3 border-t border-[#2453FF]/15">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2453FF] hover:text-[#1B40DF] transition-colors"
              >
                <span>Take Full 20-Question IQ Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 4: UNDERSTANDING YOUR QUICK IQ TEST RESULTS                   */}
      {/* ===================================================================== */}
      <section id="results-interpretation" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
            <BarChart3 className="w-3.5 h-3.5 fill-[#2453FF]" />
            <span>Score Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152F] tracking-tight mb-4">
            Understanding Your Quick IQ Test Results
          </h2>
          <p className="text-base sm:text-lg text-[#60718B] leading-relaxed">
            Your quick IQ test results show how accurately you answered the ten practice questions. Each correct answer earns one point. Incorrect and unanswered questions earn zero points. Your total is displayed as a score out of ten, along with a percentage.
          </p>
        </div>

        {/* Calculation Walkthrough & Example Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Left Column: How Score Is Calculated */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E2EAF7] p-7 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-[#07152F] mb-4">
                How Your Score Is Calculated
              </h3>
              <p className="text-sm text-[#60718B] leading-relaxed mb-4">
                The calculation is straightforward:
              </p>

              {/* Mathematical Formula Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7] font-mono text-sm sm:text-base font-bold text-[#2453FF] text-center mb-5">
                Accuracy = (Correct answers ÷ 10) × 100
              </div>

              <div className="space-y-3 text-sm text-[#60718B] leading-relaxed">
                <p className="font-semibold text-[#07152F]">
                  Suppose you answered:
                </p>
                <ul className="space-y-1.5 pl-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Seven questions correctly.</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Two questions incorrectly.</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-2 h-2 rounded-full bg-slate-400" />
                    <span>One question remained unanswered.</span>
                  </li>
                </ul>

                <p className="pt-2">
                  Your total score would be <strong className="text-[#07152F]">7/10</strong>.
                </p>
                <p>
                  Your percentage would be: <strong className="text-[#2453FF]">7 ÷ 10 × 100 = 70%</strong>.
                </p>
                <p className="pt-2">
                  This means you answered 70% of the ten questions correctly. It does not mean your IQ is 70 or that you performed better than 70% of the population. Those are different kinds of scores.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-[#60718B]">
              <Info className="w-4 h-4 text-[#2453FF] shrink-0" />
              <span>Practice accuracy reflects items solved in this quiz, not a normed IQ.</span>
            </div>
          </div>

          {/* Right Column: Illustrative Example Table + Live Simulator */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E2EAF7] p-7 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-extrabold text-[#07152F]">
                  Example Quick IQ Test Result
                </h3>
                <span className="text-[11px] font-bold text-[#60718B] bg-slate-100 px-2.5 py-1 rounded-md">
                  Benchmark
                </span>
              </div>

              {/* Formatted Benchmark Table */}
              <div className="rounded-2xl border border-[#E2EAF7] overflow-hidden mb-5">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-[#F7FAFF] text-[#60718B] font-bold text-[11px] uppercase tracking-wider border-b border-[#E2EAF7]">
                    <tr>
                      <th className="py-2.5 px-4">Result Metric</th>
                      <th className="py-2.5 px-4 text-right">Example Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2EAF7]">
                    <tr>
                      <td className="py-2 px-4 text-[#60718B]">Total questions</td>
                      <td className="py-2 px-4 text-right font-bold text-[#07152F]">10</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-emerald-700">Correct answers</td>
                      <td className="py-2 px-4 text-right font-bold text-emerald-600">7</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-rose-700">Incorrect answers</td>
                      <td className="py-2 px-4 text-right font-bold text-rose-600">2</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-slate-600">Unanswered questions</td>
                      <td className="py-2 px-4 text-right font-bold text-slate-600">1</td>
                    </tr>
                    <tr className="bg-[#EEF2FF]/60 font-bold">
                      <td className="py-2.5 px-4 text-[#2453FF]">Accuracy</td>
                      <td className="py-2.5 px-4 text-right text-[#2453FF]">70%</td>
                    </tr>
                    <tr className="bg-[#F7FAFF] font-black">
                      <td className="py-2.5 px-4 text-[#07152F]">Total score</td>
                      <td className="py-2.5 px-4 text-right text-[#07152F]">7/10</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[11px] text-[#60718B] italic leading-relaxed mb-4">
                Illustrative example only. This is not a real user&apos;s result. A results screen can also show which individual questions you answered correctly and which ones need review. That additional feedback is often more helpful than the percentage alone.
              </p>

              {/* Interactive Score Simulator Widget */}
              <div className="p-4 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#07152F]">Simulate Correct Answers:</span>
                  <span className="text-xs font-black text-[#2453FF]">{simulatedScore} / 10 ({simulatedScore * 10}%)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={simulatedScore}
                  onChange={(e) => setSimulatedScore(Number(e.target.value))}
                  className="w-full accent-[#2453FF] cursor-pointer"
                  aria-label="Simulate score slider"
                />
                <div className="flex justify-between text-[10px] text-[#60718B] font-semibold mt-1">
                  <span>0/10 (0%)</span>
                  <span>5/10 (50%)</span>
                  <span>10/10 (100%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High Score vs. Low Score Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-3">
              What Does a High Practice Score Mean?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                If you answer most questions correctly, it means you performed well on that particular set.
              </p>
              <p>
                You may have recognized familiar patterns quickly or applied effective problem-solving strategies.
              </p>
              <p>
                However, ten questions provide limited information. The result cannot establish your overall intelligence level or demonstrate that you are more intelligent than a specific percentage of other people.
              </p>
              <p>
                A score may also be influenced by the question mix, previous practice, concentration, or simple mistakes.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-3">
              What If You Get Several Questions Wrong?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                Missing questions is a normal part of practising unfamiliar skills.
              </p>
              <p>
                A difficult pattern may become obvious after you see the explanation.
              </p>
              <p>
                Instead of treating a lower score as a judgement of your intelligence, use it to identify what you want to learn.
              </p>
              <p>
                For example, you might decide to practise rotations or work through additional logic questions. Our results are designed to support that learning process, not to label your ability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 5: QUICK IQ TEST PRACTICE QUESTIONS AND ANSWERS               */}
      {/* ===================================================================== */}
      <section id="practice-questions" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 fill-[#2453FF]" />
            <span>Interactive Practice Laboratory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152F] tracking-tight mb-4">
            Quick IQ Test Practice Questions and Answers
          </h2>
          <p className="text-base sm:text-lg text-[#60718B] leading-relaxed">
            Want to try a few examples before or after your short IQ test? These original practice questions demonstrate the reasoning styles used in many IQ-style puzzles. Each has four answer choices and a step-by-step explanation.
          </p>
          <p className="text-xs sm:text-sm text-[#2453FF] font-semibold mt-2">
            The examples below are separate from the ten questions in the live test.
          </p>
        </div>

        {/* 3 Interactive Practice Cards */}
        <div className="space-y-8 mb-10">
          {practicePuzzles.map((puzzle, pIdx) => {
            const selectedOption = selectedPracticeAnswers[puzzle.id];
            const isRevealed = revealedPracticeAnswers[puzzle.id];
            const isCorrect = selectedOption === puzzle.correctId;

            return (
              <div
                key={puzzle.id}
                className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_4px_24px_rgba(7,21,47,0.03)] hover:border-[#2453FF]/30 transition-all"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2EAF7] pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-[#2453FF] text-white text-xs font-black flex items-center justify-center">
                      {pIdx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#07152F]">
                      {puzzle.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#60718B] px-3 py-1 rounded-full bg-[#F7FAFF] border border-[#E2EAF7]">
                    {puzzle.domain}
                  </span>
                </div>

                {/* Prompt */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#60718B] mb-1.5">
                    Problem Statement:
                  </p>
                  <div className="p-4 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7] text-sm sm:text-base font-semibold text-[#07152F] whitespace-pre-line">
                    {puzzle.prompt}
                  </div>
                </div>

                {/* Options Grid */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#60718B] mb-2.5">
                    Choose an answer:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {puzzle.options.map((opt) => {
                      const isOptionSelected = selectedOption === opt.id;
                      const isOptionCorrect = opt.id === puzzle.correctId;

                      let btnStyle = 'bg-white border-[#E2EAF7] text-[#07152F] hover:border-[#2453FF]/40 hover:bg-[#F7FAFF]';
                      if (isRevealed) {
                        if (isOptionCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold';
                        } else if (isOptionSelected) {
                          btnStyle = 'bg-rose-50 border-rose-300 text-rose-800';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'bg-[#EEF2FF] border-[#2453FF] text-[#2453FF] font-bold';
                      }

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectPracticeOption(puzzle.id, opt.id)}
                          className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-lg bg-slate-100 text-[#07152F] font-bold text-xs flex items-center justify-center shrink-0">
                              {opt.id}
                            </span>
                            <span>{opt.text}</span>
                          </div>
                          {isRevealed && isOptionCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {isRevealed && isOptionSelected && !isOptionCorrect && (
                            <X className="w-4 h-4 text-rose-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Reveal Answer / Explanation Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#E2EAF7]">
                  <div className="text-xs text-[#60718B]">
                    {selectedOption ? (
                      isCorrect ? (
                        <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> Correct! Outstanding reasoning.
                        </span>
                      ) : (
                        <span className="font-bold text-amber-700 flex items-center gap-1.5">
                          <Info className="w-4 h-4" /> Not quite right. Review the explanation below.
                        </span>
                      )
                    ) : (
                      <span>Select an option to test your answer or reveal solution.</span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleRevealExplanation(puzzle.id)}
                    className="self-start sm:self-auto px-4 py-2 rounded-xl text-xs font-bold text-[#2453FF] bg-[#EEF2FF] hover:bg-[#E0E8FF] transition-colors cursor-pointer"
                  >
                    {isRevealed ? 'Hide Explanation' : 'Reveal Step-by-Step Explanation'}
                  </button>
                </div>

                {/* Explanation Card */}
                {isRevealed && (
                  <div className="mt-5 p-5 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7] animate-in fade-in space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Correct Answer: {puzzle.correctLabel}</span>
                    </div>

                    <div className="text-xs sm:text-sm text-[#60718B] space-y-2 leading-relaxed">
                      <p className="font-bold text-[#07152F]">Explanation:</p>
                      {puzzle.explanationSteps.map((step, sIdx) => (
                        <p key={sIdx}>{step}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Synthesis Paragraph: What These Examples Teach You */}
        <div className="bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 rounded-3xl border border-[#2453FF]/20 p-7 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <Lightbulb className="w-5 h-5 text-[#2453FF]" />
            <h3 className="text-lg font-extrabold text-[#07152F]">
              What These Examples Teach You
            </h3>
          </div>
          <div className="space-y-3 text-sm sm:text-base text-[#60718B] leading-relaxed">
            <p>
              The three problems demonstrate different strategies. For number sequences, study the changes between terms. For abstract patterns, look for repeating groups or transformations. For logical deductions, pay attention to the exact wording and avoid unsupported assumptions.
            </p>
            <p>
              Learning these techniques may help you become more comfortable with similar questions. For a broader challenge, you can also explore the full IQ Test on our homepage.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-[#2453FF]/15 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onStart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2453FF] text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-[#1B40DF] transition-all cursor-pointer"
            >
              <span>Start Live 10-Question Test</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2453FF] hover:underline"
            >
              <span>Explore Full 20-Question IQ Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 6: CAN A 5-MINUTE IQ TEST ACCURATELY MEASURE YOUR IQ?         */}
      {/* ===================================================================== */}
      <section id="accuracy-limits" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
            <Scale className="w-3.5 h-3.5 fill-[#2453FF]" />
            <span>Psychometric Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152F] tracking-tight mb-4">
            Can a 5-Minute IQ Test Accurately Measure Your IQ?
          </h2>
          <p className="text-base sm:text-lg text-[#60718B] leading-relaxed">
            A five-minute IQ test can provide a short reasoning challenge and immediate feedback, but it cannot automatically establish a scientifically reliable IQ score.
          </p>
          <p className="text-sm sm:text-base text-[#60718B] mt-2 leading-relaxed">
            The distinction matters because a person&apos;s performance on ten practice questions is not the same as the result of a professionally standardized intelligence assessment.
          </p>
        </div>

        {/* 4 Thematic Deep Dive Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 1. Why Ten Questions Are Limited */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-3">
              Why Ten Questions Are Limited
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                A short test samples only a small number of problems.
              </p>
              <p>
                For example, our Quick IQ Test contains three numerical questions but only two spatial questions.
              </p>
              <p>
                Getting both spatial questions correct doesn&apos;t prove that spatial reasoning is your strongest ability. Missing one also doesn&apos;t prove a weakness.
              </p>
              <p>
                With so few questions in each category, individual mistakes have a large effect on the results. The score therefore describes your performance on the particular questions you answered, rather than providing a dependable measurement of your underlying abilities.
              </p>
            </div>
          </div>

          {/* 2. What Makes an Intelligence Test Standardized? */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-3">
              What Makes an Intelligence Test Standardized?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                A standardized intelligence assessment requires more than a collection of questions and an automatic scoring system.
              </p>
              <p>
                Its developers must establish appropriate administration and scoring procedures, collect relevant evidence, and determine how scores should be interpreted for the intended population and purpose.
              </p>
              <p>
                Two important concepts are <strong className="text-[#07152F]">reliability</strong> and <strong className="text-[#07152F]">validity</strong>. Reliability concerns the consistency or precision of scores. Validity concerns whether evidence supports the interpretations and uses of those scores.
              </p>
              <p>
                A short online practice quiz may be useful and accurately scored without having the evidence required for standardized IQ interpretation.
              </p>
            </div>
          </div>

          {/* 3. Can You Determine Your Exact IQ in Five Minutes? */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-3">
              Can You Determine Your Exact IQ in Five Minutes?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                Our Quick IQ Test cannot determine your exact standardized IQ number.
              </p>
              <p>
                The assessment does not convert raw accuracy into a population-normed intelligence quotient.
              </p>
              <p>
                Even when an online tool displays a numerical IQ estimate, that number should not automatically be assumed reliable.
              </p>
              <p>
                You should look for clear information about how the test was developed, which norms were used, and what evidence supports the score.
              </p>
            </div>
          </div>

          {/* 4. When Is Professional Testing Appropriate? */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-[#07152F] mb-3">
              When Is Professional Testing Appropriate?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#60718B] leading-relaxed">
              <p>
                If you need intelligence testing for an educational evaluation, clinical purpose, or formal organizational requirement, consider an appropriately qualified assessment professional or approved testing provider.
              </p>
              <p>
                Different assessments are suitable for different purposes and populations.
              </p>
              <p>
                For example, Mensa International explains that its online practice challenge is not a qualifying admission test.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line Alert Callout */}
        <div className="p-6 rounded-2xl bg-[#07152F] text-white shadow-md flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#2453FF] text-white flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
              Bottom Line
            </span>
            <p className="text-sm sm:text-base font-semibold leading-relaxed">
              Use our short IQ test to practise reasoning and learn from your answers. Do not use the result to make important decisions about your intellectual abilities.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 7: HOW TO GET THE MOST FROM YOUR SHORT IQ TEST                */}
      {/* ===================================================================== */}
      <section id="preparation-tips" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
            <ListChecks className="w-3.5 h-3.5 fill-[#2453FF]" />
            <span>Practical Preparation Checklist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152F] tracking-tight mb-4">
            How to Get the Most From Your Short IQ Test
          </h2>
          <p className="text-base sm:text-lg text-[#60718B] leading-relaxed">
            You don&apos;t need extensive preparation for a ten-question reasoning challenge. A few practical habits can make the experience more comfortable and help you learn from the results.
          </p>
        </div>

        {/* Interactive Checklist Container */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-9 shadow-[0_4px_24px_rgba(7,21,47,0.03)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[#E2EAF7]">
            <div>
              <h3 className="text-lg font-extrabold text-[#07152F]">
                Test-Taker Readiness Checklist
              </h3>
              <p className="text-xs text-[#60718B]">
                Check off each habit as you prepare your study space
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7FAFF] border border-[#E2EAF7] text-xs font-bold text-[#07152F]">
              <span className="text-[#2453FF] font-black">{completedChecklistCount} of 6</span>
              <span>Habits Adopted</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Find a Quiet Place */}
            <div
              onClick={() => toggleChecklist('quiet')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                checklist.quiet
                  ? 'bg-blue-50/40 border-[#2453FF]/40 shadow-2xs'
                  : 'bg-white border-[#E2EAF7] hover:border-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checklist.quiet ? 'bg-[#2453FF] text-white' : 'border-2 border-slate-300'
                }`}
              >
                {checklist.quiet && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-extrabold text-[#07152F]">
                  1. Find a Quiet Place
                </h4>
                <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                  Choose somewhere you can concentrate for a few minutes. Turn off unnecessary notifications and avoid switching between other activities during the test.
                </p>
                <p className="text-xs text-[#60718B] leading-relaxed">
                  If you&apos;re interrupted, return to the question carefully rather than rushing through it. A quiet environment helps you focus, although it doesn&apos;t guarantee a higher score.
                </p>
              </div>
            </div>

            {/* 2. Read the Instructions Before Answering */}
            <div
              onClick={() => toggleChecklist('instructions')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                checklist.instructions
                  ? 'bg-blue-50/40 border-[#2453FF]/40 shadow-2xs'
                  : 'bg-white border-[#E2EAF7] hover:border-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checklist.instructions ? 'bg-[#2453FF] text-white' : 'border-2 border-slate-300'
                }`}
              >
                {checklist.instructions && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-extrabold text-[#07152F]">
                  2. Read the Instructions Before Answering
                </h4>
                <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                  Some reasoning problems contain small details that are easy to overlook. Read the entire prompt and examine every answer choice.
                </p>
                <p className="text-xs text-[#60718B] leading-relaxed">
                  For visual questions, look at the position and direction of each shape. For logical questions, pay attention to words such as <em>all</em>, <em>some</em>, <em>none</em>, and <em>must</em>. A small difference in wording can change the correct conclusion.
                </p>
              </div>
            </div>

            {/* 3. Look for the Simplest Consistent Rule */}
            <div
              onClick={() => toggleChecklist('simplest')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                checklist.simplest
                  ? 'bg-blue-50/40 border-[#2453FF]/40 shadow-2xs'
                  : 'bg-white border-[#E2EAF7] hover:border-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checklist.simplest ? 'bg-[#2453FF] text-white' : 'border-2 border-slate-300'
                }`}
              >
                {checklist.simplest && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-extrabold text-[#07152F]">
                  3. Look for the Simplest Consistent Rule
                </h4>
                <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                  When solving a pattern, begin with straightforward possibilities. For numerical questions, check differences, ratios, and repeating operations.
                </p>
                <p className="text-xs text-[#60718B] leading-relaxed">
                  For visual problems, check rotation, order, quantity, and changes in position. Avoid inventing complicated rules before examining simpler explanations. The intended solution should account for the whole pattern, not just one part of it.
                </p>
              </div>
            </div>

            {/* 4. Don't Rush Unnecessarily */}
            <div
              onClick={() => toggleChecklist('noRush')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                checklist.noRush
                  ? 'bg-blue-50/40 border-[#2453FF]/40 shadow-2xs'
                  : 'bg-white border-[#E2EAF7] hover:border-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checklist.noRush ? 'bg-[#2453FF] text-white' : 'border-2 border-slate-300'
                }`}
              >
                {checklist.noRush && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-extrabold text-[#07152F]">
                  4. Don&apos;t Rush Unnecessarily
                </h4>
                <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                  Although people search for a quick IQ test because they want a short experience, speed isn&apos;t the only goal. The five-minute estimate is a guide.
                </p>
                <p className="text-xs text-[#60718B] leading-relaxed">
                  In untimed mode, you can take the time you need to understand a question. If an answer seems uncertain, review the options and choose the most defensible one.
                </p>
              </div>
            </div>

            {/* 5. Review Your Mistakes */}
            <div
              onClick={() => toggleChecklist('review')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                checklist.review
                  ? 'bg-blue-50/40 border-[#2453FF]/40 shadow-2xs'
                  : 'bg-white border-[#E2EAF7] hover:border-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checklist.review ? 'bg-[#2453FF] text-white' : 'border-2 border-slate-300'
                }`}
              >
                {checklist.review && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-extrabold text-[#07152F]">
                  5. Review Your Mistakes
                </h4>
                <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                  After submitting, take a moment to read the explanations. If you answered incorrectly, identify whether you missed a pattern, misunderstood a statement, or made a calculation error.
                </p>
                <p className="text-xs text-[#60718B] leading-relaxed">
                  Try solving the problem again without immediately looking at the answer. That process turns a simple IQ quiz into a learning activity.
                </p>
              </div>
            </div>

            {/* 6. Use Different Questions for Further Practice */}
            <div
              onClick={() => toggleChecklist('practice')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                checklist.practice
                  ? 'bg-blue-50/40 border-[#2453FF]/40 shadow-2xs'
                  : 'bg-white border-[#E2EAF7] hover:border-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checklist.practice ? 'bg-[#2453FF] text-white' : 'border-2 border-slate-300'
                }`}
              >
                {checklist.practice && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-extrabold text-[#07152F]">
                  6. Use Different Questions for Further Practice
                </h4>
                <p className="text-xs sm:text-sm text-[#60718B] leading-relaxed">
                  Repeating the same ten questions can improve your score because you remember the answers. That doesn&apos;t necessarily indicate a change in general intelligence.
                </p>
                <p className="text-xs text-[#60718B] leading-relaxed">
                  For additional practice, explore different question sets and reasoning categories. A longer assessment may offer more variety, but it still needs proper validation before its results can be interpreted as standardized IQ scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 8: QUICK IQ TEST VS. FULL IQ TEST                             */}
      {/* ===================================================================== */}
      <section id="quick-vs-full" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
            <Scale className="w-3.5 h-3.5 fill-[#2453FF]" />
            <span>Side-by-Side Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152F] tracking-tight mb-4">
            Quick IQ Test vs. Full IQ Test: Which Should You Choose?
          </h2>
          <p className="text-base sm:text-lg text-[#60718B] leading-relaxed">
            Both assessments are designed to offer free reasoning practice, but they serve different needs. Our mini IQ test is ideal when you want a short challenge. The full IQ Test offers a longer experience with more questions.
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] shadow-[0_4px_24px_rgba(7,21,47,0.03)] overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse" aria-label="Quick IQ Test vs Full IQ Test Comparison Table">
              <thead>
                <tr className="border-b border-[#E2EAF7] bg-[#F7FAFF] text-[#60718B] text-xs font-bold uppercase tracking-wider">
                  <th scope="col" className="py-4 px-6">Feature</th>
                  <th scope="col" className="py-4 px-6 font-black text-[#2453FF] bg-[#EEF2FF]/60">Quick IQ Test</th>
                  <th scope="col" className="py-4 px-6 text-[#07152F]">Full IQ Test</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7]">
                <tr>
                  <td className="py-4 px-6 font-bold text-[#07152F]">Number of questions</td>
                  <td className="py-4 px-6 font-black text-[#2453FF] bg-[#EEF2FF]/30">10</td>
                  <td className="py-4 px-6 font-semibold text-[#07152F]">20</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-[#07152F]">Estimated time</td>
                  <td className="py-4 px-6 font-black text-[#2453FF] bg-[#EEF2FF]/30">About 5 minutes</td>
                  <td className="py-4 px-6 font-semibold text-[#07152F]">About 12–15 minutes</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-[#07152F]">Main purpose</td>
                  <td className="py-4 px-6 font-semibold text-[#07152F] bg-[#EEF2FF]/30">Brief reasoning challenge</td>
                  <td className="py-4 px-6 font-semibold text-[#07152F]">Longer reasoning practice</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-[#07152F]">Reasoning categories</td>
                  <td className="py-4 px-6 font-semibold text-[#07152F] bg-[#EEF2FF]/30">Four</td>
                  <td className="py-4 px-6 font-semibold text-[#07152F]">Four</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-[#07152F]">Free results</td>
                  <td className="py-4 px-6 font-black text-emerald-600 bg-[#EEF2FF]/30">Yes</td>
                  <td className="py-4 px-6 font-black text-emerald-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-[#07152F]">Answer explanations</td>
                  <td className="py-4 px-6 font-black text-emerald-600 bg-[#EEF2FF]/30">Yes</td>
                  <td className="py-4 px-6 font-black text-emerald-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-[#07152F]">Standardized IQ score</td>
                  <td className="py-4 px-6 font-semibold text-[#60718B] bg-[#EEF2FF]/30">No</td>
                  <td className="py-4 px-6 font-semibold text-[#60718B]">No</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-[#07152F]">Best for</td>
                  <td className="py-4 px-6 font-semibold text-[#2453FF] bg-[#EEF2FF]/30">
                    Short breaks and introductory practice
                  </td>
                  <td className="py-4 px-6 font-semibold text-[#07152F]">
                    More extended practice
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Decision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-[#2453FF]/30 p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#2453FF] bg-[#EEF2FF] mb-4">
                <Zap className="w-3.5 h-3.5" />
                <span>10 Questions • ~5 Minutes</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#07152F] mb-3">
                Choose the Quick IQ Test If…
              </h3>
              <p className="text-sm text-[#60718B] leading-relaxed mb-3">
                You want to answer a few interesting questions without spending much time.
              </p>
              <p className="text-sm text-[#60718B] leading-relaxed">
                It&apos;s also a useful introduction if you&apos;re unfamiliar with reasoning puzzles or want to see how the question format works.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-slate-100">
              <button
                type="button"
                onClick={onStart}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2453FF] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#1B40DF] transition-all cursor-pointer"
              >
                <span>Take Quick IQ Test Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-slate-700 bg-slate-100 mb-4">
                <Brain className="w-3.5 h-3.5" />
                <span>20 Questions • ~12–15 Minutes</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#07152F] mb-3">
                Choose the Full IQ Test If…
              </h3>
              <p className="text-sm text-[#60718B] leading-relaxed mb-3">
                You have more time and want to work through a larger set of problems.
              </p>
              <p className="text-sm text-[#60718B] leading-relaxed">
                The longer test offers additional opportunities to explore numerical, logical, abstract, and spatial reasoning. However, completing more questions does not automatically make the full test a professionally standardized intelligence assessment.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-slate-100">
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E2EAF7] hover:bg-[#F2F7FF] text-[#07152F] text-xs sm:text-sm font-bold shadow-xs transition-all"
              >
                <span>Take the Full IQ Test</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS ABOUT QUICK IQ TESTS            */}
      {/* ===================================================================== */}
      <section id="faqs" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20 mb-3.5 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 fill-[#2453FF]" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152F] tracking-tight mb-4">
            Frequently Asked Questions About Quick IQ Tests
          </h2>
          <p className="text-base sm:text-lg text-[#60718B] leading-relaxed">
            Find answers to common questions about our 10-question assessment, scoring methodology, accuracy, and testing procedures.
          </p>
        </div>

        {/* Accessible Accordion Component */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, fIdx) => {
            const isOpen = openFaqIndex === fIdx;
            return (
              <div
                key={fIdx}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-[#2453FF]/40 shadow-sm' : 'border-[#E2EAF7] hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(fIdx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#07152F] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#EEF2FF] text-[#2453FF] rotate-180' : 'bg-slate-100 text-[#60718B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#60718B] leading-relaxed border-t border-[#F1F5F9] pt-3.5 animate-in fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 10: METHODOLOGY & SCORING TRANSPARENCY PANEL                  */}
      {/* ===================================================================== */}
      <section id="methodology" className="scroll-mt-24">
        <div className="bg-gradient-to-br from-[#07152F] to-[#0D1F42] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Scoring Methodology & Transparency</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              How We Create and Score Our Quick IQ Test
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                Our Quick IQ Test uses a fixed set of ten original reasoning questions across four categories.
              </p>
              <p>
                The assessment contains three numerical reasoning questions, three abstract reasoning questions, two logical reasoning questions, and two spatial reasoning questions.
              </p>
              <p>
                Each question has four possible answers and one correct answer.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 my-4">
                <p className="font-bold text-white text-xs uppercase tracking-wider">
                  Scoring is straightforward:
                </p>
                <ul className="space-y-1 pl-2 text-xs">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Correct answer: 1 point.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>Incorrect answer: 0 points.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Unanswered question: 0 points.</span>
                  </li>
                </ul>
              </div>

              <p>
                Your total score is calculated out of ten. Your accuracy percentage equals the number of correct answers multiplied by ten.
              </p>
              <p>
                For example, eight correct answers produce a score of 8/10, or 80%.
              </p>
              <p>
                Answer explanations describe the reasoning behind each solution.
              </p>
              <p>
                The test is intended for learning, entertainment, and informal practice. It does not use validated population norms to produce an IQ score or percentile ranking.
              </p>
              <p>
                We encourage visitors to review their answers, explore unfamiliar problem types, and use the results as feedback on this specific question set.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">
                  Ready for a short challenge?
                </p>
                <p className="text-xs text-slate-400">
                  Start your free Quick IQ Test and explore what you can learn in about five minutes.
                </p>
              </div>
              <button
                type="button"
                onClick={onStart}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2453FF] text-white text-xs sm:text-sm font-extrabold shadow-lg hover:bg-[#1B40DF] transition-all cursor-pointer"
              >
                <span>Start Free Quick IQ Test</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 11: SCIENTIFIC REFERENCES FOR THE PAGE                        */}
      {/* ===================================================================== */}
      <section id="references" className="scroll-mt-24">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#E2EAF7] p-7 sm:p-9 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <BookOpen className="w-5 h-5 text-[#2453FF]" />
            <h3 className="text-lg font-extrabold text-[#07152F]">
              Scientific References for the Page
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#60718B] mb-5 leading-relaxed">
            The article&apos;s distinction between practice scores and standardized IQ measurements is supported by these sources:
          </p>

          <div className="space-y-4">
            {/* Mensa FAQs */}
            <div className="p-4 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7] flex items-start justify-between gap-3">
              <div className="space-y-1">
                <a
                  href="https://www.mensa.org/getting-your-iq-tested-faqs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#2453FF] hover:underline flex items-center gap-1.5"
                >
                  <span>Mensa International — IQ Testing FAQs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-[#60718B]">
                  Explains why online practice tests cannot be used for Mensa qualification.
                </p>
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase shrink-0">mensa.org</span>
            </div>

            {/* Mensa Challenge */}
            <div className="p-4 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7] flex items-start justify-between gap-3">
              <div className="space-y-1">
                <a
                  href="https://www.mensa.org/mensa-iq-challenge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#2453FF] hover:underline flex items-center gap-1.5"
                >
                  <span>Mensa IQ Challenge</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-[#60718B]">
                  Demonstrates a practice assessment with explicit limitations.
                </p>
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase shrink-0">mensa.org</span>
            </div>

            {/* Standards */}
            <div className="p-4 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7] flex items-start justify-between gap-3">
              <div className="space-y-1">
                <a
                  href="https://www.testingstandards.net/uploads/7/6/6/4/76643089/standards_2014edition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#2453FF] hover:underline flex items-center gap-1.5"
                >
                  <span>Standards for Educational and Psychological Testing</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-[#60718B]">
                  Explains why evidence supporting score interpretation is essential.
                </p>
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase shrink-0">testingstandards.net</span>
            </div>

            {/* Google Helpful Content */}
            <div className="p-4 rounded-2xl bg-[#F7FAFF] border border-[#E2EAF7] flex items-start justify-between gap-3">
              <div className="space-y-1">
                <a
                  href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#2453FF] hover:underline flex items-center gap-1.5"
                >
                  <span>Google Search Central — Helpful Content</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-[#60718B]">
                  Explains Google&apos;s emphasis on original, accurate, satisfying main content, including interactive tools.
                </p>
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase shrink-0">developers.google.com</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
