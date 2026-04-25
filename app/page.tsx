import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Philosophy from '@/components/sections/Philosophy'
import About from '@/components/sections/About'
import Demonstrations from '@/components/sections/Demonstrations'
import LessonPlans from '@/components/sections/LessonPlans'
import Materials from '@/components/sections/Materials'
import Timeline from '@/components/sections/Timeline'
import Skills from '@/components/sections/Skills'
import Certifications from '@/components/sections/Certifications'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Philosophy />
      <About />
      <Demonstrations />
      <LessonPlans />
      <Materials />
      <Timeline />
      <Skills />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  )
}
