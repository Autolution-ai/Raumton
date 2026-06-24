import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Showroom Berlin-Schöneberg – raumton GmbH',
  description:
    'Besuchen Sie unseren Showroom in Berlin-Schöneberg. Alle Absorber anfassen, 300+ Farben erleben — vor dem Kauf.',
}

export default function ShowroomPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#F2EFE9] pt-32 pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">Showroom</span>
            </div>
            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1C1917] mb-4 max-w-2xl"
            >
              Akustik erleben.{' '}
              <span className="text-[#B8955A]">In Berlin-Schöneberg.</span>
            </h1>
            <p className="text-[#6B6560] text-lg max-w-2xl">
              Kein Katalog ersetzt das echte Erlebnis. Im Showroom können Sie alle unsere Produkte
              anfassen und mit unseren Experten sprechen.
            </p>
          </div>
        </section>

        {/* Info + Map */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="space-y-6 mb-10">
                  {[
                    ['Adresse', 'Berlin-Schöneberg (genaue Adresse nach Terminvereinbarung)'],
                    ['Öffnungszeiten', 'Mo–Fr, 9–18 Uhr · nach Terminvereinbarung'],
                    ['Telefon', '030 / 70 50 95 11'],
                    ['E-Mail', 'info@raumton.com'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-6 border-b border-[#E2DDD6] pb-6">
                      <span className="text-[#A8A29E] text-xs tracking-widest uppercase w-28 flex-shrink-0 pt-0.5">
                        {label}
                      </span>
                      <span className="text-[#1C1917] text-sm">{value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:info@raumton.com?subject=Showroom-Termin"
                  className="inline-block px-8 py-3 bg-[#1C1917] text-white text-sm hover:bg-[#B8955A] transition-colors"
                >
                  Termin anfragen
                </a>
              </div>

              <div className="h-80 lg:h-[450px] bg-[#F2EFE9] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9725.27!2d13.3543!3d52.4859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850c53e45e9c7%3A0x0!2sBerlin-Sch%C3%B6neberg!5e0!3m2!1sde!2sde!4v1"
                  className="w-full h-full"
                  loading="lazy"
                  title="Showroom raumton Berlin-Schöneberg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
