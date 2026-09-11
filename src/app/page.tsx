import type { Metadata } from 'next';

import HomeHero from '@/components/sections/HomeHero';
import HomeQuality from '@/components/sections/HomeQuality';
import HomeAbout from '@/components/sections/HomeAbout';
import HomeIndustries from '@/components/sections/HomeIndustries';
import HomeProducts from '@/components/sections/HomeProducts';
import HomeMission from '@/components/sections/HomeMission';
import CtaBand from '@/components/sections/CtaBand';
import ProcessTimeline from '@/components/sections/ProcessTimeline';

import { buildMetadata } from '@/lib/seo';
import { SITE_URL } from '@/data/site';
import { HOME_PRODUCTS } from '@/data/content';

export const metadata: Metadata = {
  ...buildMetadata({
    title:
      'AJ Fibertek India | Advanced Insulation, Precision Sintered Tooling & Medical Components',
    description:
      'AJ Fibertek India delivers high‑performance inorganic fiber insulation systems, custom sintered tooling, and medical‑grade components with uncompromising quality and innovation.',
    path: '/',
  }),
  // The root layout template would otherwise append the site name twice.
  title: {
    absolute:
      'AJ Fibertek India | Advanced Insulation, Precision Sintered Tooling & Medical Components',
  },
};

/** WebPage node plus the three product divisions the page presents. */
function HomeJsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/`,
        url: `${SITE_URL}/`,
        name: 'AJ Fibertek India | Advanced Insulation, Precision Sintered Tooling & Medical Components',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        description:
          'AJ Fibertek India delivers high‑performance inorganic fiber insulation systems, custom sintered tooling, and medical‑grade components with uncompromising quality and innovation.',
        inLanguage: 'en-US',
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#divisions`,
        name: 'Advanced Glass & Silica Fiber Insulation Technologies',
        itemListElement: HOME_PRODUCTS.cards.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.name,
          description: c.description,
          url: `${SITE_URL}${c.href}`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeQuality />
      <HomeAbout />
      <HomeIndustries />
      <HomeProducts />
      <HomeMission />
      <CtaBand />
      <ProcessTimeline />
      <HomeJsonLd />
    </>
  );
}
