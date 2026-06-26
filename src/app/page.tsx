import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import SocialProofStrip from '@/components/sections/SocialProofStrip'
import ProblemPain from '@/components/sections/ProblemPain'
import Zielraeume from '@/components/sections/Zielraeume'
import Leistungen from '@/components/sections/Leistungen'
import ReferenzenPreview from '@/components/sections/ReferenzenPreview'
import CTABar from '@/components/sections/CTABar'
import UeberUns from '@/components/sections/UeberUns'
import Testimonials from '@/components/sections/Testimonials'
import AnfrageFormular from '@/components/sections/AnfrageFormular'
import FAQPreview from '@/components/sections/FAQPreview'
import ShowroomCTA from '@/components/sections/ShowroomCTA'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProofStrip />
        <ProblemPain />
        <Zielraeume />
        <Leistungen />
        <ReferenzenPreview />
        <CTABar />
        <UeberUns />
        <Testimonials />
        <AnfrageFormular />
        <FAQPreview />
        <ShowroomCTA />
      </main>
      <Footer />
    </>
  )
}