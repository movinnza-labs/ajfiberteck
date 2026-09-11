import type { Metadata } from 'next';

import HamatPageTemplate from '@/components/sections/HamatPageTemplate';
import { buildMetadata } from '@/lib/seo';
import { HAMAT_PRODUCTS } from '@/data/content';

const product = HAMAT_PRODUCTS[2];

export const metadata: Metadata = buildMetadata({
  title: 'HAMAT Super',
  description:
    'HAMAT Super High Silica Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption. Silica Fiber, transformation temperature 850°C.',
  path: '/hamat-super/',
  type: 'article',
  image: '/media/2025/05/3.png',
});

export default function Page() {
  return <HamatPageTemplate product={product} />;
}
