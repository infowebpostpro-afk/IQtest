import { AssessmentSession, AssessmentResult } from '@/types/assessment';

const SESSION_STORAGE_KEY = 'iqtest_assessment_session_v1';
const LAST_RESULT_STORAGE_KEY = 'iqtest_last_result_v1';

export function saveAssessmentSession(session: AssessmentSession): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  } catch (e) {
    console.error('Failed to save assessment session:', e);
  }
}

export function loadAssessmentSession(expectedVersion: string = '1.0.0'): AssessmentSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as AssessmentSession;
    
    // Validate version and data integrity
    if (session.version !== expectedVersion) {
      clearAssessmentSession();
      return null;
    }

    if (
      typeof session.currentQuestionIndex !== 'number' ||
      !session.answers ||
      !Array.isArray(session.flaggedQuestionIds)
    ) {
      clearAssessmentSession();
      return null;
    }

    return session;
  } catch (e) {
    console.error('Failed to parse saved session:', e);
    clearAssessmentSession();
    return null;
  }
}

export function clearAssessmentSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear session:', e);
  }
}

export function saveAssessmentResult(result: AssessmentResult): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LAST_RESULT_STORAGE_KEY, JSON.stringify(result));
  } catch (e) {
    console.error('Failed to save assessment result:', e);
  }
}

export function loadAssessmentResult(): AssessmentResult | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LAST_RESULT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AssessmentResult;
  } catch {
    return null;
  }
}
