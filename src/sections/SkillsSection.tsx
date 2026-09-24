import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiPython,
  SiOpencv,
  SiGit,
} from 'react-icons/si';
import { Monitor, Server, Cpu, Wrench, Users } from 'lucide-react';
import { SkillCard } from '../components/SkillCard';
import type { IconType } from 'react-icons';
import { useLanguage } from '../i18n/LanguageContext';

interface Skill {
  name: string;
  experience: 'project' | 'learning' | 'foundation';
  icon?: IconType;
}

interface SkillCategory {
  label: string;
  labelEn: string;
  icon: typeof Monitor;
  accent: 'cyan' | 'amber';
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    label: 'Front-end',
    labelEn: 'Front-end',
    icon: Monitor,
    accent: 'cyan',
    skills: [
      { name: 'HTML5', experience: 'project', icon: SiHtml5 },
      { name: 'CSS3', experience: 'project', icon: SiCss },
      { name: 'JavaScript (DOM & API)', experience: 'project', icon: SiJavascript },
      { name: 'React', experience: 'project', icon: SiReact },
    ],
  },
  {
    label: 'Back-end',
    labelEn: 'Back-end',
    icon: Server,
    accent: 'cyan',
    skills: [
      { name: 'PHP / Laravel', experience: 'project', icon: SiPhp },
      { name: 'MySQL', experience: 'project', icon: SiMysql },
      { name: 'Node.js', experience: 'foundation', icon: SiNodedotjs },
      { name: 'API REST', experience: 'project' },
    ],
  },
  {
    label: 'Data & Machine Learning',
    labelEn: 'Data & Machine Learning',
    icon: Cpu,
    accent: 'amber',
    skills: [
      { name: 'Python', experience: 'project', icon: SiPython },
      { name: 'Machine Learning', experience: 'learning' },
      { name: 'Computer Vision', experience: 'project', icon: SiOpencv },
    ],
  },
  {
    label: 'Outils & DevOps',
    labelEn: 'Tools & DevOps',
    icon: Wrench,
    accent: 'cyan',
    skills: [
      { name: 'Git / GitHub', experience: 'project', icon: SiGit },
      { name: 'VS Code', experience: 'project' },
      { name: 'Linux', experience: 'foundation' },
    ],
  },

  {
    label: 'Soft Skills',
    labelEn: 'Soft Skills',
    icon: Users,
    accent: 'cyan',
    skills: [
      { name: 'Gestion de projet', experience: 'project'},
      { name: 'Résolution de problèmes', experience: 'project' },
      { name: 'Travail en équipe', experience: 'project' },
    ],
  },
];

export function SkillsSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="competences" className="px-6 py-24 max-w-5xl mx-auto">
      <p
        className="text-xs tracking-widest mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
      >
        {t.skills.eyebrow}
      </p>
      <h2 className="text-2xl font-medium mb-12" style={{ color: 'var(--text)' }}>
        {t.skills.title}
      </h2>
      <p className="text-sm leading-relaxed max-w-2xl -mt-7 mb-10" style={{ color: 'var(--text-secondary)' }}>
        {t.skills.intro}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((category, i) => (
          <SkillCard
            key={category.label}
            label={lang === 'en' ? category.labelEn : category.label}
            icon={category.icon}
            accent={category.accent}
            skills={category.skills}
            delayMs={i * 100}
          />
        ))}
      </div>
    </section>
  );
}
