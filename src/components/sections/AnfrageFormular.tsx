'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ChevronRight, ChevronLeft, Phone } from 'lucide-react'
import { fadeUp, viewportOptions } from '@/lib/animations'

const RAUMTYPEN = ['Büro', 'Großraumbüro', 'Gastronomie', 'Konferenzraum', 'Kita / Bildung', 'Sonstiges']
const HERAUSFORDERUNGEN = ['Nachhall / Hall', 'Zu laut / Lärm', 'Schlechte Sprachverständlichkeit', 'Stressige Atmosphäre', 'Sonstiges']

type FormData = { raumtyp: string; flaeche: string; herausforderung: string[]; name: string; email: string; telefon: string; nachricht: string }
const initialData: FormData = { raumtyp: '', flaeche: '', herausforderung: [], name: '', email: '', telefon: '', nachricht: '' }

const TRUST_BULLETS = ['Antwort innerhalb von 1 Werktag', 'Kostenlos & unverbindlich', 'Professionelle Vor-Ort-Messung inklusive', 'Individuelle Lösung, keine Standardware', 'Berliner Manufaktur seit 2006']
const STATS = [{ number: '1.500+', label: 'Zufriedene Kunden' }, { number: '15+', label: 'Jahre Erfahrung' }, { number: '300+', label: 'Farben & Texturen' }]

