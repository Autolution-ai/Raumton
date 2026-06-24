import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Akustik für Restaurants & Gastronomie Berlin | raumton',
  description:
    'Schlechte Akustik kostet Umsatz. raumton integriert Schallabsorber dezent in Ihr Restaurantdesign — messbar weniger Lärm, mehr Gäste.',
}

const STATS = [
  {
    stat: '−20%',
    label: 'Kürzere Verweildauer',
    text: 'Gäste in lauten Restaurants bleiben signifikant kürzer.',
  },
  {
    stat: '72 dB',
    label: 'Typischer Restaurantpegel',
    text: 'Weit über dem Wohlfühlbereich von 60–65 Dezibel.',
  },
  {
    stat: '+18%',
    label: 'Mehr Umsatz',
    text: 'Ruhigere Restaurants erzielen im Schnitt höheren Umsatz pro Gast.',
  },
]

export default function GastroPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#F2EFE9] pt-32 pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">Leistungen / Gastronomie</span>
            </div>
            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1C1917] mb-4 max-w-2xl"
            >
              Gäste bleiben länger,{' '}
              <span className="text-[#B8955A]">wenn es angenehm ist.</span>
            </h1>
            <p className="text-[#6B6560] text-lg max-w-2xl">
              Schlechte Akustik kostet Umsatz. Wir integrieren Schallabsorber so dezent in Ihr
              Raumdesign, dass Gäste die Lösung nicht sehen — aber sofort fühlen.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E2DDD6]">
              {STATS.map((p) => (
                <div key={p.stat} className="bg-white p-10">
                  <div
                    style={{ fontFamily: 'var(--font-display), serif' }}
                    className="text-5xl font-light text-[#B8955A] mb-2"
                  >
                    {p.stat}
                  </div>
                  <div className="text-[#1C1917] text-sm font-medium mb-3">{p.label}</div>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detail */}
        <section className="bg-[#F2EFE9] section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="divider" />
                  <span className="section-label">Unsere Leistung</span>
                </div>
                <h2
                  style={{ fontFamily: 'var(--font-display), serif' }}
                  className="text-[clamp(1.8rem,3vw,2.5rem)] font-light text-[#1C1917] mb-5"
                >
                  Akustik, die zum Restaurantdesign passt.
                </h2>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-6">
                  Unsere Absorber kommen in über 300 Farben und Texturen — sie fügen sich harmonisch
                  in jede Einrichtung ein, vom Fine Dining bis zur lebhaften Trattoria.
                </p>
                <ul className="space-y-3">
                  {[
                    'Diskrete Integration ins Raumdesign',
                    '300+ Farben und Texturen',
                    'Montage außerhalb der Öffnungszeiten',
                    'Keine Mineralfasern — lebensmittelsicher',
                    'RT60-Messung vor und nach der Montage',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-[#6B6560]">
                      <span className="w-1 h-1 rounded-full bg-[#B8955A] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-[#1C1917] text-sm font-medium">Für welche Räume?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Restaurant', 'Café', 'Bar & Club', 'Eventlocation', 'Hotellobby', 'Frühstücksbereich'].map(
                    (r) => (
                      <div key={r} className="border border-[#E2DDD6] p-4 bg-white text-[#6B6560] text-sm">
                        {r}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
