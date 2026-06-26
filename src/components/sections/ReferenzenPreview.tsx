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
    <section className="section-padding bg-[#F9F7F4]">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div variants={fadeUp}>
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Referenzprojekte</span>
            <h2 className="text-4xl sm:text-5xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Was raumton{' '}<span className="text-[#C8A96E]">messbar verändert.</span></h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link href="/referenzen" className="flex items-center gap-2 text-sm text-[#888] hover:text-[#C8A96E] transition-colors group">
              Alle Referenzen <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED.map((ref) => (
            <motion.div key={ref.id} variants={fadeUp} className="group border border-[#EBEBEB] hover:border-[#C8A96E]/40 hover:shadow-md transition-all duration-300 overflow-hidden bg-white">
              <div className="relative h-56 overflow-hidden bg-[#F9F7F4]">
                <Image src={ref.bild} alt={ref.kunde} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[#C8A96E] text-xs tracking-widest uppercase font-medium">{ref.branche}</div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-[#1A1A1A] font-semibold mb-2">{ref.kunde}</h3>
                <p className="text-[#888] text-sm leading-relaxed mb-4">{ref.beschreibung}</p>
                <Link href="/referenzen" className="text-sm text-[#C8A96E] flex items-center gap-1 group-hover:gap-2 transition-all font-medium">Details ansehen <ArrowRight size={12} /></Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="text-center mt-14">
          <Link href="/referenzen" className="inline-flex items-center gap-2 px-8 py-3 border border-[#DDDAD4] text-[#606060] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-200 text-sm">
            Alle {REFERENZEN.length} Referenzen ansehen <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}