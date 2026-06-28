'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

// Raumtypen exakt wie auf der bestehenden raumton-Website.
// `image: null` -> Platzhalter. Sobald echte Fotos im Repo liegen, hier den
// Pfad eintragen (z. B. '/raeume/grossraumbuero.jpg') – sonst nichts ändern.
const rooms: { name: string; sub: string; image: string | null }[] = [
  { name: 'Großraumbüro', sub: 'Konzentration im Open Space – trotz vieler Menschen auf einer Fläche.', image: null },
  { name: 'Kleines Büro', sub: 'Ruhe für Einzel- und Teambüros, in denen jedes Wort zählt.', image: null },
  { name: 'Konferenzraum', sub: 'Sprachverständlichkeit für Meetings, Calls und Entscheidungen.', image: null },
  { name: 'Präsentationsraum', sub: 'Klarer Klang für Vorträge, Schulungen und Veranstaltungen.', image: null },
  { name: 'Spiel- & Lernraum', sub: 'Kita & Schule: weniger Lärmstress für Kinder und Erzieher.', image: null },
  { name: 'Begegnungs- & Gasträume', sub: 'Restaurant, Café & Lobby: Gäste, die länger und lieber bleiben.', image: null },
]

export default function Zielraeume() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-12 md:mb-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          <motion.p variants={fadeUp} className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-4">
            Für welchen Raum?
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-white leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Wir optimieren jeden Raum – in Berlin und darüber hinaus.
          </motion.h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          {rooms.map((room) => (
            <motion.div
              key={room.name}
              variants={fadeUp}
              className="overflow-hidden rounded-lg bg-[#141414] border border-white/5"
            >
              <div className="relative h-44 w-full overflow-hidden">
                {room.image ? (
                  <Image src={room.image} alt={room.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                ) : (
                  <ImagePlaceholder dark />
                )}
              </div>
              <div className="p-6">
                <span className="mb-3 block h-[2px] w-8 bg-[#C8A96E]" />
                <h3 className="text-xl font-semibold text-white leading-snug mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {room.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{room.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA statt Klickstrecke – führt direkt zur Anfrage */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-white/10 pt-8"
        >
          <p className="text-white/50 text-sm">
            Detailseiten & Projektfotos zu jedem Raumtyp folgen in Kürze.
          </p>
          <a
            href="#anfrage"
            className="inline-flex items-center gap-2 bg-[#C8A96E] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#B8955A]"
          >
            Raum kostenlos analysieren lassen
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
