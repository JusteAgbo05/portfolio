import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import './portfolio-intro.css';

interface PortfolioIntroProps {
  onEnter: (intent: PortfolioIntent) => void;
}

export type PortfolioIntent = 'recruiter' | 'collaborate' | 'discover' | 'skip';

export function PortfolioIntro({ onEnter }: PortfolioIntroProps) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const paths: { intent: Exclude<PortfolioIntent, 'skip'>; title: string; description: string }[] = [
    { intent: 'recruiter', title: t.intro.recruiter, description: t.intro.recruiterDescription },
    { intent: 'collaborate', title: t.intro.collaborate, description: t.intro.collaborateDescription },
    { intent: 'discover', title: t.intro.discover, description: t.intro.discoverDescription },
  ];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    return () => dialog.close();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="portfolio-intro"
      aria-labelledby="portfolio-intro-title"
      onCancel={(event) => {
        event.preventDefault();
        onEnter('skip');
      }}
    >
      <div className="portfolio-intro__content">
        <p className="portfolio-intro__eyebrow">{t.intro.eyebrow}</p>
        <h1 id="portfolio-intro-title" className="portfolio-intro__title">
          {t.intro.title}
        </h1>
        <p className="portfolio-intro__description">{t.intro.description}</p>

        <div className="portfolio-intro__paths" role="group" aria-label={t.intro.choosePath}>
          {paths.map((path, index) => (
            <button
              key={path.intent}
              type="button"
              className="portfolio-intro__path"
              autoFocus={index === 0}
              onClick={() => onEnter(path.intent)}
            >
              <span className="portfolio-intro__path-title">{path.title}</span>
              <span className="portfolio-intro__path-description">{path.description}</span>
              <ArrowRight className="portfolio-intro__path-arrow" size={16} aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="portfolio-intro__actions">
          <button type="button" className="portfolio-intro__skip" onClick={() => onEnter('skip')}>
            {t.intro.skip}
          </button>
        </div>
      </div>
      <span className="portfolio-intro__index" aria-hidden="true">01 — 03</span>
    </dialog>
  );
}