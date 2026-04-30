import type { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  if (!members || members.length === 0) {
    return <p className="text-center text-gray-600">No team members listed.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}