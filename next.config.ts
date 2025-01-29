import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ 确保静态导出时，URL 结尾带 `/`
  trailingSlash: true,

  // ✅ WebGL 资源路径修正（如果你使用 `next export`）
  assetPrefix: process.env.NODE_ENV === 'production' ? '/unity' : '',

  // ✅ 避免 Next.js 处理 WebGL 资源（否则 Unity WebGL 会找不到资源）
  images: {
    unoptimized: true, // 让 Unity WebGL 资源以原始方式加载
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

  // ✅ 如果你要静态导出（只使用 `getStaticProps`）
  //output: 'export', // 🔥 如果你需要 SSR，请去掉这行
};

export default nextConfig;
