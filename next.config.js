/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/unity' : '',
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/unity/Build/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Content-Type', value: 'application/javascript' },
        ],
      },
    ];
  },
  // output: 'export', // 🔥 如果你需要 SSR，请去掉这行
};

module.exports = nextConfig;
