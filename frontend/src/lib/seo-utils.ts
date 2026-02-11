/**
 * SEO Utilities for VirtuServe
 * Comprehensive SEO helper functions and utilities
 */

import { siteConfig } from './seo';

/**
 * Generate optimized title for different pages
 */
export function generatePageTitle(pageTitle: string, includesSiteName = false): string {
    if (includesSiteName) {
        return pageTitle;
    }
    return `${pageTitle} | ${siteConfig.name}`;
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${siteConfig.url}${cleanPath}`;
}

/**
 * Generate Open Graph image URL
 */
export function generateOgImageUrl(imagePath?: string): string {
    if (!imagePath) {
        return `${siteConfig.url}${siteConfig.ogImage}`;
    }
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${siteConfig.url}${cleanPath}`;
}

/**
 * Truncate description to optimal length for meta descriptions (150-160 chars)
 */
export function truncateDescription(description: string, maxLength = 155): string {
    if (description.length <= maxLength) {
        return description;
    }
    return description.substring(0, maxLength - 3).trim() + '...';
}

/**
 * Generate keywords string from array
 */
export function generateKeywords(keywords: string[]): string {
    return keywords.join(', ');
}

/**
 * SEO Config for common pages
 */
export const pagesSEO = {
    home: {
        title: 'Professional Virtual Assistant Services for International Clients',
        description: 'Expert virtual assistant services for international clients and companies. Administrative support, customer service, digital marketing, content creation, and strategic business support.',
        keywords: [
            'virtual assistant',
            'VA services',
            'remote assistant',
            'administrative support',
            'international clients',
            'business support',
            'executive assistant',
        ],
    },
    services: {
        title: 'Our Virtual Assistant Services',
        description: 'Comprehensive virtual assistant services including administrative support, customer service, digital marketing, content creation, data management, and strategic business support.',
        keywords: [
            'virtual assistant services',
            'administrative support',
            'customer service',
            'digital marketing',
            'content creation',
            'data entry',
            'business consulting',
        ],
    },
    about: {
        title: 'About VirtuServe',
        description: 'Learn about VirtuServe - your trusted partner for professional virtual assistant services. Dedicated to excellence and client satisfaction.',
        keywords: [
            'about virtuserve',
            'virtual assistant company',
            'professional services',
            'remote work',
            'business solutions',
        ],
    },
    contact: {
        title: 'Contact Us',
        description: 'Get in touch with VirtuServe. Book a discovery call or send us a message to learn how we can support your business needs.',
        keywords: [
            'contact virtuserve',
            'virtual assistant contact',
            'book consultation',
            'discovery call',
            'business inquiry',
        ],
    },
    portfolio: {
        title: 'Our Portfolio & Success Stories',
        description: 'Discover how VirtuServe has helped businesses succeed. View our portfolio of successful client partnerships and testimonials.',
        keywords: [
            'virtuserve portfolio',
            'success stories',
            'client testimonials',
            'case studies',
            'virtual assistant results',
        ],
    },
    faq: {
        title: 'Frequently Asked Questions',
        description: 'Find answers to common questions about VirtuServe virtual assistant services, pricing, processes, and how we can help your business.',
        keywords: [
            'FAQ',
            'virtual assistant questions',
            'virtuserve faq',
            'pricing information',
            'service information',
        ],
    },
};

/**
 * Common JSON-LD types for structured data
 */
export const structuredDataTypes = {
    /**
     * Create Article structured data
     */
    article: (data: {
        headline: string;
        description: string;
        image: string;
        datePublished: string;
        dateModified: string;
        author?: string;
    }) => ({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.headline,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
            '@type': 'Organization',
            name: data.author || siteConfig.name,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/logo.png`,
            },
        },
    }),

    /**
     * Create Review structured data
     */
    review: (data: {
        itemName: string;
        rating: number;
        reviewBody: string;
        author: string;
        datePublished: string;
    }) => ({
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
            '@type': 'Service',
            name: data.itemName,
        },
        reviewRating: {
            '@type': 'Rating',
            ratingValue: data.rating,
            bestRating: 5,
        },
        author: {
            '@type': 'Person',
            name: data.author,
        },
        reviewBody: data.reviewBody,
        datePublished: data.datePublished,
    }),
};

/**
 * Generate hreflang tags for internationalization
 */
export function generateHreflangTags(currentPath: string) {
    return [
        {
            rel: 'alternate',
            hreflang: 'en',
            href: `${siteConfig.url}${currentPath}`,
        },
        {
            rel: 'alternate',
            hreflang: 'x-default',
            href: `${siteConfig.url}${currentPath}`,
        },
    ];
}

/**
 * Performance monitoring for Core Web Vitals
 */
export function reportWebVitals(metric: {
    id: string;
    name: string;
    label: string;
    value: number;
}) {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
    }

    // Send to analytics in production
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
            event_category: metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
        });
    }
}

// Type declaration for gtag
declare global {
    interface Window {
        gtag?: (
            command: string,
            ...args: unknown[]
        ) => void;
    }
}
