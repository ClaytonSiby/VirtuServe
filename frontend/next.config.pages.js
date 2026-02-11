/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/VirtuServe",
  assetPrefix: "/VirtuServe/",
  // Browser compatibility
  swcMinify: true,
  compiler: {
    // Remove React properties in production
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      "https://virtuserve-api-8d1e0b1a84d7.herokuapp.com",
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://claytonsiby.github.io/VirtuServe",
    NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
    NEXT_PUBLIC_BASE_PATH: "/VirtuServe",
    // Google Services
    NEXT_PUBLIC_GA_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || "",
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
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
