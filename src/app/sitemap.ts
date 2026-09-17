import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/site';

export const dynamic = 'force-static';

/**
 * Every URL here is a real, indexable route in this app.
 * /products/ is deliberately excluded: it is served with `noindex`
 * because it still holds the original theme's placeholder content.
 */
const ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}> = [
  { path: '/', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/about-us/', priority: 0.9, changeFrequency: 'yearly' },
  { path: '/thermal-acoustic-insulation/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/medical-implant/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sinteredtooling/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact-us/', priority: 0.8, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
