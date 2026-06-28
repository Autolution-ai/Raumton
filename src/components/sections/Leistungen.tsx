'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'
import { PROZESS_SCHRITTE } from '@/lib/constants'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

// Produkttypen exakt wie auf der bestehenden raumton-Website.
// `image: null` -> Platzhalter. Sobald echte Produktfotos im Repo liegen,
// hier den Pfad eintragen (z. B. '/produkte/deckenabsorber.jpg').
// `span` / `tall` steuern das Bento-Layout.
const PRODUKTE: { name: string; sub: string; image: string | null; span: string; tall?: boolean }[] = [
  { name: 'Deckenabsorber', sub: 'Frei abgehängt oder direkt an der Decke montiert', image: null, span: 'lg:col-span-3', tall: true },
  { name: 'Wandabsorber', sub: 'Als Akustikbild oder flächig in die Wand integriert', image: null, span: 'lg:col-span-3', tall: true },
  { name: 'Trennwand-Absorber', sub: 'Raumteiler, die gleichzeitig den Schall schlucken', image: null, span: 'lg:col-span-2' },
  { name: 'Tischtrennwand-Absorber', sub: 'Ruhe direkt am Arbeitsplatz', image: null, span: 'lg:col-span-2' },
  { name: 'Schrankaufsatz-Absorber', sub: 'Nutzt vorhandene Möbel als Träger', image: null, span: 'lg:col-span-2' },
  { name: 'Standabsorber', sub: 'Flexibel und ohne Montage versetzbar', image: null, span: 'lg:col-span-3' },
  { name: 'Akustik-Vorhänge', sub: 'Schallschluckend und blickdicht zugleich', image: null, span: 'lg:col-span-3' },
]

export default function Leistungen() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="max-w-xl mb-16">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Unsere Leistungen</span>
          <h2 className="text-4xl sm:text-5xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Beratung, Planung, Fertigung und Montage{' '}<span className="text-[#C8A96E]">aus einer Hand.</span>
          </h2>
        </motion.div>

        {/* Prozess */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {PROZESS_SCHRITTE.map((schritt, i) => (
            <motion.div key={schritt.nr} variants={fadeUp} className="relative">
              <div className="text-6xl font-bold text-[#F0EDE7] mb-4 leading-none select-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>{schritt.nr}</div>
              <h3 className="text-[#1A1A1A] font-semibold mb-2 text-sm">{schritt.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{schritt.beschreibung}</p>
              {i < PROZESS_SCHRITTE.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 z-10"><ArrowRight size={16} className="text-[#DDDAD4]" /></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Produkte, Bento-Showcase */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="mb-6">
          <span className="text-[#C8A96E] text-xs tracking-widest uppercase mb-4 block">Unsere Produkte</span>
          <h3 className="text-2xl sm:text-3xl text-[#1A1A1A] mb-10" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Sieben Absorber-Typen. Über 300 Farben. Grenzenlose Kombinationen.
          </h3>
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5 auto-rows-fr">
            {PRODUKTE.map((produkt) => (
              <motion.div
                key={produkt.name}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-lg ${produkt.span} ${produkt.tall ? 'min-h-[300px]' : 'min-h-[240px]'}`}
              >
                {produkt.image ? (
                  <Image src={produkt.image} alt={produkt.name} fill className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                ) : (
                  <ImagePlaceholder />
                )}
                {/* Lesbarkeits-Scrim unten, funktioniert auf Platzhalter und Foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="mb-3 block h-[2px] w-8 bg-[#C8A96E] transition-all duration-500 group-hover:w-14" />
                  <h4 className="text-white text-lg font-semibold leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>{produkt.name}</h4>
                  <p className="text-white/75 text-sm leading-snug mt-1">{produkt.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-[#AAA] text-xs italic mt-5">Produktfotos zu jedem Absorber-Typ folgen in Kürze.</p>
        </motion.div>

        {/* CTA Box */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="mt-14 border border-[#C8A96E]/30 bg-[#C8A96E]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed">Noch nicht gefunden, was Sie suchen? Sprechen Sie mit uns. Wir beraten jeden Raumtyp.</p>
          <a href="#anfrage" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8A96E] text-white text-sm font-medium hover:bg-[#b8944f] transition-colors duration-200">Kostenlos anfragen <ArrowRight size={14} /></a>
        </motion.div>
      </div>
    </section>
  )
}
