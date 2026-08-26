export type ProjectStatus = 'deployed' | 'in-progress' | 'upcoming';

export interface Project {
  id: string;
  version: string; // ex: "v1.0", "v2.0", "v0.3-beta"
  status: ProjectStatus;
  name: string;
  role?: string; // ex: "Développeur Full-Stack" — ton rôle sur ce projet
  roleEn?: string;
  pitch: string; // problème → approche → résultat, condensé (FR)
  pitchEn?: string; // même pitch en anglais
  stack: string[];
  url?: string; // url affichée dans la barre du cadre 3D
  screenshot?: string; // chemin de la capture d'écran (placeholder si absent)
  featured: boolean;
  highlights?: string[]; // fonctionnalités clés (FR), pour la page détail
  highlightsEn?: string[]; // mêmes fonctionnalités en anglais
  repoUrl?: string; // lien GitHub — à renseigner
  demoUrl?: string; // lien démo live — à renseigner
  presentationUrl?: string; // lien vers une présentation/vidéo — à renseigner
  screenshots?: string[]; // plusieurs captures, défilent en boucle (prioritaire sur `screenshot`)
}

/*
  Ordre = ordre de progression réelle (Book-In -> BiblioPro -> CV -> à venir).
  Pour ajouter un futur projet du parcours ML Engineer : ajouter un objet
  ici avec status: 'upcoming', pas besoin de toucher au design.
*/
export const projects: Project[] = [
  {
    id: 'book-in',
    version: 'v1.0',
    status: 'deployed',
    name: 'Book-In',
    role: 'Développeur Full-Stack',
    roleEn: 'Full-Stack Developer',
    pitch:
      "Avant de savoir déployer un système sécurisé multi-rôles, il a fallu apprendre à connecter un front à une base de données et faire tenir le tout debout. Book-In est mon premier vrai projet full-stack : structuration d'une base de données relationnelle, logique métier côté serveur, interface fonctionnelle de bout en bout.",
    pitchEn:
      "Before I could deploy a secure multi-role system, I first had to learn how to connect a front-end to a database and make it all hold together. Book-In was my first real full-stack project: relational database design, server-side business logic, a fully working interface.",
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    url: 'book-in.local',
    featured: true,
    highlights: [],
    highlightsEn: [],
    screenshots: ['/screenshots/bookin_1.jpg',
      '/screenshots/bookin_2.jpg',
      '/screenshots/bookin_3.jpg',],
    repoUrl: 'https://github.com/JusteAgbo05/Bookin', demoUrl: 'http://bibliotheque.gamer.gd/'
  },
  {
    id: 'bibliopro',
    version: 'v2.0',
    status: 'deployed',
    name: 'BiblioPro',
    role: 'Développeur Full-Stack',
    roleEn: 'Full-Stack Developer',
    pitch:
      "Une bibliothèque municipale gère encore son catalogue et ses retards à la main. Système complet conçu et déployé en 8 jours : catalogue avec upload de couvertures, calcul automatique des pénalités de retard, recherche multicritère, deux niveaux d'accès sécurisés par token, testé en unitaire, fonctionnel et end-to-end. Développée lors de la formation en Full-Stack Developer de l'Organisation Internationale de la Francophonie à travers le programme D-CLIC",
    pitchEn:
      "A municipal library was still managing its catalog and late fees by hand. A complete system designed and deployed in 8 days: catalog management with cover uploads, automatic late-fee calculation, multi-criteria search, two token-secured access levels, tested end-to-end.",
    stack: ['Node.js', 'React', 'Laravel', 'Blade', 'MySQL'],
    url: 'bibliopro.app',
    featured: true,
    highlights: [
      'CRUD complet catalogue (livres, auteurs, catégories, exemplaires) avec upload de couvertures',
      'Gestion des adhérents et historique d’emprunts',
      'Calcul automatique des pénalités de retard',
      'Recherche multicritère avec pagination',
      'Contrôle d’accès basé sur les rôles',
    ],
    highlightsEn: [
      'Full CRUD catalog (books, authors, categories, copies) with cover uploads',
      'Member management and borrowing history',
      'Automatic late-fee calculation',
      'Multi-criteria search with pagination',
      'Role-based access control',
    ],
    screenshots: ['/screenshots/bibliopro_1.jpg',
      '/screenshots/bibliopro_2.jpg',
      '/screenshots/bibliopro_3.jpg',],
    repoUrl: 'https://github.com/JusteAgbo05/Bibliopro_React_Laravel',
    demoUrl: 'https://bibliopro-react-laravel.vercel.app/',
    presentationUrl: 'https://www.loom.com/share/37e128164cf742e0a269de9366531f98',
  },
  {
    id: 'cv-tracking',
    version: 'v0.3-beta',
    status: 'deployed',
    name: 'Tracking & ré-identification',
    role: 'Computer Vision / ML Engineer',
    roleEn: 'Computer Vision / ML Engineer',
    pitch:
      "Un système de vidéoprotection perd le suivi d'un véhicule masqué par un poids lourd, l'ID change, la trace se casse. Module de ré-identification par histogramme de couleur combiné à une logique anti-occlusion, pour stabiliser l'identifiant d'un véhicule avant/après occlusion sur un flux YOLOv8 + ByteTrack.",
    pitchEn:
      "A video surveillance system loses track of a vehicle hidden by a truck, the ID changes, the trace breaks. A color-histogram re-identification module combined with anti-occlusion logic to stabilize a vehicle's ID before/after occlusion on a YOLOv8 + ByteTrack pipeline.",
    stack: ['Python', 'YOLOv8', 'ByteTrack', 'OpenCV', 'NumPy'],
    featured: true,
    highlights: [
      'Détection YOLOv8 pré-entraîné, filtrée sur la classe "truck"',
      'Suivi multi-objets avec ByteTrack',
      'Module de ré-identification par histogramme de couleur (LAB)',
      'Logique anti-occlusion pour stabiliser l’ID après un masquage',
    ],
    highlightsEn: [
      'Pre-trained YOLOv8 detection, filtered to the "truck" class',
      'Multi-object tracking with ByteTrack',
      'Color-histogram (LAB) re-identification module',
      'Anti-occlusion logic to stabilize the ID after a masking event',
    ],
    screenshots: ['/screenshots/tracking_1.jpg',
      '/screenshots/tracking_2.jpg',],
    repoUrl: 'https://github.com/JusteAgbo05/piia-suivi-voiture-occlusion', demoUrl: 'https://piia-suivi-voiture-occlusion.streamlit.app/',
    
  },
];