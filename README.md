# Portfolio - Vivien AGBO

Portfolio personnel — Développeur full-stack et Data Scientist Junior.

## Stack technique

- **React + TypeScript + Vite**
- **Tailwind CSS v4**
- **Three.js / React Three Fiber + Drei** 
- **GSAP (ScrollTrigger)** 
- **React Router DOM** - page d'accueil + pages détail par projet
- **react-icons** (logos techno/marques) + **lucide-react** (icônes UI)

## Fonctionnalités

- **Hero 3D** interactif (Three.js)
- **À propos** 
- **Formation** - frise chronologique (cartes, statut "en cours"/"terminé")
- **Projets** - grille de cartes avec aperçu au survol, fenêtre modale
  au clic (description complète, stack, liens code/démo/présentation),
  section "à venir" pilotée par les données
- **Compétences** - cartes par catégorie
- **Distinctions & Récompenses** - carrousel de certificats en
  défilement automatique.
- **Notes** - aperçus de liens (posts LinkedIn, articles)
- **Contact** - coordonnées + formulaire (EmailJS)
- **Thème clair/sombre** et **langue FR/EN**, tous deux persistés

## Personnaliser le contenu

Le site est piloté par des fichiers de données dans `src/data/` :

| Fichier | Contenu |
|---|---|
| `src/data/projects.ts` | Projets (pitch FR/EN, stack, liens, captures) |
| `src/data/education.ts` | Parcours de formation |
| `src/data/awards.ts` | Distinctions et certificats |
| `src/data/notes.ts` | Liens vers posts/articles |
| `src/data/socialLinks.ts` | Email, téléphone, GitHub, LinkedIn |
| `src/i18n/translations.ts` | Tous les textes traduits FR/EN |

Assets à déposer dans `public/` :
- `public/photos/` - photos pour le carrousel "À propos"
- `public/cv/` - CV au format PDF
- `public/certificates/` 
- `public/screenshots/` 

## Lancer le projet

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview   # pour tester le build localement
```
