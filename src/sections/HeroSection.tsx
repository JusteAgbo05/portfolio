import { useScrollProgress } from '../hooks/useScrollProgress';
import { Hero3D } from '../components/hero/Hero3D';
import { useLanguage } from '../i18n/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen overflow-hidden flex items-center"
    >
      <Hero3D progress={progress} />

      <div className="relative z-10 px-6 max-w-4xl mx-auto w-full pointer-events-none">
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