import { COMPANY, SITE_URL } from '@/data/site';
import { abs } from '@/lib/seo';

/**
 * Site-wide Organization + WebSite graph.
 * Every value below appears on the public website — nothing is invented.
 */
export default function OrganizationJsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: COMPANY.schemaName,
        legalName: COMPANY.legalName,
        alternateName: [COMPANY.brandName, COMPANY.shortName],
        url: `${SITE_URL}/`,
        foundingDate: COMPANY.foundingYear,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#/schema/logo/image/`,
          url: abs(COMPANY.logo),
          contentUrl: abs(COMPANY.logo),
          width: 1746,
          height: 410,
          caption: COMPANY.schemaName,
        },
        image: { '@id': `${SITE_URL}/#/schema/logo/image/` },
        telephone: COMPANY.phoneDisplay,
        email: COMPANY.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY.addressParts.streetAddress,
          addressLocality: COMPANY.addressParts.addressLocality,
          postalCode: COMPANY.addressParts.postalCode,
          addressRegion: COMPANY.addressParts.addressRegion,
          addressCountry: COMPANY.addressParts.addressCountry,
        },
        sameAs: [COMPANY.linkedin],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: COMPANY.phoneDisplay,
            email: COMPANY.email,
            contactType: 'customer support',
            areaServed: 'IN',
            availableLanguage: ['en'],
          },
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certification',
            name: 'ISO 9001:2015',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certification',
            name: 'IATF 16949',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: COMPANY.siteName,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
