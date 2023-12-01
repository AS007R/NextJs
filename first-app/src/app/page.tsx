import Image from 'next/image'
import Hero from '@/components/Hero'
import Services from '@/components/services'
import About from '@/components/about'
import Projects from '@/components/projects'
import WhyUs from '@/components/whyUs'
import Tech from '@/components/tech'

export default function Home() {
  return (
    <main>
      
      <Hero/>
      <Services/>
      <About/>
      <Projects/>
      <WhyUs/>
      <Tech/>

    </main>
  )
}
