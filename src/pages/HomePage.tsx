import { lazy, Suspense, useEffect, useState } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { FormationSection } from '../sections/FormationSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';
import { AwardsSection } from '../sections/AwardsSection';
import { NotesSection } from '../sections/NotesSection';
import { ContactSection } from '../sections/ContactSection';
import { useActiveSection } from '../hooks/useActiveSection';
import { useHashScroll } from '../hooks/useHashScroll';
import { PortfolioIntro, type PortfolioIntent } from '../components/PortfolioIntro';
import type { ProjectCategory } from '../data/projects';
import { useNavigate } from 'react-router-dom';

const Hero3D = lazy(() => import('../components/hero/Hero3D').then(({ Hero3D }) => ({ default: Hero3D })));

const SECTION_IDS = ['hero', 'a-propos', 'formation', 'experiences', 'projets', 'competences', 'distinctions', 'notes', 'contact'] as const;

const SECTION_PROGRESS: Record<string, number> = {
  hero: 0,
  'a-propos': 0.12,
  formation: 0.24,
  experiences: 0.36,
  projets: 0.5,
  competences: 0.64,
  distinctions: 0.78,
  notes: 0.9,
  contact: 1,
};

const INTRO_SESSION_KEY = 'portfolio-intro-seen';

function shouldShowIntro() {
  if (typeof window === 'undefined') return false;

  try {
    return (
      !window.location.hash &&
      window.sessionStorage.getItem(INTRO_SESSION_KEY) !== '1' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  } catch {
    return false;
  }
}

/*
  Page d'accueil — assemble toutes les sections en une seule page.
  Toutes les sections prévues sont désormais construites.
*/
export function HomePage() {
  useHashScroll();
  const navigate = useNavigate();
  const [introOpen, setIntroOpen] = useState(shouldShowIntro);
  const [projectFilter, setProjectFilter] = useState<ProjectCategory | 'all'>('all');
  const activeSection = useActiveSection(SECTION_IDS) ?? 'hero';
  const progress = SECTION_PROGRESS[activeSection] ?? 0;

  function handleIntroSelection(intent: PortfolioIntent) {
    setIntroOpen(false);
    if (intent === 'skip') return;

    if (intent === 'collaborate') {
      setProjectFilter('team');
      navigate('/#projets');
    } else if (intent === 'recruiter') {
      setProjectFilter('all');
      navigate('/#experiences');
    } else {
      setProjectFilter('all');
      navigate('/#projets');
    }
  }

  useEffect(() => {
    if (!introOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    try {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, '1');
    } catch {
      // Session storage can be disabled by the browser.
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [introOpen]);

  return (
    <div className="relative isolate">
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000"
        style={{ opacity: activeSection === 'hero' ? 0.3 : 0.09 }}
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <Hero3D progress={progress} />
        </Suspense>
      </div>
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FormationSection />
        <ExperienceSection />
        <ProjectsSection activeFilter={projectFilter} onFilterChange={setProjectFilter} />
        <SkillsSection />
        <AwardsSection />
        <NotesSection />
        <ContactSection />
      </div>
      {introOpen && <PortfolioIntro onEnter={handleIntroSelection} />}
    </div>
  );
}
