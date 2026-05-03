import Navigation from '@/components/sections/Navigation'
import Philosophy from '@/components/sections/Philosophy'

export default function PhilosophyPage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16">
        <Philosophy />
      </div>
    </main>
  )
}
