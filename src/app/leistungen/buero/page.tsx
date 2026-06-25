import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Büroakustik Berlin – Großraumbüro & Konferenzraum | raumton',
  description:
    'Professionelle Büroakustik für Großraumbüros, Konferenzräume und Open Spaces in Berlin. Messung, Planung, Fertigung und Montage von raumton seit 2006.',
}

const STATS = [
  { wert: '>55 dB', label: 'Kritischer Lärmpegel', text: 'Ab 55 Dezibel sinkt die kognitive Leistung messbar – Fehler häufen sich.' },
  { wert: '−15 %', label: 'Produktivitätsverlust', text: 'Studien belegen: Lärm am Arbeitsplatz kostet bis zu 15 % Produktivität.' },
  { wert: '3×', label: 'Mehr Stress', text: 'Mitarbeiter in lauten Büros berichten dreimal häufiger von Erschöpfung.' },
]

const SCHMERZEN = [
  {
    titel: 'Großraumbüro: alle sprechen lauter',
    text: 'Weil alle lauter sprechen, spricht jeder noch lauter. Der Kreislauf ist bekannt – aber lösbar. Deckenabsorber und Tischtrennwände brechen ihn dauerhaft.',
  },
  {
    titel: 'Meetings ohne Sprachverständlichkeit',
    text: 'Hall im Konferenzraum macht hybride Meetings zur Qual. Niemand versteht die Hälfte. Gezielte Wandabsorber lösen das Problem ohne optische Kompromisse.',
  },
  {
    titel: 'Mitarbeiter fliehen ins Homeoffice',
    text: 'Wenn das Büro lauter ist als zu Hause, verliert das Büro. Gute Akustik ist ein unterschätzter Faktor für Präsenz und Arbeitgeberattraktivität.',
  },
]

const PRODUKTE = [
  { name: 'Deckenabsorber', text: 'Maximale Wirkung bei minimalem Platzbedarf. Hängesysteme und Deckensegel schlucken den Hall von oben – dort, wo er entsteht.' },
  { name: 'Wandabsorber', text: 'Textil ummantelte Paneele in über 300 Farben. Integrieren sich ins Raumdesign oder setzen bewusste Akzente.' },
  { name: 'Tischtrennwände', text: 'Schallschutz direkt am Arbeitsplatz. Reduzieren Direktschall zwischen Schreibtischen ohne bauliche Eingriffe.' },
  { name: 'Deckensegel', text: 'Freischwebende Absorber-Elemente für offene Räume. Akustisch wirksam, architektonisch ein Statement.' },
]

const PROZESS = [
  { nr: '01', titel: 'Kostenlose Messung', text: 'Wir kommen zu Ihnen, messen die Nachhallzeit (RT60) und zeigen, wo das Problem liegt.' },
  { nr: '02', titel: 'Individuelle Planung', text: '3D-Visualisierung mit Farben und Materialien passend zu Ihrem Büro und CI.' },
  { nr: '03', titel: 'Berliner Fertigung', text: 'Alle Absorber werden in unserem Berliner Atelier in Schöneberg gefertigt – ca. 3 Wochen.' },
  { nr: '04', titel: 'Montage in einem Tag', text: 'Professionelle Montage – blitzsauber, termingerecht, ohne Betriebsunterbrechung.' },
]

