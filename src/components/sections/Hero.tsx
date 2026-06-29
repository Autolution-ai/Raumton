'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

// Scroll-Scrubbing über eine Bildsequenz auf <canvas>.
// Funktioniert auf Desktop UND iOS identisch (kein Video-currentTime, das
// iOS bei pausiertem Video nicht rendert).
const FRAME_COUNT = 81
const framePath = (i: number) => `/hero/seq-${String(i + 1).padStart(3, '0')}.jpg`

interface Phase {
  badge: string
  badgeColor: string
  headline: string
  copy: string
  showCta?: boolean
}

const PHASES: Phase[] = [
  {
    badge: 'VORHER',
    badgeColor: 'text-white/60',
    headline: 'Kennen Sie diesen Raum?',
    copy: 'Nachhall, der Gespräche unverständlich macht. Lärm, der Konzentration kostet. Viele Räume wurden nie akustisch gedacht.',
  },
  {
    badge: 'raumton wirkt',
    badgeColor: 'text-[#C8A96E]',
    headline: 'Maßarbeit aus Berlin-Schöneberg.',
    copy: 'Wir messen, planen und fertigen jeden Absorber individuell, abgestimmt auf Ihre Raumgeometrie, Ihr Raumklima, Ihren Stil.',
  },
  {
    badge: 'NACHHER',
    badgeColor: 'text-[#C8A96E]',
    headline: 'Der gleiche Raum. Neu erlebt.',
    copy: 'Spürbar leiser. Angenehm ruhig. Ein Raum, in dem man wieder gerne arbeitet, isst und spricht.',
    showCta: true,
  },
]

function getPhaseIndex(progress: number): number {
  if (progress < 0.35) return 0
  if (progress < 0.68) return 1
  return 2
}

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState(0)
  const phaseRef = useRef(0)

  // --vh an die echte sichtbare Höhe koppeln (Hochformat-Fix)
  useEffect(() => {
    const setVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    setVh()
    window.addEventListener('resize', setVh)
    window.addEventListener('orientationchange', setVh)
    return () => {
      window.removeEventListener('resize', setVh)
      window.removeEventListener('orientationchange', setVh)
    }
  }, [])

  useEffect(() => {
    const track = trackRef.current
    const canvas = canvasRef.current
    if (!track || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Frames vorladen
    const images: HTMLImageElement[] = []
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.src = framePath(i)
      images.push(img)
    }

    let curFrame = -1

    const sizeCanvas = () => {
      const r = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(r.width * dpr))
      canvas.height = Math.max(1, Math.round(r.height * dpr))
    }

    const loadedImage = (frame: number): HTMLImageElement | null => {
      const target = images[frame]
      if (target && target.complete && target.naturalWidth) return target
      // nächstgelegenes bereits geladenes Frame nehmen
      for (let d = 1; d < FRAME_COUNT; d++) {
        const a = images[frame - d]
        if (a && a.complete && a.naturalWidth) return a
        const b = images[frame + d]
        if (b && b.complete && b.naturalWidth) return b
      }
      return null
    }

    const drawCover = (img: HTMLImageElement) => {
      const cw = canvas.width
      const ch = canvas.height
      const ir = img.naturalWidth / img.naturalHeight
      const cr = cw / ch
      let dw, dh, dx, dy
      if (cr > ir) {
        dw = cw
        dh = cw / ir
        dx = 0
        dy = (ch - dh) / 2
      } else {
        dh = ch
        dw = ch * ir
        dy = 0
        dx = (cw - dw) / 2
      }
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, dx, dy, dw, dh)
    }

    const draw = (frame: number) => {
      const f = Math.max(0, Math.min(FRAME_COUNT - 1, frame))
      const img = loadedImage(f)
      if (img) drawCover(img)
      curFrame = f
    }

    let raf = 0
    const update = () => {
      raf = 0
      const total = track.offsetHeight - window.innerHeight
      const top = track.getBoundingClientRect().top
      const progress = total > 0 ? Math.min(Math.max(-top, 0), total) / total : 0

      if (progressBarRef.current) progressBarRef.current.style.width = `${progress * 100}%`

      const np = getPhaseIndex(progress)
      if (np !== phaseRef.current) {
        phaseRef.current = np
        setPhase(np)
      }

      const frame = Math.round(progress * (FRAME_COUNT - 1))
      if (frame !== curFrame) draw(frame)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    const onResize = () => { sizeCanvas(); draw(curFrame < 0 ? 0 : curFrame) }

    sizeCanvas()
    // Erstes Frame zeichnen, sobald geladen
    if (images[0].complete && images[0].naturalWidth) draw(0)
    else images[0].addEventListener('load', () => draw(curFrame < 0 ? 0 : curFrame), { once: true })
    // Falls Frames erst nach dem ersten update() laden: ein paar Nachzieh-Redraws
    const settle = window.setInterval(() => draw(curFrame < 0 ? 0 : curFrame), 250)
    window.setTimeout(() => window.clearInterval(settle), 3000)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.clearInterval(settle)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const currentPhase = PHASES[phase]

  return (
    <section ref={trackRef} className="relative hero-track">
      <div className="sticky top-0 hero-screen w-full overflow-hidden bg-[#0A0A0A]">
        {/* Fortschrittsbalken */}
        <div className="absolute top-0 left-0 right-0 z-30 h-[3px] bg-white/10">
          <div ref={progressBarRef} className="h-full bg-[#C8A96E]" style={{ width: '0%' }} />
        </div>

        {/* Phasen-Punkte */}
        <div className="absolute right-4 sm:right-6 top-1/2 z-30 -translate-y-1/2 flex flex-col gap-3">
          {PHASES.map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full transition-colors duration-500" style={{ backgroundColor: i === phase ? '#C8A96E' : 'rgba(255,255,255,0.3)' }} />
          ))}
        </div>

        {/* Mobile: ganzes Bild oben als 16:9-Band (kein Crop). Desktop: vollflächig. */}
        <canvas ref={canvasRef} className="absolute top-0 left-0 block w-full h-[56.25vw] bg-[#0A0A0A] sm:inset-0 sm:h-full" />
        {/* Lesbarkeits-Overlays nur auf Desktop (über dem vollflächigen Bild) */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        {/* Text: mobil unterhalb des Bild-Bands, Desktop mittig über dem Bild */}
        <div className="absolute inset-x-0 bottom-0 top-[56.25vw] sm:top-0 z-10 flex items-center">
          <div className="container-wide w-full">
            <div className="sm:max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-4 sm:mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C8A96E]" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#E8CC99]">Berliner Manufaktur seit 2006</span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div key={phase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${currentPhase.badgeColor}`}>{currentPhase.badge}</span>
                  </div>

                  <h1 className="mb-4 sm:mb-6 text-3xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {currentPhase.headline}
                  </h1>

                  <p className="mb-6 sm:mb-8 max-w-xl text-sm leading-relaxed text-white/90 sm:text-xl">{currentPhase.copy}</p>

                  {currentPhase.showCta && (
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <a href="#anfrage" className="inline-flex items-center justify-center gap-2 bg-[#C8A96E] px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-colors duration-200 hover:bg-[#B8955A]">
                        Kostenlose Beratung sichern <ChevronRight size={18} />
                      </a>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }} className="hidden sm:flex absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-white/70">
          <span className="flex flex-col items-center gap-2">Scrollen<span className="block h-8 w-px animate-pulse bg-white/50" /></span>
        </motion.div>
      </div>
    </section>
  )
}
