'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Showroom', href: '/showroom' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 80) {
        setNavHidden(false)
      } else if (currentY > lastScrollY.current + 8) {
        setNavHidden(true)
      } else if (currentY < lastScrollY.current - 8) {
        setNavHidden(false)
      }
      setScrolled(currentY > 40)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          transform: navHidden && !menuOpen ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 300ms ease-in-out, background-color 300ms ease-in-out, border-color 300ms ease-in-out',
        }}
        className={`fixed top-0 left-0 right-0 z-50 will-change-transform ${
          scrolled
            ? 'bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#E2DDD6]'
            : 'bg-[#FAFAF8]/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-wide flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-baseline gap-3 group">
            <span
              className="text-[22px] font-semibold tracking-tight text-[#1C1917] group-hover:text-[#B8955A] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-display), serif' }}
            >
              raumton
            </span>
            <span className="hidden sm:block text-[11px] text-[#A8A29E] tracking-[0.12em] uppercase font-light">
              einfach schön leise
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#6B6560] hover:text-[#1C1917] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#B8955A] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:+493070509511"
              className="flex items-center gap-2 text-sm text-[#6B6560] hover:text-[#1C1917] transition-colors"
            >
              <Phone size={13} />
              <span>030 / 70 50 95 11</span>
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#1C1917]"
            aria-label="Menü"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#FAFAF8] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-7">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[2rem] font-light text-[#1C1917] hover:text-[#B8955A] transition-colors"
                    style={{ fontFamily: 'var(--font-display), serif' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="#anfrage"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-[#1C1917] text-white text-base font-medium"
              >
                Beratung anfragen
              </motion.a>
            </nav>
            <div className="absolute bottom-10 text-center text-sm text-[#A8A29E]">
              <a href="tel:+493070509511" className="block hover:text-[#1C1917] mb-1">030 / 70 50 95 11</a>
              <a href="mailto:info@raumton.com" className="block hover:text-[#1C1917]">info@raumton.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
