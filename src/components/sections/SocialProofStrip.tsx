'use client'

import Image from 'next/image'
import { useState } from 'react'
import { KUNDEN_LOGOS } from '@/lib/constants'

const LogoItem = ({ name, src }: { name: string; src: string }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="flex items-center justify-center px-14 flex-shrink-0 h-16">
      {imgError ? (
        <span className="text-[#A8A29E] text-sm font-medium tracking-wide whitespace-nowrap">
          {name}
        </span>
      ) : (
        <Image
          src={src}
          alt={name}
          width={120}
          height={40}
          onError={() => setImgError(true)}
          className="h-8 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-75 transition-all duration-500"
        />
      )}
    </div>
  )
}

export default function SocialProofStrip() {
  const doubled = [...KUNDEN_LOGOS, ...KUNDEN_LOGOS]

  return (
    <section className="bg-white border-y border-[#E2DDD6] py-12">
      <div className="container-wide mb-10">
        <p className="text-center text-xs text-[#A8A29E] tracking-[0.15em] uppercase">
          Vertrauen von über 1.500 Kunden — darunter
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
