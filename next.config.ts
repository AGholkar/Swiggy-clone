import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Added this for your fallback image
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;