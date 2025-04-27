"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function SolarSystem() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.offsetWidth
    const height = container.offsetHeight
    const centerX = width / 2
    const centerY = height / 2

    // Create stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div")
      star.className = "star"
      star.style.width = `${Math.random() * 2 + 1}px`
      star.style.height = star.style.width
      star.style.left = `${Math.random() * width}px`
      star.style.top = `${Math.random() * height}px`
      star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`)
      container.appendChild(star)
    }

    // Create sun
    const sun = document.createElement("div")
    sun.className = "planet sun"
    sun.style.width = "40px"
    sun.style.height = "40px"
    sun.style.left = `${centerX - 20}px`
    sun.style.top = `${centerY - 20}px`
    sun.style.background = "radial-gradient(circle, #FDB813 0%, #F89E0F 100%)"
    sun.style.boxShadow = "0 0 20px rgba(253, 184, 19, 0.8)"
    container.appendChild(sun)

    // Create planets and orbits
    const planetColors = [
      "radial-gradient(circle, #3B82F6 0%, #1E40AF 100%)",
      "radial-gradient(circle, #8B5CF6 0%, #6D28D9 100%)",
      "radial-gradient(circle, #EC4899 0%, #BE185D 100%)",
      "radial-gradient(circle, #10B981 0%, #047857 100%)",
      "radial-gradient(circle, #F59E0B 0%, #B45309 100%)",
    ]

    const planets = []
    const orbits = []

    for (let i = 0; i < 5; i++) {
      const orbitSize = 80 + i * 50
      const orbitSpeed = 20 - i * 2

      // Create orbit
      const orbit = document.createElement("div")
      orbit.className = "orbit"
      orbit.style.width = `${orbitSize * 2}px`
      orbit.style.height = `${orbitSize * 2}px`
      orbit.style.left = `${centerX - orbitSize}px`
      orbit.style.top = `${centerY - orbitSize}px`
      container.appendChild(orbit)
      orbits.push(orbit)

      // Create planet
      const planet = document.createElement("div")
      planet.className = "planet"
      const planetSize = 10 - i
      planet.style.width = `${planetSize}px`
      planet.style.height = `${planetSize}px`
      planet.style.background = planetColors[i]
      planet.style.boxShadow = `0 0 10px ${planetColors[i].split(" ")[1]}`
      container.appendChild(planet)
      planets.push(planet)

      // Set initial position
      const angle = Math.random() * Math.PI * 2
      updatePlanetPosition(planet, angle, orbitSize, centerX, centerY, planetSize)

      // Animate planet
      animatePlanet(planet, angle, orbitSize, centerX, centerY, planetSize, orbitSpeed)
    }

    // Create cosmic dust
    const dustContainer = document.createElement("div")
    dustContainer.className = "cosmic-dust"
    container.appendChild(dustContainer)

    for (let i = 0; i < 50; i++) {
      const dust = document.createElement("div")
      dust.className = "dust-particle"
      dust.style.width = `${Math.random() * 2 + 1}px`
      dust.style.height = dust.style.width
      dust.style.left = `${Math.random() * width}px`
      dust.style.top = `${Math.random() * height + height}px`
      dust.style.opacity = `${Math.random() * 0.5 + 0.1}`
      dust.style.setProperty("--duration", `${Math.random() * 20 + 10}s`)
      dustContainer.appendChild(dust)
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  function updatePlanetPosition(
    planet: HTMLDivElement,
    angle: number,
    orbitSize: number,
    centerX: number,
    centerY: number,
    planetSize: number,
  ) {
    const x = centerX + Math.cos(angle) * orbitSize - planetSize / 2
    const y = centerY + Math.sin(angle) * orbitSize - planetSize / 2
    planet.style.left = `${x}px`
    planet.style.top = `${y}px`
  }

  function animatePlanet(
    planet: HTMLDivElement,
    startAngle: number,
    orbitSize: number,
    centerX: number,
    centerY: number,
    planetSize: number,
    duration: number,
  ) {
    let angle = startAngle
    const animate = () => {
      angle += 0.005 * (20 / duration) // Adjust speed based on duration
      updatePlanetPosition(planet, angle, orbitSize, centerX, centerY, planetSize)
      requestAnimationFrame(animate)
    }
    animate()
  }

  return (
    <motion.div
      ref={containerRef}
      className="solar-system"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}
