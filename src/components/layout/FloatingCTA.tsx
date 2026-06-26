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

  const handleClick = () => {
    const el = document.getElementById('anfrage')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#C8A96E] text-[#0A0A0A] px-5 py-3 font-semibold text-sm hover:bg-[#D9BE8C] transition-colors shadow-lg rounded-sm"
        >
          <Phone className="w-4 h-4" />
          Kostenlose Beratung sichern
        </motion.button>
      )}
    </AnimatePresence>
  )
}