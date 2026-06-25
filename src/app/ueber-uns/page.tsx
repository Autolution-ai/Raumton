import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Über raumton – Berliner Manufaktur seit 2006',
  description:
    'raumton GmbH: Seit 2006 Berliner Experten für Raumakustik. Gegründet von Ulli Müller, geführt von Leo Ripper. Eigene Produktion in Berlin-Schöneberg.',
}

const WERTE = [
  {
    title: 'Berliner Ursprung',
    text: 'Gegründet in Berlin, produziert in Berlin. Wir kennen die Räume dieser Stadt – und wissen, wie verschieden sie klingen können.',
  },
  {
    title: 'Keine Mineralfasern',
    text: 'Wir verwenden konsequent mineralfaserfreie Materialien. Nicht weil es vorgeschrieben ist, sondern weil wir es für richtig halten.',
  },
  {
    title: '100% recycelbar',
    text: 'Alle Absorber lassen sich vollständig recyceln. Wir wählen Materialien, hinter denen wir auch in zehn Jahren noch stehen.',
  },
  {
    title: '2. Generation',
    text: 'Seit 2022 führt Leo Ripper das Unternehmen – und hat dabei nichts verändert, was die Qualität ausmacht.',
  },
]

const ZAHLEN = [
  { stat: '20+', label: 'Jahre Erfahrung' },
  { stat: '1.500+', label: 'Projekte' },
  { stat: '300+', label: 'Farben & Texturen' },
  { stat: '~3 Wo.', label: 'Lieferzeit' },
]

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#F2EFE9] pt-32 pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">Über raumton</span>
            </div>
            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1C1917]"
            >
              Wer hinter raumton steckt.
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="relative h-[480px] overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/Autolution-ai/Raumton/main/Raumton-Inhaber.webp"
                  alt="Ulli Müller und Leo Ripper – Gründer und Geschäftsführer von raumton in der Berliner Werkstatt"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-5">
                  <p className="text-white text-sm font-medium">Ulli Müller &amp; Leo Ripper</p>
                  <p className="text-white/70 text-xs">Gründer &amp; Geschäftsführung · Berlin-Schöneberg</p>
                </div>
              </div>
              <div>
                <h2
                  style={{ fontFamily: 'var(--font-display), serif' }}
                  className="text-3xl font-light text-[#1C1917] mb-6"
                >
                  Vom Tonstudio zur Berliner Manufaktur
                </h2>
                <div className="space-y-4 text-[#6B6560] leading-relaxed text-sm">
                  <p>
                    Ulli Müller gründete raumton 2006 aus einer einfachen Überzeugung: Gute
                    Raumakustik sollte für jeden zugänglich sein – nicht nur für Tonstudios und
                    Rundfunkhäuser. Als erfahrener Audiotechniker und Studiobauer kannte er die
                    Kraft des guten Klangs und wollte sie in ganz normale Büros, Restaurants und
                    Bildungseinrichtungen bringen.
                  </p>
                  <p>
                    Was klein begann, wuchs schnell. 1.500+ Projekte später ist raumton die erste
                    Adresse für Raumakustik in Berlin – mit Kunden von der Kita um die Ecke bis
                    zum DAX40-Konzern und Bundesministerium.
                  </p>
                  <p>
                    Seit 2022 führt Leo Ripper das Unternehmen in zweiter Generation. Die
                    Werkzeuge haben sich verändert, das Prinzip nicht: erst zuhören, dann
                    messen, dann liefern. In Berlin-Schöneberg, wie von Anfang an.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zahlen */}
        <section className="bg-[#F2EFE9] py-20">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD6]">
              {ZAHLEN.map((z) => (
                <div key={z.stat} className="bg-[#F2EFE9] p-10 text-center">
                  <div
                    style={{ fontFamily: 'var(--font-display), serif' }}
                    className="text-4xl font-light text-[#B8955A] mb-2"
                  >
                    {z.stat}
                  </div>
                  <div className="text-[#6B6560] text-xs tracking-widest uppercase">{z.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Werte */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-14">
              <div className="divider" />
              <span className="section-label">Unsere Werte</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD6]">
              {WERTE.map((wert) => (
                <div key={wert.title} className="bg-white p-8">
                  <h3 className="text-[#B8955A] text-xs font-medium tracking-widest uppercase mb-3">
                    {wert.title}
                  </h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{wert.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
