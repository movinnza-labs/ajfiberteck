import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import {
  COMPANY,
  FOOTER_COPYRIGHT,
  FOOTER_LEGAL,
  FOOTER_PRODUCTS,
  FOOTER_QUICK_LINKS,
} from '@/data/site';

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
      {children}
    </h2>
  );
}

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((l) => (
        <li key={l.href + l.label}>
          <Link
            href={l.href}
            className="group inline-flex items-center gap-2 text-sm text-navy-200 transition-colors hover:text-white"
          >
            <span
              aria-hidden="true"
              className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-4"
            />
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/70 to-transparent"
      />

      <Container className="relative">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-20">
          {/* Brand + social */}
          <div>
            <Link href="/" aria-label={`${COMPANY.shortName} — home`} className="inline-block">
              <Image
                src={COMPANY.logo}
                alt={COMPANY.logoAlt}
                width={1746}
                height={410}
                sizes="200px"
                className="h-auto w-[190px] brightness-0 invert"
              />
            </Link>

            <div className="mt-8">
              <ColumnTitle>Follow Us</ColumnTitle>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2.5 text-sm text-navy-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500 hover:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.03-3.11-1.95-3.11-1.96 0-2.26 1.48-2.26 3.01V21h-4V9Z" />
                </svg>
                Linkedin-in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinkList items={FOOTER_QUICK_LINKS} />
          </nav>

          {/* Products */}
          <nav aria-label="Products">
            <ColumnTitle>Products</ColumnTitle>
            <LinkList items={FOOTER_PRODUCTS} />
          </nav>

          {/* Contact */}
          <div>
            <ColumnTitle>Contact Us</ColumnTitle>
            <ul className="space-y-4 text-sm text-navy-200">
              <li className="flex gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  fill="currentColor"
                >
                  <path d="M10 1.5A6.5 6.5 0 0 0 3.5 8c0 4.5 5.62 10.06 5.86 10.3a.9.9 0 0 0 1.28 0C10.88 18.06 16.5 12.5 16.5 8A6.5 6.5 0 0 0 10 1.5Zm0 9A2.5 2.5 0 1 1 10 5.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
                <address className="not-italic leading-relaxed">{COMPANY.address}</address>
              </li>
              <li className="flex gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  fill="currentColor"
                >
                  <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h1.1a1.5 1.5 0 0 1 1.45 1.13l.62 2.47a1.5 1.5 0 0 1-.4 1.45l-.9.9a11.6 11.6 0 0 0 5.68 5.68l.9-.9a1.5 1.5 0 0 1 1.45-.4l2.47.62A1.5 1.5 0 0 1 18 14.4v1.1a2.5 2.5 0 0 1-2.5 2.5h-.5C7.82 18 2 12.18 2 5V4.5Z" />
                </svg>
                <a href={COMPANY.phoneHref} className="transition-colors hover:text-white">
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  fill="currentColor"
                >
                  <path d="M2 6.2V15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.2l-7.34 4.4a1.25 1.25 0 0 1-1.32 0L2 6.2Z" />
                  <path d="M18 4.4A2 2 0 0 0 16 3H4a2 2 0 0 0-2 1.4l8 4.8 8-4.8Z" />
                </svg>
                <a
                  href={COMPANY.emailHref}
                  className="break-all transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  fill="currentColor"
                >
                  <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4.25a.75.75 0 0 0-1.5 0V10c0 .28.16.54.4.67l2.5 1.38a.75.75 0 1 0 .72-1.31l-2.12-1.17V6.25Z" />
                </svg>
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-navy-300 md:flex-row md:items-center md:justify-between">
          <p>
            {FOOTER_COPYRIGHT.text}{' '}
            <a
              href={FOOTER_COPYRIGHT.creditHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-200 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {FOOTER_COPYRIGHT.creditLabel}
            </a>
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LEGAL.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
