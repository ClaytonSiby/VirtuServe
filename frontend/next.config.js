/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "VirtuServe";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}` : "",
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },
  // Performance optimizations (production only)
  ...(process.env.NODE_ENV === "production" && {
    compiler: {
      removeConsole: true,
    },
    productionBrowserSourceMaps: false,
  }),
  // Enable SWC minification for better performance
  swcMinify: true,
};

module.exports = nextConfig;
