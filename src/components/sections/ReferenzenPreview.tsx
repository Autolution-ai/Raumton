'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'
import { REFERENZEN } from '@/lib/constants'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function ReferenzenPreview() {
  return (
    <section className="section-padding bg-[#F9F7F4]">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="max-w-2xl mb-14">
          <motion.span variants={fadeUp} className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Referenzprojekte</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Was wir für unsere Kunden{' '}<span className="text-[#C8A96E]">erreicht haben.</span>
          </motion.h2>
        </motion.div>

        {/* Alle Projekte auf einen Blick, keine Klickstrecke */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REFERENZEN.map((ref) => {
            // `image: null` -> Platzhalter. Foto-Pfad später in constants.ts ergänzen.
            const image = (ref as { image?: string | null }).image ?? null
            return (
              <motion.div key={ref.id} variants={fadeUp} className="overflow-hidden border border-[#EBEBEB] bg-white">
                <div className="relative h-52 w-full overflow-hidden">
                  {image ? (
                    <Image src={image} alt={ref.kunde} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  ) : (
                    <ImagePlaceholder />
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[#C8A96E] text-xs tracking-widest uppercase font-medium">{ref.branche}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#1A1A1A] font-semibold mb-1">{ref.kunde}</h3>
                  <p className="text-[#B5AFA5] text-xs uppercase tracking-wider mb-3">{ref.ort}</p>
                  <p className="text-[#888] text-sm leading-relaxed">{ref.beschreibung}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Hinweis + CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-[#E2DDD6] pt-8"
        >
          <p className="text-[#AAA] text-sm">
            Ausführliche Case Studies mit Vorher-/Nachher-Fotos folgen in Kürze.
          </p>
          <a
            href="#anfrage"
            className="inline-flex items-center gap-2 bg-[#C8A96E] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#B8955A]"
          >
            Werden Sie unsere nächste Referenz
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
