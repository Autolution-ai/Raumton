'use client'

import { motion } from 'framer-motion'
import { ChevronRight, ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FAFAF8] flex items-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-[#E2DDD6] opacity-60" />
      </div>

      <div className="container-wide w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-72px)] py-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="divider" />
              <span className="section-label">Berliner Manufaktur seit 2006</span>
            </motion.div>

            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(3rem,6vw,5.5rem)] font-light text-[#1C1917] leading-[1.08] mb-7"
            >
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="block"
              >
                Berlin hört
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="block"
              >
                besser.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="block text-[#B8955A]"
              >
                einfach schön leise.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[#6B6560] text-lg leading-relaxed max-w-md mb-10"
            >
              raumton plant, fertigt und montiert individuelle Schallabsorber –
              direkt aus Berlin-Schöneberg, seit fast zwei Jahrzehnten.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <a
                href="#anfrage"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1C1917] text-white text-sm font-medium hover:bg-[#B8955A] transition-colors duration-200"
              >
                Kostenlose Beratung anfragen
                <ChevronRight size={16} />
              </a>
              <a
                href="/referenzen"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#E2DDD6] text-[#1C1917] text-sm font-medium hover:border-[#B8955A] hover:text-[#B8955A] transition-colors duration-200"
              >
                Referenzprojekte
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-wrap gap-x-7 gap-y-2"
            >
              {['1.500+ Projekte', '20 Jahre Erfahrung', 'Made in Berlin', 'Kostenlose Beratung'].map((t) => (
                <span key={t} className="text-sm text-[#A8A29E] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B8955A] inline-block" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[480px] lg:h-[580px] hidden lg:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85"
              alt="Modernes Büro mit exzellenter Raumakustik"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-5 shadow-sm">
              <p className="text-[#A8A29E] text-xs tracking-widest uppercase mb-1">Typische Verbesserung</p>
              <p className="text-[#1C1917] text-2xl font-light" style={{ fontFamily: 'var(--font-display), serif' }}>
                RT60: 1,8 s → 0,5 s
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#A8A29E]"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
