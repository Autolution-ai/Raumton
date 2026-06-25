import { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'

export const metadata: Metadata = {
  title: 'Akustik fuer Restaurants & Gastronomie Berlin | raumton',
  description:
    'Zu laute Restaurants verlieren Gaeste still und ohne Kuendigung. raumton integriert Schallabsorber dezent in Ihr Restaurantdesign. Kostenlose Erstberatung.',
}

const STATS = [
  {
    stat: '-20%',
    label: 'Kuerzere Verweildauer',
    text: 'In Restaurants ueber 72 dB bleiben Gaeste signifikant kuerzer. Weniger Zeit am Tisch bedeutet weniger Umsatz pro Abend.',
  },
  {
    stat: '72 dB',
    label: 'Typischer Restaurantpegel',
    text: 'Weit ueber dem Wohlfuehlbereich von 60 bis 65 Dezibel. Die meisten Gaeste merken das, ohne zu wissen, warum sie sich unwohl fuehlen.',
  },
  {
    stat: '-0.4',
    label: 'Sterne bei Google',
    text: 'Laerm ist nach Servicequalitaet und Essen der haefigste Grund fuer negative Bewertungen auf Google und Tripadvisor.',
  },
]

const PROBLEMS = [
  {
    title: 'Gaeste kommen seltener wieder',
    text: 'Ein Gast, der sich nicht unterhalten kann, kommt nicht wieder. Er schreibt es nicht in eine Bewertung. Er kommt einfach nicht mehr.',
  },
  {
    title: 'Personal macht mehr Fehler',
    text: 'Bei hohem Geraeuschpegel steigen Bestellfehler und Stresslevel. Beides koennen Sie sich nicht leisten.',
  },
  {
    title: 'Die besten Tische werden zuletzt besetzt',
    text: 'Gaeste meiden Tische nahe an lauten Bereichen. Das senkt Ihre Auslastung, ohne dass Sie es direkt sehen.',
  },
]

const PRODUCTS = [
  {
    name: 'Wandabsorber',
    text: 'Nahtlos ins Raumdesign integriert, in ueber 300 Farben, Texturen und Formen. Gaeste sehen die Loesung nicht. Sie fuehlen sie.',
  },
  {
    name: 'Deckenpaneele',
    text: 'Grosse Wirkung auf der grossen Flaeche. Ideal fuer hohe Raeume, Lofts und Gewoelbe, ohne Kompromiss bei der Aesthetik.',
  },
  {
    name: 'Deckensegel',
    text: 'Freischwebend und elegant. Im Fine Dining und modernen Restaurants als Design-Statement eingesetzt.',
  },
  {
    name: 'Akustikvorhaenge',
    text: 'Textil trifft Funktion. Fuer Restaurants, die Flexibilitaet brauchen, raumteilend oder rein akustisch wirkend.',
  },
]

const PROCESS = [
  { nr: '01', title: 'Kostenlose Erstberatung', text: 'Wir kommen vorbei, schauen uns Ihren Raum an und sagen Ihnen ehrlich, was moeglich ist und was nicht.' },
  { nr: '02', title: 'Messung & Analyse', text: 'RT60-Messung des Raumes. Sie sehen genau, wo der Nachhall entsteht und was eine Optimierung bringen kann.' },
  { nr: '03', title: 'Design-Integration', text: 'Wir entwickeln eine Loesung, die sich ins Raumdesign einfuegt. 3D-Visualisierung inklusive.' },
  { nr: '04', title: 'Montage ohne Schliessen', text: 'Montage ausserhalb der Oeffnungszeiten. Kein einziger Schlisstag. Kein Umsatzausfall.' },
]

export default function GastroPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0A0A0A] pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
              alt="Modernes Restaurant Berlin"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 to-[#0A0A0A]" />
          </div>
          <div className="container-wide relative z-10">
            <p className="text-[#C8A96E] text-xs tracking-widest uppercase mb-4">Leistungen / Gastronomie</p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white max-w-2xl mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Gaeste bleiben laenger,{' '}
              <span className="text-[#C8A96E]">wenn es angenehm ist.</span>
            </h1>
            <p className="text-[#A0A0A0] text-lg max-w-xl mb-10">
              Die meisten Gaeste sagen Ihnen nicht, warum sie nicht wiederkommen. Laerm ist einer der haefigsten Gruende, und keiner spricht darueber.
            </p>
            <a
              href="#anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold hover:bg-[#D9BE8C] transition-colors"
            >
              Kostenlose Gastronomie-Beratung anfragen
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
              Drei Wahrheiten ueber laute Gastronomie
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
              Welche Loesungen wir in der Gastronomie einsetzen
            </h2>
            <p className="text-[#6B6560] mb-12 max-w-xl">Diskret, designkompatibel und wirksam. Gaeste sehen es nicht. Sie finden es angenehmer.</p>
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
              Wie wir in Ihrem Restaurant vorgehen
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
                &ldquo;Ein Gast hat mich gefragt, was ich veraendert habe. Er wusste nicht genau warum, aber er fand es angenehmer. Das ist eigentlich das groesste Kompliment.&rdquo;
              </p>
              <p className="text-[#1C1917] font-semibold text-sm">Thomas R. &mdash; Inhaber, Restaurant Berlin Mitte</p>
              <p className="text-[#6B6560] text-xs mt-4">Aehnliche Projekte: Brasserie Colette Tim Raue &middot; Restaurant Engelbecken</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F2EFE9] py-20">
          <div className="container-wide">
            <h2 className="text-3xl font-light text-[#1C1917] mb-10" style={{ fontFamily: 'var(--font-display), serif' }}>
              Haeufige Fragen zur Gastronomieakustik
            </h2>
            <div className="max-w-2xl space-y-4">
              {[
                { q: 'Mussen wir fuer die Montage schliessen?', a: 'Nein. Wir montieren ausserhalb der Oeffnungszeiten, frueh morgens, spaet abends oder am Ruhetag. Kein einziger Schlisstag.' },
                { q: 'Passen die Absorber zu unserem Interior?', a: 'Ja. Unsere Absorber kommen in ueber 300 Farben und Texturen. Wir entwickeln gemeinsam eine Loesung, die sich ins Design einfuegt, nicht dagegen arbeitet.' },
                { q: 'Sind die Materialien lebensmittelsicher?', a: 'Absolut. Wir verwenden konsequent mineralfaserfreie Materialien ohne Ausduenstungen. Keine Gesundheitsrisiken, auch in der Naehe von Lebensmitteln.' },
                { q: 'Was kostet eine Akustikloesung fuer ein Restaurant?', a: 'Das haengt von Raumgroesse, Deckenhoeche und Produkt-Mix ab. Ein mittleres Restaurant (ca. 80 m2) liegt typischerweise bei 3.000 bis 7.000 Euro. Unser Angebot ist kostenlos und unverbindlich.' },
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
              Ihr Restaurant verdient Gaeste, die gerne bleiben.
            </h2>
            <p className="text-[#A8A29E] mb-8 max-w-lg mx-auto">
              Kostenlose Erstberatung. Wir kommen vorbei, schauen uns Ihren Raum an und sagen Ihnen ehrlich, was moeglich ist.
            </p>
            <a href="#anfrage" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold hover:bg-[#D9BE8C] transition-colors">
              Kostenlose Gastronomie-Beratung anfragen
            </a>
          </div>
        </section>

        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
