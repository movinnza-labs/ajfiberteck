import type { Metadata } from 'next';

import HamatPageTemplate from '@/components/sections/HamatPageTemplate';
import { buildMetadata } from '@/lib/seo';
import { HAMAT_PRODUCTS } from '@/data/content';

const product = HAMAT_PRODUCTS[3];

export const metadata: Metadata = buildMetadata({
  title: 'HAMAT ULTRA',
  description:
    'HAMAT ULTRA High Silica Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption. High Silica Fiber, transformation temperature 1050°C.',
  path: '/hamat-ultra/',
  type: 'article',
  // Hidden from navigation and search; reachable only by direct URL.
  noindex: true,
  image: '/media/2025/05/5.png',
});

export default function Page() {
  return <HamatPageTemplate product={product} />;
}
