import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celebrations',
  description:
    'Weddings, birthdays, anniversaries, rice ceremonies, corporate events, exhibitions and conferences. Premium celebration venue in South Kolkata.',
  openGraph: {
    title: 'Celebrations | the Banquet by A.B.Corp',
    description: 'Every milestone deserves magnificence.',
    images: [{ url: '/images/venues/1-stage.png', width: 1200, height: 630 }],
  },
}

export default function CelebrationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
