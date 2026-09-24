import type { IconType } from 'react-icons';
import { useLanguage } from '../i18n/LanguageContext';

interface SkillBarProps {
  name: string;
  experience: 'project' | 'learning' | 'foundation';
  accent: 'cyan' | 'amber';
  icon?: IconType;
  animate?: boolean;
  delayMs?: number;
}

export function SkillBar({
  name,
  experience,
  accent,
  icon: Icon,
  animate = true,
  delayMs = 0,
}: SkillBarProps) {
  const { t } = useLanguage();
  const color = accent === 'cyan' ? 'var(--cyan)' : 'var(--amber)';
  const label = t.skills[experience];

  return (
    <div className="mb-3 last:mb-0 flex items-center justify-between gap-3">
      <span className="text-sm inline-flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
        {Icon && <Icon size={14} style={{ color: 'var(--text-muted)' }} />}
        {name}
      </span>
      <span
        className="text-[11px] px-2 py-1 rounded-md shrink-0"
        style={{
          fontFamily: 'var(--font-display)',
          color,
          background: accent === 'cyan' ? 'var(--surface-raised)' : 'rgba(255, 176, 32, 0.10)',
          opacity: animate ? 1 : 0,
          transition: `opacity 0.4s ease ${delayMs}ms`,
        }}
      >
        {label}
      </span>
    </div>
  );
}
