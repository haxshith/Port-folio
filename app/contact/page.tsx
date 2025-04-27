import ContactForm from "@/components/contact-form"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact | Banothu Harshith",
  description: "Get in touch with Banothu Harshith",
}

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <SectionHeading title="Contact Me" subtitle="Let's connect and discuss opportunities" />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Card className="overflow-hidden backdrop-blur-sm bg-background/50 border border-primary/10">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:lcs2022010@iiitl.ac.in" className="text-sm hover:underline">
                  lcs2022010@iiitl.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+916302388908" className="text-sm hover:underline">
                  +91 6302388908
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a
                  href="https://linkedin.com/in/banothu-harshith10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  linkedin.com/in/banothu-harshith10
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-primary" />
                <a
                  href="https://github.com/haxshith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  github.com/haxshith
                </a>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <Link href="https://github.com/haxshith" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/banothu-harshith10" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <ContactForm />
      </div>
    </div>
  )
}
