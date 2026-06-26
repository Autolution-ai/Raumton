import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Leistungen – Raumakustik für Büro, Gastronomie & Bildung | raumton',
  description: 'raumton bietet professionelle Raumakustik-Lösungen für Büros, Gastronomie und Bildungseinrichtungen in Berlin.',
}

const LEISTUNGEN = [
  { slug: 'buero', titel: 'Büro & Konferenz', headline: 'Mehr Konzentration. Weniger Lärm.', text: 'Großraumbüros, Konferenzräume, Open Spaces – wir optimieren Ihr Büro akustisch, messbar und ohne Betriebsunterbrechung.', bild: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { slug: 'gastro', titel: 'Gastronomie', headline: 'Gäste bleiben länger, wenn es angenehm ist.', text: 'Restaurants, Cafés, Bars – schlechte Akustik kostet Umsatz. Wir lösen das Problem, ohne Ihrem Design zu schaden.', bild: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80' },
  { slug: 'bildung', titel: 'Kitas & Schulen', headline: 'Bessere Akustik. Besseres Lernen.', text: 'Kinder und Lehrkräfte reagieren besonders empfindlich auf Lärm. raumton schafft angenehme Lernumgebungen – bunt, robust und kindgerecht.', bild: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80' },
]

const PROZESS = [
  { nr: '01', titel: 'Kostenlose Beratung', text: 'Wir kommen zu Ihnen, hören zu und messen die Nachhallzeit in Ihrem Raum.' },
  { nr: '02', titel: 'Individuelle Planung', text: 'Maßgeschneiderte Lösung mit 3D-Visualisierung – passend zu Ihrem Raumkonzept.' },
  { nr: '03', titel: 'Berliner Fertigung', text: 'Handgefertigt in Berlin-Schöneberg. Lieferzeit ca. 3 Wochen nach Auftragseingang.' },
  { nr: '04', titel: 'Montage in einem Tag', text: 'Professionelle Montage – ohne Betriebsunterbrechung, ohne Schmutz.' },
]

export default function LeistungenPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <div className="pt-32 pb-16 bg-white">
          <div className="container-wide">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Leistungen</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 max-w-3xl leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>Akustik für jeden{' '}<span className="text-[#C8A96E]">Einsatzbereich.</span></h1>
            <p className="text-[#606060] text-lg max-w-2xl leading-relaxed">Egal ob Büro, Restaurant oder Bildungseinrichtung – wir entwickeln individuelle Akustiklösungen, die funktionieren und gut aussehen.</p>
          </div>
        </div>
        <div className="bg-[#F9F7F4] py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LEISTUNGEN.map((l) => (
                <Link key={l.slug} href={`/leistungen/${l.slug}`} className="group bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={l.bild} alt={l.titel} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-8">
                    <div className="w-8 h-px bg-[#C8A96E] mb-5" />
                    <h2 className="text-xl text-[#1A1A1A] font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{l.titel}</h2>
                    <p className="text-[#C8A96E] text-sm font-medium mb-3">{l.headline}</p>
                    <p className="text-[#888] text-sm leading-relaxed mb-6">{l.text}</p>
                    <span className="flex items-center gap-2 text-sm text-[#C8A96E] font-medium group-hover:gap-3 transition-all">Mehr erfahren <ArrowRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white py-24">
          <div className="container-wide">
            <div className="max-w-xl mb-14">
              <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-3 block">Unser Prozess</span>
              <h2 className="text-3xl sm:text-4xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Von der Messung bis zur Montage.</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {PROZESS.map((s) => (
                <div key={s.nr}>
                  <div className="text-6xl font-bold text-[#F0EDE7] mb-4 leading-none select-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>{s.nr}</div>
                  <h3 className="text-[#1A1A1A] font-semibold mb-2 text-sm">{s.titel}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#F9F7F4] py-20 border-t border-[#EBEBEB]">
          <div className="container-wide text-center">
            <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Nicht sicher, was Ihr Raum braucht?</h2>
            <a href="#anfrage" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-white font-semibold hover:bg-[#B8955A] transition-colors duration-200">Jetzt kostenlose Beratung sichern</a>
          </div>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}