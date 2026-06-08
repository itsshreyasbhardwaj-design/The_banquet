'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, User } from 'lucide-react'
import { BRAND, getWhatsAppLink } from '@/lib/constants'

export default function ConnectPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/venues/0-main-entrance.png" alt="Connect with the Banquet" fill priority sizes="100vw" className="object-cover kenburns" />
          <div className="absolute inset-0 bg-near-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 pb-20 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="section-eyebrow">Get in Touch</p>
            <h1 className="font-display text-ivory leading-tight" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)' }}>
              Connect
            </h1>
            <div className="w-16 h-px bg-gold mt-6 mb-5" />
            <p className="font-display italic text-ivory/60 max-w-xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)' }}>
              We prefer a conversation over a form. Speak with us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main connect section */}
      <section className="py-24 lg:py-32 bg-near-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: Contact options */}
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <p className="section-eyebrow">Reach Us</p>
                <h2 className="font-display text-ivory mb-6 leading-tight" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
                  Begin the<br />Conversation
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="prose-luxury mb-10">
                  Every celebration starts with a call. Reach Mahesh Bhardwaj directly — no intermediaries, no delays, no forms.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-col gap-4 mb-12">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 border border-warm-grey/30 hover:border-[#25D366]/40 bg-charcoal hover:bg-[#25D366]/5 transition-all duration-400"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#25D366]/10 border border-[#25D366]/20 group-hover:bg-[#25D366]/20 transition-colors duration-400">
                        <MessageCircle size={20} className="text-[#25D366]" />
                      </div>
                      <div>
                        <span className="block font-sans text-xs tracking-widest uppercase text-ivory/70 mb-0.5">WhatsApp</span>
                        <span className="block font-display text-lg text-ivory">Message Mahesh</span>
                      </div>
                    </div>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/30 group-hover:text-[#25D366]/60 transition-colors duration-400">
                      Tap to Open →
                    </span>
                  </a>

                  <a
                    href={`tel:${BRAND.phone}`}
                    className="group flex items-center justify-between p-5 border border-warm-grey/30 hover:border-crimson/40 bg-charcoal hover:bg-crimson/5 transition-all duration-400"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-crimson/10 border border-crimson/20 group-hover:bg-crimson/20 transition-colors duration-400">
                        <Phone size={20} className="text-crimson-muted" />
                      </div>
                      <div>
                        <span className="block font-sans text-xs tracking-widest uppercase text-ivory/70 mb-0.5">Call Direct</span>
                        <span className="block font-display text-lg text-ivory">{BRAND.phoneDisplay}</span>
                      </div>
                    </div>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/30 group-hover:text-crimson-muted transition-colors duration-400">
                      Call Now →
                    </span>
                  </a>
                </div>

                {/* Details */}
                <div className="space-y-6 border-t border-warm-grey/20 pt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-gold/20 text-gold shrink-0 mt-0.5">
                      <User size={14} />
                    </div>
                    <div>
                      <span className="block font-sans text-[9px] tracking-widest uppercase text-gold/40 mb-1">Primary Contact</span>
                      <span className="font-display text-ivory text-lg">{BRAND.contact}</span>
                      <span className="block font-sans text-xs text-ivory/30 mt-0.5">Founder & Director</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-gold/20 text-gold shrink-0 mt-0.5">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <span className="block font-sans text-[9px] tracking-widest uppercase text-gold/40 mb-1">Location</span>
                      <span className="font-display text-ivory text-lg leading-tight">{BRAND.addressFull}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-gold/20 text-gold shrink-0 mt-0.5">
                      <Clock size={14} />
                    </div>
                    <div>
                      <span className="block font-sans text-[9px] tracking-widest uppercase text-gold/40 mb-1">Hours</span>
                      <span className="font-display text-ivory text-lg">Available on Appointment</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Map + QR */}
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}>
                {/* Map */}
                <div className="relative h-80 lg:h-96 overflow-hidden border border-warm-grey/20 mb-10">
                  <iframe
                    title="the Banquet by A.B.Corp location"
                    src="https://maps.google.com/maps?q=77C+Rashbehari+Avenue,+Kolkata+700026&output=embed&z=16"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1) brightness(0.7)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Map overlay label */}
                  <div className="absolute bottom-4 left-4 px-4 py-2.5 bg-near-black/90 border border-gold/20 backdrop-blur-sm">
                    <span className="font-sans text-[10px] tracking-widest uppercase text-gold-light">
                      77C Rashbehari Avenue, Kolkata
                    </span>
                  </div>
                </div>

                {/* QR codes */}
                <div>
                  <p className="section-eyebrow mb-6">Scan to Connect</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { src: '/images/qr/instagram.jpg', label: 'Instagram', sub: '@thebanquetkolkata', href: 'https://www.instagram.com/thebanquetkolkata/' },
                      { src: 'https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https%3A%2F%2Fwa.me%2F919831824727', label: 'WhatsApp', sub: 'Instant Message', href: 'https://wa.me/919831824727' },
                      { src: 'https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https%3A%2F%2Fg.page%2Fr%2FCeLcmY5IZq5eEBM%2Freview', label: 'Google Reviews', sub: '4.5★ · 679 Reviews', href: 'https://g.page/r/CeLcmY5IZq5eEBM/review' },
                    ].map((qr) => (
                      <a key={qr.label} href={qr.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-5 border border-warm-grey/20 hover:border-gold/20 transition-colors duration-400">
                        <div className="w-24 h-24 bg-white p-2 relative">
                          <Image
                            src={qr.src}
                            alt={`${qr.label} QR Code`}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <span className="block font-sans text-[10px] tracking-widest uppercase text-ivory/60 mb-0.5">{qr.label}</span>
                          <span className="block font-sans text-[9px] text-ivory/30">{qr.sub}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp prefill message preview */}
      <section className="py-16 bg-charcoal border-t border-warm-grey/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Just One Tap Away</p>
          <h2 className="font-display text-ivory mb-4" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
            We&apos;ve Written the Message.<br />You Just Need to Send It.
          </h2>
          <div className="gold-divider" />

          {/* Message preview */}
          <div className="text-left p-5 bg-near-black/60 border border-warm-grey/20 mb-8 max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span className="font-sans text-[10px] tracking-widest uppercase text-[#25D366]/70">Pre-filled WhatsApp Message</span>
            </div>
            <p className="font-sans text-xs text-ivory/50 leading-relaxed italic">
              &ldquo;Hi Mahesh, I am interested in booking the Banquet for an event on [Date]. We are expecting approximately [Number] guests. Please share the availability and package details.&rdquo;
            </p>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#22c55e] transition-colors duration-300 shadow-lg"
          >
            <MessageCircle size={16} />
            <span>Open WhatsApp Now</span>
          </a>
        </div>
      </section>
    </>
  )
}
