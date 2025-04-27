import TimelineExperience from "@/components/timeline-experience"
import SectionHeading from "@/components/section-heading"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience | Banothu Harshith",
  description: "Professional experience and roles of Banothu Harshith",
}

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      title: "SDE Intern",
      company: "Zidio",
      period: "May 2023 - July 2023",
      description:
        "Worked on developing and maintaining web applications using React.js and Node.js. Implemented new features and fixed bugs in the existing codebase.",
    },
    {
      id: 2,
      title: "Placement Volunteer",
      company: "IIIT Lucknow",
      period: "Jan 2023 - Present",
      description:
        "Assisted in coordinating placement activities and facilitating communication between students and companies.",
    },
    {
      id: 3,
      title: "Senior Photography Club Member",
      company: "IIIT Lucknow",
      period: "Aug 2022 - Present",
      description:
        "Organized photography events and workshops. Mentored junior members and contributed to the club's growth.",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <SectionHeading title="Experience" subtitle="My professional journey and roles" />

      <div className="mt-12">
        <TimelineExperience experiences={experiences} />
      </div>
    </div>
  )
}
