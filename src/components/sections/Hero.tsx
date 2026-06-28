'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
// verhindert Pin-Neuberechnung beim Ein-/Ausblenden der mobilen Adressleiste
ScrollTrigger.config({ ignoreMobileResize: true })

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
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState(0)
  const phaseRef = useRef(0)

  // dvh-Fallback: --vh an die echte sichtbare Höhe koppeln
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
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return
    // Bei reduzierter Bewegung: keine Scroll-Animation, statischer Hero
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    video.pause()
    const state = { frame: 0 }

    // Pin + Text-Narrative laufen IMMER (unabhängig vom Video-Ladezustand),
    // das Video-Scrubbing passiert nur, wenn genug Frames dekodiert sind.
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 0.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress
        if (progressBarRef.current) gsap.set(progressBarRef.current, { width: `${progress * 100}%` })
        const newPhase = getPhaseIndex(progress)
        if (newPhase !== phaseRef.current) {
          phaseRef.current = newPhase
          setPhase(newPhase)
        }
        const duration = video.duration
        if (duration && !isNaN(duration)) {
          const target = progress * duration
          gsap.to(state, { frame: target, duration: 0.15, overwrite: true, ease: 'none', onUpdate: () => { if (video.readyState >= 2) video.currentTime = state.frame } })
        }
      },
    })
    ScrollTrigger.refresh()
    // sobald Video-Metadaten da sind: Positionen neu berechnen
    video.addEventListener('loadedmetadata', () => ScrollTrigger.refresh(), { once: true })

    // Refresh nach vollständigem Laden + kurzem Delay (Fonts, lazy Bilder)
    const onLoad = () => {
      ScrollTrigger.refresh()
      setTimeout(() => ScrollTrigger.refresh(), 400)
    }
    window.addEventListener('load', onLoad)
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {})
    }

    return () => {
      trigger.kill()
      window.removeEventListener('load', onLoad)
    }
  }, [])

  const currentPhase = PHASES[phase]

  return (
    <section ref={sectionRef} className="relative hero-screen w-full overflow-hidden bg-[#EDEAE5]">
      <div className="absolute top-0 left-0 right-0 z-30 h-[3px] bg-white/10">
        <div ref={progressBarRef} className="h-full bg-[#C8A96E]" style={{ width: '0%' }} />
      </div>

      <div className="absolute right-4 sm:right-6 top-1/2 z-30 -translate-y-1/2 flex flex-col gap-3">
        {PHASES.map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-full transition-colors duration-500" style={{ backgroundColor: i === phase ? '#C8A96E' : 'rgba(255,255,255,0.3)' }} />
        ))}
      </div>

      <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" src="/hero-room.mp4" muted playsInline preload="auto" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      <div className="container-wide relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-6 sm:mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#E8CC99]">Berliner Manufaktur seit 2006</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={phase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}>
              <div className="mb-4 flex items-center gap-3">
                <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${currentPhase.badgeColor}`}>{currentPhase.badge}</span>
              </div>

              {phase === 0 ? (
                <h1 className="mb-6 text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {currentPhase.headline.split(' ').map((word, i) => (
                    <motion.span key={word + i} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }} className="mr-4 inline-block">{word}</motion.span>
                  ))}
                </h1>
              ) : (
                <h1 className="mb-6 text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>{currentPhase.headline}</h1>
              )}

              <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-xl">{currentPhase.copy}</p>

              {currentPhase.showCta && (
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="#anfrage" className="inline-flex items-center justify-center gap-2 bg-[#C8A96E] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#B8955A]">
                    Kostenlose Beratung sichern <ChevronRight size={18} />
                  </a>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }} className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-white/70">
        <span className="flex flex-col items-center gap-2">Scrollen<span className="block h-8 w-px animate-pulse bg-white/50" /></span>
      </motion.div>
    </section>
  )
}
