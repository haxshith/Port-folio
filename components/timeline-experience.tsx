"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
}

interface TimelineExperienceProps {
  experiences: Experience[]
}

export default function TimelineExperience({ experiences }: TimelineExperienceProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:translate-x-[-0.5px]"></div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn("relative grid grid-cols-1 md:grid-cols-2 gap-8", index % 2 === 0 ? "md:rtl" : "")}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-background transform md:translate-x-[-8px]"></div>

            {/* Content */}
            <div
              className={cn(
                "md:pr-8",
                index % 2 === 0 ? "md:col-start-2 md:text-left" : "md:col-start-1 md:text-right",
              )}
            >
              <Card
                className={cn(
                  "overflow-hidden transition-all duration-300 border-blue-500/20 bg-black/40 backdrop-blur-sm hover:shadow-md hover:shadow-blue-900/20",
                  "relative",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
                <div className="relative p-6">
                  <div className={cn("flex flex-col gap-4", index % 2 === 0 ? "md:items-start" : "md:items-end")}>
                    <div className={cn("space-y-1", index % 2 === 0 ? "md:text-left" : "md:text-right")}>
                      <h3 className="text-xl font-bold text-blue-300">{experience.title}</h3>
                      <div className="flex items-center text-blue-100 gap-1">
                        <span>{experience.company}</span>
                      </div>
                      <div
                        className={cn(
                          "flex items-center text-sm text-blue-200 gap-1",
                          index % 2 === 0 ? "" : "md:justify-end",
                        )}
                      >
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-blue-100">{experience.description}</p>

                    <div className={cn("flex", index % 2 === 0 ? "justify-start" : "md:justify-end")}>
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                        <Briefcase className="h-5 w-5 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Empty column for layout */}
            <div className={cn(index % 2 === 0 ? "md:col-start-1" : "md:col-start-2")}></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
