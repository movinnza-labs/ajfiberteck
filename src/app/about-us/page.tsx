import type { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import LogoMarquee from '@/components/sections/LogoMarquee';
import AboutVideo from '@/components/sections/AboutVideo';
import { buildMetadata } from '@/lib/seo';
import { SITE_URL } from '@/data/site';
import { ABOUT_PAGE } from '@/data/content';

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description:
    'AJ Fibertek India is a multi-disciplinary manufacturing company delivering engineered solutions across thermal and acoustic insulation, sintered tooling, and medical implants.',
  path: '/about-us/',
  type: 'article',
  image: '/media/2025/05/Picture1.jpg',
});

function AboutJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about-us/`,
    url: `${SITE_URL}/about-us/`,
    name: 'About Us',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={ABOUT_PAGE.h1}
        crumbs={[{ label: 'Home', href: '/' }, { label: ABOUT_PAGE.breadcrumbLabel }]}
      />

      {/* Intro: video + narrative */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="aj-reveal min-w-0 lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-navy-100 shadow-[var(--shadow-card)]">
                <AboutVideo src={ABOUT_PAGE.video} />
                <div className="absolute bottom-5 left-5 rounded-xl bg-navy-950/85 px-5 py-3 backdrop-blur-sm">
                  <p className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-brand-400">
                    {ABOUT_PAGE.sinceLabel}
                  </p>
                  <p className="font-display text-2xl font-bold text-white">
                    {ABOUT_PAGE.sinceValue}
                  </p>
                </div>
              </div>
            </div>

            <div className="aj-reveal min-w-0 lg:col-span-7">
              <SectionHeading title={ABOUT_PAGE.intro.title} />
              <div className="mt-6 space-y-5">
                {ABOUT_PAGE.intro.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Satisfied Clients */}
      <section className="bg-surface py-20 lg:py-24">
        <Container>
          <h2 className="aj-reveal text-center text-2xl sm:text-3xl">{ABOUT_PAGE.clientsTitle}</h2>
          <div aria-hidden="true" className="aj-rule mx-auto mt-5" />
          <div className="aj-reveal mt-10">
            <LogoMarquee logos={ABOUT_PAGE.clientLogos} />
          </div>
        </Container>
      </section>

      {/* Commitment: mission, vision, pillars */}
      <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
        <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-50" />
        <div
          aria-hidden="true"
          className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand-800/20 blur-3xl"
        />

        <Container className="relative">
          <div className="aj-reveal">
            <SectionHeading title={ABOUT_PAGE.commitmentTitle} tone="light" align="center" />
          </div>

          {/* Mission + Vision */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {[ABOUT_PAGE.mission, ABOUT_PAGE.vision].map((block, i) => (
              <div
                key={block.title}
                className="aj-reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-colors duration-300 hover:border-brand-600/50 sm:p-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brand-600 transition-transform duration-500 group-hover:scale-x-100"
                />
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {block.title}
                </h3>
                <div className="aj-rule mt-5" />
                <p className="mt-6 leading-relaxed text-navy-200">{block.body}</p>
              </div>
            ))}
          </div>

          {/* Pillars */}
          <h3 className="aj-reveal mt-20 text-center font-display text-2xl font-bold text-white sm:text-3xl">
            {ABOUT_PAGE.pillarsTitle}
          </h3>
          <div aria-hidden="true" className="aj-rule mx-auto mt-5" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ABOUT_PAGE.pillars.map((p, i) => (
              <div
                key={p.title}
                className="aj-reveal rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-brand-600/50 hover:bg-white/[0.06]"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <h4 className="font-display text-base font-bold text-white">{p.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-navy-200">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="aj-reveal">
            <SectionHeading title={ABOUT_PAGE.timelineTitle} align="center" />
          </div>

          <ol className="relative mt-16 space-y-10 before:absolute before:left-[5.25rem] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-navy-100 md:before:block">
            {ABOUT_PAGE.timeline.map((entry, i) => (
              <li
                key={entry.year}
                className="aj-reveal relative md:flex md:gap-10"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Year */}
                <div className="flex items-center gap-4 md:w-[5.25rem] md:shrink-0 md:flex-col md:items-end md:gap-0">
                  <span className="font-display text-2xl font-bold text-brand-600 md:text-3xl">
                    {entry.year}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-navy-100 md:hidden" />
                </div>

                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-[5.25rem] top-2.5 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand-600 bg-white md:block"
                />

                {/* Content */}
                <div className="mt-3 flex-1 rounded-2xl border border-navy-100 bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)] md:mt-0 md:ml-4">
                  {entry.label && (
                    <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-600">
                      {entry.label}
                    </p>
                  )}
                  <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
                    {entry.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {entry.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Awards */}
      <section className="bg-surface py-20 lg:py-24">
        <Container>
          <div className="aj-reveal">
            <SectionHeading title={ABOUT_PAGE.awardsTitle} align="center" />
          </div>
          <div className="aj-reveal mt-12 flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-3 shadow-[var(--shadow-card)]">
              <Image
                src={ABOUT_PAGE.awardsImage.src}
                alt={ABOUT_PAGE.awardsImage.alt}
                width={ABOUT_PAGE.awardsImage.width}
                height={ABOUT_PAGE.awardsImage.height}
                sizes="(max-width: 640px) 90vw, 420px"
                loading="lazy"
                className="h-auto w-full max-w-[420px] rounded-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <AboutJsonLd />
    </>
  );
}
