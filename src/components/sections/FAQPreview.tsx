'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations'
import { FAQS } from '@/lib/constants'

const PREVIEW_IDS = [1, 2, 3, 4, 5]
const PREVIEW_FAQS = FAQS.filter((f) => PREVIEW_IDS.includes(f.id))

export default function FAQPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="max-w-xl mb-14">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">FAQ</span>
          <h2 className="text-4xl sm:text-5xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Häufige Fragen.</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="divide-y divide-[#EBEBEB]">
          {PREVIEW_FAQS.map((faq) => (
            <motion.details key={faq.id} variants={fadeUp} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none text-[#1A1A1A] text-sm font-medium hover:text-[#C8A96E] transition-colors">
                {faq.frage}
                <span className="text-[#C8A96E] text-xl group-open:rotate-45 transition-transform duration-200 ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-[#888] text-sm leading-relaxed">{faq.antwort}</p>
            </motion.details>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="text-center mt-10">
          <Link href="/faq" className="inline-flex items-center gap-2 text-sm text-[#C8A96E] font-medium hover:gap-3 transition-all">
            Alle {FAQS.length} Fragen ansehen <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}