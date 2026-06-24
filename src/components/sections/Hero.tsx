'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight } from 'lucide-react'

const WORDS = ['Berlin', 'hört', 'besser.']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(200,169,110,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(200,169,110,0.04),transparent)]" />
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C8A96E]/40 to-transparent hidden xl:block" />

      <div className="container-wide relative z-10 pt-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-sm font-medium tracking-widest uppercase">
              Berliner Manufaktur seit 2006
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[1.05] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block text-gradient-gold"
            >
              Seit 2006.
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="text-xl sm:text-2xl text-[#A0A0A0] max-w-2xl leading-relaxed mb-12"
          >
            Individuelle Schallabsorber – geplant, gefertigt und montiert von raumton
            in <span className="text-white">Berlin-Schöneberg</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#anfrage"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold text-base hover:bg-[#D9BE8C] transition-colors duration-200"
            >
              Jetzt kostenlose Beratung anfragen
              <ChevronRight size={18} />
            </a>
            <a
              href="/referenzen"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#252525] text-white font-medium text-base hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors duration-200"
            >
              Referenzen ansehen
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap items-center gap-6 text-sm text-[#606060]"
          >
            {[
              '1.500+ Projekte',
              '20 Jahre Erfahrung',
              'Made in Berlin',
              'Kostenlose Beratung',
            ].map((badge, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#C8A96E]" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#606060]"
      >
        <span className="text-xs tracking-widest uppercase">Entdecken</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
