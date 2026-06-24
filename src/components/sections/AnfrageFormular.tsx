'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const RAUMTYPEN = ['Büro / Großraumbüro', 'Gastronomie', 'Konferenzraum', 'Bildung / Kita', 'Sonstiges']
const HERAUSFORDERUNGEN = ['Starker Nachhall / Hall', 'Zu laut / Lärm', 'Schlechte Sprachverständlichkeit', 'Datenschutz / Vertraulichkeit']

export default function AnfrageFormular() {
  const [step, setStep] = useState(1)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    raumtyp: '', flaeche: 50, herausforderungen: [] as string[],
    name: '', email: '', telefon: '', nachricht: '',
  })

  const toggle = (item: string) => {
    setForm((f) => ({
      ...f,
      herausforderungen: f.herausforderungen.includes(item)
        ? f.herausforderungen.filter((x) => x !== item)
        : [...f.herausforderungen, item],
    }))
  }

  const submit = async () => {
    setLoading(true)
    try {
      await fetch('/api/anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, herausforderung: form.herausforderungen }),
      })
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="anfrage" className="bg-[#F2EFE9] section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="divider" />
              <span className="section-label">Anfrage</span>
            </div>
            <h2
              style={{ fontFamily: 'var(--font-display), serif' }}
              className="text-[clamp(2rem,3.5vw,3rem)] font-light text-[#1C1917] mb-5"
            >
              Kostenlose Erstberatung.
            </h2>
            <p className="text-[#6B6560] text-sm leading-relaxed mb-8">
              Beschreiben Sie uns Ihre Situation. Wir melden uns innerhalb eines Werktages
              mit einer ersten Einschätzung — unverbindlich und kostenlos.
            </p>
            <div className="space-y-3 text-sm text-[#6B6560]">
              {['Persönliche Beratung vor Ort', 'Individuelle Planung & Angebot', 'Antwort innerhalb eines Werktages'].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#B8955A]" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 lg:p-10">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle size={40} className="text-[#B8955A] mx-auto mb-5" />
                <h3
                  style={{ fontFamily: 'var(--font-display), serif' }}
                  className="text-2xl font-light text-[#1C1917] mb-3"
                >
                  Vielen Dank, {form.name.split(' ')[0]}!
                </h3>
                <p className="text-[#6B6560] text-sm">
                  Wir haben Ihre Anfrage erhalten und melden uns innerhalb eines Werktages.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className={`h-0.5 flex-1 transition-colors duration-300 ${s <= step ? 'bg-[#B8955A]' : 'bg-[#E2DDD6]'}`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <p className="text-[#6B6560] text-xs tracking-widest uppercase mb-4">Schritt 1 — Raumtyp</p>
                      <div className="grid grid-cols-1 gap-2 mb-6">
                        {RAUMTYPEN.map((rt) => (
                          <button
                            key={rt}
                            onClick={() => setForm((f) => ({ ...f, raumtyp: rt }))}
                            className={`px-4 py-3 text-sm text-left border transition-colors ${form.raumtyp === rt ? 'border-[#B8955A] bg-[#F0E8D8] text-[#1C1917]' : 'border-[#E2DDD6] text-[#6B6560] hover:border-[#B8955A]'}`}
                          >
                            {rt}
                          </button>
                        ))}
                      </div>
                      <button
                        disabled={!form.raumtyp}
                        onClick={() => setStep(2)}
                        className="w-full py-3 bg-[#1C1917] text-white text-sm disabled:opacity-40 hover:bg-[#B8955A] transition-colors"
                      >
                        Weiter
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <p className="text-[#6B6560] text-xs tracking-widest uppercase mb-4">Schritt 2 — Raumgröße</p>
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-3">
                          <span className="text-[#6B6560]">Raumgröße</span>
                          <span className="text-[#1C1917] font-medium">{form.flaeche} m²</span>
                        </div>
                        <input
                          type="range" min={10} max={1000} step={5}
                          value={form.flaeche}
                          onChange={(e) => setForm((f) => ({ ...f, flaeche: Number(e.target.value) }))}
                          className="w-full accent-[#B8955A]"
                        />
                        <div className="flex justify-between text-xs text-[#A8A29E] mt-1">
                          <span>10 m²</span><span>1.000 m²</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => setStep(1)} className="flex-1 py-3 border border-[#E2DDD6] text-[#6B6560] text-sm hover:border-[#B8955A] transition-colors">Zurück</button>
                        <button onClick={() => setStep(3)} className="flex-1 py-3 bg-[#1C1917] text-white text-sm hover:bg-[#B8955A] transition-colors">Weiter</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <p className="text-[#6B6560] text-xs tracking-widest uppercase mb-4">Schritt 3 — Herausforderung</p>
                      <div className="grid grid-cols-1 gap-2 mb-4">
                        {HERAUSFORDERUNGEN.map((h) => (
                          <button
                            key={h}
                            onClick={() => toggle(h)}
                            className={`px-4 py-3 text-sm text-left border transition-colors ${form.herausforderungen.includes(h) ? 'border-[#B8955A] bg-[#F0E8D8] text-[#1C1917]' : 'border-[#E2DDD6] text-[#6B6560] hover:border-[#B8955A]'}`}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                      <textarea
                        placeholder="Weitere Anmerkungen (optional)"
                        value={form.nachricht}
                        onChange={(e) => setForm((f) => ({ ...f, nachricht: e.target.value }))}
                        rows={3}
                        className="w-full border border-[#E2DDD6] p-3 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#B8955A] outline-none resize-none mb-4"
                      />
                      <div className="flex gap-2">
                        <button onClick={() => setStep(2)} className="flex-1 py-3 border border-[#E2DDD6] text-[#6B6560] text-sm hover:border-[#B8955A] transition-colors">Zurück</button>
                        <button onClick={() => setStep(4)} className="flex-1 py-3 bg-[#1C1917] text-white text-sm hover:bg-[#B8955A] transition-colors">Weiter</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <p className="text-[#6B6560] text-xs tracking-widest uppercase mb-4">Schritt 4 — Ihre Kontaktdaten</p>
                      <div className="space-y-3 mb-6">
                        {[
                          { key: 'name', label: 'Name *', type: 'text' },
                          { key: 'email', label: 'E-Mail *', type: 'email' },
                          { key: 'telefon', label: 'Telefon (optional)', type: 'tel' },
                        ].map(({ key, label, type }) => (
                          <input
                            key={key}
                            type={type}
                            placeholder={label}
                            value={String((form as Record<string, unknown>)[key] ?? '')}
                            onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                            className="w-full border border-[#E2DDD6] px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#B8955A] outline-none"
                          />
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => setStep(3)} className="flex-1 py-3 border border-[#E2DDD6] text-[#6B6560] text-sm hover:border-[#B8955A] transition-colors">Zurück</button>
                        <button
                          disabled={!form.name || !form.email || loading}
                          onClick={submit}
                          className="flex-1 py-3 bg-[#B8955A] text-white text-sm disabled:opacity-40 hover:bg-[#A07840] transition-colors"
                        >
                          {loading ? 'Wird gesendet…' : 'Anfrage absenden'}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
