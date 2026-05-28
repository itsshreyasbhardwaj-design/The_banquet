'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { VENUES, BRAND, getWhatsAppLink } from '@/lib/constants'

function ImageSlider({ images, name }: { images: readonly string[]; name: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrent((i) => (i + 1) % images.length)

  return (
    <div className="relative aspect-[4/3] overflow-hidden group">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`${name} — view ${i + 1}`}
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 to-transparent" />

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-near-black/60 border border-gold/20 text-ivory hover:bg-near-black/80 hover:border-gold/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-near-black/60 border border-gold/20 text-ivory hover:bg-near-black/80 hover:border-gold/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-400 ${i === current ? 'w-6 h-px bg-gold' : 'w-1.5 h-1.5 rounded-full bg-ivory/40 hover:bg-ivory/60'}`}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function SignatureVenuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/venues/1-hall.png"
            alt="Signature venues at the Banquet"
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns"
          />
          <div className="absolute inset-0 bg-near-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="section-eyebrow">Our Spaces</p>
            <h1 className="font-display text-ivory leading-tight"
              style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)' }}
            >
              Signature Venues
            </h1>
            <div className="w-16 h-px bg-gold mt-6 mb-5" />
            <p className="font-display italic text-ivory/60 max-w-xl"
              style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)' }}
            >
              Three spaces. Three scales. One unwavering standard of excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venues */}
      <div className="bg-near-black">
        {VENUES.map((venue, i) => (
          <section
            key={venue.id}
            id={venue.slug}
            className={`py-24 lg:py-32 ${i % 2 === 1 ? 'bg-charcoal' : 'bg-near-black'}`}
            aria-labelledby={`venue-${venue.id}`}
          >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                {/* Image slider */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="lg:[direction:ltr]"
                >
                  <ImageSlider images={venue.images} name={venue.name} />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="lg:[direction:ltr]"
                >
                  <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-light/70 mb-3 block">
                    {venue.subtitle}
                  </span>
                  <h2
                    id={`venue-${venue.id}`}
                    className="font-display text-ivory leading-tight mb-2"
                    style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}
                  >
                    {venue.name}
                  </h2>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-gold" />
                    <span className="font-sans text-xs tracking-widest uppercase text-gold/60">
                      {venue.capacity.min}–{venue.capacity.max} Guests
                    </span>
                  </div>

                  <p className="font-display italic text-ivory/60 leading-relaxed mb-8"
                    style={{ fontSize: 'clamp(0.95rem,1.3vw,1.1rem)' }}
                  >
                    {venue.description}
                  </p>

                  {/* Features list */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {venue.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 font-sans text-xs text-ivory/60">
                        <Check size={12} className="text-gold shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing table */}
                  <div className="border border-warm-grey/30 mb-8">
                    <div className="flex">
                      <div className="flex-1 p-5 border-r border-warm-grey/30">
                        <span className="block font-sans text-[9px] tracking-widest uppercase text-gold/50 mb-2">
                          {venue.pricing.wedding.label}
                        </span>
                        <span className="font-display text-3xl text-gold">
                          {venue.pricing.wedding.amount}
                        </span>
                      </div>
                      <div className="flex-1 p-5">
                        <span className="block font-sans text-[9px] tracking-widest uppercase text-ivory/30 mb-2">
                          {venue.pricing.celebration.label}
                        </span>
                        <span className="font-display text-3xl text-ivory/70">
                          {venue.pricing.celebration.amount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <MessageCircle size={14} />
                      <span>Enquire on WhatsApp</span>
                    </a>
                    <a href={`tel:${BRAND.phone}`} className="btn-secondary">
                      <Phone size={14} />
                      <span>Call Now</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* All-venue CTA */}
      <section className="py-20 bg-charcoal border-t border-warm-grey/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Ready to Begin?</p>
          <h2 className="font-display text-ivory mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
            Personalise Your Event
          </h2>
          <div className="gold-divider" />
          <p className="font-display italic text-ivory/50 mb-8">
            Every celebration at the Banquet is unique. Speak with us to design yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={14} />
              <span>WhatsApp Mahesh</span>
            </a>
            <a href={`tel:${BRAND.phone}`} className="btn-secondary">
              <Phone size={14} />
              <span>{BRAND.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