export default function BueroPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <div className="relative min-h-[60vh] flex items-center bg-[#0A0A0A] overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
              alt="Modernes Großraumbüro Berlin"
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
          </div>
          <div className="container-wide relative z-10">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
              Leistungen / Büro
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 max-w-3xl leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Mehr Konzentration.{' '}
              <span className="text-[#C8A96E]">Weniger Lärm.</span>
            </h1>
            <p className="text-[#A0A0A0] text-lg max-w-2xl leading-relaxed">
              Schlechte Büroakustik kostet Produktivität, erhöht Stress und treibt
              Mitarbeiter ins Homeoffice. raumton optimiert Ihr Büro messbar – von der
              Messung bis zur Montage.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5]">
              {STATS.map((s) => (
                <div key={s.wert} className="bg-white p-10">
                  <div
                    className="text-5xl font-bold text-[#B8955A] mb-2"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    {s.wert}
                  </div>
                  <div className="text-[#1A1A1A] font-semibold mb-2">{s.label}</div>
                  <p className="text-[#606060] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pain Points */}
        <div className="bg-[#F2EFE9] py-24">
          <div className="container-wide">
            <span className="text-[#B8955A] text-sm tracking-widest uppercase mb-4 block">
              Das Problem
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[#1A1A1A] mb-12 max-w-2xl"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Lärm kostet mehr als Sie denken.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SCHMERZEN.map((s) => (
                <div key={s.titel} className="bg-white p-8 border-t-2 border-[#B8955A]">
                  <h3 className="text-[#1A1A1A] font-semibold mb-3">{s.titel}</h3>
                  <p className="text-[#606060] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Produkte */}
        <div className="bg-[#0D0D0D] py-24">
          <div className="container-wide">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
              Unsere Lösungen
            </span>
            <h2
              className="text-3xl sm:text-4xl text-white mb-12 max-w-2xl"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Das richtige Produkt für jeden Büroraum.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
              {PRODUKTE.map((p) => (
                <div key={p.name} className="bg-[#0D0D0D] p-8">
                  <div className="w-8 h-px bg-[#C8A96E] mb-6" />
                  <h3 className="text-white font-semibold mb-3">{p.name}</h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prozess */}
        <div className="bg-white py-24">
          <div className="container-wide">
            <span className="text-[#B8955A] text-sm tracking-widest uppercase mb-4 block">
              Unser Prozess
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[#1A1A1A] mb-12"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Von der Messung bis zur Montage — alles aus einer Hand.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5]">
              {PROZESS.map((s) => (
                <div key={s.nr} className="bg-white p-8">
                  <div className="text-5xl font-bold text-[#F0EDE7] mb-4 select-none"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {s.nr}
                  </div>
                  <h3 className="text-[#1A1A1A] font-semibold mb-2">{s.titel}</h3>
                  <p className="text-[#606060] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#F2EFE9] py-24">
          <div className="container-wide max-w-3xl">
            <div className="border-l-4 border-[#B8955A] pl-8">
              <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6 italic">
                „Der Konferenzraum ist endlich wieder benutzbar. Vorher haben wir Meetings
                angespannt beendet – wegen des Halls, nicht wegen des Inhalts. Seit raumton
                schreiben wir einfach das Protokoll und gehen.“
              </p>
              <div>
                <div className="font-semibold text-[#1A1A1A]">Sandra K.</div>
                <div className="text-[#606060] text-sm">Office Managerin · Technologieunternehmen, Berlin</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white py-24">
          <div className="container-wide max-w-3xl">
            <span className="text-[#B8955A] text-sm tracking-widest uppercase mb-4 block">
              Häufige Fragen
            </span>
            <h2
              className="text-3xl text-[#1A1A1A] mb-10"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Was Sie wissen möchten.
            </h2>
            <div className="divide-y divide-[#E5E5E5]">
              {[
                {
                  frage: 'Wie lange dauert ein Büroprojekt?',
                  antwort: 'Von der ersten Beratung bis zur fertigen Montage dauert es in der Regel 5–7 Wochen. Die Montage selbst ist in einem Tag abgeschlossen.',
                },
                {
                  frage: 'Was kostet die Akustikoptimierung für ein Büro?',
                  antwort: 'Ein Konferenzraum (ca. 30 m²) liegt ab ca. 1.500–3.000 €. Großraumbüros werden individuell kalkuliert. Angebot ist kostenlos.',
                },
                {
                  frage: 'Müssen wir den Betrieb unterbrechen?',
                  antwort: 'Nein. Unsere Montage ist in der Regel in einem Tag abgeschlossen und erfolgt, wenn möglich, außerhalb der Kernarbeitszeiten.',
                },
                {
                  frage: 'Sind die Absorber rückstandsfrei entfernbar?',
                  antwort: 'Ja. Unsere Befestigungssysteme hinterlassen keine bleibenden Schäden – ideal auch für Mietobjekte.',
                },
              ].map((item) => (
                <details key={item.frage} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-[#1A1A1A] font-medium hover:text-[#B8955A] transition-colors">
                    {item.frage}
                    <span className="text-[#B8955A] text-xl group-open:rotate-45 transition-transform duration-200 ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-[#606060] text-sm leading-relaxed">{item.antwort}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#1C1917] py-20">
          <div className="container-wide text-center">
            <h2
              className="text-3xl sm:text-4xl text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Bereit für ein ruhigeres Büro?
            </h2>
            <p className="text-[#A0A0A0] mb-8 max-w-xl mx-auto">
              Kostenlose Vor-Ort-Beratung und Akustikmessung – innerhalb von 1 Werktag Rückmeldung.
            </p>
            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold hover:bg-[#D9BE8C] transition-colors duration-200"
            >
              Jetzt kostenlose Beratung sichern
            </a>
          </div>
        </div>

        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
