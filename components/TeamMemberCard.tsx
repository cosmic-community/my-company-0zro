import type { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const bio = getMetafieldValue(member.metadata?.bio)
  const email = getMetafieldValue(member.metadata?.email)
  const photo = member.metadata?.photo

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
        {photo && photo.imgix_url ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-7xl">
            👤
          </div>
        )}
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        {role && (
          <p className="text-primary-600 font-medium mb-3">{role}</p>
        )}
        {bio && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{bio}</p>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-block text-sm text-primary-600 hover:text-primary-800 font-medium"
          >
            ✉ {email}
          </a>
        )}
      </div>
    </div>
  )
}