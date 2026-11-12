import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Necesario para Cloudflare Pages
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // 2. Necesario para que Tailwind CSS funcione y las imágenes tengan tamaño
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