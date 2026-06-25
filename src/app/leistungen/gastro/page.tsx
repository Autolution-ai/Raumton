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
      <main>
        {/* Hero */}
        <div className="relative min-h-[60vh] flex items-center bg-[#0A0A0A] overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
              alt="Restaurant Berlin Akustik"
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
          </div>
          <div className="container-wide relative z-10">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
              Leistungen / Gastronomie
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 max-w-3xl leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Gäste bleiben länger,{' '}
              <span className="text-[#C8A96E]">wenn es angenehm ist.</span>
            </h1>
            <p className="text-[#A0A0A0] text-lg max-w-2xl leading-relaxed">
              Zu laute Restaurants bekommen schlechtere Bewertungen – und Gäste kommen
              seltener zurück. raumton löst das Problem, ohne Ihrem Design zu schaden.
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
              Lärm verliert Gäste – still und ohne Kündigung.
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
              Absorber, die im Raumdesign verschwinden.
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
              Kein einziger Schließtag.
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
                „Ein Gast hat mich gefragt, was ich verändert habe – er wusste nicht
                genau warum, aber er fand es angenehmer. Das ist eigentlich das größte
                Kompliment.“
              </p>
              <div>
                <div className="font-semibold text-[#1A1A1A]">Thomas R.</div>
                <div className="text-[#606060] text-sm">Inhaber · Restaurant, Berlin Mitte</div>
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
              Was Gastronomen uns fragen.
            </h2>
            <div className="divide-y divide-[#E5E5E5]">
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
              Gäste sollen sich wohlfühlen – nicht schreien.
            </h2>
            <p className="text-[#A0A0A0] mb-8 max-w-xl mx-auto">
              Kostenlose Vor-Ort-Beratung und Akustikmessung. Wir melden uns innerhalb von 1 Werktag.
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
