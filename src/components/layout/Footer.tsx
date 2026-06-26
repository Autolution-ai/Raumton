import Link from 'next/link'

const NAV_COLS = [
  { title: 'Leistungen', links: [{ label: 'Büro & Großraumbüro', href: '/leistungen/buero' }, { label: 'Gastronomie', href: '/leistungen/gastro' }, { label: 'Bildung & Kita', href: '/leistungen/bildung' }, { label: 'Alle Leistungen', href: '/leistungen' }] },
  { title: 'Unternehmen', links: [{ label: 'Referenzen', href: '/referenzen' }, { label: 'Showroom', href: '/showroom' }, { label: 'Über uns', href: '/ueber-uns' }, { label: 'FAQ', href: '/faq' }] },
  { title: 'Kontakt', links: [{ label: 'Kontaktformular', href: '/kontakt' }, { label: '030 / 70 50 95 11', href: 'tel:+493070509511' }, { label: 'info@raumton.com', href: 'mailto:info@raumton.com' }] },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>raumton</div>
            <div className="text-xs text-[#606060] tracking-widest uppercase mb-6">einfach schön leise</div>
            <p className="text-[#606060] text-sm leading-relaxed">Berliner Manufaktur für Raumakustik und individuelle Schallabsorber. Seit 2006 in Berlin-Schöneberg.</p>
          </div>
          {NAV_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">{col.title}</h4>
              <ul className="space-y-3">{col.links.map((link) => (<li key={link.href}><Link href={link.href} className="text-[#606060] text-sm hover:text-[#A0A0A0] transition-colors">{link.label}</Link></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#606060] text-xs">© {new Date().getFullYear()} raumton GmbH, Berlin. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-[#606060] text-xs hover:text-[#A0A0A0] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-[#606060] text-xs hover:text-[#A0A0A0] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}