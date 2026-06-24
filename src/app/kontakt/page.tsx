import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = { title: 'Kontakt – raumton GmbH Berlin', description: 'Kontaktieren Sie raumton GmbH in Berlin. Telefonisch, per E-Mail oder über unser Online-Formular. Kostenlose Erstberatung.' }

export default function KontaktPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <div className="container-wide mb-16">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Kontakt</span>
          <h1 className="text-5xl sm:text-6xl text-white mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Sprechen wir.</h1>
          <p className="text-[#A0A0A0] text-lg max-w-xl">Kostenlose Erstberatung – telefonisch, per E-Mail oder über das Formular. Wir melden uns innerhalb von 1 Werktag.</p>
        </div>
        <div className="container-wide mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A]">
            {[{ label: 'Telefon', value: '030 / 70 50 95 11', href: 'tel:+493070509511' }, { label: 'E-Mail', value: 'info@raumton.com', href: 'mailto:info@raumton.com' }, { label: 'Adresse', value: 'Berlin-Schöneberg' }].map((item) => (
              <div key={item.label} className="bg-[#141414] p-8">
                <div className="text-[#606060] text-xs tracking-widest uppercase mb-3">{item.label}</div>
                {item.href ? <a href={item.href} className="text-white text-lg hover:text-[#C8A96E] transition-colors">{item.value}</a> : <span className="text-white text-lg">{item.value}</span>}
              </div>
            ))}
          </div>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
