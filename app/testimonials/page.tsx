import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Testimonials - My Company',
  description: 'What our students and partners say about us',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Hear from our students, parents, and educational partners
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No testimonials yet.</p>
        )}
      </div>
    </div>
  )
}