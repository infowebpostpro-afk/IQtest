import { SpatialAssessmentSession, SpatialAssessmentResult } from './types';

const SPATIAL_SESSION_STORAGE_KEY = 'iqtest_spatial_session_v1';
const SPATIAL_RESULT_STORAGE_KEY = 'iqtest_spatial_result_v1';

export function saveSpatialSession(session: SpatialAssessmentSession): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SPATIAL_SESSION_STORAGE_KEY, JSON.stringify(session));
  } catch {
    // ignore localstorage write errors (quota / private mode)
  }
}

export function loadSpatialSession(expectedVersion?: string): SpatialAssessmentSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SPATIAL_SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SpatialAssessmentSession;
    if (expectedVersion && parsed.version !== expectedVersion) {
      clearSpatialSession();
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function clearSpatialSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SPATIAL_SESSION_STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function saveSpatialResult(result: SpatialAssessmentResult): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SPATIAL_RESULT_STORAGE_KEY, JSON.stringify(result));
  } catch {
    // ignore
  }
}

export function loadSpatialResult(): SpatialAssessmentResult | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SPATIAL_RESULT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SpatialAssessmentResult;
  } catch {
    return null;
  }
}

