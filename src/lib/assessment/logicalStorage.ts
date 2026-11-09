import { AssessmentSession } from '@/types/assessment';
import { LogicalAssessmentResult } from './logicalScoring';

const LOGICAL_STORAGE_SESSION_KEY = 'iq_logical_assessment_session';
const LOGICAL_STORAGE_RESULT_KEY = 'iq_logical_assessment_result';

export function saveLogicalAssessmentSession(session: AssessmentSession): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOGICAL_STORAGE_SESSION_KEY, JSON.stringify(session));
  } catch (err) {
    console.error('Failed to save logical assessment session:', err);
  }
}

export function loadLogicalAssessmentSession(versionCheck?: string): AssessmentSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LOGICAL_STORAGE_SESSION_KEY);
    if (!raw) return null;
    const session: AssessmentSession = JSON.parse(raw);
    if (versionCheck && session.version !== versionCheck) {
      clearLogicalAssessmentSession();
      return null;
    }
    return session;
  } catch (err) {
    console.error('Failed to load logical assessment session:', err);
    return null;
  }
}

export function clearLogicalAssessmentSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(LOGICAL_STORAGE_SESSION_KEY);
  } catch (err) {
    console.error('Failed to clear logical assessment session:', err);
  }
}

export function saveLogicalAssessmentResult(result: LogicalAssessmentResult): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOGICAL_STORAGE_RESULT_KEY, JSON.stringify(result));
  } catch (err) {
    console.error('Failed to save logical assessment result:', err);
  }
}

export function loadLogicalAssessmentResult(): LogicalAssessmentResult | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LOGICAL_STORAGE_RESULT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LogicalAssessmentResult;
  } catch (err) {
    console.error('Failed to load logical assessment result:', err);
    return null;
  }
}

export function clearLogicalAssessmentResult(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(LOGICAL_STORAGE_RESULT_KEY);
  } catch (err) {
    console.error('Failed to clear logical assessment result:', err);
  }
}

