/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/VirtuServe",
  assetPrefix: "/VirtuServe/",
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
