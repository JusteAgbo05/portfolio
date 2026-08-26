import { useEffect } from 'react';
import { X, Code2, ExternalLink, PlayCircle } from 'lucide-react';
import type { Project } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const cover = project.screenshots?.[0] ?? project.screenshot;
  const role = lang === 'en' && project.roleEn ? project.roleEn : project.role;
  const pitch = lang === 'en' && project.pitchEn ? project.pitchEn : project.pitch;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl"
        style={{ background: 'var(--surface)', border: '0.5px solid var(--line)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full"
          style={{ background: 'rgba(11,14,18,0.7)', color: 'var(--text)' }}
        >
          <X size={16} />
        </button>

        {cover && (
          <div className="w-full aspect-video overflow-hidden" style={{ background: 'var(--bg)' }}>
            <img src={cover} alt={project.name} className="w-full h-full object-cover object-top" />
          </div>
        )}

        <div className="p-6">
          <h2 className="text-xl font-medium mb-1" style={{ color: 'var(--text)' }}>
            {project.name}
          </h2>
          {role && (
            <p
              className="text-sm mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
            >
              {role}
            </p>
          )}

          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            {pitch}
          </p>

          <p
            className="text-xs tracking-widest mb-2"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
          >
            {t.projects.techLabel}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text)',
                  border: '0.5px solid var(--line)',
                  background: 'var(--surface-raised)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm"
                style={{ border: '0.5px solid var(--line)', color: 'var(--text)' }}
              >
                <Code2 size={15} /> {t.projectDetail.code}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium"
                style={{ background: 'var(--amber)', color: 'var(--bg)' }}
              >
                <ExternalLink size={15} /> {t.projectDetail.demo}
              </a>
            )}
            {project.presentationUrl && (
              <a
                href={project.presentationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm"
                style={{ border: '0.5px solid var(--cyan-dim)', color: 'var(--cyan)' }}
              >
                <PlayCircle size={15} /> {t.projects.presentation}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}