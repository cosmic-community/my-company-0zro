import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import TeamGrid from '@/components/TeamGrid'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import { getServices, getTeamMembers, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [services, teamMembers, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ])

  return (
    <>
      <Hero />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational services designed to inspire and empower learners at every level
            </p>
          </div>
          <ServicesGrid services={services.slice(0, 6)} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated educators and professionals committed to excellence
            </p>
          </div>
          <TeamGrid members={teamMembers.slice(0, 4)} />
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  )
}