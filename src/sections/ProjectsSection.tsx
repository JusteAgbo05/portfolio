import { useState } from 'react';
import { projects, type Project } from '../data/projects';
import { ProjectCard } from '../components/frame/ProjectCard';
import { ProjectModal } from '../components/frame/ProjectModal';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function ProjectsSection() {
  const { t } = useLanguage();
  const featured = projects.filter((p) => p.featured);
  const upcoming = projects.filter((p) => p.status === 'upcoming');
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projets" className="px-6 py-24 max-w-7xl mx-auto">
      <p
        className="text-xs tracking-widest mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
      >
        {t.projects.eyebrow}
      </p>
      <h2 className="text-3xl font-medium mb-14" style={{ color: 'var(--text)' }}>
        {t.projects.title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.id} delayMs={i * 120}>
            <ProjectCard project={project} onOpen={() => setSelected(project)} />
          </Reveal>
        ))}
      </div>

      {/*
        Section "à venir" : chaque nouveau projet du parcours ML Engineer
        se rajoute simplement dans src/data/projects.ts avec status:
        'upcoming' — aucune autre modification nécessaire.
      */}
      {upcoming.length > 0 && (
        <Reveal delayMs={featured.length * 120} className="mt-16">
          <p
            className="text-xs tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--amber)' }}
          >
            {t.projects.upcoming}
          </p>
          <div className="flex flex-wrap gap-4">
            {upcoming.map((project) => (
              <div
                key={project.id}
                className="px-4 py-3 rounded-md"
                style={{
                  border: '0.5px dashed var(--line)',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                }}
              >
                {project.name} · {project.version}
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}