import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Akustik fuer Kitas, Schulen & Bildungseinrichtungen Berlin | raumton',
  description:
    'Laerm macht Kinder und Lehrkaerfte krank. raumton schafft ruhige Lernraeume mit robusten, sicheren Absorbern ohne Mineralfasern. Kostenlose Erstberatung.',
}

const STATS = [
  {
    stat: '85 dB',
    label: 'Typischer Kita-Pegel',
    text: 'Das entspricht einer belebten Kreuzung. Kinder entwickeln in solchen Umgebungen messbar schneller Stresssymptome.',
  },
  {
    stat: '-40%',
    label: 'Weniger Verstaendigungsprobleme',
    text: 'Bessere Raumakustik verbessert die Sprachentwicklung, die Konzentration und das soziale Miteinander nachweislich.',
  },
  {
    stat: '30%',
    label: 'Weniger Fehlzeiten',
    text: 'Laermbedingte Belastung ist einer der Hauptgruende fuer Krankmeldungen bei Erzieherinnen und Lehrern.',
  },
]

const PROBLEMS = [
  {
    title: 'Kinder schreien, weil andere schreien',
    text: 'Laerm erzeugt Gegenlarm. Kinder uebertoenen einander, bis alle schreien und niemand mehr zuhoert. Es ist kein Verhaltensproblem. Es ist ein Akustikproblem.',
  },
  {
    title: 'Erzieherinnen erschoepfen sich an der Stimme',
    text: 'Stimmbelastung ist die haefigste berufsbedingte Erkrankung in paedagogischen Berufen. Gute Raumakustik schuetzt nicht nur Kinder, sondern das gesamte Team.',
  },
  {
    title: 'Lernerfolge bleiben aus',
    text: 'Kinder, die sich nicht konzentrieren koennen, lernen schlechter, unabhaengig von Intelligenz und Engagement. Laerm ist ein unterschaetzter Faktor in der Bildungsqualitaet.',
  },
]

const PRODUCTS = [
  {
    name: 'Wandabsorber (robust)',
    text: 'Besonders strapazierfahige Oberflaechen, leicht zu reinigen, stossfest. In Kita-Farben oder dezent fuer Schulen.',
  },
  {
    name: 'Deckenpaneele',
    text: 'Reduzieren Nachhall auf der grossen Flaeche. Kein Eingriff in die Wandgestaltung, ideal fuer Bestandsraeume.',
  },
  {
    name: 'Akustik-Sonderformen',
    text: 'Runde Paneele, Tiere, Buchstaben fuer Kitas, die Akustik und Raumgestaltung verbinden wollen.',
  },
  {
    name: 'Deckensegel',
    text: 'Freischwebend, modern. Fuer Schulen und Universitaeten, die Funktion und Aesthetik kombinieren.',
  },
]

const PROCESS = [
  { nr: '01', title: 'Kostenlose Erstberatung', text: 'Wir kommen vorbei und schauen uns die Einrichtung an. Ohne Verpflichtung, ohne Verkaufsdruck.' },
  { nr: '02', title: 'Messung & Analyse', text: 'RT60-Messung der Raeume. Wir zeigen, wo die akustische Belastung am groessten ist und was realistisch verbesserbar ist.' },
  { nr: '03', title: 'Sichere Materialauswahl', text: 'Ausschliesslich mineralfaserfreie Materialien. Wir stellen auf Anfrage alle Zertifikate bereit.' },
  { nr: '04', title: 'Montage ausserhalb der Betriebszeiten', text: 'In Schulferien, am Wochenende oder abends. Kein Unterrichtsausfall, keine Elternkommunikation noetig.' },
]

