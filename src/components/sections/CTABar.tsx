'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Phone } from 'lucide-react'
import { fadeUp, viewportOptions } from '@/lib/animations'

const trustBadges = ['✓ 1.500+ Projekte', '✓ Kostenlos & unverbindlich', '✓ Antwort in 1 Werktag']

export default function CTABar() {
  return (
    <section className="bg-[#C8A96E] py-14 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 text-center md:text-left">
          <motion.div className="flex flex-col items-center md:items-start gap-4" initial="hidden" whileInView="visible" viewport={viewportOptions} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}>
            <motion.span variants={fadeUp} className="uppercase tracking-widest text-white/70 text-xs font-medium">Kostenlose Erstberatung</motion.span>
            <motion.h2 variants={fadeUp} className="font-['Playfair_Display'] text-3xl sm:text-4xl text-white font-bold leading-tight">Wie klingt Ihr Raum?</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-sm sm:text-base max-w-md">Wir melden uns innerhalb von 1 Werktag. Kein Verkaufsanruf, echte Beratung.</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center md:justify-start gap-6 mt-1">
              {trustBadges.map((badge) => <span key={badge} className="text-white/80 text-sm">{badge}</span>)}
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col items-center md:items-end gap-3 shrink-0" initial="hidden" whileInView="visible" viewport={viewportOptions} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}>
            <motion.a variants={fadeUp} href="#anfrage" className="inline-flex items-center gap-2 bg-white text-[#C8A96E] font-semibold px-8 py-4 rounded-sm hover:bg-white/90 transition-colors duration-200 whitespace-nowrap">
              Jetzt Beratung anfragen <ChevronRight className="w-4 h-4" />
            </motion.a>
            <motion.a variants={fadeUp} href="tel:+493070509511" className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors duration-200">
              <Phone className="w-4 h-4" /> 030 / 70 50 95 11
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}