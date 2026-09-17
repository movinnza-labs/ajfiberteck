import type { Metadata } from 'next';
import { SITE_URL, COMPANY } from '@/data/site';

const OG_DEFAULT = '/media/2025/05/car-showroom.webp';

type PageSeo = {
  title: string;
  description: string;
  /** Route path including leading and trailing slash, e.g. "/about-us/" */
  path: string;
  image?: string;
  type?: 'website' | 'article';
  /** Keep the page reachable but out of search results. */
  noindex?: boolean;
};

/**
 * Builds page metadata with a canonical URL, Open Graph and Twitter cards.
 * Descriptions are written from the page's own visible content only.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = OG_DEFAULT,
  type = 'website',
  noindex = false,
}: PageSeo): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: {
      index: !noindex,
      follow: true,
      googleBot: {
        index: !noindex,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: COMPANY.siteName,
      locale: 'en_US',
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function abs(path: string) {
  return new URL(path, SITE_URL).toString();
}
