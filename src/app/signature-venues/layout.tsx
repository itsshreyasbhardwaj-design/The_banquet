import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signature Venues',
  description:
    'Ground Floor (150–200 guests), The Heritage Floor (400–500), The Grand Pavilion (600–700). Luxury banquet halls at 77C Rashbehari Avenue, Kolkata.',
  openGraph: {
    title: 'Signature Venues | the Banquet by A.B.Corp',
    description: 'Three iconic spaces. One unwavering standard of excellence.',
    images: [{ url: '/images/venues/1-hall.png', width: 1200, height: 630 }],
  },
}

export default function SignatureVenuesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
