import type { Metadata } from 'next';

import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ListingCard from '@/components/ui/ListingCard';
import CtaBand from '@/components/sections/CtaBand';
import { buildMetadata } from '@/lib/seo';
import { SITE_URL } from '@/data/site';
import { MEDICAL_PAGE } from '@/data/content';

export const metadata: Metadata = buildMetadata({
  title: 'Medical Implant Components',
  description:
    'AJ Fibertek manufactures orthopedic implants that support trauma care, spinal procedures, and pediatric surgeries — plates, screws, fixation systems, and minimally invasive implants.',
  path: '/medical-implant/',
  type: 'article',
  image: '/media/2025/05/Picture24.png',
});

function MedicalJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/medical-implant/`,
        url: `${SITE_URL}/medical-implant/`,
        name: 'Medical implant',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/medical-implant/#categories`,
        name: 'Medical implant components',
        itemListElement: MEDICAL_PAGE.categories.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c,
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

export default function MedicalImplantPage() {
  return (
    <>
      <PageHero
        title={MEDICAL_PAGE.h1}
        crumbs={[{ label: 'Home', href: '/' }, { label: MEDICAL_PAGE.breadcrumbLabel }]}
      />

      {/* Intro */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="aj-reveal">
            <SectionHeading
              title={MEDICAL_PAGE.intro.title}
              intro={MEDICAL_PAGE.intro.body}
              align="center"
            />
          </div>
        </Container>
      </section>

      {/* Implant gallery */}
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MEDICAL_PAGE.gallery.map((item, i) => (
              <li
                key={item.image + i}
                className="aj-reveal"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <ListingCard
                  image={item.image}
                  alt={item.alt}
                  price={item.price}
                  per={item.per}
                  cta={item.cta}
                  name={item.name}
                  meta={item.meta}
                  imageFit="contain"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Implant categories */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MEDICAL_PAGE.categories.map((c, i) => (
              <li
                key={c}
                className="aj-reveal group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-600 transition-transform duration-500 group-hover:scale-x-100"
                />
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-full border border-navy-100 bg-navy-50/70 transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-brand-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2 4 5.5v6c0 4.6 3.4 8.9 8 10.5 4.6-1.6 8-5.9 8-10.5v-6L12 2Z" />
                  </svg>
                </span>
                <h2 className="mt-5 font-display text-base font-bold text-navy-900">{c}</h2>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
      <MedicalJsonLd />
    </>
  );
}
