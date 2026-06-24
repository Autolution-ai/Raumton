'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'
import { REFERENZEN } from '@/lib/constants'

const FEATURED = REFERENZEN.slice(0, 3)

export default function ReferenzenPreview() {
  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <motion.div variants={fadeUp}>
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
              Referenzprojekte
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-white"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Was raumton{' '}
              <span className="text-gradient-gold">messbar verändert.</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link
              href="/referenzen"
              className="flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#C8A96E] transition-colors group"
            >
              Alle Referenzen
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {FEATURED.map((ref) => (
            <motion.div
              key={ref.id}
              variants={fadeUp}
              className="group border border-[#1A1A1A] hover:border-[#C8A96E]/30 transition-colors duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[#141414]">
                <Image
                  src={ref.bild}
                  alt={ref.kunde}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Branche Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A0A0A]/80 text-[#C8A96E] text-xs tracking-widest uppercase">
                  {ref.branche}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#141414]">
                <h3 className="text-white font-semibold mb-2">{ref.kunde}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
                  {ref.beschreibung}
                </p>
                <Link
                  href={`/referenzen`}
                  className="text-sm text-[#C8A96E] flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Details ansehen <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="text-center mt-14"
        >
          <Link
            href="/referenzen"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#252525] text-white hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-200 text-sm"
          >
            Alle {REFERENZEN.length} Referenzen ansehen
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
