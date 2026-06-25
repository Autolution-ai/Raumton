'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const PROZESS = [
  { nr: '01', title: 'Kostenlose Beratung', text: 'Telefonisch, per Video oder direkt im Showroom. Wir hören zu, bevor wir irgendetwas empfehlen.' },
  { nr: '02', title: 'Messung & Analyse', text: 'Wir messen die Akustik Ihres Raumes und zeigen, was danach realistisch besser wird.' },
  { nr: '03', title: 'Planung & Design', text: 'Individuelle Lösung mit 3D-Darstellung. Farben und Materialien passend zu Ihrem Raum.' },
  { nr: '04', title: 'Fertigung & Montage', text: 'Gefertigt in Berlin-Schöneberg. Montage in der Regel an einem Tag, blitzsauber und termingerecht.' },
]

const SERVICES = [
  {
    label: 'Büro & Großraumbüro',
    text: 'Wir messen, planen und optimieren Ihre Büroakustik. Damit Mitarbeiter sich konzentrieren können und Meetings tatsächlich produktiv sind.',
    href: '/leistungen/buero',
    bild: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80',
    bildAlt: 'Modernes Büro mit guter Raumakustik',
  },
  {
    label: 'Gastronomie',
    text: 'Gäste bleiben länger, wenn sie sich unterhalten können. Wir integrieren Absorber so, dass die Lösung unsichtbar bleibt.',
    href: '/leistungen/gastro',
    bild: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80',
    bildAlt: 'Restaurant mit angenehmer Atmosphäre',
  },
  {
    label: 'Bildung & Kita',
    text: 'Kinder werden nicht ruhiger befohlen. Aber wenn der Raum es zulässt, werden sie es von selbst.',
    href: '/leistungen/bildung',
    bild: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80',
    bildAlt: 'Helle Kita mit guter Raumakustik',
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
            Von der ersten Beratung bis zur fertigen Montage begleiten wir jedes Projekt persönlich, in Berlin und bundesweit.
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
              className="h-full"
            >
              <Link
                href={s.href}
                className="group flex flex-col bg-white border border-[#E2DDD6] hover:border-[#B8955A] transition-colors duration-200 overflow-hidden h-full"
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={s.bild}
                    alt={s.bildAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p
                    style={{ fontFamily: 'var(--font-display), serif' }}
                    className="text-2xl font-light text-[#1C1917] mb-4 group-hover:text-[#B8955A] transition-colors"
                  >
                    {s.label}
                  </p>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-6 flex-1">{s.text}</p>
                  <span className="flex items-center gap-2 text-[#B8955A] text-sm font-medium mt-auto">
                    Mehr erfahren <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
