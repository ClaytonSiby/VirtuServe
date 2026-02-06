/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: "standalone",
  compiler: {
    // Remove React properties in production
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  },
  // Performance optimizations (production only)
  ...(process.env.NODE_ENV === "production" && {
    compiler: {
      removeConsole: true,
    },
    productionBrowserSourceMaps: false,
  }),
};

module.exports = nextConfig;
