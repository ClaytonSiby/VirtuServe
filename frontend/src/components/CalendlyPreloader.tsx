"use client";

import { useEffect } from "react";

/**
 * Preloads Calendly widget assets and initializes the script
 * This component should be rendered in the root layout to ensure
 * the calendar is ready when users navigate to the contact page
 */
export default function CalendlyPreloader() {
  useEffect(() => {
    // Check if Calendly script is already loaded
    if (typeof window !== "undefined" && !window.Calendly) {
      // Load Calendly CSS
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      // Load Calendly JS
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        console.log("Calendly widget preloaded successfully");
      };
      document.body.appendChild(script);

      return () => {
        // Cleanup if needed
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      };
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: Record<string, unknown>;
  }
}
