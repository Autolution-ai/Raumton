import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'
import { LEISTUNGEN } from '@/lib/constants'

export const metadata: Metadata = { title: 'Leistungen – Raumakustik für Büro, Gastronomie & Bildung | raumton', description: 'raumton bietet professionelle Raumakustik-Lösungen für Büros, Gastronomie und Bildungseinrichtungen in Berlin.' }

export default function LeistungenPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <div className="container-wide mb-20">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Leistungen</span>
          <h1 className="text-5xl sm:text-6xl text-white mb-6 max-w-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>Raumakustik für jeden Einsatzbereich.</h1>
        </div>
        <div className="container-wide mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEISTUNGEN.map((l) => (
              <Link key={l.slug} href={`/leistungen/${l.slug}`} className="block p-8 border border-[#252525] bg-[#141414] hover:border-[#C8A96E]/40 transition-all group">
                <h2 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{l.title}</h2>
                <p className="text-[#C8A96E] text-sm font-medium mb-4">{l.headline}</p>
                <p className="text-[#A0A0A0] text-sm mb-6">{l.beschreibung}</p>
                <span className="flex items-center gap-2 text-sm text-[#C8A96E] group-hover:gap-3 transition-all">Mehr erfahren <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
