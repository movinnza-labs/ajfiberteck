import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Next.js internals — no crawl value, and never linked.
        disallow: ['/_next/static/chunks/', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
