'use client'

import { motion } from 'framer-motion'
import { Building2, Utensils, Mic2 } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'

const PROBLEMS = [
  { icon: Building2, title: 'Großraumbüro', stat: '>55 dB', beschreibung: 'Ab diesem Lärmpegel sinkt die Konzentration messbar. Die meisten Mitarbeiter gewöhnen sich daran – und merken erst im Vergleich, wie viel Energie der Lärm sie jeden Tag kostet.' },
  { icon: Utensils, title: 'Restaurant & Gastronomie', stat: '4× mehr Stress', beschreibung: 'Zu laute Restaurants sorgen für kürzere Aufenthalte und schlechtere Bewertungen. Gäste kommen nicht wieder, wenn die Unterhaltung zur Anstrengung wird.' },
  { icon: Mic2, title: 'Konferenzraum', stat: '-40% Verständnis', beschreibung: 'Wer im Meeting dreimal nachfragen muss, verliert den Faden. Schlechte Sprachverständlichkeit kostet Zeit – und hinterlässt den falschen Eindruck beim Kunden.' },
]

export default function ProblemPain() {
  return (
    <section className="section-padding bg-[#F9F7F4]">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="max-w-xl mb-16">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Das Problem</span>
          <h2 className="text-4xl sm:text-5xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Lärm kostet Konzentration.{' '}<span className="text-[#C8A96E]">Hall kostet Aufträge.</span>
          </h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} variants={fadeUp} className="border-t border-[#C8A96E] pt-6">
                <div className="w-10 h-10 border border-[#E5E2DC] bg-white flex items-center justify-center mb-5"><Icon size={18} className="text-[#C8A96E]" /></div>
                <div className="text-3xl font-bold text-[#C8A96E] mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{item.stat}</div>
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{item.beschreibung}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}