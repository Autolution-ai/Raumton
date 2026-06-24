'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const PROJEKTE = [
  {
    kunde: 'Brasserie Colette Tim Raue',
    branche: 'Gastronomie',
    beschreibung: 'Wandabsorber und Deckensegel für das Berliner Restaurant — weniger Lärm, mehr Genuss.',
    bild: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',
  },
  {
    kunde: 'Auswärtiges Amt Berlin',
    branche: 'Öffentlich',
    beschreibung: 'Akustikoptimierung für Konferenz- und Besprechungsräume in der Bundesbehörde.',
    bild: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80',
  },
  {
    kunde: 'RepRisk Germany GmbH',
    branche: 'Büro',
    beschreibung: 'Großraumbüro in Berlin — maßgefertigte Decken- und Wandabsorber in Corporate-Farben.',
    bild: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80',
  },
]

export default function ReferenzenPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-white section-padding">
      <div className="container-wide" ref={ref}>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="divider" />
              <span className="section-label">Referenzen</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#1C1917]"
            >
              Projekte, die wirken.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/referenzen"
              className="flex items-center gap-2 text-sm text-[#B8955A] hover:gap-3 transition-all font-medium"
            >
              Alle Referenzen <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJEKTE.map((p, i) => (
            <motion.div
              key={p.kunde}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="group"
            >
              <div className="relative h-56 mb-5 overflow-hidden bg-[#F2EFE9]">
                <Image
                  src={p.bild}
                  alt={p.kunde}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-[#6B6560] text-xs px-3 py-1 tracking-wide">{p.branche}</span>
                </div>
              </div>
              <p className="text-[#A8A29E] text-xs tracking-widest uppercase mb-2">{p.kunde}</p>
              <p className="text-[#1C1917] text-sm leading-relaxed">{p.beschreibung}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
