import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
          Join hundreds of learners who have transformed their lives through our educational services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-white text-accent-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            View Our Services
          </Link>
          <Link
            href="/team"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}