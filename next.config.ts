import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <- Agrega esta línea
  images: {
    unoptimized: true, // <- Recomendado para exportaciones estáticas puras en Netlify
  },
};

export default nextConfig;