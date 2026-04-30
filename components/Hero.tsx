import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎓 Excellence in Education
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Minds,<br />
            <span className="text-accent-500">Shaping Futures</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Discover comprehensive educational services designed to inspire learning and foster growth at every stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              href="/team"
              className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border border-white border-opacity-30"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}