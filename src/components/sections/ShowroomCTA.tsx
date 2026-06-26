'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { fadeUp, fadeRight, staggerContainer, viewportOptions } from '@/lib/animations'

export default function ShowroomCTA() {
  return (
    <section className="section-padding bg-[#F9F7F4] border-t border-[#EBEBEB]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer}>
            <motion.span variants={fadeUp} className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Showroom</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Erleben Sie Akustik live –{' '}<span className="text-[#C8A96E]">in Berlin-Schöneberg.</span></motion.h2>
            <motion.p variants={fadeUp} className="text-[#606060] leading-relaxed mb-10 text-sm">Farben und Materialien überzeugen erst, wenn man sie anfässt. Im Showroom liegen alle unsere Musterplatten aus – über 300 Farben und Texturen.</motion.p>
            <motion.div variants={staggerContainer} className="space-y-4 mb-10">
              {[
                { icon: MapPin, text: 'Berlin-Schöneberg (genaue Adresse auf Anfrage)' },
                { icon: Clock, text: 'Mo–Fr 9–18 Uhr | Termine nach Vereinbarung' },
                { icon: Phone, text: '030 / 70 50 95 11', href: 'tel:+493070509511' },
                { icon: Mail, text: 'info@raumton.com', href: 'mailto:info@raumton.com' },
              ].map((item) => {
                const Icon = item.icon
                const content = <div className="flex items-center gap-3 text-[#888] group"><Icon size={16} className="text-[#C8A96E] flex-shrink-0" /><span className="text-sm group-hover:text-[#1A1A1A] transition-colors">{item.text}</span></div>
                return <motion.div key={item.text} variants={fadeUp}>{item.href ? <a href={item.href}>{content}</a> : content}</motion.div>
              })}
            </motion.div>
            <motion.div variants={fadeUp}>
              <a href="mailto:info@raumton.com?subject=Showroom-Termin" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-white font-semibold text-sm hover:bg-[#B8955A] transition-colors">Termin vereinbaren</a>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeRight} className="relative h-80 lg:h-[500px] border border-[#E5E2DC] overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9725.27!2d13.3543!3d52.4859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850c53e45e9c7%3A0x0!2sBerlin-Sch%C3%B6neberg%2C+Berlin!5e0!3m2!1sde!2sde!4v1" className="w-full h-full" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="raumton Showroom Berlin-Schöneberg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}