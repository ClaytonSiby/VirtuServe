import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "VirtuServe - Professional Virtual Assistant Services for International Clients",
  description:
    "Expert virtual assistant services for international clients and companies. Administrative support, customer service, digital marketing, and more. Book your discovery call today.",
  keywords:
    "virtual assistant, VA services, administrative support, international clients, remote assistant, business support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
