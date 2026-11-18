import { Award as AwardIcon } from 'lucide-react';
import type { Award } from '../data/awards';
import { EauEnsembleArtwork } from './EauEnsembleArtwork';
import { useLanguage } from '../i18n/LanguageContext';

interface CertificateCardProps {
  award: Award;
  title: string;
  date: string;
  onOpen: () => void;
}

export function CertificateCard({ award, title, date, onOpen }: CertificateCardProps) {
  const { lang } = useLanguage();
  const cardClassName = 'text-left shrink-0 w-64 snap-start';
  const cardContent = (
    <>
      <div
        className={`relative rounded-xl overflow-hidden mb-3 ${award.artwork ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
        style={{ background: 'var(--surface)', border: '0.5px solid var(--line)' }}
      >
        {award.rank && (
          <span
            className="absolute top-3 right-3 z-10 text-xs px-2 py-1 rounded-md"
            style={{
              fontFamily: 'var(--font-display)',
              background: 'var(--amber)',
              color: 'var(--bg)',
            }}
          >
            {award.rank}
          </span>
        )}

        {award.image ? (
          <img
            src={award.image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : award.artwork === 'eau-ensemble' ? (
          <EauEnsembleArtwork variant="award" lang={lang} />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ color: 'var(--text-muted)' }}
          >
            <AwardIcon size={28} />
          </div>
        )}
      </div>

      <h3 className="text-sm font-medium mb-1 line-clamp-2" style={{ color: 'var(--text)' }}>
        {title}
      </h3>
      <p
        className="text-xs"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
      >
        {date}
      </p>
    </>
  );

  if (!award.image) {
    return (
      <article className={cardClassName} style={{ scrollSnapAlign: 'start' }}>
        {cardContent}
      </article>
    );
  }

  return (
    <button
      onClick={onOpen}
      className={cardClassName}
      style={{ scrollSnapAlign: 'start' }}
    >
      {cardContent}
    </button>
  );
}