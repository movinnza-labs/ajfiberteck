/**
 * Verbatim page content captured from https://ajfibertek.co.in/
 *
 * IMPORTANT: every string in this file is a literal copy of text that appears
 * on the existing website. Do not rewrite, shorten or "improve" any of it.
 * Only presentation changes belong in the components that render this data.
 */

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const HOME_HERO = {
  title: 'Advanced Materials & Precision Engineering for Critical Applications',
  body: 'Delivering high-performance insulation systems, custom sintered tooling, and medical-grade components to meet the evolving needs of global industries.',
  cta: { label: 'About Us', href: '/about-us/' },
  video: '/media/2025/06/Untitled-design-new.mp4',
  poster: '/media/2025/05/industrial-background-68344821a0cf5.webp',
} as const;

export const HOME_QUALITY = {
  eyebrow: 'Who we are',
  title: 'Driven by Quality. Defined by Commitment',
  paragraphs: [
    'At AJ Fibertek India, quality isn’t a benchmark—it’s a mindset that shapes every product we deliver. Whether we’re manufacturing high-performance insulation, precision-engineered sintered tooling, or advanced medical implants, our commitment to excellence remains unwavering.',
    'We follow stringent quality standards and industry certifications to ensure every solution meets or exceeds expectations. Our dedicated teams work with precision, consistency, and a deep understanding of our customers’ evolving needs. From material selection to final inspection,each step in our process is guided by a promise to deliver reliability, safety, and long-term value.',
    'Clients across industries trust us not only for what we make—but for how we make it: with integrity, innovation, and an uncompromising focus on quality.',
  ],
} as const;

/** Counter values read from the live Elementor counter widgets. */
export const HOME_STATS = [
  { value: 1200, suffix: '+', label: 'Tonnes Annual Manufacturing Capacity' },
  { value: 98, suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 30, suffix: '+', label: 'OEM & Tier 1 Customers Served' },
  { value: 5, suffix: '+', label: 'Countries We Export To' },
  { value: 100, suffix: '%', label: 'Custom-Built Solutions' },
  { value: 50, suffix: '%', label: 'Current Capacity utilization' },
] as const;

export const HOME_CERTIFICATIONS = {
  items: [
    { title: 'ISO 9001:2015', subtitle: 'QMS Certification' },
    { title: 'IATF', subtitle: '16949 Certified' },
  ],
  sinceLabel: 'SINCE',
  sinceValue: '2009',
  /**
   * The existing site points this slot at car-showroom.webp, which has been
   * deleted from the origin media library and 404s there too. Substituted
   * with another image already in AJ Fibertek's own library so the section
   * is not broken. No text content is affected.
   */
  image: { src: '/media/2025/05/industrial-background-68344821a0cf5.webp', alt: '' },
} as const;

export const HOME_ABOUT = {
  eyebrow: 'About us',
  title: 'Setting New Standards in Insulation Technology',
  paragraphs: [
    'AJ Fibertek India Pvt Ltd, part of the Raval Group and based in Pune, India, is redefining insulation technology with cutting-edge thermal and acoustic solutions. Built with E-Glass, ECR, and Silica fibers, our products are engineered for extreme performance in demanding automotive and industrial environments.',
    'We go beyond insulation — delivering customised, durable, and compliant solutions that optimize energy efficiency, boost thermal control, and prolong component life. Through continuous innovation and strict quality adherence, AJ Fibertek is shaping the future of global insulation standards.',
  ],
  listTitle: 'What Sets Us Apart:',
  list: [
    'Expertise in high-temperature fiber insulation',
    'Custom solutions tailored to industry needs',
    'Uncompromising quality and global compliance standards',
  ],
  cta: { label: 'READ MORE', href: '/about-us/' },
} as const;

export const HOME_INDUSTRIES = {
  eyebrow: 'Industries We Serve',
  title: 'Comprehensive Insulation Solutions Across Key Industries',
  groups: [
    {
      title: 'Automotive (Commercial & Passenger Vehicles)',
      items: [
        'Exhaust System Components (DOC, DPF, SCR): Heat-resistant insulation for emissions control and thermal management',
        'Mufflers & Silencers: Effective noise reduction for a quieter driving experience',
        'Underbody Heat Shields: Protection against high exhaust temperatures for component safety',
        'EV Battery & Components: Thermal insulation to improve battery safety, lifespan, and performance in electric vehicles',
      ],
    },
    {
      title: 'Non-Automotive (Power, Agriculture, Construction & Infrastructure)',
      items: [
        'Exhaust System Components (DOC, DPF, SCR): Heat-resistant insulation for emissions control and thermal management',
        'Mufflers & Silencers: Effective noise reduction for a quieter driving experience',
        'Underbody Heat Shields: Protection against high exhaust temperatures for component safety',
        'EV Battery & Components: Thermal insulation to improve battery safety, lifespan, and performance in electric vehicles',
      ],
    },
  ],
} as const;

