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
  Compass,
  FileCheck,
} from 'lucide-react';

export const ComprehensiveArticle: React.FC = () => {
  // =========================================================================
  // STATE FOR INTERACTIVE SECTIONS
  // =========================================================================

  // 1. How It Works Stepper
  const [activeStep, setActiveStep] = useState<number>(0);

  // 2. Category Explorer
  const [activeCategory, setActiveCategory] = useState<'numerical' | 'logical' | 'abstract' | 'spatial'>('numerical');

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

  // =========================================================================
  // DATA CONSTANTS (100% PRESERVED VERBATIM)
  // =========================================================================

  const stepsData = [
    {
      step: 1,
      title: 'Start Your IQ Test',
      shortDesc: 'Select your preferred challenge mode and prepare your testing space.',
      leadText: 'Select either the Untimed Practice Mode or the 15-Minute Timed Mode to match your learning goals.',
      mode1Title: 'Untimed Practice Mode',
      mode1Desc: 'Untimed mode allows deep analytical contemplation of complex relationships without clock pressure, making it ideal for puzzle exploration and cognitive training.',
      mode2Title: '15-Minute Timed Mode',
      mode2Desc: 'The timed mode introduces realistic pacing constraints to simulate standard psychometric assessment conditions.',
      tipText: 'For optimal focus, minimize external noise, mute desktop notifications, and ensure reliable hardware before beginning.',
      demoBadge: 'Step 1: Configuration',
      demoVisual: (
        <div className="p-5 bg-white rounded-2xl border border-[#E2EAF7] shadow-sm text-xs text-[#07152F]">
          <div className="font-extrabold text-[#07152F] mb-2">Mode Selected: Untimed Practice</div>
          <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
            <CheckCircle2 className="w-4 h-4" /> Ready to challenge your reasoning
          </div>
          <div className="text-[#60718B]">20 Questions • ~12–15 Minutes • No Signup</div>
        </div>
      ),
    },
    {
      step: 2,
      title: 'Answer 20 Reasoning Questions',
      shortDesc: 'Work through 4 core cognitive domains with single-choice verified options.',
      leadText: 'The assessment presents 20 original, peer-reviewed multiple-choice problems evenly balanced across four domains: numerical reasoning, logical deduction, abstract pattern recognition, and 3D spatial thinking.',
      rule1Title: 'Single-Choice Precision',
      rule1Desc: 'Every question provides exactly four single-choice alternatives (A, B, C, D) with only one mathematically or logically defensible answer.',
      rule2Title: 'Flexible Navigation',
      rule2Desc: 'Interactive navigation features enable you to flag demanding items for second review or jump between problems dynamically.',
      tipText: 'Balanced pacing across all 20 questions ensures steady mental momentum throughout the challenge.',
      demoBadge: 'Step 2: Problem Solving',
      demoVisual: (
        <div className="p-5 bg-white rounded-2xl border border-[#E2EAF7] shadow-sm text-xs text-[#07152F]">
          <div className="flex justify-between items-center mb-2 font-extrabold text-[#07152F]">
            <span>Question 8 of 20</span>
            <span className="text-[#2453FF] font-bold">Logical Reasoning</span>
          </div>
          <div className="w-full bg-[#E2EAF7] h-2 rounded-full mb-3 overflow-hidden">
            <div className="bg-[#2453FF] h-full w-[40%]" />
          </div>
          <div className="text-[#60718B]">4 Single-Choice Options • Flag for Review Available</div>
        </div>
      ),
    },
    {
      step: 3,
      title: 'Get Your Results Instantly',
      shortDesc: 'Receive immediate transparent raw scores and category breakdown metrics.',
      leadText: 'Upon completing or submitting your assessment, your answers are calculated immediately in your browser.',
      metricDesc: 'We present your raw score (e.g. 16 out of 20), your overall percentage accuracy, and individual category diagnostic totals.',
      guaranteeDesc: 'Unlike commercial lead-generation sites that lock scores behind paid paywalls, subscriptions, or required email forms, our results are presented freely, immediately, and transparently on-screen.',
      demoBadge: 'Step 3: Instant Calculation',
      demoVisual: (
        <div className="p-5 bg-white rounded-2xl border border-[#E2EAF7] shadow-sm text-xs text-[#07152F]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-extrabold text-2xl text-[#07152F]">80%</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
              Strong Performance
            </span>
          </div>
          <div className="text-[#60718B]">Raw Score: 16 / 20 Correct • Anonymous Local Session</div>
        </div>
      ),
    },
    {
      step: 4,
      title: 'Review Your Answers',
      shortDesc: 'Examine detailed step-by-step logic and clear educational walkthroughs.',
      leadText: 'True cognitive advancement occurs during post-assessment analysis.',
      review1Title: 'Comprehensive Verification',
      review1Desc: 'You can inspect all 20 questions in detail to compare your selections against the verified correct answers.',
      review2Title: 'Step-by-Step Logic',
      review2Desc: 'Every question includes a comprehensive explanation outlining the underlying rule, common cognitive traps, and alternative reasoning paths.',
      exportDesc: 'You can also print or export your diagnostic summary for personal study.',
      demoBadge: 'Step 4: Answer Review',
      demoVisual: (
        <div className="p-5 bg-white rounded-2xl border border-[#E2EAF7] shadow-sm text-xs text-[#07152F]">
          <div className="flex items-center gap-2 text-[#2453FF] font-bold mb-1">
            <BookOpen className="w-4 h-4" /> Comprehensive Answer Review
          </div>
          <div className="text-[#60718B]">
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
      color: 'bg-blue-50 border-blue-200 text-[#2453FF]',
      badgeColor: 'bg-blue-100 text-blue-800',
      keyConcepts: ['Linear & Exponential Progressions', 'Polynomial Step Differences', 'Alternating Stream Rules'],
      descLead: 'Numerical reasoning evaluates your ability to perceive patterns, calculate differences, and deduce governing arithmetic functions rather than testing rote textbook memorization.',
      descBody1: 'Typical challenges include linear sequences, exponential progressions, alternating operators, nested fibonacci-style relationships, and interleaved numerical streams.',
      descBody2: 'Success requires recognizing whether step differences expand by constant multipliers, prime progressions, or polynomial rules.',
      exampleMath: 'Sequence: 3, 7, 15, 31, 63, ?\nRule: Each number doubles and adds 1 [x(n) = 2x(n-1) + 1].\nStep Analysis: 3*2+1=7; 7*2+1=15; 15*2+1=31; 31*2+1=63; 63*2+1=127.',
      exampleAnswer: 'The correct missing value is 127.',
    },
    logical: {
      icon: GitBranch,
      title: 'Logical and Deductive Reasoning',
      subtitle: 'Analyze premises, conditional syllogisms, and evaluate valid deductive conclusions.',
      color: 'bg-purple-50 border-purple-200 text-purple-700',
      badgeColor: 'bg-purple-100 text-purple-800',
      keyConcepts: ['Modus Tollens Deduction', 'Categorical Syllogisms', 'Transitive Rankings'],
      descLead: 'Logical and deductive reasoning measures your skill in deriving mathematically certain inferences from stated constraints.',
      descBody1: 'Rather than relying on subjective intuition or external world knowledge, questions assess formal propositional logic, contraposition (Modus Tollens), transitive rankings, and categorical syllogisms.',
      descBody2: 'You must isolate premises strictly as given, separate assumptions from verified deductions, and systematically discard invalid fallacies.',
      exampleMath: 'Premise 1: All research analysts possess high quantitative literacy.\nPremise 2: Some project coordinators are research analysts.\nDeduction: It necessarily follows that some project coordinators possess high quantitative literacy.',
      exampleAnswer: 'Valid deduction confirmed through formal set inclusion and Venn intersection.',
    },
    abstract: {
      icon: Shapes,
      title: 'Abstract Reasoning & Pattern Recognition',
      subtitle: 'Discover geometric transformations, matrix rules, and visual topological sequences.',
      color: 'bg-amber-50 border-amber-200 text-amber-700',
      badgeColor: 'bg-amber-100 text-amber-800',
      keyConcepts: ['Matrix 2×2 & 3×3 Grids', 'Rotational Symmetries', 'Boolean XOR Inversion'],
      descLead: 'Abstract reasoning represents the cleanest metric of fluid intelligence (Gf)—the capacity to solve novel problems independent of language, formal education, or cultural background.',
      descBody1: 'Puzzles feature 2×2 or 3×3 matrix grids, progressive row series, and shape transformations.',
      descBody2: 'Operators include vertex rotation (45°/90°/180°), alternating shading inversions, element addition/subtraction, and Boolean superposition (XOR logical cancellations).',
      exampleMath: 'Grid Matrix Rule (Row Progression):\nColumn 1: 3-sided polygon with light fill.\nColumn 2: 4-sided polygon with partial fill.\nColumn 3: 5-sided polygon with complete inverted fill.',
      exampleAnswer: 'The missing cell requires an inverted 5-sided pentagon.',
    },
    spatial: {
      icon: Box,
      title: 'Spatial and Visual Reasoning',
      subtitle: 'Mentally rotate 3D objects, project orthographic profiles, and fold cube nets.',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      keyConcepts: ['Shepard-Metzler Mental Rotation', 'Cube Net Planar Folding', 'Orthographic Profiles'],
      descLead: 'Spatial reasoning assesses your ability to mentally manipulate, rotate, and reconstruct two- and three-dimensional representations.',
      descBody1: 'Cognitive tasks include identifying mirror reflections versus rigid planar rotations (the Shepard-Metzler mental rotation paradigm), folding 2D planar cross nets into 3D cubes, tracing coordinates across wrapped surfaces, and predicting orthographic side projections of complex stepped structures.',
      descBody2: 'Success requires maintaining spatial invariants across coordinate shifts without perspective distortion.',
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
    <article className="w-full max-w-[1240px] mx-auto py-12 text-[#07152F] leading-relaxed no-print space-y-20">
      {/* ========================================================================= */}
      {/* 1. H2: HOW DOES OUR FREE ONLINE IQ TEST WORK?                             */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Simple and Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            How Does Our Free Online IQ Test Work?
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
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
                className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#2453FF] ring-2 ring-[#2453FF]/20 shadow-[0_12px_28px_-6px_rgba(36,83,255,0.16)] -translate-y-1'
                    : 'bg-white border-[#E2EAF7] hover:border-[#2453FF]/40 hover:-translate-y-0.5 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold ${
                        isActive ? 'bg-[#2453FF] text-white shadow-2xs' : 'bg-[#EEF2FF] text-[#2453FF]'
                      }`}
                    >
                      {stepItem.step}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-extrabold text-[#2453FF] bg-[#EEF2FF] px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Active Step
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-[#07152F] mb-1.5">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-[#60718B] leading-relaxed">
                    {stepItem.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card — Upgraded High-Readability SaaS Layout */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(7,21,47,0.04)] mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#2453FF]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-[#EEF2FF] text-[#2453FF] mb-3">
                {stepsData[activeStep].demoBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#07152F] mb-4">
                {stepsData[activeStep].title}
              </h3>

              {/* Visually Segmented High-Readability Step Body */}
              {activeStep === 0 && (
                <div className="space-y-4 mb-6">
                  <div className="p-3.5 bg-[#F8FBFF] rounded-xl border-l-4 border-[#2453FF] text-[#07152F] text-xs sm:text-sm font-semibold leading-relaxed">
                    {stepsData[0].leadText}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF7] shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#07152F] mb-1">
                        <Compass className="w-4 h-4 text-[#2453FF]" />
                        <span>{stepsData[0].mode1Title}</span>
                      </div>
                      <p className="text-[#60718B] leading-relaxed">
                        {stepsData[0].mode1Desc}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF7] shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#07152F] mb-1">
                        <Clock className="w-4 h-4 text-[#4779FF]" />
                        <span>{stepsData[0].mode2Title}</span>
                      </div>
                      <p className="text-[#60718B] leading-relaxed">
                        {stepsData[0].mode2Desc}
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#EEF2FF]/70 rounded-xl border border-[#E0E7FF] text-xs text-[#07152F] flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#2453FF] shrink-0" />
                    <span>{stepsData[0].tipText}</span>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-4 mb-6">
                  <div className="p-3.5 bg-[#F8FBFF] rounded-xl border-l-4 border-[#2453FF] text-[#07152F] text-xs sm:text-sm font-semibold leading-relaxed">
                    {stepsData[1].leadText}
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] font-bold">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#2453FF] border border-blue-200">5 Numerical Reasoning</span>
                    <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">5 Logical Deduction</span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">5 Abstract Patterns</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">5 Spatial Thinking</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF7] shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#07152F] mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{stepsData[1].rule1Title}</span>
                      </div>
                      <p className="text-[#60718B] leading-relaxed">
                        {stepsData[1].rule1Desc}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF7] shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#07152F] mb-1">
                        <Layers className="w-3.5 h-3.5 text-[#2453FF]" />
                        <span>{stepsData[1].rule2Title}</span>
                      </div>
                      <p className="text-[#60718B] leading-relaxed">
                        {stepsData[1].rule2Desc}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4 mb-6">
                  <div className="p-3.5 bg-[#F8FBFF] rounded-xl border-l-4 border-[#2453FF] text-[#07152F] text-xs sm:text-sm font-semibold leading-relaxed">
                    {stepsData[2].leadText}
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF7] shadow-2xs text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[#07152F] mb-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-[#2453FF]" />
                      <span>Diagnostic Metric Breakdown</span>
                    </div>
                    <p className="text-[#60718B] leading-relaxed mb-2.5">
                      {stepsData[2].metricDesc}
                    </p>
                    <div className="flex flex-wrap gap-2 text-[11px] font-bold">
                      <span className="px-2.5 py-1 rounded-md bg-[#F2F7FF] text-[#07152F]">Raw Score (0–20)</span>
                      <span className="px-2.5 py-1 rounded-md bg-[#F2F7FF] text-[#07152F]">Overall Accuracy %</span>
                      <span className="px-2.5 py-1 rounded-md bg-[#F2F7FF] text-[#07152F]">Category Breakdown</span>
                    </div>
                  </div>
                  <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{stepsData[2].guaranteeDesc}</span>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-4 mb-6">
                  <div className="p-3.5 bg-[#F8FBFF] rounded-xl border-l-4 border-[#2453FF] text-[#07152F] text-xs sm:text-sm font-semibold leading-relaxed">
                    {stepsData[3].leadText}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF7] shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#07152F] mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2453FF]" />
                        <span>{stepsData[3].review1Title}</span>
                      </div>
                      <p className="text-[#60718B] leading-relaxed">
                        {stepsData[3].review1Desc}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E2EAF7] shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#07152F] mb-1">
                        <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                        <span>{stepsData[3].review2Title}</span>
                      </div>
                      <p className="text-[#60718B] leading-relaxed">
                        {stepsData[3].review2Desc}
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#EEF2FF]/70 rounded-xl border border-[#E0E7FF] text-xs text-[#07152F] flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#2453FF] shrink-0" />
                    <span>{stepsData[3].exportDesc}</span>
                  </div>
                </div>
              )}

              <Link
                href="/test"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2453FF] hover:text-[#1B40DF] group"
              >
                <span>Try this step in the assessment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="w-full lg:w-80 flex-none">{stepsData[activeStep].demoVisual}</div>
          </div>
        </div>

        {/* Editorial Subsections for Step Guidance Styled as High-End Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#60718B] leading-relaxed">
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2453FF] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">Test Architecture &amp; Pacing Strategy</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-50 text-[#2453FF] border border-blue-100">45s / Question</span>
            </div>
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#2453FF] mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Battery Structure &amp; Momentum</span>
                </div>
                <p className="text-[#07152F]">
                  The assessment uses a 20-item progressive battery arranged to measure core analytical faculties. In timed mode, allocating approximately 45 seconds per question helps maintain steady cognitive momentum.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E2EAF7]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Precision Elimination Protocol</span>
                </div>
                <p className="text-[#60718B]">
                  Because every problem provides four clear choices with exactly one valid solution, avoiding blind guessing and prioritizing systematic process-of-elimination leads to the highest analytical fidelity.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Brain className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">Metacognitive Review &amp; Error Analysis</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">Self-Correction</span>
            </div>
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-purple-600" />
                  <span>Post-Assessment Introspection</span>
                </div>
                <p className="text-[#07152F]">
                  Unlike traditional quizzes that only present a final summary number, our platform encourages post-assessment metacognition.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E2EAF7]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#2453FF] mb-1 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  <span>Cognitive Error Categorization</span>
                </div>
                <p className="text-[#60718B]">
                  Reviewing incorrect choices reveals whether errors stemmed from arithmetic miscalculations, confusing correlation with causation in logic, or rotating shapes across the wrong axis in spatial puzzles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. H2: WHAT DOES THIS IQ TEST MEASURE?                                    */}
      {/* ========================================================================= */}
      <section id="what-it-measures" className="scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Brain className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Four Key Reasoning Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            What Does This IQ Test Measure?
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
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
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#2453FF] ring-2 ring-[#2453FF]/20 shadow-md -translate-y-0.5'
                    : 'bg-white border-[#E2EAF7] hover:border-[#2453FF]/40 shadow-2xs hover:-translate-y-0.5'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${cat.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#07152F] mb-1">{cat.title}</h3>
                <span className="text-[11px] font-bold text-[#2453FF]">5 Verified Questions →</span>
              </button>
            );
          })}
        </div>

        {/* Deep Category Reveal Card with Terminal-Style Math Demonstration */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(7,21,47,0.04)] mb-8">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 flex-wrap gap-2">
            <div className="flex items-center gap-3.5">
              <div className={`p-2.5 rounded-xl border ${categoriesData[activeCategory].color}`}>
                {React.createElement(categoriesData[activeCategory].icon, { className: 'w-5 h-5' })}
              </div>
              <div>
                <h3 className="text-xl font-black text-[#07152F]">
                  {categoriesData[activeCategory].title}
                </h3>
                <p className="text-xs text-[#60718B]">
                  {categoriesData[activeCategory].subtitle}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categoriesData[activeCategory].keyConcepts.map((kc) => (
                <span key={kc} className="px-2.5 py-0.5 rounded-full bg-[#F2F7FF] text-[#07152F] text-[10px] font-bold border border-[#E2EAF7]">
                  {kc}
                </span>
              ))}
            </div>
          </div>

          {/* Elevated Multi-Card Category Readability Architecture */}
          <div className="space-y-4 mb-6 text-xs sm:text-sm text-[#60718B] leading-relaxed">
            <div className="p-4 bg-[#F8FBFF] rounded-2xl border-l-4 border-[#2453FF] text-[#07152F] font-semibold leading-relaxed shadow-2xs">
              {categoriesData[activeCategory].descLead}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#E2EAF7] shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-xs text-[#07152F] uppercase tracking-wider mb-1.5">
                  <Target className="w-3.5 h-3.5 text-[#2453FF]" />
                  <span>Challenge Scope &amp; Formats</span>
                </div>
                <p className="text-[#60718B] leading-relaxed">
                  {categoriesData[activeCategory].descBody1}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2EAF7] shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-xs text-[#07152F] uppercase tracking-wider mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Analytical Rule Identification</span>
                </div>
                <p className="text-[#60718B] leading-relaxed">
                  {categoriesData[activeCategory].descBody2}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4.5 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] text-xs sm:text-sm">
            <span className="font-bold text-[#07152F] block mb-2 flex items-center gap-1.5">
              <Binary className="w-4 h-4 text-[#2453FF]" />
              Worked Concept Example:
            </span>
            <pre className="font-mono text-xs bg-white p-3.5 rounded-xl border border-[#E2EAF7] text-[#07152F] mb-2.5 whitespace-pre-line shadow-2xs">
              {categoriesData[activeCategory].exampleMath}
            </pre>
            <p className="text-[#2453FF] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {categoriesData[activeCategory].exampleAnswer}
            </p>
          </div>
        </div>

        {/* Detailed Educational Breakdown Across All 4 Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#60718B] leading-relaxed mb-6">
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-100">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-100 text-[#2453FF]">
                Gf Theory
              </span>
              <h4 className="font-bold text-sm text-[#07152F]">Fluid Intelligence ($G_f$) &amp; Novel Problem Solving</h4>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#60718B] leading-relaxed">
                Abstract and spatial tasks directly probe fluid intelligence—the raw capacity to identify patterns and reason logically without relying on previously learned vocabulary, culture, or formal schooling. By emphasizing matrix transformations and topological folding, the test minimizes linguistic bias and isolates foundational visual problem-solving faculties.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-100">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-800">
                Gq &amp; Gl Theory
              </span>
              <h4 className="font-bold text-sm text-[#07152F]">Quantitative &amp; Deductive Processing ($G_q$ &amp; $G_l$)</h4>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#60718B] leading-relaxed">
                Numerical sequences and formal propositional syllogisms evaluate your capacity to maintain working memory buffers while testing multiple competing hypotheses. You must identify whether rules operate along single or interleaved dimensions, verifying deductive inferences with mathematical precision.
              </p>
            </div>
          </div>
        </div>

        {/* Psychometric Trust Banner */}
        <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3 shadow-2xs">
          <Scale className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Psychometric Distinction:</strong> Performance across these four practice domains reflects how you solved 20 specific reasoning tasks. It provides useful training insights, but it is not an all-encompassing measure of creative talent, practical common sense, emotional intelligence, or professional capability.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. H2: WHY TAKE OUR FREE IQ TEST ONLINE?                                  */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Why Choose Our Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            Why Take Our Free IQ Test Online?
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
            Online cognitive testing is often frustrating. Many commercial websites promise a free test, only to demand credit card payments or email submissions on question 20. We built a completely transparent, open-access platform committed to genuine cognitive education.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          {/* Featured Card */}
          <div className="md:col-span-5 bg-[#07152F] text-white p-7 rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2453FF]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                100% UNGATED ASSESSMENT
              </span>
              <h3 className="text-2xl font-black text-white mb-3">
                Free Results Without Hidden Paywalls
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                You should never encounter a payment gate or subscription prompt after spending 15 minutes solving challenging reasoning puzzles. Our scoring engine delivers your raw score and accuracy breakdown immediately upon completion without requiring an email address or purchase.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 pt-4 border-t border-slate-700/60 relative z-10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Paywalls • Anonymous Local Session</span>
            </div>
          </div>

          {/* 4 Supporting Feature Cards */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="premium-card p-6 rounded-3xl">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2453FF] flex items-center justify-center mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-[#07152F] mb-1.5">
                Instant Cognitive Feedback
              </h4>
              <p className="text-xs text-[#60718B] leading-relaxed">
                Receive instant accuracy ratings across each of the four categories the second you submit. Review questions immediately while your reasoning steps are fresh in memory.
              </p>
            </div>

            <div className="premium-card p-6 rounded-3xl">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-[#07152F] mb-1.5">
                Educational Walkthroughs
              </h4>
              <p className="text-xs text-[#60718B] leading-relaxed">
                Every problem is paired with a clear, step-by-step mathematical or logical proof. You understand not just what option was correct, but the exact mechanism that governs it.
              </p>
            </div>

            <div className="premium-card p-6 rounded-3xl">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Smartphone className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-[#07152F] mb-1.5">
                Responsive Vector Graphics
              </h4>
              <p className="text-xs text-[#60718B] leading-relaxed">
                Enjoy crisp, resolution-independent SVG diagrams on phones, tablets, and desktop displays. Visual puzzles scale cleanly to prevent distortion or eye strain.
              </p>
            </div>

            <div className="premium-card p-6 rounded-3xl">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-[#07152F] mb-1.5">
                Targeted Skill Practice
              </h4>
              <p className="text-xs text-[#60718B] leading-relaxed">
                Identify your relative strengths and growth opportunities across numerical, logical, abstract, and spatial domains to guide your ongoing mental training.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Narrative on Ethical Testing */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs text-xs sm:text-sm text-[#60718B] leading-relaxed">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <ShieldCheck className="w-4 h-4 text-[#2453FF]" />
            <h4 className="font-bold text-sm text-[#07152F]">The Need for Honest, Ethical Cognitive Assessment</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-orange-200">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-orange-700 mb-1.5 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-orange-600" />
                <span>Commercial Quiz Funnels vs. Reality</span>
              </div>
              <p className="text-[#07152F] leading-relaxed">
                The internet is crowded with commercial quiz funnels disguised as official intelligence testing. These sites often use inflated, fabricated scores to flatter visitors into purchasing overpriced PDF certificates. Our mission is entirely different: we provide honest, transparent cognitive reasoning challenges built for curious minds, students, and lifelong learners who simply want to test and sharpen their problem-solving skills.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-emerald-200">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Privacy &amp; Open-Access Transparency</span>
              </div>
              <p className="text-[#07152F] leading-relaxed">
                By offering a private, unnormed educational assessment with transparent scoring formulas, we protect user privacy and establish realistic expectations regarding what online practice tests can and cannot measure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. H2: UNDERSTANDING YOUR IQ TEST RESULTS                                 */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-gradient-to-b from-[#F2F7FF] via-white to-[#F8FBFF] rounded-3xl p-6 sm:p-10 border border-[#E2EAF7]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Sample Result View</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            Understanding Your IQ Test Results
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
            Interpreting test metrics properly is essential for meaningful self-assessment. Our diagnostic dashboard breaks down your performance into transparent raw counts, accuracy percentages, and category-level diagnostics.
          </p>
        </div>

        {/* Dashboard Frame Styled as a High-Fidelity Diagnostic Panel */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(7,21,47,0.05)] mb-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60718B]">
              Interactive Sample Walkthrough
            </span>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#2453FF]">
              Illustrative Example — Not a Real User Result
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8 pb-8 border-b border-slate-100">
            {/* Left Donut */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#E2EAF7" strokeWidth="8" fill="transparent" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#2453FF"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="62.8"
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-[#07152F]">75%</span>
                  <span className="text-xs font-bold text-[#60718B]">Accuracy</span>
                </div>
              </div>
              <span className="text-sm font-extrabold text-[#07152F] mt-3">15 / 20 Correct Answers</span>
            </div>

            {/* Right Metrics Grid */}
            <div className="md:col-span-7 grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] flex items-center justify-between">
                <span className="font-semibold text-[#60718B] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Correct
                </span>
                <span className="font-extrabold text-[#07152F]">15</span>
              </div>
              <div className="p-3.5 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] flex items-center justify-between">
                <span className="font-semibold text-[#60718B] flex items-center gap-1.5">
                  <X className="w-4 h-4 text-red-500" /> Incorrect
                </span>
                <span className="font-extrabold text-[#07152F]">3</span>
              </div>
              <div className="p-3.5 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] flex items-center justify-between">
                <span className="font-semibold text-[#60718B] flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-amber-500" /> Unanswered
                </span>
                <span className="font-extrabold text-[#07152F]">2</span>
              </div>
              <div className="p-3.5 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] flex items-center justify-between">
                <span className="font-semibold text-[#60718B] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-500" /> Time Taken
                </span>
                <span className="font-extrabold text-[#07152F]">12m 26s</span>
              </div>
            </div>
          </div>

          {/* Category Breakdown Horizontal Bars */}
          <div className="space-y-3.5 mb-6">
            <h4 className="text-xs font-extrabold text-[#07152F] uppercase tracking-wider">
              Category Performance Breakdown
            </h4>
            {[
              { label: 'Numerical Reasoning', score: '4/5', pct: '80%', w: 'w-[80%]', col: 'bg-[#2453FF]' },
              { label: 'Logical Deduction', score: '5/5', pct: '100%', w: 'w-[100%]', col: 'bg-purple-600' },
              { label: 'Abstract Matrices', score: '3/5', pct: '60%', w: 'w-[60%]', col: 'bg-amber-500' },
              { label: 'Spatial Visualization', score: '3/5', pct: '60%', w: 'w-[60%]', col: 'bg-emerald-600' },
            ].map((catBar) => (
              <div key={catBar.label} className="text-xs sm:text-sm">
                <div className="flex justify-between font-semibold text-[#07152F] mb-1">
                  <span>{catBar.label}</span>
                  <span className="font-extrabold">{catBar.score} ({catBar.pct})</span>
                </div>
                <div className="w-full bg-[#E2EAF7] h-2.5 rounded-full overflow-hidden">
                  <div className={`${catBar.col} h-full ${catBar.w} rounded-full`} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-[#60718B] leading-relaxed">
            <strong>Transparent Formula:</strong> Accuracy = (Correct Answers ÷ Total Questions) × 100 = (15 ÷ 20) × 100 = 75%. This is a direct measure of your performance on this practice set. It is not a clinical or standardized IQ score.
          </div>
        </div>

        {/* In-Depth Interpretive Narrative Styled as Elevated Diagnostic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#60718B] leading-relaxed">
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2453FF] flex items-center justify-center">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">Raw Score vs. Standardized Deviation IQ</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-50 text-[#2453FF]">Norming Difference</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#07152F] leading-relaxed">
                A raw score simply tallies how many items you answered correctly. In contrast, a standardized IQ score represents a relative placement on a Gaussian normal distribution with an established mean of 100 and a standard deviation of 15. Converting a raw score into a meaningful deviation IQ requires administering the test to a large, statistically representative population sample stratified by age, education, and demographic factors.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">What Your Practice Scores Cannot Tell You</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">Scope Limits</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#07152F] leading-relaxed">
                Human intelligence is multifaceted. A 20-question online practice set provides insight into your reasoning on specific logic and visual puzzles, but it does not reflect verbal eloquence, creative problem solving, social intelligence, resilience, or real-world decision making. Treat your score as an engaging benchmark for learning, not a definition of your intellectual boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. H2: IQ TEST QUESTIONS AND ANSWERS (WORKED EXAMPLES)                    */}
      {/* ========================================================================= */}
      <section id="practice-questions" className="scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Practice Before You Start</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            IQ Test Questions and Answers: Worked Examples
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
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
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#2453FF] text-white shadow-sm'
                    : 'bg-white border border-[#E2EAF7] text-[#07152F] hover:bg-slate-50'
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
            <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(7,21,47,0.04)] mb-8">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2453FF]">
                  {currentEx.badge}
                </span>
                <span className="text-xs font-semibold text-[#60718B] capitalize">
                  {activeExampleTab} Domain
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#07152F] mb-5">
                {currentEx.question}
              </h3>

              {/* 4 Interactive Choice Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {currentEx.options.map((opt) => {
                  const isOptSelected = selected === opt.id;
                  let btnStyle = 'bg-[#F8FBFF] border-[#E2EAF7] text-[#07152F] hover:border-slate-300';

                  if (isChecked) {
                    if (opt.id === currentEx.correctId) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                    } else if (isOptSelected) {
                      btnStyle = 'bg-red-50 border-red-400 text-red-900 line-through';
                    }
                  } else if (isOptSelected) {
                    btnStyle = 'bg-white border-[#2453FF] ring-2 ring-[#2453FF]/20 text-[#2453FF] font-bold';
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={isChecked}
                      onClick={() =>
                        setSelectedExampleAnswers((prev) => ({ ...prev, [activeExampleTab]: opt.id }))
                      }
                      className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
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

              {/* Action and Feedback */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  disabled={!selected}
                  onClick={() => setCheckedExamples((prev) => ({ ...prev, [activeExampleTab]: true }))}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2453FF] hover:bg-[#1B40DF] disabled:opacity-40 transition-colors shadow-2xs cursor-pointer"
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
                <div className="mt-5 p-4 rounded-2xl bg-[#EEF2FF] border border-[#2453FF]/20 text-xs sm:text-sm text-[#07152F] leading-relaxed animate-in fade-in">
                  <strong className="text-[#07152F] block mb-1">
                    Correct Answer: {currentEx.correctId} — Solution Walkthrough:
                  </strong>
                  <p className="text-[#60718B]">{currentEx.explanation}</p>
                </div>
              )}
            </div>
          );
        })()}

        {/* Structured Analytical Strategy Matrix Table */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-2xs mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h4 className="font-bold text-base text-[#07152F]">Analytical Strategies for Solving Complex Puzzles</h4>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E2EAF7] mb-5">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F] font-bold">
                <tr>
                  <th className="p-3.5 w-1/4">Cognitive Domain</th>
                  <th className="p-3.5 w-3/4">Actionable Problem-Solving Technique</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#60718B]">
                <tr>
                  <td className="p-3.5 font-bold text-[#07152F] flex items-center gap-1.5">
                    <Binary className="w-3.5 h-3.5 text-[#2453FF]" /> Numerical Sequences
                  </td>
                  <td className="p-3.5 font-medium text-[#07152F]">In numerical sequences, always compute the differences between adjacent terms first.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#07152F] flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-purple-600" /> Propositional Logic
                  </td>
                  <td className="p-3.5 font-medium text-[#07152F]">In propositional logic, convert narrative sentences into concise relational formulas (e.g., A &rarr; B).</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#07152F] flex items-center gap-1.5">
                    <Shapes className="w-3.5 h-3.5 text-amber-600" /> Abstract Matrices
                  </td>
                  <td className="p-3.5 font-medium text-[#07152F]">In abstract matrices, analyze patterns along rows first, then test whether identical rules hold along columns.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#07152F] flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-emerald-600" /> 3D Spatial Puzzles
                  </td>
                  <td className="p-3.5 font-medium text-[#07152F]">In 3D spatial puzzles, trace one reference corner or edge rather than attempting to rotate the entire structure simultaneously.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7] flex items-start gap-3 shadow-2xs">
            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#07152F] font-medium leading-relaxed">
              When tackling reasoning problems, experienced test-takers avoid rushing toward intuitive guesses. In numerical sequences, always compute the differences between adjacent terms first. In propositional logic, convert narrative sentences into concise relational formulas (e.g., A &rarr; B). In abstract matrices, analyze patterns along rows first, then test whether identical rules hold along columns. In 3D spatial puzzles, trace one reference corner or edge rather than attempting to rotate the entire structure simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. H2: HOW ACCURATE ARE FREE ONLINE IQ TESTS?                             */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-[#F2F7FF] rounded-3xl p-6 sm:p-10 border border-[#E2EAF7]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>A Realistic Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            How Accurate Are Free Online IQ Tests?
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
            The scientific validity of any cognitive test depends on its design, standardization, and psychometric calibration. Understanding the difference between recreational practice tools and clinically normed assessments is vital for realistic interpretation.
          </p>
        </div>

        {/* High-Impact SaaS Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-[#E2EAF7] bg-white shadow-sm mb-8">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F]">
              <tr>
                <th className="p-4 sm:p-5 w-1/4 font-extrabold uppercase text-[11px] tracking-wider text-[#60718B]">
                  Assessment Dimension
                </th>
                <th className="p-4 sm:p-5 w-3/8 font-bold text-[#2453FF] bg-blue-50/40">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Online Practice Assessment (Our IQ Test)</span>
                  </div>
                  <div className="text-base font-extrabold text-[#07152F]">Practice &amp; Cognitive Challenge</div>
                </th>
                <th className="p-4 sm:p-5 w-3/8 font-bold text-[#60718B]">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2453FF] text-xs font-bold mb-1">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Standardized Clinical Assessments (WAIS / Stanford-Binet)</span>
                  </div>
                  <div className="text-base font-extrabold text-[#07152F]">Diagnostic &amp; Psychometric Evaluation</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2EAF7] text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#07152F] bg-[#F8FBFF]/60">Purpose</td>
                <td className="p-4 sm:p-5 text-[#60718B] bg-blue-50/20">Cognitive reasoning practice, personal curiosity, and problem-solving skill development.</td>
                <td className="p-4 sm:p-5 text-[#60718B]">Clinical diagnosis, gifted education placement, and official Mensa qualification.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#07152F] bg-[#F8FBFF]/60">Scoring</td>
                <td className="p-4 sm:p-5 text-[#60718B] bg-blue-50/20">Transparent raw score (e.g. 16/20) and percentage accuracy.</td>
                <td className="p-4 sm:p-5 text-[#60718B]">Calibrated deviation IQ scale (Mean = 100, Standard Deviation = 15).</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#07152F] bg-[#F8FBFF]/60">Reference Norms</td>
                <td className="p-4 sm:p-5 text-[#60718B] bg-blue-50/20">Unnormed; does not reference standardized population cohorts.</td>
                <td className="p-4 sm:p-5 text-[#60718B]">Stratified across thousands of demographically matched individuals.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#07152F] bg-[#F8FBFF]/60">Administration</td>
                <td className="p-4 sm:p-5 text-[#60718B] bg-blue-50/20">Self-administered online without supervised proctoring.</td>
                <td className="p-4 sm:p-5 text-[#60718B]">Individually proctored by licensed clinical psychologists.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#07152F] bg-[#F8FBFF]/60">Best Used For</td>
                <td className="p-4 sm:p-5 text-[#07152F] font-bold bg-blue-50/20">Mental training, learning from mistakes, and recreational problem-solving.</td>
                <td className="p-4 sm:p-5 text-[#60718B]">Formal medical, legal, or educational evaluations.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Deep Psychometric Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white border border-[#E2EAF7] shadow-2xs">
            <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#2453FF] text-xs font-black flex items-center justify-center mb-2">01</span>
            <span className="font-extrabold text-[#07152F] block mb-1 text-sm">Psychometric Reliability</span>
            <p className="text-xs text-[#60718B] leading-relaxed">
              Reliability reflects measurement consistency across repeated testing under identical conditions. Clinical tests achieve reliability coefficients exceeding 0.90 through multi-hour test batteries. Shorter online quizzes naturally have wider standard errors of measurement.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E2EAF7] shadow-2xs">
            <span className="w-6 h-6 rounded-lg bg-purple-50 text-purple-600 text-xs font-black flex items-center justify-center mb-2">02</span>
            <span className="font-extrabold text-[#07152F] block mb-1 text-sm">Construct Validity</span>
            <p className="text-xs text-[#60718B] leading-relaxed">
              Validity examines whether an assessment measures the true psychological trait it claims to evaluate (such as general fluid intelligence $g$) rather than uncalibrated speed or specific background knowledge.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E2EAF7] shadow-2xs">
            <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-black flex items-center justify-center mb-2">03</span>
            <span className="font-extrabold text-[#07152F] block mb-1 text-sm">Population Standardization</span>
            <p className="text-xs text-[#60718B] leading-relaxed">
              Standardization requires establishing normative baselines across thousands of individuals. Without calibrated age-matched sample norms, online quizzes cannot legitimately output clinical IQ numbers.
            </p>
          </div>
        </div>

        {/* Narrative on Environmental and State Confounders */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs text-xs sm:text-sm text-[#60718B] leading-relaxed">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <Activity className="w-4 h-4 text-[#2453FF]" />
            <h4 className="font-bold text-sm text-[#07152F]">Confounding Factors That Affect Practice Performance</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#2453FF] mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Situational &amp; Physiological Fluctuations</span>
              </div>
              <p className="text-[#07152F] leading-relaxed">
                Your performance on any reasoning assessment fluctuates naturally based on situational factors. Sleep deprivation, acute stress, digital distractions, caffeine consumption, and testing anxiety can all lower your score on a given day.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E2EAF7]">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 mb-1.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Puzzle Familiarity &amp; The Practice Effect</span>
              </div>
              <p className="text-[#60718B] leading-relaxed">
                Similarly, familiarity with recurring puzzle mechanics creates a well-documented practice effect. Someone who frequently solves matrix puzzles will naturally navigate them more efficiently than someone encountering them for the first time, independent of innate intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. H2: HOW TO PREPARE FOR AN IQ TEST                                      */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <ListChecks className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Interactive Checklist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            How to Prepare for an IQ Test
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
            You do not need to memorize encyclopedia facts or vocabulary lists before taking a reasoning assessment. Effective preparation focuses on optimizing your mental state, managing your environment, and applying systematic problem-solving habits.
          </p>
        </div>

        {/* Interactive Checklist Component */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(7,21,47,0.04)] mb-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60718B]">
              Personal Preparation Checklist
            </span>
            <div className="flex items-center gap-3">
              <div className="w-24 bg-[#E2EAF7] h-2 rounded-full overflow-hidden hidden sm:block">
                <div
                  className="bg-[#2453FF] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(completedChecklistCount / 5) * 100}%` }}
                />
              </div>
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#2453FF]">
                {completedChecklistCount} of 5 Completed
              </span>
            </div>
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
                      ? 'bg-[#F8FBFF] border-[#2453FF]/30 shadow-xs'
                      : 'bg-white border-[#E2EAF7] hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center flex-none mt-0.5 border transition-colors ${
                      isChecked
                        ? 'bg-[#2453FF] border-[#2453FF] text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#07152F] mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#60718B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* In-Depth Advisory Guidance Styled as Elevated Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#60718B] leading-relaxed">
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2453FF] flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">Physiological Readiness &amp; Focus</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-50 text-[#2453FF]">Prefrontal Function</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#07152F] leading-relaxed">
                Cognitive tasks place substantial demands on prefrontal cortex executive functions. Studies show that testing while adequately rested, properly hydrated, and clear-headed improves working memory and processing speed far more than last-minute cramming.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">Strategic Process of Elimination</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800">Negative Proof</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#07152F] leading-relaxed">
                In multiple-choice tests, disproving three incorrect options is mathematically identical to proving the correct one. When an abstract pattern seems obscure, actively look for features that disqualify candidate choices—such as an incorrect vertex count or inverted shading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. H2: WHAT IS AN IQ TEST, AND HOW IS IQ MEASURED?                        */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Info className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Educational Explainer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            What Is an IQ Test, and How Is IQ Measured?
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
            An IQ (Intelligence Quotient) test is a psychometric instrument designed to evaluate cognitive reasoning relative to standardized reference groups. Understanding how these tests originated and how scoring evolved is essential for placing modern scores into proper scientific context.
          </p>
        </div>

        {/* Scientific Bell Curve SVG Visualization & Population Table */}
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-8 shadow-[0_10px_30px_rgba(7,21,47,0.05)] mb-8">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60718B]">
              Standard Normal Distribution (Gaussian Bell Curve)
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#2453FF]">
              Mean: 100 • Standard Deviation: 15
            </span>
          </div>

          {/* SVG Diagram with Gradient Fills */}
          <div className="p-4 bg-[#F8FBFF] rounded-2xl border border-[#E2EAF7] mb-6">
            <svg viewBox="0 0 500 220" className="w-full h-auto max-h-56">
              <defs>
                <linearGradient id="bellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2453FF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2453FF" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <line x1="50" y1="180" x2="450" y2="180" stroke="#CBD5E1" strokeWidth="2" />
              <path
                d="M 183 180 Q 216 110 250 30 Q 284 110 317 180 Z"
                fill="url(#bellGrad)"
              />
              <path
                d="M 50 178 Q 150 176 200 130 Q 235 60 250 30 Q 265 60 300 130 Q 350 176 450 178"
                fill="none"
                stroke="#2453FF"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <line x1="250" y1="30" x2="250" y2="180" stroke="#2453FF" strokeWidth="2" strokeDasharray="4,3" />

              <text x="116" y="200" fill="#64748B" fontSize="11" textAnchor="middle">70 (-2σ)</text>
              <text x="183" y="200" fill="#64748B" fontSize="11" textAnchor="middle">85 (-1σ)</text>
              <text x="250" y="200" fill="#07152F" fontSize="13" fontWeight="bold" textAnchor="middle">100 (Mean)</text>
              <text x="317" y="200" fill="#64748B" fontSize="11" textAnchor="middle">115 (+1σ)</text>
              <text x="384" y="200" fill="#64748B" fontSize="11" textAnchor="middle">130 (+2σ)</text>

              <text x="250" y="115" fill="#2453FF" fontSize="13" fontWeight="bold" textAnchor="middle">68.2% of Population</text>
            </svg>
            <p className="text-[11px] text-center text-[#60718B] mt-2 font-medium">
              Illustrative Standardized Scale (Mean = 100, SD = 15). Practice assessments evaluate raw accuracy, not calibrated deviation scores.
            </p>
          </div>

          {/* Standard Normal Distribution Spread Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#E2EAF7] bg-white shadow-2xs mb-6">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F] font-bold">
                <tr>
                  <th className="p-3">Standardized IQ Range</th>
                  <th className="p-3">Standard Deviation (σ)</th>
                  <th className="p-3">Theoretical Population Spread</th>
                  <th className="p-3">Psychometric Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#60718B]">
                <tr>
                  <td className="p-3 font-extrabold text-[#2453FF]">130 and above</td>
                  <td className="p-3">+2σ and higher</td>
                  <td className="p-3 font-semibold text-[#07152F]">Top ~2.3% of population</td>
                  <td className="p-3 font-medium text-[#07152F]">High-IQ Mensa Qualification Benchmark</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#07152F]">115 – 129</td>
                  <td className="p-3">+1σ to +2σ</td>
                  <td className="p-3 font-semibold text-[#07152F]">~13.6% of population</td>
                  <td className="p-3">Superior / High Average Range</td>
                </tr>
                <tr className="bg-blue-50/30">
                  <td className="p-3 font-bold text-[#07152F]">85 – 114</td>
                  <td className="p-3">-1σ to +1σ</td>
                  <td className="p-3 font-extrabold text-[#2453FF]">68.2% of population</td>
                  <td className="p-3 font-semibold text-[#07152F]">Standard Average Baseline (Mean = 100)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#07152F]">70 – 84</td>
                  <td className="p-3">-2σ to -1σ</td>
                  <td className="p-3 font-semibold text-[#07152F]">~13.6% of population</td>
                  <td className="p-3">Below Average / Borderline Range</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#07152F]">Below 70</td>
                  <td className="p-3">Below -2σ</td>
                  <td className="p-3 font-semibold text-[#07152F]">~2.3% of population</td>
                  <td className="p-3">Lower Clinical Distribution Baseline</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Historical Evolution Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#E2EAF7] bg-white shadow-2xs mb-6">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F] font-bold">
                <tr>
                  <th className="p-3 w-1/4">Measurement Model</th>
                  <th className="p-3 w-1/3">Historic Ratio IQ (Binet-Simon, 1905)</th>
                  <th className="p-3 w-5/12">Modern Deviation IQ (Wechsler, 1939)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#60718B]">
                <tr>
                  <td className="p-3 font-bold text-[#07152F]">Core Calculation</td>
                  <td className="p-3 font-mono text-[11px] bg-slate-50/50">(Mental Age ÷ Chronological Age) × 100</td>
                  <td className="p-3 font-bold text-[#2453FF] bg-blue-50/30">Gaussian Normal Curve (Mean = 100, SD = 15)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#07152F]">Target Population</td>
                  <td className="p-3">School-age children (developmental placement)</td>
                  <td className="p-3">Universal adolescent and adult populations</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#07152F]">Key Adult Limitation</td>
                  <td className="p-3">Breaks down in adulthood as chronological age progresses</td>
                  <td className="p-3 font-medium text-emerald-700">Calibrated against demographically stratified peers</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#07152F]">Psychometric Baseline</td>
                  <td className="p-3">Mental maturity vs calendar year ratio</td>
                  <td className="p-3 font-semibold text-[#07152F]">Deviation from population mean (+/- standard deviations)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#60718B] leading-relaxed">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#2453FF] mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Alfred Binet &amp; Théodore Simon (Early 1900s)</span>
                </div>
                <h4 className="font-bold text-sm text-[#07152F] mb-1.5">Historical Ratio IQ vs. Modern Deviation IQ</h4>
                <p className="text-[#07152F]">
                  In the early 1900s, French psychologist Alfred Binet and Théodore Simon introduced the original ratio IQ formula: (Mental Age ÷ Chronological Age) × 100. While functional for evaluating school children, this formula broke down in adulthood as chronological age progressed without equivalent mental age changes.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E2EAF7]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 mb-1 flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-purple-600" />
                  <span>David Wechsler's Deviation Model (1939)</span>
                </div>
                <p className="text-[#60718B]">
                  In 1939, David Wechsler resolved this by introducing the Deviation IQ model. Rather than calculating mental age ratios, modern IQ tests compare your performance to a statistically calibrated bell curve of peer results, setting the average score at 100 with a standard deviation of 15.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#2453FF] mb-1 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>The 68-95-99.7 Empirical Normal Rule</span>
                </div>
                <h4 className="font-bold text-sm text-[#07152F] mb-1.5">Statistical Spread &amp; The Normal Distribution</h4>
                <p className="text-[#07152F]">
                  Under the standard normal distribution (68-95-99.7 rule), approximately 68.2% of the population scores between 85 and 115 (within one standard deviation of the mean). Approximately 95.4% score between 70 and 130. Scores above 130 represent the top ~2.3% of test-takers, the benchmark commonly used by high-IQ organizations such as Mensa.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E2EAF7]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scientific Population Calibration Principle</span>
                </div>
                <p className="text-[#60718B]">
                  Importantly, this mathematical distribution only applies to standardized tests normed against representative population samples. An online quiz score of 80% accuracy cannot be converted into an IQ score of 130 without rigorous population calibration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Substantive Psychometric Limitations and the Flynn Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#60718B] leading-relaxed">
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2453FF] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">Age-Based Norming &amp; Cohort Calibration</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-50 text-[#2453FF]">Demographics</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#07152F] leading-relaxed">
                Clinical intelligence tests rely heavily on age-stratified norms. Processing speed and working memory peak in young adulthood and naturally shift over the lifespan, whereas crystallized vocabulary and knowledge often expand well into later decades. Formal psychometrics always balances raw results against verified age cohorts.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">The Flynn Effect &amp; Cultural Loading</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">Longitudinal Shifts</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#07152F] leading-relaxed">
                First documented by political scientist James Flynn, average raw scores on intelligence tests increased worldwide throughout the 20th century, requiring psychometricians to periodically re-standardize test baselines. This highlights that test scores reflect broader environmental, educational, and nutritional improvements over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. H2: CAN YOU IMPROVE YOUR IQ TEST PERFORMANCE?                          */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Continuous Improvement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            Can You Improve Your IQ Test Performance?
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
            One of the most persistent questions in cognitive science is whether a person can increase their intelligence. While baseline fluid intelligence has substantial genetic heritability, your ability to perform well on reasoning assessments can definitely improve through targeted practice and strategic problem solving.
          </p>
        </div>

        {/* 4 Connected Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#2453FF] font-extrabold text-xs flex items-center justify-center mb-3">
              1
            </span>
            <h3 className="font-bold text-sm text-[#07152F] mb-1.5">
              Learn Common Patterns
            </h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              Familiarize yourself with recurring puzzle mechanisms: second-order difference sequences, alternating operators, rotational symmetries, and Boolean cancellations.
            </p>
          </div>

          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 font-extrabold text-xs flex items-center justify-center mb-3">
              2
            </span>
            <h3 className="font-bold text-sm text-[#07152F] mb-1.5">
              Review Incorrect Answers
            </h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              Analyze missed questions to determine whether mistakes stemmed from misreading instructions, rushing under time pressure, or misunderstanding a governing rule.
            </p>
          </div>

          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 font-extrabold text-xs flex items-center justify-center mb-3">
              3
            </span>
            <h3 className="font-bold text-sm text-[#07152F] mb-1.5">
              Practise Diverse Formats
            </h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              Avoid practicing only your favorite puzzle types. Engaging with unfamiliar question formats builds broader mental flexibility and adaptability.
            </p>
          </div>

          <div className="premium-card p-6 rounded-3xl">
            <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-extrabold text-xs flex items-center justify-center mb-3">
              4
            </span>
            <h3 className="font-bold text-sm text-[#07152F] mb-1.5">
              Focus on Metacognition
            </h3>
            <p className="text-xs text-[#60718B] leading-relaxed">
              Shift focus from merely tracking accuracy scores to mastering the underlying analytical methods that make problem solving faster and more reliable.
            </p>
          </div>
        </div>

        {/* Deep Scientific Discussion on Task Familiarity vs. General Intelligence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#60718B] leading-relaxed">
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2453FF] flex items-center justify-center">
                  <Brain className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">Practice Effects vs. True Cognitive Enhancement</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-50 text-[#2453FF]">G-Factor Science</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#07152F] leading-relaxed">
                Cognitive scientists draw an important distinction between <em>task-specific improvement</em> and increases in <em>general fluid intelligence ($g$)</em>. Solving hundreds of matrix puzzles makes you faster at recognizing matrix rules. This is known as the psychometric practice effect. While it may not dramatically raise your fundamental biological processing capacity, it substantially sharpens your operational problem-solving efficiency and confidence.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-[#E2EAF7] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#07152F]">Lifestyle Foundations of Cognitive Health</h4>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800">Neuroplasticity</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7]">
              <p className="text-[#07152F] leading-relaxed">
                Long-term cognitive performance relies on foundational health habits. Clinical research consistently links regular aerobic exercise, high-quality slow-wave sleep, and mental engagement with brain-derived neurotrophic factor (BDNF) production and sustained neuroplasticity. Managing chronic stress and getting sufficient sleep helps ensure your cognitive faculties operate at peak capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. H2: EXPLORE MORE IQ TESTS AND LEARNING RESOURCES                      */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 bg-[#F2F7FF] rounded-3xl p-6 sm:p-10 border border-[#E2EAF7]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Learning Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            Explore More IQ Tests and Learning Resources
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
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
              className="p-6 rounded-2xl bg-white border border-[#E2EAF7] hover:border-[#2453FF]/40 transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-sm text-[#07152F] mb-2">{res.title}</h3>
                <p className="text-xs text-[#60718B] leading-relaxed mb-4">{res.desc}</p>
              </div>
              <span className="text-[11px] font-bold text-[#2453FF] flex items-center gap-1 group">
                <span>Coming Soon</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-[#60718B]">
          *These dedicated modules are part of our expanding open-access cognitive library. Links will activate as individual guides complete peer review.*
        </p>
      </section>

      {/* ========================================================================= */}
      {/* 11. H2: FREQUENTLY ASKED QUESTIONS                                        */}
      {/* ========================================================================= */}
      <section id="faq" className="scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#2453FF] border border-[#E0E7FF] mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#2453FF]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#07152F] mb-3">
            Frequently Asked Questions About IQ Tests
          </h2>
          <p className="text-sm sm:text-base text-[#60718B] leading-relaxed">
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
              className="group p-5 bg-white rounded-2xl border border-[#E2EAF7] hover:border-slate-300 transition-all open:bg-slate-50/50 open:shadow-xs"
            >
              <summary className="font-bold text-sm text-[#07152F] cursor-pointer flex items-center justify-between list-none">
                <span>{faq.q}</span>
                <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-open:rotate-180 transition-transform">
                  <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-[#60718B] leading-relaxed pt-2 border-t border-slate-100">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. H2: ASSESSMENT METHODOLOGY AND SCORING FRAMEWORK                      */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24 p-6 sm:p-10 rounded-3xl bg-[#07152F] text-white relative overflow-hidden border border-slate-800 shadow-2xl">
        {/* Ambient Radial Blue Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2453FF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#4779FF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block">
            METHODOLOGY &amp; ETHICAL STANDARDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            About This Assessment and Our Scoring Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left my-6">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-inner">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Assessment Architecture &amp; Verification</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our assessment framework is built upon 20 verified questions divided evenly across numerical, logical, abstract, and spatial reasoning domains. Every question has exactly one unambiguous, peer-reviewed correct answer.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-inner">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Transparent Scoring Calculation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Scoring is completely transparent: every correct answer earns exactly one point, while incorrect or skipped questions earn zero points. Your overall accuracy percentage is calculated as (Correct Answers ÷ 20) × 100. Category scores show your exact standing within each cognitive domain out of 5 points.
              </p>
            </div>
          </div>
          <div className="p-4.5 bg-slate-800/90 rounded-2xl border border-slate-700/70 text-[11px] sm:text-xs text-slate-300 leading-relaxed text-left flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              <strong>Ethical &amp; Psychometric Disclosure:</strong> This platform is designed solely for self-directed reasoning practice, cognitive education, and personal interest. It is unnormed against broad demographic populations and does not replace standardized clinical examinations such as the Wechsler Adult Intelligence Scale (WAIS) or Stanford-Binet. Its results should never be used for academic placement, psychiatric diagnosis, employment decisions, or membership qualification.
            </p>
          </div>
          <div className="pt-4">
            <Link
              href="/test"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#2453FF] hover:bg-[#1B40DF] transition-all shadow-md cta-glow"
            >
              <span>Start Your Free IQ Test Now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};