export default function AnfrageFormular() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const totalSteps = 4

  const toggleHerausforderung = (item: string) => setForm((f) => ({ ...f, herausforderung: f.herausforderung.includes(item) ? f.herausforderung.filter((h) => h !== item) : [...f.herausforderung, item] }))

  const handleSubmit = async () => {
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/anfrage', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch { setError('Es gab einen Fehler. Bitte rufen Sie uns direkt an: 030 / 70 50 95 11') }
    finally { setLoading(false) }
  }

  const canNext = step === 0 ? !!form.raumtyp : step === 1 ? !!form.flaeche : step === 2 ? form.herausforderung.length > 0 : !!(form.name && form.email)

  return (
    <section id="anfrage" className="section-padding bg-[#0D0D0D]">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp} className="text-center mb-14">
          <span className="text-[#C8A96E] text-sm tracking-widest uppercase mb-4 block">Kostenlose Erstberatung</span>
          <h2 className="text-4xl sm:text-5xl text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>Jetzt anfragen, wir melden uns.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div className="hidden lg:block lg:sticky lg:top-24">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp}>
              <h3 className="text-3xl xl:text-4xl text-white mb-4 leading-snug" style={{ fontFamily: 'var(--font-playfair), serif' }}>In 4 Schritten zur kostenlosen Beratung.</h3>
              <p className="text-white/60 text-sm mb-10 leading-relaxed">Kein Verkaufsanruf. Kein Kleingedrucktes. Echte Akustikberatung von raumton Berlin.</p>
              <ul className="space-y-4 mb-12">
                {TRUST_BULLETS.map((bullet) => (<li key={bullet} className="flex items-start gap-3"><CheckCircle size={18} className="text-[#C8A96E] flex-shrink-0 mt-0.5" /><span className="text-white/80 text-sm">{bullet}</span></li>))}
              </ul>
              <div className="grid grid-cols-3 gap-4 mb-12">
                {STATS.map((stat) => (<div key={stat.label} className="text-center"><div className="text-2xl xl:text-3xl text-[#C8A96E] font-semibold" style={{ fontFamily: 'var(--font-playfair), serif' }}>{stat.number}</div><div className="text-white/60 text-xs mt-1 leading-tight">{stat.label}</div></div>))}
              </div>
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Lieber sofort sprechen?</p>
                <a href="tel:+493070509511" className="flex items-center gap-3 group">
                  <Phone size={18} className="text-[#C8A96E]" />
                  <span className="text-[#C8A96E] text-2xl font-semibold group-hover:text-[#B8955A] transition-colors" style={{ fontFamily: 'var(--font-playfair), serif' }}>030 / 70 50 95 11</span>
                </a>
                <p className="text-white/50 text-xs mt-2 ml-7">Mo. bis Fr., 9 bis 18 Uhr</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeUp}>
            <div className="lg:hidden mb-8 text-center">
              <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>In 4 Schritten zur kostenlosen Beratung.</h3>
              <p className="text-white/60 text-sm">Kein Verkaufsanruf. Kein Kleingedrucktes.</p>
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 bg-white p-8 sm:p-10">
                <CheckCircle size={48} className="text-[#C8A96E] mx-auto mb-6" />
                <h3 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>Vielen Dank, {form.name.split(' ')[0]}!</h3>
                <p className="text-[#888] max-w-sm mx-auto">Wir melden uns innerhalb von 1 Werktag bei Ihnen. Versprochen.</p>
              </motion.div>
            ) : (
              <div className="bg-white p-8 sm:p-10">
                <div className="flex gap-1 mb-10">
                  {Array.from({ length: totalSteps }).map((_, i) => (<div key={i} className={`h-0.5 flex-1 transition-all duration-500 ${i <= step ? 'bg-[#C8A96E]' : 'bg-[#DDDAD4]'}`} />))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <p className="text-[#888] text-xs tracking-widest uppercase mb-3">Schritt 1 von 4</p>
                      <h3 className="text-xl text-[#1A1A1A] mb-6">Um welchen Raumtyp handelt es sich?</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {RAUMTYPEN.map((typ) => (<button key={typ} onClick={() => setForm((f) => ({ ...f, raumtyp: typ }))} className={`py-3 px-4 text-sm border transition-all duration-200 text-left ${form.raumtyp === typ ? 'border-[#C8A96E] bg-[#C8A96E]/10 text-[#C8A96E]' : 'border-[#DDDAD4] text-[#606060] hover:border-[#C8A96E]/50'}`}>{typ}</button>))}
                      </div>
                    </motion.div>
                  )}
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <p className="text-[#888] text-xs tracking-widest uppercase mb-3">Schritt 2 von 4</p>
                      <h3 className="text-xl text-[#1A1A1A] mb-6">Wie groß ist der Raum? <span className="text-[#888] text-sm font-normal">(ca.)</span></h3>
                      <div className="flex items-center gap-4 mb-4">
                        <input type="number" placeholder="z.B. 80" value={form.flaeche} onChange={(e) => setForm((f) => ({ ...f, flaeche: e.target.value }))} className="flex-1 bg-white border border-[#DDDAD4] text-[#1A1A1A] px-4 py-3 text-2xl focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#BBB] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                        <span className="text-[#888] text-xl">m²</span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {['<30', '30-60', '60-120', '120-250', '>250'].map((size) => (
                          <button key={size} onClick={() => { const map: Record<string,string> = {'<30':'25','30-60':'45','60-120':'90','120-250':'180','>250':'300'}; setForm((f) => ({ ...f, flaeche: map[size] })) }} className="px-3 py-1.5 text-xs border border-[#DDDAD4] text-[#606060] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors">{size} m²</button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <p className="text-[#888] text-xs tracking-widest uppercase mb-3">Schritt 3 von 4</p>
                      <h3 className="text-xl text-[#1A1A1A] mb-2">Was ist Ihre größte Herausforderung?</h3>
                      <p className="text-[#888] text-sm mb-6">Mehrfachauswahl möglich</p>
                      <div className="space-y-3">
                        {HERAUSFORDERUNGEN.map((h) => (
                          <button key={h} onClick={() => toggleHerausforderung(h)} className={`w-full py-3 px-4 text-sm border transition-all duration-200 text-left flex items-center gap-3 ${form.herausforderung.includes(h) ? 'border-[#C8A96E] bg-[#C8A96E]/10 text-[#C8A96E]' : 'border-[#DDDAD4] text-[#606060] hover:border-[#C8A96E]/50'}`}>
                            <span className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center text-xs ${form.herausforderung.includes(h) ? 'border-[#C8A96E] bg-[#C8A96E] text-white' : 'border-[#DDDAD4]'}`}>{form.herausforderung.includes(h) && '✓'}</span>
                            {h}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <p className="text-[#888] text-xs tracking-widest uppercase mb-3">Schritt 4 von 4</p>
                      <h3 className="text-xl text-[#1A1A1A] mb-6">Wie können wir Sie erreichen?</h3>
                      <div className="space-y-4">
                        <input type="text" placeholder="Name *" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full bg-white border border-[#DDDAD4] text-[#1A1A1A] px-4 py-3 focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#BBB]" />
                        <input type="email" placeholder="E-Mail *" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="w-full bg-white border border-[#DDDAD4] text-[#1A1A1A] px-4 py-3 focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#BBB]" />
                        <input type="tel" placeholder="Telefon (optional)" value={form.telefon} onChange={(e) => setForm((f) => ({ ...f, telefon: e.target.value }))} className="w-full bg-white border border-[#DDDAD4] text-[#1A1A1A] px-4 py-3 focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#BBB]" />
                        <textarea placeholder="Weitere Informationen (optional)" value={form.nachricht} onChange={(e) => setForm((f) => ({ ...f, nachricht: e.target.value }))} rows={3} className="w-full bg-white border border-[#DDDAD4] text-[#1A1A1A] px-4 py-3 focus:outline-none focus:border-[#C8A96E] transition-colors placeholder:text-[#BBB] resize-none" />
                        <p className="text-[#888] text-xs">Mit dem Absenden akzeptieren Sie unsere <a href="/datenschutz" className="underline hover:text-[#606060]">Datenschutzrichtlinie</a>.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}

                <div className="flex items-center justify-between mt-10">
                  <button onClick={() => setStep((s) => s - 1)} disabled={step === 0} className="flex items-center gap-2 text-sm text-[#888] hover:text-[#606060] transition-colors disabled:opacity-0">
                    <ChevronLeft size={16} /> Zurück
                  </button>
                  {step < totalSteps - 1 ? (
                    <button onClick={() => setStep((s) => s + 1)} disabled={!canNext} className="flex items-center gap-2 px-6 py-3 bg-[#C8A96E] text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#B8955A] transition-colors">
                      Weiter <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button onClick={handleSubmit} disabled={!canNext || loading} className="flex items-center gap-2 px-6 py-3 bg-[#C8A96E] text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#B8955A] transition-colors">
                      {loading ? 'Wird gesendet…' : 'Anfrage absenden'}{!loading && <ChevronRight size={16} />}
                    </button>
                  )}
                </div>
              </div>
            )}

            <div className="lg:hidden mt-10 space-y-4">
              {TRUST_BULLETS.map((bullet) => (<div key={bullet} className="flex items-start gap-3"><CheckCircle size={16} className="text-[#C8A96E] flex-shrink-0 mt-0.5" /><span className="text-white/70 text-sm">{bullet}</span></div>))}
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Lieber sofort sprechen?</p>
                <a href="tel:+493070509511" className="flex items-center gap-2"><Phone size={16} className="text-[#C8A96E]" /><span className="text-[#C8A96E] text-lg font-semibold">030 / 70 50 95 11</span></a>
                <p className="text-white/50 text-xs mt-1 ml-6">Mo. bis Fr., 9 bis 18 Uhr</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}