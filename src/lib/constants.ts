export const BRAND = {
  name: 'the Banquet by A.B.Corp',
  nameShort: 'the Banquet',
  tagline: "Where Kolkata's traditions meet uncompromising luxury.",
  established: 2015,
  phone: '9831824727',
  phoneDisplay: '+91 98318 24727',
  address: '77C Rashbehari Avenue, Kolkata 700026',
  addressFull: '77C Rashbehari Avenue, Kolkata 700026, West Bengal, India',
  contact: 'Mahesh Bhardwaj',
  googleRating: 4.5,
  googleReviews: 679,
  weddings: '100+',
  events: '200+',
} as const

export const WHATSAPP_NUMBER = '919831824727'

export function getWhatsAppLink(prefill = true): string {
  const message = prefill
    ? encodeURIComponent(
        'Hi Mahesh, I am interested in booking the Banquet for an event on [Date]. We are expecting approximately [Number] guests. Please share the availability and package details.'
      )
    : ''
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${message}` : ''}`
}

export const VENUES = [
  {
    id: 'ground-floor',
    slug: 'ground-floor',
    name: 'Ground Floor',
    subtitle: 'Intimate Luxury',
    description:
      'When you book the Ground Floor, the entire space is exclusively yours. From the gold leaf panels and warm amber LED ceiling to the private AC suites and dedicated hospitality staff — every facility on the Ground Floor is available solely for your celebration.',
    capacity: { min: 150, max: 200 },
    pricing: {
      wedding: { amount: '₹1,00,000', label: 'Weddings' },
      celebration: { amount: '₹60,000', label: 'Celebrations' },
    },
    heroImage: '/images/venues/0-entrance.png',
    images: [
      '/images/venues/0-entrance.png',
      '/images/venues/0-hall.png',
      '/images/venues/0-throne.png',
      '/images/venues/0-entrance-2.png',
    ],
    features: ['Entire Ground Floor — Exclusively Yours', '150–200 Guest Capacity', 'Private AC Suites', 'Dedicated Hospitality Staff'],
    accentColor: '#D4B44A',
  },
  {
    id: 'heritage-floor',
    slug: 'heritage-floor',
    name: 'The Heritage Floor',
    subtitle: 'Grand Elegance',
    description:
      'Booking the Heritage Floor gives you exclusive use of the entire First Floor. The soaring LED architecture, cascading floral corridors, crystal chandeliers, premium staging, and every First Floor facility — all reserved entirely for your event, with no sharing.',
    capacity: { min: 400, max: 500 },
    pricing: {
      wedding: { amount: '₹3,00,000', label: 'Weddings' },
      celebration: { amount: '₹1,50,000', label: 'Celebrations' },
    },
    heroImage: '/images/venues/1-hall.png',
    images: [
      '/images/venues/1-hall.png',
      '/images/venues/1-dining.png',
      '/images/venues/1-staircase.png',
      '/images/venues/1-rooftop.png',
    ],
    features: ['Entire First Floor — Exclusively Yours', '400–500 Guest Capacity', 'Cascading Floral Corridors', 'Crystal Chandeliers & Premium Staging'],
    accentColor: '#B8960C',
  },
  {
    id: 'grand-pavilion',
    slug: 'grand-pavilion',
    name: 'The Grand Pavilion',
    subtitle: 'Unrivalled Grandeur',
    description:
      'The Grand Pavilion means the entire Banquet is yours — every floor, every space, every facility. Ground Floor, First Floor, and the Rooftop Culinary Zone. The crimson floral corridors, the mandap garden, the culinary terrace, the valet, the suites — the complete estate, exclusively dedicated to one celebration.',
    capacity: { min: 600, max: 700 },
    pricing: {
      wedding: { amount: '₹3,50,000', label: 'Weddings' },
      celebration: { amount: '₹2,00,000', label: 'Celebrations' },
    },
    heroImage: '/images/venues/1-rooftop.png',
    images: [
      '/images/venues/1-rooftop.png',
      '/images/venues/1-mandap.png',
      '/images/venues/1-stage.png',
      '/images/venues/1-staircase.png',
    ],
    features: ['The Entire Banquet — Exclusively Yours', '600–700 Guest Capacity', 'All 3 Floors + Rooftop Culinary Zone', '300-Car Valet · Private Suites · Full Estate'],
    accentColor: '#9E2A2A',
  },
] as const

export const FEATURES = [
  {
    icon: 'Wind',
    title: 'Smoke-Free Experience',
    description: 'A pristine environment throughout — our entire estate is smoke-free for the comfort of every guest.',
  },
  {
    icon: 'ChefHat',
    title: 'Rooftop Culinary Zone',
    description: 'A dedicated rooftop kitchen designed for live culinary theatre and premium catering.',
  },
  {
    icon: 'Car',
    title: '300-Car Managed Valet',
    description: 'Complimentary managed valet parking for 300 vehicles — your guests arrive with ease.',
  },
  {
    icon: 'BedDouble',
    title: 'Private AC Suites',
    description: 'Exclusive private suites for the bride, groom, and families — a sanctuary within the celebration.',
  },
  {
    icon: 'Thermometer',
    title: '50-Ton Climate Control',
    description: 'Industrial-grade 50-ton AC system ensuring perfect temperature for every guest, every season.',
  },
  {
    icon: 'Zap',
    title: '100% Power Backup',
    description: 'Uninterrupted power. Your celebration never pauses — not for a single second.',
  },
  {
    icon: 'Heart',
    title: 'Human Hospitality',
    description: 'Dedicated hospitality staff personally attending to every family, including elderly guest assistance.',
  },
  {
    icon: 'Star',
    title: 'All-Inclusive Luxury',
    description: 'From décor to dining, every element is curated — nothing is left to chance.',
  },
] as const

