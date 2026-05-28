import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Connect',
  description:
    'Reach the Banquet by A.B.Corp — call or WhatsApp Mahesh Bhardwaj at +91 98318 24727. 77C Rashbehari Avenue, Kolkata 700026. No forms, just a conversation.',
  openGraph: {
    title: 'Connect | the Banquet by A.B.Corp',
    description: 'We prefer a conversation over a form. Speak with us directly.',
    images: [{ url: '/images/venues/0-entrance.png', width: 1200, height: 630 }],
  },
}

export default function ConnectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
