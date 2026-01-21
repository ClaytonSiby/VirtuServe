import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CalendlyPreloader from "@/components/CalendlyPreloader";

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
  title:
    "VirtuServe - Professional Virtual Assistant Services for International Clients",
  description:
    "Expert virtual assistant services for international clients and companies. Administrative support, customer service, digital marketing, and more. Book your discovery call today.",
  keywords:
    "virtual assistant, VA services, administrative support, international clients, remote assistant, business support",
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
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        {/* Preload Calendly widget script */}
        <link
          rel="preload"
          href="https://assets.calendly.com/assets/external/widget.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://assets.calendly.com/assets/external/widget.css"
          as="style"
        />
      </head>
      <body suppressHydrationWarning>
        <CalendlyPreloader />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
