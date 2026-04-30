import type { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'

export default function ServicesGrid({ services }: { services: Service[] }) {
  if (!services || services.length === 0) {
    return <p className="text-center text-gray-600">No services available.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}