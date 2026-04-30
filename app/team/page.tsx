import TeamGrid from '@/components/TeamGrid'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Team - My Company',
  description: 'Meet our dedicated education professionals',
}

export default async function TeamPage() {
  const members = await getTeamMembers()

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Meet the dedicated educators and professionals behind our success
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {members.length > 0 ? (
          <TeamGrid members={members} />
        ) : (
          <p className="text-center text-gray-600">No team members listed yet.</p>
        )}
      </div>
    </div>
  )
}