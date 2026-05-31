'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { GALLERY_IMAGES } from '@/lib/constants'

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null))
  }, [])

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : null))
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/venues/1-corridor.jpg" alt="Gallery" fill priority sizes="100vw" className="object-cover kenburns" />
          <div className="absolute inset-0 bg-near-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 pb-20 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="section-eyebrow">Visual Journey</p>
            <h1 className="font-display text-ivory leading-tight" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)' }}>
              Gallery
            </h1>
            <div className="w-16 h-px bg-gold mt-6 mb-5" />
            <p className="font-display italic text-ivory/60 max-w-xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)' }}>
              Moments of beauty, captured within the Banquet&apos;s spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 lg:py-24 bg-near-black min-h-[60vh]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
          >
            {GALLERY_IMAGES.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="relative mb-4 overflow-hidden group cursor-pointer break-inside-avoid"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  width={600}
                  height={800}
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 transform scale-90 group-hover:scale-100">
                    <ZoomIn size={28} className="text-ivory" />
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-near-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/80">{image.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-near-black/97 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-gold/20 text-ivory hover:text-gold hover:border-gold/40 transition-colors duration-300 z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Nav */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-gold/20 text-ivory hover:text-gold hover:border-gold/40 transition-colors duration-300 z-10"
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-gold/20 text-ivory hover:text-gold hover:border-gold/40 transition-colors duration-300 z-10"
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.35 }}
              className="relative max-w-[90vw] max-h-[85vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].label}
                width={1200}
                height={900}
                className="object-contain max-h-[82vh] w-auto"
                sizes="90vw"
              />
              <p className="absolute -bottom-8 left-0 right-0 text-center font-sans text-xs tracking-widest uppercase text-ivory/40">
                {GALLERY_IMAGES[lightboxIndex].label}
              </p>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs text-ivory/30 tracking-widest">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
