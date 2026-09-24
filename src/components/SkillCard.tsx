import type { IconType } from 'react-icons';
import { useInView } from '../hooks/useInView';
import { SkillBar } from './SkillBar';

interface Skill {
  name: string;
  experience: 'project' | 'learning' | 'foundation';
  icon?: IconType;
}

interface SkillCardProps {
  label: string;
  icon: IconType;
  accent: 'cyan' | 'amber';
  skills: Skill[];
  delayMs?: number; // décalage d'apparition de la carte elle-même
}

export function SkillCard({ label, icon: Icon, accent, skills, delayMs = 0 }: SkillCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const accentColor = accent === 'cyan' ? 'var(--cyan)' : 'var(--amber)';

  return (
    <div
      ref={ref}
      className="p-6 rounded-xl"
      style={{
        background: 'var(--surface)',
        border: '0.5px solid var(--line)',
        borderRadius: 'var(--radius-card)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delayMs}ms, transform 0.6s ease ${delayMs}ms`,
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-9 h-9 flex items-center justify-center rounded-lg"
          style={{ background: 'var(--surface-raised)', color: accentColor }}
        >
          <Icon size={18} strokeWidth={1.75} />
        </div>
        <h3 className="text-base font-medium" style={{ color: 'var(--text)' }}>
          {label}
        </h3>
      </div>

      {skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          experience={skill.experience}
          accent={accent}
          icon={skill.icon}
          animate={inView}
          delayMs={150 + i * 100}
        />
      ))}
    </div>
  );
}
