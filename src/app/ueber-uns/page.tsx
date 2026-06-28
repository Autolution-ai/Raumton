import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Über raumton, Berliner Manufaktur seit 2006',
  description: 'raumton GmbH: Seit 2006 Berliner Experten für Raumakustik. Gegründet von Ulli Müller, geführt von Leo Ripper. Eigene Produktion in Berlin-Schöneberg.',
}

const WERTE = [
  { title: 'Berliner Ursprung', text: 'Gegründet in Berlin, produziert in Berlin. Wir kennen die Räume dieser Stadt, und wissen, wie verschieden sie klingen können.' },
  { title: 'Keine Mineralfasern', text: 'Wir verwenden konsequent mineralfaserfreie Materialien. Nicht weil es vorgeschrieben ist, sondern weil wir es für richtig halten.' },
  { title: '100% recycelbar', text: 'Alle Absorber lassen sich vollständig recyceln. Wir wählen Materialien, hinter denen wir auch in zehn Jahren noch stehen.' },
  { title: '2. Generation', text: 'Seit 2022 führt Leo Ripper das Unternehmen, und hat dabei nichts verändert, was die Qualität ausmacht.' },
]

const ZAHLEN = [
  { wert: '20', einheit: 'Jahre', label: 'Erfahrung in der Raumakustik' },
  { wert: '1.500+', einheit: '', label: 'Projekte erfolgreich abgeschlossen' },
  { wert: '300+', einheit: '', label: 'Farben und Texturen verfügbar' },
  { wert: '3', einheit: 'Wochen', label: 'Lieferzeit nach Auftragseingang' },
]

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <div className="pt-32 pb-16 bg-white">
          <div className="container-wide">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Über raumton</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 max-w-3xl leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>Berliner Handwerk.{' '}<span className="text-[#C8A96E]">Seit 2006.</span></h1>
            <p className="text-[#606060] text-lg max-w-2xl leading-relaxed">Wir planen, fertigen und montieren individuelle Schallabsorber, direkt aus Berlin-Schöneberg, seit fast zwei Jahrzehnten.</p>
          </div>
        </div>
        <div className="bg-[#F9F7F4] py-16">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E2DC]">
              {ZAHLEN.map((z) => (
                <div key={z.label} className="px-10 py-8 first:pl-0 last:pr-0">
                  <div className="text-5xl font-bold text-[#C8A96E] mb-1 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>{z.wert}{z.einheit && <span className="text-2xl ml-1">{z.einheit}</span>}</div>
                  <p className="text-[#888] text-sm leading-relaxed mt-2">{z.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white py-24">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative h-[500px]">
                <Image src="/Raumton-Inhaber.webp" alt="Ulli Müller und Leo Ripper" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                  <p className="text-white text-sm font-medium">Ulli Müller &amp; Leo Ripper</p>
                  <p className="text-white/70 text-xs">Gründer &amp; Geschäftsführung · Berlin-Schöneberg</p>
                </div>
              </div>
              <div>
                <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-3 block">Unsere Geschichte</span>
                <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>Vom Tonstudio zur Berliner Manufaktur.</h2>
                <div className="space-y-5 text-[#606060] leading-relaxed text-sm">
                  <p>Ulli Müller gründete raumton 2006 aus einer einfachen Überzeugung: Gute Raumakustik sollte für jeden zugänglich sein, nicht nur für Tonstudios und Rundfunkhäuser.</p>
                  <p>Was klein begann, wuchs schnell. 1.500+ Projekte später ist raumton die erste Adresse für Raumakustik in Berlin, mit Kunden von der Kita um die Ecke bis zum DAX40-Konzern und Bundesministerium.</p>
                  <p>Seit 2022 führt Leo Ripper das Unternehmen in zweiter Generation. Die Werkzeuge haben sich verändert, das Prinzip nicht: erst zuhören, dann messen, dann liefern.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F7F4] py-24">
          <div className="container-wide">
            <div className="max-w-xl mb-14">
              <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-3 block">Was uns antreibt</span>
              <h2 className="text-3xl sm:text-4xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Unsere Werte.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WERTE.map((wert) => (
                <div key={wert.title} className="border-t border-[#C8A96E] pt-6">
                  <h3 className="text-[#1A1A1A] font-semibold mb-3">{wert.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{wert.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white py-20 border-t border-[#EBEBEB]">
          <div className="container-wide text-center">
            <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Lernen Sie uns persönlich kennen.</h2>
            <a href="#anfrage" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-white font-semibold hover:bg-[#B8955A] transition-colors duration-200">Jetzt kostenlos beraten lassen</a>
          </div>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}