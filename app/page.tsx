import Header from "@/components/header"
import InteractiveTechHero from "@/components/interactive-tech-hero"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import AchievementsSection from "@/components/achievements-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: "var(--bg)" }}>
      <Header />
      <InteractiveTechHero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
