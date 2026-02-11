/**
 * Google Search Console & SEO Optimization Utilities
 * Tools to help with Google Search indexing and optimization
 */

/**
 * Generate URL for Google Search Console indexing request
 */
export function getIndexNowUrl(url: string): string {
    return `https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`;
}

/**
 * Notify Google about sitemap updates
 * Note: This should be called from server-side or during build
 */
export async function notifyGoogleAboutSitemap(sitemapUrl: string): Promise<boolean> {
    try {
        const pingUrl = getIndexNowUrl(sitemapUrl);
        const response = await fetch(pingUrl);
        return response.ok;
    } catch (error) {
        console.error('Error notifying Google about sitemap:', error);
        return false;
    }
}

/**
 * Core Web Vitals thresholds (Google's recommended values)
 */
export const WEB_VITALS_THRESHOLDS = {
    LCP: {
        good: 2500,
        needsImprovement: 4000,
    },
    FID: {
        good: 100,
        needsImprovement: 300,
    },
    CLS: {
        good: 0.1,
        needsImprovement: 0.25,
    },
    FCP: {
        good: 1800,
        needsImprovement: 3000,
    },
    TTFB: {
        good: 800,
        needsImprovement: 1800,
    },
    INP: {
        good: 200,
        needsImprovement: 500,
    },
};

/**
 * Evaluate Core Web Vital metric
 */
export function evaluateWebVital(
    name: keyof typeof WEB_VITALS_THRESHOLDS,
    value: number
): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = WEB_VITALS_THRESHOLDS[name];
    if (!thresholds) return 'poor';

    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
}

/**
 * Common SEO issues and fixes
 */
export const SEO_CHECKLIST = {
    technical: [
        '✓ Sitemap.xml created and submitted to Google Search Console',
        '✓ Robots.txt configured correctly',
        '✓ SSL certificate installed (HTTPS)',
        '✓ Mobile-friendly design verified',
        '✓ Page load speed optimized (< 3 seconds)',
        '✓ Core Web Vitals passing',
        '✓ Structured data implemented',
        '✓ Canonical URLs set',
        '✓ Meta tags optimized',
        '✓ Images optimized with alt text',
    ],
    content: [
        '✓ Unique title tags (50-60 characters)',
        '✓ Meta descriptions (150-160 characters)',
        '✓ H1 tags on every page',
        '✓ Internal linking structure',
        '✓ Quality content (> 300 words)',
        '✓ Keywords naturally integrated',
        '✓ Regular content updates',
    ],
    tracking: [
        '✓ Google Analytics configured',
        '✓ Google Search Console verified',
        '✓ Google Tag Manager setup',
        '✓ Conversion tracking enabled',
        '✓ Event tracking configured',
        '✓ Custom dimensions set up',
    ],
};

/**
 * Priority pages for Search Console
 */
export const PRIORITY_PAGES = [
    { url: '/', priority: 'high', changeFreq: 'weekly' },
    { url: '/services', priority: 'high', changeFreq: 'weekly' },
    { url: '/contact', priority: 'high', changeFreq: 'monthly' },
    { url: '/about', priority: 'medium', changeFreq: 'monthly' },
    { url: '/portfolio', priority: 'medium', changeFreq: 'monthly' },
    { url: '/faq', priority: 'low', changeFreq: 'monthly' },
];

/**
 * Check if page is indexable
 */
export function isPageIndexable(userAgent: string, path: string): boolean {
    // Check if path should be blocked
    const blockedPaths = ['/api/', '/_next/', '/admin'];
    const isBlocked = blockedPaths.some((blocked) => path.startsWith(blocked));

    // Check user agent
    const blockedBots = ['BadBot', 'SemrushBot'];
    const isBadBot = blockedBots.some((bot) => userAgent.includes(bot));

    return !isBlocked && !isBadBot;
}

/**
 * Generate Search Console API request URL
 */
export function getSearchConsoleApiUrl(siteUrl: string): string {
    return `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
}

/**
 * Common search queries for the business
 */
export const TARGET_KEYWORDS = {
    primary: [
        'virtual assistant services',
        'professional virtual assistant',
        'remote assistant',
        'virtual administrative assistant',
        'hire virtual assistant',
    ],
    secondary: [
        'administrative support services',
        'customer service virtual assistant',
        'digital marketing assistant',
        'content creation services',
        'data entry services',
        'executive virtual assistant',
    ],
    longTail: [
        'virtual assistant for international clients',
        'professional virtual assistant for companies',
        'affordable virtual assistant services',
        'virtual assistant for small business',
        'remote administrative assistant services',
    ],
    local: [
        'virtual assistant south africa',
        'va services international',
        'remote assistant for us companies',
    ],
};

/**
 * Suggested internal linking structure
 */
export const INTERNAL_LINKING_MAP = {
    '/': ['/services', '/about', '/contact', '/portfolio'],
    '/services': ['/contact', '/faq', '/about'],
    '/about': ['/services', '/portfolio', '/contact'],
    '/contact': ['/services', '/faq'],
    '/portfolio': ['/services', '/contact', '/about'],
    '/faq': ['/services', '/contact'],
};
