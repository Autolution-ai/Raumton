'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const STATS = [
  { label: 'Jahre Erfahrung', value: 20, suffix: '+' },
  { label: 'Zufriedene Kunden', value: 1500, suffix: '+' },
  { label: 'Farben & Texturen', value: 300, suffix: '+' },
  { label: 'Wochen Lieferzeit', value: 3, suffix: '' },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const display = useTransform(motionVal, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView) {
      animate(motionVal, value, { duration: 1.8, ease: 'easeOut' })
    }
  }, [inView, value, motionVal])

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
    </motion.span>
  )
}

export default function UeberUns() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#F2EFE9] section-padding">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[520px] overflow-hidden"
          >
            <Image
              src="https://raw.githubusercontent.com/Autolution-ai/Raumton/main/Raumton-Inhaber.webp"
              alt="Ulli Müller und Leo Ripper – Gründer und Geschäftsführer von raumton in der Berliner Werkstatt"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="divider" />
              <span className="section-label">Über raumton</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2rem,3.5vw,3rem)] font-light text-[#1C1917] mb-6"
            >
              Berliner Handwerk. Zweite Generation.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B6560] text-sm leading-relaxed space-y-4 mb-8"
            >
              <p>
                raumton wurde 2006 von Ulli Müller gegründet — Audiotechniker und Studiobauer mit dem Ziel, professionelle Raumakustik aus dem Tonstudio in Büros, Restaurants und Bildungseinrichtungen zu bringen.
              </p>
              <p>
                Seit 2022 führt Leo Ripper das Unternehmen in zweiter Generation. Die Fertigung liegt noch immer in Berlin-Schöneberg. Jedes Produkt wird nach Maß gefertigt — kein Katalog, kein Kompromiss.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 gap-px bg-[#E2DDD6] mb-8"
            >
              {STATS.map((s) => (
                <div key={s.label} className="bg-[#F2EFE9] p-5">
                  <p
                    style={{ fontFamily: 'var(--font-display), serif' }}
                    className="text-[2.2rem] font-light text-[#B8955A] leading-none mb-1"
                  >
                    <AnimatedNumber value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-[#A8A29E] text-xs tracking-wide">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 text-sm text-[#B8955A] hover:gap-3 transition-all font-medium"
              >
                Unser Team kennenlernen <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