export const CELEBRATIONS = [
  {
    id: 'weddings',
    name: 'Weddings',
    tagline: 'The beginning of forever',
    description:
      'From the first sanai notes to the final blessing, we hold every moment sacred. Our wedding expertise — built over a decade of Kolkata celebrations — ensures your day is nothing short of timeless.',
    image: '/images/venues/1-mandap.png',
    mood: 'Crimson & Gold',
  },
  {
    id: 'birthdays',
    name: 'Birthdays',
    tagline: 'Every year, extraordinary',
    description:
      'Whether a child\'s first grand celebration or a milestone decade, we transform the Banquet into a world perfectly crafted around the one being celebrated.',
    image: '/images/venues/1-stage.png',
    mood: 'Vibrant & Joyful',
  },
  {
    id: 'anniversaries',
    name: 'Anniversaries',
    tagline: 'Love deserves grandeur',
    description:
      'Decades of love deserve a setting that matches their depth. Intimate candlelit arrangements or grand gatherings — we honour your journey with equal devotion.',
    image: '/images/venues/0-throne.png',
    mood: 'Intimate & Romantic',
  },
  {
    id: 'rice-ceremony',
    name: 'Rice Ceremonies',
    tagline: 'Ancient rituals, living spaces',
    description:
      'Annaprashana, the first grain ceremony, is among the most sacred Bengali milestones. We create a space that honours tradition with warmth and grace.',
    image: '/images/venues/0-hall.png',
    mood: 'Sacred & Warm',
  },
  {
    id: 'corporate',
    name: 'Corporate Gatherings',
    tagline: 'Impress. Connect. Inspire.',
    description:
      'The Heritage Floor and Grand Pavilion transform seamlessly for corporate events — conferences, product launches, awards evenings — with infrastructure that matches your ambition.',
    image: '/images/venues/1-dining.png',
    mood: 'Sophisticated & Sleek',
  },
  {
    id: 'exhibitions',
    name: 'Exhibitions',
    tagline: 'Space for the remarkable',
    description:
      'Our expansive halls offer unparalleled display potential. From art exhibitions to trade showcases, the Banquet\'s architecture becomes your canvas.',
    image: '/images/venues/1-buffet.png',
    mood: 'Open & Inspired',
  },
  {
    id: 'conferences',
    name: 'Conferences',
    tagline: 'Where ideas take stage',
    description:
      'Full AV capability, premium staging, and professional-grade climate control make the Banquet the premier conference destination in South Kolkata.',
    image: '/images/venues/1-rooftop.png',
    mood: 'Professional & Elegant',
  },
] as const

export const GALLERY_IMAGES = [
  { src: '/images/venues/0-main-entrance.png', category: 'decor',     label: 'Crimson Floral Corridor' },
  { src: '/images/venues/0-entrance.png',      category: 'decor',     label: 'Grand Entrance' },
  { src: '/images/venues/1-rooftop.png',       category: 'decor',     label: 'Rooftop Garden — Crystal Chandeliers' },
  { src: '/images/venues/1-mandap.png',        category: 'weddings',  label: 'Gold Mandap' },
  { src: '/images/venues/0-hall.png',          category: 'decor',     label: 'Heritage Hall' },
  { src: '/images/venues/1-stage.png',         category: 'weddings',  label: 'Garden Stage — Gold Loveseat' },
  { src: '/images/venues/1-staircase.png',     category: 'decor',     label: 'Floral Staircase' },
  { src: '/images/venues/0-throne.png',        category: 'decor',     label: 'Throne Alcove' },
  { src: '/images/venues/1-dining.png',        category: 'decor',     label: 'Heritage Dining Hall' },
  { src: '/images/venues/1-hall.png',          category: 'decor',     label: 'First Floor Lounge' },
  { src: '/images/venues/1-buffet.png',        category: 'culinary',  label: 'Buffet Area' },
  { src: '/images/venues/0-entrance-2.png',    category: 'decor',     label: 'Entrance — Evening' },
] as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/signature-venues', label: 'Signature Venues' },
  { href: '/celebrations', label: 'Celebrations' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/legacy', label: 'Our Legacy' },
  { href: '/connect', label: 'Connect' },
] as const

export const HERO_SLIDES = [
  {
    image: '/images/venues/0-main-entrance.png',
    alt: 'Crimson floral corridor with crystal chandeliers and green carpet',
    caption: 'An Entrance That Takes Your Breath Away',
  },
  {
    image: '/images/venues/1-rooftop.png',
    alt: 'Rooftop garden with crimson bougainvillea canopy and crystal chandeliers',
    caption: 'Celebrations Open to the Kolkata Sky',
  },
  {
    image: '/images/venues/0-entrance.png',
    alt: 'Grand entrance with bougainvillea and lattice pillars at night',
    caption: 'An Arrival Unlike Any Other',
  },
  {
    image: '/images/venues/1-mandap.png',
    alt: 'Grand gold mandap arch with crimson velvet drapes',
    caption: 'Sacred Moments, Immaculate Settings',
  },
  {
    image: '/images/venues/1-staircase.png',
    alt: 'Staircase adorned with red bougainvillea and rattan lanterns',
    caption: 'Where Every Step Tells a Story',
  },
]
