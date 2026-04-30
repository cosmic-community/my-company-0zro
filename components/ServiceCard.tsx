import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const duration = getMetafieldValue(service.metadata?.duration)
  const featuredImage = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
    >
      {featuredImage && featuredImage.imgix_url ? (
        <div className="h-48 overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
          <span className="text-6xl">{icon || '📚'}</span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {icon && <span className="text-3xl">{icon}</span>}
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
        </div>
        {shortDesc && (
          <p className="text-gray-600 mb-4 line-clamp-3">{shortDesc}</p>
        )}
        <div className="flex items-center justify-between">
          {duration && (
            <span className="text-sm text-gray-500">⏱ {duration}</span>
          )}
          <span className="text-primary-600 font-medium group-hover:translate-x-1 transition-transform inline-block">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  )
}