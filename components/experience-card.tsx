"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

interface ExperienceCardProps {
  experience: {
    id: number
    title: string
    company: string
    period: string
    description: string
  }
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden glassmorphism hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex-shrink-0">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="flex items-center text-muted-foreground">
                  <span>{experience.company}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground">{experience.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
