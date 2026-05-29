'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Wind, ChefHat, Car, BedDouble, Thermometer, Heart, Star,
  Phone, MessageCircle,
} from 'lucide-react'
import { BRAND, FEATURES, getWhatsAppLink } from '@/lib/constants'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconMap: Record<string, React.ComponentType<any>> = {
  Wind, ChefHat, Car, BedDouble, Thermometer, Heart, Star,
}

export default function LegacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/venues/0-main-entrance.png" alt="The legacy of the Banquet — crimson floral corridor" fill priority sizes="100vw" className="object-cover kenburns" />
          <div className="absolute inset-0 bg-near-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 pb-20 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="section-eyebrow">Since 2015</p>
            <h1 className="font-display text-ivory leading-tight" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)' }}>
              Our Legacy
            </h1>
            <div className="w-16 h-px bg-gold mt-6 mb-5" />
            <p className="font-display italic text-ivory/60 max-w-xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)' }}>
              A story of love, Kolkata, and the relentless pursuit of celebration perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-near-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <p className="section-eyebrow">The Story</p>
              <h2 className="font-display text-ivory leading-tight mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
                Born in South Kolkata.<br />
                <span className="text-gold-shimmer">Built for Every Family.</span>
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <div className="space-y-5">
                <p className="prose-luxury">
                  In 2015, Mahesh Bhardwaj stood at 77C Rashbehari Avenue and made a promise — that every family who walked through these doors would leave with memories worthy of the moments they were celebrating.
                </p>
                <p className="font-sans text-sm text-ivory/40 leading-relaxed">
                  South Kolkata has always been a city of culture, ceremony, and community. It&apos;s a city where weddings are not events but epics. Where anniversaries are not dinners but declarations. Where even a child&apos;s first rice ceremony carries the weight of generations.
                </p>
                <p className="font-sans text-sm text-ivory/40 leading-relaxed">
                  The Banquet was born to honour that cultural weight — not with generic grandeur, but with a specific kind of luxury that Kolkata deserves: one rooted in warmth, heritage, and the unwavering belief that your family&apos;s celebration is the most important event in the world.
                </p>
                <p className="font-sans text-sm text-ivory/40 leading-relaxed">
                  Today, with 100+ weddings, 200+ events, and a 4.5★ Google rating across 679 reviews, the Banquet is not just a venue. It is Kolkata&apos;s living testimony to what celebration can be.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
              <div className="relative h-[560px] overflow-hidden">
                <Image src="/images/venues/1-hall.png" alt="Heritage Floor" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/50 to-transparent" />
              </div>
              {/* Founder signature block */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-near-black/90 border border-gold/20 backdrop-blur-sm">
                <p className="font-display italic text-ivory/80 text-base leading-relaxed mb-3">
                  &ldquo;We don&apos;t just host events. We hold your memories.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-gold" />
                  <div>
                    <span className="block font-sans text-xs tracking-widest uppercase text-gold-light">{BRAND.contact}</span>
                    <span className="block font-sans text-[10px] text-ivory/30 tracking-widest uppercase">Founder, the Banquet by A.B.Corp</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 lg:py-28 bg-near-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '100+', label: 'Weddings Hosted', sub: 'Families celebrated' },
              { n: '200+', label: 'Events Curated', sub: 'Occasions honoured' },
              { n: '4.5★', label: 'Google Rating', sub: '679 reviews' },
              { n: '10+', label: 'Years of Excellence', sub: 'Est. 2015' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 border border-warm-grey/20 hover:border-gold/20 transition-colors duration-400"
              >
                <div className="font-display text-gold leading-none mb-2" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
                  {stat.n}
                </div>
                <div className="font-sans text-xs tracking-widest uppercase text-ivory/60 mb-1">{stat.label}</div>
                <div className="font-display italic text-ivory/30 text-sm">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-24 lg:py-32 bg-charcoal">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="section-eyebrow">Our Difference</p>
              <h2 className="font-display text-ivory" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
                Why We&apos;re Different
              </h2>
              <div className="gold-divider" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => {
              const IconComp = IconMap[feature.icon]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="p-7 border border-warm-grey/20 hover:border-gold/20 transition-colors duration-400 group text-center"
                >
                  <div className="feature-icon mx-auto mb-5 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-400">
                    {IconComp && <IconComp size={20} />}
                  </div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-ivory/80 mb-3 group-hover:text-gold-light transition-colors duration-400">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs text-ivory/35 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/venues/1-rooftop.png" alt="Begin your story" fill sizes="100vw" className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-crimson-gradient opacity-90" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="section-eyebrow">Become Part of Our Story</p>
            <h2 className="font-display text-ivory mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
              Your Celebration.<br />Our Legacy.
            </h2>
            <div className="gold-divider" />
            <p className="font-display italic text-ivory/70 mb-10">
              Join the hundreds of families who trusted the Banquet with their most precious moments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 bg-ivory text-near-black font-sans text-xs tracking-widest uppercase hover:bg-gold-pale transition-colors duration-400">
                <MessageCircle size={14} /><span>WhatsApp Now</span>
              </a>
              <a href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-3 px-9 py-4 border border-ivory/40 text-ivory font-sans text-xs tracking-widest uppercase hover:border-ivory hover:bg-ivory/5 transition-all duration-400">
                <Phone size={14} /><span>{BRAND.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