export const HOME_PRODUCTS = {
  eyebrow: 'Explore our products',
  title: 'Advanced Glass & Silica Fiber Insulation Technologies',
  intro:
    'These are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption.',
  cards: [
    {
      name: 'Thermal & Acoustic Insulation',
      description:
        'Our advanced glass and silica fiber insulation products, including ECR glass mats and HAMAT® variants, provide superior heat resistance and sound absorption for vehicles, generators, and heavy machinery. Trusted by OEMs for exhaust systems, battery thermal safety, and underbody protection.',
      image: '/media/2025/06/Thermal-Acoustic-Insulation.png',
      href: '/thermal-acoustic-insulation/',
      cta: 'Know More',
    },
    {
      name: 'Precision Sintered Tooling',
      description:
        'We manufacture high-durability tooling components like core rods, forming dies, and inner/outer punches for sintered part production. Our tools are built with precision and strength to meet the rigorous demands of metal powder-based manufacturing processes.',
      image: '/media/2025/06/sintertooling.png',
      href: '/sinteredtooling/',
      cta: 'Know More',
    },
    {
      name: 'Medical Implant Components',
      description:
        'From trauma plates and screws to pediatric and arthroscopy implants, our medical-grade components are crafted with exacting standards to ensure safety, biocompatibility, and performance in surgical settings.',
      image: '/media/2025/06/DSC_480311.png',
      href: '/medical-implant/',
      cta: 'Know More',
    },
  ],
} as const;

export const HOME_MISSION = {
  title: 'Our Mission',
  body: 'To engineer reliable, high-performance solutions that meet the evolving needs of global industries. We are driven by a commitment to quality, innovation, and long-term partnerships—empowering our clients with excellence in every product we deliver.',
} as const;

export const HOME_CLIENTS_TITLE = 'Satisfied Product users';

/** Logo strip on the home page, in the order the live site renders them. */
export const HOME_CLIENT_LOGOS = [
  { src: '/media/2025/06/Ashok-Leyland.png', alt: 'Ashok Leyland' },
  { src: '/media/2025/06/Daimler.png', alt: 'Daimler' },
  { src: '/media/2025/06/DBW.png', alt: 'DBW' },
  { src: '/media/2025/06/Force-motors.png', alt: 'Force Motors' },
  { src: '/media/2025/06/kirlosker-oil.png', alt: 'Kirloskar Oil' },
  { src: '/media/2026/04/jcb-e1775474602606.png', alt: 'JCB' },
  { src: '/media/2025/06/Mahindra.png', alt: 'Mahindra' },
  { src: '/media/2025/06/Sharda.png', alt: 'Sharda' },
  { src: '/media/2025/06/Tennco.png', alt: 'Tenneco' },
  { src: '/media/2025/09/volvo-Eicher.png', alt: 'Volvo Eicher' },
  { src: '/media/2025/09/victara-auto-new.png', alt: 'Victora Auto' },
  { src: '/media/2025/09/tata-new.png', alt: 'Tata' },
  { src: '/media/2025/09/john-new.png', alt: 'John Deere' },
  { src: '/media/2025/09/hyundai-new.png', alt: 'Hyundai' },
  { src: '/media/2026/04/7ozMGtvMg8vZ1743425593440-e1775473863861.png', alt: 'Client logo' },
] as const;

export const HOME_CTA = {
  title: 'Reach Out to Us for Your Manufacturing Needs Today!',
  body: 'Our experience team is ready to assist you with your custom insulation, tooling or implant needs. Contact us now!',
  cta: { label: 'Contact Us', href: '/contact-us/' },
} as const;

export const HOME_PROCESS = {
  eyebrow: 'How it Work',
  title: 'Our Product Manufacturing Process – 5 Key Steps',
  intro:
    'From raw material to ready-to-ship, our streamlined production process ensures quality and consistency at every stage:',
  steps: [
    {
      title: '01. Raw Material Receipt',
      body: 'We begin by sourcing and inspecting high-quality fibers for needling.',
    },
    {
      title: '02. Needling',
      body: 'Fibers are bonded through mechanical needling to form durable, high-performance mats.',
    },
    {
      title: '03. Cutting',
      body: 'Mats are precisely cut to the required shape and size for each application.',
    },
    {
      title: '04. Final Inspection',
      body: 'Each product undergoes a thorough quality check to meet strict industry standards.',
    },
    { title: '05. Packing & Shipping', body: 'The Complete Packaging Process Overview' },
  ],
  image: {
    src: '/media/2025/05/aj-fibertek-ppt-2025-page-0014-6836fc2cceb64-scaled-e1748434246212.webp',
    alt: '',
    width: 2560,
    height: 602,
  },
} as const;

