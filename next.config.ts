import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/unity/Build/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // 允许跨域
          { key: "Content-Type", value: "application/javascript" }
        ],
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
