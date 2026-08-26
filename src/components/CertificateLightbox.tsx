import { useEffect } from 'react';
import { X } from 'lucide-react';

interface CertificateLightboxProps {
  image: string;
  title: string;
  description: string;
  date: string;
  onClose: () => void;
}

export function CertificateLightbox({ image, title, description, date, onClose }: CertificateLightboxProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
        style={{ background: 'var(--surface)', border: '0.5px solid var(--line)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full"
          style={{ background: 'rgba(11,14,18,0.7)', color: 'var(--text)' }}
        >
          <X size={16} />
        </button>

        <img src={image} alt={title} className="w-full" />

        <div className="p-5">
          <h3 className="text-base font-medium mb-1" style={{ color: 'var(--text)' }}>
            {title}
          </h3>
          <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}