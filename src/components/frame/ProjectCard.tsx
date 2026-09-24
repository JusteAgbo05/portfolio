import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';

interface ProjectCardProps {
  project: Project;
  visibleTagCount?: number;
}

export function ProjectCard({ project, visibleTagCount = 4 }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const cover = project.screenshots?.[0] ?? project.screenshot;
  const visibleTags = project.stack.slice(0, visibleTagCount);
  const hiddenCount = project.stack.length - visibleTags.length;
  const role = lang === 'en' && project.roleEn ? project.roleEn : project.role;
  const pitch = lang === 'en' && project.pitchEn ? project.pitchEn : project.pitch;
  const status = project.status === 'deployed' ? t.projects.deployed : t.projects.inProgress;

  return (
    <Link
      to={`/projets/${project.id}`}
      className="block text-left w-full rounded-xl overflow-hidden group transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
      style={{ background: 'var(--surface)', border: '0.5px solid var(--line)' }}
    >
      <div className="relative aspect-video overflow-hidden" style={{ background: 'var(--bg)' }}>
        {cover ? (
          <img
            src={cover}
            alt={project.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-xs"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
          >
            à venir
          </div>
        )}

        <div
          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(11,14,18,0.55), transparent)',
          }}
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3 mb-3 text-xs" style={{ fontFamily: 'var(--font-display)' }}>
          <span style={{ color: 'var(--amber)' }}>{project.version}</span>
          <span style={{ color: 'var(--text-muted)' }}>{status}</span>
        </div>
        <h3 className="text-lg font-medium mb-1" style={{ color: 'var(--text)' }}>
          {project.name}
        </h3>
        {role && (
          <p className="text-xs mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}>
            {role}
          </p>
        )}
        <p className="text-sm leading-relaxed line-clamp-3 mb-4" style={{ color: 'var(--text-secondary)' }}>
          {pitch}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTags.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-md"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-secondary)',
              border: '0.5px solid var(--line)',
              background: 'var(--surface-raised)',
            }}
          >
            {tech}
          </span>
          ))}
          {hiddenCount > 0 && (
          <span
            className="text-xs px-2 py-1 rounded-md"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-muted)',
              background: 'var(--surface-raised)',
            }}
          >
            +{hiddenCount}
          </span>
          )}
        </div>
        <span className="text-xs" style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}>
          {t.projectDetail.explore} →
        </span>
      </div>
    </Link>
  );
}
