import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import SpecTable from '@/components/ui/SpecTable';
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
      ...INSULATION_PAGE.products.map((p) => ({
        '@type': 'Product',
        name: p.wordmark.alt,
        description: p.description,
        url: `${SITE_URL}${p.href}`,
        image: `${SITE_URL}${p.image.src}`,
        brand: { '@type': 'Brand', name: 'HAMAT' },
        manufacturer: { '@id': `${SITE_URL}/#organization` },
        additionalProperty: p.specs.map((s) => ({
          '@type': 'PropertyValue',
          name: s.label,
          value: s.value,
        })),
      })),
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
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="aj-reveal">
            <SectionHeading
              title={INSULATION_PAGE.intro.title}
              intro={INSULATION_PAGE.intro.body}
              align="center"
            />
          </div>
        </Container>
      </section>

      {/* HAMAT product range */}
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <div className="space-y-8">
            {INSULATION_PAGE.products.map((product, i) => (
              <article
                key={product.href}
                className="aj-reveal group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="grid lg:grid-cols-12">
                  {/* Visual */}
                  <div className="relative flex flex-col justify-between gap-6 bg-navy-900 p-8 lg:col-span-5 lg:p-10">
                    <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-50" />

                    <div className="relative">
                      <Image
                        src={product.wordmark.src}
                        alt={product.wordmark.alt}
                        width={product.wordmark.width}
                        height={product.wordmark.height}
                        sizes="(max-width: 1024px) 70vw, 280px"
                        priority={i === 0}
                        loading={i === 0 ? undefined : 'lazy'}
                        className="h-auto w-[220px] max-w-full brightness-0 invert sm:w-[260px]"
                      />
                      <p className="mt-7 text-sm leading-relaxed text-navy-200">
                        {product.description}
                      </p>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={product.image.src}
                        alt={product.wordmark.alt}
                        width={product.image.width}
                        height={product.image.height}
                        sizes="(max-width: 1024px) 80vw, 380px"
                        loading="lazy"
                        className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-52"
                      />
                    </div>
                  </div>

                  {/* Specification */}
                  <div className="min-w-0 p-8 lg:col-span-7 lg:p-10">
                    <SpecTable
                      heading={INSULATION_PAGE.specHeading}
                      caption={INSULATION_PAGE.specTableHeading}
                      rows={product.specs}
                    />

                    <Link
                      href={product.href}
                      className="group/link mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                    >
                      {product.wordmark.alt}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 8h11M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

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
