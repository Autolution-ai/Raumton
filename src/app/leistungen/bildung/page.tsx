import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Akustik für Kitas, Schulen & Bildungseinrichtungen | raumton Berlin',
  description:
    'Kinder und Lehrkräfte leiden besonders unter Lärm. raumton schafft ruhige Lernumgebungen mit robusten, bunten Schallabsorbern — Made in Berlin.',
}

const STATS = [
  {
    stat: '85 dB',
    label: 'Typischer Kita-Pegel',
    text: 'Kinder in lauten Räumen entwickeln schneller Stresssymptome.',
  },
  {
    stat: '−40%',
    label: 'Weniger Verständigungsprobleme',
    text: 'Bessere Akustik verbessert Sprachentwicklung und Konzentration.',
  },
  {
    stat: '30%',
    label: 'Weniger Fehlzeiten',
    text: 'Lärmreduktion senkt krankheitsbedingte Fehlzeiten bei Erzieherinnen.',
  },
]

export default function BildungPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#F2EFE9] pt-32 pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">Leistungen / Bildung & Kita</span>
            </div>
            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1C1917] mb-4 max-w-2xl"
            >
              Lernen braucht <span className="text-[#B8955A]">Stille.</span>
            </h1>
            <p className="text-[#6B6560] text-lg max-w-2xl">
              Kinder und Lehrkräfte sind besonders empfindlich gegenüber Lärm. Mit unseren robusten,
              bunten Absorbern schaffen wir angenehme Lernumgebungen.
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
                  Sicher, robust und kindgerecht.
                </h2>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-6">
                  Unsere Absorber für Bildungseinrichtungen sind besonders robust, leicht zu reinigen
                  und enthalten keine gesundheitsschädlichen Materialien. Erhältlich in leuchtenden
                  Farben, die Räume für Kinder freundlicher machen.
                </p>
                <ul className="space-y-3">
                  {[
                    'Keine Mineralfasern — absolut ungefährlich',
                    '100% recycelbar',
                    'Einfach zu reinigen',
                    '300+ Farben — auch in Signalfarben',
                    'Erfüllt DIN 18041 für Lernräume',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-[#6B6560]">
                      <span className="w-1 h-1 rounded-full bg-[#B8955A] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-[#1C1917] text-sm font-medium">Für welche Einrichtungen?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Kita & Krippe', 'Schulen', 'Universitäten', 'Bibliotheken', 'Seminarräume', 'Sporthallen'].map(
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
