import { useState } from 'react';
import { awards, type Award } from '../data/awards';
import { useLanguage } from '../i18n/LanguageContext';
import { CertificateCard } from '../components/CertificateCard';
import { CertificateLightbox } from '../components/CertificateLightbox';
import './awards-marquee.css';

// vitesse : ~4s par certificat, ajuste ce multiplicateur si tu veux plus vite/lent
const SECONDS_PER_ITEM = 4;

export function AwardsSection() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<Award | null>(null);

  function localize(award: Award) {
    return {
      title: lang === 'en' && award.titleEn ? award.titleEn : award.title,
      description: lang === 'en' && award.descriptionEn ? award.descriptionEn : award.description,
      date: lang === 'en' && award.dateEn ? award.dateEn : award.date,
    };
  }

  // liste dupliquée pour un défilement en boucle sans coupure visible
  const loopItems = [...awards, ...awards];
  const duration = Math.max(awards.length * SECONDS_PER_ITEM, 10);

  return (
    <section id="distinctions" className="px-6 py-24 max-w-6xl mx-auto">
      <p
        className="text-xs tracking-widest mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
      >
        {t.awards.eyebrow}
      </p>
      <h2 className="text-2xl font-medium mb-2" style={{ color: 'var(--text)' }}>
        {t.awards.title}
      </h2>
      <p className="text-sm mb-12" style={{ color: 'var(--text-secondary)' }}>
        {t.awards.subtitle}
      </p>

      {awards.length === 0 ? (
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {t.awards.empty}
        </p>
      ) : (
        <div
          className="awards-marquee-container -mx-6 px-6"
          style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
        >
          <div className="awards-marquee-track gap-5">
            {loopItems.map((award, i) => {
              const { title, date } = localize(award);
              return (
                <CertificateCard
                  key={`${award.id}-${i}`}
                  award={award}
                  title={title}
                  date={date}
                  onOpen={() => setSelected(award)}
                />
              );
            })}
          </div>
        </div>
      )}

      {selected && selected.image && (
        <CertificateLightbox
          image={selected.image}
          title={localize(selected).title}
          description={localize(selected).description}
          date={localize(selected).date}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}