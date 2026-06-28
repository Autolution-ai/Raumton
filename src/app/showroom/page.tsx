import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Showroom Berlin-Schöneberg, raumton GmbH',
  description: 'Besuchen Sie unseren Showroom in Berlin-Schöneberg. Alle Absorber anfärben, 300+ Farben erleben. Termine nach Vereinbarung.',
}

const INFOS: string[][] = [
  ['Adresse', 'Berlin-Schöneberg (genaue Adresse nach Terminvereinbarung)'],
  ['Öffnungszeiten', 'Mo. bis Fr., 9 bis 18 Uhr | Termine nach Vereinbarung'],
  ['Telefon', '030 / 70 50 95 11'],
  ['E-Mail', 'info@raumton.com'],
]

export default function ShowroomPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <div className="pt-32 pb-16 bg-white">
          <div className="container-wide">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Showroom</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 max-w-3xl leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>Akustik erleben.{' '}<span className="text-[#C8A96E]">In Berlin-Schöneberg.</span></h1>
            <p className="text-[#606060] text-lg max-w-2xl leading-relaxed">Kein Katalog ersetzt das echte Erlebnis. Im Showroom können Sie alle unsere Produkte anfässen, die Qualität beurteilen und in Ruhe mit unseren Experten sprechen.</p>
          </div>
        </div>
        <div className="bg-[#F9F7F4] py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-3 block">Kontakt & Adresse</span>
                <h2 className="text-3xl text-[#1A1A1A] mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>Wir freuen uns auf Sie.</h2>
                <div className="space-y-4 mb-10">
                  {INFOS.map(([label, value]) => (
                    <div key={label} className="flex gap-4 border-b border-[#E5E2DC] pb-4">
                      <span className="text-[#888] text-sm w-36 flex-shrink-0">{label}</span>
                      <span className="text-[#1A1A1A] text-sm">{value}</span>
                    </div>
                  ))}
                </div>
                <a href="mailto:info@raumton.com?subject=Showroom-Termin" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A96E] text-white font-semibold text-sm hover:bg-[#B8955A] transition-colors duration-200">Termin anfragen</a>
              </div>
              <div className="h-80 lg:h-[420px] overflow-hidden border border-[#E5E2DC]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9725.27!2d13.3543!3d52.4859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850c53e45e9c7%3A0x0!2sBerlin-Sch%C3%B6neberg!5e0!3m2!1sde!2sde!4v1" className="w-full h-full" loading="lazy" title="Showroom raumton Berlin-Schöneberg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F7F4] py-20 border-t border-[#EBEBEB]">
          <div className="container-wide text-center">
            <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Lieber erst online anfragen?</h2>
            <p className="text-[#888] mb-8 max-w-xl mx-auto text-sm leading-relaxed">Kostenlose Vor-Ort-Beratung und Akustikmessung, wir melden uns innerhalb von 1 Werktag.</p>
            <a href="#anfrage" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-white font-semibold hover:bg-[#B8955A] transition-colors duration-200">Jetzt kostenlose Beratung sichern</a>
          </div>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}