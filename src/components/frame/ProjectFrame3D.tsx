import { useRef, type MouseEvent } from 'react';
import type { Project } from '../../data/projects';
import './project-frame.css';
import { ScreenshotCycle } from './ScreenshotCycle';
import { useLanguage } from '../../i18n/LanguageContext';

interface ProjectFrame3DProps {
  project: Project;
}

const MAX_TILT_DEG = 10;

/**
 * Cadre "detection frame" : perspective CSS 3D qui bascule au mouvement
 * de la souris, avec un aperçu d'interface qui défile seul en boucle.
 * Le tilt est purement CSS (pas de WebGL) — volontaire, c'est un simple
 * objet UI, pas une scène 3D complexe (celle-ci est réservée au hero).
 */
export function ProjectFrame3D({ project }: ProjectFrame3DProps) {
  const { lang } = useLanguage();
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    const frame = frameRef.current;
    if (!stage || !frame) return;

    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    frame.style.transform = `rotateY(${x * MAX_TILT_DEG}deg) rotateX(${-y * MAX_TILT_DEG}deg)`;
  }

  function handleMouseLeave() {
    const frame = frameRef.current;
    if (!frame) return;
    frame.style.transform = 'rotateY(0deg) rotateX(0deg)';
  }

  return (
    <div
      className="pf-stage"
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pf-frame" ref={frameRef}>
        <span className="pf-corner pf-corner--tl" aria-hidden="true" />
        <span className="pf-corner pf-corner--tr" aria-hidden="true" />
        <span className="pf-corner pf-corner--bl" aria-hidden="true" />
        <span className="pf-corner pf-corner--br" aria-hidden="true" />

        <div className="pf-meta">
          <span className="pf-status">
            {project.version} · {statusLabel(project.status, lang)}
          </span>
          <span className="pf-tag">{project.stack.join(' · ')}</span>
        </div>

        <div className="pf-browser">
          <div className="pf-chrome">
            <span className="pf-dot" />
            <span className="pf-dot" />
            <span className="pf-dot" />
            <div className="pf-urlbar">{project.url ?? (lang === 'en' ? 'coming up' : 'à venir')}</div>
          </div>

          <div className="pf-viewport">
             {project.screenshots && project.screenshots.length > 0 ? (
            <ScreenshotCycle
              screenshots={project.screenshots}
              alt={`Aperçu de l'interface de ${project.name}`}
            />
              ) : project.screenshot ? (
                  <img
              src={project.screenshot}
              alt={`Aperçu de l'interface de ${project.name}`}
              className="pf-scroll-content pf-screenshot"
            />
                ) : (
              <PlaceholderUI />
              )}
          </div>
        </div>

        <h3 className="pf-name">{project.name}</h3>
        <p className="pf-pitch">{lang === 'en' && project.pitchEn ? project.pitchEn : project.pitch}</p>
      </div>
    </div>
  );
}

function statusLabel(status: Project['status'], lang: 'fr' | 'en') {
  switch (status) {
    case 'deployed':
      return lang === 'en' ? 'deployed' : 'déployé';
    case 'in-progress':
      return lang === 'en' ? 'in progress' : 'en cours';
    case 'upcoming':
      return lang === 'en' ? 'upcoming' : 'à venir';
  }
}

/** Bloc d'interface factice, en attendant les vraies captures d'écran. */
function PlaceholderUI() {
  return (
    <div className="pf-scroll-content pf-placeholder">
      <div className="pf-ph-nav">
        <div className="pf-ph-logo" />
        <div className="pf-ph-pill" />
      </div>
      <div className="pf-ph-block">
        <div className="pf-ph-title" />
        <div className="pf-ph-sub" />
      </div>
      <div className="pf-ph-cards">
        <div className="pf-ph-card">
          <div className="pf-ph-l1" />
          <div className="pf-ph-l2" />
        </div>
        <div className="pf-ph-card">
          <div className="pf-ph-l1" />
          <div className="pf-ph-l2" />
        </div>
        <div className="pf-ph-card">
          <div className="pf-ph-l1" />
          <div className="pf-ph-l2" />
        </div>
        <div className="pf-ph-card">
          <div className="pf-ph-l1" />
          <div className="pf-ph-l2" />
        </div>
      </div>
      <div className="pf-ph-table">
        {[0, 1, 2, 3, 4].map((row) => (
          <div className="pf-ph-row" key={row}>
            <div className="pf-ph-c pf-ph-c1" />
            <div className="pf-ph-c pf-ph-c2" />
            <div className="pf-ph-c pf-ph-c3" />
          </div>
        ))}
      </div>
    </div>
  );
}
