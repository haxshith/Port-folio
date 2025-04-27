"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function AnimatedText() {
  const texts = ["Developer.", "Problem Solver.", "Tech Enthusiast."]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < texts[currentIndex].length) {
            setDisplayText(texts[currentIndex].substring(0, displayText.length + 1))
          } else {
            // Wait a bit before starting to delete
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((currentIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-xl md:text-2xl font-semibold flex items-center">
        <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400")}>
          {displayText}
        </span>
        <motion.span
          className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        />
      </div>
    </div>
  )
}
