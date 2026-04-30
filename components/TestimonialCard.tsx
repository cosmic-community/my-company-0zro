import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const authorName = getMetafieldValue(testimonial.metadata?.author_name)
  const authorRole = getMetafieldValue(testimonial.metadata?.author_role)
  const authorPhoto = testimonial.metadata?.author_photo

  return (
    <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-primary-100 h-full flex flex-col">
      <div className="text-primary-600 text-5xl font-serif leading-none mb-4">"</div>
      
      {quote && (
        <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-1 italic">
          {quote}
        </p>
      )}

      <div className="flex items-center gap-4 mt-auto">
        {authorPhoto && authorPhoto.imgix_url ? (
          <img
            src={`${authorPhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={authorName}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary-200"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-2xl">
            👤
          </div>
        )}
        <div>
          {authorName && (
            <p className="font-bold text-gray-900">{authorName}</p>
          )}
          {authorRole && (
            <p className="text-sm text-gray-600">{authorRole}</p>
          )}
        </div>
      </div>
    </div>
  )
}