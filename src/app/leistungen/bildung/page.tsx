import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Akustik für Kitas, Schulen & Bildungseinrichtungen Berlin | raumton',
  description:
    'Lärm in Kitas und Schulen belastet Kinder und Lehrkräfte. raumton schafft bessere Lernumgebungen mit robusten, bunten Akustiklösungen in Berlin.',
}

const STATS = [
  { wert: '85 dB', label: 'Lärmpegel in Kitas', text: 'Typische Schallpegel in schlecht gedämmten Gruppenräumen – vergleichbar mit einer Kreissäge.' },
  { wert: '−40 %', label: 'Weniger Konzentration', text: 'Hoher Lärmpegel reduziert die Konzentrationsähigkeit von Kindern um bis zu 40 %.' },
  { wert: '30 %', label: 'Lehrkraft-Ausfälle', text: 'Ein Drittel aller Stimmerkrankungen bei Lehrkräften ist auf dauerhaften Lärm zurückzuführen.' },
]

const SCHMERZEN = [
  {
    titel: 'Lärm verhindert Lernen',
    text: 'Kinder, die sich gegenseitig nicht verstehen, lernen schlechter. Schlechte Akustik ist ein struktureller Bildungsnachteil – der sich mit Absorbern beheben lässt.',
  },
  {
    titel: 'Stimme und Gesundheit der Lehrkräfte',
    text: 'Wer täglich gegen Lärm anspricht, verliert früher die Stimme. Akustikoptimierung schützt die Gesundheit des pädagogischen Personals nachhaltig.',
  },
  {
    titel: 'Fehlende Rückzugsorte für Kinder',
    text: 'Manche Kinder reagieren stärker auf Lärm. Ruhige Rückzugsbereiche mit guter Akustik sind pädagogisch wertvoll – und mit den richtigen Produkten einfach realisierbar.',
  },
]

const PRODUKTE = [
  { name: 'Wandabsorber', text: 'Robust, waschbar und in allen RAL-Farben erhältlich. Sicher für Kinder nach Norm, einfach zu reinigen.' },
  { name: 'Deckenabsorber', text: 'Montiert außerhalb der Reichweite von Kindern. Hohe Wirksamkeit, keine Verletzungsgefahr, kein Wartungsaufwand.' },
  { name: 'Deckensegel', text: 'Großformatige Elemente für hohe Gruppenräume. Kommen in jeder Farbe – ein echter Hingucker, der nebenbei die Akustik rettet.' },
  { name: 'Raumteiler', text: 'Akustisch wirksame Trennelemente für Gruppenräume. Strukturieren den Raum ohne feste Wände – flexibel und kindgerecht.' },
]

const PROZESS = [
  { nr: '01', titel: 'Beratung & Messung', text: 'Wir besuchen Ihre Einrichtung außerhalb der Betreuungszeiten und messen ungestört.' },
  { nr: '02', titel: 'Planung mit Farbe', text: 'Absorber können in den Farben Ihres Einrichtungskonzepts geliefert werden – bunt ist erlaubt.' },
  { nr: '03', titel: 'Berliner Fertigung', text: 'Gefertigt in Berlin-Schöneberg. Alle Materialien sind mineralfaserfrei und 100 % recycelbar.' },
  { nr: '04', titel: 'Schnelle Montage', text: 'Montage in einem Tag, außerhalb der Öffnungszeiten – damit der Betrieb ungestört weiterläuft.' },
]

export default function BildungPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <div className="relative min-h-[60vh] flex items-center bg-[#0A0A0A] overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
              alt="Kita Berlin Akustik"
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
          </div>
          <div className="container-wide relative z-10">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
              Leistungen / Bildung
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 max-w-3xl leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Kinder werden nicht ruhiger befohlen.{' '}
              <span className="text-[#C8A96E]">Aber der Raum hilft.</span>
            </h1>
            <p className="text-[#A0A0A0] text-lg max-w-2xl leading-relaxed">
              Kinder und Lehrkräfte reagieren besonders empfindlich auf Lärm. raumton
              schafft angenehme Lernumgebungen – bunt, robust und ohne Einschränkung
              für den laufenden Betrieb.
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
              Lärm in Bildungseinrichtungen ist kein Schicksal.
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
              Robust, sicher, bunt – und akustisch wirksam.
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
              Außerhalb der Betreuungszeiten – ohne Unterbrechung.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5]">
              {PROZESS.map((s) => (
                <div key={s.nr} className="bg-white p-8">
                  <div
                    className="text-5xl font-bold text-[#F0EDE7] mb-4 select-none"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
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
                „Die Kinder sind ruhiger geworden – nicht weil wir es verlangt haben,
                sondern weil der Raum es ihnen einfach ermöglicht. Ich hätte nicht
                gedacht, dass Akustik so einen Unterschied macht.“
              </p>
              <div>
                <div className="font-semibold text-[#1A1A1A]">Katrin W.</div>
                <div className="text-[#606060] text-sm">Kita-Leiterin · Kita Jeverstraße, Berlin</div>
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
              Was Einrichtungen uns fragen.
            </h2>
            <div className="divide-y divide-[#E5E5E5]">
              {[
                {
                  frage: 'Sind die Materialien sicher für Kinder?',
                  antwort: 'Ja. Wir verwenden ausschließlich mineralfaserfreie Materialien ohne gesundheitliche Risiken. Auf Anfrage stellen wir Materialzertifikate zur Verfügung.',
                },
                {
                  frage: 'Können Absorber in Kitafarben geliefert werden?',
                  antwort: 'Selbstverständlich. Wir bieten über 300 Farben – von klassischem Beige bis zu kräftigem Blau oder Rot. Abstimmung nach Ihrem Raumkonzept inklusive.',
                },
                {
                  frage: 'Was kostet eine Kita-Akustiklösung?',
                  antwort: 'Ein Gruppenraum (ca. 40 m²) liegt typischerweise bei 1.800–3.500 €. Wir erstellen Ihnen ein kostenloses Angebot nach der Messung.',
                },
                {
                  frage: 'Können Kitas staatliche Förderung nutzen?',
                  antwort: 'In einigen Bundesländern sind Akustikmaßnahmen förderfähig. Wir beraten Sie gerne dazu und stellen alle nötigen Unterlagen bereit.',
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
              Bessere Akustik. Besseres Lernen.
            </h2>
            <p className="text-[#A0A0A0] mb-8 max-w-xl mx-auto">
              Kostenlose Vor-Ort-Beratung und Akustikmessung – wir melden uns innerhalb von 1 Werktag.
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
