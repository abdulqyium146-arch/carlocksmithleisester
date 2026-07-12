export const SITE_URL = 'https://carlocksmithleicester.co.uk';

export const BUSINESS = {
  name: 'Car Locksmith Leicester',
  legalName: 'Car Locksmith Leicester', // [INSERT LEGAL BUSINESS NAME IF DIFFERENT]
  phone: '+447988388514',
  phoneDisplay: '07988 388514',
  email: '[INSERT EMAIL ADDRESS]',
  address: {
    streetAddress: '[INSERT STREET ADDRESS]',
    addressLocality: 'Leicester',
    addressRegion: 'Leicestershire',
    postalCode: '[INSERT POSTCODE]',
    addressCountry: 'GB',
  },
  geo: {
    latitude: 52.6369, // Leicester approximate centre
    longitude: -1.1398,
  },
  openingHours: '24/7',
  priceRange: '££',
  yearsInBusiness: 10,
  googleBusinessProfileUrl: '[INSERT GOOGLE BUSINESS PROFILE URL]',
  sameAs: [
    '[INSERT GOOGLE BUSINESS PROFILE URL]',
    '[INSERT FACEBOOK PAGE URL]',
    '[INSERT INSTAGRAM PROFILE URL]',
    '[INSERT YELL.COM LISTING URL]',
    '[INSERT CHECKATRADE PROFILE URL]',
    '[INSERT TRUSTPILOT PROFILE URL]',
  ],
  aggregateRating: {
    ratingValue: null, // [INSERT REAL AVERAGE RATING e.g. 4.9]
    reviewCount: null, // [INSERT REAL REVIEW COUNT]
  },
} as const;

export const AREAS = [
  { name: 'Leicester', slug: 'leicester' },
  { name: 'Oadby', slug: 'oadby' },
  { name: 'Wigston', slug: 'wigston' },
  { name: 'Birstall', slug: 'birstall' },
  { name: 'Syston', slug: 'syston' },
  { name: 'Blaby', slug: 'blaby' },
  { name: 'Glenfield', slug: 'glenfield' },
  { name: 'Braunstone', slug: 'braunstone' },
  { name: 'Hinckley', slug: 'hinckley' },
  { name: 'Loughborough', slug: 'loughborough' },
  { name: 'Melton Mowbray', slug: 'melton-mowbray' },
  { name: 'Market Harborough', slug: 'market-harborough' },
  { name: 'Coalville', slug: 'coalville' },
  { name: 'Thurmaston', slug: 'thurmaston' },
  { name: 'Hamilton', slug: 'hamilton' },
  { name: 'Evington', slug: 'evington' },
  { name: 'Knighton', slug: 'knighton' },
  { name: 'Glen Parva', slug: 'glen-parva' },
] as const;

export type AreaSlug = (typeof AREAS)[number]['slug'];

export const SERVICES = [
  {
    slug: 'car-lockout',
    name: 'Emergency Car Lockout',
    shortName: 'Car Lockout',
    description: 'Locked out of your car? Our technicians arrive quickly — typically within 60 minutes — and gain entry without causing any damage to your vehicle.',
    icon: 'Car',
  },
  {
    slug: 'car-key-cutting',
    name: 'Car Key Cutting',
    shortName: 'Key Cutting',
    description: 'Precision key cutting for all makes and models, on-site where possible. Keys cut to your vehicle\'s exact code, not just a copy of a worn key.',
    icon: 'Key',
  },
  {
    slug: 'car-key-programming',
    name: 'Car Key Programming',
    shortName: 'Key Programming',
    description: 'Transponder key and remote fob programming for all major vehicle brands, including BMW, Mercedes, Audi, Toyota, and more.',
    icon: 'Cpu',
  },
  {
    slug: 'car-key-replacement',
    name: 'Car Key Replacement',
    shortName: 'Key Replacement',
    description: 'Lost your car keys? We supply and program replacement keys for all vehicle types at a fraction of main dealer cost.',
    icon: 'KeyRound',
  },
  {
    slug: 'broken-key-extraction',
    name: 'Broken Key Extraction',
    shortName: 'Key Extraction',
    description: 'Broken key stuck in the lock or ignition? We extract it safely without damaging the lock, then cut and program a new key on-site.',
    icon: 'Wrench',
  },
  {
    slug: 'motorbike-locksmith',
    name: 'Motorbike & Scooter Locksmith',
    shortName: 'Motorbike Keys',
    description: 'Specialist locksmith services for motorbikes and scooters, including Yamaha, Suzuki, Ducati, and all other major brands.',
    icon: 'Bike',
  },
  {
    slug: 'residential-locksmith',
    name: 'Residential Locksmith',
    shortName: 'Home Locksmith',
    description: 'Locked out of your home, need a lock replaced, or want to upgrade your home security? We cover all residential locksmith needs across Leicester.',
    icon: 'Home',
  },
  {
    slug: 'commercial-locksmith',
    name: 'Commercial Locksmith',
    shortName: 'Commercial',
    description: 'Lock changes, master key systems, access control, and emergency entry for businesses and commercial premises across Leicestershire.',
    icon: 'Building2',
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]['slug'];
