import { lazy, Suspense } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useLanguage } from '../i18n/LanguageContext';

const Hero3D = lazy(() => import('../components/hero/Hero3D').then(({ Hero3D }) => ({ default: Hero3D })));

export function HeroSection() {
  const { t } = useLanguage();
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen overflow-hidden flex items-center"
    >
      <Suspense fallback={<div className="absolute inset-0" aria-hidden="true" />}>
        <Hero3D progress={progress} />
      </Suspense>

      <div className="relative z-10 px-6 max-w-4xl mx-auto w-full">
        <p
          className="text-xs tracking-widest mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
        >
          {t.hero.eyebrow}
        </p>
        <h1
          className="text-4xl sm:text-5xl font-medium mb-6 max-w-2xl"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
        >
          {t.hero.title}
        </h1>
        <p
          className="text-base max-w-xl leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t.hero.subtitle}
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="#projets"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ fontFamily: 'var(--font-display)', background: 'var(--amber)', color: 'var(--bg)' }}
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-medium transition-colors hover:bg-[var(--surface-raised)]"
            style={{ fontFamily: 'var(--font-display)', border: '0.5px solid var(--cyan-dim)', color: 'var(--cyan)' }}
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-6 z-10 text-xs"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
      >
        {t.hero.scroll}
      </div>
    </section>
  );
}
