'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Showroom', href: '/showroom' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#252525]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/Logo.png"
              alt="raumton"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#A0A0A0] hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C8A96E] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+493070509511"
              className="flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>030 / 70 50 95 11</span>
            </a>
            <a
              href="#anfrage"
              className="px-5 py-2.5 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold rounded-none hover:bg-[#D9BE8C] transition-colors duration-200 tracking-wide"
            >
              Kostenlos beraten lassen
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-light text-white hover:text-[#C8A96E] transition-colors"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
              >
                <a
                  href="#anfrage"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-block px-8 py-3 bg-[#C8A96E] text-[#0A0A0A] font-semibold text-lg"
                >
                  Kostenlos beraten lassen
                </a>
              </motion.div>
            </nav>

            <div className="absolute bottom-12 text-center text-[#606060] text-sm">
              <a href="tel:+493070509511" className="block hover:text-white mb-2">
                030 / 70 50 95 11
              </a>
              <a href="mailto:info@raumton.com" className="block hover:text-white">
                info@raumton.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
