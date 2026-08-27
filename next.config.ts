import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/pre-call",
        destination: "/roofingpre-call",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
