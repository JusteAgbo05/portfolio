import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer de thème"
      title={theme === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre'}
      className="p-1.5 rounded-md flex items-center justify-center"
      style={{ color: 'var(--text-secondary)', border: '0.5px solid var(--line)' }}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}