import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Akustik für Restaurants & Gastronomie Berlin | raumton',
  description:
    'Schlechte Akustik kostet Umsatz. raumton optimiert Restaurants, Cafés und Bars in Berlin akustisch – dezent, designorientiert und messbar wirksam.',
}

const STATS = [
  { wert: '72 dB', label: 'Durchschnittlicher Lärmpegel', text: 'In vielen Berliner Restaurants – deutlich über dem Wohlfühlbereich von 60–65 dB.' },
  { wert: '−20 %', label: 'Umsatzeinbuße', text: 'Gäste, die sich nicht unterhalten können, bestellen weniger und kommen seltener wieder.' },
  { wert: '−0,4 ★', label: 'Google-Bewertung', text: 'Lautstärke ist der häufigste Kritikpunkt in Restaurant-Rezensionen – und der leichteste zu lösen.' },
]

const SCHMERZEN = [
  {
    titel: 'Gäste, die schreien statt reden',
    text: 'Zu laute Restaurants erzeugen einen Teufelskreis: Alle sprechen lauter, weil alle lauter sprechen. Gäste empfinden das als stressig – auch wenn sie es nicht benennen können.',
  },
  {
    titel: 'Schlechtere Bewertungen, weniger Stammgäste',
    text: 'Lautstärke ist der meistkritisierte Punkt in Online-Rezensionen. Dabei ist er der einfachste zu beheben – ohne einen einzigen Schließtag.',
  },
  {
    titel: 'Design vs. Akustik: ein falscher Kompromiss',
    text: 'Harte Böden, große Glasflächen, hohe Decken – das sieht gut aus, klingt aber schlecht. Unsere Absorber fügen sich ins Interior ein, ohne es zu dominieren.',
  },
]

const PRODUKTE = [
  { name: 'Wandabsorber', text: 'Textil ummantelt in über 300 Farben und Texturen. Wirksam gegen Nachhall, sichtbar nur als Designelement.' },
  { name: 'Akustikpaneele', text: 'Wandfüllende Flächen oder gezielte Akzente – individuell nach Raumgeometrie und Raumkonzept geplant.' },
  { name: 'Deckensegel', text: 'Freischwebende Elemente für hohe Räume. Hohe akustische Wirksamkeit bei minimalem visuellem Eingriff.' },
  { name: 'Akustikvorhänge', text: 'Flexible Lösung für Bereiche mit variablen Anforderungen – ideal für Eventlocations und Mehrzweckräume.' },
]

const PROZESS = [
  { nr: '01', titel: 'Messung im laufenden Betrieb', text: 'Wir kommen zu Ihnen – auch abends oder am frühen Morgen. Keine Betriebsunterbrechung nötig.' },
  { nr: '02', titel: 'Diskretes Design', text: 'Absorber, die Ihr Raumkonzept respektieren. Farben und Materialien werden mit Ihnen abgestimmt.' },
  { nr: '03', titel: 'Berliner Fertigung', text: 'Handgefertigt in Berlin-Schöneberg – Lieferzeit ca. 3 Wochen nach Auftragseingang.' },
  { nr: '04', titel: 'Montage ohne Schließtag', text: 'Montage in einem Tag, außerhalb Ihrer Kernzeiten. Ohne Baulärm, ohne Schmutz.' },
]

