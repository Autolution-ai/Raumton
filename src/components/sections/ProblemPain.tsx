'use client'

import { motion } from 'framer-motion'
import { Building2, Utensils, Mic2 } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'

const PROBLEMS = [
  {
    icon: Building2,
    title: 'Großraumbüro',
    stat: '>55 dB',
    beschreibung:
      'Ab diesem Lärmpegel sinkt die Mitarbeiterproduktivität messbar. Konzentration, Wohlbefinden und Mitarbeiterbindung leiden. Raumton optimiert Ihr Office dauerhaft.',
  },
  {
    icon: Utensils,
    title: 'Restaurant & Gastronomie',
    stat: '4× mehr Stress',
    beschreibung:
      'Zu laute Restaurants sorgen für kürzere Aufenthalte und schlechtere Bewertungen. Gäste kommen nicht wieder, wenn die Unterhaltung zur Anstrengung wird.',
  },
  {
    icon: Mic2,
    title: 'Konferenzraum',
    stat: '-40% Verständnis',
    beschreibung:
      'Schlechte Sprachverständlichkeit in Meetings kostet Zeit und Nerven. Schlechte Akustik bedeutet verpasste Informationen – und im schlimmsten Fall: verlorene Deals.',
  },
]

export default function ProblemPain() {
  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
            Das Problem
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-white max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Lärm kostet Konzentration.{' '}
            <span className="text-gradient-gold">Hall kostet Aufträge.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A]"
        >
          {PROBLEMS.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-[#0A0A0A] p-10 group hover:bg-[#141414] transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-[#252525] flex items-center justify-center mb-6 group-hover:border-[#C8A96E] transition-colors duration-300">
                  <Icon size={20} className="text-[#C8A96E]" />
                </div>
                <div className="text-3xl font-bold text-white mb-3 font-mono">
                  {item.stat}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                  {item.beschreibung}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
