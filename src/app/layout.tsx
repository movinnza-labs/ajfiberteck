import type { Metadata, Viewport } from 'next';
import { DM_Sans, Poppins } from 'next/font/google';
import './globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/Reveal';
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd';
import { COMPANY, SITE_URL } from '@/data/site';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'AJ Fibertek India | Advanced Insulation, Precision Sintered Tooling & Medical Components',
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    'AJ Fibertek India delivers high‑performance inorganic fiber insulation systems, custom sintered tooling, and medical‑grade components with uncompromising quality and innovation.',
  applicationName: COMPANY.siteName,
  authors: [{ name: COMPANY.legalName, url: SITE_URL }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  // Favicons come from src/app/icon.png and src/app/apple-icon.png.
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: '#0C142E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white antialiased">
        {/* Without JS the reveal animation never runs, so show everything. */}
        <noscript>
          <style>{`.aj-reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />

        <Reveal />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
