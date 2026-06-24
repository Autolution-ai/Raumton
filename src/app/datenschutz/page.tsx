import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = { title: 'Datenschutz – raumton GmbH', robots: { index: false, follow: false } }

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container-narrow">
          <h1 className="text-4xl text-white mb-10" style={{ fontFamily: 'var(--font-playfair), serif' }}>Datenschutzerklärung</h1>
          <div className="space-y-8 text-[#A0A0A0] text-sm leading-relaxed">
            <div><h2 className="text-white font-semibold mb-2">1. Datenschutz auf einen Blick</h2><p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p></div>
            <div><h2 className="text-white font-semibold mb-2">2. Verantwortlicher</h2><p>raumton GmbH, Berlin-Schöneberg<br />E-Mail: info@raumton.com<br />Telefon: 030 / 70 50 95 11</p></div>
            <div><h2 className="text-white font-semibold mb-2">3. Datenerfassung</h2><p>Wenn Sie unser Kontaktformular nutzen, werden die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.</p></div>
            <div><h2 className="text-white font-semibold mb-2">4. Ihre Rechte</h2><p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich hierfür an: info@raumton.com</p></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
