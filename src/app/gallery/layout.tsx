import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A visual journey through the Banquet by A.B.Corp — weddings, celebrations, décor, suites, and culinary experiences at 77C Rashbehari Avenue, Kolkata.',
  openGraph: {
    title: 'Gallery | the Banquet by A.B.Corp',
    description: 'Moments of beauty, captured within the Banquet\'s spaces.',
    images: [{ url: '/images/venues/1-corridor.jpg', width: 1200, height: 630 }],
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
