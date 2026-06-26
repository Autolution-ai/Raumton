'use client'

import { motion } from 'framer-motion'
import { KUNDEN_LOGOS } from '@/lib/constants'
import { fadeUp, viewportOptions } from '@/lib/animations'

export default function SocialProofStrip() {
  const doubled = [...KUNDEN_LOGOS, ...KUNDEN_LOGOS]

  return (
    <section className="py-14 border-y border-[#E2DDD6] bg-white overflow-hidden">
      <div className="container-wide mb-10">
        <motion.p initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="text-center text-xs text-[#A8A29E] tracking-widest uppercase">
          Vertrauen von über 1.500 Kunden – darunter:
        </motion.p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee">
          {doubled.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex items-center justify-center px-10 flex-shrink-0 h-14">
              <span className="text-sm font-semibold tracking-wide text-[#BDBDBD] hover:text-[#888] transition-colors duration-500 whitespace-nowrap select-none" style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.04em' }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}