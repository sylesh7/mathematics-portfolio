import SmoothScroll from '@/components/motion/SmoothScroll'
import BackgroundGrid from '@/components/motion/BackgroundGrid'
import CurveDivider from '@/components/motion/CurveDivider'
import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import Philosophy from '@/components/sections/Philosophy'
import About from '@/components/sections/About'
import Lab from '@/components/sections/Lab'
import Timeline from '@/components/sections/Timeline'
import Skills from '@/components/sections/Skills'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'

export default function Page() {
  return (
    <SmoothScroll>
      <BackgroundGrid />
      <Nav />
      <main>
        <Hero />
        <CurveDivider />
        <Philosophy />
        <CurveDivider flip />
        <About />
        <CurveDivider />
        <Lab />
        <CurveDivider flip />
        <Timeline />
        <CurveDivider />
        <Skills />
        <CurveDivider flip />
        <Certifications />
        <CurveDivider />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
