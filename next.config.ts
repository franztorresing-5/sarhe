import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Configuración para exportación estática (Cloudflare / Netlify)
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // 2. Reglas originales para que funcionen tus estilos locales
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;