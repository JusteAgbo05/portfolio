import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { FormationSection } from '../sections/FormationSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';
import { AwardsSection } from '../sections/AwardsSection';
import { NotesSection } from '../sections/NotesSection';
import { ContactSection } from '../sections/ContactSection';
import { useHashScroll } from '../hooks/useHashScroll';

/*
  Page d'accueil — assemble toutes les sections en une seule page.
  Toutes les sections prévues sont désormais construites.
*/
export function HomePage() {
  useHashScroll();

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FormationSection />
      <ProjectsSection />
      <SkillsSection />
      <AwardsSection />
      <NotesSection />
      <ContactSection />
    </main>
  );
}