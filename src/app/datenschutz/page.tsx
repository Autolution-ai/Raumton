import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Datenschutz – raumton GmbH',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white pt-32 pb-24">
        <div className="container-wide max-w-3xl">
          <h1
            style={{ fontFamily: 'var(--font-display), serif' }}
            className="text-4xl font-light text-[#1C1917] mb-10"
          >
            Datenschutzerklärung
          </h1>
          <div className="space-y-8 text-sm leading-relaxed text-[#6B6560]">
            <div>
              <h2 className="text-[#1C1917] font-medium mb-2">1. Datenschutz auf einen Blick</h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
              </p>
            </div>
            <div>
              <h2 className="text-[#1C1917] font-medium mb-2">2. Verantwortlicher</h2>
              <p>
                raumton GmbH, Berlin-Schöneberg<br />
                E-Mail:{' '}
                <a href="mailto:info@raumton.com" className="text-[#B8955A] hover:underline">
                  info@raumton.com
                </a>
                <br />
                Telefon:{' '}
                <a href="tel:+493070509511" className="text-[#B8955A] hover:underline">
                  030 / 70 50 95 11
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-[#1C1917] font-medium mb-2">3. Datenerfassung</h2>
              <p>
                Wenn Sie unser Kontaktformular nutzen, werden die von Ihnen angegebenen Daten zur
                Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
              </p>
            </div>
            <div>
              <h2 className="text-[#1C1917] font-medium mb-2">4. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich hierfür an:{' '}
                <a href="mailto:info@raumton.com" className="text-[#B8955A] hover:underline">
                  info@raumton.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
