import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');

    // léger délai pour laisser le DOM se peindre avant de scroller
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);

    return () => clearTimeout(timer);
  }, [hash]);
}