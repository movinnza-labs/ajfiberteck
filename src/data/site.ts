/**
 * Single source of truth for site-wide constants.
 * Every string here is copied verbatim from https://ajfibertek.co.in/
 */

export const SITE_URL = 'https://ajfibertek.co.in';

export const COMPANY = {
  /** Organisation schema name, as used by the existing site. */
  schemaName: 'Aj Fibertek',
  /** Legal name exactly as printed in the site footer and contact page. */
  legalName: 'AJ Fibertek India Pvt. Ltd.',
  /** Brand name as used in body copy throughout the site. */
  brandName: 'AJ Fibertek India',
  shortName: 'AJ Fibertek',
  siteName: 'Aj Fibertek',
  address:
    'AJ Fibertek India Pvt. Ltd. Gat No 44, Maval , Navalakh Umbre, Maval 410507 , Maharashtra India',
  addressParts: {
    streetAddress: 'Gat No 44, Navalakh Umbre',
    addressLocality: 'Maval',
    postalCode: '410507',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  phoneDisplay: '+91-90229 26948',
  phoneHref: 'tel:+919022926948',
  email: 'info@ajfibertek.co.in',
  emailHref: 'mailto:info@ajfibertek.co.in',
  hours: 'Monday to Friday - 9:00 am to 5:00 pm',
  linkedin: 'https://www.linkedin.com/company/aj-fiberktek-india/',
  foundingYear: '2009',
  logo: '/media/2025/05/aj-cdrrr-file-1.png',
  logoAlt: 'aj cdrrr file (1)',
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/**
 * Header navigation. Labels and destinations match the existing menu.
 * The four HAMAT product pages are nested under Thermal & Acoustic
 * Insulation so those existing URLs are reachable from the menu.
 */
export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  {
    label: 'Divisions and Products',
    href: '#',
    children: [
      {
        label: 'Thermal & Acoustic Insulation',
        href: '/thermal-acoustic-insulation/',
        children: [
          { label: 'HAMAT STD', href: '/hamat-std/' },
          { label: 'HAMAT ADV', href: '/hamat-adv/' },
          { label: 'HAMAT Super', href: '/hamat-super/' },
          { label: 'HAMAT ULTRA', href: '/hamat-ultra/' },
        ],
      },
      { label: 'Precision Sintered Tooling', href: '/sinteredtooling/' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us/' },
];

/** Footer "Quick Links" column — as on the existing site. */
export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact us', href: '/contact-us/' },
];

/** Footer "Products" column — as on the existing site. */
export const FOOTER_PRODUCTS: NavItem[] = [
  { label: 'Thermal & Acoustic Insulation', href: '/thermal-acoustic-insulation/' },
  { label: 'Medical Implant Components', href: '/medical-implant/' },
  { label: 'Precision Sintered Tooling', href: '/sinteredtooling/' },
];

export const FOOTER_LEGAL: NavItem[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

export const FOOTER_COPYRIGHT = {
  text: '© 2025 AJ Fibertek • All Rights Reserved Design & Developed By',
  creditLabel: 'movinnza',
  creditHref: 'https://movinnza.in/web-development/pune',
} as const;
