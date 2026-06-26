import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: 'raumton – Schallabsorber & Raumakustik Berlin | Seit 2006',
  description: 'Individuelle Schallabsorber und Raumakustik-Lösungen für Büro, Gastronomie und Bildung. Geplant, gefertigt und montiert von raumton in Berlin-Schöneberg seit 2006.',
  keywords: ['Raumakustik Berlin', 'Schallabsorber Berlin', 'Akustik Büro Berlin', 'Deckenabsorber', 'Wandabsorber'],
  authors: [{ name: 'raumton GmbH' }],
  openGraph: { title: 'raumton – Schallabsorber & Raumakustik Berlin | Seit 2006', description: 'Individuelle Schallabsorber – geplant, gefertigt und montiert in Berlin-Schöneberg.', url: 'https://www.raumton.com', siteName: 'raumton GmbH', locale: 'de_DE', type: 'website' },
  alternates: { canonical: 'https://www.raumton.com' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'LocalBusiness', '@id': 'https://www.raumton.com/#business', name: 'raumton GmbH', description: 'Professionelle Raumakustik und individuelle Schallabsorber in Berlin-Schöneberg seit 2006.', url: 'https://www.raumton.com', telephone: '+493070509511', email: 'info@raumton.com', address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressRegion: 'Berlin', addressCountry: 'DE', streetAddress: 'Berlin-Schöneberg' }, foundingDate: '2006', slogan: 'einfach schön leise', priceRange: '€€€' },
    { '@type': 'Organization', '@id': 'https://www.raumton.com/#org', name: 'raumton GmbH', url: 'https://www.raumton.com', contactPoint: { '@type': 'ContactPoint', telephone: '+493070509511', contactType: 'customer service', availableLanguage: 'German' } },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}