'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { FAQS } from '@/lib/constants'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'

const KATEGORIEN = [
  { key: 'ablauf', label: 'Preise & Ablauf' },
  { key: 'materialien', label: 'Produkte & Materialien' },
  { key: 'technik', label: 'Technik & Ergebnisse' },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container-narrow mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">FAQ</span>
            <h1 className="text-5xl sm:text-6xl text-white mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Häufige Fragen zu raumton & Raumakustik</h1>
            <p className="text-[#A0A0A0] text-lg leading-relaxed">Nicht gefunden? Rufen Sie uns an: <a href="tel:+493070509511" className="text-[#C8A96E] hover:underline">030 / 70 50 95 11</a></p>
          </motion.div>
        </div>
        <div className="container-narrow space-y-16">
          {KATEGORIEN.map((kat) => {
            const items = FAQS.filter((f) => f.kategorie === kat.key)
            return (
              <motion.div key={kat.key} initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} className="text-xl text-[#C8A96E] font-medium tracking-wide mb-6 border-b border-[#1A1A1A] pb-4">{kat.label}</motion.h2>
                <div className="space-y-px">
                  {items.map((faq) => (
                    <motion.div key={faq.id} variants={fadeUp} className="border border-[#1A1A1A]">
                      <button onClick={() => setOpen(open === faq.id ? null : faq.id)} className="w-full flex items-start justify-between gap-4 p-6 text-left bg-[#141414] hover:bg-[#171717] transition-colors">
                        <span className="text-white text-base font-medium pr-4">{faq.frage}</span>
                        <span className="flex-shrink-0 mt-0.5 text-[#C8A96E]">{open === faq.id ? <Minus size={18} /> : <Plus size={18} />}</span>
                      </button>
                      <AnimatePresence>
                        {open === faq.id && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                            <div className="px-6 pb-6 bg-[#141414]"><p className="text-[#A0A0A0] leading-relaxed text-sm border-t border-[#1A1A1A] pt-4">{faq.antwort}</p></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="container-narrow mt-20 text-center">
          <p className="text-[#A0A0A0] mb-6">Noch Fragen? Wir sind für Sie da.</p>
          <a href="#anfrage" className="inline-block px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] font-semibold hover:bg-[#D9BE8C] transition-colors">Kostenlos beraten lassen</a>
        </div>
      </main>
      <Footer />
    </>
  )
}
