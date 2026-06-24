'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    zitat: 'Die Akustik in unserem Konferenzraum hat sich nach der raumton-Lösung grundlegend verändert. Meetings sind jetzt entspannter und effizienter — das Team ist begeistert.',
    name: 'Sandra K.',
    position: 'Office Managerin',
    firma: 'S-Kreditpartner GmbH',
  },
  {
    zitat: 'Wir haben den Showroom besucht und sofort verstanden, was raumton meint. Die Produktqualität ist beeindruckend, die Beratung war ehrlich und unkompliziert.',
    name: 'Thomas B.',
    position: 'Inhaber',
    firma: 'Engelbecken Restaurant Berlin',
  },
  {
    zitat: 'Unsere Kita war vorher extrem laut — ein echtes Problem für Kinder und Erzieherinnen. raumton hat eine Lösung entwickelt, die funktioniert und gut aussieht.',
    name: 'Petra M.',
    position: 'Leiterin',
    firma: 'Kita Jeverstraße Berlin',
  },
  {
    zitat: 'Professionelle Abwicklung von der Beratung bis zur Montage. Die Lieferzeit von drei Wochen wurde eingehalten. Wir können raumton uneingeschränkt empfehlen.',
    name: 'Michael R.',
    position: 'Facility Manager',
    firma: 'Vattenfall GmbH',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)

  return (
    <section className="bg-white section-padding">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-14"
        >
          <div className="divider" />
          <span className="section-label">Kundenstimmen</span>
        </motion.div>

        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p
                style={{ fontFamily: 'var(--font-display), serif' }}
                className="text-[clamp(1.4rem,3vw,2rem)] font-light text-[#1C1917] leading-[1.4] mb-8"
              >
                „{TESTIMONIALS[current].zitat}“
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center text-[#B8955A] font-medium text-sm">
                  {TESTIMONIALS[current].name[0]}
                </div>
                <div>
                  <p className="text-[#1C1917] text-sm font-medium">{TESTIMONIALS[current].name}</p>
                  <p className="text-[#A8A29E] text-xs">{TESTIMONIALS[current].position} · {TESTIMONIALS[current].firma}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-10">
            <button onClick={prev} className="w-9 h-9 border border-[#E2DDD6] flex items-center justify-center text-[#6B6560] hover:border-[#B8955A] hover:text-[#B8955A] transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-px w-8 transition-colors duration-200 ${i === current ? 'bg-[#B8955A]' : 'bg-[#E2DDD6]'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 border border-[#E2DDD6] flex items-center justify-center text-[#6B6560] hover:border-[#B8955A] hover:text-[#B8955A] transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
