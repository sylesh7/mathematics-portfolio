import Navigation from '@/components/sections/Navigation'
import TimelineSection from '@/components/sections/Timeline'

export default function TimelinePage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16">
        <TimelineSection />
      </div>
    </main>
  )
}
