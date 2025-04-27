"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("text-center space-y-2", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
          "bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400",
        )}
      >
        {title}
      </h2>
      {subtitle && <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{subtitle}</p>}
    </motion.div>
  )
}
