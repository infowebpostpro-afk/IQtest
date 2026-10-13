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
      shortDesc: 'Select your preferred challenge mode and prepare your testing space.',
      fullText:
        "Select either the Untimed Practice Mode or the 15-Minute Timed Mode to match your learning goals. Untimed mode allows deep analytical contemplation of complex relationships without clock pressure, making it ideal for puzzle exploration and cognitive training. The timed mode introduces realistic pacing constraints to simulate standard psychometric assessment conditions. For optimal focus, minimize external noise, mute desktop notifications, and ensure reliable hardware before beginning.",
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
      shortDesc: 'Work through 4 core cognitive domains with single-choice verified options.',
      fullText:
        'The assessment presents 20 original, peer-reviewed multiple-choice problems evenly balanced across four domains: numerical reasoning, logical deduction, abstract pattern recognition, and 3D spatial thinking. Every question provides exactly four single-choice alternatives (A, B, C, D) with only one mathematically or logically defensible answer. Interactive navigation features enable you to flag demanding items for second review or jump between problems dynamically.',
      demoBadge: 'Step 2: Problem Solving',
      demoVisual: (
        <div className="p-5 bg-white rounded-2xl border border-[#E5EDF7] shadow-sm text-xs text-slate-700">
          <div className="flex justify-between items-center mb-2 font-extrabold text-[#0F172A]">
            <span>Question 8 of 20</span>
            <span className="text-indigo-600 font-bold">Logical Reasoning</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mb-3 overflow-hidden">
            <div className="bg-[#4F46E5] h-full w-[40%]" />
          </div>
          <div className="text-[#5B6B82]">4 Single-Choice Options • Flag for Review Available</div>
        </div>
      ),
    },
    {
      step: 3,
      title: 'Get Your Results Instantly',
      shortDesc: 'Receive immediate transparent raw scores and category breakdown metrics.',
      fullText:
        'Upon completing or submitting your assessment, your answers are calculated immediately in your browser. We present your raw score (e.g. 16 out of 20), your overall percentage accuracy, and individual category diagnostic totals. Unlike commercial lead-generation sites that lock scores behind paid paywalls, subscriptions, or required email forms, our results are presented freely, immediately, and transparently on-screen.',
      demoBadge: 'Step 3: Instant Calculation',
      demoVisual: (
        <div className="p-5 bg-white rounded-2xl border border-[#E5EDF7] shadow-sm text-xs text-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="font-extrabold text-2xl text-[#0F172A]">80%</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
              Strong Performance
            </span>
          </div>
          <div className="text-[#5B6B82]">Raw Score: 16 / 20 Correct • Anonymous Local Session</div>
        </div>
      ),
    },
    {
      step: 4,
      title: 'Review Your Answers',
      shortDesc: 'Examine detailed step-by-step logic and clear educational walkthroughs.',
      fullText:
        'True cognitive advancement occurs during post-assessment analysis. You can inspect all 20 questions in detail to compare your selections against the verified correct answers. Every question includes a comprehensive explanation outlining the underlying rule, common cognitive traps, and alternative reasoning paths. You can also print or export your diagnostic summary for personal study.',
      demoBadge: 'Step 4: Answer Review',
      demoVisual: (
        <div className="p-5 bg-white rounded-2xl border border-[#E5EDF7] shadow-sm text-xs text-slate-700">
          <div className="flex items-center gap-2 text-indigo-700 font-bold mb-1">
            <BookOpen className="w-4 h-4" /> Comprehensive Answer Review
          </div>
          <div className="text-[#5B6B82]">
            Detailed rationale, mathematical formulas, and visual proofs for every problem.
          </div>
        </div>
      ),
    },
  ];

  const categoriesData = {
    numerical: {
      icon: Binary,
      title: 'Numerical Reasoning',
      subtitle: 'Identify relationships between numbers, sequence progressions, and mathematical rules.',
      color: 'bg-blue-50 border-blue-200 text-blue-700',
      badgeColor: 'bg-blue-100 text-blue-800',
      desc: 'Numerical reasoning evaluates your ability to perceive patterns, calculate differences, and deduce governing arithmetic functions rather than testing rote textbook memorization. Typical challenges include linear sequences, exponential progressions, alternating operators, nested fibonacci-style relationships, and interleaved numerical streams. Success requires recognizing whether step differences expand by constant multipliers, prime progressions, or polynomial rules.',
      exampleMath: 'Sequence: 3, 7, 15, 31, 63, ?\nRule: Each number doubles and adds 1 [x(n) = 2x(n-1) + 1].\nStep Analysis: 3*2+1=7; 7*2+1=15; 15*2+1=31; 31*2+1=63; 63*2+1=127.',
      exampleAnswer: 'The correct missing value is 127.',
    },
    logical: {
      icon: GitBranch,
      title: 'Logical and Deductive Reasoning',
      subtitle: 'Analyze premises, conditional syllogisms, and evaluate valid deductive conclusions.',
      color: 'bg-purple-50 border-purple-200 text-purple-700',
      badgeColor: 'bg-purple-100 text-purple-800',
      desc: 'Logical and deductive reasoning measures your skill in deriving mathematically certain inferences from stated constraints. Rather than relying on subjective intuition or external world knowledge, questions assess formal propositional logic, contraposition (Modus Tollens), transitive rankings, and categorical syllogisms. You must isolate premises strictly as given, separate assumptions from verified deductions, and systematically discard invalid fallacies.',
      exampleMath: 'Premise 1: All research analysts possess high quantitative literacy.\nPremise 2: Some project coordinators are research analysts.\nDeduction: It necessarily follows that some project coordinators possess high quantitative literacy.',
      exampleAnswer: 'Valid deduction confirmed through formal set inclusion and Venn intersection.',
    },
    abstract: {
      icon: Shapes,
      title: 'Abstract Reasoning & Pattern Recognition',
      subtitle: 'Discover geometric transformations, matrix rules, and visual topological sequences.',
      color: 'bg-amber-50 border-amber-200 text-amber-700',
      badgeColor: 'bg-amber-100 text-amber-800',
      desc: 'Abstract reasoning represents the cleanest metric of fluid intelligence (Gf)—the capacity to solve novel problems independent of language, formal education, or cultural background. Puzzles feature 2×2 or 3×3 matrix grids, progressive row series, and shape transformations. Operators include vertex rotation (45°/90°/180°), alternating shading inversions, element addition/subtraction, and Boolean superposition (XOR logical cancellations).',
      exampleMath: 'Grid Matrix Rule (Row Progression):\nColumn 1: 3-sided polygon with light fill.\nColumn 2: 4-sided polygon with partial fill.\nColumn 3: 5-sided polygon with complete inverted fill.',
      exampleAnswer: 'The missing cell requires an inverted 5-sided pentagon.',
    },
    spatial: {
      icon: Box,
      title: 'Spatial and Visual Reasoning',
      subtitle: 'Mentally rotate 3D objects, project orthographic profiles, and fold cube nets.',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      desc: 'Spatial reasoning assesses your ability to mentally manipulate, rotate, and reconstruct two- and three-dimensional representations. Cognitive tasks include identifying mirror reflections versus rigid planar rotations (the Shepard-Metzler mental rotation paradigm), folding 2D planar cross nets into 3D cubes, tracing coordinates across wrapped surfaces, and predicting orthographic side projections of complex stepped structures.',
      exampleMath: 'Mental Folding Task: When a 6-face cross net is folded into a 3D cube, faces that are separated by one intervening face must become opposite each other and can never be adjacent.',
      exampleAnswer: 'Adjacent faces in the 3D model confirm exact surface orientation without distortion.',
    },
  };

  const puzzleExamples = {
    numerical: {
      badge: 'Numerical Sequence Challenge',
      question: 'What number logically completes the sequence: 5, 9, 15, 23, 33, ?',
      options: [
        { id: 'A', text: '41' },
        { id: 'B', text: '43' },
        { id: 'C', text: '45' },
        { id: 'D', text: '47' },
      ],
      correctId: 'C',
      explanation:
        'Examine the first differences between consecutive terms: 9 - 5 = +4; 15 - 9 = +6; 23 - 15 = +8; 33 - 23 = +10. The difference sequence (+4, +6, +8, +10) increases by 2 at each step. Therefore, the next interval is +12. Adding 12 to 33 yields 45.',
    },
    logical: {
      badge: 'Deductive Syllogism',
      question:
        'Rule: If the pressure monitor triggers an alert, the emergency cooling valve opens. Observation: The emergency cooling valve remains closed. What can be deduced?',
      options: [
        { id: 'A', text: 'The pressure monitor triggered an alert but the valve failed.' },
        { id: 'B', text: 'The pressure monitor did not trigger an alert.' },
        { id: 'C', text: 'The emergency cooling system is fully functioning.' },
        { id: 'D', text: 'No certain conclusion can be drawn without sensor logs.' },
      ],
      correctId: 'B',
      explanation:
        'This represents the classical logical rule of Modus Tollens (denying the consequent): If P → Q, then ¬Q → ¬P. Since the valve is closed (¬Q), it is logically impossible for the alert to have triggered (¬P). Therefore, the alert did not trigger.',
    },
    abstract: {
      badge: 'Abstract Matrix Progression',
      question:
        'In a horizontal 3-frame sequence: Frame 1 shows an equilateral triangle pointing up. Frame 2 shows a square. Frame 3 shows a regular pentagon. How many sides must the subsequent shape possess?',
      options: [
        { id: 'A', text: '5 sides (Pentagon with inverted orientation)' },
        { id: 'B', text: '6 sides (Regular Hexagon)' },
        { id: 'C', text: '7 sides (Regular Heptagon)' },
        { id: 'D', text: '8 sides (Regular Octagon)' },
      ],
      correctId: 'B',
      explanation:
        'The primary governing invariant is an incremental edge-count sequence: 3 sides (triangle) → 4 sides (square) → 5 sides (pentagon). The next frame logically requires 6 sides, which constitutes a regular hexagon.',
    },
    spatial: {
      badge: 'Mental Rotation Task',
      question:
        'A square tile with a dark circular marker in its top-left corner is rotated 90° clockwise in planar space. Where is the marker located?',
      options: [
        { id: 'A', text: 'Bottom-left corner' },
        { id: 'B', text: 'Bottom-right corner' },
        { id: 'C', text: 'Top-right corner' },
        { id: 'D', text: 'Center position' },
      ],
      correctId: 'C',
      explanation:
        'A 90° clockwise rotation shifts coordinates: top-left transitions to top-right, top-right transitions to bottom-right, bottom-right transitions to bottom-left, and bottom-left returns to top-left. Tracking the top-left marker reveals it settles in the top-right corner.',
    },
  };

  return (
    <article className="w-full max-w-[1240px] mx-auto py-12 text-[#0F172A] leading-relaxed no-print space-y-20">
      {/* ========================================================================= */}
      {/* 1. H2: HOW DOES OUR FREE ONLINE IQ TEST WORK?                             */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Simple and Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            How Does Our Free Online IQ Test Work?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            Taking an online cognitive assessment should be clear, instructive, and completely free from misleading friction. Our platform streamlines the testing experience into four structured phases designed to test your logical, mathematical, abstract, and visual problem-solving abilities without barriers.
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

        {/* Active Step Detailed Card */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-[#EEF4FF] text-[#4F46E5] mb-3">
                {stepsData[activeStep].demoBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3">
                {stepsData[activeStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed mb-5">
                {stepsData[activeStep].fullText}
              </p>
              <Link
                href="/test"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#4F46E5] hover:text-[#4338CA] group"
              >
                <span>Try this step in the assessment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="w-full lg:w-80 flex-none">{stepsData[activeStep].demoVisual}</div>
          </div>
        </div>

        {/* Editorial Subsections for Step Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
          <div className="p-6 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7]">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Test Architecture & Pacing Strategy</h4>
            <p>
              The assessment uses a 20-item progressive battery arranged to measure core analytical faculties. In timed mode, allocating approximately 45 seconds per question helps maintain steady cognitive momentum. Because every problem provides four clear choices with exactly one valid solution, avoiding blind guessing and prioritizing systematic process-of-elimination leads to the highest analytical fidelity.
            </p>
          </div>
          <div className="p-6 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7]">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Metacognitive Review & Error Analysis</h4>
            <p>
              Unlike traditional quizzes that only present a final summary number, our platform encourages post-assessment metacognition. Reviewing incorrect choices reveals whether errors stemmed from arithmetic miscalculations, confusing correlation with causation in logic, or rotating shapes across the wrong axis in spatial puzzles.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. H2: WHAT DOES THIS IQ TEST MEASURE?                                    */}
      {/* ========================================================================= */}
      <section id="what-it-measures" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <Brain className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Four Key Reasoning Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            What Does This IQ Test Measure?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            Standardized psychometric research, including the Cattell-Horn-Carroll (CHC) theory of cognitive capabilities, demonstrates that general intelligence reflects multiple interrelated abilities. Our assessment examines four specific cognitive domains using 20 balanced, non-verbal and deductive questions.
          </p>
        </div>

        {/* 4 Category Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {(['numerical', 'logical', 'abstract', 'spatial'] as const).map((catKey) => {
            const cat = categoriesData[catKey];
            const isSelected = activeCategory === catKey;
            const IconComponent = cat.icon;
            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setActiveCategory(catKey)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-white border-[#4F46E5] ring-2 ring-[#4F46E5]/15 shadow-md'
                    : 'bg-white border-[#E5EDF7] hover:border-[#3B82F6]/40 shadow-2xs'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${cat.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#0F172A] mb-1">{cat.title}</h3>
                <span className="text-[11px] font-bold text-[#4F46E5]">5 Verified Questions →</span>
              </button>
            );
          })}
        </div>

        {/* Deep Category Reveal Card */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] mb-8">
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

        {/* Detailed Educational Breakdown Across All 4 Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#5B6B82] leading-relaxed mb-6">
          <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Fluid Intelligence ($G_f$) &amp; Novel Problem Solving</h4>
            <p>
              Abstract and spatial tasks directly probe fluid intelligence—the raw capacity to identify patterns and reason logically without relying on previously learned vocabulary, culture, or formal schooling. By emphasizing matrix transformations and topological folding, the test minimizes linguistic bias and isolates foundational visual problem-solving faculties.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Quantitative &amp; Deductive Processing ($G_q$ &amp; $G_l$)</h4>
            <p>
              Numerical sequences and formal propositional syllogisms evaluate your capacity to maintain working memory buffers while testing multiple competing hypotheses. You must identify whether rules operate along single or interleaved dimensions, verifying deductive inferences with mathematical precision.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm">
          <strong>Important Psychometric Distinction:</strong> Performance across these four practice domains reflects how you solved 20 specific reasoning tasks. It provides useful training insights, but it is not an all-encompassing measure of creative talent, practical common sense, emotional intelligence, or professional capability.
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. H2: WHY TAKE OUR FREE IQ TEST ONLINE?                                  */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Why Choose Our Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Why Take Our Free IQ Test Online?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            Online cognitive testing is often frustrating. Many commercial websites promise a free test, only to demand credit card payments or email submissions on question 20. We built a completely transparent, open-access platform committed to genuine cognitive education.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          {/* Featured Card */}
          <div className="md:col-span-5 bg-[#101B35] text-white p-7 rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                100% UNGATED ASSESSMENT
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Free Results Without Hidden Paywalls
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                You should never encounter a payment gate or subscription prompt after spending 15 minutes solving challenging reasoning puzzles. Our scoring engine delivers your raw score and accuracy breakdown immediately upon completion without requiring an email address or purchase.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 pt-4 border-t border-slate-700/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Paywalls • Anonymous Local Session</span>
            </div>
          </div>

          {/* 4 Supporting Feature Cards */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="premium-card p-6 rounded-3xl">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">
                Instant Cognitive Feedback
              </h4>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Receive instant accuracy ratings across each of the four categories the second you submit. Review questions immediately while your reasoning steps are fresh in memory.
              </p>
            </div>

            <div className="premium-card p-6 rounded-3xl">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">
                Educational Walkthroughs
              </h4>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Every problem is paired with a clear, step-by-step mathematical or logical proof. You understand not just what option was correct, but the exact mechanism that governs it.
              </p>
            </div>

            <div className="premium-card p-6 rounded-3xl">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Smartphone className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">
                Responsive Vector Graphics
              </h4>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Enjoy crisp, resolution-independent SVG diagrams on phones, tablets, and desktop displays. Visual puzzles scale cleanly to prevent distortion or eye strain.
              </p>
            </div>

            <div className="premium-card p-6 rounded-3xl">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">
                Targeted Skill Practice
              </h4>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Identify your relative strengths and growth opportunities across numerical, logical, abstract, and spatial domains to guide your ongoing mental training.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Narrative on Ethical Testing */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E5EDF7] shadow-2xs text-xs sm:text-sm text-[#5B6B82] leading-relaxed space-y-3">
          <h4 className="font-bold text-sm text-[#0F172A]">The Need for Honest, Ethical Cognitive Assessment</h4>
          <p>
            The internet is crowded with commercial quiz funnels disguised as official intelligence testing. These sites often use inflated, fabricated scores to flatter visitors into purchasing overpriced PDF certificates. Our mission is entirely different: we provide honest, transparent cognitive reasoning challenges built for curious minds, students, and lifelong learners who simply want to test and sharpen their problem-solving skills.
          </p>
          <p>
            By offering a private, unnormed educational assessment with transparent scoring formulas, we protect user privacy and establish realistic expectations regarding what online practice tests can and cannot measure.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. H2: UNDERSTANDING YOUR IQ TEST RESULTS                                 */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-gradient-to-b from-[#F2F7FF] via-white to-[#F8FBFF] rounded-3xl p-6 sm:p-10 border border-[#E5EDF7]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Sample Result View</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Understanding Your IQ Test Results
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            Interpreting test metrics properly is essential for meaningful self-assessment. Our diagnostic dashboard breaks down your performance into transparent raw counts, accuracy percentages, and category-level diagnostics.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)] mb-8">
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
                  <Clock className="w-4 h-4 text-blue-500" /> Time Taken
                </span>
                <span className="font-extrabold text-[#0F172A]">12m 26s</span>
              </div>
            </div>
          </div>

          {/* Category Breakdown Horizontal Bars */}
          <div className="space-y-3.5 mb-6">
            <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Category Performance Breakdown
            </h4>
            {[
              { label: 'Numerical Reasoning', score: '4/5', pct: '80%', w: 'w-[80%]', col: 'bg-blue-600' },
              { label: 'Logical Deduction', score: '5/5', pct: '100%', w: 'w-[100%]', col: 'bg-purple-600' },
              { label: 'Abstract Matrices', score: '3/5', pct: '60%', w: 'w-[60%]', col: 'bg-amber-500' },
              { label: 'Spatial Visualization', score: '3/5', pct: '60%', w: 'w-[60%]', col: 'bg-emerald-600' },
            ].map((catBar) => (
              <div key={catBar.label} className="text-xs sm:text-sm">
                <div className="flex justify-between font-semibold text-[#0F172A] mb-1">
                  <span>{catBar.label}</span>
                  <span className="font-extrabold">{catBar.score} ({catBar.pct})</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className={`${catBar.col} h-full ${catBar.w} rounded-full`} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Transparent Formula:</strong> Accuracy = (Correct Answers ÷ Total Questions) × 100 = (15 ÷ 20) × 100 = 75%. This is a direct measure of your performance on this practice set. It is not a clinical or standardized IQ score.
          </div>
        </div>

        {/* In-Depth Interpretive Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
          <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Raw Score vs. Standardized Deviation IQ</h4>
            <p>
              A raw score simply tallies how many items you answered correctly. In contrast, a standardized IQ score represents a relative placement on a Gaussian normal distribution with an established mean of 100 and a standard deviation of 15. Converting a raw score into a meaningful deviation IQ requires administering the test to a large, statistically representative population sample stratified by age, education, and demographic factors.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">What Your Practice Scores Cannot Tell You</h4>
            <p>
              Human intelligence is multifaceted. A 20-question online practice set provides insight into your reasoning on specific logic and visual puzzles, but it does not reflect verbal eloquence, creative problem solving, social intelligence, resilience, or real-world decision making. Treat your score as an engaging benchmark for learning, not a definition of your intellectual boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. H2: IQ TEST QUESTIONS AND ANSWERS (WORKED EXAMPLES)                    */}
      {/* ========================================================================= */}
      <section id="practice-questions" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Practice Before You Start</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            IQ Test Questions and Answers: Worked Examples
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            Reviewing worked problems is one of the most effective ways to understand cognitive testing formats. Explore these four representative examples with complete solution walkthroughs.
          </p>
        </div>

        {/* Tabs for Category Switch */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {(['numerical', 'logical', 'abstract', 'spatial'] as const).map((catKey) => {
            const isSelected = activeExampleTab === catKey;
            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setActiveExampleTab(catKey)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all ${
                  isSelected
                    ? 'bg-[#4F46E5] text-white shadow-sm'
                    : 'bg-white border border-[#E5EDF7] text-slate-700 hover:bg-slate-50'
                }`}
              >
                {catKey} Reasoning
              </button>
            );
          })}
        </div>

        {/* Puzzle Card */}
        {(() => {
          const currentEx = puzzleExamples[activeExampleTab];
          const selected = selectedExampleAnswers[activeExampleTab];
          const isChecked = checkedExamples[activeExampleTab];
          const isExCorrect = selected === currentEx.correctId;

          return (
            <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] mb-8">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {currentEx.badge}
                </span>
                <span className="text-xs font-semibold text-slate-400 capitalize">
                  {activeExampleTab} Domain
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-5">
                {currentEx.question}
              </h3>

              {/* 4 Interactive Choice Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {currentEx.options.map((opt) => {
                  const isOptSelected = selected === opt.id;
                  let btnStyle = 'bg-[#F8FBFF] border-[#E5EDF7] text-slate-800 hover:border-slate-300';

                  if (isChecked) {
                    if (opt.id === currentEx.correctId) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                    } else if (isOptSelected) {
                      btnStyle = 'bg-red-50 border-red-400 text-red-900 line-through';
                    }
                  } else if (isOptSelected) {
                    btnStyle = 'bg-white border-[#4F46E5] ring-2 ring-[#4F46E5]/20 text-[#4F46E5] font-bold';
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={isChecked}
                      onClick={() =>
                        setSelectedExampleAnswers((prev) => ({ ...prev, [activeExampleTab]: opt.id }))
                      }
                      className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm flex items-center justify-between transition-all ${btnStyle}`}
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
                    {isExCorrect ? '✓ Correct Answer!' : '✗ Incorrect. See the full step-by-step logic below.'}
                  </span>
                )}
              </div>

              {/* Explanation Reveal */}
              {isChecked && (
                <div className="mt-5 p-4 rounded-2xl bg-[#EEF4FF] border border-[#4F46E5]/20 text-xs sm:text-sm text-slate-800 leading-relaxed animate-in fade-in">
                  <strong className="text-indigo-950 block mb-1">
                    Correct Answer: {currentEx.correctId} — Solution Walkthrough:
                  </strong>
                  <p>{currentEx.explanation}</p>
                </div>
              )}
            </div>
          );
        })()}

        {/* Educational Methodological Guide */}
        <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
          <h4 className="font-bold text-sm text-[#0F172A] mb-2">Analytical Strategies for Solving Complex Puzzles</h4>
          <p>
            When tackling reasoning problems, experienced test-takers avoid rushing toward intuitive guesses. In numerical sequences, always compute the differences between adjacent terms first. In propositional logic, convert narrative sentences into concise relational formulas (e.g., A &rarr; B). In abstract matrices, analyze patterns along rows first, then test whether identical rules hold along columns. In 3D spatial puzzles, trace one reference corner or edge rather than attempting to rotate the entire structure simultaneously.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. H2: HOW ACCURATE ARE FREE ONLINE IQ TESTS?                             */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-[#F2F7FF] rounded-3xl p-6 sm:p-10 border border-[#E5EDF7]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5 shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>A Realistic Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            How Accurate Are Free Online IQ Tests?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            The scientific validity of any cognitive test depends on its design, standardization, and psychometric calibration. Understanding the difference between recreational practice tools and clinically normed assessments is vital for realistic interpretation.
          </p>
        </div>

        {/* Side by side comparison table */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] overflow-hidden shadow-sm mb-8">
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
                  <strong className="text-[#0F172A]">Purpose:</strong> Cognitive reasoning practice, personal curiosity, and problem-solving skill development.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Scoring:</strong> Transparent raw score (e.g. 16/20) and percentage accuracy.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Reference Norms:</strong> Unnormed; does not reference standardized population cohorts.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Administration:</strong> Self-administered online without supervised proctoring.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Best Used For:</strong> Mental training, learning from mistakes, and recreational problem-solving.
                </li>
              </ul>
            </div>

            {/* Right Column: Standardized Clinical Tests */}
            <div className="p-6 sm:p-8 bg-[#F8FBFF]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
                <Scale className="w-3.5 h-3.5" />
                <span>Standardized Clinical Assessments (WAIS / Stanford-Binet)</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                Diagnostic &amp; Psychometric Evaluation
              </h3>
              <ul className="text-xs sm:text-sm text-[#5B6B82] space-y-3">
                <li>
                  <strong className="text-[#0F172A]">Purpose:</strong> Clinical diagnosis, gifted education placement, and official Mensa qualification.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Scoring:</strong> Calibrated deviation IQ scale (Mean = 100, Standard Deviation = 15).
                </li>
                <li>
                  <strong className="text-[#0F172A]">Reference Norms:</strong> Stratified across thousands of demographically matched individuals.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Administration:</strong> Individually proctored by licensed clinical psychologists.
                </li>
                <li>
                  <strong className="text-[#0F172A]">Best Used For:</strong> Formal medical, legal, or educational evaluations.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deep Psychometric Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white border border-[#E5EDF7] shadow-2xs">
            <span className="font-extrabold text-[#0F172A] block mb-1 text-sm">Psychometric Reliability</span>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Reliability reflects measurement consistency across repeated testing under identical conditions. Clinical tests achieve reliability coefficients exceeding 0.90 through multi-hour test batteries. Shorter online quizzes naturally have wider standard errors of measurement.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5EDF7] shadow-2xs">
            <span className="font-extrabold text-[#0F172A] block mb-1 text-sm">Construct Validity</span>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Validity examines whether an assessment measures the true psychological trait it claims to evaluate (such as general fluid intelligence $g$) rather than uncalibrated speed or specific background knowledge.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5EDF7] shadow-2xs">
            <span className="font-extrabold text-[#0F172A] block mb-1 text-sm">Population Standardization</span>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Standardization requires establishing normative baselines across thousands of individuals. Without calibrated age-matched sample norms, online quizzes cannot legitimately output clinical IQ numbers.
            </p>
          </div>
        </div>

        {/* Narrative on Environmental and State Confounders */}
        <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] text-xs sm:text-sm text-[#5B6B82] leading-relaxed space-y-3">
          <h4 className="font-bold text-sm text-[#0F172A]">Confounding Factors That Affect Practice Performance</h4>
          <p>
            Your performance on any reasoning assessment fluctuates naturally based on situational factors. Sleep deprivation, acute stress, digital distractions, caffeine consumption, and testing anxiety can all lower your score on a given day.
          </p>
          <p>
            Similarly, familiarity with recurring puzzle mechanics creates a well-documented practice effect. Someone who frequently solves matrix puzzles will naturally navigate them more efficiently than someone encountering them for the first time, independent of innate intelligence.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. H2: HOW TO PREPARE FOR AN IQ TEST                                      */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <ListChecks className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Interactive Checklist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            How to Prepare for an IQ Test
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            You do not need to memorize encyclopedia facts or vocabulary lists before taking a reasoning assessment. Effective preparation focuses on optimizing your mental state, managing your environment, and applying systematic problem-solving habits.
          </p>
        </div>

        {/* Interactive Checklist Component */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] mb-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Personal Preparation Checklist
            </span>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#EEF4FF] text-[#4F46E5]">
              {completedChecklistCount} of 5 Completed
            </span>
          </div>

          <div className="space-y-3.5">
            {[
              {
                id: 'env',
                title: 'Choose a Quiet, Distraction-Free Environment',
                desc: 'Silence phone notifications, close unneeded browser tabs, and choose an undisturbed room with good lighting.',
              },
              {
                id: 'read',
                title: 'Read Every Instruction and Condition Carefully',
                desc: 'Many avoidable mistakes occur from misreading whether a puzzle requires finding the next item, the odd item, or a missing term.',
              },
              {
                id: 'time',
                title: 'Maintain Pacing and Avoid Tunnel Vision',
                desc: 'If an item feels intractable after 60 seconds, flag it and move forward. Never deplete your entire time budget on a single early puzzle.',
              },
              {
                id: 'practice',
                title: 'Familiarize Yourself with Diverse Problem Types',
                desc: 'Review sample number progressions, logical syllogisms, and geometric rotation rules before starting your full assessment.',
              },
              {
                id: 'interpret',
                title: 'Maintain a Realistic, Constructive Perspective',
                desc: 'Remember that an online test is an educational benchmark, not a final diagnostic verdict on your potential.',
              },
            ].map((item) => {
              const isChecked = !!checklist[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-[#F8FBFF] border-[#4F46E5]/30'
                      : 'bg-white border-[#E5EDF7] hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center flex-none mt-0.5 border transition-colors ${
                      isChecked
                        ? 'bg-[#4F46E5] border-[#4F46E5] text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F172A] mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5B6B82] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* In-Depth Advisory Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
          <div className="p-6 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7]">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Physiological Readiness &amp; Focus</h4>
            <p>
              Cognitive tasks place substantial demands on prefrontal cortex executive functions. Studies show that testing while adequately rested, properly hydrated, and clear-headed improves working memory and processing speed far more than last-minute cramming.
            </p>
          </div>
          <div className="p-6 bg-[#F8FBFF] rounded-2xl border border-[#E5EDF7]">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Strategic Process of Elimination</h4>
            <p>
              In multiple-choice tests, disproving three incorrect options is mathematically identical to proving the correct one. When an abstract pattern seems obscure, actively look for features that disqualify candidate choices—such as an incorrect vertex count or inverted shading.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. H2: WHAT IS AN IQ TEST, AND HOW IS IQ MEASURED?                        */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <Info className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Educational Explainer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            What Is an IQ Test, and How Is IQ Measured?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            An IQ (Intelligence Quotient) test is a psychometric instrument designed to evaluate cognitive reasoning relative to standardized reference groups. Understanding how these tests originated and how scoring evolved is essential for placing modern scores into proper scientific context.
          </p>
        </div>

        {/* Scientific Bell Curve SVG Visualization */}
        <div className="bg-white rounded-3xl border border-[#E5EDF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)] mb-8">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Standard Normal Distribution (Gaussian Bell Curve)
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
              Illustrative Standardized Scale (Mean = 100, SD = 15). Practice assessments evaluate raw accuracy, not calibrated deviation scores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
            <div>
              <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">Historical Ratio IQ vs. Modern Deviation IQ</h4>
              <p>
                In the early 1900s, French psychologist Alfred Binet and Théodore Simon introduced the original ratio IQ formula: (Mental Age ÷ Chronological Age) × 100. While functional for evaluating school children, this formula broke down in adulthood as chronological age progressed without equivalent mental age changes.
              </p>
              <p className="mt-2">
                In 1939, David Wechsler resolved this by introducing the Deviation IQ model. Rather than calculating mental age ratios, modern IQ tests compare your performance to a statistically calibrated bell curve of peer results, setting the average score at 100 with a standard deviation of 15.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0F172A] mb-1.5">Statistical Spread &amp; The Normal Distribution</h4>
              <p>
                Under the standard normal distribution (68-95-99.7 rule), approximately 68.2% of the population scores between 85 and 115 (within one standard deviation of the mean). Approximately 95.4% score between 70 and 130. Scores above 130 represent the top ~2.3% of test-takers, the benchmark commonly used by high-IQ organizations such as Mensa.
              </p>
              <p className="mt-2">
                Importantly, this mathematical distribution only applies to standardized tests normed against representative population samples. An online quiz score of 80% accuracy cannot be converted into an IQ score of 130 without rigorous population calibration.
              </p>
            </div>
          </div>
        </div>

        {/* Substantive Psychometric Limitations and the Flynn Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
          <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Age-Based Norming &amp; Cohort Calibration</h4>
            <p>
              Clinical intelligence tests rely heavily on age-stratified norms. Processing speed and working memory peak in young adulthood and naturally shift over the lifespan, whereas crystallized vocabulary and knowledge often expand well into later decades. Formal psychometrics always balances raw results against verified age cohorts.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">The Flynn Effect &amp; Cultural Loading</h4>
            <p>
              First documented by political scientist James Flynn, average raw scores on intelligence tests increased worldwide throughout the 20th century, requiring psychometricians to periodically re-standardize test baselines. This highlights that test scores reflect broader environmental, educational, and nutritional improvements over time.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. H2: CAN YOU IMPROVE YOUR IQ TEST PERFORMANCE?                          */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Continuous Improvement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Can You Improve Your IQ Test Performance?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            One of the most persistent questions in cognitive science is whether a person can increase their intelligence. While baseline fluid intelligence has substantial genetic heritability, your ability to perform well on reasoning assessments can definitely improve through targeted practice and strategic problem solving.
          </p>
        </div>

        {/* 4 Connected Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 font-extrabold text-xs flex items-center justify-center mb-3">
              1
            </span>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
              Learn Common Patterns
            </h3>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Familiarize yourself with recurring puzzle mechanisms: second-order difference sequences, alternating operators, rotational symmetries, and Boolean cancellations.
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
              Analyze missed questions to determine whether mistakes stemmed from misreading instructions, rushing under time pressure, or misunderstanding a governing rule.
            </p>
          </div>

          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 font-extrabold text-xs flex items-center justify-center mb-3">
              3
            </span>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
              Practise Diverse Formats
            </h3>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Avoid practicing only your favorite puzzle types. Engaging with unfamiliar question formats builds broader mental flexibility and adaptability.
            </p>
          </div>

          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-extrabold text-xs flex items-center justify-center mb-3">
              4
            </span>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
              Focus on Metacognition
            </h3>
            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Shift focus from merely tracking accuracy scores to mastering the underlying analytical methods that make problem solving faster and more reliable.
            </p>
          </div>
        </div>

        {/* Deep Scientific Discussion on Task Familiarity vs. General Intelligence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
          <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Practice Effects vs. True Cognitive Enhancement</h4>
            <p>
              Cognitive scientists draw an important distinction between <em>task-specific improvement</em> and increases in <em>general fluid intelligence ($g$)</em>. Solving hundreds of matrix puzzles makes you faster at recognizing matrix rules. This is known as the psychometric practice effect. While it may not dramatically raise your fundamental biological processing capacity, it substantially sharpens your operational problem-solving efficiency and confidence.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#E5EDF7] shadow-2xs">
            <h4 className="font-bold text-sm text-[#0F172A] mb-2">Lifestyle Foundations of Cognitive Health</h4>
            <p>
              Long-term cognitive performance relies on foundational health habits. Clinical research consistently links regular aerobic exercise, high-quality slow-wave sleep, and mental engagement with brain-derived neurotrophic factor (BDNF) production and sustained neuroplasticity. Managing chronic stress and getting sufficient sleep helps ensure your cognitive faculties operate at peak capacity.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. H2: EXPLORE MORE IQ TESTS AND LEARNING RESOURCES                      */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-[#F2F7FF] rounded-3xl p-6 sm:p-10 border border-[#E5EDF7]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Learning Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Explore More IQ Tests and Learning Resources
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            Expand your reasoning practice with our dedicated cognitive tools and deep-dive educational guides designed to strengthen specific analytical domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            {
              title: 'Quick IQ Test',
              desc: 'Short on time? Take a condensed 10-question reasoning challenge designed for brief practice sessions and quick check-ins.',
            },
            {
              title: 'IQ Practice Questions',
              desc: 'Explore an expanded question bank featuring step-by-step mathematical, logical, abstract, and spatial problem breakdowns.',
            },
            {
              title: 'Logical Reasoning Test',
              desc: 'Focus specifically on formal propositional deductions, truth-teller logic puzzles, and categorical syllogism problems.',
            },
            {
              title: 'Abstract Reasoning Test',
              desc: 'Sharpen your fluid intelligence with visual 2×2 and 3×3 matrix progressions, geometric series, and topological transformations.',
            },
            {
              title: 'IQ Score Chart Guide',
              desc: 'Explore how clinical IQ score classifications are established, what standard deviations represent, and how population percentiles align.',
            },
            {
              title: 'IQ Percentile Calculator',
              desc: 'Learn how raw test scores map to theoretical normal distribution percentiles and discover the statistical assumptions behind them.',
            },
          ].map((res) => (
            <div
              key={res.title}
              className="p-6 rounded-2xl bg-white border border-[#E5EDF7] hover:border-[#3B82F6]/40 transition-all shadow-2xs flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-sm text-[#0F172A] mb-2">{res.title}</h3>
                <p className="text-xs text-[#5B6B82] leading-relaxed mb-4">{res.desc}</p>
              </div>
              <span className="text-[11px] font-bold text-[#4F46E5] flex items-center gap-1 group">
                <span>Coming Soon</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-[#5B6B82]">
          *These dedicated modules are part of our expanding open-access cognitive library. Links will activate as individual guides complete peer review.*
        </p>
      </section>

      {/* ========================================================================= */}
      {/* 11. H2: FREQUENTLY ASKED QUESTIONS                                        */}
      {/* ========================================================================= */}
      <section id="faq" className="scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#4F46E5] border border-[#4F46E5]/20 mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Frequently Asked Questions About IQ Tests
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            Clear answers to common questions about our free online reasoning assessment, scoring methods, and the science of intelligence testing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {[
            {
              q: 'Is this IQ test completely free?',
              a: 'Yes. Our assessment is 100% free and open access. You will never encounter a paywall, request for payment information, or hidden fee to view your raw score, accuracy percentage, or category breakdown.',
            },
            {
              q: 'Will I get my IQ test results instantly?',
              a: 'Yes. The moment you submit your assessment, our client-side scoring engine calculates your score and displays your full performance dashboard on-screen immediately.',
            },
            {
              q: 'How can I test my IQ online accurately?',
              a: 'To obtain the most accurate practice benchmark, take the test in a quiet room, avoid distractions, and work through all questions carefully. However, note that no online test can provide a clinically certified IQ score without supervised in-person psychometric proctoring.',
            },
            {
              q: 'Do I need an email address or account to take the test?',
              a: 'No. We do not require registration, passwords, or personal email addresses. Your session data is stored anonymously in your browser so you can practice freely.',
            },
            {
              q: 'How many questions are in this IQ test?',
              a: 'The assessment contains exactly 20 original questions, evenly distributed across four cognitive categories: numerical reasoning (5), logical deduction (5), abstract matrices (5), and spatial visualization (5).',
            },
            {
              q: 'Can I take the IQ test more than once?',
              a: 'Yes. You can retake the test at any time. However, because questions remain identical, subsequent attempts will benefit from practice effects and familiarity, which naturally inflates raw scores.',
            },
            {
              q: 'Does this online test tell me my exact IQ score?',
              a: 'No. This assessment provides a transparent raw score (e.g., 16/20) and an accuracy percentage. Producing an exact clinical IQ score requires extensive norming across thousands of demographically matched participants, which unproctored online quizzes cannot legitimately replicate.',
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="group p-5 bg-white rounded-2xl border border-[#E5EDF7] hover:border-slate-300 transition-all open:bg-slate-50/50 open:shadow-xs"
            >
              <summary className="font-bold text-sm text-[#0F172A] cursor-pointer flex items-center justify-between list-none">
                <span>{faq.q}</span>
                <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-open:rotate-180 transition-transform">
                  <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-[#5B6B82] leading-relaxed pt-2 border-t border-slate-100">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. H2: ASSESSMENT METHODOLOGY AND SCORING FRAMEWORK                      */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 p-6 sm:p-10 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest block">
            METHODOLOGY &amp; ETHICAL STANDARDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            About This Assessment and Our Scoring Method
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our assessment framework is built upon 20 verified questions divided evenly across numerical, logical, abstract, and spatial reasoning domains. Every question has exactly one unambiguous, peer-reviewed correct answer.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Scoring is completely transparent: every correct answer earns exactly one point, while incorrect or skipped questions earn zero points. Your overall accuracy percentage is calculated as (Correct Answers ÷ 20) × 100. Category scores show your exact standing within each cognitive domain out of 5 points.
          </p>
          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/60 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
            <strong>Ethical &amp; Psychometric Disclosure:</strong> This platform is designed solely for self-directed reasoning practice, cognitive education, and personal interest. It is unnormed against broad demographic populations and does not replace standardized clinical examinations such as the Wechsler Adult Intelligence Scale (WAIS) or Stanford-Binet. Its results should never be used for academic placement, psychiatric diagnosis, employment decisions, or membership qualification.
          </div>
          <div className="pt-4">
            <Link
              href="/test"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-colors shadow-md cta-glow"
            >
              <span>Start Your Free IQ Test Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};
