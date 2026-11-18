'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  RotateCw,
  Box,
  Layers,
  Eye,
  Grid,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Sparkles,
  Award,
  Compass,
  Check,
  X,
  FileCheck,
} from 'lucide-react';

interface SpatialComprehensiveArticleProps {
  onStartClick?: () => void;
}

export const SpatialComprehensiveArticle: React.FC<SpatialComprehensiveArticleProps> = ({
  onStartClick,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What is a spatial reasoning test?',
      a: 'A spatial reasoning test asks you to visualize and manipulate two-dimensional or three-dimensional objects. Common tasks include mental rotation, cube folding, mirror reflections, paper folding, spatial orientation, and block counting. These tests are often used for aptitude practice and some technical recruitment assessments.',
    },
    {
      q: 'Is a spatial reasoning test the same as a spatial awareness test?',
      a: 'The terms are often used interchangeably on aptitude-testing websites. Both may involve understanding objects, positions, directions, and visual transformations. However, the exact question types and skills assessed depend on the provider and purpose of the test.',
    },
    {
      q: 'What questions appear in a spatial reasoning test?',
      a: 'Typical questions involve rotated shapes, folded cube nets, mirror images, paper hole-punching patterns, different views of three-dimensional objects, and counting cubes in block structures. Some assessments focus on only a few of these categories, while others use a mixed format.',
    },
    {
      q: 'Is this spatial reasoning practice test free?',
      a: 'The interactive spatial reasoning test is free and does not require an account. It includes 20 visual questions and worked explanations after submission. It is an educational practice assessment, not an official employer or clinical intelligence test.',
    },
    {
      q: 'How long does a spatial reasoning test take?',
      a: 'The duration depends on the assessment. Our planned Test Mode offers an optional 15-minute timer for 20 questions. Employer tests may use different time limits, question counts, and navigation rules. Always follow the instructions for the specific test you are preparing to take.',
    },
    {
      q: 'How do you solve mental rotation questions?',
      a: 'Identify a distinctive feature of the original shape, such as an unusual corner or marked face. Mentally rotate the entire object while preserving its structure. Compare the resulting orientation with the answer choices and eliminate options that require a reflection or other prohibited transformation.',
    },
    {
      q: 'How can you tell a mirror image from a rotation?',
      a: 'Track two asymmetric features and their relative arrangement. A rotation changes orientation while preserving the object’s handedness. A reflection can reverse that handedness. Symmetric figures may not reveal the difference, so use distinctive markers whenever possible.',
    },
    {
      q: 'How do you solve cube folding questions?',
      a: 'Identify the six connected faces and imagine folding them into a cube. Check which faces become adjacent and which are opposite. Then verify the orientation of face symbols in each answer option. Do not rely only on matching the colors or labels shown on the cube.',
    },
    {
      q: 'How do you answer paper folding questions?',
      a: 'Reverse the folds in the opposite order from which they occurred. Track the punched hole through each unfolding stage and reflect its position across the relevant crease when appropriate. Finally, verify both the number of holes and their locations.',
    },
    {
      q: 'Can spatial reasoning improve with practice?',
      a: 'Yes, research supports the trainability of spatial skills. Practice can help people learn transformation strategies and improve performance on spatial tasks. The size and transfer of improvement depend on the training and circumstances, and no specific online test can guarantee a higher IQ or employment-assessment result.',
    },
    {
      q: 'What is a good score on a spatial reasoning test?',
      a: 'There is no universal passing score. On our practice test, results show the number and percentage of questions answered correctly. For example, 16/20 means 80% accuracy. Whether that would be considered strong performance on an employer assessment depends on its difficulty, norms, and selection requirements.',
    },
    {
      q: 'Are spatial reasoning tests the same as IQ tests?',
      a: 'Not necessarily. Spatial reasoning tasks may form part of a broader intelligence assessment, but a standalone spatial practice quiz is not equivalent to a standardized full-scale IQ test. Our test measures accuracy on its practice questions and does not produce a validated IQ score.',
    },
  ];

  return (
    <article className="py-12 sm:py-16 bg-[#F8FBFF] border-t border-[#E2EAF7] text-[#334155] leading-relaxed">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
          {/* Main Card 1: What Is a Spatial Reasoning Test? */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#2453FF] text-[11px] font-black uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Foundation Guide</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
              What Is a Spatial Reasoning Test?
            </h2>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              A spatial reasoning test measures how well you can visualize, rotate, fold, and
              understand objects in two or three dimensions. Instead of answering questions based mainly
              on words or calculations, you examine shapes, diagrams, and objects to identify how they
              relate to one another.
            </p>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              For example, you might need to decide which picture shows a rotated object, which faces
              of a cube will touch after folding, or what a paper sheet will look like after being
              unfolded.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7] space-y-1.5">
                <span className="text-xs font-bold text-[#07152F] block">Aptitude & Technical Hiring</span>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Used by technical employers to assess candidates preparing for engineering, aviation, architecture, and design roles.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#E2EAF7] space-y-1.5">
                <span className="text-xs font-bold text-[#07152F] block">STEM Learning & Drawing</span>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Useful practice exercises for students studying technical drawing, geometry, physics, and three-dimensional modeling.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] pt-2">
              Our free spatial reasoning practice test focuses on six question types: mental
              rotation, cube folding, mirror reflections, paper folding, spatial orientation, and block
              counting.
            </p>
          </div>

          {/* Main Card 2: What Does Spatial Reasoning Measure? */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
              What Does Spatial Reasoning Measure?
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Spatial reasoning involves four overlapping cognitive dimensions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#07152F]">
                  <Layers className="w-4 h-4 text-[#2453FF]" />
                  <span>Spatial Visualization</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Imagining how an object changes when it is folded, unfolded, or rearranged in space.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#07152F]">
                  <RotateCw className="w-4 h-4 text-[#2453FF]" />
                  <span>Mental Rotation</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Recognizing and tracking an object’s landmarks after it has been turned along 2D or 3D axes.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#07152F]">
                  <Eye className="w-4 h-4 text-[#2453FF]" />
                  <span>Spatial Orientation</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Understanding how an object appears when viewed from different directions (plan, elevation, side).
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#07152F]">
                  <Grid className="w-4 h-4 text-[#2453FF]" />
                  <span>Spatial Relationships</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Recognizing relative positions, directions, distances, and solid block arrangements.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B]">
              These abilities overlap, but they are not identical. Someone may find simple rotations
              easy while struggling with complex cube nets. Practising multiple question types develops a balanced visual skill set.
            </p>
          </div>

          {/* Main Card 3: How Does Our Test Work & Category Table */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
              How Does Our Free Spatial Reasoning Test Work?
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Our test is designed for anyone preparing for employment assessments or seeking to sharpen their visual abilities. It features exactly 20 randomized questions from a validated 60-question bank:
            </p>

            <div className="overflow-x-auto border border-[#E2EAF7] rounded-2xl shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F] font-bold">
                  <tr>
                    <th className="p-3 sm:p-4">Question Type</th>
                    <th className="p-3 sm:p-4 text-center">Questions in Test</th>
                    <th className="p-3 sm:p-4">Core Skill Evaluated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2EAF7] text-[#475569]">
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-[#07152F]">Mental rotation</td>
                    <td className="p-3 sm:p-4 text-center font-extrabold text-[#2453FF]">5</td>
                    <td className="p-3 sm:p-4 text-xs">90°, 180°, and 270° rigid body rotations without reflection</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-[#07152F]">Cube folding and nets</td>
                    <td className="p-3 sm:p-4 text-center font-extrabold text-[#2453FF]">4</td>
                    <td className="p-3 sm:p-4 text-xs">6-square net folding, opposite faces &amp; corner vertex triads</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-[#07152F]">Mirror reflections</td>
                    <td className="p-3 sm:p-4 text-center font-extrabold text-[#2453FF]">3</td>
                    <td className="p-3 sm:p-4 text-xs">Inverting chirality across declared vertical &amp; horizontal axes</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-[#07152F]">Paper folding</td>
                    <td className="p-3 sm:p-4 text-center font-extrabold text-[#2453FF]">3</td>
                    <td className="p-3 sm:p-4 text-xs">Multi-layer fold reversal and symmetric hole punch patterns</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-[#07152F]">Spatial orientation and views</td>
                    <td className="p-3 sm:p-4 text-center font-extrabold text-[#2453FF]">3</td>
                    <td className="p-3 sm:p-4 text-xs">Orthographic projections (Top, Front, Side) of 3D polycubes</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-[#07152F]">Block counting</td>
                    <td className="p-3 sm:p-4 text-center font-extrabold text-[#2453FF]">2</td>
                    <td className="p-3 sm:p-4 text-xs">Counting visible &amp; occluded cubes under the solid-base rule</td>
                  </tr>
                  <tr className="bg-[#F8FBFF] font-bold text-[#07152F]">
                    <td className="p-3 sm:p-4">Total Test Questions</td>
                    <td className="p-3 sm:p-4 text-center text-[#2453FF]">20</td>
                    <td className="p-3 sm:p-4 text-xs">Complete multi-domain spatial aptitude assessment</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-2xl bg-[#EEF4FF] border border-[#2453FF]/20 flex items-start gap-3 text-xs text-[#2453FF] leading-relaxed">
              <Clock className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Optional 15-Minute Timer:</strong> Practice under realistic assessment conditions (45 seconds per question average) or turn the timer off for self-paced learning.
              </span>
            </div>
          </div>

          {/* Main Card 4: Types of Spatial Reasoning Questions with Trap Badges */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
              Types of Spatial Reasoning Questions &amp; Common Pitfalls
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#2453FF] flex items-center justify-center font-bold text-xs">
                    <RotateCw className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-[#07152F]">1. Mental Rotation</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Turn an object around a specified angle in 2D or 3D. Rigid rotation preserves all internal lengths, angles, and handedness.
                </p>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-snug">
                  <strong>Common trap:</strong> Confusing a reflected mirror image with a valid rotation.
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    <Box className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-[#07152F]">2. Cube Folding &amp; Nets</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Fold a flat 6-square net into a 3D cube. Check which three faces meet at a corner and verify face symbol orientations.
                </p>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-snug">
                  <strong>Common trap:</strong> Choosing a cube that displays opposite faces simultaneously.
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-xs">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-[#07152F]">3. Mirror Reflections</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Reflect points across a declared axis. Inverts coordinates perpendicular to the axis while reversing chirality.
                </p>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-snug">
                  <strong>Common trap:</strong> Rotating the shape mentally instead of inverting across the mirror line.
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-[#07152F]">4. Paper Folding</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Track multi-step folds and punched holes. Reverse the fold sequence in reverse chronological order.
                </p>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-snug">
                  <strong>Common trap:</strong> Counting holes correctly but placing them at incorrect coordinates.
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-[#07152F]">5. Spatial 3D Views</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Convert 3D polycube arrangements into 2D orthographic silhouettes from the front, top, or side line of sight.
                </p>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-snug">
                  <strong>Common trap:</strong> Drawing angled perspective lines instead of parallel projections.
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs">
                    <Grid className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-[#07152F]">6. Block Counting</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Enumerate unit cubes in stepped structures under the explicit rule that all columns are solid to the floor.
                </p>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-snug">
                  <strong>Common trap:</strong> Counting only visible exterior faces rather than full stack heights.
                </div>
              </div>
            </div>
          </div>

          {/* Main Card 5: Six Worked Examples */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
              Spatial Reasoning Questions and Answers: Six Worked Examples
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              The following original examples demonstrate the six main question types with full step-by-step solutions and practical solving tips:
            </p>

            <div className="space-y-4">
              {/* Example 1 */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2453FF] block">
                  Example 1: Identifying a Rotated Shape
                </span>
                <h3 className="text-sm font-bold text-[#07152F]">
                  Which option shows the reference shape after a 90° clockwise rotation, without reflection?
                </h3>
                <p className="text-xs text-[#475569]">
                  Reference: Three squares forming a vertical line on the left, with one additional square extending right from the bottom.
                </p>
                <div className="p-3 bg-white rounded-xl border border-[#E2EAF7] text-xs text-[#475569] space-y-1">
                  <p className="font-bold text-emerald-700">Correct Answer: Option B (Horizontal row of 3 with square below left end)</p>
                  <p>1. The vertical 3-square arm rotates 90° clockwise to become a horizontal row.</p>
                  <p>2. The bottom protrusion now extends downward from the trailing left end.</p>
                  <p className="font-semibold text-[#2453FF] pt-1">
                    Solving Tip: Track one distinctive corner or protrusion. Do not rotate parts separately.
                  </p>
                </div>
              </div>

              {/* Example 2 */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2453FF] block">
                  Example 2: Finding Opposite Faces in a Cube Net
                </span>
                <h3 className="text-sm font-bold text-[#07152F]">
                  Which face will be opposite face C when folded into a cube?
                </h3>
                <p className="text-xs text-[#475569]">
                  Net arrangement: Horizontal strip [B, A, C, D, E, F] with squares sharing full edges.
                </p>
                <div className="p-3 bg-white rounded-xl border border-[#E2EAF7] text-xs text-[#475569] space-y-1">
                  <p className="font-bold text-emerald-700">Correct Answer: Face E</p>
                  <p>1. Treat C as the front face. A and D become left and right faces.</p>
                  <p>2. E folds around the edge of D to form the parallel face directly opposite C.</p>
                  <p className="font-semibold text-[#2453FF] pt-1">
                    Solving Tip: Opposite faces in a 6-face cube net never share an edge or touch at a corner.
                  </p>
                </div>
              </div>

              {/* Example 3 */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2453FF] block">
                  Example 3: Distinguishing a Mirror Image From a Rotation
                </span>
                <h3 className="text-sm font-bold text-[#07152F]">
                  A figure is reflected across a vertical mirror line. Which option is the correct reflection?
                </h3>
                <div className="p-3 bg-white rounded-xl border border-[#E2EAF7] text-xs text-[#475569] space-y-1">
                  <p className="font-bold text-emerald-700">Correct Answer: Option B (Swaps left and right features)</p>
                  <p>1. A vertical reflection reverses horizontal coordinates while preserving vertical height.</p>
                  <p>2. Crucially, reflection inverts handedness (chirality), which rotation alone cannot reproduce.</p>
                  <p className="font-semibold text-[#2453FF] pt-1">
                    Solving Tip: Use an asymmetric marker (dot or notch) to distinguish reflection from rotation.
                  </p>
                </div>
              </div>

              {/* Example 4 */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2453FF] block">
                  Example 4: Predicting an Unfolded Paper Pattern
                </span>
                <h3 className="text-sm font-bold text-[#07152F]">
                  A square sheet is folded twice and punched in the outer corner. Where will the holes appear?
                </h3>
                <div className="p-3 bg-white rounded-xl border border-[#E2EAF7] text-xs text-[#475569] space-y-1">
                  <p className="font-bold text-emerald-700">Correct Answer: Option C (Four holes, one near each corner)</p>
                  <p>1. Two folds produce four layers of paper.</p>
                  <p>2. Reversing the folds reflects the single hole symmetrically across both fold creases.</p>
                  <p className="font-semibold text-[#2453FF] pt-1">
                    Solving Tip: Reverse folds in exact reverse chronological order (last fold undone first).
                  </p>
                </div>
              </div>

              {/* Example 5 */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2453FF] block">
                  Example 5: Matching Front and Side Views
                </span>
                <h3 className="text-sm font-bold text-[#07152F]">
                  Columns on a 2×2 base: Front-left 1, Front-right 2, Back-left 3, Back-right 1. What is the front silhouette?
                </h3>
                <div className="p-3 bg-white rounded-xl border border-[#E2EAF7] text-xs text-[#475569] space-y-1">
                  <p className="font-bold text-emerald-700">Correct Answer: Left height 3, Right height 2</p>
                  <p>1. Front silhouette takes the maximum height in each column: max(1, 3) = 3; max(2, 1) = 2.</p>
                  <p className="font-semibold text-[#2453FF] pt-1">
                    Solving Tip: In orthographic projections, the dimension parallel to your line of sight compresses to zero.
                  </p>
                </div>
              </div>

              {/* Example 6 */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2453FF] block">
                  Example 6: Counting Cubes in a 3D Structure
                </span>
                <h3 className="text-sm font-bold text-[#07152F]">
                  Six vertical stacks: Front [1, 2, 1], Back [2, 1, 3]. Total cubes?
                </h3>
                <div className="p-3 bg-white rounded-xl border border-[#E2EAF7] text-xs text-[#475569] space-y-1">
                  <p className="font-bold text-emerald-700">Correct Answer: 10 cubes</p>
                  <p>1. Front row: 1 + 2 + 1 = 4 cubes. Back row: 2 + 1 + 3 = 6 cubes. Total = 10 cubes.</p>
                  <p className="font-semibold text-[#2453FF] pt-1">
                    Solving Tip: Add full column heights rather than trying to count visible perspective faces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Card 6: Spatial vs Abstract vs Logical Comparison Table */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
              Spatial Reasoning vs. Abstract and Logical Reasoning
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              While spatial, abstract, and logical reasoning tests all measure analytical thinking, each targets a distinct problem-solving mechanism:
            </p>

            <div className="overflow-x-auto border border-[#E2EAF7] rounded-2xl shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F] font-bold">
                  <tr>
                    <th className="p-3 sm:p-4">Reasoning Type</th>
                    <th className="p-3 sm:p-4">Primary Mental Operation</th>
                    <th className="p-3 sm:p-4">Typical Challenge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2EAF7] text-[#475569]">
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-[#07152F]">Spatial Reasoning</td>
                    <td className="p-3 sm:p-4">Manipulating 2D/3D shapes, folding nets &amp; rotating figures</td>
                    <td className="p-3 sm:p-4 text-xs">Which 3D cube can be formed from this flat net?</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-[#07152F]">
                      <Link href="/abstract-reasoning-test" className="text-[#2453FF] hover:underline">
                        Abstract Reasoning →
                      </Link>
                    </td>
                    <td className="p-3 sm:p-4">Identifying underlying rules in non-verbal matrix patterns</td>
                    <td className="p-3 sm:p-4 text-xs">Which symbol completes the 3×3 matrix sequence?</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-[#07152F]">
                      <Link href="/logical-reasoning-test" className="text-[#2453FF] hover:underline">
                        Logical Reasoning →
                      </Link>
                    </td>
                    <td className="p-3 sm:p-4">Drawing valid deductive conclusions from stated premises</td>
                    <td className="p-3 sm:p-4 text-xs">Which conclusion must be true based on the statements?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Main Card 7: Common Mistakes Table */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
              Common Mistakes in Spatial Reasoning Tests
            </h2>

            <div className="overflow-x-auto border border-[#E2EAF7] rounded-2xl shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F] font-bold">
                  <tr>
                    <th className="p-3 sm:p-4">Common Mistake</th>
                    <th className="p-3 sm:p-4">Systematic Correction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2EAF7] text-[#475569]">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-rose-600">Confusing rotation with reflection</td>
                    <td className="p-3 sm:p-4 text-emerald-800">Track an asymmetric landmark (dot or corner) to test chirality</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-rose-600">Checking face presence without orientation</td>
                    <td className="p-3 sm:p-4 text-emerald-800">Verify not only which faces touch, but which direction their symbols point</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-rose-600">Reversing paper folds forward</td>
                    <td className="p-3 sm:p-4 text-emerald-800">Unfold in strict reverse chronological order (last fold first)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-rose-600">Assuming hidden cubes exist without proof</td>
                    <td className="p-3 sm:p-4 text-emerald-800">Strictly follow the solid-base rule; never invent arbitrary hollow pockets</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Main Card 8: FAQ Accordion */}
          <div className="bg-white rounded-3xl border border-[#E2EAF7] p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#07152F] hover:bg-[#EEF4FF] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#2453FF]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-4.5 pt-0 text-xs text-[#475569] leading-relaxed border-t border-[#E2EAF7] bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Callout Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1B40DF] via-[#2453FF] to-[#3B66FF] text-white text-center space-y-4 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight">
              Ready to Challenge Your Spatial Reasoning?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
              Start the free 20-question practice assessment to evaluate your mental rotation, cube folding, and 3D visualization. Get worked visual solutions upon completion.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (onStartClick) {
                    onStartClick();
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-[#07152F] bg-white hover:bg-[#EEF4FF] shadow-sm transition-all cursor-pointer"
              >
                Start Free Spatial Reasoning Test
              </button>
              <Link
                href="/"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
              >
                Take Free Full IQ Test
              </Link>
            </div>
            <p className="text-[10.5px] text-blue-200 pt-2">
              Practice Notice: This is an educational practice assessment. It does not calculate an official IQ score or clinical psychometric result.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
