'use client'

import { useState } from 'react'
import { KUNDEN_LOGOS } from '@/lib/constants'

const LogoItem = ({ name, src }: { name: string; src: string }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="flex items-center justify-center px-10 flex-shrink-0 h-14">
      {imgError ? (
        <span className="text-[#A8A29E] text-sm font-medium tracking-wide whitespace-nowrap">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          onError={() => setImgError(true)}
          className="h-8 w-auto max-w-[110px] object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-80 transition-all duration-500"
        />
      )}
    </div>
  )
}

export default function SocialProofStrip() {
  const doubled = [...KUNDEN_LOGOS, ...KUNDEN_LOGOS]

  return (
    <section className="bg-white border-y border-[#E2DDD6] py-10">
      <div className="container-wide mb-8">
        <p className="text-center text-xs text-[#A8A29E] tracking-[0.15em] uppercase">
          Vertrauen von über 1.500 Kunden
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {doubled.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  )
}
