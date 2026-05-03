import Navigation from '@/components/sections/Navigation'
import LessonPlans from '@/components/sections/LessonPlans'
import Materials from '@/components/sections/Materials'

export default function LessonsPage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16">
        <LessonPlans />
        <Materials />
      </div>
    </main>
  )
}
