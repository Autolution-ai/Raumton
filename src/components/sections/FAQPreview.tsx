'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Plus, Minus, ArrowRight } from 'lucide-react'

const FAQS = [
  { f: 'Wie lange dauert ein Projekt von Beratung bis Montage?', a: 'In der Regel 3–5 Wochen: ca. 1 Woche für Beratung und Planung, dann 3 Wochen Fertigungs- und Lieferzeit, plus Montagetermin nach Absprache.' },
  { f: 'Was kostet eine Raumakustik-Lösung ungefähr?', a: 'Das hängt stark von Raumgröße, Produkt und Umfang ab. Ein erstes Angebot erstellen wir kostenlos und unverbindlich nach dem Beratungsgespräch.' },
  { f: 'Kommen Sie auch außerhalb von Berlin?', a: 'Ja, wir arbeiten deutschlandweit. Außerhalb Berlins können Anfahrtskosten anfallen — sprechen Sie uns einfach an.' },
  { f: 'Sind Ihre Materialien nachhaltig?', a: 'Wir verwenden keine mineralfaserhaltigen Materialien. Alle unsere Produkte sind 100 % recycelbar. Kurze Lieferwege durch eigene Berliner Produktion.' },
  { f: 'Kann ich Muster vor dem Kauf bestellen?', a: 'Ja. Wir empfehlen einen Besuch in unserem Showroom in Berlin-Schöneberg, wo Sie Qualität und Farben direkt erleben können. Auf Anfrage senden wir auch Muster zu.' },
]

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(null)
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
              <span className="section-label">Häufige Fragen</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#1C1917]"
            >
              Ihre Fragen. Unsere Antworten.
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            <Link href="/faq" className="flex items-center gap-2 text-sm text-[#B8955A] hover:gap-3 transition-all font-medium">
              Alle Fragen <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="divide-y divide-[#E2DDD6]">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="text-[#1C1917] text-sm font-medium group-hover:text-[#B8955A] transition-colors">
                  {faq.f}
                </span>
                <span className="text-[#B8955A] flex-shrink-0">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[#6B6560] text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
