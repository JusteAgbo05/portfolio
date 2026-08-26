import { MapPin, Calendar } from 'lucide-react';
import { education } from '../data/education';
import { useLanguage } from '../i18n/LanguageContext';

export function FormationTimeline() {
  const { t, lang } = useLanguage();

  return (
    <div className="relative pl-8">
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px"
        style={{ background: 'var(--line)' }}
      />

      <div className="space-y-8">
        {education.map((item) => {
          const degree = lang === 'en' && item.degreeEn ? item.degreeEn : item.degree;
          const isOngoing = item.status === 'ongoing';

          return (
            <div key={item.id} className="relative">
              <span
                className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full"
                style={{
                  background: isOngoing ? 'var(--amber)' : 'var(--bg)',
                  border: isOngoing ? 'none' : '2px solid var(--text-muted)',
                }}
              />

              <div
                className="p-5 rounded-xl"
                style={{
                  background: 'var(--surface)',
                  border: '0.5px solid var(--line)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                {isOngoing && (
                  <span
                    className="inline-block text-xs px-2 py-1 rounded-md mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      background: 'var(--amber-dim)',
                      color: 'var(--amber)',
                    }}
                  >
                    {t.formation.ongoing}
                  </span>
                )}

                <h3 className="text-base font-medium mb-2" style={{ color: 'var(--text)' }}>
                  {degree}
                </h3>

                <div className="flex items-center gap-2 text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  <MapPin size={14} />
                  <span>
                    {item.institution}, {item.location}
                  </span>
                </div>

                <div
                  className="flex items-center gap-2 text-xs"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
                >
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}