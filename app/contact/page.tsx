import Navigation from '@/components/sections/Navigation'
import Contact from '@/components/sections/Contact'

export default function ContactPage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
    </main>
  )
}
