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
    <article className="py-14 sm:py-20 bg-white border-t border-[#E2EAF7] text-[#334155] leading-relaxed">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 space-y-14">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            What Is a Spatial Reasoning Test?
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            A spatial reasoning test measures how well you can visualize, rotate, fold, and
            understand objects in two or three dimensions. Instead of answering questions based mainly
            on words or calculations, you examine shapes, diagrams, and objects to identify how they
            relate to one another.
          </p>
          <p>
            For example, you might need to decide which picture shows a rotated object, which faces
            of a cube will touch after folding, or what a paper sheet will look like after being
            unfolded.
          </p>
          <p>
            Spatial reasoning tests are commonly used in aptitude assessment preparation,
            particularly for technical roles where understanding shapes, space, and orientation
            matters. They are also useful practice activities for students studying engineering,
            architecture, technical drawing, and other subjects involving three-dimensional
            objects.
          </p>
          <p>
            Our free spatial reasoning practice test focuses on six question types: mental
            rotation, cube folding, mirror reflections, paper folding, spatial orientation, and block
            counting.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            What Does Spatial Reasoning Measure?
          </h2>
          <p>Spatial reasoning involves several related abilities:</p>
          <ul className="space-y-2 list-disc pl-6 text-[#475569]">
            <li>
              <strong className="text-[#07152F]">Spatial visualization:</strong> Imagining how an
              object changes when it is folded, unfolded, or rearranged.
            </li>
            <li>
              <strong className="text-[#07152F]">Mental rotation:</strong> Recognizing an object
              after it has been turned.
            </li>
            <li>
              <strong className="text-[#07152F]">Spatial orientation:</strong> Understanding how an
              object appears from different viewpoints.
            </li>
            <li>
              <strong className="text-[#07152F]">Spatial relationships:</strong> Recognizing
              positions, directions, distances, and arrangements of objects.
            </li>
          </ul>
          <p>
            These abilities overlap, but they are not identical. Someone may find simple rotations
            easy while struggling with complex cube nets. Another person may understand
            three-dimensional structures well but make mistakes when distinguishing reflections from
            rotations. That is why practising several question types is more useful than relying on one
            kind of puzzle.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            Spatial Reasoning vs. Spatial Awareness and Spatial Ability
          </h2>
          <p>
            The terms spatial reasoning, spatial awareness, and spatial ability are often used
            together, especially on aptitude-testing websites.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="font-bold text-[#07152F] text-sm mb-1">Spatial Awareness</h3>
              <p className="text-xs text-[#64748B]">
                Broadly describes understanding where objects are and how they relate to their
                surroundings.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="font-bold text-[#07152F] text-sm mb-1">Spatial Ability</h3>
              <p className="text-xs text-[#64748B]">
                Refers to a wider collection of mental skills involving spatial information.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="font-bold text-[#07152F] text-sm mb-1">Spatial Reasoning</h3>
              <p className="text-xs text-[#64748B]">
                The direct application of those mental abilities to solve structured geometric problems.
              </p>
            </div>
          </div>
          <p className="pt-2">
            A spatial awareness test and a spatial reasoning test may therefore contain similar
            questions. However, their exact content depends on the assessment provider.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            How Does Our Free Spatial Reasoning Test Work?
          </h2>
          <p>
            Our spatial reasoning practice test is designed for people who want to become familiar
            with common visual aptitude questions before taking an assessment. The Test Mode
            includes 20 questions across six spatial reasoning categories. You do not need to be an
            engineer or have previous experience with spatial puzzles to begin.
          </p>

          <h3 className="text-xl font-bold text-[#07152F] pt-2">Starting the 20-Question Test</h3>
          <p>
            Select <strong>Start Free Spatial Reasoning Test</strong> at the top of this page to
            begin. Each question displays a visual problem and four answer choices. Your task is to
            identify the one option that satisfies the stated geometric rule.
          </p>

          {/* Table */}
          <div className="overflow-x-auto my-4 border border-[#E2EAF7] rounded-xl shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F] font-bold">
                <tr>
                  <th className="p-3.5">Question type</th>
                  <th className="p-3.5 text-right">Questions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#475569]">
                <tr>
                  <td className="p-3.5 font-medium text-[#07152F]">Mental rotation</td>
                  <td className="p-3.5 text-right font-bold text-[#2453FF]">5</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#07152F]">Cube folding and nets</td>
                  <td className="p-3.5 text-right font-bold text-[#2453FF]">4</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#07152F]">Mirror reflections</td>
                  <td className="p-3.5 text-right font-bold text-[#2453FF]">3</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#07152F]">Paper folding</td>
                  <td className="p-3.5 text-right font-bold text-[#2453FF]">3</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#07152F]">Spatial orientation and 3D views</td>
                  <td className="p-3.5 text-right font-bold text-[#2453FF]">3</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#07152F]">Block counting</td>
                  <td className="p-3.5 text-right font-bold text-[#2453FF]">2</td>
                </tr>
                <tr className="bg-[#F8FBFF] font-bold text-[#07152F]">
                  <td className="p-3.5">Total</td>
                  <td className="p-3.5 text-right">20</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Questions range from introductory to challenging. Those difficulty labels are internal
            practice categories, not standardized ability levels. Read the instructions carefully
            because some questions allow rotation but not reflection, while others require you to
            imagine folding, unfolding, or changing your viewing position.
          </p>

          <h3 className="text-xl font-bold text-[#07152F] pt-2">
            Using the Optional Timer and Question Navigation
          </h3>
          <p>
            Test Mode offers an optional 15-minute timer. With the timer enabled, you have an average
            of 45 seconds per question. That does not mean every problem should take exactly the same
            amount of time. Some visual transformations are easier to recognize than others.
          </p>
          <p>
            You can navigate between questions, change an answer, skip a difficult problem, or flag a
            question for later review before final submission. If you are new to spatial reasoning,
            consider completing your first attempt without a timer. Once the question types become
            familiar, try a timed session.
          </p>

          <h3 className="text-xl font-bold text-[#07152F] pt-2">
            Reviewing Your Answers and Results
          </h3>
          <p>
            After submitting your test, review your overall accuracy, category breakdown, and worked
            solutions. The explanations show the geometric relationship behind each correct answer
            rather than asking you to memorize a letter. For example, a cube-folding explanation may
            identify opposite faces, while a paper-folding explanation may show how punched holes
            appear after each unfolding step.
          </p>
          <p>
            The assessment is intended for practice and learning. Its result is not a standardized
            IQ score or an official prediction of an employer's hiring decision.
          </p>
        </section>

        {/* Section 5: Question Types */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            Types of Spatial Reasoning Questions
          </h2>
          <p>
            Spatial reasoning tests use different visual tasks to evaluate how people interpret and
            mentally manipulate shapes. Understanding the question type before attempting a solution
            can save time and reduce unnecessary guessing.
          </p>

          <div className="space-y-5">
            <div className="p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="text-lg font-bold text-[#07152F] mb-2 flex items-center gap-2">
                <RotateCw className="w-5 h-5 text-[#2453FF]" />
                Mental Rotation Questions
              </h3>
              <p className="text-sm text-[#475569] mb-2">
                A mental rotation question shows a reference shape or three-dimensional object and
                asks you to recognize it after a turn. The shape may be rotated by 90°, 180°, or
                another specified angle. In more complex problems, you may need to imagine a solid
                object turning around different axes.
              </p>
              <p className="text-sm text-[#475569] mb-2">
                The important rule is that a rotation changes an object's orientation without
                changing its underlying structure. A letter, arrow, dot, or unusual protrusion can
                help you track the direction of the turn.
              </p>
              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>Common trap:</strong> A mirror image may look similar to the rotated object
                but cannot always be created through rotation alone.
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="text-lg font-bold text-[#07152F] mb-2 flex items-center gap-2">
                <Box className="w-5 h-5 text-[#2453FF]" />
                Cube Folding and Cube Nets
              </h3>
              <p className="text-sm text-[#475569] mb-2">
                A cube net is a flat arrangement of six connected squares that can fold into a cube.
                In a cube-folding test, you may be asked which completed cube matches a net, which
                faces become opposite, or which arrangement of face symbols is possible.
              </p>
              <p className="text-sm text-[#475569] mb-2">
                The challenge is imagining how the squares move into three dimensions. Useful
                relationships include face adjacency, opposite faces, and the orientation of
                markings after folding. A flat drawing can be misleading because two squares that
                appear far apart may become adjacent when folded.
              </p>
              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>Common trap:</strong> Choosing a cube simply because the correct symbols are
                visible, without checking their relative orientation.
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="text-lg font-bold text-[#07152F] mb-2 flex items-center gap-2">
                <RotateCw className="w-5 h-5 text-[#2453FF]" />
                Mirror Image and Reflection Questions
              </h3>
              <p className="text-sm text-[#475569] mb-2">
                Mirror-image questions ask you to recognize how a shape appears when reflected across
                a specified line. A reflection reverses the arrangement of points across the mirror
                axis. This differs from simply turning the object.
              </p>
              <p className="text-sm text-[#475569] mb-2">
                For example, an asymmetric arrow with a dot above its left side may have that dot
                above its right side after a vertical reflection. A good approach is to track at
                least two distinctive features.
              </p>
              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>Common trap:</strong> Rotating the shape in your imagination when the
                question specifically asks for a reflection.
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="text-lg font-bold text-[#07152F] mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#2453FF]" />
                Paper Folding and Hole-Punching Questions
              </h3>
              <p className="text-sm text-[#475569] mb-2">
                Paper-folding questions show a sheet being folded one or more times. A hole is then
                punched through the folded sheet. You must determine where the holes appear when the
                paper is fully unfolded.
              </p>
              <p className="text-sm text-[#475569] mb-2">
                The safest method is to reverse the folds one at a time. Each unfolded layer may
                produce a reflected hole position, depending on the location of the fold and punch.
              </p>
              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>Common trap:</strong> Counting the holes correctly but placing them in the
                wrong positions.
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="text-lg font-bold text-[#07152F] mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#2453FF]" />
                Spatial Orientation and 3D Views
              </h3>
              <p className="text-sm text-[#475569] mb-2">
                Spatial orientation questions ask how an object appears from a particular direction.
                You might be shown a three-dimensional arrangement and asked to identify its front,
                side, or top view. These problems often use blocks, geometric solids, or
                technical-style drawings.
              </p>
              <p className="text-sm text-[#475569] mb-2">
                To solve them, identify the viewing direction before deciding what should appear in
                the projection. A front view, for example, usually shows height and width while
                compressing depth.
              </p>
              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>Common trap:</strong> Drawing what you can see from an angled perspective
                instead of following the specified viewing direction.
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="text-lg font-bold text-[#07152F] mb-2 flex items-center gap-2">
                <Grid className="w-5 h-5 text-[#2453FF]" />
                Block Counting and Hidden Cubes
              </h3>
              <p className="text-sm text-[#475569] mb-2">
                Block-counting questions show a structure built from unit cubes. The task may ask for
                the total number of cubes or the number hidden from a particular viewpoint. Count
                visible cubes carefully, but do not forget blocks underneath or behind others when
                the question's rules establish that they must exist.
              </p>
              <p className="text-sm text-[#475569] mb-2">
                For stacked structures, counting the height of each column is often easier than
                counting faces. However, a single picture does not always reveal every hidden block.
                A valid question must provide enough information or an explicit construction rule to
                determine one answer.
              </p>
              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>Common trap:</strong> Assuming an unseen cube exists—or does not
                exist—without evidence from the diagram or instructions.
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Worked Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            Spatial Reasoning Questions and Answers: Six Worked Examples
          </h2>
          <p>
            The following original examples demonstrate the six main question types in our spatial
            reasoning practice test. They are simplified teaching examples. Actual assessment
            questions may combine several transformations or use more complex three-dimensional
            figures.
          </p>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="p-6 rounded-2xl border border-[#E2EAF7] bg-white shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#2453FF] uppercase tracking-wider block">
                Example 1: Identifying a Rotated Shape
              </span>
              <h3 className="text-base font-bold text-[#07152F]">
                Question: Which option shows the reference shape after a 90° clockwise rotation, without reflection?
              </h3>
              <p className="text-sm text-[#475569]">
                The reference shape is formed from four equal squares on a 3×3 grid. Three squares
                form a vertical line on the left, and one additional square extends to the right from
                the bottom square.
              </p>
              <div className="p-3 bg-[#F8FBFF] rounded-xl text-xs font-mono text-[#07152F] border border-[#E2EAF7]">
                Reference: ■ · · / ■ · · / ■ ■ ·
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-2 border rounded-lg bg-gray-50">A: ■ ■ ■ / · · ■ / · · ·</div>
                <div className="p-2 border rounded-lg bg-[#EEF4FF] border-[#2453FF] text-[#2453FF] font-bold">
                  B: ■ ■ ■ / ■ · · / · · · (Correct)
                </div>
                <div className="p-2 border rounded-lg bg-gray-50">C: ■ · · / ■ ■ ■ / · · ·</div>
                <div className="p-2 border rounded-lg bg-gray-50">D: · ■ ■ / · · ■ / · · ■</div>
              </div>
              <div className="p-4 bg-[#F8FBFF] rounded-xl text-xs text-[#475569] space-y-1">
                <strong className="text-[#07152F] block">Step-by-step explanation:</strong>
                <p>1. Follow the three-square vertical arm of the original shape.</p>
                <p>2. Rotate the entire shape 90° clockwise: the vertical arm becomes a horizontal row of three squares.</p>
                <p>3. The extra square originally extending right from the bottom appears below the left end after rotation.</p>
                <p className="font-bold text-[#2453FF] pt-1">
                  Solving tip: Track one distinctive corner or protrusion throughout a rotation. Do not mentally rotate each part of a shape separately.
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="p-6 rounded-2xl border border-[#E2EAF7] bg-white shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#2453FF] uppercase tracking-wider block">
                Example 2: Finding Opposite Faces in a Cube Net
              </span>
              <h3 className="text-base font-bold text-[#07152F]">
                Question: Which face will be opposite face C when the following valid net is folded into a cube?
              </h3>
              <p className="text-sm text-[#475569]">
                The net contains four squares in a horizontal strip, with one square above and one below C: [B, A, C, D, E, F].
              </p>
              <div className="p-4 bg-[#F8FBFF] rounded-xl text-xs text-[#475569] space-y-1">
                <p className="font-bold text-[#07152F]">Correct answer: B — Face E</p>
                <p>1. Treat C as the front face of the folded cube.</p>
                <p>2. A and D become the left and right faces; B and F become top and bottom.</p>
                <p>3. E, attached beyond D, folds around to form the face opposite C.</p>
                <p className="font-bold text-[#2453FF] pt-1">
                  Solving tip: Trace the connected face positions and mentally fold the net. For more complicated nets, track the orientation of face markings, not just which faces touch.
                </p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="p-6 rounded-2xl border border-[#E2EAF7] bg-white shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#2453FF] uppercase tracking-wider block">
                Example 3: Distinguishing a Mirror Image From a Rotation
              </span>
              <h3 className="text-base font-bold text-[#07152F]">
                Question: A figure is reflected across a vertical mirror line. Which option is the correct reflection?
              </h3>
              <p className="text-sm text-[#475569]">
                Reference: Right-pointing arrow, dot in upper-left, bar in lower-left.
              </p>
              <div className="p-4 bg-[#F8FBFF] rounded-xl text-xs text-[#475569] space-y-1">
                <p className="font-bold text-[#07152F]">
                  Correct answer: B (Left-pointing arrow, dot upper-right, bar lower-right)
                </p>
                <p>1. A vertical reflection swaps left and right.</p>
                <p>2. The center arrow changes from pointing right to pointing left.</p>
                <p>3. The dot and bar move from left to right; vertical heights stay constant.</p>
                <p className="font-bold text-[#2453FF] pt-1">
                  Solving tip: Use an asymmetric marker, such as a dot or short line, to distinguish a reflection from an ordinary rotation.
                </p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="p-6 rounded-2xl border border-[#E2EAF7] bg-white shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#2453FF] uppercase tracking-wider block">
                Example 4: Predicting an Unfolded Paper Pattern
              </span>
              <h3 className="text-base font-bold text-[#07152F]">
                Question: A square sheet is folded twice (left onto right, then top onto bottom) and punched near the outer corner. Where will the holes appear?
              </h3>
              <div className="p-4 bg-[#F8FBFF] rounded-xl text-xs text-[#475569] space-y-1">
                <p className="font-bold text-[#07152F]">
                  Correct answer: C (Four holes, one near each corner of the original square)
                </p>
                <p>1. One punch through 4 layers produces 4 holes.</p>
                <p>2. Reversing the vertical fold creates top/bottom symmetry.</p>
                <p>3. Reversing the horizontal fold creates left/right symmetry.</p>
                <p className="font-bold text-[#2453FF] pt-1">
                  Solving tip: Reverse the folds in the opposite order from which they were made. Count the resulting hole positions and check their locations.
                </p>
              </div>
            </div>

            {/* Example 5 */}
            <div className="p-6 rounded-2xl border border-[#E2EAF7] bg-white shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#2453FF] uppercase tracking-wider block">
                Example 5: Matching Front and Side Views
              </span>
              <h3 className="text-base font-bold text-[#07152F]">
                Question: A block structure has column heights: Front-left 1, Front-right 2, Back-left 3, Back-right 1. Which option shows the front silhouette?
              </h3>
              <div className="p-4 bg-[#F8FBFF] rounded-xl text-xs text-[#475569] space-y-1">
                <p className="font-bold text-[#07152F]">Correct answer: B (Left height 3, right height 2)</p>
                <p>1. Left column maximum: max(1, 3) = 3 cubes.</p>
                <p>2. Right column maximum: max(2, 1) = 2 cubes.</p>
                <p className="font-bold text-[#2453FF] pt-1">
                  Solving tip: When a question asks for a front, side, or top view, first identify which dimension disappears in the projection.
                </p>
              </div>
            </div>

            {/* Example 6 */}
            <div className="p-6 rounded-2xl border border-[#E2EAF7] bg-white shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#2453FF] uppercase tracking-wider block">
                Example 6: Counting Cubes in a 3D Structure
              </span>
              <h3 className="text-base font-bold text-[#07152F]">
                Question: A structure has 6 solid stacks of cubes: Front [1, 2, 1], Back [2, 1, 3]. How many cubes total?
              </h3>
              <div className="p-4 bg-[#F8FBFF] rounded-xl text-xs text-[#475569] space-y-1">
                <p className="font-bold text-[#07152F]">Correct answer: C — 10 cubes</p>
                <p>1. Front row: 1 + 2 + 1 = 4 cubes.</p>
                <p>2. Back row: 2 + 1 + 3 = 6 cubes. Total = 10 cubes.</p>
                <p className="font-bold text-[#2453FF] pt-1">
                  Solving tip: When full column heights are known, add the column heights rather than counting only visible top and side faces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Step-by-Step Solving Method */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            How to Solve Spatial Reasoning Questions Step by Step
          </h2>
          <p>
            Spatial reasoning problems become easier to manage when you approach them
            systematically. Instead of staring at every option and trying to guess which looks right,
            follow a simple five-step method:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <span className="text-xs font-extrabold text-[#2453FF] block mb-1">Step 1</span>
              <h3 className="font-bold text-xs text-[#07152F] mb-1">Identify Reference</h3>
              <p className="text-[11px] text-[#64748B]">Look for distinct corners, dots, arrows, or longer arms.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <span className="text-xs font-extrabold text-[#2453FF] block mb-1">Step 2</span>
              <h3 className="font-bold text-xs text-[#07152F] mb-1">Allowed Transform</h3>
              <p className="text-[11px] text-[#64748B]">Determine if the rule is rotation, reflection, or fold.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <span className="text-xs font-extrabold text-[#2453FF] block mb-1">Step 3</span>
              <h3 className="font-bold text-xs text-[#07152F] mb-1">Track Invariant</h3>
              <p className="text-[11px] text-[#64748B]">Track dimensions, connectivity, or handedness.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <span className="text-xs font-extrabold text-[#2453FF] block mb-1">Step 4</span>
              <h3 className="font-bold text-xs text-[#07152F] mb-1">Eliminate Choices</h3>
              <p className="text-[11px] text-[#64748B]">Rule out options with wrong chirality or impossible adjacent faces.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <span className="text-xs font-extrabold text-[#2453FF] block mb-1">Step 5</span>
              <h3 className="font-bold text-xs text-[#07152F] mb-1">Verify Answer</h3>
              <p className="text-[11px] text-[#64748B]">Mentally reverse the operation to verify a complete match.</p>
            </div>
          </div>
        </section>

        {/* Section 8: Techniques */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            Mental Rotation and Mirror Image Solving Techniques
          </h2>
          <p>
            Rotation and reflection questions are among the most confusing spatial reasoning
            problems because their answer options can look almost identical. The best strategy is to
            track the object's structure rather than relying on an overall visual impression.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="font-bold text-sm text-[#07152F] mb-1">How to Track an Asymmetric Landmark</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                An asymmetric landmark is a feature that appears on only one side or one part of an
                object. When the object rotates, the landmark moves with it. If the landmark appears
                on the wrong side in an answer choice, that option is a reflection rather than a
                valid rotation.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="font-bold text-sm text-[#07152F] mb-1">Why Rotations and Reflections Are Different</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                A rotation turns an object around a point or axis without flipping it. A reflection
                produces a mirror image across a line or plane. Reflecting reverses handedness (chirality),
                which rotation alone cannot reproduce.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Cube Nets, Folds, Views */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            How to Solve Cube Nets, Paper Folds and 3D Views
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="font-bold text-sm text-[#07152F] mb-1">How to Check Cube Face Relationships</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Start by identifying the six squares of the cube net. Remember that a cube has three
                pairs of opposite faces. If an answer option places two opposite faces next to one
                another, it cannot represent that folded cube. Always verify the orientation of
                distinctive face symbols.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="font-bold text-sm text-[#07152F] mb-1">How to Reverse Paper Folds</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Treat paper folding as a sequence of operations. If the instructions show two folds
                and one punch, mentally reverse the second fold before reversing the first. Track the
                punch relative to each fold line.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="font-bold text-sm text-[#07152F] mb-1">How to Read Front, Side and Top Views</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                A front view emphasizes width and height. A side view emphasizes depth and height. A
                top view emphasizes width and depth. When the object is made of blocks, identify the
                heights and footprints that appear from each direction.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF]">
              <h3 className="font-bold text-sm text-[#07152F] mb-1">How to Count Hidden Cubes Correctly</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                If the question provides complete stack heights, add those heights to determine the
                total cube count. When evaluating perspective images, never assume extra hidden cubes
                without an explicit solid-base or construction-based rule.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            Spatial Reasoning vs. Abstract and Logical Reasoning
          </h2>
          <p>
            Spatial, abstract, and logical reasoning overlap in some situations, but they emphasize
            different problem-solving tasks:
          </p>
          <div className="overflow-x-auto my-4 border border-[#E2EAF7] rounded-xl shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F] font-bold">
                <tr>
                  <th className="p-3.5">Reasoning type</th>
                  <th className="p-3.5">Main focus</th>
                  <th className="p-3.5">Typical question</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#475569]">
                <tr>
                  <td className="p-3.5 font-bold text-[#07152F]">Spatial reasoning</td>
                  <td className="p-3.5">Manipulating objects and understanding space</td>
                  <td className="p-3.5">Which cube can be folded from this net?</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#07152F]">
                    <Link href="/abstract-reasoning-test/" className="text-[#2453FF] hover:underline">
                      Abstract reasoning
                    </Link>
                  </td>
                  <td className="p-3.5">Finding rules in unfamiliar patterns</td>
                  <td className="p-3.5">Which figure completes the pattern?</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[#07152F]">
                    <Link href="/logical-reasoning-test/" className="text-[#2453FF] hover:underline">
                      Logical reasoning
                    </Link>
                  </td>
                  <td className="p-3.5">Drawing conclusions from stated relationships</td>
                  <td className="p-3.5">Which conclusion must follow from the premises?</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 11: Mistakes Table */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            Common Mistakes in Spatial Reasoning Tests
          </h2>
          <div className="overflow-x-auto my-4 border border-[#E2EAF7] rounded-xl shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8FBFF] border-b border-[#E2EAF7] text-[#07152F] font-bold">
                <tr>
                  <th className="p-3.5">Common mistake</th>
                  <th className="p-3.5">Better approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EAF7] text-[#475569]">
                <tr>
                  <td className="p-3.5 font-medium text-red-600">Confusing a rotation with a reflection</td>
                  <td className="p-3.5 text-emerald-700">Track an asymmetric dot, corner, or marker</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-red-600">Looking only at cube face colors</td>
                  <td className="p-3.5 text-emerald-700">Check adjacency, opposite faces, and symbol orientation</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-red-600">Reversing paper folds in the wrong order</td>
                  <td className="p-3.5 text-emerald-700">Undo the last fold first</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-red-600">Ignoring the stated viewing direction</td>
                  <td className="p-3.5 text-emerald-700">Identify front, side, or top before examining choices</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-red-600">Counting only visible cubes</td>
                  <td className="p-3.5 text-emerald-700">Use full stack heights or explicit construction rules</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-red-600">Assuming hidden blocks without evidence</td>
                  <td className="p-3.5 text-emerald-700">Check whether the diagram determines a unique structure</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-red-600">Rushing every question</td>
                  <td className="p-3.5 text-emerald-700">Prioritize accuracy, then practise speed</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-red-600">Memorizing answer letters</td>
                  <td className="p-3.5 text-emerald-700">Learn the geometric relationship behind each solution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 12: FAQs */}
        <section className="space-y-4 pt-4 border-t border-[#E2EAF7]">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#07152F] tracking-tight">
            Frequently Asked Questions About Spatial Reasoning Tests
          </h2>
          <div className="space-y-3 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#E2EAF7] bg-white overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#07152F] hover:bg-[#F8FBFF] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#2453FF]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] bg-[#F8FBFF]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 13: Research & Further Reading */}
        <section className="space-y-4 pt-4 border-t border-[#E2EAF7]">
          <h2 className="text-xl sm:text-2xl font-heading font-black text-[#07152F] tracking-tight">
            Research and Further Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-1.5">
              <h3 className="font-bold text-xs text-[#07152F]">AssessmentDay — Spatial Reasoning and Awareness Tests</h3>
              <p className="text-[11px] text-[#64748B]">Explains common spatial question types and their use in aptitude preparation.</p>
              <a
                href="https://www.assessmentday.co.uk/spatial-reasoning.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#2453FF] hover:underline pt-1"
              >
                <span>View assessment formats</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-1.5">
              <h3 className="font-bold text-xs text-[#07152F]">Practice Aptitude Tests — Spatial Reasoning Tests</h3>
              <p className="text-[11px] text-[#64748B]">Provides examples of mental rotation, reflections, folding, and 3D reasoning tasks.</p>
              <a
                href="https://www.practiceaptitudetests.com/spatial-reasoning-tests/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#2453FF] hover:underline pt-1"
              >
                <span>View practice formats</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-1.5">
              <h3 className="font-bold text-xs text-[#07152F]">Uttal et al. (2013) — The Malleability of Spatial Skills</h3>
              <p className="text-[11px] text-[#64748B]">A meta-analysis examining spatial-skills training and improvement across research studies.</p>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/22663761/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#2453FF] hover:underline pt-1"
              >
                <span>Read research abstract</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl border border-[#E2EAF7] bg-[#F8FBFF] space-y-1.5">
              <h3 className="font-bold text-xs text-[#07152F]">Uttal, Miller and Newcombe (2013) — Enhancing Spatial Thinking</h3>
              <p className="text-[11px] text-[#64748B]">Discusses the relationship between spatial thinking, training, and STEM learning.</p>
              <a
                href="https://www.psychologicalscience.org/journals/current-directions/0963721413484756/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#2453FF] hover:underline pt-1"
              >
                <span>Read research overview</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Ready to practice Callout Banner */}
        <section className="p-8 rounded-3xl bg-gradient-to-r from-[#1B40DF] via-[#2453FF] to-[#3B66FF] text-white text-center space-y-4 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight">
            Ready to Practise Spatial Reasoning?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Start the Spatial Reasoning Test above to work through visual questions involving
            rotations, cube nets, reflections, paper folding, 3D views, and block counting.
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
              className="px-6 py-3 rounded-xl text-sm font-extrabold text-[#07152F] bg-white hover:bg-[#EEF4FF] shadow-sm transition-all cursor-pointer"
            >
              Start Free Spatial Reasoning Test
            </button>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl text-sm font-extrabold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
            >
              Take Free Full IQ Test
            </Link>
          </div>
          <p className="text-[11px] text-blue-200 pt-2">
            Assessment notice: This is an independent educational practice resource, not an official
            employment assessment or standardized intelligence test.
          </p>
        </section>
      </div>
    </article>
  );
};
