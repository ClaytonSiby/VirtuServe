"use client";

import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";

export default function CalendlyWidget() {
  const [calendlyUrl, setCalendlyUrl] = useState<string>("");
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    // Get Calendly URL from environment variable
    const url = process.env.NEXT_PUBLIC_CALENDLY_URL;
    if (url) {
      setCalendlyUrl(url);
    } else {
      console.error(
        "NEXT_PUBLIC_CALENDLY_URL is not set in environment variables",
      );
    }

    // Listen for Calendly widget ready event
    const handleCalendlyReady = () => {
      setIsWidgetReady(true);
    };

    window.addEventListener("calendly.event_scheduled", handleCalendlyReady);

    // Set a timeout to hide skeleton after widget loads
    const timer = setTimeout(() => {
      setIsWidgetReady(true);
    }, 2000);

    return () => {
      window.removeEventListener(
        "calendly.event_scheduled",
        handleCalendlyReady,
      );
      clearTimeout(timer);
    };
  }, []);

  if (!calendlyUrl) {
    return (
      <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
        <p className="text-gray-600">
          Calendly integration is not configured. Please set up your Calendly
          URL.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative">
      {/* Loading skeleton */}
      {!isWidgetReady && (
        <div className="absolute inset-0 z-10 bg-white rounded-2xl p-8">
          <div className="animate-pulse space-y-6">
            {/* Header skeleton */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div className="space-y-3 flex-1">
                <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg w-3/4"></div>
                <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded w-1/2"></div>
              </div>
              <Calendar className="w-12 h-12 text-slate-300" />
            </div>

            {/* Calendar grid skeleton */}
            <div className="grid grid-cols-7 gap-2">
              {[...Array(35)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg"
                ></div>
              ))}
            </div>

            {/* Time slots skeleton */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg"
                >
                  <Clock className="w-4 h-4 text-slate-300" />
                  <div className="h-4 bg-slate-200 rounded w-16"></div>
                </div>
              ))}
            </div>

            {/* Loading indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
                <span className="text-slate-600 font-medium">
                  Loading calendar...
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Calendly widget */}
      <div
        className={`transition-opacity duration-500 ${isWidgetReady ? "opacity-100" : "opacity-0"}`}
      >
        <InlineWidget
          url={calendlyUrl}
          styles={{
            height: "700px",
            minWidth: "100%",
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "1e40af",
            textColor: "1f2937",
          }}
          prefill={{
            customAnswers: {
              a1: "Via website",
            },
          }}
        />
      </div>
    </div>
  );
}
