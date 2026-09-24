import { Eye, Download } from 'lucide-react';
import type { ReactNode } from 'react';
import { PhotoCarousel } from '../components/PhotoCarousel';
import { useLanguage } from '../i18n/LanguageContext';



/*
  Dépose 3 photos dans public/photos/ avec ces noms exacts
  (ou change les chemins ci-dessous pour correspondre aux tiens).
*/
const PHOTOS = ['/photos/photo_1.jpg', '/photos/photo_2.jpg', '/photos/photo_3.jpg'];

/*
  Dépose ton CV en PDF dans public/cv/ avec ce nom exact
  (ou change le chemin ci-dessous pour correspondre au tien).
*/
const CV_PATH = '/cv/cv_vivien_agbo.pdf';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="px-6 py-24 max-w-5xl mx-auto">
      <p
        className="text-xs tracking-widest mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
      >
        {t.about.eyebrow}
      </p>
      <h2 className="text-2xl font-medium mb-12" style={{ color: 'var(--text)' }}>
        {t.about.title}
      </h2>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <PhotoCarousel photos={PHOTOS} />

        <div className="space-y-5" style={{ color: 'var(--text-secondary)' }}>
          <p className="text-base leading-relaxed">
            {highlightAboutText(t.about.p1)}
          </p>

          <p className="text-base leading-relaxed">
            {highlightAboutText(t.about.p2)}
          </p>

          <p className="text-base leading-relaxed">
            {highlightAboutText(t.about.p3)}
          </p>

          <p className="text-base leading-relaxed">
            {highlightAboutText(t.about.p4)}
          </p>

      
<div className="flex items-center gap-3 pt-2">
  <a
    href={CV_PATH}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium"
    style={{
      fontFamily: 'var(--font-display)',
      background: 'var(--amber)',
      color: 'var(--bg)',
    }}
  >
    <Eye size={16} /> {t.about.cvView}
  </a>

  <a
    href={CV_PATH}
    download
    className="inline-flex items-center gap-2 px-3 py-2.5 rounded-md text-sm"
    style={{
      fontFamily: 'var(--font-display)',
      color: 'var(--text-secondary)',
      border: '0.5px solid var(--line)',
    }}
  >
    <Download size={16} /> {t.about.cvDownload}
  </a>
</div>

        </div>
      </div>
    </section>
  );
}

const HIGHLIGHT_TERMS = [
  'Vivien AGBO',
  'React',
  'Laravel',
  'PHP/MySQL',
  'API REST',
  'REST APIs',
  'WordPress',
  'Intelligence Artificielle',
  'Artificial Intelligence',
  'Machine Learning',
  'Machine Learning Engineer',
];

function highlightAboutText(text: string): ReactNode[] {
  const termsPattern = new RegExp(`(${HIGHLIGHT_TERMS.join('|')})`, 'g');

  return text.split(termsPattern).map((part, index) =>
    HIGHLIGHT_TERMS.includes(part) ? <Highlight key={`${part}-${index}`}>{part}</Highlight> : part
  );
}

function Highlight({ children }: { children: ReactNode }) {
  return (
    <strong style={{ color: 'var(--cyan)', fontWeight: 500 }}>
      {children}
    </strong>
  );
}
