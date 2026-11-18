import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Pause, Play, X } from 'lucide-react';
import { FaEnvelope,FaGithub, FaLinkedin } from 'react-icons/fa';
import { useActiveSection } from '../hooks/useActiveSection';
import { useLanguage } from '../i18n/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LangToggle } from './LangToggle';
import { socialLinks } from '../data/socialLinks';
import './header.css';

const SECTION_IDS = ['hero', 'a-propos', 'formation', 'experiences', 'projets', 'competences', 'distinctions', 'notes', 'contact'] as const;

export function Header() {
  const active = useActiveSection(SECTION_IDS);
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicError, setMusicError] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
      return;
    }

    setMusicError('');
    try {
      await audio.play();
    } catch {
      setMusicPlaying(false);
      setMusicError(t.nav.musicError);
    }
  };

  const navLinks = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.about, id: 'a-propos' },
    { label: t.nav.formation, id: 'formation' },
    { label: t.nav.experience, id: 'experiences' },
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
      <audio
        ref={audioRef}
        src="/audio/portfolio.mp3"
        loop
        preload="none"
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
        onError={() => {
          setMusicPlaying(false);
          setMusicError(t.nav.musicError);
        }}
      />
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-medium tracking-wide"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
        >
          VA.
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
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
          <button
            type="button"
            className="music-toggle"
            onClick={toggleMusic}
            aria-label={musicPlaying ? t.nav.musicPause : t.nav.musicPlay}
            aria-pressed={musicPlaying}
            title={musicPlaying ? t.nav.musicPause : t.nav.musicPlay}
          >
            {musicPlaying ? <Pause size={15} /> : <Play size={15} />}
            <span>{t.nav.musicLabel}</span>
          </button>
          <a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaGithub size={18} />
          </a>
          <a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaLinkedin size={18} />
          </a>
          <a aria-label="Envoyer un email" href={`mailto:${socialLinks.email}`} style={{ color: 'var(--text-secondary)' }}>
            <FaEnvelope size={18} />
          </a>
          <button
            type="button"
            className="lg:hidden p-1.5 rounded-md flex items-center justify-center"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            style={{ color: 'var(--text-secondary)', border: '0.5px solid var(--line)' }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {musicError && (
        <p className="music-error" role="alert">
          {musicError}
        </p>
      )}
      {menuOpen && (
        <nav id="mobile-navigation" className="lg:hidden max-w-6xl mx-auto pt-4 pb-1 grid grid-cols-2 gap-1" aria-label="Navigation mobile">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm"
              style={{ color: active === link.id ? 'var(--text)' : 'var(--text-secondary)', background: active === link.id ? 'var(--surface-raised)' : 'transparent' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
