import type { Metadata } from 'next';

import HamatPageTemplate from '@/components/sections/HamatPageTemplate';
import { buildMetadata } from '@/lib/seo';
import { HAMAT_PRODUCTS } from '@/data/content';

const product = HAMAT_PRODUCTS[0];

export const metadata: Metadata = buildMetadata({
  title: 'HAMAT STD',
  description:
    'HAMAT STD ECR-Glass Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption. E-Glass, transformation temperature 640°C.',
  path: '/hamat-std/',
  type: 'article',
  // Hidden from navigation and search; reachable only by direct URL.
  noindex: true,
  image: '/media/2025/05/1.png',
});

export default function Page() {
  return <HamatPageTemplate product={product} />;
}
