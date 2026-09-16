import type { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { buildMetadata } from '@/lib/seo';
import { SITE_URL } from '@/data/site';
import { TOOLING_PAGE } from '@/data/content';

export const metadata: Metadata = buildMetadata({
  title: 'Precision Sintered Tooling',
  description:
    'AJ Fibertek’s sintered tooling division supplies core components like punches, rods, and dies for powder metallurgy processes — built for high pressure and exact tolerances.',
  path: '/sinteredtooling/',
  type: 'article',
  image: '/media/2025/06/sintertooling.png',
});

function ToolingJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/sinteredtooling/`,
        url: `${SITE_URL}/sinteredtooling/`,
        name: 'Sintered Tooling',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/sinteredtooling/#components`,
        name: 'Sintered tooling components',
        itemListElement: TOOLING_PAGE.items.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: t.title,
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function SinteredToolingPage() {
  return (
    <>
      <PageHero
        title={TOOLING_PAGE.h1}
        crumbs={[{ label: 'Home', href: '/' }, { label: TOOLING_PAGE.breadcrumbLabel }]}
      />

      {/* Intro */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="aj-reveal">
            <SectionHeading
              title={TOOLING_PAGE.intro.title}
              intro={TOOLING_PAGE.intro.body}
              align="center"
            />
          </div>
        </Container>
      </section>

      {/* Tooling components */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TOOLING_PAGE.items.map((item, i) => (
              <li
                key={item.title}
                className="aj-reveal group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-navy-50">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading={i < 4 ? undefined : 'lazy'}
                      priority={i < 2}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="font-display text-base font-bold text-navy-900">{item.title}</h2>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ToolingJsonLd />
    </>
  );
}
