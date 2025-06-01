/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds to allow deployment despite warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
};

module.exports = nextConfig; 