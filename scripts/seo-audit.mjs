import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://theiqtest.org';
const OLD_DOMAIN = 'iqtest-puce.vercel.app';
const EXPECTED_ROUTES = [
  '/',
  '/test/',
  '/quick-iq-test/',
  '/logical-reasoning-test/',
  '/abstract-reasoning-test/',
  '/spatial-reasoning-test/',
  '/iq-score-chart/',
  '/iq-percentile-calculator/',
  '/average-iq-by-age/',
  '/iq-practice-questions/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/terms/'
];

console.log('================================================================================');
console.log('ANTIGRAVITY — FULL WEBSITE TECHNICAL SEO AUDIT & DOMAIN MIGRATION VERIFIER');
console.log(`Primary Production Origin: ${SITE_URL}`);
console.log('================================================================================\n');

const auditResults = {
  timestamp: new Date().toISOString(),
  primaryDomain: SITE_URL,
  oldDomain: OLD_DOMAIN,
  routesAudited: [],
  internalLinks: {
    totalChecked: 0,
    valid: 0,
    broken: 0,
    missingTrailingSlash: 0,
    issues: []
  },
  sitemapAudit: {},
  robotsAudit: {},
  schemaAudit: [],
  oldDomainReferences: [],
  summary: {
    p0Count: 0,
    p1Count: 0,
    p2Count: 0,
    p3Count: 0,
    passedChecks: 0,
    totalChecks: 0
  }
};

// 1. Audit Route Source Files
for (const route of EXPECTED_ROUTES) {
  const routeFolder = route === '/' ? '' : route.replace(/^\/|\/$/g, '');
  const pagePath = route === '/' ? 'src/app/page.tsx' : `src/app/${routeFolder}/page.tsx`;
  
  if (!fs.existsSync(pagePath)) {
    auditResults.routesAudited.push({
      route,
      pagePath,
      exists: false,
      issues: ['File does not exist']
    });
    auditResults.summary.p0Count++;
    continue;
  }

  const content = fs.readFileSync(pagePath, 'utf8');
  const issues = [];
  
  // Title check
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const title = titleMatch ? titleMatch[1] : null;
  if (!title) issues.push('Missing explicit page title');

  // Description check
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/s);
  const description = descMatch ? descMatch[1] : null;
  if (!description) issues.push('Missing meta description');

  // Canonical check
  const canonicalMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;
  if (!canonical) {
    issues.push('Missing explicit canonical declaration');
    auditResults.summary.p1Count++;
  } else if (canonical !== route) {
    issues.push(`Canonical mismatch: declared "${canonical}" vs expected "${route}"`);
    auditResults.summary.p1Count++;
  }

  // Schema check
  const hasSchema = content.includes('application/ld+json');
  let schemaTypes = [];
  if (hasSchema) {
    const typeMatches = [...content.matchAll(/['"`]@type['"`]:\s*['"`]([^'"`]+)['"`]/g)];
    schemaTypes = typeMatches.map(m => m[1]);
  }

  auditResults.routesAudited.push({
    route,
    pagePath,
    exists: true,
    title,
    description,
    canonical,
    hasSchema,
    schemaTypes,
    issues
  });
}

// 2. Audit Built HTML in .next (if available)
const nextServerApp = '.next/server/app';
if (fs.existsSync(nextServerApp)) {
  for (const r of auditResults.routesAudited) {
    const htmlName = r.route === '/' ? 'index.html' : `${r.route.replace(/^\/|\/$/g, '')}.html`;
    const fullHtmlPath = path.join(nextServerApp, htmlName);
    if (fs.existsSync(fullHtmlPath)) {
      const html = fs.readFileSync(fullHtmlPath, 'utf8');
      
      // Rendered canonical
      const renderedCanMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
      r.renderedCanonical = renderedCanMatch ? renderedCanMatch[1] : 'NOT_FOUND';
      
      const expectedFullCanonical = r.route === '/' ? `${SITE_URL}/` : `${SITE_URL}${r.route}`;
      // In next.js metadataBase, canonical '/' resolves to SITE_URL or SITE_URL/
      const expectedVariants = [expectedFullCanonical, expectedFullCanonical.replace(/\/$/, '')];
      if (!expectedVariants.includes(r.renderedCanonical)) {
        r.issues.push(`Rendered canonical mismatch: "${r.renderedCanonical}" vs "${expectedFullCanonical}"`);
      }

      // Check for old domain in HTML
      if (html.includes(OLD_DOMAIN)) {
        r.issues.push(`Rendered HTML contains retired domain: ${OLD_DOMAIN}`);
        auditResults.summary.p1Count++;
      }
    }
  }
}

// 3. Audit Sitemap.ts
const sitemapPath = 'src/app/sitemap.ts';
if (fs.existsSync(sitemapPath)) {
  const smContent = fs.readFileSync(sitemapPath, 'utf8');
  const includesAllRoutes = EXPECTED_ROUTES.every(r => smContent.includes(`'${r}'`) || smContent.includes(`"${r}"`) || smContent.includes(`absoluteUrl('${r}')`));
  const usesSiteUrl = smContent.includes('absoluteUrl') || smContent.includes(SITE_URL);
  const hasDynamicTimestamp = smContent.includes('new Date()');

  auditResults.sitemapAudit = {
    exists: true,
    usesSiteUrl,
    includesAllRoutes,
    hasDynamicTimestamp,
    issues: []
  };

  if (!usesSiteUrl) auditResults.sitemapAudit.issues.push('Sitemap does not use centralized site URL');
  if (!includesAllRoutes) auditResults.sitemapAudit.issues.push('Sitemap is missing some published routes');
  if (hasDynamicTimestamp) auditResults.sitemapAudit.issues.push('Sitemap uses dynamic new Date() for lastModified');
}

// 4. Audit Robots.ts
const robotsPath = 'src/app/robots.ts';
if (fs.existsSync(robotsPath)) {
  const rbContent = fs.readFileSync(robotsPath, 'utf8');
  const hasSitemap = rbContent.includes('sitemap.xml');
  const usesSiteUrl = rbContent.includes('SITE_URL') || rbContent.includes(SITE_URL);
  
  auditResults.robotsAudit = {
    exists: true,
    hasSitemap,
    usesSiteUrl,
    issues: []
  };

  if (!hasSitemap) auditResults.robotsAudit.issues.push('Robots.txt missing sitemap declaration');
  if (!usesSiteUrl) auditResults.robotsAudit.issues.push('Robots.txt sitemap is not using production domain');
}

// 5. Internal Links Crawl
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        results = results.concat(walk(full));
      }
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      results.push(full);
    }
  }
  return results;
}

