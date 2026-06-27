import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { EngineeringFocusSection } from "@/components/sections/engineering-focus";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <EngineeringFocusSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
