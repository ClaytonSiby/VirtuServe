import { siteConfig } from './seo';

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
        width: 512,
        height: 512,
    },
    description: siteConfig.description,
    sameAs: [
        siteConfig.links.linkedin,
        siteConfig.links.facebook,
        siteConfig.links.instagram,
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English'],
    },
};

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
        '@id': `${siteConfig.url}/#organization`,
    },
    inLanguage: 'en-US',
};

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: '+27 82 899 7062', // Update with actual phone
    priceRange: 'RR',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '50',
    },
    sameAs: [
        siteConfig.links.linkedin,
        siteConfig.links.facebook,
        siteConfig.links.instagram,
    ],
};

export const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Virtual Assistant Services',
    provider: {
        '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Virtual Assistant Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Administrative Support',
                    description:
                        'Professional administrative support including email management, calendar coordination, and document preparation.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Customer Service',
                    description:
                        'Dedicated customer support services to enhance client satisfaction and business reputation.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Digital Marketing Support',
                    description:
                        'Social media management, content creation, and digital marketing assistance.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Data Entry & Management',
                    description:
                        'Accurate data entry, database management, and information organization services.',
                },
            },
        ],
    },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteConfig.url}${item.url}`,
    })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
});
