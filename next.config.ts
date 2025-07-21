import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/M/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
