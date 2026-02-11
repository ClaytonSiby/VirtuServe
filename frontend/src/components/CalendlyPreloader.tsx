"use client";

import { useEffect } from "react";

/**
 * Preloads Calendly widget assets with dns-prefetch
 * Actual loading is deferred until the contact page
 */
export default function CalendlyPreloader() {
  useEffect(() => {
    // Only add DNS prefetch for faster connection when needed
    if (typeof window !== "undefined") {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = "https://assets.calendly.com";
      document.head.appendChild(link);

      return () => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      };
    }
  }, []);

  return null;
}

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: Record<string, unknown>;
  }
}
