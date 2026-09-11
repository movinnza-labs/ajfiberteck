import type { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ListingCard from '@/components/ui/ListingCard';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Button from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';
import { PRODUCTS_PAGE } from '@/data/content';

/**
 * This route reproduces the existing /products/ page, which on the live
 * site still contains the original WordPress theme's vehicle-rental demo
 * content. It is kept verbatim at its existing URL so no indexed link
 * breaks. `noindex` keeps the placeholder text out of search results
 * without removing the page or altering a single word of it.
 */
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Our Cars',
    description: 'Explore Our Top-Rated Vehicles.',
    path: '/products/',
    type: 'article',
  }),
  robots: { index: false, follow: true },
};

function FeatureItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-brand-600" />
      <div>
        <h3 className="font-display text-base font-bold text-navy-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title={PRODUCTS_PAGE.h1}
        crumbs={[{ label: 'Home', href: '/' }, { label: PRODUCTS_PAGE.breadcrumbLabel }]}
      />

      {/* Vehicle listing */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="aj-reveal">
            <SectionHeading title={PRODUCTS_PAGE.listTitle} align="center" />
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS_PAGE.cars.map((car, i) => (
              <li
                key={(car.image ?? 'card') + i}
                className="aj-reveal"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
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

      {/* Services */}
      <section className="bg-surface py-20 lg:py-24">
        <Container>
          <div className="aj-reveal">
            <SectionHeading
              eyebrow={PRODUCTS_PAGE.servicesEyebrow}
              title={PRODUCTS_PAGE.servicesTitle}
              align="center"
            />
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS_PAGE.services.map((s, i) => (
              <li
                key={s.title}
                className="aj-reveal group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-600 transition-transform duration-500 group-hover:scale-x-100"
                />
                <h3 className="font-display text-lg font-bold text-navy-900">{s.title}</h3>
                <div aria-hidden="true" className="aj-rule mt-4" />
                <p className="mt-5 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>

          <div className="aj-reveal mt-12 flex justify-center">
            <Button href="#" variant="secondary" size="md">
              {PRODUCTS_PAGE.servicesCta}
            </Button>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="aj-reveal">
            <SectionHeading
              eyebrow={PRODUCTS_PAGE.whyEyebrow}
              title={PRODUCTS_PAGE.whyTitle}
              intro={PRODUCTS_PAGE.whyBody}
              align="center"
            />
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-3">
            <div className="aj-reveal space-y-8">
              {PRODUCTS_PAGE.whyLeft.map((f) => (
                <FeatureItem key={f.title} title={f.title} body={f.body} />
              ))}
            </div>

            <div className="aj-reveal order-first lg:order-none">
              {PRODUCTS_PAGE.whyImage ? (
                <Image
                  src={PRODUCTS_PAGE.whyImage}
                  alt=""
                  width={800}
                  height={500}
                  sizes="(max-width: 1024px) 80vw, 380px"
                  loading="lazy"
                  className="mx-auto h-auto w-full max-w-sm"
                />
              ) : (
                <div className="mx-auto aspect-[8/5] w-full max-w-sm overflow-hidden rounded-2xl">
                  <ImagePlaceholder />
                </div>
              )}
            </div>

            <div className="aj-reveal space-y-8">
              {PRODUCTS_PAGE.whyRight.map((f) => (
                <FeatureItem key={f.title} title={f.title} body={f.body} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
        <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-50" />
        <Container className="relative">
          <div className="aj-reveal mx-auto max-w-3xl text-center">
            <h2 className="text-3xl text-white sm:text-4xl">{PRODUCTS_PAGE.ctaTitle}</h2>
            <p className="mt-5 leading-relaxed text-navy-200">{PRODUCTS_PAGE.ctaBody}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="#" variant="primary" size="lg">
                {PRODUCTS_PAGE.ctaPrimary}
              </Button>
              <Button href="/contact-us/" variant="light" size="lg">
                {PRODUCTS_PAGE.ctaSecondary}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
