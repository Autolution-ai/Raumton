'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'

// Raumtypen exakt wie auf der bestehenden raumton-Website.
// `image` = Platzhalter (Unsplash) – wird durch echte Projektfotos ersetzt,
// sobald diese im Repo liegen (z. B. /raeume/grossraumbuero.jpg).
const rooms = [
  {
    name: 'Großraumbüro',
    sub: 'Konzentration im Open Space – trotz vieler Menschen auf einer Fläche.',
    href: '/leistungen/buero',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
  },
  {
    name: 'Kleines Büro',
    sub: 'Ruhe für Einzel- und Teambüros, in denen jedes Wort zählt.',
    href: '/leistungen/buero',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80',
  },
  {
    name: 'Konferenzraum',
    sub: 'Sprachverständlichkeit für Meetings, Calls und Entscheidungen.',
    href: '/leistungen/buero',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80',
  },
  {
    name: 'Präsentationsraum',
    sub: 'Klarer Klang für Vorträge, Schulungen und Veranstaltungen.',
    href: '/leistungen/buero',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80',
  },
  {
    name: 'Spiel- & Lernraum',
    sub: 'Kita & Schule: weniger Lärmstress für Kinder und Erzieher.',
    href: '/leistungen/bildung',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80',
  },
  {
    name: 'Begegnungs- & Gasträume',
    sub: 'Restaurant, Café & Lobby: Gäste, die länger und lieber bleiben.',
    href: '/leistungen/gastro',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
  },
]

export default function Zielraeume() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-12 md:mb-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          <motion.p variants={fadeUp} className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-4">
            Für welchen Raum?
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-playfair text-4xl md:text-5xl text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Wir optimieren jeden Raum – in Berlin und darüber hinaus.
          </motion.h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          {rooms.map((room) => (
            <motion.div key={room.name} variants={fadeUp}>
              <Link href={room.href} className="group relative block h-72 lg:h-80 overflow-hidden rounded-lg">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay – vertieft sich beim Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90" />

                {/* Inhalt */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  {/* Gold-Akzentlinie wächst beim Hover */}
                  <span className="mb-3 block h-[2px] w-8 bg-[#C8A96E] transition-all duration-500 group-hover:w-14" />
                  <h3 className="font-playfair text-2xl font-semibold text-white leading-snug" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {room.name}
                  </h3>

                  {/* Beschreibung + CTA – sliden beim Hover ein */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-2">
                    <div className="overflow-hidden">
                      <p className="text-white/75 text-sm leading-relaxed">{room.sub}</p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#C8A96E]">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
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
