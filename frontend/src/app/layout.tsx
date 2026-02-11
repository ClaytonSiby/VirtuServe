import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CalendlyPreloader from "@/components/CalendlyPreloader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import {
  organizationSchema,
  websiteSchema,
  serviceSchema,
} from "@/lib/structuredData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtuserveva.com"),
  title: {
    default:
      "VirtuServe - Professional Virtual Assistant Services for International Clients",
    template: "%s | VirtuServe",
  },
  description:
    "Expert virtual assistant services for international clients and companies. Administrative support, customer service, digital marketing, content creation, and strategic business support. Book your discovery call today.",
  keywords: [
    "virtual assistant",
    "VA services",
    "administrative support",
    "international clients",
    "remote assistant",
    "business support",
    "executive assistant",
    "customer service",
    "digital marketing support",
    "content creation",
    "data entry",
    "email management",
    "calendar management",
    "social media management",
    "professional services",
  ],
  authors: [{ name: "VirtuServe", url: "https://virtuserveva.com" }],
  creator: "VirtuServe",
  publisher: "VirtuServe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtuserveva.com",
    title: "VirtuServe - Professional Virtual Assistant Services",
    description:
      "Expert virtual assistant services for international clients. Administrative support, customer service, digital marketing, and more.",
    siteName: "VirtuServe",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VirtuServe - Professional Virtual Assistant Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VirtuServe - Professional Virtual Assistant Services",
    description:
      "Expert virtual assistant services for international clients and companies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://virtuserveva.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    // Add other verification codes as needed
    // yandex: "your-yandex-code",
    // bing: "your-bing-code",
  },
  other: {
    "google-site-verification":
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
        {/* Google Analytics */}
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <GoogleTagManagerNoScript
          gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""}
        />

        {/* Web Vitals Reporter */}
        <WebVitalsReporter />

        {/* Structured Data for SEO - moved to body to avoid hydration issues */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
          suppressHydrationWarning
        />
        <CalendlyPreloader />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
