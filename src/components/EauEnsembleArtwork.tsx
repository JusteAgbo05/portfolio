import './hydrograph-artwork.css';

interface EauEnsembleArtworkProps {
  variant: 'project' | 'award';
  lang: 'fr' | 'en';
}

export function EauEnsembleArtwork({ variant, lang }: EauEnsembleArtworkProps) {
  const isEnglish = lang === 'en';

  if (variant === 'award') {
    return (
      <div
        className="hydro-artwork hydro-artwork--award"
        aria-label={isEnglish ? 'Blo Challenge 2026, 3rd place, Nexora team' : 'Blo Challenge 2026, 3e place, équipe Nexora'}
      >
        <div className="hydro-award-rank">
          <span className="hydro-award-number">3</span>
          <span className="hydro-award-suffix">{isEnglish ? 'rd' : 'e'}</span>
          <span className="hydro-award-place">PLACE</span>
        </div>
        <div>
          <p className="hydro-award-event">BLO CHALLENGE 2026</p>
          <div className="hydro-award-date">
            <span>{isEnglish ? 'OCTOBER 20–22, 2026' : '20–22 OCTOBRE 2026'}</span>
            <span aria-hidden="true" />
          </div>
          <p className="hydro-award-description">
            {isEnglish
              ? 'Digital and AI hackathon for sustainable water resource management in Benin.'
              : 'Hackathon du numérique et de l’IA pour une gestion durable des ressources en eau au Bénin.'}
          </p>
        </div>
        <div className="hydro-award-footer">
          <span>{isEnglish ? 'PROJECT' : 'PROJET'}</span>
          <strong>EauEnsemble</strong>
          <span className="hydro-award-team">Nexora · 500 000 FCFA</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="hydro-artwork hydro-artwork--project"
      aria-label={isEnglish ? 'EauEnsemble, a Nexora project' : 'EauEnsemble, projet de l’équipe Nexora'}
    >
      <div className="hydro-project-topline">
        <span>NEXORA</span>
        <span>{isEnglish ? 'BENIN · WATER SERVICES' : 'BÉNIN · SERVICES DE L’EAU'}</span>
      </div>
      <div className="hydro-project-title">
        <span>Eau</span><strong>Ensemble</strong>
        <p>{isEnglish ? 'A WATER PROBLEM? A SOLUTION TOGETHER.' : 'UN PROBLÈME D’EAU ? UNE SOLUTION ENSEMBLE.'}</p>
      </div>
      <div className="hydro-project-footer">
        <span>BLO CHALLENGE 2026</span>
        <strong>{isEnglish ? '3RD PLACE · FCFA 500,000' : '3e PLACE · 500 000 FCFA'}</strong>
      </div>
    </div>
  );
}