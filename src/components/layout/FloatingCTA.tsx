'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href="#anfrage"
            className="flex items-center gap-2.5 px-5 py-3.5 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold shadow-2xl hover:bg-[#D9BE8C] transition-colors duration-200 group"
          >
            <Phone size={14} />
            Kostenlose Beratung sichern
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
