import { useLanguage } from '../i18n/LanguageContext';

export function LangToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label="Changer de langue"
      title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
      className="text-xs px-2 py-1.5 rounded-md"
      style={{
        fontFamily: 'var(--font-display)',
        color: 'var(--text-secondary)',
        border: '0.5px solid var(--line)',
      }}
    >
      {lang === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}