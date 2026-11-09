'use client';

import React, { useState, useEffect } from 'react';
import { CategoryExplorer } from './CategoryExplorer';
import { PracticeWorkspace } from './PracticeWorkspace';
import { LearningDashboard } from './LearningDashboard';
import { Question, QuestionCategory, DifficultyLevel, UserProgress } from '@/lib/iqPractice/types';
import { QUESTIONS } from '@/lib/iqPractice/questions';
import { CATEGORY_LABELS, DIFFICULTY_LABELS } from '@/lib/iqPractice/types';

const STORAGE_KEY = 'iq-practice-progress';
const STORAGE_VERSION = 1;

export const PracticeContainer: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<QuestionCategory | 'all'>('all');
  const [currentDifficulty, setCurrentDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);
  const [reviewMode, setReviewMode] = useState<'practice' | 'mistakes' | 'bookmarks'>('practice');
  const [userProgress, setUserProgress] = useState<UserProgress>({
    attemptedQuestions: new Set(),
    correctAnswers: new Set(),
    incorrectAnswers: new Set(),
    skippedQuestions: new Set(),
    bookmarkedQuestions: new Set(),
    hintsUsed: new Map(),
    attempts: [],
    currentCategory: 'all',
    currentDifficulty: 'all',
    lastUpdated: Date.now(),
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.version === STORAGE_VERSION) {
          setUserProgress({
            attemptedQuestions: new Set(parsed.attemptedQuestions),
            correctAnswers: new Set(parsed.correctAnswers),
            incorrectAnswers: new Set(parsed.incorrectAnswers),
            skippedQuestions: new Set(parsed.skippedQuestions),
            bookmarkedQuestions: new Set(parsed.bookmarkedQuestions),
            hintsUsed: new Map(parsed.hintsUsed),
            attempts: parsed.attempts || [],
            currentCategory: parsed.currentCategory || 'all',
            currentDifficulty: parsed.currentDifficulty || 'all',
            lastUpdated: parsed.lastUpdated || Date.now(),
          });
          setCurrentCategory(parsed.currentCategory || 'all');
          setCurrentDifficulty(parsed.currentDifficulty || 'all');
        }
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    try {
      const serialized = {
        version: STORAGE_VERSION,
        attemptedQuestions: Array.from(userProgress.attemptedQuestions),
        correctAnswers: Array.from(userProgress.correctAnswers),
        incorrectAnswers: Array.from(userProgress.incorrectAnswers),
        skippedQuestions: Array.from(userProgress.skippedQuestions),
        bookmarkedQuestions: Array.from(userProgress.bookmarkedQuestions),
        hintsUsed: Array.from(userProgress.hintsUsed.entries()),
        attempts: userProgress.attempts,
        currentCategory,
        currentDifficulty,
        lastUpdated: Date.now(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized));
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  }, [userProgress, currentCategory, currentDifficulty]);

  // Filter questions based on current selections
  const getFilteredQuestions = (): Question[] => {
    let filtered = QUESTIONS;

    if (currentCategory !== 'all') {
      filtered = filtered.filter((q) => q.category === currentCategory);
    }

    if (currentDifficulty !== 'all') {
      filtered = filtered.filter((q) => q.difficulty === currentDifficulty);
    }

    if (reviewMode === 'mistakes') {
      filtered = filtered.filter((q) => userProgress.incorrectAnswers.has(q.id));
    }

    if (reviewMode === 'bookmarks') {
      filtered = filtered.filter((q) => userProgress.bookmarkedQuestions.has(q.id));
    }

    return filtered;
  };

  const filteredQuestions = getFilteredQuestions();
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleCategoryChange = (category: QuestionCategory | 'all') => {
    setCurrentCategory(category);
    setCurrentQuestionIndex(0);
    setReviewMode('practice');
  };

  const handleDifficultyChange = (difficulty: DifficultyLevel | 'all') => {
    setCurrentDifficulty(difficulty);
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (selectedAnswerId: string) => {
    if (!currentQuestion) return;

    const isCorrect = selectedAnswerId === currentQuestion.correctAnswerId;
    const hintsUsedForQuestion = userProgress.hintsUsed.get(currentQuestion.id) || 0;

    const newAttempt = {
      questionId: currentQuestion.id,
      selectedAnswerId,
      isCorrect,
      hintsUsed: hintsUsedForQuestion,
      timestamp: Date.now(),
    };

    setUserProgress((prev) => ({
      ...prev,
      attemptedQuestions: new Set([...prev.attemptedQuestions, currentQuestion.id]),
      correctAnswers: isCorrect
        ? new Set([...prev.correctAnswers, currentQuestion.id])
        : prev.correctAnswers,
      incorrectAnswers: !isCorrect
        ? new Set([...prev.incorrectAnswers, currentQuestion.id])
        : prev.incorrectAnswers,
      attempts: [...prev.attempts, newAttempt],
    }));
  };

  const handleBookmark = (questionId: string) => {
    setUserProgress((prev) => {
      const newBookmarks = new Set(prev.bookmarkedQuestions);
      if (newBookmarks.has(questionId)) {
        newBookmarks.delete(questionId);
      } else {
        newBookmarks.add(questionId);
      }
      return { ...prev, bookmarkedQuestions: newBookmarks };
    });
  };

  const handleHint = (questionId: string, hintNumber: number) => {
    setUserProgress((prev) => {
      const newHintsUsed = new Map(prev.hintsUsed);
      const currentHints = newHintsUsed.get(questionId) || 0;
      newHintsUsed.set(questionId, Math.max(currentHints, hintNumber));
      return { ...prev, hintsUsed: newHintsUsed };
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setUserProgress({
        attemptedQuestions: new Set(),
        correctAnswers: new Set(),
        incorrectAnswers: new Set(),
        skippedQuestions: new Set(),
        bookmarkedQuestions: new Set(),
        hintsUsed: new Map(),
        attempts: [],
        currentCategory: 'all',
        currentDifficulty: 'all',
        lastUpdated: Date.now(),
      });
      setCurrentCategory('all');
      setCurrentDifficulty('all');
      setCurrentQuestionIndex(0);
      setReviewMode('practice');
    }
  };

  if (showDashboard) {
    return (
      <div id="practice">
        <LearningDashboard
          progress={userProgress}
          onContinue={() => {
            setShowDashboard(false);
            setReviewMode('practice');
          }}
          onReviewMistakes={() => {
            setShowDashboard(false);
            setReviewMode('mistakes');
            setCurrentQuestionIndex(0);
          }}
          onReviewBookmarks={() => {
            setShowDashboard(false);
            setReviewMode('bookmarks');
            setCurrentQuestionIndex(0);
          }}
          onReset={handleResetProgress}
          onBack={() => setShowDashboard(false)}
        />
      </div>
    );
  }

  return (
    <div id="practice" className="space-y-6 sm:space-y-8">
      {/* Category Explorer & Filters */}
      <CategoryExplorer
        currentCategory={currentCategory}
        currentDifficulty={currentDifficulty}
        reviewMode={reviewMode}
        onCategoryChange={handleCategoryChange}
        onDifficultyChange={handleDifficultyChange}
        onReviewModeChange={setReviewMode}
        onShowDashboard={() => setShowDashboard(true)}
        totalQuestions={QUESTIONS.length}
        filteredCount={filteredQuestions.length}
      />

      {/* Practice Workspace */}
      {currentQuestion && (
        <PracticeWorkspace
          question={currentQuestion}
          currentIndex={currentQuestionIndex}
          totalQuestions={filteredQuestions.length}
          isBookmarked={userProgress.bookmarkedQuestions.has(currentQuestion.id)}
          hintsUsed={userProgress.hintsUsed.get(currentQuestion.id) || 0}
          previousAttempts={userProgress.attempts.filter((a) => a.questionId === currentQuestion.id)}
          onAnswer={handleAnswer}
          onBookmark={() => handleBookmark(currentQuestion.id)}
          onHint={(hintNum) => handleHint(currentQuestion.id, hintNum)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onShowDashboard={() => setShowDashboard(true)}
        />
      )}

      {/* Empty state */}
      {!currentQuestion && (
        <div className="bg-white rounded-3xl border border-[#E2EAF7] p-10 text-center">
          <p className="text-lg text-[#60718B] mb-4">
            {reviewMode === 'mistakes' && 'No mistakes to review yet. Keep practising!'}
            {reviewMode === 'bookmarks' && 'No bookmarked questions yet. Bookmark questions you want to revisit.'}
            {reviewMode === 'practice' && 'No questions match your current filters.'}
          </p>
          <button
            onClick={() => {
              setReviewMode('practice');
              setCurrentCategory('all');
              setCurrentDifficulty('all');
              setCurrentQuestionIndex(0);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2453FF] text-white font-bold hover:bg-[#1a44e6] transition-colors"
          >
            Start Practising
          </button>
        </div>
      )}
    </div>
  );
};
