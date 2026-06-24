'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { FAQS } from '@/lib/constants'

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
      <main>
        {/* Hero */}
        <section className="bg-[#F2EFE9] pt-32 pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">FAQ</span>
            </div>
            <h1
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1C1917] mb-4"
            >
              Häufige Fragen.
            </h1>
            <p className="text-[#6B6560] text-lg max-w-xl">
              Nicht gefunden? Rufen Sie uns an:{' '}
              <a href="tel:+493070509511" className="text-[#B8955A] hover:underline">
                030 / 70 50 95 11
              </a>
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="bg-white section-padding">
          <div className="container-wide space-y-16">
            {KATEGORIEN.map((kat) => {
              const items = FAQS.filter((f) => f.kategorie === kat.key)
              return (
                <div key={kat.key}>
                  <h2
                    style={{ fontFamily: 'var(--font-display), serif' }}
                    className="text-2xl font-light text-[#1C1917] mb-6 pb-4 border-b border-[#E2DDD6]"
                  >
                    {kat.label}
                  </h2>
                  <div className="divide-y divide-[#E2DDD6]">
                    {items.map((faq) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <button
                          onClick={() => setOpen(open === faq.id ? null : faq.id)}
                          className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                        >
                          <span className="text-[#1C1917] text-sm font-medium group-hover:text-[#B8955A] transition-colors">
                            {faq.frage}
                          </span>
                          <span className="text-[#B8955A] flex-shrink-0 mt-0.5">
                            {open === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                          </span>
                        </button>
                        <AnimatePresence>
                          {open === faq.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="pb-5 text-[#6B6560] text-sm leading-relaxed">
                                {faq.antwort}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F2EFE9] py-20">
          <div className="container-wide text-center">
            <p className="text-[#6B6560] mb-6">Noch Fragen? Wir sind für Sie da.</p>
            <a
              href="/kontakt"
              className="inline-block px-8 py-3 bg-[#1C1917] text-white text-sm hover:bg-[#B8955A] transition-colors"
            >
              Kostenlos beraten lassen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
