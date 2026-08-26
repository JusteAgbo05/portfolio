# Portfolio AG — refonte haut de gamme

## Stack
- React + TypeScript + Vite
- Tailwind CSS v4
- Three.js / React Three Fiber + Drei (réservés à la scène 3D du hero, à venir)
- GSAP (animations de scroll, à venir)
- React Router DOM (pages projets individuelles, à venir)

## Où on en est
- Design system posé dans `src/styles/tokens.css` (couleurs, typo)
- Cadre projet 3D interactif : `src/components/frame/ProjectFrame3D.tsx`
  (tilt CSS 3D à la souris + défilement en boucle de l'aperçu d'interface)
- Données des projets centralisées dans `src/data/projects.ts`
  → pour ajouter un futur projet du parcours ML Engineer, ajouter une
    entrée avec `status: 'upcoming'`, rien d'autre à modifier
- Section Projets assemblée : `src/sections/ProjectsSection.tsx`

## Prochaines étapes
1. Hero avec scène 3D (React Three Fiber)
2. Sections À propos, Compétences, Contact
3. Pages détail par projet (React Router)
4. Remplacer les placeholders par les vraies captures d'écran
   (déposer les images dans `src/assets/` et renseigner le champ
   `screenshot` dans `src/data/projects.ts`)

## Lancer le projet
```
npm install
npm run dev
```
