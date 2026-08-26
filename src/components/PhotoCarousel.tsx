import { useEffect, useRef, useState } from 'react';

interface PhotoCarouselProps {
  photos: string[];
  intervalMs?: number;
}

export function PhotoCarousel({ photos, intervalMs = 4000 }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || photos.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, photos.length, intervalMs]);

  return (
    <div
      className="relative overflow-hidden rounded-xl aspect-4/5"
      style={{
        border: '0.5px solid var(--line)',
        background: 'var(--surface)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* coins "detection frame", cohérents avec le reste du design system */}
      <span
        className="absolute top-3 left-3 w-4 h-4 z-10"
        style={{ borderTop: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)' }}
      />
      <span
        className="absolute top-3 right-3 w-4 h-4 z-10"
        style={{ borderTop: '2px solid var(--amber)', borderRight: '2px solid var(--amber)' }}
      />
      <span
        className="absolute bottom-3 left-3 w-4 h-4 z-10"
        style={{ borderBottom: '2px solid var(--amber)', borderLeft: '2px solid var(--amber)' }}
      />
      <span
        className="absolute bottom-3 right-3 w-4 h-4 z-10"
        style={{ borderBottom: '2px solid var(--amber)', borderRight: '2px solid var(--amber)' }}
      />

      {photos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index && paused ? 'scale(1.06)' : 'scale(1)',
            transition: 'opacity 0.8s ease, transform 0.6s ease',
          }}
        />
      ))}

      {/* petits repères de progression, comme un indicateur de "frame active" */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {photos.map((_, i) => (
          <span
            key={i}
            className="h-1 rounded-full"
            style={{
              width: i === index ? '18px' : '6px',
              background: i === index ? 'var(--amber)' : 'var(--text-muted)',
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}