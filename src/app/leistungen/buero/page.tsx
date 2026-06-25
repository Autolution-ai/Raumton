import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Bueroakustik Berlin. Grossraumbuero & Konferenzraum | raumton',
  description:
    'Schlechte Bueroakustik kostet Produktivitaet und Mitarbeiter. raumton misst, plant und optimiert Ihre Bueroakustik in Berlin. Kostenlose Erstberatung.',
}

const STATS = [
  {
    stat: '>55 dB',
    label: 'Kritischer Laermpegel',
    text: 'Ab hier sinkt die kognitive Leistung messbar. In den meisten Grossraumbueoros ist dieser Pegel Normalzustand.',
  },
  {
    stat: '-66%',
    label: 'Weniger Fokuszeit',
    text: 'In lauten Bueoros verlieren Mitarbeiter bis zu zwei Drittel ihrer Fokuszeit durch akustische Ablenkung.',
  },
  {
    stat: '3x',
    label: 'Mehr Stress',
    text: 'Laermbedingter Stress ist einer der Hauptgruende fuer krankheitsbedingte Fehlzeiten im Buero.',
  },
]

const PROBLEMS = [
  {
    title: 'Meetings werden zur Qual',
    text: 'Wer im Konferenzraum dreimal nachfragen muss, verliert den Faden. Schlechte Sprachverstaendlichkeit kostet Zeit und hinterlaesst den falschen Eindruck beim Kunden.',
  },
  {
    title: 'Mitarbeiter buchen Homeoffice wegen Laerm',
    text: 'Der Hauptgrund, warum Mitarbeiter das Buero meiden, ist nicht die Pendelzeit. Es ist der Geraeuschpegel. Schlechte Akustik kostet Praesenz, Teamkohaeision und Innovationspotenzial.',
  },
  {
    title: 'Erschoepfung, die sich nicht erklaeren laesst',
    text: 'Dauernde Hintergrundgeraeusche machen muede, auch wenn niemand laut spricht. Das Gehirn filtert aktiv heraus. Das kostet Energie. Jeden Tag.',
  },
]

const PRODUCTS = [
  {
    name: 'Deckenabsorber',
    text: 'Wirken auf die gesamte Raumflaeche und reduzieren den Nachhall am effektivsten. Unauffaellig oder als Designelement.',
  },
  {
    name: 'Wandabsorber',
    text: 'Strategisch an Reflexionsflaechn platziert. In ueber 300 Farben und Texturen passend zu Ihrer CI.',
  },
  {
    name: 'Tischtrennwaende',
    text: 'Fokusschutz am Arbeitsplatz. Reduzieren direkte Schalluebertragung zwischen Tischen, ohne den Raum zu teilen.',
  },
  {
    name: 'Deckensegel',
    text: 'Freischwebend oder abgehaengt. Akustisch hocheffektiv und als Gestaltungselement in offenen Flaechen ideal.',
  },
]

const PROCESS = [
  { nr: '01', title: 'Kostenlose Erstberatung', text: 'Telefonisch oder vor Ort in Berlin-Schoeneberg. Wir hoeren zu, bevor wir irgendetwas empfehlen.' },
  { nr: '02', title: 'RT60-Messung vor Ort', text: 'Wir messen die Nachhallzeit Ihres Raumes und zeigen Ihnen, wo das Problem liegt und was danach realistisch besser wird.' },
  { nr: '03', title: 'Individuelle Planung', text: 'Auf Basis der Messung entwickeln wir eine Loesung mit 3D-Visualisierung. Farben und Materialien nach Wahl.' },
  { nr: '04', title: 'Fertigung & Montage', text: 'Gefertigt in Berlin-Schoeneberg. Montage in der Regel in einem Tag, blitzsauber und termingerecht.' },
]

