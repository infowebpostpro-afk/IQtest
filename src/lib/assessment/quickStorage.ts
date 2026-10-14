import { AssessmentSession, AssessmentResult } from '@/types/assessment';
import { QUICK_ASSESSMENT_VERSION } from '@/data/quickQuestions';

const QUICK_SESSION_STORAGE_KEY = 'quick_iqtest_session_v1';
const QUICK_RESULT_STORAGE_KEY = 'quick_iqtest_last_result_v1';

export function saveQuickAssessmentSession(session: AssessmentSession): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(QUICK_SESSION_STORAGE_KEY, JSON.stringify(session));
  } catch (e) {
    console.error('Failed to save quick assessment session:', e);
  }
}

export function loadQuickAssessmentSession(
  expectedVersion: string = QUICK_ASSESSMENT_VERSION
): AssessmentSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(QUICK_SESSION_STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as AssessmentSession;

    // Validate version and data integrity
    if (session.version !== expectedVersion) {
      clearQuickAssessmentSession();
      return null;
    }

    if (
      typeof session.currentQuestionIndex !== 'number' ||
      !session.answers ||
      !Array.isArray(session.flaggedQuestionIds)
    ) {
      clearQuickAssessmentSession();
      return null;
    }

    return session;
  } catch (e) {
    console.error('Failed to parse saved quick session:', e);
    clearQuickAssessmentSession();
    return null;
  }
}

export function clearQuickAssessmentSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(QUICK_SESSION_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear quick session:', e);
  }
}

export function saveQuickAssessmentResult(result: AssessmentResult): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(QUICK_RESULT_STORAGE_KEY, JSON.stringify(result));
  } catch (e) {
    console.error('Failed to save quick assessment result:', e);
  }
}

export function loadQuickAssessmentResult(): AssessmentResult | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(QUICK_RESULT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AssessmentResult;
  } catch {
    return null;
  }
}
