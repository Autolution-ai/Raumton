import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Kontakt – raumton GmbH Berlin',
  description:
    'Kontaktieren Sie raumton GmbH in Berlin. Telefonisch, per E-Mail oder über unser Online-Formular. Kostenlose Erstberatung.',
}

export default function KontaktPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#F2EFE9] pt-32 pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">Kontakt</span>
            </div>
            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1C1917] mb-4"
            >
              Sprechen wir.
            </h1>
            <p className="text-[#6B6560] text-lg max-w-xl">
              Kostenlose Erstberatung — telefonisch, per E-Mail oder über das Formular.
              Wir melden uns innerhalb von 1 Werktag.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-white py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E2DDD6]">
              {[
                { label: 'Telefon', value: '030 / 70 50 95 11', href: 'tel:+493070509511' },
                { label: 'E-Mail', value: 'info@raumton.com', href: 'mailto:info@raumton.com' },
                { label: 'Adresse', value: 'Berlin-Schöneberg' },
              ].map((item) => (
                <div key={item.label} className="bg-white p-10">
                  <div className="text-[#A8A29E] text-xs tracking-widest uppercase mb-3">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#1C1917] text-lg hover:text-[#B8955A] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#1C1917] text-lg">{item.value}</span>
                  )}
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
