import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Self-contained server for the Docker image: only the files the app
  // needs at runtime, so the container stays small and starts lean.
  output: 'standalone',

  // The existing WordPress site serves every URL with a trailing slash
  // (e.g. /about-us/). Preserve that exactly so no indexed URL changes.
  trailingSlash: true,

  images: {
    // WebP only: AVIF encoding costs far more CPU and memory per image.
    formats: ['image/webp'],
    // Media only changes on deploy, so generate each image size once.
    minimumCacheTTL: 31536000,
    deviceSizes: [320, 375, 414, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [64, 96, 128, 165, 249, 265, 384],
  },

  // Caps build workers so the build does not spike memory.
  experimental: { cpus: 4 },

  poweredByHeader: false,

  async redirects() {
    return [
      // Legacy WordPress leftovers that were listed in the old Yoast
      // sitemaps: the default sample post and its empty category.
      // They have no equivalent page here, so send them to the home page
      // rather than leaving indexed URLs to 404.
      { source: '/hello-world', destination: '/', permanent: true },
      { source: '/category/uncategorized', destination: '/', permanent: true },
      { source: '/category/:slug', destination: '/', permanent: true },
      // Old Yoast sitemap index — point crawlers at the real sitemap.
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/media/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
        ],
      },
    ];
  },
};

export default nextConfig;
