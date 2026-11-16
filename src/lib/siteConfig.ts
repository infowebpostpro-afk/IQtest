/**
 * Site Configuration & Canonical Origin Management
 * 
 * Centralized production domain and URL helper utilities for SEO,
 * metadataBase, canonical generation, sitemaps, robots, and structured data.
 */

export const SITE_URL = 'https://theiqtest.org';
export const SITE_DOMAIN = 'theiqtest.org';
export const SITE_NAME = 'IQ Test Assessment';
export const SITE_TAGLINE = 'Free Online Test With Instant Results';
export const SUPPORT_EMAIL = 'contact@theiqtest.org';

/**
 * Normalizes an internal route path ensuring consistent leading and trailing slashes.
 */
export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return `/${clean}/`;
}

/**
 * Builds an absolute URL on the primary production origin without duplicate slashes.
 */
export function absoluteUrl(path: string = '/'): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalized = normalizePath(path);
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

