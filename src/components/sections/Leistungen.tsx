'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const PROZESS = [
  { nr: '01', title: 'Kostenlose Beratung', text: 'Persönliches Gespräch vor Ort, Raumaufmaß und erste akustische Einschätzung.' },
  { nr: '02', title: 'Planung & Design', text: 'Individuelle Konzeption: Produktauswahl, Farbgestaltung, 3D-Darstellung.' },
  { nr: '03', title: 'Fertigung in Berlin', text: 'Eigene Produktion in Schöneberg — über 300 Farben und Texturen.' },
  { nr: '04', title: 'Lieferung & Montage', text: 'Professionelle Montage durch unser Team. Fertig in ca. 3 Wochen.' },
]

const SERVICES = [
  {
    label: 'Büro & Großraumbüro',
    text: 'Von Einzelbüro bis Großraum — wir sorgen für Konzentration und angenehme Gesprächsatmosphäre.',
    href: '/leistungen/buero',
  },
  {
    label: 'Gastronomie',
    text: 'Restaurants, Cafés und Bars mit angenehmer Lautstärke — Gäste bleiben länger, kommen öfter.',
    href: '/leistungen/gastro',
  },
  {
    label: 'Bildung & Kita',
    text: 'Bessere Sprachverständlichkeit in Klassenräumen und Kitas — für Kinder und Lehrkräfte.',
    href: '/leistungen/bildung',
  },
]

export default function Leistungen() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#FAFAF8] section-padding">
      <div className="container-wide" ref={ref}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 pb-12 border-b border-[#E2DDD6]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="divider" />
              <span className="section-label">Leistungen</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#1C1917]"
            >
              Alles aus einer Hand.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B6560] max-w-sm text-sm leading-relaxed"
          >
            Von der ersten Messung bis zur fertigen Montage begleiten wir jedes Projekt persönlich.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD6] mb-20">
          {PROZESS.map((step, i) => (
            <motion.div
              key={step.nr}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-[#FAFAF8] p-8"
            >
              <p className="text-[#B8955A] text-xs tracking-widest mb-4 font-medium">{step.nr}</p>
              <p className="text-[#1C1917] font-medium text-base mb-3">{step.title}</p>
              <p className="text-[#6B6560] text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <Link href={s.href} className="group block bg-white border border-[#E2DDD6] p-8 hover:border-[#B8955A] transition-colors duration-200">
                <p
                  style={{ fontFamily: 'var(--font-display), serif' }}
                  className="text-2xl font-light text-[#1C1917] mb-4 group-hover:text-[#B8955A] transition-colors"
                >
                  {s.label}
                </p>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-6">{s.text}</p>
                <span className="flex items-center gap-2 text-[#B8955A] text-sm font-medium">
                  Mehr erfahren <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
