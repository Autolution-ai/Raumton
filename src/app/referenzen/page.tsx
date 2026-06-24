'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'
import { REFERENZEN } from '@/lib/constants'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'

const FILTER_TABS = [{ key: 'alle', label: 'Alle' }, { key: 'buero', label: 'Büro' }, { key: 'gastro', label: 'Gastronomie' }, { key: 'bildung', label: 'Bildung' }]

export default function ReferenzenPage() {
  const [activeFilter, setActiveFilter] = useState('alle')
  const filtered = activeFilter === 'alle' ? REFERENZEN : REFERENZEN.filter((r) => r.tag === activeFilter)
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-0">
        <div className="container-wide mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Referenzprojekte</span>
            <h1 className="text-5xl sm:text-6xl text-white mb-6 max-w-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>Was raumton messbar verändert.</h1>
            <p className="text-[#A0A0A0] text-lg max-w-2xl">Über 1.500 Projekte in Berlin und deutschlandweit.</p>
          </motion.div>
        </div>
        <div className="container-wide mb-12">
          <div className="flex gap-2 flex-wrap">{FILTER_TABS.map((tab) => (<button key={tab.key} onClick={() => setActiveFilter(tab.key)} className={`px-5 py-2 text-sm border transition-all ${activeFilter === tab.key ? 'border-[#C8A96E] bg-[#C8A96E]/10 text-[#C8A96E]' : 'border-[#252525] text-[#A0A0A0] hover:border-[#404040]'}`}>{tab.label}</button>))}</div>
        </div>
        <div className="container-wide mb-24">
          <motion.div key={activeFilter} initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ref) => (<motion.div key={ref.id} variants={fadeUp} className="group border border-[#1A1A1A] hover:border-[#C8A96E]/30 transition-colors overflow-hidden"><div className="relative h-56 overflow-hidden bg-[#141414]"><Image src={ref.bild} alt={ref.kunde} fill className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" sizes="(max-width: 768px) 100vw, 33vw" /><div className="absolute top-4 left-4 px-3 py-1 bg-[#0A0A0A]/80 text-[#C8A96E] text-xs tracking-widest uppercase">{ref.branche}</div></div><div className="p-6 bg-[#141414]"><h3 className="text-white font-semibold mb-2">{ref.kunde}</h3><p className="text-[#A0A0A0] text-sm">{ref.beschreibung}</p></div></motion.div>))}
          </motion.div>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}
