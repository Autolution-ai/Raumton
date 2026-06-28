import { Camera } from 'lucide-react'

/**
 * Platzhalter für noch nicht hochgeladene Fotos.
 * Sobald echte Bilder im Repo liegen, wird der Platzhalter im jeweiligen
 * Card durch <Image src={...} fill /> ersetzt – die Struktur bleibt gleich.
 */
export default function ImagePlaceholder({
  dark = false,
  className = '',
}: {
  dark?: boolean
  className?: string
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center ${
        dark ? 'bg-[#161616] text-white/30' : 'bg-[#ECE8E2] text-[#B6AFA3]'
      } ${className}`}
    >
      <Camera size={24} strokeWidth={1.5} />
      <span className="mt-2 text-[10px] uppercase tracking-[0.2em]">Foto folgt</span>
    </div>
  )
}
