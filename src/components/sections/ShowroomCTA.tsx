'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ShowroomCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#F2EFE9] section-padding">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="divider" />
              <span className="section-label">Showroom</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2rem,3.5vw,3rem)] font-light text-[#1C1917] mb-5"
            >
              Erleben Sie Akustik live.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B6560] text-sm leading-relaxed mb-8"
            >
              In unserem Showroom in Berlin-Schöneberg können Sie Produktqualität,
              Farben und Texturen selbst erleben — bevor Sie sich entscheiden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-sm mb-8"
            >
              {[
                { icon: MapPin, text: 'Berlin-Schöneberg' },
                { icon: Clock, text: 'Mo–Fr, 9–18 Uhr · nach Terminvereinbarung' },
                { icon: Phone, text: '030 / 70 50 95 11' },
                { icon: Mail, text: 'info@raumton.com' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 text-[#6B6560]">
                  <Icon size={14} className="text-[#B8955A] flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="mailto:info@raumton.com?subject=Showroom-Termin"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] text-white text-sm hover:bg-[#B8955A] transition-colors"
              >
                Termin vereinbaren
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[380px] bg-[#E2DDD6] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5!2d13.354!3d52.486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI5JzA5LjYiTiAxM8KwMjEnMTQuNCJF!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="raumton GmbH Showroom Berlin-Schöneberg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
