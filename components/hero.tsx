"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Send } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import SolarSystem from "@/components/solar-system"

export default function Hero() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <SolarSystem />

      <motion.div
        className="container relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl glow-text">
              Hi, I'm Banothu Harshith <span className="inline-block animate-bounce">🚀</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Turning complex problems into elegant solutions
            </p>
          </motion.div>

          <motion.div
            className="h-8 md:h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <AnimatedText />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/files/resume.pdf" download="Banothu_Harshith_Resume.pdf">
              <Button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="group relative overflow-hidden border-2 border-blue-500 hover:border-blue-400 text-white font-medium py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Contact Me
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}
