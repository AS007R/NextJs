import Image from 'next/image'
import Hero from '@/components/Hero'
import Services from '@/components/services'
import About from '@/components/about'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main>
      
      <Hero/>
      <Services/>
      <About/>
      <Projects/>

    </main>
  )
}
