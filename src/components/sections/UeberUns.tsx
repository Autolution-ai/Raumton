'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { fadeUp, fadeLeft, staggerContainer, viewportOptions } from '@/lib/animations'

const ZAHLEN = [
  { wert: 20, suffix: '+', label: 'Jahre Erfahrung' },
  { wert: 1500, suffix: '+', label: 'Zufriedene Kunden' },
  { wert: 300, suffix: '+', label: 'Farben & Texturen' },
  { wert: 3, suffix: ' Wochen', label: 'Lieferzeit' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function UeberUns() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeLeft} className="relative">
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1000&q=80" alt="Manufaktur und Handwerk bei raumton in Berlin-Schöneberg" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#C8A96E] text-white p-6 text-center">
              <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>Berlin</div>
              <div className="text-xs font-medium tracking-widest uppercase mt-1">Schöneberg</div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer}>
            <motion.span variants={fadeUp} className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Über raumton</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Berliner Manufaktur.{' '}<span className="text-[#C8A96E]">Echtes Handwerk.</span></motion.h2>
            <motion.p variants={fadeUp} className="text-[#606060] leading-relaxed mb-4 text-sm">Ulli Müller gründete raumton 2006 als Audiotechniker und Studiobauer – mit dem Gedanken, dass gute Akustik nicht nur in Rundfunkhäusern und Tonstudios funktionieren muss.</motion.p>
            <motion.p variants={fadeUp} className="text-[#606060] leading-relaxed mb-8 text-sm">Seit 2022 führt Leo Ripper das Unternehmen in zweiter Generation. Neue Energie – aber dieselbe Überzeugung: Akustik, die funktioniert, und Lösungen, die wirklich zum Raum passen.</motion.p>
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-6 mb-8">
              {ZAHLEN.map((z) => (
                <motion.div key={z.label} variants={fadeUp} className="border-t border-[#E5E2DC] pt-4">
                  <div className="text-3xl font-bold text-[#C8A96E] mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}><AnimatedCounter target={z.wert} suffix={z.suffix} /></div>
                  <div className="text-[#888] text-sm">{z.label}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="/ueber-uns" className="inline-flex items-center gap-2 text-sm text-[#C8A96E] font-medium hover:gap-3 transition-all">Unser Team kennenlernen <ArrowRight size={16} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}