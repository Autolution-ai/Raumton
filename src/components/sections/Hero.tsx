'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    if (isMobile) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let trigger: ScrollTrigger | null = null
    const state = { frame: 0 }

    const setup = () => {
      const duration = video.duration
      if (!duration || isNaN(duration)) return

      video.pause()

      trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const target = self.progress * duration
          gsap.to(state, {
            frame: target,
            duration: 0.15,
            overwrite: true,
            ease: 'none',
            onUpdate: () => {
              if (video.readyState >= 2) video.currentTime = state.frame
            },
          })
        },
      })

      ScrollTrigger.refresh()
    }

    if (video.readyState >= 1 && video.duration) {
      setup()
    } else {
      video.addEventListener('loadedmetadata', setup, { once: true })
    }

    return () => {
      trigger?.kill()
      video.removeEventListener('loadedmetadata', setup)
    }
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#EDEAE5]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-room.mp4"
        muted
        playsInline
        preload="auto"
        autoPlay={isMobile}
        loop={isMobile}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      <div className="container-wide relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-sm font-medium uppercase tracking-widest text-[#E8CC99]">
              Berliner Manufaktur seit 2006
            </span>
          </motion.div>

          <h1
            className="mb-6 text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {['Berlin', 'hört', 'besser.'].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mr-4 inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block text-[#E8CC99]"
            >
              einfach schön leise.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
          >
            raumton plant, fertigt und montiert individuelle Schallabsorber –
            direkt aus Berlin-Schöneberg. Scrollen Sie und sehen Sie, was wir aus
            einem Raum machen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#anfrage"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A96E] px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#B8955A]"
            >
              Kostenlose Beratung sichern
              <ChevronRight size={18} />
            </a>
            <a
              href="/referenzen"
              className="inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:border-[#E8CC99] hover:text-[#E8CC99]"
            >
              Referenzen ansehen
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-white/70"
      >
        <span className="flex flex-col items-center gap-2">
          Scrollen
          <span className="block h-8 w-px animate-pulse bg-white/50" />
        </span>
      </motion.div>
    </section>
  )
}
