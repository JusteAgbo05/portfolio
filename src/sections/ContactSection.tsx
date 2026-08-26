import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import { socialLinks } from '../data/socialLinks';

/*
  Mêmes identifiants EmailJS que l'ancien portfolio — la clé publique
  EmailJS est faite pour être exposée côté client, ce n'est pas un secret.
*/
const EMAILJS_SERVICE_ID = 'service_6z9yqlk';
const EMAILJS_TEMPLATE_ID = 'template_f3fzmbn';
const EMAILJS_PUBLIC_KEY = 'g6Xgo0imkx5uIa2Cs';

type FeedbackState = { type: 'success' | 'error'; message: string } | null;

export function ContactSection() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const prenom = String(data.get('prenom') ?? '').trim();
    const nom = String(data.get('nom') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const sujet = String(data.get('sujet') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!prenom || !nom || !email || !sujet || !message) {
      setFeedback({ type: 'error', message: t.contact.requiredError });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFeedback({ type: 'error', message: t.contact.emailError });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_prenom: prenom,
          from_nom: nom,
          from_email: email,
          sujet,
          message,
          reply_to: email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setFeedback({ type: 'success', message: t.contact.success });
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setFeedback({ type: 'error', message: t.contact.error });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-24 max-w-5xl mx-auto">
      <p
        className="text-xs tracking-widest mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
      >
        {t.contact.eyebrow}
      </p>
      <h2 className="text-2xl font-medium mb-10" style={{ color: 'var(--text)' }}>
        {t.contact.title}
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* bloc coordonnées */}
        <div
          className="p-6 rounded-xl"
          style={{
            background: 'var(--surface)',
            border: '0.5px solid var(--line)',
            borderRadius: 'var(--radius-card)',
          }}
        >
          <h3 className="text-base font-medium mb-6" style={{ color: 'var(--text)' }}>
            {t.contact.infoTitle}
          </h3>

          <div className="space-y-4">
            <InfoRow icon={<Mail size={16} />} label={t.contact.email} value={socialLinks.email} href={`mailto:${socialLinks.email}`} />
            <InfoRow icon={<Phone size={16} />} label={t.contact.phoneLabel} value={socialLinks.phone} href={`tel:${socialLinks.phone.replace(/\s/g, '')}`} />
            <InfoRow icon={<MapPin size={16} />} label={t.contact.locationLabel} value={socialLinks.location} />
            <InfoRow icon={<FaGithub size={16} />} label="GitHub" value={socialLinks.github.replace('https://', '')} href={socialLinks.github} external />
            <InfoRow icon={<FaLinkedin size={16} />} label="LinkedIn" value={socialLinks.linkedin.replace('https://', '')} href={socialLinks.linkedin} external />
          </div>
        </div>

        {/* formulaire */}
        <div
          className="p-6 rounded-xl"
          style={{
            background: 'var(--surface)',
            border: '0.5px solid var(--line)',
            borderRadius: 'var(--radius-card)',
          }}
        >
          <h3 className="text-base font-medium mb-6" style={{ color: 'var(--text)' }}>
            {t.contact.formTitle}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.contact.firstName} name="prenom" />
              <Field label={t.contact.lastName} name="nom" />
            </div>
            <Field label={t.contact.email} name="email" type="email" />
            <Field label={t.contact.subject} name="sujet" />
            <Field label={t.contact.message} name="message" textarea />

            {feedback && (
              <p
                className="text-sm"
                style={{
                  color: feedback.type === 'success' ? 'var(--cyan)' : '#ff6b6b',
                }}
              >
                {feedback.message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium disabled:opacity-60"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'var(--amber)',
                color: 'var(--bg)',
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> {t.contact.sending}
                </>
              ) : (
                <>
                  <Send size={16} /> {t.contact.send}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

function InfoRow({ icon, label, value, href, external }: InfoRowProps) {
  const content = (
    <div className="flex items-start gap-3">
      <div
        className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
        style={{ background: 'var(--surface-raised)', color: 'var(--cyan)' }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {label}
        </p>
        <p className="text-sm break-all" style={{ color: 'var(--text)' }}>
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}

function Field({ label, name, type = 'text', textarea }: FieldProps) {
  const baseStyle = {
    background: 'var(--surface)',
    border: '0.5px solid var(--line)',
    color: 'var(--text)',
  };

  return (
    <label className="block">
      <span
        className="block text-xs mb-1.5"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-secondary)' }}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className="w-full rounded-md px-3 py-2 text-sm outline-none"
          style={baseStyle}
        />
      ) : (
        <input
          name={name}
          type={type}
          className="w-full rounded-md px-3 py-2 text-sm outline-none"
          style={baseStyle}
        />
      )}
    </label>
  );
}