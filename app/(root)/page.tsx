// "use client"
import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Contact from '@/components/Contact'
import AboutHome from '@/components/AboutHome'
import FAQ from '@/components/FAQ'
import Numbrs from '@/components/Numbrs'
import Sust from "@/components/sust"
import Choose from '@/components/choose'
import CEO from '@/components/ceo'
import Testimoni from '@/components/testimoni'
import CTA from '@/components/CTA'

export default function Home() {

  // console.log("Gwarsh! I'm a console log!");

  return (
    <main>
      <Hero />
      <AboutHome />
      <Numbrs />
      <Sust/>
      <Choose/>
      <CEO/>
      <Testimoni/>
      <CTA/>
      
      <FAQ />
    </main>
  )
}