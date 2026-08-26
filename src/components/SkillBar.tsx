import type { IconType } from 'react-icons';

interface SkillBarProps {
  name: string;
  level: number; // 0–100
  accent: 'cyan' | 'amber';
  icon?: IconType;
  animate?: boolean; // si false, la barre reste à 0 (pas encore révélée)
  delayMs?: number; // décalage pour un effet en cascade
}

export function SkillBar({
  name,
  level,
  accent,
  icon: Icon,
  animate = true,
  delayMs = 0,
}: SkillBarProps) {
  const color = accent === 'cyan' ? 'var(--cyan)' : 'var(--amber)';

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-baseline mb-1.5">
        <span
          className="text-sm inline-flex items-center gap-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {Icon && <Icon size={14} style={{ color: 'var(--text-muted)' }} />}
          {name}
        </span>
        <span
          className="text-xs"
          style={{
            fontFamily: 'var(--font-display)',
            color,
            opacity: animate ? 1 : 0,
            transition: `opacity 0.4s ease ${delayMs}ms`,
          }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'var(--line-soft)' }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: animate ? `${level}%` : '0%',
            background: color,
            transition: `width 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delayMs}ms`,
          }}
        />
      </div>
    </div>
  );
}