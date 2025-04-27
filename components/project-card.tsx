"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    githubUrl: string
    liveUrl?: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Custom project images based on project ID
  const projectImages = {
    1: "/placeholder.svg?height=300&width=600", // Masala Madness
    2: "/placeholder.svg?height=300&width=600", // Wallet Management
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300 project-card-hover border-blue-500/20 bg-black/40 backdrop-blur-sm",
          isHovered ? "transform-gpu scale-[1.02] shadow-lg" : "",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>

          {project.id === 1 && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-3/4 h-3/4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white">Masala Madness</h3>
                    <p className="text-sm text-white/80">Recipe Sharing Platform</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.id === 2 && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-3/4 h-3/4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white">Wallet Management</h3>
                    <p className="text-sm text-white/80">Personal Finance Tracker</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Image
            src={projectImages[project.id as keyof typeof projectImages] || project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 opacity-40"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent",
              "transition-opacity duration-300",
              isHovered ? "opacity-90" : "opacity-70",
            )}
          />
        </div>
        <CardContent className="p-6 relative z-20">
          <h3 className="text-2xl font-bold mb-2 text-blue-300">{project.title}</h3>
          <p className="text-blue-100 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2 py-1 text-xs bg-blue-900/30 text-blue-200 border border-blue-500/30"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-blue-500/50 hover:bg-blue-900/30 hover:border-blue-400"
              >
                <Github className="h-4 w-4" />
                Code
              </Button>
            </Link>
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 border-none"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
