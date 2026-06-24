'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'
import { FAQS } from '@/lib/constants'

const PREVIEW_IDS = [1, 2, 3, 4, 5]
const PREVIEW_FAQS = FAQS.filter((f) => PREVIEW_IDS.includes(f.id))

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-padding bg-[#0D0D0D]">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2
            className="text-4xl sm:text-5xl text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Häufige Fragen.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="space-y-px"
        >
          {PREVIEW_FAQS.map((faq) => (
            <motion.div key={faq.id} variants={fadeUp} className="border border-[#1A1A1A]">
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left bg-[#141414] hover:bg-[#171717] transition-colors"
              >
                <span className="text-white text-base font-medium pr-4">{faq.frage}</span>
                <span className="flex-shrink-0 mt-0.5 text-[#C8A96E]">
                  {open === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {open === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 bg-[#141414]">
                      <p className="text-[#A0A0A0] leading-relaxed text-sm border-t border-[#1A1A1A] pt-4">
                        {faq.antwort}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="text-center mt-10"
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm text-[#C8A96E] hover:gap-3 transition-all"
          >
            Alle {FAQS.length} Fragen ansehen <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
