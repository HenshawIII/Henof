// "use client"
import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Contact from '@/components/Contact'
import AboutHome from '@/components/AboutHome'

export default function Home() {

  // console.log("Gwarsh! I'm a console log!");

  return (
    <main>
      <Hero />
      <Product />
      <AboutHome />
      <Contact />
    </main>
  )
}