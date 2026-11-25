import { PROFILE } from "@/lib/data";
import { fetchGitHubStats } from "@/lib/github";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function HomePage() {
  const githubStats = await fetchGitHubStats(PROFILE.githubUsername);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection repoStats={githubStats.topRepos} />
        <ExperienceSection />
        <GitHubSection stats={githubStats} />
        <AwardsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
