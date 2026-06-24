import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Büroakustik Berlin – Großraumbüro & Konferenzraum | raumton',
  description:
    'Professionelle Büroakustik für Großraumbüros und Konferenzräume in Berlin. Messung, Planung, Fertigung und Montage von raumton seit 2006.',
}

const STATS = [
  {
    stat: '>55 dB',
    label: 'Kritischer Lärmpegel',
    text: 'Ab 55 Dezibel sinkt die kognitive Leistung messbar.',
  },
  {
    stat: '−15%',
    label: 'Produktivitätsverlust durch Lärm',
    text: 'Lärm am Arbeitsplatz kostet bis zu 15 % Produktivität.',
  },
  {
    stat: '3×',
    label: 'Mehr Stress',
    text: 'Mitarbeiter in lauten Büros berichten dreimal häufiger von Stress.',
  },
]

export default function BueroPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#F2EFE9] pt-32 pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">Leistungen / Büro & Großraumbüro</span>
            </div>
            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1C1917] mb-4 max-w-2xl"
            >
              Mehr Konzentration.{' '}
              <span className="text-[#B8955A]">Weniger Lärm.</span>
            </h1>
            <p className="text-[#6B6560] text-lg max-w-2xl">
              Schlechte Büroakustik kostet Produktivität, erhöht Stress und treibt Mitarbeiter ins
              Homeoffice. raumton optimiert Ihr Büro messbar.
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

        {/* What we do */}
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
                  Akustik, die Ihren Mitarbeitern hilft.
                </h2>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-6">
                  Wir analysieren Ihren Raum, messen die Nachhallzeit (RT60) und entwickeln eine
                  individuelle Lösung — passend zu Ihrem Bürodesign und Budget.
                </p>
                <ul className="space-y-3">
                  {[
                    'Kostenlose RT60-Messung vor Ort',
                    '3D-Planung mit Farbauswahl',
                    'Fertigung in Berlin-Schöneberg',
                    'Montage in einem Tag',
                    'Nachmessung nach 4 Wochen',
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
                  {['Großraumbüro', 'Konferenzraum', 'Einzelbüro', 'Fokuszone', 'Telefonkabine', 'Empfang'].map(
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
