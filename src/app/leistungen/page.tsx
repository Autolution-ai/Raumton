import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'
import { LEISTUNGEN } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Leistungen – Raumakustik für Büro, Gastronomie & Bildung | raumton',
  description:
    'raumton bietet professionelle Raumakustik-Lösungen für Büros, Gastronomie und Bildungseinrichtungen in Berlin und deutschlandweit.',
}

export default function LeistungenPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#F2EFE9] pt-32 pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">Leistungen</span>
            </div>
            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1C1917] mb-4 max-w-2xl"
            >
              Raumakustik für jeden Einsatzbereich.
            </h1>
            <p className="text-[#6B6560] text-lg max-w-xl">
              Von der Messung bis zur Montage — alles aus einer Hand, gefertigt in Berlin-Schöneberg.
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LEISTUNGEN.map((l) => (
                <Link
                  key={l.slug}
                  href={`/leistungen/${l.slug}`}
                  className="group block p-8 border border-[#E2DDD6] hover:border-[#B8955A] transition-all bg-white"
                >
                  <p className="section-label mb-6">{l.title}</p>
                  <h2
                    style={{ fontFamily: 'var(--font-display), serif' }}
                    className="text-2xl font-light text-[#1C1917] mb-3"
                  >
                    {l.headline}
                  </h2>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-6">{l.beschreibung}</p>
                  <ul className="space-y-2 mb-8">
                    {l.punkte.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-[#6B6560]">
                        <span className="w-1 h-1 rounded-full bg-[#B8955A] flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="flex items-center gap-2 text-sm text-[#B8955A] group-hover:gap-3 transition-all font-medium">
                    Mehr erfahren <ArrowRight size={14} />
                  </span>
                </Link>
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
