import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Package optimization
    optimizePackageImports: ['typewriter-effect'],
    
    // Updated Turbopack configuration
    turbo: {
      // Replace loaders with rules using glob pattern
      rules: {
        '*.mdx': ['@mdx-js/loader'],
        // Add other file type rules as needed
        // '*.css': ['postcss-loader'],
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'utfs.io',
        port: '', 
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: 'lh3.googleusercontent.com',
        port: '', 
        pathname: '/**',
      },
      
    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);