"use client";

import { useEffect } from "react";
import { useReportWebVitals } from "next/web-vitals";
import {
  trackWebVitals,
  initPerformanceObserver,
  trackPageLoad,
} from "@/lib/web-vitals";

/**
 * Web Vitals Reporter Component
 * Add this to your root layout to automatically track Core Web Vitals
 */
export default function WebVitalsReporter() {
  // Use Next.js built-in web vitals hook
  useReportWebVitals((metric) => {
    trackWebVitals(metric);
  });

  useEffect(() => {
    // Initialize performance observer
    initPerformanceObserver();

    // Track page load
    trackPageLoad();
  }, []);

  return null; // This component doesn't render anything
}
