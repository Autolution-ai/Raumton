'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href="#anfrage"
            className="flex items-center gap-2.5 px-5 py-3.5 bg-[#1C1917] text-white text-sm font-medium shadow-xl hover:bg-[#B8955A] transition-colors duration-200 group"
          >
            Beratung anfragen
            <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
