import type { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import HamatRange from '@/components/sections/HamatRange';
import { buildMetadata } from '@/lib/seo';
import { SITE_URL } from '@/data/site';
import { INSULATION_PAGE } from '@/data/content';

export const metadata: Metadata = buildMetadata({
  title: 'Thermal & Acoustic Insulation',
  description:
    'AJ Fibertek India’s HAMAT® insulation range — made from ECR glass and high-silica fibers — is trusted in automotive exhaust systems, industrial equipment, and power applications.',
  path: '/thermal-acoustic-insulation/',
  type: 'article',
  image: '/media/2025/06/HAMAT-STD.png',
});

function InsulationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/thermal-acoustic-insulation/`,
        url: `${SITE_URL}/thermal-acoustic-insulation/`,
        name: 'Thermal & Acoustic Insulation',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
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

export default function InsulationPage() {
  return (
    <>
      <PageHero
        title={INSULATION_PAGE.h1}
        crumbs={[{ label: 'Home', href: '/' }, { label: INSULATION_PAGE.breadcrumbLabel }]}
      />

      {/* Intro */}
      <section className="bg-white pt-20 lg:pt-24">
        <Container>
          <div className="aj-reveal">
            <SectionHeading
              title={INSULATION_PAGE.intro.title}
              intro={INSULATION_PAGE.intro.body}
              align="center"
              fullWidth
            />
          </div>
        </Container>
      </section>

      <HamatRange />

      {/* Formats */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INSULATION_PAGE.formats.map((f, i) => (
              <li
                key={f.title}
                className="aj-reveal group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-navy-50">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-base font-bold text-navy-900">{f.title}</h2>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <InsulationJsonLd />
    </>
  );
}
