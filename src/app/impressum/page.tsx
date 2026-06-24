import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = { title: 'Impressum – raumton GmbH', robots: { index: false, follow: false } }

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container-narrow">
          <h1 className="text-4xl text-white mb-10" style={{ fontFamily: 'var(--font-playfair), serif' }}>Impressum</h1>
          <div className="space-y-8 text-[#A0A0A0] text-sm leading-relaxed">
            <div><h2 className="text-white font-semibold mb-2">Angaben gemäß § 5 TMG</h2><p>raumton GmbH<br />Berlin-Schöneberg<br />Deutschland</p></div>
            <div><h2 className="text-white font-semibold mb-2">Kontakt</h2><p>Telefon: 030 / 70 50 95 11<br />E-Mail: info@raumton.com</p></div>
            <div><h2 className="text-white font-semibold mb-2">Verantwortlich für den Inhalt</h2><p>Geschäftsführung: Leo Ripper<br />raumton GmbH, Berlin</p></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
