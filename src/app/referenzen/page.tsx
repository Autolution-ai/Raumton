'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnfrageFormular from '@/components/sections/AnfrageFormular'
import { REFERENZEN } from '@/lib/constants'

const FILTER_TABS = [{ key: 'alle', label: 'Alle' }, { key: 'buero', label: 'Büro' }, { key: 'gastro', label: 'Gastronomie' }, { key: 'bildung', label: 'Bildung' }]

export default function ReferenzenPage() {
  const [activeFilter, setActiveFilter] = useState('alle')
  const filtered = activeFilter === 'alle' ? REFERENZEN : REFERENZEN.filter((r) => r.tag === activeFilter)

  return (
    <>
      <Navigation />
      <main className="bg-white">
        <div className="pt-32 pb-16 bg-white">
          <div className="container-wide">
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Referenzprojekte</span>
            <h1 className="text-5xl sm:text-6xl text-[#1A1A1A] mb-6 max-w-2xl leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>Was raumton messbar{' '}<span className="text-[#C8A96E]">verändert.</span></h1>
            <p className="text-[#606060] text-lg max-w-2xl leading-relaxed">Über 1.500 Projekte in Berlin und deutschlandweit. Hier ist eine Auswahl unserer Referenzen, von DAX40-Konzernen bis zur Kita.</p>
          </div>
        </div>
        <div className="bg-[#F9F7F4] py-8 border-y border-[#EBEBEB]">
          <div className="container-wide">
            <div className="flex gap-2 flex-wrap">
              {FILTER_TABS.map((tab) => (
                <button key={tab.key} onClick={() => setActiveFilter(tab.key)} className={`px-5 py-2 text-sm border transition-all duration-200 ${activeFilter === tab.key ? 'border-[#C8A96E] bg-[#C8A96E] text-white' : 'border-[#DDDAD4] text-[#888] bg-white hover:border-[#C8A96E] hover:text-[#C8A96E]'}`}>{tab.label}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((ref) => (
                <div key={ref.id} className="group border border-[#EBEBEB] hover:border-[#C8A96E]/40 hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="relative h-56 overflow-hidden bg-[#F9F7F4]">
                    <Image src={ref.bild} alt={ref.kunde} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[#C8A96E] text-xs tracking-widest uppercase font-medium">{ref.branche}</div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-[#1A1A1A] font-semibold mb-2">{ref.kunde}</h3>
                    <p className="text-[#888] text-sm leading-relaxed">{ref.beschreibung}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#F9F7F4] py-20 border-t border-[#EBEBEB]">
          <div className="container-wide text-center">
            <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Ihr Projekt als nächstes?</h2>
            <a href="#anfrage" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-white font-semibold hover:bg-[#B8955A] transition-colors duration-200">Jetzt kostenlose Beratung sichern</a>
          </div>
        </div>
        <AnfrageFormular />
      </main>
      <Footer />
    </>
  )
}