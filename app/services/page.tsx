import ServicesGrid from '@/components/ServicesGrid'
import { getServices } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Services - My Company',
  description: 'Explore our comprehensive education services',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Discover our full range of educational services tailored for success
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {services.length > 0 ? (
          <ServicesGrid services={services} />
        ) : (
          <p className="text-center text-gray-600">No services available at the moment.</p>
        )}
      </div>
    </div>
  )
}