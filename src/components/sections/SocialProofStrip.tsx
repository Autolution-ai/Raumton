'use client'

import { motion } from 'framer-motion'
import { KUNDEN_LOGOS } from '@/lib/constants'
import { fadeUp, viewportOptions } from '@/lib/animations'

const LogoItem = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center px-10 py-2 flex-shrink-0">
    <span className="text-[#606060] text-sm font-medium tracking-wider uppercase whitespace-nowrap hover:text-[#A0A0A0] transition-colors">
      {name}
    </span>
  </div>
)

export default function SocialProofStrip() {
  const doubled = [...KUNDEN_LOGOS, ...KUNDEN_LOGOS]

  return (
    <section className="py-16 border-y border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden">
      <div className="container-wide mb-8">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="text-center text-sm text-[#606060] tracking-widest uppercase"
        >
          Vertrauen von über 1.500 Kunden – darunter:
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee">
          {doubled.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
