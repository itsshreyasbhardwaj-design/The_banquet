'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Phone, MessageCircle, ArrowRight, Wind, ChefHat, Car, BedDouble,
  Thermometer, Zap, Heart, Star, ChevronDown,
} from 'lucide-react'
import { BRAND, HERO_SLIDES, VENUES, FEATURES, getWhatsAppLink } from '@/lib/constants'

/* ─── Animated Counter ─────────────────────────────────────────────── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const inc = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + inc, target)
      setCount(Math.round(current))
      if (current >= target) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

/* ─── Icon Map ─────────────────────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconMap: Record<string, React.ComponentType<any>> = {
  Wind, ChefHat, Car, BedDouble, Thermometer, Zap, Heart, Star,
}

/* ─── Hero Slide Component ─────────────────────────────────────────── */
function HeroSlide({ slide, active }: { slide: typeof HERO_SLIDES[number]; active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 kenburns">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          {/* Dark overlays */}
          <div className="absolute inset-0 bg-near-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/20 to-transparent" />
          <div className="absolute inset-0 bg-dark-vignette" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const interval = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative h-screen min-h-[680px] flex flex-col items-center justify-center overflow-hidden" aria-label="Hero">
        {/* Background slides */}
        <div className="absolute inset-0">
          {HERO_SLIDES.map((slide, i) => (
            <HeroSlide key={slide.image} slide={slide} active={i === slideIndex} />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          {loaded && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
                <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-gold-light">
                  Est. {BRAND.established} · Kolkata
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="mb-4"
              >
                <span className="block font-sans text-xs tracking-[0.5em] uppercase text-gold/70 mb-2">the</span>
                <h1 className="font-display leading-none tracking-tight text-ivory"
                  style={{ fontSize: 'clamp(4rem, 12vw, 8rem)' }}
                >
                  Banquet
                </h1>
                <span className="block font-display italic text-gold-light mt-1"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
                >
                  by A.B.Corp
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent my-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.22, 0.61, 0.36, 1] }}
                className="font-display italic text-ivory/70 mb-10"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
              >
                {BRAND.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={15} />
                  <span>Enquire on WhatsApp</span>
                </a>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="btn-secondary"
                >
                  <Phone size={15} />
                  <span>Call {BRAND.phoneDisplay}</span>
                </a>
              </motion.div>
            </>
          )}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`transition-all duration-500 ${
                i === slideIndex
                  ? 'w-8 h-px bg-gold'
                  : 'w-2 h-px bg-ivory/30 hover:bg-ivory/60'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-2 z-10"
        >
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-ivory/30 rotate-90 origin-center">
            Scroll
          </span>
          <ChevronDown size={14} className="text-gold/50 animate-bounce" />
        </motion.div>
      </section>

      {/* ══════════════════ TRUST METRICS ══════════════════ */}
      <section className="bg-charcoal border-y border-warm-grey/20 py-12 lg:py-16" aria-label="Trust metrics">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-warm-grey/20">
            {[
              { value: 100, suffix: '+', label: 'Weddings Hosted', sublabel: 'Families Celebrated' },
              { value: 200, suffix: '+', label: 'Events Hosted', sublabel: 'Celebrations Curated' },
              { value: 4, suffix: '.5★', label: 'Google Rating', sublabel: '679 Verified Reviews' },
              { value: 2015, suffix: '', label: 'Established', sublabel: 'A Decade of Legacy' },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-6 lg:px-10"
              >
                <div className="font-display text-gold leading-none mb-1.5"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-sans text-xs tracking-widest uppercase text-ivory/60 mb-1">
                  {stat.label}
                </div>
                <div className="font-display italic text-ivory/30 text-sm">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ SIGNATURE SPACES ══════════════════ */}
      <section className="py-24 lg:py-32 bg-near-black" aria-labelledby="venues-heading">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-eyebrow">Our Spaces</p>
              <h2 id="venues-heading" className="font-display text-ivory leading-tight"
                style={{ fontSize: 'clamp(2.2rem,5vw,4rem)' }}
              >
                Signature Venues
              </h2>
              <div className="gold-divider" />
              <p className="font-display italic text-ivory/50 max-w-lg mx-auto"
                style={{ fontSize: 'clamp(1rem,1.5vw,1.2rem)' }}
              >
                Three distinct spaces. Each a world unto itself.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {VENUES.map((venue, i) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Link href={`/signature-venues#${venue.slug}`} className="group block luxury-card h-full">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={venue.heroImage}
                      alt={venue.name}
                      fill
                      sizes="(max-width:1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1200 group-hover:scale-105"
                    />
                    <div className="img-overlay" />
                    {/* Capacity badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-near-black/70 border border-gold/20 backdrop-blur-sm">
                      <span className="font-sans text-[10px] tracking-widest uppercase text-gold-light">
                        {venue.capacity.min}–{venue.capacity.max} Guests
                      </span>
                    </div>
                    {/* Subtitle */}
                    <div className="absolute bottom-4 left-4">
                      <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/70">
                        {venue.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="font-display text-2xl lg:text-3xl text-ivory mb-3 group-hover:text-gold-pale transition-colors duration-400">
                      {venue.name}
                    </h3>
                    <p className="font-sans text-sm text-ivory/50 leading-relaxed mb-6 line-clamp-3">
                      {venue.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center gap-4 mb-6 pt-4 border-t border-warm-grey/20">
                      <div>
                        <span className="block font-sans text-[9px] tracking-widest uppercase text-gold/40 mb-1">Weddings from</span>
                        <span className="font-display text-xl text-gold">{venue.pricing.wedding.amount}</span>
                      </div>
                      <div className="w-px h-8 bg-warm-grey/20" />
                      <div>
                        <span className="block font-sans text-[9px] tracking-widest uppercase text-gold/40 mb-1">Celebrations from</span>
                        <span className="font-display text-xl text-ivory/70">{venue.pricing.celebration.amount}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-gold-light group-hover:gap-3 transition-all duration-300">
                      <span>Explore Space</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/signature-venues" className="btn-secondary">
              <span>View All Venues</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ IMMERSIVE PHOTO STRIP ══════════════════ */}
      <div className="flex h-[40vh] lg:h-[50vh] overflow-hidden">
        {['/images/venues/1-staircase.png', '/images/venues/1-mandap.png', '/images/venues/1-rooftop.png', '/images/venues/1-stage.png'].map((src, i) => (
          <div key={i} className="flex-1 relative overflow-hidden group">
            <Image
              src={src}
              alt={`Venue atmosphere ${i + 1}`}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-1200 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-near-black/30 group-hover:bg-near-black/10 transition-colors duration-700" />
          </div>
        ))}
      </div>

      {/* ══════════════════ FEATURES ══════════════════ */}
      <section className="py-24 lg:py-32 bg-charcoal" aria-labelledby="features-heading">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative"
            >
              <div className="relative h-[500px] lg:h-[620px] overflow-hidden">
                <Image
                  src="/images/venues/0-entrance.png"
                  alt="The Banquet entrance — bougainvillea and crystal chandeliers"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-6 p-6 bg-crimson border border-crimson-light/40 shadow-crimson-md">
                <div className="font-display text-4xl text-ivory leading-none mb-1">
                  <Counter target={10} suffix="+" />
                </div>
                <div className="font-sans text-[10px] tracking-widest uppercase text-ivory/60">
                  Years of Excellence
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-10"
              >
                <p className="section-eyebrow">What Sets Us Apart</p>
                <h2 id="features-heading" className="font-display text-ivory leading-tight mb-4"
                  style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}
                >
                  Why Families<br />Choose the Banquet
                </h2>
                <p className="font-display italic text-ivory/50 leading-relaxed"
                  style={{ fontSize: 'clamp(0.95rem,1.3vw,1.1rem)' }}
                >
                  Every detail is considered. Every need anticipated. Every family treated as our own.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {FEATURES.map((feature, i) => {
                  const IconComp = IconMap[feature.icon]
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className="flex items-start gap-4 p-4 border border-warm-grey/20 hover:border-gold/20 transition-colors duration-400 group"
                    >
                      <div className="feature-icon shrink-0 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-400">
                        {IconComp && <IconComp size={18} />}
                      </div>
                      <div>
                        <h3 className="font-sans text-xs tracking-widest uppercase text-ivory/80 mb-1.5 group-hover:text-gold-light transition-colors duration-400">
                          {feature.title}
                        </h3>
                        <p className="font-sans text-xs text-ivory/40 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ GALLERY TEASER ══════════════════ */}
      <section className="py-24 lg:py-32 bg-near-black" aria-labelledby="gallery-heading">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-eyebrow">Visual Journey</p>
              <h2 id="gallery-heading" className="font-display text-ivory"
                style={{ fontSize: 'clamp(2.2rem,5vw,4rem)' }}
              >
                A Glimpse Inside
              </h2>
              <div className="gold-divider" />
            </motion.div>
          </div>

          {/* Mosaic grid */}
          <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[480px] lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-7 row-span-2 relative overflow-hidden group"
            >
              <Image src="/images/venues/1-staircase.png" alt="Floral staircase" fill sizes="60vw" className="object-cover transition-transform duration-1200 group-hover:scale-105" />
              <div className="img-overlay" />
              <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-xs tracking-widest uppercase text-ivory/80 bg-near-black/60 px-3 py-1.5">Floral Staircase</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="col-span-5 row-span-1 relative overflow-hidden group"
            >
              <Image src="/images/venues/1-mandap.png" alt="Gold mandap" fill sizes="40vw" className="object-cover transition-transform duration-1200 group-hover:scale-105" />
              <div className="img-overlay" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/80 bg-near-black/60 px-2.5 py-1">Gold Mandap</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-3 row-span-1 relative overflow-hidden group"
            >
              <Image src="/images/venues/1-rooftop.png" alt="Rooftop terrace" fill sizes="25vw" className="object-cover transition-transform duration-1200 group-hover:scale-105" />
              <div className="img-overlay" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-2 row-span-1 relative overflow-hidden group"
            >
              <Image src="/images/venues/1-stage.png" alt="Garden stage" fill sizes="20vw" className="object-cover transition-transform duration-1200 group-hover:scale-105" />
              <div className="img-overlay" />
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-secondary">
              <span>Explore Full Gallery</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ LEGACY TEASER ══════════════════ */}
      <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden" aria-labelledby="legacy-heading">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-noise" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p className="section-eyebrow">Our Story</p>
              <h2 id="legacy-heading" className="font-display text-ivory mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}
              >
                A Family Legacy,<br />
                <span className="text-gold-shimmer">Since 2015</span>
              </h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="font-display italic text-ivory/60 leading-relaxed mb-6"
                style={{ fontSize: 'clamp(1rem,1.4vw,1.15rem)' }}
              >
                Born in the heart of South Kolkata, the Banquet by A.B.Corp was founded on a single conviction: that every family deserves a celebration as extraordinary as the love that inspires it.
              </p>
              <p className="font-sans text-sm text-ivory/40 leading-relaxed mb-10">
                What began as Mahesh Bhardwaj&apos;s vision in 2015 has grown into Kolkata&apos;s most trusted luxury banquet — 100+ weddings, 200+ events, and a Google rating of 4.5 stars across 679 reviews. Not through marketing alone, but through a culture of genuine care that every guest experiences from the first call to the final farewell.
              </p>

              <div className="flex items-center gap-6">
                <Link href="/legacy" className="btn-primary">
                  <span>Discover Our Story</span>
                  <ArrowRight size={14} />
                </Link>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
                    <Star size={14} className="fill-gold/50 text-gold/50" />
                  </div>
                  <div>
                    <span className="font-display text-gold text-lg">4.5</span>
                    <span className="font-sans text-[10px] text-ivory/40 ml-1">/ 679 reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/venues/0-hall.png"
                  alt="Heritage Hall interior"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 to-transparent" />
              </div>
              {/* Corner accent */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border border-gold/20 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gold/10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════ FINAL CTA ══════════════════ */}
      <section className="relative py-28 lg:py-36 overflow-hidden" aria-label="Book Now">
        <div className="absolute inset-0">
          <Image
            src="/images/venues/1-mandap.png"
            alt="Enquire about the Banquet"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-crimson-gradient opacity-90" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-light/70 mb-4">Begin Your Journey</p>
            <h2 className="font-display text-ivory leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)' }}
            >
              Your Celebration<br />Awaits
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-pale to-transparent mx-auto my-6" />
            <p className="font-display italic text-ivory/70 mb-10"
              style={{ fontSize: 'clamp(0.95rem,1.5vw,1.15rem)' }}
            >
              Speak with Mahesh Bhardwaj directly.<br />
              No forms. No delays. Just a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 bg-ivory text-near-black font-sans text-xs tracking-widest uppercase hover:bg-gold-pale transition-colors duration-400"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Now</span>
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-3 px-9 py-4 border border-ivory/40 text-ivory font-sans text-xs tracking-widest uppercase hover:border-ivory hover:bg-ivory/5 transition-all duration-400"
              >
                <Phone size={15} />
                <span>{BRAND.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
