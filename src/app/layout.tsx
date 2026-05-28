import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thebanquetabcorp.com'),
  title: {
    default: 'the Banquet by A.B.Corp | Luxury Banquet Hall Kolkata',
    template: '%s | the Banquet by A.B.Corp',
  },
  description:
    'the Banquet by A.B.Corp — Kolkata\'s most prestigious banquet venue at 77C Rashbehari Avenue. 600–700 guest capacity. Weddings, celebrations, corporate events. Est. 2015. 4.5★ Google Rating, 679 reviews.',
  keywords: [
    'luxury banquet Kolkata',
    'wedding venue South Kolkata',
    'premium banquet hall Kolkata',
    'birthday venue Kolkata',
    'banquet hall Rashbehari Avenue',
    'wedding venue Rashbehari',
    'A.B.Corp banquet',
  ],
  authors: [{ name: 'the Banquet by A.B.Corp' }],
  openGraph: {
    title: 'the Banquet by A.B.Corp | Luxury Banquet Hall Kolkata',
    description: "Where Kolkata's traditions meet uncompromising luxury.",
    url: 'https://thebanquetabcorp.com',
    siteName: 'the Banquet by A.B.Corp',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/venues/1-corridor.jpg',
        width: 1200,
        height: 630,
        alt: 'the Banquet by A.B.Corp — Crimson Floral Corridor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'the Banquet by A.B.Corp | Luxury Banquet Hall Kolkata',
    description: "Where Kolkata's traditions meet uncompromising luxury.",
    images: ['/images/venues/1-corridor.jpg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EventVenue',
              name: 'the Banquet by A.B.Corp',
              description: "Kolkata's most prestigious banquet hall — where traditions meet uncompromising luxury.",
              url: 'https://thebanquetabcorp.com',
              telephone: '+919831824727',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '77C Rashbehari Avenue',
                addressLocality: 'Kolkata',
                postalCode: '700026',
                addressRegion: 'West Bengal',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 22.5204,
                longitude: 88.3538,
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.5',
                reviewCount: '679',
                bestRating: '5',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
                description: 'Available on Appointment',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans bg-near-black text-ivory antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
