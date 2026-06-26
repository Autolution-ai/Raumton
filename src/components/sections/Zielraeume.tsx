'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'

const rooms = [
  { name: 'Großraumbüro', sub: 'Open Space & Büroetagen', href: '/leistungen/buero', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { name: 'Konferenzraum', sub: 'Meeting & Präsentation', href: '/leistungen/buero', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80' },
  { name: 'Restaurant & Café', sub: 'Gastronomie & Bar', href: '/leistungen/gastro', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
  { name: 'Kita & Schule', sub: 'Lernen & Spielen', href: '/leistungen/bildung', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80' },
  { name: 'Kleines Büro', sub: 'Einzelbüro & Coworking', href: '/leistungen/buero', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80' },
  { name: 'Showroom besuchen', sub: 'Absorber live erleben in Schöneberg', href: '/showroom', image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80' },
]

export default function Zielraeume() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-12 md:mb-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          <motion.p variants={fadeUp} className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-4">Für welchen Raum?</motion.p>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-white leading-tight max-w-2xl">
            Wir optimieren jeden Raum – in Berlin und darüber hinaus.
          </motion.h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          {rooms.map((room) => (
            <motion.div key={room.name} variants={fadeUp}>
              <Link href={room.href} className="group block relative h-64 lg:h-72 overflow-hidden rounded-lg">
                <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-colors duration-300 group-hover:from-black/80 group-hover:via-black/40" />
                <div className="absolute inset-0 z-10 flex items-end justify-between p-5">
                  <div>
                    <p className="font-playfair text-xl font-semibold text-white leading-snug">{room.name}</p>
                    <p className="text-white/60 text-sm mt-1">{room.sub}</p>
                  </div>
                  <div className="flex items-center self-end pb-1">
                    <ArrowRight className="text-[#C8A96E] w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}