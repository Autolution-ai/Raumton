import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = { title: 'Über raumton – Berliner Manufaktur seit 2006', description: 'raumton GmbH: Seit 2006 Berliner Experten für Raumakustik. Gegründet von Ulli Müller, geführt von Leo Ripper. Eigene Produktion in Berlin-Schöneberg.' }

const WERTE = [
  { title: 'Berliner Ursprung', text: 'Gegründet 2006 in Berlin. Produziert in Berlin.' },
  { title: 'Keine Mineralfasern', text: 'Wir verzichten konsequent auf mineralfaserbelastete Materialien.' },
  { title: '100% recycelbar', text: 'Alle unsere Absorber sind vollständig recyclingfähig.' },
  { title: '2. Generation', text: 'Seit 2022 führt Leo Ripper das Unternehmen – mit denselben Werten.' },
]

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <div className="container-wide mb-24">
          <div className="max-w-3xl">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Über raumton</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>Berliner Handwerk.<br /><span className="text-gradient-gold">Seit 2006.</span></h1>
          </div>
        </div>
        <div className="container-wide mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="relative h-[500px]"><Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="raumton Werkstatt" fill className="object-cover grayscale" /></div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl text-white mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Vom Tonstudio zur Berliner Manufaktur</h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-4">Ulli Müller gründete raumton 2006 aus einer einfachen Überzeugung: Gute Raumakustik sollte für jeden zugänglich sein.</p>
              <p className="text-[#A0A0A0] leading-relaxed">Seit 2022 führt Leo Ripper das Unternehmen in zweiter Generation. Neue Ideen, neue Energie – aber dieselbe Philosophie.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0D0D0D] py-24">
          <div className="container-wide">
            <h2 className="text-3xl text-white mb-12 text-center" style={{ fontFamily: 'var(--font-playfair), serif' }}>Unsere Werte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
              {WERTE.map((wert) => (<div key={wert.title} className="bg-[#0D0D0D] p-8"><h3 className="text-[#C8A96E] font-semibold mb-3">{wert.title}</h3><p className="text-[#A0A0A0] text-sm leading-relaxed">{wert.text}</p></div>))}
            </div>
          </div>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
