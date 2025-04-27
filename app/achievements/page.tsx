import AchievementCard from "@/components/achievement-card"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Achievements | Banothu Harshith",
  description: "Coding achievements and accomplishments of Banothu Harshith",
}

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      title: "LeetCode Knight",
      rating: "1973",
      icon: "🏆",
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: 2,
      title: "3★ CodeChef",
      rating: "1678",
      icon: "⭐",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      title: "Specialist",
      platform: "CodeForces",
      rating: "1420",
      icon: "🥇",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 4,
      title: "Flipkart GRiD 6.0",
      description: "Top 0.57%",
      icon: "🥇",
      color: "from-blue-500 to-indigo-600",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <SectionHeading title="Achievements" subtitle="Recognitions and accomplishments" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>

      <Card className="mt-12 overflow-hidden backdrop-blur-sm bg-black/40 border border-blue-500/20">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-300">Problem Solving</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-4">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-purple-500 to-violet-600 achievement-badge">
                <span className="text-2xl font-bold text-white">700+</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-100">Problems Solved</h4>
                <p className="text-sm text-blue-300">Across various platforms</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 achievement-badge">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-100">Contests Participated</h4>
                <p className="text-sm text-blue-300">Competitive programming</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl blur-xl"></div>
        <Card className="relative overflow-hidden backdrop-blur-sm bg-black/40 border border-blue-500/20">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-300">Coding Platforms</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative p-6 rounded-lg bg-gradient-to-b from-yellow-900/30 to-amber-900/30 border border-yellow-500/30">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center">
                  <span className="text-xl">🏆</span>
                </div>
                <h4 className="text-xl font-bold text-yellow-300 mb-2">LeetCode</h4>
                <p className="text-yellow-100 mb-1">Knight (1973)</p>
                <p className="text-sm text-yellow-200">350+ problems solved</p>
              </div>

              <div className="relative p-6 rounded-lg bg-gradient-to-b from-green-900/30 to-emerald-900/30 border border-green-500/30">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <h4 className="text-xl font-bold text-green-300 mb-2">CodeChef</h4>
                <p className="text-green-100 mb-1">3★ (1678)</p>
                <p className="text-sm text-green-200">200+ problems solved</p>
              </div>

              <div className="relative p-6 rounded-lg bg-gradient-to-b from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-xl">🥇</span>
                </div>
                <h4 className="text-xl font-bold text-cyan-300 mb-2">CodeForces</h4>
                <p className="text-cyan-100 mb-1">Specialist (1420)</p>
                <p className="text-sm text-cyan-200">150+ problems solved</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