export const HOME_SUPPORT = { title: '24/7', subtitle: 'Customer Support' } as const;

/* ------------------------------------------------------------------ */
/* About Us                                                            */
/* ------------------------------------------------------------------ */

export const ABOUT_PAGE = {
  h1: 'About Us',
  breadcrumbLabel: 'About us',
  sinceLabel: 'SINCE',
  sinceValue: '2009',
  video: '/media/2025/06/Untitled-design-1.mp4',
  intro: {
    title: 'Driving Excellence in Insulation Technology',
    paragraphs: [
      'AJ Fibertek India is a multi-disciplinary manufacturing company delivering engineered solutions across thermal and acoustic insulation, sintered tooling, and medical implants. With a strong foundation in material science, precision manufacturing, and customer-focused innovation, we support high-performance applications in the automotive, industrial, power generation, and healthcare sectors.',
      'Our journey began with the development of high-quality glass wool insulation, designed to meet the rigorous demands of modern exhaust systems. Over time, we expanded our capabilities,investing in advanced needle mat production, die-cutting technologies, and fiber texturizing—culminating in the creation of our flagship HAMAT® insulation range, trusted by OEMs across BS IV to BS VII platforms.',
      'As we grew, so did our vision. We established a dedicated sintered tooling division,manufacturing high-durability components such as core rods, inner and outer punches, and forming dies—engineered to ensure accuracy and longevity in metal powder-based production.',
      'Building on our expertise in precision manufacturing, we further diversified into medical-grade components, offering a wide range of implants including trauma plates, spine and hip fixation systems, and arthroscopy solutions—produced with strict adherence to quality and safety standards.',
      'Across every product line, our approach is unified by a simple promise: to deliver products that perform, processes that scale, and partnerships that last. Backed by ISO 9001:2015 and IATF-certified operations, AJ Fibertek India continues to grow as a trusted name in advanced manufacturing—at home and on the global stage',
    ],
  },
  clientsTitle: 'Satisfied Clients',
  clientLogos: [
    { src: '/media/2025/06/Ashok-Leyland.png', alt: 'Ashok Leyland' },
    { src: '/media/2025/06/Daimler.png', alt: 'Daimler' },
    { src: '/media/2025/06/DBW.png', alt: 'DBW' },
    { src: '/media/2025/06/Faurecia.png', alt: 'Faurecia' },
    { src: '/media/2025/06/Force-motors.png', alt: 'Force Motors' },
    { src: '/media/2025/06/kirlosker-oil.png', alt: 'Kirloskar Oil' },
    { src: '/media/2025/06/L-L-products.png', alt: 'L&L Products' },
    { src: '/media/2025/06/Mahindra.png', alt: 'Mahindra' },
    { src: '/media/2025/06/Sharda.png', alt: 'Sharda' },
    { src: '/media/2025/06/Tennco.png', alt: 'Tenneco' },
    { src: '/media/2025/06/FIAT.png', alt: 'FIAT' },
    { src: '/media/2025/06/Tata.png', alt: 'Tata' },
    { src: '/media/2025/06/Johndeere.png', alt: 'John Deere' },
    { src: '/media/2025/06/Hyundai.png', alt: 'Hyundai' },
    { src: '/media/2025/06/Volvo-Eicher.png', alt: 'Volvo Eicher' },
    { src: '/media/2025/06/Victora.png', alt: 'Victora' },
  ],
  commitmentTitle: 'Our Commitment to Excellence',
  mission: {
    title: 'Our Mission',
    body: 'At AJ Fibertek, our mission is to lead the global insulation industry by delivering high-performance, sustainable, and technologically advanced thermal and acoustic solutions. We are committed to innovation, quality, and customer satisfaction.',
  },
  vision: {
    title: 'Our Vision',
    body: 'Our vision is to be recognized globally as a world-class innovator in insulation technology. We aim to shape the future through precision engineering, responsible environmental practices, and long-term, client-centric partnerships that drive performance and reliability.',
  },
  pillarsTitle: 'Our Foundational Pillars',
  pillars: [
    {
      title: '1. Uncompromising Quality',
      body: 'Quality is the backbone of everything we do—from raw materials to final inspection. Our ISO and IATF-certified systems ensure that every product we deliver meets the highest standards of safety, performance, and reliability.',
    },
    {
      title: '2. Innovation with Purpose',
      body: 'We continuously invest in R&D, process improvement, and new technologies to stay ahead of industry needs. Innovation at AJ Fibertek isn’t just about advancement—it’s about creating solutions that are smarter, stronger, and future-ready.',
    },
    {
      title: '3. People First',
      body: 'Our people are our greatest strength. We foster a culture of integrity, collaboration, and continuous learning—empowering every team member to contribute, grow, and lead with purpose. We believe that strong teams build stronger businesses.',
    },
    {
      title: '4. Partnership-Driven Growth',
      body: 'We succeed when our clients do. By building long-term, transparent partnerships and delivering scalable, responsive solutions, we create mutual value that drives lasting impact—across industries and across borders.',
    },
  ],
  timelineTitle: 'A Journey of Precision, Quality & Growth',
  timeline: [
    {
      year: '2009',
      label: 'Introduced',
      title: 'The Foundation',
      items: ['Establishment and development of Texturized Glass wool bag'],
    },
    {
      year: '2012',
      label: '',
      title: 'Product Range Expansion',
      items: ['Development of different Glass wool bag & insulations'],
    },
    {
      year: '2017',
      label: '',
      title: 'Commitment to Quality',
      items: ['ISO 9001:2015 QMS Certification'],
    },
    {
      year: '2019',
      label: '',
      title: 'Needle Line Installation & HAMAT Launch',
      items: ['Installed Needle Line and Launched new brand of products – HAMAT'],
    },
    {
      year: '2021',
      label: '',
      title: 'HAMAT Brand Growth',
      items: ['Installed Needle Line and Launched new brand of products – HAMAT'],
    },
    {
      year: '2025',
      label: '',
      title: 'Entering Advanced Manufacturing Sectors',
      items: ['Medical Implant Component Manufacturing', 'Sintered Tooling Manufacturing Facility'],
    },
  ],
  awardsTitle: 'Awards & Recognitions',
  awardsImage: { src: '/media/2025/05/Picture1.jpg', alt: '', width: 510, height: 718 },
} as const;

