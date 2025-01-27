import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Site-Comercial-para-Solucoes-em-Energia-Solar/' : '',
  trailingSlash: true,
};

export default nextConfig;