const allTsx = walk('src');
for (const file of allTsx) {
  const text = fs.readFileSync(file, 'utf8');
  
  // Search for old domain references
  if (text.includes(OLD_DOMAIN)) {
    auditResults.oldDomainReferences.push({
      file,
      reference: OLD_DOMAIN
    });
  }

  // Link matches
  const matches = [...text.matchAll(/href=[\"'](\/[^\"'#?]*)[\"']/g)];
  for (const m of matches) {
    const link = m[1];
    auditResults.internalLinks.totalChecked++;
    
    // Check trailing slash
    if (link !== '/' && !link.endsWith('/')) {
      auditResults.internalLinks.missingTrailingSlash++;
      auditResults.internalLinks.issues.push({
        file,
        link,
        issue: 'Internal link missing trailing slash'
      });
    }

    // Check if target exists
    const normalizedTarget = link.endsWith('/') ? link : `${link}/`;
    if (!EXPECTED_ROUTES.includes(normalizedTarget) && !normalizedTarget.startsWith('/api/')) {
      auditResults.internalLinks.broken++;
      auditResults.internalLinks.issues.push({
        file,
        link,
        issue: 'Internal link points to unmapped route'
      });
    } else {
      auditResults.internalLinks.valid++;
    }
  }
}

// Write machine readable results
fs.writeFileSync('scripts/seo-audit-results.json', JSON.stringify(auditResults, null, 2));

console.log('ROUTE AUDIT MATRIX:');
console.table(
  auditResults.routesAudited.map(r => ({
    Route: r.route,
    'Title OK': !!r.title,
    'Canonical Match': r.canonical === r.route ? 'MATCH' : 'MISMATCH',
    'Rendered Canonical': r.renderedCanonical || 'N/A',
    Schema: r.hasSchema ? r.schemaTypes.join(', ') : 'None',
    Status: r.issues.length === 0 ? 'PASS' : `FAIL (${r.issues.length})`
  }))
);

console.log('\nSITEMAP & ROBOTS AUDIT:');
console.log(`- Sitemap includes all 14 routes: ${auditResults.sitemapAudit.includesAllRoutes ? 'YES' : 'NO'}`);
console.log(`- Sitemap dynamic Date issue resolved: ${!auditResults.sitemapAudit.hasDynamicTimestamp ? 'YES' : 'NO'}`);
console.log(`- Robots.txt valid with sitemap: ${auditResults.robotsAudit.hasSitemap ? 'YES' : 'NO'}`);

console.log('\nINTERNAL LINK & RETIRED DOMAIN AUDIT:');
console.log(`- Total Internal Hrefs Audited: ${auditResults.internalLinks.totalChecked}`);
console.log(`- Valid Links: ${auditResults.internalLinks.valid}`);
console.log(`- Missing Trailing Slashes: ${auditResults.internalLinks.missingTrailingSlash}`);
console.log(`- Unmapped / Broken Routes: ${auditResults.internalLinks.broken}`);
console.log(`- Old Domain References in src/: ${auditResults.oldDomainReferences.length}`);

console.log('\nAudit complete. Machine-readable report saved to scripts/seo-audit-results.json');

