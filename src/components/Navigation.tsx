'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X, Menu } from 'lucide-react'
import { NAV_LINKS, BRAND, getWhatsAppLink } from '@/lib/constants'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${
          scrolled || mobileOpen ? 'nav-glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start leading-none group" aria-label="the Banquet by A.B.Corp - Home">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-light/80 group-hover:text-gold-light transition-colors duration-400">
                the
              </span>
              <span className="font-display text-2xl lg:text-3xl font-medium text-ivory tracking-tight leading-none group-hover:text-gold-pale transition-colors duration-400">
                Banquet
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold/70 group-hover:text-gold transition-colors duration-400">
                by A.B.Corp
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main navigation">
              {NAV_LINKS.filter(l => l.href !== '/').map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-400 relative group ${
                    pathname === link.href
                      ? 'text-gold'
                      : 'text-ivory/70 hover:text-ivory'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-400 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 px-5 py-2.5 border border-gold/30 text-gold-light hover:border-gold hover:bg-gold/5 transition-all duration-400 font-sans text-xs tracking-widest uppercase"
                aria-label="Call us"
              >
                <Phone size={13} />
                <span>Call</span>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-crimson border border-crimson text-ivory hover:bg-crimson-light transition-all duration-400 font-sans text-xs tracking-widest uppercase"
                aria-label="WhatsApp us"
              >
                <MessageCircle size={13} />
                <span>Enquire</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 text-ivory"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} className="text-gold" />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.2 }} className="flex flex-col gap-1.5">
                    <span className="block w-6 h-px bg-ivory/80" />
                    <span className="block w-4 h-px bg-gold" />
                    <span className="block w-6 h-px bg-ivory/80" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(12,9,6,0.97)' }}
          >
            {/* Gold line top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="flex flex-col items-center justify-center h-full gap-0 pt-20">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`block py-5 font-display text-4xl tracking-tight transition-colors duration-300 text-center ${
                      pathname === link.href ? 'text-gold' : 'text-ivory/60 hover:text-ivory'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="flex items-center gap-4 mt-10"
              >
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-2.5 px-7 py-3.5 border border-gold/40 text-gold font-sans text-xs tracking-widest uppercase"
                >
                  <Phone size={14} />
                  <span>Call Now</span>
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-7 py-3.5 bg-crimson text-ivory font-sans text-xs tracking-widest uppercase"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.7 }}
                className="mt-10 font-sans text-xs text-ivory/40 tracking-widest text-center"
              >
                77C Rashbehari Avenue, Kolkata
              </motion.p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
