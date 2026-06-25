'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PROBLEMS = [
  {
    label: 'Großraumbüro',
    stat: '–66 %',
    statLabel: 'weniger Konzentration',
    text: 'Ab 55 Dezibel sinkt die kognitive Leistungsfähigkeit messbar. Die meisten gewöhnen sich daran – und merken erst im Vergleich, wie viel Energie der Lärm sie jeden Tag kostet.',
  },
  {
    label: 'Restaurant & Gastronomie',
    stat: '–23 %',
    statLabel: 'weniger Umsatz',
    text: 'Zu laute Restaurants verlieren Gäste still und ohne Kündigung. Wer sich bei der Unterhaltung anstrengen muss, kommt einfach nicht wieder.',
  },
  {
    label: 'Konferenzraum',
    stat: '40 %',
    statLabel: 'mehr Missverständnisse',
    text: 'Wer im Meeting dreimal nachfragen muss, verliert den Faden. Schlechte Sprachverständlichkeit kostet Entscheidungen – und hinterlässt den falschen Eindruck beim Kunden.',
  },
]

export default function ProblemPain() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#F2EFE9] section-padding">
      <div className="container-wide">
        <div className="mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="divider" />
            <span className="section-label">Das Problem</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display), serif' }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#1C1917] max-w-2xl"
          >
            Lärm kostet Konzentration.<br />Hall kostet Aufträge.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#E2DDD6]">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="bg-[#F2EFE9] p-8 lg:p-10"
            >
              <p className="section-label mb-6">{p.label}</p>
              <p
                style={{ fontFamily: 'var(--font-display), serif' }}
                className="text-5xl font-light text-[#B8955A] mb-1"
              >
                {p.stat}
              </p>
              <p className="text-xs text-[#A8A29E] uppercase tracking-wide mb-5">{p.statLabel}</p>
              <p className="text-[#6B6560] text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
