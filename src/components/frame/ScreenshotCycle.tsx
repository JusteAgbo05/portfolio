import { useEffect, useRef, useState, type SyntheticEvent } from 'react';

interface ScreenshotCycleProps {
  screenshots: string[];
  alt: string;
}

const HOLD_TOP_MS = 700; // pause en haut de page avant de défiler
const HOLD_BOTTOM_MS = 900; // pause en bas avant de passer à la suivante
const PX_PER_SEC = 55; // vitesse de défilement
const MIN_SCROLL_MS = 1200;
const MAX_SCROLL_MS = 5000;

export function ScreenshotCycle({ screenshots, alt }: ScreenshotCycleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [index, setIndex] = useState(0);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [distance, setDistance] = useState(0);
  const [scrollMs, setScrollMs] = useState(MIN_SCROLL_MS);
  const [loadedKey, setLoadedKey] = useState(-1); // index dont les mesures sont prêtes
  const [paused, setPaused] = useState(false);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  function handleLoad(e: SyntheticEvent<HTMLImageElement>) {
    const img = e.currentTarget;
    const containerWidth = containerRef.current?.clientWidth ?? img.clientWidth;
    const containerHeight = containerRef.current?.clientHeight ?? 1;
    const renderedHeight = containerWidth * (img.naturalHeight / img.naturalWidth);
    const dist = Math.max(0, renderedHeight - containerHeight);
    const sMs = Math.min(MAX_SCROLL_MS, Math.max(MIN_SCROLL_MS, (dist / PX_PER_SEC) * 1000));

    setDistance(dist);
    setScrollMs(sMs);
    setLoadedKey(index);
  }

  function goNext() {
    setIndex((i) => (i + 1) % screenshots.length);
  }

  // programme la séquence hold-haut → scroll → hold-bas → suivante
  useEffect(() => {
    if (loadedKey !== index) return; // mesures pas encore prêtes pour cette image
    clearTimers();
    setScrolledDown(false);
    if (paused) return;

    if (distance <= 0) {
      timers.current.push(setTimeout(goNext, HOLD_TOP_MS + HOLD_BOTTOM_MS));
    } else {
      timers.current.push(setTimeout(() => setScrolledDown(true), HOLD_TOP_MS));
      timers.current.push(setTimeout(goNext, HOLD_TOP_MS + scrollMs + HOLD_BOTTOM_MS));
    }
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedKey, index, paused, distance, scrollMs]);

  useEffect(() => clearTimers, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        key={index}
        src={screenshots[index]}
        alt={index === 0 ? alt : ''}
        onLoad={handleLoad}
        className="absolute top-0 left-0 w-full"
        style={{
          transform: `translateY(${scrolledDown ? -distance : 0}px)`,
          transition: `transform ${scrollMs}ms ease-in-out`,
        }}
      />

      {screenshots.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {screenshots.map((_, i) => (
            <span
              key={i}
              className="h-1 rounded-full"
              style={{
                width: i === index ? '14px' : '5px',
                background: i === index ? 'var(--amber)' : 'var(--text-muted)',
                transition: 'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}