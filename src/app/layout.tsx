import type { Metadata } from 'next'
import { DM_Sans, Cormorant } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'raumton – Schallabsorber & Raumakustik Berlin | Seit 2006',
  description: 'Individuelle Schallabsorber und Raumakustik-Lösungen für Büro, Gastronomie und Bildung. Geplant, gefertigt und montiert von raumton in Berlin-Schöneberg seit 2006. Kostenlose Beratung.',
  keywords: ['Raumakustik Berlin', 'Schallabsorber Berlin', 'Akustik Büro Berlin', 'Deckenabsorber', 'Wandabsorber', 'Raumakustik Großraumbüro'],
  authors: [{ name: 'raumton GmbH' }],
  openGraph: {
    title: 'raumton – Schallabsorber & Raumakustik Berlin | Seit 2006',
    description: 'Individuelle Schallabsorber – geplant, gefertigt und montiert in Berlin-Schöneberg.',
    url: 'https://www.raumton.com',
    siteName: 'raumton GmbH',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: { canonical: 'https://www.raumton.com' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.raumton.com/#business',
      name: 'raumton GmbH',
      description: 'Professionelle Raumakustik und individuelle Schallabsorber. Geplant, gefertigt und montiert in Berlin-Schöneberg seit 2006.',
      url: 'https://www.raumton.com',
      telephone: '+493070509511',
      email: 'info@raumton.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressRegion: 'Berlin', addressCountry: 'DE', streetAddress: 'Berlin-Schöneberg' },
      foundingDate: '2006',
      slogan: 'einfach schön leise',
      priceRange: '€€€',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
