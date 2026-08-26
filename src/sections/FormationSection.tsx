import { useLanguage } from '../i18n/LanguageContext';
import { FormationTimeline } from '../components/FormationTimeline';

export function FormationSection() {
  const { t } = useLanguage();

  return (
    <section id="formation" className="px-6 py-24 max-w-3xl mx-auto">
      <p
        className="text-xs tracking-widest mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
      >
        {t.formation.eyebrow}
      </p>
      <h2 className="text-2xl font-medium mb-12" style={{ color: 'var(--text)' }}>
        {t.formation.title}
      </h2>

      <FormationTimeline />
    </section>
  );
}