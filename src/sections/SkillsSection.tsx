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
  level: number; // 0–100 — à ajuster
  icon?: IconType;
}

interface SkillCategory {
  label: string;
  labelEn: string;
  icon: typeof Monitor;
  accent: 'cyan' | 'amber';
  skills: Skill[];
}

/*
  Pourcentages repris de l'ancien portfolio pour Front-end/Back-end/Outils
  (à ajuster toi-même), placeholders pour Data & Machine Learning.
*/
const categories: SkillCategory[] = [
  {
    label: 'Front-end',
    labelEn: 'Front-end',
    icon: Monitor,
    accent: 'cyan',
    skills: [
      { name: 'HTML5', level: 75, icon: SiHtml5 },
      { name: 'CSS3', level: 70, icon: SiCss },
      { name: 'JavaScript (DOM & API)', level: 60, icon: SiJavascript },
      { name: 'React', level: 55, icon: SiReact },
    ],
  },
  {
    label: 'Back-end',
    labelEn: 'Back-end',
    icon: Server,
    accent: 'cyan',
    skills: [
      { name: 'PHP / Laravel', level: 60, icon: SiPhp },
      { name: 'MySQL', level: 60, icon: SiMysql },
      { name: 'Node.js', level: 50, icon: SiNodedotjs },
      { name: 'API REST', level: 50 },
    ],
  },
  {
    label: 'Data & Machine Learning',
    labelEn: 'Data & Machine Learning',
    icon: Cpu,
    accent: 'amber',
    skills: [
      { name: 'Python', level: 60, icon: SiPython },
      { name: 'Machine Learning', level: 50 },
      { name: 'Computer Vision', level: 45, icon: SiOpencv },
    ],
  },
  {
    label: 'Outils & DevOps',
    labelEn: 'Tools & DevOps',
    icon: Wrench,
    accent: 'cyan',
    skills: [
      { name: 'Git / GitHub', level: 60, icon: SiGit },
      { name: 'VS Code', level: 75 },
      { name: 'Linux', level: 65 },
    ],
  },

  {
    label: 'Soft Skills',
    labelEn: 'Soft Skills',
    icon: Users,
    accent: 'cyan',
    skills: [
      { name: 'Gestion de projet', level: 80},
      { name: 'Résolution de problèmes', level: 85 },
      { name: 'Travail en équipe', level: 85 },
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