export default function BueroPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0A0A0A] pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
              alt="Moderner Konferenzraum"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 to-[#0A0A0A]" />
          </div>
          <div className="container-wide relative z-10">
            <p className="text-[#C8A96E] text-xs tracking-widest uppercase mb-4">Leistungen / Buero</p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white max-w-2xl mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Mehr Konzentration.{' '}
              <span className="text-[#C8A96E]">Weniger Laerm.</span>
            </h1>
            <p className="text-[#A0A0A0] text-lg max-w-xl mb-10">
              Die meisten Bueoros in Berlin sind zu laut. Das sagen nicht Mitarbeiter im Gespraech. Das zeigt das Messgeraet.
            </p>
            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold hover:bg-[#D9BE8C] transition-colors"
            >
              Kostenlose Bueroakustik-Beratung anfragen
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E2DDD6]">
              {STATS.map((s) => (
                <div key={s.stat} className="bg-white p-10">
                  <div className="text-5xl font-light text-[#B8955A] mb-2" style={{ fontFamily: 'var(--font-display), serif' }}>{s.stat}</div>
                  <div className="text-[#1C1917] text-sm font-semibold mb-2">{s.label}</div>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-[#F2EFE9] py-20">
          <div className="container-wide">
            <h2 className="text-3xl font-light text-[#1C1917] mb-12" style={{ fontFamily: 'var(--font-display), serif' }}>
              Was passiert, wenn die Akustik nicht stimmt
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROBLEMS.map((p) => (
                <div key={p.title} className="bg-white p-8 border-t-2 border-[#B8955A]">
                  <h3 className="text-[#1C1917] font-semibold mb-3">{p.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="bg-white py-20">
          <div className="container-wide">
            <h2 className="text-3xl font-light text-[#1C1917] mb-4" style={{ fontFamily: 'var(--font-display), serif' }}>
              Welche Produkte wir fuer Bueoros einsetzen
            </h2>
            <p className="text-[#6B6560] mb-12 max-w-xl">Nicht jeder Raum braucht dieselbe Loesung. Wir waehlen Produkte nach Messergebnis, Raumgeometrie und Ihrem Design.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((p) => (
                <div key={p.name} className="p-6 border border-[#E2DDD6] hover:border-[#B8955A] transition-colors">
                  <div className="w-8 h-px bg-[#B8955A] mb-4" />
                  <h3 className="text-[#1C1917] font-semibold mb-2">{p.name}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-[#F2EFE9] py-20">
          <div className="container-wide">
            <h2 className="text-3xl font-light text-[#1C1917] mb-12" style={{ fontFamily: 'var(--font-display), serif' }}>
              Wie ein Projekt bei uns ablaeuft
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD6]">
              {PROCESS.map((s) => (
                <div key={s.nr} className="bg-[#F2EFE9] p-8">
                  <div className="text-4xl font-bold text-[#E2DDD6] mb-4">{s.nr}</div>
                  <h3 className="text-[#1C1917] font-semibold mb-2">{s.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-white py-20">
          <div className="container-wide">
            <div className="max-w-3xl border-l-4 border-[#B8955A] pl-8">
              <p className="text-xl text-[#1C1917] font-light leading-relaxed mb-6" style={{ fontFamily: 'var(--font-display), serif' }}>
                &ldquo;Der Konferenzraum ist endlich wieder benutzbar. Vorher haben wir Meetings angespannt beendet, wegen des Halls, nicht wegen des Inhalts. Seit raumton schreiben wir einfach das Protokoll und gehen.&rdquo;
              </p>
              <p className="text-[#1C1917] font-semibold text-sm">Sandra K. &mdash; Office Managerin, Technologieunternehmen Berlin</p>
              <p className="text-[#6B6560] text-xs mt-4">Aehnliche Projekte: RepRisk Germany GmbH &middot; Rolls-Royce Power Systems AG &middot; S-Kreditpartner GmbH</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F2EFE9] py-20">
          <div className="container-wide">
            <h2 className="text-3xl font-light text-[#1C1917] mb-10" style={{ fontFamily: 'var(--font-display), serif' }}>
              Haeufige Fragen zur Bueroakustik
            </h2>
            <div className="max-w-2xl space-y-4">
              {[
                { q: 'Was kostet Bueroakustik?', a: 'Ein typischer Konferenzraum (ca. 30 m2) liegt ab ca. 1.500 bis 3.000 Euro, inkl. Planung und Montage. Fuer Grossraumbueoros kalkulieren wir individuell. Unser Angebot ist kostenlos und unverbindlich.' },
                { q: 'Wie lange dauert die Montage?', a: 'In der Regel ein Tag. Wir koordinieren den Termin so, dass der Betrieb nicht beeintraechtigt wird, auch abends oder am Wochenende moeglich.' },
                { q: 'Muss ich waehrend der Montage das Buero raeumen?', a: 'Nicht zwingend. Viele Montagen erfolgen ausserhalb der Kernarbeitszeiten. Wir stimmen das Vorgehen vorab mit Ihnen ab.' },
                { q: 'Gibt es eine Garantie auf die Wirkung?', a: 'Ja. Wir messen die Akustik vor und nach der Montage. Wenn das Ergebnis nicht unseren gemeinsamen Zielen entspricht, bessern wir nach, kostenlos.' },
              ].map((faq) => (
                <details key={faq.q} className="bg-white border border-[#E2DDD6] p-6 group">
                  <summary className="text-[#1C1917] font-semibold cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-[#B8955A] text-xl">+</span>
                  </summary>
                  <p className="text-[#6B6560] text-sm leading-relaxed mt-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#1C1917] py-20">
          <div className="container-wide text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-display), serif' }}>
              Ihr Buero verdient bessere Akustik.
            </h2>
            <p className="text-[#A8A29E] mb-8 max-w-lg mx-auto">
              Kostenlose Erstberatung. Kein Verkaufsdruck. Ehrliche Einschaetzung, ob raumton die richtige Loesung ist oder nicht.
            </p>
            <a href="#anfrage" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold hover:bg-[#D9BE8C] transition-colors">
              Jetzt kostenlos beraten lassen
            </a>
          </div>
        </section>

        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
