import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Ueber raumton. Berliner Manufaktur seit 2006',
  description:
    'raumton GmbH: Seit 2006 Berliner Experten fuer Raumakustik. Gegruendet von Ulli Mueller, gefuehrt von Leo Ripper. Eigene Produktion in Berlin-Schoeneberg.',
}

const WERTE = [
  {
    title: 'Berliner Ursprung',
    text: 'Gegruendet in Berlin, produziert in Berlin. Wir kennen die Raeume dieser Stadt. Und wissen, wie verschieden sie klingen koennen.',
  },
  {
    title: 'Keine Mineralfasern',
    text: 'Wir verwenden konsequent mineralfaserfreie Materialien. Nicht weil es vorgeschrieben ist, sondern weil wir es fuer richtig halten.',
  },
  {
    title: '100% recycelbar',
    text: 'Alle Absorber lassen sich vollstaendig recyceln. Wir waehlen Materialien, hinter denen wir auch in zehn Jahren noch stehen.',
  },
  {
    title: '2. Generation',
    text: 'Seit 2022 fuehrt Leo Ripper das Unternehmen. Und hat dabei nichts veraendert, was die Qualitaet ausmacht.',
  },
]

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        {/* Hero */}
        <div className="container-wide mb-24">
          <div className="max-w-3xl">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
              Ueber raumton
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Wer hinter
              <br />
              <span className="text-gradient-gold">raumton steckt.</span>
            </h1>
          </div>
        </div>

        {/* Bild + Story */}
        <div className="container-wide mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="relative h-[500px]">
              <Image
                src="/Raumton-Inhaber.webp"
                alt="Ulli Mueller und Leo Ripper. Gruender und Geschaeftsfuehrer von raumton in der Berliner Werkstatt"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                <p className="text-white text-sm font-medium">Ulli Mueller &amp; Leo Ripper</p>
                <p className="text-white/70 text-xs">Gruender &amp; Geschaeftsfuehrung. Berlin-Schoeneberg</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2
                className="text-3xl text-white mb-6"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Vom Tonstudio zur Berliner Manufaktur
              </h2>
              <div className="space-y-4 text-[#A0A0A0] leading-relaxed">
                <p>
                  Ulli Mueller gruendete raumton 2006 aus einer einfachen Ueberzeugung: Gute
                  Raumakustik sollte fuer jeden zugaenglich sein. Nicht nur fuer Tonstudios und
                  Rundfunkhaeuser. Als erfahrener Audiotechniker und Studiobauer kannte er die
                  Kraft des guten Klangs und wollte sie in ganz normale Bueros, Restaurants und
                  Bildungseinrichtungen bringen.
                </p>
                <p>
                  Was klein begann, wuchs schnell. 1.500+ Projekte spaeter ist raumton die erste
                  Adresse fuer Raumakustik in Berlin. Mit Kunden von der Kita um die Ecke bis
                  zum DAX40-Konzern und Bundesministerium.
                </p>
                <p>
                  Seit 2022 fuehrt Leo Ripper das Unternehmen in zweiter Generation. Die
                  Werkzeuge haben sich veraendert, das Prinzip nicht: erst zuhoeren, dann
                  messen, dann liefern. In Berlin-Schoeneberg, wie von Anfang an.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Werte */}
        <div className="bg-[#0D0D0D] py-24">
          <div className="container-wide">
            <h2
              className="text-3xl text-white mb-12 text-center"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Unsere Werte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
              {WERTE.map((wert) => (
                <div key={wert.title} className="bg-[#0D0D0D] p-8">
                  <h3 className="text-[#C8A96E] font-semibold mb-3">{wert.title}</h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{wert.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
