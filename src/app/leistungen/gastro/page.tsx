import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = { title: 'Akustik für Restaurants & Gastronomie Berlin | raumton', description: 'Schlechte Akustik kostet Umsatz. raumton optimiert Restaurants und Cafés in Berlin akustisch – dezent, designorientiert und messbar wirksam.' }

export default function GastroPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <div className="container-wide mb-20">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Leistungen / Gastronomie</span>
          <h1 className="text-5xl sm:text-6xl text-white mb-6 max-w-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>Gäste bleiben länger, <span className="text-gradient-gold">wenn es angenehm ist.</span></h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl">Zu laute Restaurants bekommen schlechtere Bewertungen – und Gäste kommen seltener zurück.</p>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
