'use client'

const LOGOS = [
  'BVG', 'Deutsche Bahn', 'HelloFresh', 'Berliner Philharmoniker',
  'Commerzbank', 'Sparkasse', 'Fraunhofer', 'UNESCO', 'Lieferando',
  'Diakonie', 'ENERTRAG', 'Securitas',
]

export default function SocialProofStrip() {
  return (
    <section className="bg-white border-y border-[#E2DDD6] py-10">
      <div className="container-wide mb-6">
        <p className="text-center text-xs text-[#A8A29E] tracking-[0.15em] uppercase">
          Vertrauen von über 1.500 Kunden — darunter
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-10 text-[#A8A29E] text-sm font-medium tracking-wide hover:text-[#6B6560] transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
