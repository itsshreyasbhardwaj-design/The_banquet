import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Legacy',
  description:
    'The story of the Banquet by A.B.Corp — founded by Mahesh Bhardwaj in 2015, 100+ weddings, 200+ events, 4.5★ Google rating. A decade of luxury celebrations in Kolkata.',
  openGraph: {
    title: 'Our Legacy | the Banquet by A.B.Corp',
    description: 'A decade of love, Kolkata, and uncompromising celebration.',
    images: [{ url: '/images/venues/0-entrance.png', width: 1200, height: 630 }],
  },
}

export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
