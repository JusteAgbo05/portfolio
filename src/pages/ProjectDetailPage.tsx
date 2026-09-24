import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Code2, ExternalLink, PlayCircle } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectFrame3D } from '../components/frame/ProjectFrame3D';
import { useLanguage } from '../i18n/LanguageContext';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const { lang, t } = useLanguage();

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p style={{ color: 'var(--text-secondary)' }}>{t.projectDetail.notFound}</p>
        <Link
          to="/"
          className="mt-4 text-sm"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
        >
          {t.projectDetail.backHome}
        </Link>
      </div>
    );
  }

  const pitch = lang === 'en' && project.pitchEn ? project.pitchEn : project.pitch;
  const highlights =
    lang === 'en' && project.highlightsEn && project.highlightsEn.length > 0
      ? project.highlightsEn
      : project.highlights;
  const role = lang === 'en' && project.roleEn ? project.roleEn : project.role;
  const status = project.status === 'deployed' ? t.projects.deployed : t.projects.inProgress;

  return (
    <div className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <Link
        to="/#projets"
        className="inline-flex items-center gap-2 mb-12 text-xs"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-secondary)' }}
      >
        <ArrowLeft size={14} /> {t.projectDetail.back}
      </Link>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <ProjectFrame3D project={project} />

        <div>
          <p
            className="text-xs tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--amber)' }}
          >
            {project.version} · {status}
          </p>
          <h1 className="text-3xl font-medium mb-6" style={{ color: 'var(--text)' }}>
            {project.name}
          </h1>
          {role && (
            <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}>
              {role}
            </p>
          )}
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            {pitch}
          </p>

          {highlights && highlights.length > 0 && (
            <div className="mb-8">
              <p
                className="text-xs tracking-widest mb-3"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
              >
                {t.projectDetail.keyFeatures}
              </p>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm leading-relaxed pl-4 relative"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="absolute left-0" style={{ color: 'var(--cyan)' }}>
                      ›
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md text-xs"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text)',
                  border: '0.5px solid var(--line)',
                  background: 'var(--surface)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: 'var(--cyan)' }}
              >
                <Code2 size={16} /> {t.projectDetail.code}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: 'var(--cyan)' }}
              >
                <ExternalLink size={16} /> {t.projectDetail.demo}
              </a>
            )}
            {project.presentationUrl && (
              <a
                href={project.presentationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: 'var(--cyan)' }}
              >
                <PlayCircle size={16} /> {t.projects.presentation}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
