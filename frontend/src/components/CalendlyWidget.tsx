"use client";

import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

export default function CalendlyWidget() {
  const [calendlyUrl, setCalendlyUrl] = useState<string>("");

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
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
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
      />
    </div>
  );
}
