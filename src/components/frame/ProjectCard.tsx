import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
  visibleTagCount?: number;
}

export function ProjectCard({ project, onOpen, visibleTagCount = 4 }: ProjectCardProps) {
  const cover = project.screenshots?.[0] ?? project.screenshot;
  const visibleTags = project.stack.slice(0, visibleTagCount);
  const hiddenCount = project.stack.length - visibleTags.length;

  return (
    <button
      onClick={onOpen}
      className="text-left w-full rounded-xl overflow-hidden group"
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

        {/* overlay dégradé + titre au survol */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(11,14,18,0.95) 0%, rgba(11,14,18,0.4) 55%, transparent 100%)',
          }}
        >
          <h3 className="text-base font-medium" style={{ color: 'var(--text)' }}>
            {project.name}
          </h3>
          {project.role && (
            <p className="text-xs" style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}>
              {project.role}
            </p>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-wrap gap-1.5">
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
    </button>
  );
}