/* ------------------------------------------------------------------ */
/* Thermal & Acoustic Insulation                                       */
/* ------------------------------------------------------------------ */

export type SpecRow = { label: string; value: string };

export const INSULATION_PAGE = {
  h1: 'Thermal & Acoustic Insulation',
  breadcrumbLabel: 'Thermal & Acoustic Insulation',
  intro: {
    title: 'Advanced Thermal & Acoustic Protection',
    body: 'AJ Fibertek India’s insulation division offers high-performance solutions built for extreme heat and noise environments. Our HAMAT® range—made from ECR glass and high-silica fibers—is trusted in automotive exhaust systems, industrial equipment, and power applications. Lightweight, non-combustible, and customizable, our insulation products meet stringent emission and performance standards while improving efficiency and durability across critical systems.',
  },
  specHeading: 'Product Specification',
  specTableHeading: 'Technical Characteristics',
  products: [
    {
      href: '/hamat-std/',
      wordmark: { src: '/media/2025/06/HAMAT-STD.png', alt: 'HAMAT STD', width: 800, height: 194 },
      image: { src: '/media/2025/06/1stimage.png', alt: '', width: 249, height: 166 },
      description:
        'ECR-Glass Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption.',
      specs: [
        { label: 'Material', value: 'E-Glass' },
        { label: 'Transformation Temp', value: '640°C' },
        { label: 'Filament Diameter', value: '9-13 um' },
        { label: 'Ignition Loss', value: '≤ 2.0%' },
        { label: 'Volume Shrinkage', value: '0%' },
        { label: 'Density (Kg/m3)', value: '120 ~ 160' },
        { label: 'Thickness (mm)', value: '3 ~ 20' },
        { label: 'Combustibility', value: 'Non-Combustible' },
        { label: 'Binder', value: 'Binder Free' },
      ],
    },
    {
      href: '/hamat-adv/',
      wordmark: { src: '/media/2025/06/HAMAT-ADV.png', alt: 'HAMAT ADV', width: 800, height: 194 },
      image: { src: '/media/2025/05/2.png', alt: '', width: 249, height: 166 },
      description:
        'ECR-Glass Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption.',
      specs: [
        { label: 'Material', value: 'ECR-Glass' },
        { label: 'Transformation Temp', value: '761°C' },
        { label: 'Filament Diameter', value: '13-19 um' },
        { label: 'Ignition Loss', value: '≤ 2.0%' },
        { label: 'Volume Shrinkage', value: '≤ 1 %' },
        { label: 'Density (Kg/m3)', value: '120 ~ 160' },
        { label: 'Thickness (mm)', value: '3 ~ 20' },
        { label: 'Combustibility', value: 'Non-Combustible' },
        { label: 'Binder', value: 'Binder Free' },
      ],
    },
    {
      href: '/hamat-super/',
      wordmark: {
        src: '/media/2025/06/HAMAT-SUPER.png',
        alt: 'HAMAT SUPER',
        width: 800,
        height: 196,
      },
      image: { src: '/media/2025/05/2.png', alt: '', width: 249, height: 166 },
      description:
        'High Silica Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption.',
      specs: [
        { label: 'Material', value: 'Silica Fiber' },
        { label: 'Transformation Temp', value: '850°C' },
        { label: 'Filament Diameter', value: '7-16 um' },
        { label: 'Ignition Loss', value: '≤ 9.0 %' },
        { label: 'Volume Shrinkage', value: '≤ 8 %' },
        { label: 'Density (Kg/m3)', value: '120 ~ 160' },
        { label: 'Thickness (mm)', value: '3 ~ 20' },
        { label: 'Combustibility', value: 'Non-Combustible' },
        { label: 'Binder', value: 'Binder Free' },
      ],
    },
    {
      href: '/hamat-ultra/',
      wordmark: {
        src: '/media/2025/06/HAMAT-ULTRA.png',
        alt: 'HAMAT ULTRA',
        width: 800,
        height: 196,
      },
      image: { src: '/media/2025/05/1.png', alt: '', width: 249, height: 166 },
      description:
        'Silica Needle Mats are 100% inorganic fiber, non-combustibility with high porosity, excellent sound absorption. Special features with high temperature duration, low heat shrinkage and heat loss. As well as low thermal conductivity, excellent thermal insulation and good tensile strength and resistance for wind velocity.',
      specs: [
        { label: 'Material', value: 'High Silica Fiber' },
        { label: 'Transformation Temp', value: '1050°C' },
        { label: 'Filament Diameter', value: '> 6 um' },
        { label: 'Ignition Loss', value: '≤ 9%' },
        { label: 'Volume Shrinkage', value: 'Max 7 %' },
        { label: 'Density (Kg/m3)', value: '120 ~ 160' },
        { label: 'Thickness (mm)', value: '3 ~ 20' },
        { label: 'Combustibility', value: 'Non-Combustible' },
        { label: 'Binder', value: 'Binder Free' },
      ],
    },
  ],
  formats: [
    { title: 'Die Cut by Needle mat', image: '/media/2025/07/Die-Cut-by-Needle-mat.png' },
    { title: 'Preform Roving', image: '/media/2025/07/Preform-Roving.png' },
    { title: 'Preform by Needle Mat', image: '/media/2025/07/Preform-by-Needle-Mat.png' },
    { title: 'Tubing by Needle Mat', image: '/media/2025/07/Tubing-by-Needle-Mat.png' },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* HAMAT product detail pages                                          */
/* ------------------------------------------------------------------ */

export type HamatProduct = {
  slug: string;
  h1: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  featuresHeading: string;
  features: SpecRow[];
  specHeading: string;
  specTableHeading: string;
  specs: SpecRow[];
};

export const HAMAT_PRODUCTS: HamatProduct[] = [
  {
    slug: 'hamat-std',
    h1: 'HAMAT STD',
    breadcrumbLabel: 'HAMAT STD',
    title: 'HAMAT STD',
    description:
      'ECR-Glass Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption.',
    image: { src: '/media/2025/05/1.png', alt: 'HAMAT STD', width: 249, height: 166 },
    featuresHeading: 'Technical Features',
    features: [
      { label: 'Thickness Range', value: '3 – 20 MM' },
      { label: 'Transformational Temp', value: '640°C' },
      { label: 'Filament Diameter', value: '13 – 19 um' },
    ],
    specHeading: 'HAMAT Product Specification',
    specTableHeading: 'Technical Characteristics',
    specs: [
      { label: 'Material', value: 'E-Glass' },
      { label: 'Transformation Temp', value: '640°C' },
      { label: 'Filament Diameter', value: '9-13 um' },
      { label: 'Ignition Loss', value: '≤ 2.0%' },
      { label: 'Volume Shrinkage', value: '0%' },
      { label: 'Density (Kg/m3)', value: '120 ~ 160' },
      { label: 'Thickness (mm)', value: '3 ~ 20' },
      { label: 'Combustibility', value: 'Non-Combustible' },
      { label: 'Binder', value: 'Binder Free' },
    ],
  },
  {
    slug: 'hamat-adv',
    h1: 'HAMAT ADV',
    breadcrumbLabel: 'HAMAT ADV',
    title: 'HAMAT ADV',
    description:
      'ECR-Glass Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption.',
    image: { src: '/media/2025/05/2.png', alt: 'HAMAT ADV', width: 249, height: 166 },
    featuresHeading: 'Technical Features',
    features: [
      { label: 'Thickness Range', value: '3 – 20 MM' },
      { label: 'Transformational Temp', value: '761°C' },
      { label: 'Filament Diameter', value: '13 – 19 um' },
    ],
    specHeading: 'HAMAT Product Specification',
    specTableHeading: 'Technical Characteristics',
    specs: [
      { label: 'Material', value: 'ECR-Glass' },
      { label: 'Transformation Temp', value: '761°C' },
      { label: 'Filament Diameter', value: '13-19 um' },
      { label: 'Ignition Loss', value: '≤ 2.0%' },
      { label: 'Volume Shrinkage', value: '≤ 1 %' },
      { label: 'Density (Kg/m3)', value: '120 ~ 160' },
      { label: 'Thickness (mm)', value: '3 ~ 20' },
      { label: 'Combustibility', value: 'Non-Combustible' },
      { label: 'Binder', value: 'Binder Free' },
    ],
  },
  {
    slug: 'hamat-super',
    h1: 'HAMAT Super',
    breadcrumbLabel: 'HAMAT Super',
    title: 'HAMAT Super',
    description:
      'High Silica Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption.',
    image: { src: '/media/2025/05/3.png', alt: 'HAMAT Super', width: 249, height: 166 },
    featuresHeading: 'Technical Features',
    features: [
      { label: 'Thickness Range', value: '3 – 20 MM' },
      { label: 'Transformational Temp', value: '850°C' },
      { label: 'Filament Diameter', value: '7 – 16 um' },
    ],
    specHeading: 'HAMAT Product Specification',
    specTableHeading: 'Technical Characteristics',
    specs: [
      { label: 'Material', value: 'Silica Fiber' },
      { label: 'Transformation Temp', value: '850°C' },
      { label: 'Filament Diameter', value: '7-16 um' },
      { label: 'Ignition Loss', value: '≤ 9.0 %' },
      { label: 'Volume Shrinkage', value: '≤ 8 %' },
      { label: 'Density (Kg/m3)', value: '120 ~ 160' },
      { label: 'Thickness (mm)', value: '3 ~ 20' },
      { label: 'Combustibility', value: 'Non-Combustible' },
      { label: 'Binder', value: 'Binder Free' },
    ],
  },
  {
    slug: 'hamat-ultra',
    h1: 'HAMAT ULTRA',
    breadcrumbLabel: 'HAMAT ULTRA',
    title: 'HAMAT ULTRA',
    description:
      'High Silica Needle Mats are made from 100 % inorganic fiber and are non-combustible with high porosity and excellent sound absorption.',
    image: { src: '/media/2025/05/5.png', alt: 'HAMAT ULTRA', width: 249, height: 166 },
    featuresHeading: 'Technical Features',
    features: [
      { label: 'Thickness Range', value: '3 – 20 MM' },
      { label: 'Transformational Temp', value: '1050°C' },
      { label: 'Filament Diameter', value: '> 6 um' },
    ],
    specHeading: 'HAMAT Product Specification',
    specTableHeading: 'Technical Characteristics',
    specs: [
      { label: 'Material', value: 'High Silica Fiber' },
      { label: 'Transformation Temp', value: '1050°C' },
      { label: 'Filament Diameter', value: '> 6 um' },
      { label: 'Ignition Loss', value: '≤ 9%' },
      { label: 'Volume Shrinkage', value: 'Max 7 %' },
      { label: 'Density (Kg/m3)', value: '120 ~ 160' },
      { label: 'Thickness (mm)', value: '3 ~ 20' },
      { label: 'Combustibility', value: 'Non-Combustible' },
      { label: 'Binder', value: 'Binder Free' },
    ],
  },
];

/**
 * Sidebar + tail sections that appear on each HAMAT page of the existing
 * site. This is leftover demo content from the original WordPress theme
 * (placeholder phone/email, lorem ipsum, car listings). It is reproduced
 * verbatim because the content must not be changed.
 */
export const HAMAT_SIDEBAR = {
  moreInfoTitle: 'More Information',
  moreInfo: ['234 567 8912', 'Info@domain.com', '09:00am - 06:00pm'],
  servicesTitle: 'Our Services',
  services: [
    'One-Way Rentals',
    'Airport Transfers',
    'Corporate Rentals',
    'Chauffeur Service',
    'Rent with Driver',
    'Mountain Travel',
    'Long-Term Leases',
    'Loyalty Programs',
  ],
  followTitle: 'Follow Us',
  social: ['Facebook-f', 'X-twitter', 'Linkedin-in', 'Instagram'],
} as const;

export const HAMAT_ADDITIONAL = {
  title: 'Additional Information',
  body: 'Morbi feugiat laoreet mauris in maximus. Vestibulum quis molestie sem. Fusce iaculis, dolor id posuere blandit, ipsum mauris accumsan urna, quis maximus nibh mi ac mauris. Duis fermentum varius eros id rhoncus. Aliquam vestibulum nibh non euismod ornare. Curabitur vel eros vitae turpis luctus dapibus id ut mauris. Suspendisse potenti. Donec quis erat vitae dolor gravida sollicitudin id id arcu. Fusce ac ipsum orci. Nullam et enim fermentum, dapibus metus et, facilisis massa. Nullam elit erat, imperdiet a risus vel, vestibulum mattis lacus. Nam vulputate purus non tortor malesuada, eu venenatis urna vulputate.',
} as const;

export type CarCard = {
  /** null where the origin media file has been deleted upstream (404s there too). */
  image: string | null;
  price: string | null;
  per: string | null;
  cta: string;
  name: string | null;
  meta: string[];
};

export const HAMAT_OTHER_CARS = {
  eyebrow: 'Our collections',
  title: 'Explore Our Other Cars',
  cards: [
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: '911 Carrera GTS',
      meta: ['2024', 'BMW', '2 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: '911 Carrera GTS',
      meta: ['2024', 'BMW', '2 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Car',
      meta: ['2024', 'Sedan', '2 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
  ] satisfies CarCard[],
} as const;

/* ------------------------------------------------------------------ */
/* Medical Implant Components                                          */
/* ------------------------------------------------------------------ */

export const MEDICAL_PAGE = {
  h1: 'Medical implant',
  breadcrumbLabel: 'Medical implant',
  intro: {
    title: 'Engineered for Care, Built for Precision',
    body: 'We manufacture orthopedic implants that support trauma care, spinal procedures, and pediatric surgeries. Our portfolio includes plates, screws, fixation systems, and minimally invasive implants—all crafted under strict quality standards.With a focus on safety, precision, and patient outcomes, AJ Fibertek is a trusted partner for healthcare providers seeking dependable, high-quality implant solutions.',
  },
  /**
   * Gallery of real implant photographs. The captions below are leftover
   * car-rental demo values from the original theme and are reproduced
   * verbatim, exactly as they render on the existing site.
   */
  gallery: [
    {
      image: '/media/elementor/thumbs/Picture24-r6hnbcb6ncj2wpigth24r466xvhjavcqb6jib4xkf4.png',
      alt: 'Picture24',
      price: null,
      per: null,
      cta: 'Book',
      name: null,
      meta: ['2024', 'BMW', '2 Person', 'Manual'],
    },
    {
      image: '/media/elementor/thumbs/Picture28-r6hnb9ho2uf7xvmk9xu91mvt5pvfns1jasl1vb1qxs.png',
      alt: 'Picture28',
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: null,
      meta: ['2024', 'BMW', '2 Person', 'Manual'],
    },
    {
      image: '/media/elementor/thumbs/Picture29-r6hnb9ho2uf7xvmk9xu91mvt5pvfns1jasl1vb1qxs.png',
      alt: 'Picture29',
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: null,
      meta: ['2024', 'Sedan', '2 Person', 'Manual'],
    },
    {
      image: '/media/elementor/thumbs/Picture30-r6hnb8jtw0dxm9nxfffmh54ckc02g2xsynxke13540.png',
      alt: 'Picture30',
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
    {
      image: '/media/elementor/thumbs/Picture31-r6hnb7lzp6cnanpakx0zwncvyy4p8du2mja2wr4ja8.png',
      alt: 'Picture31',
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
    {
      image: '/media/elementor/thumbs/Picture32-r6hnb6o5icbcz1qnqemdc5lfdk9c0oqcaemlfh5xgg.png',
      alt: 'Picture32',
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
    {
      image: '/media/elementor/thumbs/Picture33-r6hnb6o5icbcz1qnqemdc5lfdk9c0oqcaemlfh5xgg.png',
      alt: 'Picture33',
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
    {
      image: '/media/elementor/thumbs/Picture26-r6hnbbdcgihsl3jtyyni6meqchm6368zz1w0tuyylc.png',
      alt: 'Picture26',
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
  ],
  /** Implant categories. The live site renders these with placeholder images. */
  categories: [
    'Trauma Plates & Screws',
    'Spine',
    'Hip Fixation',
    'Arthroscopy',
    'Mini Fragment Implants',
    'Knee Plates',
    'Cable Plates',
    'Pediatric Implants',
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Precision Sintered Tooling                                          */
/* ------------------------------------------------------------------ */

export const TOOLING_PAGE = {
  h1: 'Sintered Tooling',
  breadcrumbLabel: 'Sintered Tooling',
  intro: {
    title: 'Precision Tools for High-Performance Manufacturing',
    body: 'Our sintered tooling division supplies core components like punches, rods, and dies for powder metallurgy processes. Built to withstand high pressure and maintain exact tolerances, our tools deliver durability, consistency, and performance in mass production environments.We partner closely with clients to develop custom tooling solutions that integrate seamlessly with their systems—ensuring reliability at every step of the manufacturing process.',
  },
  items: [
    { title: 'Bottom inner punch', image: '/media/2025/09/1.png' },
    { title: 'Top inner punch', image: '/media/2025/09/5.png' },
    { title: 'Bottom outer punch', image: '/media/2025/09/2.png' },
    { title: 'Top outer punch', image: '/media/2025/09/7.png' },
    { title: 'Core rod', image: '/media/2025/09/3.png' },
    { title: 'Side core rod', image: '/media/2025/09/6.png' },
    { title: 'Forming die', image: '/media/2025/09/4.png' },
    // Reproduced verbatim: the live site shows an eighth tile labelled
    // "Arthroscopy" with a placeholder image.
    { title: 'Arthroscopy', image: null },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Contact Us                                                          */
/* ------------------------------------------------------------------ */

export const CONTACT_PAGE = {
  h1: 'Contact Us',
  breadcrumbLabel: 'Contact us',
  title: 'Visit Our Office',
  blocks: [
    {
      title: 'Office Location',
      value:
        'AJ Fibertek India Pvt. Ltd. Gat No 44, Maval , Navalakh Umbre, Maval 410507 , Maharashtra India',
      href: null,
    },
    { title: 'Phone Number', value: '+91-90229 26948', href: 'tel:+919022926948' },
    {
      title: 'Email Address',
      value: 'info@ajfibertek.co.in',
      href: 'mailto:info@ajfibertek.co.in',
    },
    { title: 'Open Time', value: 'Monday to Friday - 9:00 am to 5:00 pm', href: null },
  ],
  socialTitle: 'Social media',
  formTitle: 'Get in Touch',
  form: {
    fields: [
      { name: 'name', label: 'Your name', placeholder: 'Your name', type: 'text', required: true },
      {
        name: 'email',
        label: 'Your email',
        placeholder: 'Your email',
        type: 'email',
        required: true,
      },
      {
        name: 'phone',
        label: 'Phone',
        placeholder: '+91 456 789 1234',
        type: 'tel',
        required: false,
      },
      { name: 'subject', label: 'Subject', placeholder: 'Subject', type: 'text', required: false },
      {
        name: 'message',
        label: 'Message',
        placeholder: 'Message',
        type: 'textarea',
        required: true,
      },
    ],
    submitLabel: 'SUBMIT',
  },
} as const;

/* ------------------------------------------------------------------ */
/* Products (legacy demo page, reproduced verbatim)                    */
/* ------------------------------------------------------------------ */

export const PRODUCTS_PAGE = {
  h1: 'Our Cars',
  breadcrumbLabel: 'Our cars',
  listTitle: 'Explore Our Top-Rated Vehicles',
  cars: [
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: '911 Carrera GTS',
      meta: ['2024', 'BMW', '2 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: '911 Carrera GTS',
      meta: ['2024', 'BMW', '2 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Car',
      meta: ['2024', 'Sedan', '2 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
    {
      image: null,
      price: '$50',
      per: '/day',
      cta: 'Book',
      name: 'Sedan Family Car',
      meta: ['2024', 'Sedan', '4 Person', 'Manual'],
    },
  ] satisfies CarCard[],
  servicesEyebrow: 'What we offer',
  servicesTitle: 'Explore Our Services',
  services: [
    {
      title: 'One-Way Rentals',
      body: 'Experience hassle-free rentals, premium services, and a wide selection of vehicles.',
    },
    {
      title: 'Airport Transfers',
      body: 'Experience hassle-free rentals, premium services, and a wide selection of vehicles.',
    },
    {
      title: 'Corporate Rentals',
      body: 'Experience hassle-free rentals, premium services, and a wide selection of vehicles.',
    },
    {
      title: 'Chauffeur Service',
      body: 'Experience hassle-free rentals, premium services, and a wide selection of vehicles.',
    },
  ],
  servicesCta: 'ALL SERVICES',
  whyEyebrow: 'Why choose us',
  whyTitle: 'The Advantage of Renting with Us',
  whyBody:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  whyLeft: [
    { title: 'Diverse Fleet', body: 'A wide range of cars for all needs.' },
    { title: 'Affordable Rates', body: 'Competitive pricing with no hidden fees.' },
    { title: 'Flexible Rentals', body: 'Daily, weekly, and long-term options available.' },
  ],
  whyImage: null,
  whyRight: [
    { title: '24/7 Support', body: 'Always available to assist you anytime.' },
    { title: 'Safety First', body: 'All cars are inspected for your safety.' },
    { title: 'Loyalty Rewards', body: 'Earn exclusive discounts and special offers.' },
  ],
  ctaTitle: 'Interested In Renting?',
  ctaBody:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  ctaPrimary: 'BOOK NOW',
  ctaSecondary: 'CONTACT US',
} as const;
