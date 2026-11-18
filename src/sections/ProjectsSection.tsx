import { projects } from '../data/projects';
import type { ProjectCategory } from '../data/projects';
import { ProjectCard } from '../components/frame/ProjectCard';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectsSectionProps {
  activeFilter: ProjectCategory | 'all';
  onFilterChange: (filter: ProjectCategory | 'all') => void;
}

export function ProjectsSection({ activeFilter, onFilterChange }: ProjectsSectionProps) {
  const { t } = useLanguage();
  const featured = projects.filter((p) => p.featured);
  const visibleProjects = activeFilter === 'all'
    ? featured
    : featured.filter((project) => project.categories.includes(activeFilter));
  const filters: { id: ProjectCategory | 'all'; label: string; count: number }[] = [
    { id: 'all', label: t.projects.filterAll, count: featured.length },
    { id: 'web', label: t.projects.filterWeb, count: featured.filter((project) => project.categories.includes('web')).length },
    { id: 'data-ml', label: t.projects.filterDataMl, count: featured.filter((project) => project.categories.includes('data-ml')).length },
    { id: 'team', label: t.projects.filterTeam, count: featured.filter((project) => project.categories.includes('team')).length },
  ];
  const upcoming = projects.filter((p) => p.status === 'upcoming');

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

      <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
        <div
          className="inline-flex max-w-full flex-wrap gap-1 rounded-md p-1"
          role="group"
          aria-label={t.projects.filterLabel}
          style={{ background: 'var(--surface)', border: '0.5px solid var(--line)' }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => onFilterChange(filter.id)}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-sm px-3 py-1.5 text-xs transition-colors"
                style={{
                  background: isActive ? 'var(--amber)' : 'transparent',
                  color: isActive ? 'var(--bg)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {filter.label}
                <span style={{ opacity: 0.72 }}>{filter.count}</span>
              </button>
            );
          })}
        </div>
        <p className="text-xs" aria-live="polite" style={{ color: 'var(--text-muted)' }}>
          {visibleProjects.length} / {featured.length}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, i) => (
          <Reveal key={project.id} delayMs={i * 120}>
            <ProjectCard project={project} />
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
    </section>
  );
}