export default function GastroPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">

        {/* Hero */}
        <div className="relative pt-32 pb-0 overflow-hidden">
          <div className="container-wide pb-16">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
              Leistungen / Gastronomie
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 max-w-3xl leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Gäste bleiben länger,{' '}
              <span className="text-[#C8A96E]">wenn es angenehm ist.</span>
            </h1>
            <p className="text-[#606060] text-lg max-w-2xl leading-relaxed mb-8">
              Zu laute Restaurants bekommen schlechtere Bewertungen – und Gäste kommen
              seltener zurück. raumton löst das Problem, ohne Ihrem Design zu schaden.
            </p>
            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A96E] text-white font-semibold text-sm hover:bg-[#B8955A] transition-colors duration-200"
            >
              Kostenlose Beratung sichern
            </a>
          </div>
          <div className="relative h-[420px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
              alt="Restaurant Berlin Akustik"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#F9F7F4] py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E2DC]">
              {STATS.map((s) => (
                <div key={s.wert} className="px-10 py-8 first:pl-0 last:pr-0">
                  <div
                    className="text-5xl font-bold text-[#C8A96E] mb-2"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    {s.wert}
                  </div>
                  <div className="text-[#1A1A1A] font-semibold mb-2 text-sm">{s.label}</div>
                  <p className="text-[#888] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pain Points */}
        <div className="py-24 bg-white">
          <div className="container-wide">
            <div className="max-w-xl mb-14">
              <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-3 block">
                Das Problem
              </span>
              <h2
                className="text-3xl sm:text-4xl text-[#1A1A1A]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Lärm verliert Gäste – still und ohne Kündigung.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SCHMERZEN.map((s) => (
                <div key={s.titel} className="border-t border-[#C8A96E] pt-6">
                  <h3 className="text-[#1A1A1A] font-semibold mb-3">{s.titel}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Produkte */}
        <div className="bg-[#F9F7F4] py-24">
          <div className="container-wide">
            <div className="max-w-xl mb-14">
              <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-3 block">
                Unsere Lösungen
              </span>
              <h2
                className="text-3xl sm:text-4xl text-[#1A1A1A]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Absorber, die im Raumdesign verschwinden.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUKTE.map((p) => (
                <div key={p.name}>
                  <div className="w-8 h-px bg-[#C8A96E] mb-5" />
                  <h3 className="text-[#1A1A1A] font-semibold mb-2">{p.name}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prozess */}
        <div className="bg-white py-24">
          <div className="container-wide">
            <div className="max-w-xl mb-14">
              <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-3 block">
                Unser Prozess
              </span>
              <h2
                className="text-3xl sm:text-4xl text-[#1A1A1A]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Kein einziger Schließtag.
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {PROZESS.map((s) => (
                <div key={s.nr}>
                  <div
                    className="text-6xl font-bold text-[#F0EDE7] mb-4 leading-none select-none"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    {s.nr}
                  </div>
                  <h3 className="text-[#1A1A1A] font-semibold mb-2 text-sm">{s.titel}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#F9F7F4] py-24">
          <div className="container-wide max-w-3xl">
            <div className="border-l-4 border-[#C8A96E] pl-8">
              <p className="text-xl text-[#1A1A1A] leading-relaxed mb-6 italic">
                „Ein Gast hat mich gefragt, was ich verändert habe – er wusste nicht
                genau warum, aber er fand es angenehmer. Das ist eigentlich das größte
                Kompliment.“
              </p>
              <div>
                <div className="font-semibold text-[#1A1A1A] text-sm">Thomas R.</div>
                <div className="text-[#888] text-sm">Inhaber · Restaurant, Berlin Mitte</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white py-24">
          <div className="container-wide max-w-3xl">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-3 block">
              Häufige Fragen
            </span>
            <h2
              className="text-3xl text-[#1A1A1A] mb-10"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Was Gastronomen uns fragen.
            </h2>
            <div className="divide-y divide-[#EBEBEB]">
              {[
                {
                  frage: 'Wie dezent sind die Absorber in einem Restaurant?',
                  antwort: 'Sehr dezent. Wir bieten über 300 Farben und Texturen – von wandfüllenden Paneelen bis zu kaum sichtbaren Deckensegeln. Viele unserer Gastro-Kunden berichten, dass Gäste die Veränderung spüren, aber nicht sehen.',
                },
                {
                  frage: 'Können Sie während des laufenden Betriebs arbeiten?',
                  antwort: 'Ja. Messung und Planung finden nach Absprache statt. Die Montage erfolgt in einem Tag, typischerweise vormittags vor der Öffnung.',
                },
                {
                  frage: 'Was kostet eine Restaurantakustik-Lösung?',
                  antwort: 'Das hängt von Raumgröße und Maßnahmenumfang ab. Kleinere Eingriffe beginnen ab ca. 2.000 €. Wir erstellen Ihnen ein kostenloses Angebot nach der Vor-Ort-Beratung.',
                },
                {
                  frage: 'Können die Absorber bei einem Umbau entfernt werden?',
                  antwort: 'Ja, alle Montagesysteme sind rückstandsfrei rückbaubar. Ideal auch für gemietete Gastroflächen.',
                },
              ].map((item) => (
                <details key={item.frage} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-[#1A1A1A] text-sm font-medium hover:text-[#C8A96E] transition-colors">
                    {item.frage}
                    <span className="text-[#C8A96E] text-xl group-open:rotate-45 transition-transform duration-200 ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-[#888] text-sm leading-relaxed">{item.antwort}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#F9F7F4] py-20 border-t border-[#EBEBEB]">
          <div className="container-wide text-center">
            <h2
              className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Gäste sollen sich wohlfühlen – nicht schreien.
            </h2>
            <p className="text-[#888] mb-8 max-w-xl mx-auto text-sm leading-relaxed">
              Kostenlose Vor-Ort-Beratung und Akustikmessung. Wir melden uns innerhalb von 1 Werktag.
            </p>
            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-white font-semibold hover:bg-[#B8955A] transition-colors duration-200"
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
