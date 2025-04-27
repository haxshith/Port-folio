"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AchievementCardProps {
  achievement: {
    id: number
    title: string
    platform?: string
    rating?: string
    description?: string
    icon: string
    color: string
  }
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full border-blue-500/20 bg-black/40 backdrop-blur-sm">
        <CardContent className="p-6 flex flex-col items-center text-center h-full">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-full mb-4 achievement-badge",
              `bg-gradient-to-b ${achievement.color}`,
            )}
          >
            <span className="text-2xl">{achievement.icon}</span>
          </div>

          <h3 className="text-xl font-bold mb-2 text-blue-300">{achievement.title}</h3>

          {achievement.platform && <div className="text-sm text-blue-400 mb-2">{achievement.platform}</div>}

          {achievement.rating && <div className="text-2xl font-bold text-primary mb-2">{achievement.rating}</div>}

          {achievement.description && <p className="text-blue-200">{achievement.description}</p>}
        </CardContent>
      </Card>
    </motion.div>
  )
}
