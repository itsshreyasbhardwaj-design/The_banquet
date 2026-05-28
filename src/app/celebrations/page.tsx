'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { CELEBRATIONS, BRAND, getWhatsAppLink } from '@/lib/constants'

const moodColors: Record<string, string> = {
  'Crimson & Gold': 'text-crimson',
  'Vibrant & Joyful': 'text-gold',
  'Intimate & Romantic': 'text-crimson-muted',
  'Sacred & Warm': 'text-gold-warm',
  'Sophisticated & Sleek': 'text-ivory-muted',
  'Open & Inspired': 'text-gold-light',
  'Professional & Elegant': 'text-gold',
}

export default function CelebrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/venues/1-stage.png"
            alt="Celebrations at the Banquet"
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns"
          />
          <div className="absolute inset-0 bg-near-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 pb-20 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="section-eyebrow">Every Occasion</p>
            <h1 className="font-display text-ivory leading-tight" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)' }}>
              Celebrations
            </h1>
            <div className="w-16 h-px bg-gold mt-6 mb-5" />
            <p className="font-display italic text-ivory/60 max-w-xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)' }}>
              From intimate ceremonies to grand gatherings — every milestone deserves magnificence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Celebrations grid */}
      <section className="py-24 lg:py-32 bg-near-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CELEBRATIONS.map((celebration, i) => (
              <motion.div
                key={celebration.id}
                id={celebration.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.15 }}
                className={`group luxury-card overflow-hidden ${i === 0 ? 'lg:col-span-2' : ''}`}
              >
                {i === 0 ? (
                  /* Featured — full-width weddings card */
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-72 lg:h-96 overflow-hidden">
                      <Image
                        src={celebration.image}
                        alt={celebration.name}
                        fill
                        sizes="(max-width:1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1200 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-near-black/70 hidden lg:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-near-black to-transparent lg:hidden" />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className={`font-sans text-[10px] tracking-[0.4em] uppercase mb-2 ${moodColors[celebration.mood] || 'text-gold'}`}>
                        {celebration.mood}
                      </span>
                      <h2 className="font-display text-ivory leading-tight mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                        {celebration.name}
                      </h2>
                      <p className="font-display italic text-gold mb-4">{celebration.tagline}</p>
                      <div className="w-10 h-px bg-gold mb-6" />
                      <p className="font-sans text-sm text-ivory/50 leading-relaxed mb-8">{celebration.description}</p>
                      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary self-start">
                        <MessageCircle size={14} />
                        <span>Enquire Now</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Regular card */
                  <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                    <div className="relative h-56 sm:h-full overflow-hidden">
                      <Image
                        src={celebration.image}
                        alt={celebration.name}
                        fill
                        sizes="(max-width:640px) 100vw, 25vw"
                        className="object-cover transition-transform duration-1200 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-near-black/50 to-transparent" />
                    </div>
                    <div className="p-7 flex flex-col justify-center">
                      <span className={`font-sans text-[9px] tracking-[0.4em] uppercase mb-1.5 ${moodColors[celebration.mood] || 'text-gold'}`}>
                        {celebration.mood}
                      </span>
                      <h2 className="font-display text-ivory text-2xl lg:text-3xl mb-2 group-hover:text-gold-pale transition-colors duration-400">
                        {celebration.name}
                      </h2>
                      <p className="font-display italic text-gold/70 text-sm mb-4">{celebration.tagline}</p>
                      <p className="font-sans text-xs text-ivory/40 leading-relaxed mb-6 line-clamp-4">
                        {celebration.description}
                      </p>
                      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-gold-light hover:text-gold transition-colors duration-300">
                        <span>Enquire</span>
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal border-t border-warm-grey/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Your Event Awaits</p>
          <h2 className="font-display text-ivory mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
            Let&apos;s Plan Together
          </h2>
          <div className="gold-divider" />
          <p className="font-display italic text-ivory/50 mb-8">
            Every celebration is unique. Tell us about yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={14} /><span>WhatsApp Us</span>
            </a>
            <a href={`tel:${BRAND.phone}`} className="btn-secondary">
              <Phone size={14} /><span>{BRAND.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
