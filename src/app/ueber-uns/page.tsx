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
  { title: 'Berliner Ursprung', text: 'Gegründet 2006 in Berlin. Produziert in Berlin.' },
  { title: 'Keine Mineralfasern', text: 'Wir verzichten konsequent auf mineralfaserbelastete Materialien.' },
  { title: '100% recycelbar', text: 'Alle unsere Absorber sind vollständig recyclingfähig.' },
  { title: '2. Generation', text: 'Seit 2022 führt Leo Ripper das Unternehmen – mit denselben Werten.' },
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
              Berliner Handwerk.<br />
              <span className="text-[#B8955A]">Seit 2006.</span>
            </h1>
          </div>
        </section>

        {/* Story mit echtem Foto */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/Autolution-ai/Raumton/main/Raumton-Inhaber.webp"
                  alt="Ulli Müller und Leo Ripper in der raumton Werkstatt Berlin-Schöneberg"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
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
                <p className="text-[#6B6560] leading-relaxed mb-4 text-sm">
                  Ulli Müller gründete raumton 2006 aus einer einfachen Überzeugung: Gute Raumakustik
                  sollte für jeden zugänglich sein — nicht nur für Tonstudios und Konzertsäle.
                </p>
                <p className="text-[#6B6560] leading-relaxed mb-4 text-sm">
                  Als Audiotechniker und Studiobauer kannte er die Wirkung guter Akustik auf
                  Wohlbefinden und Produktivität aus erster Hand. Was als Einzelprojekte begann,
                  wuchs zu einer Berliner Manufaktur mit eigener Produktion in Schöneberg.
                </p>
                <p className="text-[#6B6560] leading-relaxed text-sm">
                  Seit 2022 führt Leo Ripper das Unternehmen in zweiter Generation. Neue Ideen,
                  neue Energie — aber dieselbe Philosophie: Qualität, die man fühlt.
                </p>
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
