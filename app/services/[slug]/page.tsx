// app/services/[slug]/page.tsx
import { getService, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const description = getMetafieldValue(service.metadata?.description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const duration = getMetafieldValue(service.metadata?.duration)
  const featuredImage = service.metadata?.featured_image

  return (
    <div className="bg-white">
      {featuredImage && featuredImage.imgix_url && (
        <div className="relative h-96 overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              {icon && <div className="text-6xl mb-4">{icon}</div>}
              <h1 className="text-5xl font-bold mb-2">{name}</h1>
              {shortDesc && <p className="text-xl">{shortDesc}</p>}
            </div>
          </div>
        </div>
      )}

      {!featuredImage && (
        <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            {icon && <div className="text-6xl mb-4">{icon}</div>}
            <h1 className="text-5xl font-bold mb-4">{name}</h1>
            {shortDesc && <p className="text-xl text-primary-100">{shortDesc}</p>}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link href="/services" className="text-primary-600 hover:text-primary-800 font-medium">
            ← Back to Services
          </Link>
        </div>

        {duration && (
          <div className="mb-8 inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-medium">
            ⏱ Duration: {duration}
          </div>
        )}

        {description && (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        <div className="mt-12 p-8 bg-primary-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Interested in this service?</h3>
          <p className="text-gray-600 mb-6">Get in touch with our team to learn more</p>
          <Link
            href="/team"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  )
}