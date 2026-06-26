'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { fadeUp, viewportOptions } from '@/lib/animations'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)

  return (
    <section className="section-padding bg-[#F9F7F4]">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="text-center mb-16">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Kundenstimmen</span>
          <h2 className="text-4xl sm:text-5xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Was unsere Kunden sagen.</h2>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className="w-full">
                <div className="p-10 border-l-4 border-[#C8A96E] bg-white shadow-sm relative">
                  <Quote size={32} className="text-[#C8A96E]/20 absolute top-6 right-6" />
                  <blockquote className="text-xl text-[#1A1A1A] leading-relaxed mb-8 italic">„{TESTIMONIALS[current].zitat}“</blockquote>
                  <div className="flex items-center gap-4 border-t border-[#EBEBEB] pt-6">
                    <div className="w-10 h-10 bg-[#C8A96E]/15 flex items-center justify-center text-[#C8A96E] font-bold text-sm">{TESTIMONIALS[current].name.charAt(0)}</div>
                    <div>
                      <div className="text-[#1A1A1A] font-semibold text-sm">{TESTIMONIALS[current].name}</div>
                      <div className="text-[#888] text-xs">{TESTIMONIALS[current].position} · {TESTIMONIALS[current].unternehmen}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#C8A96E] w-6' : 'bg-[#DDDAD4]'}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={prev} className="w-10 h-10 border border-[#DDDAD4] flex items-center justify-center text-[#888] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors" aria-label="Vorheriges Testimonial"><ChevronLeft size={16} /></button>
              <button onClick={next} className="w-10 h-10 border border-[#DDDAD4] flex items-center justify-center text-[#888] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors" aria-label="Nächstes Testimonial"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}