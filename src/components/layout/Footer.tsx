import Link from 'next/link'

const LEISTUNGEN = [
  { label: 'Büro & Großraumbüro', href: '/leistungen/buero' },
  { label: 'Gastronomie', href: '/leistungen/gastro' },
  { label: 'Bildung & Kita', href: '/leistungen/bildung' },
  { label: 'Alle Leistungen', href: '/leistungen' },
]
const UNTERNEHMEN = [
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Showroom', href: '/showroom' },
  { label: 'FAQ', href: '/faq' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#A8A29E]">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-1">
            <p
              className="text-white text-xl font-light mb-2"
              style={{ fontFamily: 'var(--font-display), serif' }}
            >
              raumton
            </p>
            <p className="text-xs tracking-widest text-[#6B6560] uppercase mb-5">einfach schön leise</p>
            <p className="text-sm leading-relaxed text-[#6B6560]">
              Berliner Manufaktur für individuelle Schallabsorber.<br />Seit 2006.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#6B6560] mb-4">Leistungen</p>
            <ul className="space-y-2.5">
              {LEISTUNGEN.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#6B6560] mb-4">Unternehmen</p>
            <ul className="space-y-2.5">
              {UNTERNEHMEN.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#6B6560] mb-4">Kontakt</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="tel:+493070509511" className="hover:text-white transition-colors">030 / 70 50 95 11</a></li>
              <li><a href="mailto:info@raumton.com" className="hover:text-white transition-colors">info@raumton.com</a></li>
              <li className="pt-2 text-[#6B6560]">Berlin-Schöneberg</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2C2824] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#6B6560]">
          <p>© 2025 raumton GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