export default function BildungPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0A0A0A] pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
              alt="Kita Gruppenraum"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 to-[#0A0A0A]" />
          </div>
          <div className="container-wide relative z-10">
            <p className="text-[#C8A96E] text-xs tracking-widest uppercase mb-4">Leistungen / Bildung & Kita</p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white max-w-2xl mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Kinder lernen besser,{' '}
              <span className="text-[#C8A96E]">wenn der Raum es zulaesst.</span>
            </h1>
            <p className="text-[#A0A0A0] text-lg max-w-xl mb-10">
              Laerm in Kitas und Schulen ist keine Begleiterscheinung. Er ist eine messbare Belastung fuer Kinder und Paedagogen. raumton macht den Unterschied hoerbar.
            </p>
            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold hover:bg-[#D9BE8C] transition-colors"
            >
              Kostenlose Beratung fuer Bildungseinrichtungen
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
              Was Laerm in Lernraeumen wirklich bedeutet
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
              Was wir in Bildungseinrichtungen einsetzen
            </h2>
            <p className="text-[#6B6560] mb-12 max-w-xl">Alle Materialien mineralfaserfrei, ohne Ausduenstungen, leicht zu reinigen. Sicherheit hat keine Ausnahmen.</p>
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
              Wie wir in Ihrer Einrichtung vorgehen
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
                &ldquo;Die Kinder sind ruhiger geworden. Nicht weil wir es verlangt haben, sondern weil der Raum es ihnen einfach ermoeglicht. Ich haette nicht gedacht, dass Akustik so einen Unterschied macht.&rdquo;
              </p>
              <p className="text-[#1C1917] font-semibold text-sm">Katrin W. &mdash; Kita-Leiterin, Kita Jeverstrasse Berlin</p>
              <p className="text-[#6B6560] text-xs mt-4">Aehnliche Projekte: Kita Jeverstrasse Berlin &middot; weitere Kitas und Schulen in Berlin und Umgebung</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F2EFE9] py-20">
          <div className="container-wide">
            <h2 className="text-3xl font-light text-[#1C1917] mb-10" style={{ fontFamily: 'var(--font-display), serif' }}>
              Haeufige Fragen zu Akustik in Bildungseinrichtungen
            </h2>
            <div className="max-w-2xl space-y-4">
              {[
                { q: 'Sind die Materialien fuer Kinder sicher?', a: 'Absolut. Wir verwenden ausschliesslich mineralfaserfreie Materialien ohne Ausduenstungen. Alle Produkte entsprechen den geltenden Sicherheitsstandards fuer Bildungseinrichtungen. Auf Anfrage stellen wir vollstaendige Materialzertifikate bereit.' },
                { q: 'Muss die Einrichtung fuer die Montage geschlossen werden?', a: 'Nein. Montagen planen wir grundsaetzlich ausserhalb der Betriebszeiten, in Schulferien, am Wochenende oder abends. Kein Unterrichtsausfall, keine Elternkommunikation noetig.' },
                { q: 'Koennen Absorber auch als Gestaltungselement eingesetzt werden?', a: 'Ja, und das empfehlen wir gerade fuer Kitas. Wir bieten Sonderformen in Kita-Farben, als Tiere oder geometrische Formen. Akustik und Raumgestaltung in einem.' },
                { q: 'Wer bezahlt das, wir oder der Traeger?', a: 'Das haengt vom Traeger und Bundesland ab. Viele Projekte werden durch Foerderprogramme finanziert, zum Beispiel KfW oder Kitafoerdermittel. Wir beraten Sie gerne, welche Foerdermoeglichkeiten fuer Sie in Frage kommen.' },
              ].map((faq) => (
                <details key={faq.q} className="bg-white border border-[#E2DDD6] p-6">
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
              Bessere Akustik ist das guenstigste Bildungsupgrade.
            </h2>
            <p className="text-[#A8A29E] mb-8 max-w-lg mx-auto">
              Kostenlose Erstberatung fuer Kitas, Schulen und Bildungseinrichtungen. Wir kennen die besonderen Anforderungen.
            </p>
            <a href="#anfrage" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold hover:bg-[#D9BE8C] transition-colors">
              Jetzt Beratung anfragen
            </a>
          </div>
        </section>

        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
