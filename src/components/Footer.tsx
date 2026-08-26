import { FaEnvelope,FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import { socialLinks } from '../data/socialLinks';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-6 py-8" style={{ borderTop: '0.5px solid var(--line)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-xs"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
        >
          {t.footer.credit}
        </p>

        <div className="flex items-center gap-3">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaGithub size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaLinkedin size={18} />
          </a>
          <a href={socialLinks.email} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}