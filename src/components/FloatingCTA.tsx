'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, ChevronRight } from 'lucide-react'
import { BRAND, getWhatsAppLink } from '@/lib/constants'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded label */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-2 items-end"
              >
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-3 px-5 py-3 nav-glass text-ivory hover:text-gold transition-colors duration-300 font-sans text-xs tracking-widest uppercase border border-gold/20"
                  aria-label="Call us"
                >
                  <span>Call Now</span>
                  <Phone size={13} className="text-gold" />
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 nav-glass text-ivory hover:text-gold transition-colors duration-300 font-sans text-xs tracking-widest uppercase border border-gold/20"
                  aria-label="WhatsApp us"
                >
                  <span>WhatsApp</span>
                  <MessageCircle size={13} className="text-[#25D366]" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main toggle button */}
          <div className="flex items-center gap-3">
            {/* WhatsApp always-visible */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg wa-pulse hover:scale-110 transition-transform duration-300"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={24} />
            </a>

            {/* Call button */}
            <a
              href={`tel:${BRAND.phone}`}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-crimson text-ivory shadow-crimson-md animate-pulse-gold hover:scale-110 transition-transform duration-300"
              aria-label="Call us now"
            >
              <Phone size={22} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
