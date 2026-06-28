'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check, ArrowRight, Phone } from 'lucide-react'
import { fadeUp, fadeLeft, staggerContainer, viewportOptions } from '@/lib/animations'

const VORTEILE = [
  '15+ Jahre Erfahrung, über 1.500 zufriedene Kunden',
  'Kostenlose Erstberatung, auf Wunsch bei Ihnen vor Ort',
  'Alles aus einer Hand: Planung, Fertigung & Montage',
  'Maßgefertigt auf den Millimeter für Ihre Räume',
  'Über 300 Farben & Texturen, passend zu Ihrem Design',
  'Eigene Manufaktur in Berlin-Schöneberg',
  'Mineralfaserfrei & 100 % recyclingfähige Materialien',
  'Festpreis & Termintreue, von der Anfrage bis zur Montage',
]

export default function Willkommen() {
  return (
    <section className="section-padding bg-[#F9F7F4]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bild, persönlicher Bezug */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeLeft}
            className="relative order-1"
          >
            <div className="relative h-[440px] lg:h-[560px] overflow-hidden rounded-sm">
              <Image
                src="/Raumton-Inhaber.webp"
                alt="Ulli Müller und Leo Ripper, die Inhaber von raumton"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#C8A96E] text-white px-6 py-4 text-center shadow-lg">
              <div className="text-xl font-bold leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Seit 2006
              </div>
              <div className="text-[11px] font-medium tracking-widest uppercase mt-1">
                Familienbetrieb · Berlin
              </div>
            </div>
          </motion.div>

          {/* Text + Vorteile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
            className="order-2"
          >
            <motion.span variants={fadeUp} className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
              Willkommen bei raumton
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl text-[#1A1A1A] leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Ihr Raum kann mehr.{' '}
              <span className="text-[#C8A96E]">Wir machen ihn leise.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#555] leading-relaxed mb-4">
              Lärm und Hall kosten jeden Tag Konzentration, Umsatz und Wohlbefinden, meist,
              ohne dass es jemand bewusst bemerkt. Genau hier setzen wir an: Als Berliner
              Manufaktur planen, fertigen und montieren wir Schallabsorber, die wirken und
              dabei zu Ihrem Raum passen.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] leading-relaxed mb-8">
              Ein Ansprechpartner, ein Festpreis, ein Team, von der ersten Messung bis zur
              fertigen Montage. So einfach kann gute Akustik sein.
            </motion.p>

            {/* Ihre Vorteile */}
            <motion.ul variants={staggerContainer} className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-9">
              {VORTEILE.map((vorteil) => (
                <motion.li key={vorteil} variants={fadeUp} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#C8A96E]/15 flex items-center justify-center">
                    <Check size={12} className="text-[#C8A96E]" strokeWidth={3} />
                  </span>
                  <span className="text-[#333] text-sm leading-snug">{vorteil}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#anfrage"
                className="inline-flex items-center justify-center gap-2 bg-[#C8A96E] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#B8955A]"
              >
                Kostenlose Beratung anfragen
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+493070509511"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#C8A96E] transition-colors"
              >
                <Phone size={15} className="text-[#C8A96E]" />
                030 / 70 50 95 11
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
