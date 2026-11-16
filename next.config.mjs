/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: [
    'localhost',
    'localhost:3000',
    '127.0.0.1',
    '127.0.0.1:3000',
    '192.168.100.33',
    '192.168.100.33:3000',
  ],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.theiqtest.org',
          },
        ],
        destination: 'https://theiqtest.org/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'iqtest-puce.vercel.app',
          },
        ],
        destination: 'https://theiqtest.org/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
