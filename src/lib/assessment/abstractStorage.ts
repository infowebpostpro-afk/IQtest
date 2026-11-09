import { AssessmentSession } from '@/types/assessment';
import { AbstractAssessmentResult } from './abstractScoring';

const ABSTRACT_STORAGE_SESSION_KEY = 'iq_abstract_assessment_session';
const ABSTRACT_STORAGE_RESULT_KEY = 'iq_abstract_assessment_result';

export function saveAbstractAssessmentSession(session: AssessmentSession): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ABSTRACT_STORAGE_SESSION_KEY, JSON.stringify(session));
  } catch (err) {
    console.error('Failed to save abstract assessment session:', err);
  }
}

export function loadAbstractAssessmentSession(versionCheck?: string): AssessmentSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(ABSTRACT_STORAGE_SESSION_KEY);
    if (!raw) return null;
    const session: AssessmentSession = JSON.parse(raw);
    if (versionCheck && session.version !== versionCheck) {
      clearAbstractAssessmentSession();
      return null;
    }
    return session;
  } catch (err) {
    console.error('Failed to load abstract assessment session:', err);
    return null;
  }
}

export function clearAbstractAssessmentSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(ABSTRACT_STORAGE_SESSION_KEY);
  } catch (err) {
    console.error('Failed to clear abstract assessment session:', err);
  }
}

export function saveAbstractAssessmentResult(result: AbstractAssessmentResult): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ABSTRACT_STORAGE_RESULT_KEY, JSON.stringify(result));
  } catch (err) {
    console.error('Failed to save abstract assessment result:', err);
  }
}

export function loadAbstractAssessmentResult(): AbstractAssessmentResult | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(ABSTRACT_STORAGE_RESULT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AbstractAssessmentResult;
  } catch (err) {
    console.error('Failed to load abstract assessment result:', err);
    return null;
  }
}

