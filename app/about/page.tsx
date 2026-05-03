import Navigation from '@/components/sections/Navigation'
import About from '@/components/sections/About'
import Demonstrations from '@/components/sections/Demonstrations'

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16">
        <About />
        <Demonstrations />
      </div>
    </main>
  )
}
