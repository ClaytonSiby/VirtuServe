import { Metadata } from 'next';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
}

export function generateSEOMetadata({
    title,
    description,
    keywords,
    ogImage = '/og-image.jpg',
    canonicalUrl,
}: SEOProps): Metadata {
    const siteName = 'VirtuServe';
    const fullTitle = `${title} | ${siteName}`;

    return {
        title: fullTitle,
        description,
        keywords,
        authors: [{ name: siteName }],
        creator: siteName,
        publisher: siteName,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://virtuserve.com'),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: fullTitle,
            description,
            type: 'website',
            locale: 'en_US',
            siteName,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export const siteConfig = {
    name: 'VirtuServe',
    description: 'Professional Virtual Assistant Services for International Clients and Companies',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://virtuserve.com',
    ogImage: '/og-image.jpg',
    links: {
        linkedin: 'https://linkedin.com/company/virtuserve',
        twitter: 'https://twitter.com/virtuserve',
    },
};
