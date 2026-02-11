import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
