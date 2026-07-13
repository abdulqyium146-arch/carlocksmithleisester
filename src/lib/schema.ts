import { BUSINESS, SITE_URL, AREAS, SERVICES } from './constants';

const BUSINESS_ID = `${SITE_URL}/#business`;

export function buildBusinessSchema() {
  return {
    '@type': ['Locksmith', 'HomeAndConstructionBusiness'],
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${SITE_URL}/images/car-locksmith-leicester-og.jpg`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.png`,
      width: 300,
      height: 80,
    },
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: BUSINESS.priceRange,
    areaServed: AREAS.map((a) => ({
      '@type': 'City',
      name: a.name,
    })),
    sameAs: BUSINESS.sameAs.filter((u) => !u.startsWith('[')),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phone,
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phone,
        contactType: 'emergency',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: new Date().getFullYear() - BUSINESS.yearsInBusiness,
    slogan: 'Leicester\'s trusted auto, residential and commercial locksmith — available 24/7',
    sameAs: BUSINESS.sameAs.filter((u) => !u.startsWith('[')),
  };
}

export function buildWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    publisher: { '@id': BUSINESS_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function buildServiceSchema(opts: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}/services/${opts.slug}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: AREAS.map((a) => ({ '@type': 'City', name: a.name })),
    serviceType: opts.name,
  };
}

export function buildFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function buildHowToSchema(opts: {
  name: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@type': 'HowTo',
    name: opts.name,
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function buildPageGraph(schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
