import { Building2, CalendarDays, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';
import { useLanguage } from '../i18n/LanguageContext';

export function ExperienceSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="experiences" className="px-6 py-24 max-w-5xl mx-auto">
      <p
        className="text-xs tracking-widest mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
      >
        {t.experience.eyebrow}
      </p>
      <h2 className="text-2xl font-medium mb-4" style={{ color: 'var(--text)' }}>
        {t.experience.title}
      </h2>
      <p className="text-sm leading-relaxed max-w-2xl mb-12" style={{ color: 'var(--text-secondary)' }}>
        {t.experience.intro}
      </p>

      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: 'var(--line)' }} />
        <div className="space-y-7">
          {experiences.map((experience) => {
            const title = lang === 'en' ? experience.titleEn : experience.title;
            const organization = lang === 'en' ? experience.organizationEn : experience.organization;
            const responsibilities = lang === 'en' ? experience.responsibilitiesEn : experience.responsibilities;

            return (
              <article key={experience.id} className="relative">
                <span
                  className="absolute -left-8 top-7 w-3.5 h-3.5 rounded-full"
                  style={{ background: 'var(--bg)', border: '2px solid var(--cyan)' }}
                />
                <div
                  className="p-6 rounded-xl"
                  style={{ background: 'var(--surface)', border: '0.5px solid var(--line)' }}
                >
                  <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--text)' }}>
                    {title}
                  </h3>
                  <div className="grid gap-2 text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
                    <p className="flex items-start gap-2"><Building2 size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--cyan)' }} />{organization}</p>
                    <p className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--cyan)' }} />{experience.location}</p>
                    <p className="flex items-start gap-2"><CalendarDays size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--cyan)' }} />{experience.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {responsibilities.map((responsibility) => (
                      <li key={responsibility} className="relative pl-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <span className="absolute left-0" style={{ color: 'var(--amber)' }}>›</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
