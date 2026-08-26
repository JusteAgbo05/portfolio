import { useState, type FormEvent } from 'react';
import { Search } from 'lucide-react';
import { notes } from '../data/notes';
import { LinkPreviewCard } from '../components/LinkPreviewCard';
import { useLanguage } from '../i18n/LanguageContext';

export function NotesSection() {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setPreviewUrl(trimmed);
  }

  return (
    <section id="notes" className="px-6 py-24 max-w-5xl mx-auto">
      <p
        className="text-xs tracking-widest mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
      >
        {t.notesPage.eyebrow}
      </p>
      <h2 className="text-2xl font-medium mb-4" style={{ color: 'var(--text)' }}>
        {t.notesPage.title}
      </h2>
      <p className="text-sm mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
        {t.notesPage.intro}
      </p>

      {/* aperçu à la volée — outil de vérification, ne s'ajoute pas automatiquement au site */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4 max-w-xl">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.notesPage.previewPlaceholder}
          className="flex-1 rounded-md px-3 py-2 text-sm outline-none"
          style={{
            background: 'var(--surface)',
            border: '0.5px solid var(--line)',
            color: 'var(--text)',
          }}
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm"
          style={{
            fontFamily: 'var(--font-display)',
            border: '0.5px solid var(--cyan-dim)',
            color: 'var(--cyan)',
          }}
        >
          <Search size={14} /> {t.notesPage.preview}
        </button>
      </form>

      {previewUrl && (
        <div className="max-w-sm mb-4">
          <LinkPreviewCard url={previewUrl} />
        </div>
      )}

      {previewUrl && (
        <p className="text-xs mb-12" style={{ color: 'var(--text-muted)' }}>
        </p>
      )}

      {/* liens enregistrés en dur — visibles par tous les visiteurs */}
      {notes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <LinkPreviewCard key={note.id} url={note.url} />
          ))}
        </div>
      ) : (
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {t.notesPage.empty}
        </p>
      )}
    </section>
  );
}