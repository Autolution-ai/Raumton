import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = { title: 'Showroom Berlin-Schöneberg – raumton GmbH', description: 'Besuchen Sie unseren Showroom in Berlin-Schöneberg. Alle Absorber anfassen, 300+ Farben erleben.' }

export default function ShowroomPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container-wide">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Showroom</span>
          <h1 className="text-5xl sm:text-6xl text-white mb-6 max-w-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>Akustik erleben. <span className="text-gradient-gold">In Berlin-Schöneberg.</span></h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mb-12">Kein Katalog ersetzt das echte Erlebnis. Im Showroom können Sie alle unsere Produkte anfassen und mit unseren Experten sprechen.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-4 mb-10">{[['Adresse', 'Berlin-Schöneberg (genaue Adresse nach Terminvereinbarung)'], ['Öffnungszeiten', 'Mo–Fr 9–18 Uhr | Termine nach Vereinbarung'], ['Telefon', '030 / 70 50 95 11'], ['E-Mail', 'info@raumton.com']].map(([label, value]) => (<div key={label} className="flex gap-4 border-b border-[#1A1A1A] pb-4"><span className="text-[#606060] text-sm w-32 flex-shrink-0">{label}</span><span className="text-white text-sm">{value}</span></div>))}</div>
              <a href="mailto:info@raumton.com?subject=Showroom-Termin" className="inline-block px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold hover:bg-[#D9BE8C] transition-colors">Termin anfragen</a>
            </div>
            <div className="h-80 lg:h-[450px] bg-[#141414] border border-[#1A1A1A] overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9725.27!2d13.3543!3d52.4859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850c53e45e9c7%3A0x0!2sBerlin-Sch%C3%B6neberg!5e0!3m2!1sde!2sde!4v1" className="w-full h-full grayscale opacity-70" loading="lazy" title="Showroom raumton Berlin-Schöneberg" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
