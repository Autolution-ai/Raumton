'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'
import { REFERENZEN } from '@/lib/constants'

const FILTER_TABS = [
  { key: 'alle', label: 'Alle' },
  { key: 'buero', label: 'Büro' },
  { key: 'gastro', label: 'Gastronomie' },
  { key: 'bildung', label: 'Bildung' },
]

export default function ReferenzenPage() {
  const [activeFilter, setActiveFilter] = useState('alle')
  const filtered =
    activeFilter === 'alle' ? REFERENZEN : REFERENZEN.filter((r) => r.tag === activeFilter)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#F2EFE9] pt-32 pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">Referenzprojekte</span>
            </div>
            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1C1917] mb-4 max-w-2xl"
            >
              Was raumton messbar verändert.
            </h1>
            <p className="text-[#6B6560] text-lg max-w-xl">
              Über 1.500 Projekte in Berlin und deutschlandweit.
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="bg-white section-padding">
          <div className="container-wide">
            <div className="flex gap-2 flex-wrap mb-12">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-5 py-2 text-sm border transition-all ${
                    activeFilter === tab.key
                      ? 'border-[#B8955A] bg-[#F0E8D8] text-[#1C1917]'
                      : 'border-[#E2DDD6] text-[#6B6560] hover:border-[#B8955A]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((ref, i) => (
                <motion.div
                  key={ref.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group border border-[#E2DDD6] hover:border-[#B8955A] transition-colors overflow-hidden bg-white"
                >
                  <div className="relative h-52 overflow-hidden bg-[#F2EFE9]">
                    <Image
                      src={ref.bild}
                      alt={ref.kunde}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[#B8955A] text-xs tracking-widest uppercase">
                      {ref.branche}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#1C1917] font-medium mb-2">{ref.kunde}</h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed">{ref.beschreibung}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
