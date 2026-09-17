import type { Metadata } from 'next';

import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/sections/ContactForm';
import { buildMetadata } from '@/lib/seo';
import { COMPANY, SITE_URL } from '@/data/site';
import { CONTACT_PAGE } from '@/data/content';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Contact AJ Fibertek India Pvt. Ltd. at Gat No 44, Navalakh Umbre, Maval 410507, Maharashtra India. Phone +91-90229 26948, email info@ajfibertek.co.in.',
  path: '/contact-us/',
  type: 'article',
});

const ICONS: Record<string, React.ReactNode> = {
  'Office Location': (
    <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 5.2 6.5 11.6 6.77 11.87a1.04 1.04 0 0 0 1.46 0C13 21.1 19.5 14.7 19.5 9.5A7.5 7.5 0 0 0 12 2Zm0 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
  ),
  'Phone Number': (
    <path d="M2.5 5.5A3 3 0 0 1 5.5 2.5h1.3a1.8 1.8 0 0 1 1.74 1.36l.74 2.96a1.8 1.8 0 0 1-.48 1.74l-1.08 1.08a13.9 13.9 0 0 0 6.82 6.82l1.08-1.08a1.8 1.8 0 0 1 1.74-.48l2.96.74A1.8 1.8 0 0 1 21.5 17.2v1.3a3 3 0 0 1-3 3h-.6C9.38 21.5 2.5 14.62 2.5 6.1v-.6Z" />
  ),
  'Email Address': (
    <>
      <path d="M2.5 7.44V17a2.5 2.5 0 0 0 2.5 2.5h14a2.5 2.5 0 0 0 2.5-2.5V7.44l-8.99 5.39a1.5 1.5 0 0 1-1.54 0L2.5 7.44Z" />
      <path d="M21.5 5.2A2.5 2.5 0 0 0 19 4.5H5a2.5 2.5 0 0 0-2.5.7L12 10.9l9.5-5.7Z" />
    </>
  ),
  // Ring drawn with opposite winding so the dial stays hollow under fill.
  'Office Time': (
    <>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z" />
      <path d="M12.75 7a.75.75 0 0 0-1.5 0v5.25c0 .27.14.51.37.65l3.5 2.1a.75.75 0 1 0 .76-1.3l-3.13-1.87V7Z" />
    </>
  ),
};

function ContactJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${SITE_URL}/contact-us/`,
        url: `${SITE_URL}/contact-us/`,
        name: 'Contact Us',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: COMPANY.legalName,
        url: `${SITE_URL}/`,
        telephone: COMPANY.phoneDisplay,
        email: COMPANY.email,
        image: `${SITE_URL}${COMPANY.logo}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY.addressParts.streetAddress,
          addressLocality: COMPANY.addressParts.addressLocality,
          postalCode: COMPANY.addressParts.postalCode,
          addressRegion: COMPANY.addressParts.addressRegion,
          addressCountry: COMPANY.addressParts.addressCountry,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        sameAs: [COMPANY.linkedin],
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

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={CONTACT_PAGE.h1}
        crumbs={[{ label: 'Home', href: '/' }, { label: CONTACT_PAGE.breadcrumbLabel }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Details */}
            <div className="aj-reveal min-w-0 lg:col-span-5">
              <SectionHeading title={CONTACT_PAGE.title} />

              <ul className="mt-10 space-y-5">
                {CONTACT_PAGE.blocks.map((block) => (
                  <li
                    key={block.title}
                    className="group flex gap-5 rounded-2xl border border-navy-100 bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-navy-100 bg-navy-50/70 transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-brand-600"
                        fill="currentColor"
                      >
                        {ICONS[block.title]}
                      </svg>
                    </span>

                    <div className="min-w-0">
                      <h2 className="font-display text-base font-bold text-navy-900">
                        {block.title}
                      </h2>
                      {block.href ? (
                        <a
                          href={block.href}
                          className="mt-2 block break-words text-sm leading-relaxed text-muted transition-colors hover:text-brand-700"
                        >
                          {block.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm leading-relaxed text-muted">{block.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social media */}
              <div className="mt-8">
                <h2 className="font-display text-base font-bold text-navy-900">
                  {CONTACT_PAGE.socialTitle}
                </h2>
                <div aria-hidden="true" className="aj-rule mt-4" />
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-3 rounded-full border border-navy-100 px-5 py-3 text-sm text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-600 hover:text-brand-700"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.03-3.11-1.95-3.11-1.96 0-2.26 1.48-2.26 3.01V21h-4V9Z" />
                  </svg>
                  Icon-linkedin
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="aj-reveal min-w-0 lg:col-span-7">
              <div className="rounded-2xl border border-navy-100 bg-surface p-7 shadow-[var(--shadow-card)] sm:p-10">
                <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  {CONTACT_PAGE.formTitle}
                </h2>
                <div aria-hidden="true" className="aj-rule mt-5" />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContactJsonLd />
    </>
  );
}
