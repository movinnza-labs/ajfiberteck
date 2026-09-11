import type { Metadata } from 'next';
import Link from 'next/link';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FOOTER_PRODUCTS, FOOTER_QUICK_LINKS } from '@/data/site';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-navy-950 pt-32 pb-20">
      <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/4 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-700/20 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-6xl font-bold text-brand-600 sm:text-7xl">404</p>
          <h1 className="mt-5 text-3xl text-white sm:text-4xl">Page not found</h1>
          <p className="mt-5 leading-relaxed text-navy-200">
            The page you are looking for may have moved or no longer exists.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary" size="lg">
              Home
            </Button>
            <Button href="/contact-us/" variant="light" size="lg">
              Contact Us
            </Button>
          </div>

          <nav aria-label="Helpful links" className="mt-14">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              {[...FOOTER_QUICK_LINKS, ...FOOTER_PRODUCTS].map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-navy-300 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
