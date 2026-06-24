'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Utensils, GraduationCap, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'
import { LEISTUNGEN, PROZESS_SCHRITTE } from '@/lib/constants'

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'building-2': Building2,
  utensils: Utensils,
  'graduation-cap': GraduationCap,
}

export default function Leistungen() {
  return (
    <section className="section-padding bg-[#0D0D0D]">
      <div className="container-wide">
        {/* Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="mb-20"
        >
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
            Unsere Leistungen
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-white max-w-2xl"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Alles aus einer Hand —{' '}
            <span className="text-gradient-gold">von der Messung bis zur Montage.</span>
          </h2>
        </motion.div>

        {/* Prozess */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A] mb-24"
        >
          {PROZESS_SCHRITTE.map((schritt, i) => (
            <motion.div
              key={schritt.nr}
              variants={fadeUp}
              className="bg-[#0D0D0D] p-8 relative"
            >
              <div className="text-5xl font-bold text-[#1E1E1E] mb-4 select-none">
                {schritt.nr}
              </div>
              <h3 className="text-white font-semibold mb-2">{schritt.title}</h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                {schritt.beschreibung}
              </p>
              {i < PROZESS_SCHRITTE.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 z-10">
                  <ArrowRight size={16} className="text-[#252525]" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Leistungskarten */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {LEISTUNGEN.map((leistung) => {
            const Icon = ICONS[leistung.icon]
            return (
              <motion.div key={leistung.slug} variants={fadeUp}>
                <Link
                  href={`/leistungen/${leistung.slug}`}
                  className="block p-8 border border-[#252525] hover:border-[#C8A96E]/40 bg-[#141414] hover:bg-[#171717] transition-all duration-300 group h-full"
                >
                  <div className="w-10 h-10 border border-[#252525] flex items-center justify-center mb-6 group-hover:border-[#C8A96E] transition-colors">
                    <Icon size={18} className="text-[#C8A96E]" />
                  </div>
                  <h3
                    className="text-xl text-white font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    {leistung.title}
                  </h3>
                  <p className="text-[#C8A96E] text-sm font-medium mb-3">
                    {leistung.headline}
                  </p>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
                    {leistung.beschreibung}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {leistung.punkte.map((punkt) => (
                      <li key={punkt} className="flex items-center gap-2 text-sm text-[#606060]">
                        <span className="w-1 h-1 rounded-full bg-[#C8A96E] flex-shrink-0" />
                        {punkt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm text-[#C8A96E] group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
