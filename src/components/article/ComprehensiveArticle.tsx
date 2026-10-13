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
} from 'lucide-react';

export const ComprehensiveArticle: React.FC = () => {
  // =========================================================================
  // STATE FOR INTERACTIVE SECTIONS
  // =========================================================================

  // 1. How It Works Stepper
  const [activeStep, setActiveStep] = useState<number>(0);

  // 2. Category Explorer
  const [activeCategory, setActiveCategory] = useState<'numerical' | 'logical' | 'abstract' | 'spatial'>('numerical');

  // 4. Sample Results Tab
  const [activeResultTab, setActiveResultTab] = useState<'overall' | 'breakdown' | 'meaning' | 'limits'>('overall');

  // 5. Puzzle Laboratory (Worked Examples)
  const [activeExampleTab, setActiveExampleTab] = useState<'numerical' | 'logical' | 'abstract' | 'spatial'>('numerical');
  const [selectedExampleAnswers, setSelectedExampleAnswers] = useState<Record<string, string>>({});
  const [checkedExamples, setCheckedExamples] = useState<Record<string, boolean>>({});

  // 7. Preparation Checklist
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    env: true,
    read: true,
    time: false,
    practice: false,
    interpret: false,
  });

  const toggleChecklist = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  const navigateToTest = () => {
    window.location.href = '/test';
  };

  // =========================================================================
  // DATA CONSTANTS FOR INTERACTIVE WORKSPACES
  // =========================================================================

  const stepsData = [
    {
      step: 1,
      title: 'Start Your IQ Test',
      shortDesc: 'Choose your testing mode (untimed or 15-min practice) and begin.',
      fullText:
        "Click the Start Free IQ Test button to begin. You'll receive questions that challenge different aspects of reasoning, including number patterns, logical relationships, abstract sequences, and mental rotation. Read the instructions before choosing your answers. For the best experience, find somewhere quiet where you can concentrate without interruptions.",
      demoBadge: 'Step 1: Configuration',
      demoVisual: (
        <div className="p-5 bg-white rounded-2xl border border-[#E5EDF7] shadow-sm text-xs text-slate-700">
          <div className="font-extrabold text-[#0F172A] mb-2">Mode Selected: Untimed Practice</div>
          <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
            <CheckCircle2 className="w-4 h-4" /> Ready to challenge your reasoning
          </div>
          <div className="text-[#5B6B82]">20 Questions • ~12–15 Minutes • No Signup</div>
        </div>
      ),
    },
    {
      step: 2,
      title: 'Answer 20 Reasoning Questions',
      shortDesc: 'Explore 4 categories with single-choice verified options.',
      fullText:
        'The assessment contains 20 multiple-choice questions across four categories. Some questions involve numbers or mathematical relationships. Others ask you to identify patterns, apply logical rules, or imagine how shapes change when rotated. Each question has four possible answers, but only one is correct. Take time to understand what the question is asking. A difficult-looking puzzle may become easier once you identify its underlying rule. If the interface allows you to skip a question or return to an earlier answer, you can use those controls to manage your progress.',
      demoBadge: 'Step 2: Problem Solving',
      demoVisual: (
        <div className="p-5 bg-white rounded-2xl border border-[#E5EDF7] shadow-sm text-xs text-slate-700">
          <div className="flex justify-between items-center mb-2 font-extrabold text-[#0F172A]">
            <span>Question 7 of 20</span>
            <span className="text-[#4F46E5] font-bold">Abstract Matrix</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mb-3 overflow-hidden">
            <div className="bg-[#4F46E5] h-full w-[35%] rounded-full" />
          </div>
          <div className="text-[#5B6B82]">Choices: [A] [B] [C] [D] • Skip &amp; Flag controls available</div>
        </div>
      ),
    },
    {
      step: 3,
      title: 'Get Your IQ Test Results Instantly',
      shortDesc: 'Instant raw score (out of 20) and accuracy percentage.',
      fullText:
        'Once you finish, submit your answers to receive your free results. Your results show how many questions you answered correctly and your percentage score. For example, answering 16 of the 20 questions correctly gives you a score of 16/20, or 80%. This is your accuracy on the practice assessment. It is not equivalent to a standardized IQ of 80, 120, or any other IQ number.',
      demoBadge: 'Step 3: Score Computation',
      demoVisual: (
        <div className="p-5 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-xs text-emerald-950">
          <div className="text-2xl font-black text-emerald-700 mb-1">16 / 20 (80%)</div>
          <div className="font-bold mb-1">Empirical Accuracy Score</div>
          <div className="text-emerald-800 text-[11px]">Calculated instantly with zero payment or email gates.</div>
        </div>
      ),
    },
    {
      step: 4,
      title: 'Review Your Answers',
      shortDesc: 'Step-by-step logic and clear educational explanations.',
      fullText:
        'The most useful part of an intelligence-test practice session may be understanding why an answer is correct. Review the explanations after completing the assessment. Pay attention to the rules behind number sequences, logical conclusions, and visual patterns. If you missed several similar questions, you may have identified a skill worth practising.',
      demoBadge: 'Step 4: Deep Learning',
      demoVisual: (
        <div className="p-5 bg-[#EEF4FF] rounded-2xl border border-[#4F46E5]/20 text-xs text-indigo-950">
          <div className="font-extrabold text-[#4F46E5] mb-1">Detailed Solution Walkthrough</div>
          <div className="text-[#5B6B82] leading-relaxed">
            Examines the mathematical rule, contrapositive deduction, and matrix transformation so you learn from mistakes.
          </div>
        </div>
      ),
    },
  ];

  const categoriesData = {
    numerical: {
      title: 'Numerical Reasoning',
      subtitle: 'Identify relationships between numbers and apply mathematical rules.',
      desc: 'You may need to complete a sequence, recognise a change between values, or identify a missing number. Not all number sequences follow simple multiplication. Some alternate between operations, increase by changing intervals, or combine different mathematical rules. These questions test your ability to detect numerical relationships, rather than just recall mathematical facts.',
      exampleMath: '3, 6, 12, 24, ?',
      exampleAnswer: 'The missing number is 48 because each value is twice the previous one.',
      icon: Binary,
      color: 'border-blue-500 bg-[#EFF6FF] text-[#3B82F6]',
    },
    logical: {
      title: 'Logical and Deductive Reasoning',
      subtitle: 'Use given premises to reach necessary valid conclusions without assumptions.',
      desc: 'Logical reasoning involves using the information provided to reach a valid conclusion. In other problems, the correct answer may be that there isn’t enough information to reach a conclusion. Good logical reasoning means following the evidence, not making assumptions beyond what is given.',
      exampleMath: 'Premise 1: Every blue triangle is a polygon.\nPremise 2: Shape A is a blue triangle.\nConclusion: Shape A must be a polygon.',
      exampleAnswer: 'The answer follows directly from the two statements without speculation.',
      icon: GitBranch,
      color: 'border-purple-500 bg-[#F5F3FF] text-[#8B5CF6]',
    },
    abstract: {
      title: 'Abstract Reasoning and Pattern Recognition',
      subtitle: 'Identify structure connecting geometric symbols, shapes and rotations.',
      desc: 'Abstract reasoning questions use symbols, shapes, colours, or sequences to represent relationships. You might be asked to identify the next shape in a pattern, find a missing element, or work out how several symbols change. More difficult abstract reasoning problems can combine several rules at once, such as rotation, movement, quantity, and shape.',
      exampleMath: '● ▲ ● ▲ ● ?',
      exampleAnswer: 'The next symbol is ▲, completing the alternating two-shape structure.',
      icon: Shapes,
      color: 'border-amber-500 bg-[#FFFBEB] text-[#F59E0B]',
    },
    spatial: {
      title: 'Spatial and Visual Reasoning',
      subtitle: 'Imagine how objects rotate, reflect, and transform in 2D and 3D space.',
      desc: 'Spatial reasoning involves imagining how objects change position, orientation, or appearance. For example, imagine an arrow pointing upward. If you rotate it 90 degrees clockwise, where will it point? The answer is right. Other spatial problems may involve reflections, rotations, folded shapes, or the position of objects inside a square.',
      exampleMath: 'Arrow pointing Up → Rotated 90° clockwise → Points Right',
      exampleAnswer: 'Tests mental rotation and preserving chirality in spatial manipulation.',
      icon: Box,
      color: 'border-emerald-500 bg-[#ECFDF5] text-[#10B981]',
    },
  };

  const exampleQuestionsData = {
    numerical: {
      title: 'Example 1: Number Sequence',
      domain: 'Numerical Reasoning',
      question: 'What number comes next in the sequence: 5, 9, 15, 23, 33, ?',
      options: [
        { id: 'A', text: '41' },
        { id: 'B', text: '43' },
        { id: 'C', text: '45' },
        { id: 'D', text: '47' },
      ],
      correctId: 'C',
      explanation:
        'Look at the difference between consecutive numbers: 9 − 5 = 4; 15 − 9 = 6; 23 − 15 = 8; 33 − 23 = 10. The differences increase by two each time (+4, +6, +8, +10). The next difference is 12, giving 33 + 12 = 45. The important technique is to examine how the numbers change, rather than concentrating on their individual values.',
    },
    logical: {
      title: 'Example 2: Logical Deduction',
      domain: 'Logical Reasoning',
      question:
        'Statements:\n• All silver keys are made of metal.\n• No metal objects are made entirely of wood.\n\nWhich conclusion must be true?',
      options: [
        { id: 'A', text: 'All wooden objects are silver.' },
        { id: 'B', text: 'No silver key is made entirely of wood.' },
        { id: 'C', text: 'All metal objects are keys.' },
        { id: 'D', text: 'Some silver keys are made entirely of wood.' },
      ],
      correctId: 'B',
      explanation:
        'We know that every silver key belongs to the category of metal objects. We also know that no metal object is made entirely of wood. Therefore, a silver key cannot be made entirely of wood. The other answer choices introduce claims that are unsupported or contradict the premises.',
    },
    abstract: {
      title: 'Example 3: Abstract Pattern Recognition',
      domain: 'Abstract Reasoning',
      question: 'What symbol comes next in the series: ▲, ▲, ●, ▲, ▲, ●, ▲, ▲, ?',
      options: [
        { id: 'A', text: '▲' },
        { id: 'B', text: '●' },
        { id: 'C', text: '■' },
        { id: 'D', text: '◆' },
      ],
      correctId: 'B',
      explanation:
        'The sequence repeats in groups of three: (▲ ▲ ●), (▲ ▲ ●), (▲ ▲ ?). The missing symbol must be ● to complete the repeating group. A useful strategy for solving abstract reasoning questions is to look for short repeating units before searching for more complicated rules.',
    },
    spatial: {
      title: 'Example 4: Spatial Reasoning',
      domain: 'Spatial Reasoning',
      question:
        'A square contains a dot in its bottom-right corner. The entire square is rotated 90 degrees clockwise. Where will the dot appear?',
      options: [
        { id: 'A', text: 'Top-left corner' },
        { id: 'B', text: 'Top-right corner' },
        { id: 'C', text: 'Bottom-left corner' },
        { id: 'D', text: 'Bottom-right corner' },
      ],
      correctId: 'C',
      explanation:
        'When the square rotates clockwise, every corner moves to a new position. The bottom-right corner moves to the bottom-left. Because the dot rotates with the square, it ends up in the bottom-left corner. One way to solve spatial questions is to imagine tracking just one corner at a time.',
    },
  };

  return (
    <article className="w-full max-w-[1240px] mx-auto py-12 text-[#0F172A] leading-relaxed no-print space-y-20">
      {/* ========================================================================= */}
      {/* 1. H2: HOW DOES OUR FREE ONLINE IQ TEST WORK? (Rhythm: White Surface)     */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Simple and Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            How Does Our Free Online IQ Test Work?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            Take the test in four simple steps and get instant results.
          </p>
        </div>

        {/* 4 Interactive Connected Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stepsData.map((stepItem, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={stepItem.title}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-5.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-[#4F46E5] ring-2 ring-[#4F46E5]/15 shadow-[0_12px_28px_-6px_rgba(79,70,229,0.12)]'
                    : 'bg-white border-[#E5EDF7] hover:border-[#3B82F6]/40 hover:-translate-y-0.5 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold ${
                        isActive ? 'bg-[#4F46E5] text-white shadow-2xs' : 'bg-[#F2F7FF] text-[#4F46E5]'
                      }`}
                    >
                      {stepItem.step}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-extrabold text-[#4F46E5] bg-[#EEF4FF] px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Active Step
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-[#5B6B82] leading-relaxed">
                    {stepItem.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Demonstration Preview Card */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <span className="text-xs font-extrabold text-[#4F46E5] uppercase tracking-wider block mb-2">
              {stepsData[activeStep].demoBadge}
            </span>
            <h3 className="text-xl font-extrabold text-[#0F172A] mb-3">
              Step {stepsData[activeStep].step}: {stepsData[activeStep].title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed mb-5">
              {stepsData[activeStep].fullText}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/test"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] hover:text-[#4338CA]"
              >
                <span>Try this step in the assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="w-full">{stepsData[activeStep].demoVisual}</div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. H2: WHAT DOES THIS IQ TEST MEASURE? (Rhythm: Soft Blue Tinted Section) */}
      {/* ========================================================================= */}
      <section id="what-it-measures" className="scroll-mt-24 bg-[#F2F7FF] rounded-3xl p-6 sm:p-10 border border-[#E5EDF7]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5 shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Four Key Reasoning Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            What Does This IQ Test Measure?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            Our IQ-style assessment explores four reasoning skills: numerical reasoning, logical reasoning, abstract pattern recognition, and spatial reasoning.
          </p>
        </div>

        {/* 4 Interactive Category Selector Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {(['numerical', 'logical', 'abstract', 'spatial'] as const).map((catKey) => {
            const cat = categoriesData[catKey];
            const Icon = cat.icon;
            const isSelected = activeCategory === catKey;

            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setActiveCategory(catKey)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-white border-[#4F46E5] ring-2 ring-[#4F46E5]/15 shadow-sm'
                    : 'bg-white/80 border-[#E5EDF7] hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-3.5 ${cat.color}`}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="font-bold text-sm text-[#0F172A] mb-1">
                  {cat.title}
                </h3>
                <span className="text-[11px] font-bold text-[#4F46E5]">
                  5 Verified Questions →
                </span>
              </button>
            );
          })}
        </div>

        {/* Deep Category Reveal Card */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3.5 mb-4">
            <div className={`p-2.5 rounded-xl border ${categoriesData[activeCategory].color}`}>
              {React.createElement(categoriesData[activeCategory].icon, { className: 'w-5 h-5' })}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#0F172A]">
                {categoriesData[activeCategory].title}
              </h3>
              <p className="text-xs text-[#5B6B82]">
                {categoriesData[activeCategory].subtitle}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed mb-6">
            {categoriesData[activeCategory].desc}
          </p>

          <div className="p-4 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7] text-xs sm:text-sm">
            <span className="font-bold text-[#0F172A] block mb-1">Worked Concept Example:</span>
            <pre className="font-mono text-xs bg-white p-3 rounded-xl border border-[#E5EDF7] text-slate-800 mb-2 whitespace-pre-line shadow-2xs">
              {categoriesData[activeCategory].exampleMath}
            </pre>
            <p className="text-[#5B6B82]">
              {categoriesData[activeCategory].exampleAnswer}
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm">
          <strong>Remember:</strong> Your performance in these four categories reflects how you handled a small selection of problems. It does not provide a complete measurement of intelligence, creativity, knowledge, or real-world ability.
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. H2: WHY TAKE OUR FREE IQ TEST ONLINE? (Rhythm: White Surface + Bento) */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Why Choose Our IQ Test</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            A Smarter Way to Challenge Your Mind
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            A modern, interactive and completely free IQ-style assessment designed for learners, students and curious minds.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured Dark Navy Card */}
          <div className="md:col-span-5 bg-[#101B35] text-white p-7 rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                100% UNGATED ASSESSMENT
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Free Results Without Payment or Signup
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                You shouldn&apos;t have to discover a hidden payment requirement after finishing a test advertised as free. Our assessment is designed to provide free IQ test results without requiring a purchase, email address, or account.
              </p>
            </div>
            <div className="relative z-10 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
              <span>Zero Paywalls</span>
              <span>•</span>
              <span>Anonymous Session</span>
            </div>
            {/* Ambient subtle decorative SVG curve */}
            <svg
              className="absolute -right-6 -bottom-10 w-48 h-48 opacity-20 pointer-events-none"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="40" stroke="#06B6D4" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="25" stroke="#4F46E5" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Right 4 Bento Tiles (7 Cols) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="premium-card p-5.5 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">
                  Instant Feedback on Performance
                </h4>
                <p className="text-xs text-[#5B6B82] leading-relaxed">
                  Instead of waiting for an emailed report, you can see your accuracy immediately after submission across the four question categories.
                </p>
              </div>
            </div>

            <div className="premium-card p-5.5 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">
                  Original Questions with Explanations
                </h4>
                <p className="text-xs text-[#5B6B82] leading-relaxed">
                  Our question explanations focus on the reasoning required to solve each problem, making future practice more productive.
                </p>
              </div>
            </div>

            <div className="premium-card p-5.5 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">
                  Convenient Across Devices
                </h4>
                <p className="text-xs text-[#5B6B82] leading-relaxed">
                  You can take the online IQ test using a phone, tablet, laptop, or desktop computer with responsive, legible diagrams.
                </p>
              </div>
            </div>

            <div className="premium-card p-5.5 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">
                  Practise Different Thinking Skills
                </h4>
                <p className="text-xs text-[#5B6B82] leading-relaxed">
                  Discover which problems you enjoy and where you need focus, treating it as an enriching personal learning opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. H2: UNDERSTANDING YOUR IQ TEST RESULTS (Rhythm: Gradient Tinted Box)   */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-gradient-to-b from-[#F2F7FF] via-white to-[#F8FBFF] rounded-3xl p-6 sm:p-10 border border-[#E5EDF7]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Sample Result View</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Results Dashboard <span className="text-slate-400 font-normal text-2xl">(Illustrative)</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            The most important numbers are your total correct answers, percentage accuracy, and results across the four reasoning categories.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Interactive Sample Walkthrough
            </span>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#EEF4FF] text-[#4F46E5]">
              Illustrative Example — Not a Real User Result
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8 pb-8 border-b border-slate-100">
            {/* Left Donut */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#E2E8F0" strokeWidth="8" fill="transparent" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#4F46E5"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="62.8"
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold text-[#0F172A]">75%</span>
                  <span className="text-xs font-bold text-slate-400">Accuracy</span>
                </div>
              </div>
              <span className="text-sm font-extrabold text-[#0F172A] mt-3">15 / 20 Correct Answers</span>
            </div>

            {/* Right Metrics */}
            <div className="md:col-span-7 grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7] flex items-center justify-between">
                <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Correct
                </span>
                <span className="font-extrabold text-[#0F172A]">15</span>
              </div>
              <div className="p-3.5 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7] flex items-center justify-between">
                <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                  <X className="w-4 h-4 text-red-500" /> Incorrect
                </span>
                <span className="font-extrabold text-[#0F172A]">3</span>
              </div>
              <div className="p-3.5 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7] flex items-center justify-between">
                <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-amber-500" /> Unanswered
                </span>
                <span className="font-extrabold text-[#0F172A]">2</span>
              </div>
              <div className="p-3.5 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7] flex items-center justify-between">
                <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#4F46E5]" /> Time Taken
                </span>
                <span className="font-extrabold text-[#0F172A]">12m 26s</span>
              </div>
            </div>
          </div>

          {/* Category score progress bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-3.5 bg-[#F8FBFF] rounded-xl border border-[#E5EDF7]">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Numerical</span>
                <span className="text-blue-600">4/5 (80%)</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[80%]" />
              </div>
            </div>

            <div className="p-3.5 bg-[#F8FBFF] rounded-xl border border-[#E5EDF7]">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Logical</span>
                <span className="text-purple-600">5/5 (100%)</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full w-[100%]" />
              </div>
            </div>

            <div className="p-3.5 bg-[#F8FBFF] rounded-xl border border-[#E5EDF7]">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Abstract</span>
                <span className="text-amber-600">3/5 (60%)</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full w-[60%]" />
              </div>
            </div>

            <div className="p-3.5 bg-[#F8FBFF] rounded-xl border border-[#E5EDF7]">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Spatial</span>
                <span className="text-emerald-600">3/5 (60%)</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full w-[60%]" />
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#EEF4FF] rounded-2xl border border-[#4F46E5]/20 text-xs text-slate-700 leading-relaxed">
            <strong className="text-indigo-950 block mb-1">Accuracy Formula:</strong>
            Accuracy = (Correct Answers ÷ Total Questions) × 100 = (15 ÷ 20) × 100 = <strong>75%</strong>.
            This is your accuracy on the practice assessment. It is not equivalent to a standardized IQ score.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. H2: IQ TEST QUESTIONS AND ANSWERS: TRY THESE EXAMPLES (White Surface)  */}
      {/* ========================================================================= */}
      <section id="practice-examples" className="scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <Brain className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Practice Before You Start</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Try These Example Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            The following original practice examples demonstrate four common types of reasoning problems. Each includes an answer and explanation so you can learn the underlying technique.
          </p>
        </div>

        {/* Segmented Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(['numerical', 'logical', 'abstract', 'spatial'] as const).map((key) => {
            const isTabActive = activeExampleTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveExampleTab(key)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold capitalize transition-all ${
                  isTabActive
                    ? 'bg-[#4F46E5] text-white shadow-xs'
                    : 'bg-white border border-[#E5EDF7] text-slate-700 hover:bg-[#F2F7FF]'
                }`}
              >
                {key} Reasoning
              </button>
            );
          })}
        </div>

        {/* Active Practice Question Card */}
        {(() => {
          const currentEx = exampleQuestionsData[activeExampleTab];
          const selected = selectedExampleAnswers[activeExampleTab];
          const isChecked = checkedExamples[activeExampleTab];
          const isExCorrect = selected === currentEx.correctId;

          return (
            <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <span className="text-xs font-extrabold text-[#4F46E5] uppercase tracking-wider">
                  {currentEx.title}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {currentEx.domain}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] whitespace-pre-line mb-6">
                {currentEx.question}
              </h3>

              {/* 4 Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {currentEx.options.map((opt) => {
                  const isOptSelected = selected === opt.id;
                  let optStyle = 'bg-white border-[#E5EDF7] hover:border-slate-300';

                  if (isOptSelected) {
                    optStyle = 'bg-[#EEF4FF] border-[#4F46E5] ring-2 ring-[#4F46E5]/20 font-bold';
                  }

                  if (isChecked) {
                    if (opt.id === currentEx.correctId) {
                      optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                    } else if (isOptSelected) {
                      optStyle = 'bg-red-50 border-red-400 text-red-950';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedExampleAnswers((prev) => ({ ...prev, [activeExampleTab]: opt.id }));
                        setCheckedExamples((prev) => ({ ...prev, [activeExampleTab]: false }));
                      }}
                      className={`p-3.5 rounded-2xl border text-left flex items-center justify-between text-xs sm:text-sm transition-all ${optStyle}`}
                    >
                      <span>
                        <strong className="mr-2">{opt.id}.</strong> {opt.text}
                      </span>
                      {isChecked && opt.id === currentEx.correctId && (
                        <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action and feedback */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  disabled={!selected}
                  onClick={() => setCheckedExamples((prev) => ({ ...prev, [activeExampleTab]: true }))}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] disabled:opacity-40 transition-colors shadow-2xs"
                >
                  Check Answer
                </button>

                {isChecked && (
                  <span
                    className={`text-xs font-bold ${
                      isExCorrect ? 'text-emerald-700' : 'text-red-600'
                    }`}
                  >
                    {isExCorrect ? '✓ Correct Answer!' : '✗ Not quite. See full explanation below.'}
                  </span>
                )}
              </div>

              {/* Explanation Reveal */}
              {isChecked && (
                <div className="mt-5 p-4 rounded-2xl bg-[#EEF4FF] border border-[#4F46E5]/20 text-xs sm:text-sm text-slate-800 leading-relaxed animate-in fade-in">
                  <strong className="text-indigo-950 block mb-1">
                    Correct Answer: {currentEx.correctId} — Solution Method
                  </strong>
                  <p>{currentEx.explanation}</p>
                </div>
              )}
            </div>
          );
        })()}
      </section>

      {/* ========================================================================= */}
      {/* 6. H2: HOW ACCURATE ARE FREE ONLINE IQ TESTS? (Rhythm: Blue Tinted Section) */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-[#F2F7FF] rounded-3xl p-6 sm:p-10 border border-[#E5EDF7]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5 shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>A Realistic Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            How Accurate Are Free Online IQ Tests?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            Free online IQ tests vary widely in quality. The accuracy of an intelligence assessment depends on its design, scoring method, reliability, validity, and the population used to establish its norms.
          </p>
        </div>

        {/* Side by side comparison table */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] overflow-hidden shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Left Column: Our Practice Assessment */}
            <div className="p-6 sm:p-8 bg-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Online Practice Assessment (Our IQ Test)</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                Practice &amp; Cognitive Challenge
              </h3>
              <ul className="text-xs sm:text-sm text-[#5B6B82] space-y-3">
                <li>
                  <strong className="text-[#0F172A]">Purpose:</strong> Reasoning practice, personal curiosity, and problem-solving training.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Score:</strong> Transparent raw score (e.g. 15/20) and accuracy percentage.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Reference norms:</strong> No standardized population norms.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Validation:</strong> Transparently uncalibrated practice tool.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Best for:</strong> Learning from mistakes, puzzle solving, self-assessment.
                </li>
              </ul>
            </div>

            {/* Right Column: Standardized Clinical Tests */}
            <div className="p-6 sm:p-8 bg-[#F8FBFF]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
                <Scale className="w-3.5 h-3.5" />
                <span>Standardized IQ Assessment (Professional Tests)</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                Clinical &amp; Formal Evaluation
              </h3>
              <ul className="text-xs sm:text-sm text-[#5B6B82] space-y-3">
                <li>
                  <strong className="text-[#0F172A]">Purpose:</strong> Clinical diagnosis, educational placement, Mensa qualification.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Score:</strong> Scaled standardized IQ (mean 100, SD 15).
                </li>
                <li>
                  <strong className="text-[#0F172A]">Reference norms:</strong> Rigorously normed on representative demographic populations.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Validation:</strong> Empirically established reliability and construct validity.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Best for:</strong> Official qualifications, diagnostic and clinical settings.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Three tooltips/cards: Reliability, Validity, Standardization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
          <div className="p-4 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <strong className="text-[#0F172A] block mb-1 font-bold">Reliability</strong>
            <p className="text-[#5B6B82]">
              Concerns consistency of measurement under appropriate testing conditions across attempts.
            </p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <strong className="text-[#0F172A] block mb-1 font-bold">Validity</strong>
            <p className="text-[#5B6B82]">
              Concerns whether empirical evidence supports the interpretation of test scores for a specific purpose.
            </p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <strong className="text-[#0F172A] block mb-1 font-bold">Standardization</strong>
            <p className="text-[#5B6B82]">
              Requires defined administration conditions and comparison with calibrated population reference groups.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. H2: HOW TO PREPARE FOR AN IQ TEST (Rhythm: White Surface + Checklist)  */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <ListChecks className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Interactive Checklist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            How to Prepare for an IQ Test
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            You don&apos;t need to memorize hundreds of facts before taking a reasoning assessment. Good preparation focuses on understanding the instructions, creating suitable testing conditions, and approaching questions carefully.
          </p>
        </div>

        {/* Interactive Checklist Card */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Personal Preparation Status
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              {completedChecklistCount} of 5 Completed
            </span>
          </div>

          <div className="space-y-4">
            {[
              {
                id: 'env',
                title: 'Choose a Quiet Environment',
                desc: 'Silence unnecessary notifications, close distracting applications, and make sure your device is working properly. Avoid starting when you’re extremely tired or likely to be interrupted.',
              },
              {
                id: 'read',
                title: 'Read Every Question Carefully',
                desc: 'Many reasoning mistakes happen because people misunderstand a condition or overlook a small detail. Before selecting an answer, identify what the question is asking.',
              },
              {
                id: 'time',
                title: 'Manage Your Time',
                desc: 'If you’re using a timed mode, avoid spending too long on one difficult question. If you’re using an untimed mode, concentrate on understanding the problem rather than rushing.',
              },
              {
                id: 'practice',
                title: 'Practise Different Types of Reasoning Questions',
                desc: 'Practising unfamiliar question formats can help reduce confusion. Try number sequences, abstract patterns, deductions, and spatial puzzles.',
              },
              {
                id: 'interpret',
                title: 'Avoid Overinterpreting One Result',
                desc: 'A single practice score is a narrow snapshot of your performance. Intellectual abilities are complex, and no short quiz captures everything a person can achieve.',
              },
            ].map((item) => {
              const isDone = checklist[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className={`p-4.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 ${
                    isDone
                      ? 'bg-[#F8FBFF] border-[#E5EDF7]'
                      : 'bg-white border-[#E5EDF7] hover:border-[#3B82F6]/50 shadow-2xs hover:-translate-y-0.5'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isDone
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isDone && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm mb-1 ${isDone ? 'text-slate-800' : 'text-[#0F172A]'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5B6B82] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. H2: WHAT IS AN IQ TEST? (Rhythm: Blue Tinted Educational Section)       */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-[#F2F7FF] rounded-3xl p-6 sm:p-10 border border-[#E5EDF7]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5 shadow-2xs">
            <Info className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Educational Explainer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            What Is an IQ Test, and How Is IQ Measured?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            An IQ test is an assessment designed to measure selected cognitive abilities. IQ stands for <em>intelligence quotient</em>.
          </p>
        </div>

        {/* Scientific Bell Curve SVG Visualization */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)] mb-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Standard Normal Distribution (Gaussian Curve)
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#EEF4FF] text-[#4F46E5]">
              Mean: 100 • Standard Deviation: 15
            </span>
          </div>

          {/* SVG Diagram */}
          <div className="p-4 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7] mb-6">
            <svg viewBox="0 0 500 220" className="w-full h-auto max-h-56">
              <line x1="50" y1="180" x2="450" y2="180" stroke="#94A3B8" strokeWidth="2" />
              <path
                d="M 183 180 Q 216 110 250 30 Q 284 110 317 180 Z"
                fill="#EEF4FF"
              />
              <path
                d="M 50 178 Q 150 176 200 130 Q 235 60 250 30 Q 265 60 300 130 Q 350 176 450 178"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <line x1="250" y1="30" x2="250" y2="180" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4,3" />

              <text x="116" y="200" fill="#64748B" fontSize="11" textAnchor="middle">70 (-2σ)</text>
              <text x="183" y="200" fill="#64748B" fontSize="11" textAnchor="middle">85 (-1σ)</text>
              <text x="250" y="200" fill="#0F172A" fontSize="13" fontWeight="bold" textAnchor="middle">100 (Mean)</text>
              <text x="317" y="200" fill="#64748B" fontSize="11" textAnchor="middle">115 (+1σ)</text>
              <text x="384" y="200" fill="#64748B" fontSize="11" textAnchor="middle">130 (+2σ)</text>

              <text x="250" y="115" fill="#4338CA" fontSize="13" fontWeight="bold" textAnchor="middle">68.2% of Population</text>
            </svg>
            <p className="text-[11px] text-center text-[#5B6B82] mt-2 font-medium">
              Illustrative Standardized Scale — Not our practice assessment scoring formula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
            <div>
              <h4 className="font-bold text-[#0F172A] mb-1">Standardized Intelligence Scales</h4>
              <p>
                On many standardized scales, the average score is set at 100 with a standard deviation of 15. Roughly two-thirds of scores fall between 85 and 115. That statistical information describes a standardized scale and cannot be applied automatically to raw online quiz results.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#0F172A] mb-1">What IQ Tests Cannot Fully Measure</h4>
              <p>
                Intelligence is broader than performance on a small group of puzzles. IQ tests do not provide a complete description of someone’s creativity, motivation, practical judgment, personality, or personal worth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. H2: CAN YOU IMPROVE YOUR PERFORMANCE? (Rhythm: White Surface + Pathway)*/}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Continuous Improvement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Can You Improve Your IQ Test Performance?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            You can often become better at solving familiar types of reasoning questions through practice, feedback, and improved strategies.
          </p>
        </div>

        {/* 4 Connected Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 font-extrabold text-xs flex items-center justify-center mb-3">
              1
            </span>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
              Learn Common Patterns
            </h3>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Practise checking differences, multiplication rules, shape counts, and identifying valid deductive conclusions.
            </p>
          </div>

          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 font-extrabold text-xs flex items-center justify-center mb-3">
              2
            </span>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
              Review Incorrect Answers
            </h3>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Examine your mistakes to understand whether you misunderstood instructions, rushed, or missed an underlying rule.
            </p>
          </div>

          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 font-extrabold text-xs flex items-center justify-center mb-3">
              3
            </span>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
              Practise Varied Questions
            </h3>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Use different question sets and unfamiliar problems rather than repeating only your favourite type.
            </p>
          </div>

          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-extrabold text-xs flex items-center justify-center mb-3">
              4
            </span>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
              Focus on Learning
            </h3>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              A percentage score describes accuracy, but explanations show you how to think through problems effectively.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. H2: EXPLORE MORE RESOURCES (Rhythm: Soft Blue Tinted Directory)       */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-[#F2F7FF] rounded-3xl p-6 sm:p-10 border border-[#E5EDF7]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Learning Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Explore More IQ Tests and Learning Resources
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            If you enjoy our main online IQ test, these related tools and guides are natural next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {[
            {
              title: 'Quick IQ Test',
              desc: 'Short on time? A concise reasoning challenge for visitors wanting a brief practice session.',
              icon: Zap,
              color: 'text-amber-600 bg-amber-50',
            },
            {
              title: 'IQ Practice Questions',
              desc: 'Explore additional IQ test questions with step-by-step answers and explanations.',
              icon: BookOpen,
              color: 'text-blue-600 bg-blue-50',
            },
            {
              title: 'Logical Reasoning Test',
              desc: 'Focus on deductive thinking, relationships between statements, and formal logic.',
              icon: GitBranch,
              color: 'text-purple-600 bg-purple-50',
            },
            {
              title: 'Abstract Reasoning Test',
              desc: 'Challenge yourself with visual sequences, geometric patterns, and rule-based problems.',
              icon: Shapes,
              color: 'text-[#4F46E5] bg-[#EEF4FF]',
            },
            {
              title: 'IQ Score Chart',
              desc: 'Learn how standardized IQ score ranges are commonly interpreted and why norms matter.',
              icon: Scale,
              color: 'text-cyan-600 bg-cyan-50',
            },
            {
              title: 'IQ Percentile Calculator',
              desc: 'Explore how a percentile estimate depends on the scoring scale and assumptions used.',
              icon: TrendingUp,
              color: 'text-emerald-600 bg-emerald-50',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="premium-card p-5.5 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 ${item.color}`}>
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0F172A] mb-1.5 flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#4F46E5] group-hover:translate-x-0.5 transition-all" />
                  </h3>
                  <p className="text-xs text-[#5B6B82] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-center text-slate-400 italic">
          *These are separate supporting resources. Links will be activated as each page is published.*
        </p>
      </section>

      {/* ========================================================================= */}
      {/* 11. H2: FREQUENTLY ASKED QUESTIONS ABOUT IQ TESTS (White Accordion)       */}
      {/* ========================================================================= */}
      <section id="faq" className="scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Frequently Asked Questions About IQ Tests
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            Everything you need to know about our free practice assessment, scoring methods, and validity.
          </p>
        </div>

        <div className="space-y-3.5 max-w-3xl mx-auto">
          {[
            {
              q: 'Is this IQ test completely free?',
              a: 'Yes. Our online IQ-style practice test is designed to be free from beginning to end. You can answer the questions and receive your basic results without paying or subscribing. The feedback includes your correct-answer count, percentage score, and reasoning category breakdown. Remember that these are practice results, not a professionally standardized IQ measurement.',
            },
            {
              q: 'Will I get my IQ test results instantly?',
              a: 'Yes. After you submit your answers, the assessment calculates your results immediately. You can see how many questions you answered correctly and review your performance across different reasoning categories. The results explain your performance on this particular question set rather than assigning an unsupported clinical IQ number.',
            },
            {
              q: 'How can I test my IQ online?',
              a: 'To explore your reasoning skills, start the free online test above and answer its 20 questions. You’ll encounter numerical, logical, abstract, and spatial reasoning problems. Once finished, submit your answers and review your results. If you need an official or professionally interpretable IQ score, choose an appropriately standardized assessment administered under suitable conditions.',
            },
            {
              q: 'Do I need an email address or account to take the test?',
              a: 'No. The basic IQ-style assessment is designed to work without mandatory registration or email collection. You can begin the questions and view your results without creating a profile. For details about any technical storage used to preserve your test progress, consult the website’s privacy policy.',
            },
            {
              q: 'How many questions are in this IQ test?',
              a: 'The main assessment contains 20 multiple-choice questions. Five questions focus on numerical reasoning, five on logical reasoning, five on abstract patterns, and five on spatial reasoning. Each question has four answer choices. The assessment provides an accessible introduction to these problem types, but its short length limits the conclusions that can be drawn from the results.',
            },
            {
              q: 'Can I take the IQ test more than once?',
              a: 'Yes, you can restart the practice assessment. Retaking questions can help you review reasoning techniques and understand earlier mistakes. However, your score may improve because you remember questions or answers. For more useful practice, try new questions and different problem types rather than comparing repeated attempts on exactly the same set.',
            },
            {
              q: 'Does this online test tell me my exact IQ score?',
              a: 'No. The assessment measures your accuracy on 20 reasoning questions and provides explanatory feedback. It has not been established as a standardized IQ measurement. An exact-looking IQ number would require appropriate scoring norms and scientific validation. For a formally interpretable intelligence assessment, consult a qualified professional or an organization that provides approved testing.',
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-[#E5EDF7] bg-white p-5.5 transition-all shadow-2xs open:shadow-xs hover:border-[#3B82F6]/40"
            >
              <summary className="cursor-pointer text-sm sm:text-base font-bold text-[#0F172A] list-none flex items-center justify-between">
                <span>{faq.q}</span>
                <span className="text-[#3B82F6] group-open:rotate-180 transition-transform ml-2 shrink-0 font-bold">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-[#5B6B82] leading-relaxed pt-3 border-t border-slate-100">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. H2: ABOUT THIS ASSESSMENT AND OUR SCORING METHOD (Trust Panel)         */}
      {/* ========================================================================= */}
      <section className="p-8 sm:p-12 bg-[#101B35] text-white rounded-3xl shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
            METHODOLOGY &amp; ETHICS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            About This Assessment and Our Scoring Method
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            Our online IQ-style assessment was designed to make reasoning practice accessible and understandable. The test contains 20 questions divided evenly across numerical, logical, abstract, and spatial reasoning.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            Every correct answer earns one point. Incorrect or unanswered questions earn zero points. The final percentage is calculated by dividing the number of correct answers by 20 and multiplying by 100. Category scores show how many of the five questions in each category you answered correctly.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
            The assessment is intended for practice, personal interest, and learning. It is not standardized against a representative population, and its results should not be used for educational placement, clinical diagnosis, employment decisions, or membership qualification.
          </p>

          <div className="pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm font-bold text-white">
              Challenge your thinking. Learn from your answers. Start your free IQ test today.
            </p>
            <Link
              href="/test"
              className="cta-glow px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#4F46E5] to-[#4338CA] hover:from-[#4338CA] hover:to-[#3730A3] transition-colors shrink-0 shadow-md inline-flex items-center justify-center"
            >
              Start Free IQ Test
            </Link>
          </div>
        </div>

        {/* Ambient subtle glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#4F46E5]/20 blur-[100px] pointer-events-none rounded-full" />
      </section>
    </article>
  );
};
