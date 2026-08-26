import { useEffect, useState } from 'react';
import { ExternalLink, Loader2, AlertCircle } from 'lucide-react';

interface PreviewData {
  title?: string;
  description?: string;
  image?: string;
  publisher?: string;
}

interface LinkPreviewCardProps {
  url: string;
}

export function LinkPreviewCard({ url }: LinkPreviewCardProps) {
  const [data, setData] = useState<PreviewData | null>(null);
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    setData(null);

    fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        if (json.status !== 'success') throw new Error('preview failed');
        setData({
          title: json.data.title,
          description: json.data.description,
          image: json.data.image?.url,
          publisher: json.data.publisher,
        });
        setStatus('ok');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  let domain = url;
  try {
    domain = new URL(url).hostname.replace('www.', '');
  } catch {
    // url invalide, on garde la chaîne brute
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl overflow-hidden"
      style={{ border: '0.5px solid var(--line)', background: 'var(--surface)' }}
    >
      {status === 'loading' && (
        <div
          className="flex items-center justify-center gap-2 py-12 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          <Loader2 size={16} className="animate-spin" /> chargement de l'aperçu...
        </div>
      )}

      {status === 'error' && (
        <div className="p-5">
          <div
            className="flex items-center gap-2 text-sm mb-2"
            style={{ color: 'var(--text-muted)' }}
          >
            <AlertCircle size={16} /> aperçu indisponible
          </div>
          <p className="text-sm break-all" style={{ color: 'var(--cyan)' }}>
            {url}
          </p>
        </div>
      )}

      {status === 'ok' && data && (
        <>
          {data.image && (
            <div className="w-full aspect-[1.9/1] overflow-hidden" style={{ background: 'var(--bg)' }}>
              <img src={data.image} alt="" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="p-4">
            <p
              className="text-xs mb-1.5"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}
            >
              {domain}
            </p>
            {data.title && (
              <h4
                className="text-sm font-medium mb-1 line-clamp-2"
                style={{ color: 'var(--text)' }}
              >
                {data.title}
              </h4>
            )}
            {data.description && (
              <p
                className="text-xs line-clamp-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                {data.description}
              </p>
            )}
            <div
              className="flex items-center gap-1.5 mt-3 text-xs"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
            >
              <ExternalLink size={12} /> voir le post
            </div>
          </div>
        </>
      )}
    </a>
  );
}