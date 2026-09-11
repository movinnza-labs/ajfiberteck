import type { Metadata } from 'next';

import HamatPageTemplate from '@/components/sections/HamatPageTemplate';
import { buildMetadata } from '@/lib/seo';
import { HAMAT_PRODUCTS } from '@/data/content';

const product = HAMAT_PRODUCTS[1];

export const metadata: Metadata = buildMetadata({
  title: 'HAMAT ADV',
  description:
    'HAMAT ADV ECR-Glass Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption. ECR-Glass, transformation temperature 761°C.',
  path: '/hamat-adv/',
  type: 'article',
  image: '/media/2025/05/2.png',
});

export default function Page() {
  return <HamatPageTemplate product={product} />;
}
