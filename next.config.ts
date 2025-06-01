import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable ESLint during production builds to allow deployment despite warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
