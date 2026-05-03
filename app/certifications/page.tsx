import Navigation from '@/components/sections/Navigation'
import Certifications from '@/components/sections/Certifications'
import Testimonials from '@/components/sections/Testimonials'

export default function CertificationsPage() {
  return (
    <main className="w-full">
      <Navigation />
      <div className="pt-16">
        <Certifications />
        <Testimonials />
      </div>
    </main>
  )
}
