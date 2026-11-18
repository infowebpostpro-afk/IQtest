/**
 * Site Configuration & Canonical Origin Management
 * 
 * Centralized production domain and URL helper utilities for SEO,
 * metadataBase, canonical generation, sitemaps, robots, and structured data.
 * Standard: Clean URLs without trailing slash (e.g. https://theiqtest.org/quick-iq-test)
 */

export const SITE_URL = 'https://theiqtest.org';
export const SITE_DOMAIN = 'theiqtest.org';
export const SITE_NAME = 'IQ Test Assessment';
export const SITE_TAGLINE = 'Free Online Test With Instant Results';
export const SUPPORT_EMAIL = 'contact@theiqtest.org';

/**
 * Normalizes an internal route path ensuring clean leading slash and NO trailing slash (except root '/').
 */
export function normalizePath(path: string): string {
  if (!path || path === '/' || path === '') return '/';
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return `/${clean}`;
}

/**
 * Builds an absolute canonical URL on the primary production origin without trailing slash.
 */
export function absoluteUrl(path: string = '/'): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalized = normalizePath(path);
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}
