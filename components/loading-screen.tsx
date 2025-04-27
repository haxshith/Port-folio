"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="space-y-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-gradient-to-br from-primary to-blue-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                BH
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
            </motion.div>

            <motion.p
              className={cn(
                "text-xl font-bold",
                "bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400",
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              "I win I win that's my job and that's what I do"
            </motion.p>

            <motion.div
              className="relative h-1 w-48 mx-auto overflow-hidden rounded-full bg-muted"
              initial={{ width: 0 }}
              animate={{ width: "12rem" }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
