'use client'

import { motion } from 'framer-motion'
import { KUNDEN_LOGOS } from '@/lib/constants'
import { fadeUp, viewportOptions } from '@/lib/animations'

export default function SocialProofStrip() {
  // Zweimal hintereinander für den nahtlosen Endlos-Marquee.
  const doubled = [...KUNDEN_LOGOS, ...KUNDEN_LOGOS]

  return (
    <section className="py-14 border-y border-[#E2DDD6] bg-white overflow-hidden">
      <div className="container-wide mb-10">
        <motion.p initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="text-center text-xs text-[#A8A29E] tracking-widest uppercase">
          Vertrauen von über 1.500 Kunden, darunter:
        </motion.p>
      </div>
      <div className="relative flex overflow-hidden">
        {/* sanfte Ränder links/rechts */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex animate-marquee items-center">
          {doubled.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex items-center justify-center px-10 flex-shrink-0 h-12">
              {logo.file ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo.file}
                  alt={logo.name}
                  className="h-9 w-auto max-w-[160px] object-contain opacity-90 transition-opacity duration-500 hover:opacity-100"
                  loading="lazy"
                  draggable={false}
                />
              ) : (
                <span
                  className="text-base font-semibold tracking-wide text-[#1B2A4A]/80 hover:text-[#1B2A4A] transition-colors duration-500 whitespace-nowrap select-none"
                  style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.02em' }}
                >
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
