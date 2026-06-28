import { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { FAQS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'FAQ, Alles zu Schallabsorber & Akustik | raumton',
  description: 'Häufige Fragen zu Raumakustik, Preisen, Ablauf und Materialien, raumton beantwortet alles rund um Schallabsorber und Akustiklösungen in Berlin.',
}

const KATEGORIEN = [
  { key: 'ablauf', label: 'Preise & Ablauf' },
  { key: 'materialien', label: 'Produkte & Materialien' },
  { key: 'technik', label: 'Technik & Ergebnisse' },
]

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        <div className="pt-32 pb-16 bg-white">
          <div className="container-wide max-w-3xl">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">FAQ</span>
            <h1 className="text-5xl sm:text-6xl text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Häufige Fragen zu raumton & Raumakustik.</h1>
            <p className="text-[#606060] text-lg leading-relaxed">Alles was Sie wissen möchten, von Kosten und Ablauf bis zur Technik hinter unseren Lösungen. Nicht gefunden? <a href="tel:+493070509511" className="text-[#C8A96E] hover:underline">030 / 70 50 95 11</a></p>
          </div>
        </div>
        <div className="bg-[#F9F7F4] py-16">
          <div className="container-wide max-w-3xl space-y-16">
            {KATEGORIEN.map((kat) => {
              const items = FAQS.filter((f) => f.kategorie === kat.key)
              return (
                <div key={kat.key}>
                  <h2 className="text-lg text-[#C8A96E] font-semibold tracking-wide mb-6 border-b border-[#E5E2DC] pb-4">{kat.label}</h2>
                  <div className="divide-y divide-[#EBEBEB]">
                    {items.map((faq) => (
                      <details key={faq.id} className="group py-5">
                        <summary className="flex items-center justify-between cursor-pointer list-none text-[#1A1A1A] text-sm font-medium hover:text-[#C8A96E] transition-colors">
                          {faq.frage}
                          <span className="text-[#C8A96E] text-xl group-open:rotate-45 transition-transform duration-200 ml-4 flex-shrink-0">+</span>
                        </summary>
                        <p className="mt-4 text-[#888] text-sm leading-relaxed">{faq.antwort}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-white py-20 border-t border-[#EBEBEB]">
          <div className="container-wide text-center">
            <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Noch Fragen? Wir sind für Sie da.</h2>
            <p className="text-[#888] mb-8 max-w-xl mx-auto text-sm leading-relaxed">Kostenlose Vor-Ort-Beratung und Akustikmessung, wir melden uns innerhalb von 1 Werktag.</p>
            <a href="#anfrage" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-white font-semibold hover:bg-[#B8955A] transition-colors duration-200">Kostenlos beraten lassen</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}