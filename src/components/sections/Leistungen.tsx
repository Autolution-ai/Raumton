'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Utensils, GraduationCap, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'
import { LEISTUNGEN, PROZESS_SCHRITTE } from '@/lib/constants'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'building-2': Building2, utensils: Utensils, 'graduation-cap': GraduationCap,
}

// Produkttypen exakt wie auf der bestehenden raumton-Website.
// `image: null` -> Platzhalter. Sobald echte Produktfotos im Repo liegen,
// hier den Pfad eintragen (z. B. '/produkte/deckenabsorber.jpg').
const PRODUKTE: { name: string; sub: string; image: string | null }[] = [
  { name: 'Deckenabsorber', sub: 'Frei abgehängt oder direkt an der Decke', image: null },
  { name: 'Wandabsorber', sub: 'Als Akustikbild oder flächig integriert', image: null },
  { name: 'Trennwand-Absorber', sub: 'Raumteiler, die gleichzeitig dämpfen', image: null },
  { name: 'Tischtrennwand-Absorber', sub: 'Ruhe direkt am Arbeitsplatz', image: null },
  { name: 'Schrankaufsatz-Absorber', sub: 'Nutzt vorhandene Möbel als Träger', image: null },
  { name: 'Standabsorber', sub: 'Flexibel & ohne Montage versetzbar', image: null },
  { name: 'Akustik-Vorhänge', sub: 'Schallschluckend und blickdicht zugleich', image: null },
]

export default function Leistungen() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="max-w-xl mb-16">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Unsere Leistungen</span>
          <h2 className="text-4xl sm:text-5xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Beratung, Planung, Fertigung, Montage –{' '}<span className="text-[#C8A96E]">aus einer Hand.</span>
          </h2>
        </motion.div>

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

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="mb-20">
          <span className="text-[#C8A96E] text-xs tracking-widest uppercase mb-4 block">Unsere Produkte</span>
          <h3 className="text-2xl sm:text-3xl text-[#1A1A1A] mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>7 Absorber-Typen. Über 300 Farben. Grenzenlose Kombinationen.</h3>
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {PRODUKTE.map(({ name, sub, image }) => (
              <motion.div key={name} variants={fadeUp} className="overflow-hidden border border-[#EBEBEB] bg-white">
                <div className="relative h-36 w-full overflow-hidden">
                  {image ? (
                    <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  ) : (
                    <ImagePlaceholder />
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-[#1A1A1A] text-sm font-semibold leading-tight">{name}</h4>
                  <p className="text-[#999] text-xs leading-snug mt-1">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-[#AAA] text-xs italic">Produktfotos zu jedem Absorber-Typ folgen in Kürze.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {LEISTUNGEN.map((leistung) => {
            const Icon = ICONS[leistung.icon]
            return (
              <motion.div key={leistung.slug} variants={fadeUp}>
                <Link href={`/leistungen/${leistung.slug}`} className="block p-8 border border-[#EBEBEB] hover:border-[#C8A96E]/50 hover:shadow-md bg-white transition-all duration-300 group h-full">
                  <div className="w-10 h-10 border border-[#E5E2DC] flex items-center justify-center mb-6 group-hover:border-[#C8A96E] transition-colors"><Icon size={18} className="text-[#C8A96E]" /></div>
                  <h3 className="text-xl text-[#1A1A1A] font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{leistung.title}</h3>
                  <p className="text-[#C8A96E] text-sm font-medium mb-3">{leistung.headline}</p>
                  <p className="text-[#888] text-sm leading-relaxed mb-6">{leistung.beschreibung}</p>
                  <ul className="space-y-1.5 mb-6">
                    {leistung.punkte.map((punkt) => (
                      <li key={punkt} className="flex items-center gap-2 text-sm text-[#606060]"><span className="w-1 h-1 rounded-full bg-[#C8A96E] flex-shrink-0" />{punkt}</li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm text-[#C8A96E] font-medium group-hover:gap-3 transition-all">Mehr erfahren <ArrowRight size={14} /></div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="border border-[#C8A96E]/30 bg-[#C8A96E]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed">Noch nicht gefunden was Sie suchen? Sprechen Sie mit uns — wir beraten jeden Raumtyp.</p>
          <a href="#anfrage" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8A96E] text-white text-sm font-medium hover:bg-[#b8944f] transition-colors duration-200">Kostenlos anfragen <ArrowRight size={14} /></a>
        </motion.div>
      </div>
    </section>
  )
}