'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { fadeUp, fadeRight, staggerContainer, viewportOptions } from '@/lib/animations'

export default function ShowroomCTA() {
  return (
    <section className="section-padding bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block"
            >
              Showroom
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl text-white mb-6"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Akustik erleben.
              <span className="text-gradient-gold"> Berlin-Schoeneberg.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#A0A0A0] leading-relaxed mb-10">
              Farben und Materialien ueberzeugen erst, wenn man sie anfasst. Im Showroom
              liegen alle unsere Musterplatten aus. Ueber 300 Farben und Texturen.
              Kommen Sie vorbei oder rufen Sie kurz an. Wir sind Mo bis Fr von 9 bis 18 Uhr da.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-4 mb-10">
              {[
                { icon: MapPin, text: 'Berlin-Schoeneberg (genaue Adresse auf Anfrage)' },
                { icon: Clock, text: 'Mo bis Fr 9 bis 18 Uhr | Termine nach Vereinbarung' },
                { icon: Phone, text: '030 / 70 50 95 11', href: 'tel:+493070509511' },
                { icon: Mail, text: 'info@raumton.com', href: 'mailto:info@raumton.com' },
              ].map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-3 text-[#A0A0A0] group">
                    <Icon size={16} className="text-[#C8A96E] flex-shrink-0" />
                    <span className="text-sm group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                )
                return (
                  <motion.div key={item.text} variants={fadeUp}>
                    {item.href ? (
                      <a href={item.href}>{content}</a>
                    ) : (
                      content
                    )}
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="mailto:info@raumton.com?subject=Showroom-Termin"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold text-sm hover:bg-[#D9BE8C] transition-colors"
              >
                Termin vereinbaren
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeRight}
            className="relative h-80 lg:h-[500px] bg-[#141414] border border-[#1A1A1A] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9725.27!2d13.3543!3d52.4859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850c53e45e9c7%3A0x0!2sBerlin-Sch%C3%B6neberg%2C+Berlin!5e0!3m2!1sde!2sde!4v1"
              className="w-full h-full grayscale opacity-70"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="raumton Showroom Berlin-Schoeneberg"
            />
            <div className="absolute inset-0 pointer-events-none border border-[#1A1A1A]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
