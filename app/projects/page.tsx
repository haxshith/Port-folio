import ProjectCard from "@/components/project-card"
import SectionHeading from "@/components/section-heading"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Banothu Harshith",
  description: "Showcase of projects developed by Banothu Harshith",
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Masala Madness",
      description: "A recipe sharing platform where users can discover, share, and save their favorite recipes.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/haxshith/masala-madness",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Wallet Management",
      description: "A personal finance application to track expenses, income, and manage budgets.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React.js", "Firebase", "TailwindCSS", "Chart.js"],
      githubUrl: "https://github.com/haxshith/wallet-management",
      liveUrl: "#",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <SectionHeading title="Projects" subtitle="Showcasing my technical skills and creativity" />

      <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
