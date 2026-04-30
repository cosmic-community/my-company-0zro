import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary-700">
            <span>🎓</span>
            <span>My Company</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Team
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Testimonials
            </Link>
          </nav>

          <Link
            href="/services"
            className="hidden md:inline-block bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}