'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

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
  const videoRef = useRef<HTMLVideoElement>(null)
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
    const video = videoRef.current
    if (!track) return

    // Touch-Geräte: Video läuft ab (iOS rendert keine Frames per currentTime).
    // Desktop: Video pausiert und wird per Scroll gescrubbt.
    const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scrub = !coarse && !reduce

    if (video) {
      video.muted = true
      if (scrub) {
        video.loop = false
        video.pause()
      } else {
        video.loop = true
        video.play().catch(() => {})
      }
    }

    let raf = 0
    const update = () => {
      raf = 0
      const total = track.offsetHeight - window.innerHeight
      const top = track.getBoundingClientRect().top
      const scrolled = Math.min(Math.max(-top, 0), total > 0 ? total : 1)
      const progress = total > 0 ? scrolled / total : 0

      if (progressBarRef.current) progressBarRef.current.style.width = `${progress * 100}%`

      const np = getPhaseIndex(progress)
      if (np !== phaseRef.current) {
        phaseRef.current = np
        setPhase(np)
      }

      if (scrub && video && video.duration && !isNaN(video.duration) && video.readyState >= 2) {
        video.currentTime = progress * video.duration
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
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

        {/* Mobile: ganzes Video oben in voller Breite (16:9, kein Crop). Desktop: Vollflächig. */}
        <video ref={videoRef} className="absolute top-0 left-0 w-full h-[56.25vw] object-cover sm:inset-0 sm:h-full" src="/hero-room.mp4" muted playsInline preload="auto" />
        {/* Lesbarkeits-Overlays nur auf Desktop (über dem vollflächigen Video) */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        {/* Text: mobil unterhalb des Video-Bands, Desktop mittig über dem Video */}
        <div className="absolute inset-x-0 bottom-0 top-[56.25vw] sm:top-0 z-10 flex items-center">
          <div className="container-wide w-full max-w-3xl sm:max-w-none">
            <div className="sm:max-w-3xl">
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
                  <h1 className="mb-4 sm:mb-6 text-3xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {currentPhase.headline.split(' ').map((word, i) => (
                      <motion.span key={word + i} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }} className="mr-3 sm:mr-4 inline-block">{word}</motion.span>
                    ))}
                  </h1>
                ) : (
                  <h1 className="mb-4 sm:mb-6 text-3xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>{currentPhase.headline}</h1>
                )}

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
