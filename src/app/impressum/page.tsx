import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Impressum – raumton GmbH',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white pt-32 pb-24">
        <div className="container-wide max-w-3xl">
          <h1
            style={{ fontFamily: 'var(--font-display), serif' }}
            className="text-4xl font-light text-[#1C1917] mb-10"
          >
            Impressum
          </h1>
          <div className="space-y-8 text-sm leading-relaxed text-[#6B6560]">
            <div>
              <h2 className="text-[#1C1917] font-medium mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                raumton GmbH<br />
                Berlin-Schöneberg<br />
                Deutschland
              </p>
            </div>
            <div>
              <h2 className="text-[#1C1917] font-medium mb-2">Kontakt</h2>
              <p>
                Telefon:{' '}
                <a href="tel:+493070509511" className="text-[#B8955A] hover:underline">
                  030 / 70 50 95 11
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:info@raumton.com" className="text-[#B8955A] hover:underline">
                  info@raumton.com
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-[#1C1917] font-medium mb-2">Verantwortlich für den Inhalt</h2>
              <p>
                Geschäftsführung: Leo Ripper<br />
                raumton GmbH, Berlin
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
