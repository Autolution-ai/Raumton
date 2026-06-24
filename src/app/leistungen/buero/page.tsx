import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = { title: 'Büroakustik Berlin – Großraumbüro & Konferenzraum | raumton', description: 'Professionelle Büroakustik für Großraumbüros und Konferenzräume in Berlin. Messung, Planung, Fertigung und Montage von raumton seit 2006.' }

export default function BueroPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <div className="container-wide mb-20">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Leistungen / Büro</span>
          <h1 className="text-5xl sm:text-6xl text-white mb-6 max-w-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>Mehr Konzentration. <span className="text-gradient-gold">Weniger Lärm.</span></h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl">Schlechte Büroakustik kostet Produktivität, erhöht Stress und treibt Mitarbeiter ins Homeoffice. raumton optimiert Ihr Büro messbar.</p>
        </div>
        <div className="container-wide mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A]">
            {[{ stat: '>55 dB', label: 'Kritischer Lärmpegel', text: 'Ab 55 Dezibel sinkt die kognitive Leistung messbar.' }, { stat: '-15%', label: 'Produktivitätsverlust durch Lärm', text: 'Lärm am Arbeitsplatz kostet bis zu 15% Produktivität.' }, { stat: '3×', label: 'Mehr Stress', text: 'Mitarbeiter in lauten Büros berichten dreimal häufiger von Stress.' }].map((p) => (<div key={p.stat} className="bg-[#141414] p-8"><div className="text-4xl font-bold text-white mb-2 font-mono">{p.stat}</div><div className="text-[#C8A96E] text-sm font-medium mb-3">{p.label}</div><p className="text-[#A0A0A0] text-sm">{p.text}</p></div>))}
          </div>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
