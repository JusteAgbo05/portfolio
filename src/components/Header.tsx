import { Link } from 'react-router-dom';
import { FaEnvelope,FaGithub, FaLinkedin } from 'react-icons/fa';
import { useActiveSection } from '../hooks/useActiveSection';
import { useLanguage } from '../i18n/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LangToggle } from './LangToggle';
import { socialLinks } from '../data/socialLinks';
import './header.css';

const SECTION_IDS = ['hero', 'a-propos', 'projets', 'competences', 'distinctions', 'notes', 'contact'] as const;

export function Header() {
  const active = useActiveSection(SECTION_IDS);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.about, id: 'a-propos' },
    { label: t.nav.projects, id: 'projets' },
    { label: t.nav.skills, id: 'competences' },
    { label: t.nav.awards, id: 'distinctions' },
    { label: t.nav.notes, id: 'notes' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <header
      className="header-animated sticky top-0 z-50 px-6 py-4"
      style={{
        background: 'var(--header-bg)',
        backdropFilter: 'blur(8px)',
        borderBottom: '0.5px solid var(--line)',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-medium tracking-wide"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
        >
          VA.
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              className={`nav-link text-sm ${active === link.id ? 'nav-link--active' : ''}`}
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />
          <ThemeToggle />
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
    </header>
  );
}