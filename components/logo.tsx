"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Logo() {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className={cn(
          "font-orbitron font-bold text-xl tracking-wider",
          "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500",
        )}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        HARSHITH
      </motion.span>
    </motion.div>
  )
}
