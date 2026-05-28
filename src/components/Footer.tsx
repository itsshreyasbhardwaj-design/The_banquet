import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, MapPin, Star } from 'lucide-react'
import { BRAND, NAV_LINKS, getWhatsAppLink } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-near-black border-t border-warm-grey/20">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span className="block font-sans text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-1">the</span>
              <span className="block font-display text-4xl text-ivory tracking-tight leading-none">Banquet</span>
              <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-gold/60 mt-1">by A.B.Corp</span>
            </div>

            <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent mb-6" />

            <p className="font-display italic text-ivory/50 text-base leading-relaxed mb-8">
              &ldquo;{BRAND.tagline}&rdquo;
            </p>

            {/* Google Rating */}
            <div className="inline-flex items-center gap-3 px-4 py-3 border border-gold/15 bg-charcoal/50">
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" />
                ))}
                <Star size={13} className="fill-gold/50 text-gold/50" />
              </div>
              <div className="w-px h-4 bg-warm-grey/40" />
              <div>
                <span className="font-display text-xl text-gold leading-none">4.5</span>
                <span className="font-sans text-[10px] text-ivory/40 ml-1 tracking-wide">/ 679 reviews</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/60 mb-6">Navigate</h3>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-ivory/50 hover:text-ivory transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/60 mb-6">Connect</h3>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-start gap-3 text-ivory/60 hover:text-ivory transition-colors duration-300 group"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-gold/60 group-hover:text-gold transition-colors" />
                  <div>
                    <span className="block font-sans text-[10px] tracking-widest uppercase text-gold/40 mb-1">Phone</span>
                    <span className="font-sans text-sm">{BRAND.phoneDisplay}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-ivory/60 hover:text-ivory transition-colors duration-300 group"
                >
                  <MessageCircle size={15} className="mt-0.5 shrink-0 text-gold/60 group-hover:text-gold transition-colors" />
                  <div>
                    <span className="block font-sans text-[10px] tracking-widest uppercase text-gold/40 mb-1">WhatsApp</span>
                    <span className="font-sans text-sm">Message Mahesh Bhardwaj</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-ivory/60">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-gold/60" />
                  <div>
                    <span className="block font-sans text-[10px] tracking-widest uppercase text-gold/40 mb-1">Address</span>
                    <span className="font-sans text-sm leading-relaxed">{BRAND.addressFull}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* QR Codes */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/60 mb-6">Follow & Connect</h3>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/thebanquetkolkata/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-20 h-20 bg-white p-1.5 relative">
                  <Image
                    src="/images/qr/instagram.jpg"
                    alt="Instagram QR Code"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/40">Instagram</span>
              </a>
              <a href="https://wa.me/919831824727" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-20 h-20 bg-white p-1.5 relative">
                  <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https%3A%2F%2Fwa.me%2F919831824727"
                    alt="WhatsApp QR Code"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/40">WhatsApp</span>
              </a>
              <a href="https://www.google.com/maps/place/The+Banquet+by+A.B.Corp/@22.5204,88.3538,17z" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-20 h-20 bg-white p-1.5 relative">
                  <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FThe%2BBanquet%2Bby%2BA.B.Corp"
                    alt="Google Reviews QR Code"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/40">Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-grey/15">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-ivory/25 tracking-widest">
            © {year} the Banquet by A.B.Corp. All rights reserved. Est. {BRAND.established}.
          </p>
          <p className="font-sans text-[11px] text-ivory/25 tracking-widest">
            77C Rashbehari Avenue · Kolkata 700026
          </p>
        </div>
      </div>
    </footer>
  )
}
