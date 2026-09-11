import Image from 'next/image';

import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import SpecTable from '@/components/ui/SpecTable';
import ListingCard from '@/components/ui/ListingCard';
import { SITE_URL } from '@/data/site';
import {
  HAMAT_ADDITIONAL,
  HAMAT_OTHER_CARS,
  HAMAT_SIDEBAR,
  type HamatProduct,
} from '@/data/content';

function ProductJsonLd({ product }: { product: HamatProduct }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/${product.slug}/#product`,
    name: product.title,
    description: product.description,
    url: `${SITE_URL}/${product.slug}/`,
    image: `${SITE_URL}${product.image.src}`,
    brand: { '@type': 'Brand', name: 'HAMAT' },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    additionalProperty: [...product.features, ...product.specs].map((s) => ({
      '@type': 'PropertyValue',
      name: s.label,
      value: s.value,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * Shared layout for the four HAMAT detail pages.
 *
 * The sidebar, "Additional Information" and "Explore Our Other Cars"
 * blocks are leftover demo content from the original WordPress theme.
 * They are reproduced verbatim because the content must not change.
 */
export default function HamatPageTemplate({ product }: { product: HamatProduct }) {
  return (
    <>
      <PageHero
        title={product.h1}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Thermal & Acoustic Insulation', href: '/thermal-acoustic-insulation/' },
          { label: product.breadcrumbLabel },
        ]}
      />

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Main column */}
            <div className="min-w-0 lg:col-span-8">
              {/* Product overview */}
              <div className="aj-reveal grid gap-8 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-navy-100 bg-navy-50 shadow-[var(--shadow-card)]">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    width={product.image.width}
                    height={product.image.height}
                    priority
                    sizes="(max-width: 640px) 100vw, 340px"
                    className="h-56 w-full object-cover sm:h-64"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <SectionHeading title={product.title} titleClassName="text-2xl sm:text-3xl" />
                  <p className="mt-5 text-sm leading-relaxed text-muted">{product.description}</p>
                </div>
              </div>

              {/* Technical features */}
              <div className="aj-reveal mt-14">
                <h2 className="text-xl sm:text-2xl">{product.featuresHeading}</h2>
                <div aria-hidden="true" className="aj-rule mt-5" />

                <dl className="mt-7 grid gap-4 sm:grid-cols-3">
                  {product.features.map((f) => (
                    <div
                      key={f.label}
                      className="rounded-xl border border-navy-100 bg-navy-50/60 p-5 transition-colors duration-300 hover:border-brand-200 hover:bg-brand-50/40"
                    >
                      <dt className="text-xs uppercase tracking-[0.14em] text-navy-600">
                        {f.label}
                      </dt>
                      <dd className="mt-2 font-display text-xl font-bold text-navy-900">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Full specification */}
              <div className="aj-reveal mt-14">
                <SpecTable
                  heading={product.specHeading}
                  caption={product.specTableHeading}
                  rows={product.specs}
                />
              </div>

              {/* Additional Information (legacy theme content) */}
              <div className="aj-reveal mt-14">
                <h2 className="text-xl sm:text-2xl">{HAMAT_ADDITIONAL.title}</h2>
                <div aria-hidden="true" className="aj-rule mt-5" />
                <p className="mt-6 leading-relaxed text-muted">{HAMAT_ADDITIONAL.body}</p>
              </div>
            </div>

            {/* Sidebar (legacy theme content) */}
            <aside className="min-w-0 lg:col-span-4">
              <div className="aj-reveal space-y-6 lg:sticky lg:top-28">
                {/* More Information */}
                <div className="overflow-hidden rounded-2xl bg-navy-900 p-7">
                  <h2 className="font-display text-base font-bold text-white">
                    {HAMAT_SIDEBAR.moreInfoTitle}
                  </h2>
                  <div aria-hidden="true" className="aj-rule mt-4" />
                  <ul className="mt-6 space-y-3 text-sm text-navy-200">
                    {HAMAT_SIDEBAR.moreInfo.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                {/* Our Services */}
                <div className="rounded-2xl border border-navy-100 bg-white p-7 shadow-[var(--shadow-card)]">
                  <h2 className="font-display text-base font-bold text-navy-900">
                    {HAMAT_SIDEBAR.servicesTitle}
                  </h2>
                  <div aria-hidden="true" className="aj-rule mt-4" />
                  <ul className="mt-6 space-y-3">
                    {HAMAT_SIDEBAR.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-3 border-b border-navy-100 pb-3 text-sm text-muted last:border-0 last:pb-0"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-600"
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Follow Us */}
                <div className="rounded-2xl border border-navy-100 bg-white p-7 shadow-[var(--shadow-card)]">
                  <h2 className="font-display text-base font-bold text-navy-900">
                    {HAMAT_SIDEBAR.followTitle}
                  </h2>
                  <div aria-hidden="true" className="aj-rule mt-4" />
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {HAMAT_SIDEBAR.social.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-navy-100 bg-navy-50/70 px-3.5 py-1.5 text-xs text-navy-700"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Explore Our Other Cars (legacy theme content) */}
      <section className="bg-surface py-20 lg:py-24">
        <Container>
          <div className="aj-reveal">
            <SectionHeading
              eyebrow={HAMAT_OTHER_CARS.eyebrow}
              title={HAMAT_OTHER_CARS.title}
              align="center"
            />
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HAMAT_OTHER_CARS.cards.map((car, i) => (
              <li
                key={(car.image ?? 'card') + i}
                className="aj-reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <ListingCard
                  image={car.image}
                  price={car.price}
                  per={car.per}
                  cta={car.cta}
                  name={car.name}
                  meta={car.meta}
                  imageFit="contain"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProductJsonLd product={product} />
    </>
  );
}
