import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'caymanislandsyoga.com',
          },
        ],
        destination: 'https://www.caymanislandsyoga.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
