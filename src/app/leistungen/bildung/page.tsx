import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = { title: 'Akustik für Kitas, Schulen & Bildungseinrichtungen Berlin | raumton', description: 'Lärm in Kitas und Schulen belastet Kinder und Lehrkräfte. raumton schafft bessere Lernumgebungen in Berlin.' }

export default function BildungPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <div className="container-wide mb-20">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Leistungen / Bildung</span>
          <h1 className="text-5xl sm:text-6xl text-white mb-6 max-w-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>Lernen braucht <span className="text-gradient-gold">Stille.</span></h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl">Kinder und Lehrkräfte reagieren besonders empfindlich auf Lärm. raumton schafft angenehme Lernumgebungen.</p>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
