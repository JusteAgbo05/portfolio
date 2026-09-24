export interface Award {
  id: string;
  rank?: string; // ex: '#1', '#3' — optionnel
  image?: string; // chemin vers l'image du certificat — ex: '/certificates/mon-cert.png'
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  date: string; // ex: 'Octobre 2026'
  dateEn?: string; // ex: 'October 2026'
}

/*
  Pour ajouter une distinction : ajoute un objet ici. La section
  Distinctions & Récompenses se met à jour automatiquement.
*/
export const awards: Award[] = [
  {
    id: '1',
    rank: '#1',
    title: 'Développement Web - Niveau Débutant',
    titleEn: 'Web Development - Beginner Level',
    description: "Attestation de formation de 60h délivrée par l'OIF (Projet D-CLIC), validant les compétences fondamentales : histoire du web, protocoles, HTML5, CSS3 et interactivité JavaScript.",
    descriptionEn: '60-hour training certificate issued by OIF (D-CLIC Project), covering web fundamentals, protocols, HTML5, CSS3, and basic JavaScript interactivity.',
    date: 'Novembre 2025',
    dateEn: 'November 2025',
    image: '/certificates/certificat_1.png',
  },
  {
    id: '2',
    rank: '#2',
    title: 'Développement Web - Niveau Intermédiaire',
    titleEn: 'Web Development - Intermediate Level',
    description: "Attestation de formation de 60h délivrée par l'OIF (Projet D-CLIC), validant l'utilisation des CMS, les fonctionnalités avancées de HTML5/CSS3, la manipulation du DOM en JavaScript et l'initiation à PHP/Bases de données.",
    descriptionEn: '60-hour training certificate issued by OIF (D-CLIC Project), validating skills in CMS usage, advanced HTML5/CSS3, JavaScript DOM manipulation, and introduction to PHP & databases.',
    date: ' Février 2026',
    dateEn: 'February 2026',
    image: '/certificates/certificat_2.png',
  },
  {
    id: '3',
    rank: '#3',
    title: 'Développement Web - Niveau Avancé',
    titleEn: 'Web Development - Advanced Level',
    description: "Attestation de formation de 60h délivrée par l'OIF (Projet D-CLIC), certifiant la maîtrise du frontend dynamique avec React, du backend avec Laravel, des tests, de la sécurité web (XSS, SQLi), de l'écoconception et du déploiement en production.",
    descriptionEn: '60-hour training certificate issued by OIF (D-CLIC Project), certifying dynamic frontend with React, backend architecture with Laravel, testing, web security (XSS, SQLi), eco-design, and production deployment.',
    date: 'Juillet 2026',
    dateEn: 'July 2026',
    image: '/certificates/certificat_3.png',
  },
  {
    id: '4',
    rank: '#4',
    title: 'Apprenez à utiliser la ligne de commande dans un terminal',
    titleEn: 'Learn to Use the Command Line in a Terminal',
    description: 'Certificat de réussite OpenClassrooms attestant de la maîtrise des bases de navigation, de gestion de fichiers et d’exécution de commandes via le terminal.',
    descriptionEn: 'OpenClassrooms certificate of achievement validating core skills in terminal navigation, file system management, and command-line operations.',
    date: 'Mai 2026',
    dateEn: 'May 2026',
    image: '/certificates/certificat_4.png',
  },
  {
    id: '5',
    rank: '#5',
    title: "Workshop IA : De l'Algèbre Linéaire à l'IA",
    titleEn: 'AI Workshop: From Linear Algebra to AI',
    description: "Certificat de participation et de réussite (Score Or : 95/100) délivré par l'Académie des Mathématiques Appliquées (AMA) pour le workshop de 4h axé sur les bases mathématiques appliquées à l'intelligence artificielle.",
    descriptionEn: 'Certificate of completion and achievement (Gold Score: 95/100) issued by the Académie des Mathématiques Appliquées (AMA) for a 4-hour workshop on mathematical foundations for AI.',
    date: 'Avril 2026',
    dateEn: 'April 2026',
    image: '/certificates/certificat_6.png',
  },
  {
    id: '6',
    rank: '#6',
    title: 'Créez une maquette web avec Figma',
    titleEn: 'Create a Web Mockup with Figma',
    description: 'Certificat de réussite OpenClassrooms validant la conception de maquettes d’interfaces web (UI/UX) ergonomiques et responsives avec Figma.',
    descriptionEn: 'OpenClassrooms certificate of achievement covering web interface mockup creation and UI/UX responsive prototyping with Figma.',
    date: 'Mai 2026',
    dateEn: 'May 2026',
    image: '/certificates/certificat_5.png',
  },

  {
    id: '7',
    rank: '#7',
    title: 'IndabaX Benin 2026',
    titleEn: 'IndabaX Benin 2026',
    description: 'Certificat de participation attestant de la présence et de l’engagement aux conférences, ateliers pratiques et sessions d’apprentissage en intelligence artificielle et deep learning lors de l’IndabaX Bénin.',
    descriptionEn: 'Certificate of participation acknowledging attendance and active engagement in deep learning and AI workshops, keynotes, and technical sessions at IndabaX Benin.',
    date: 'Septembre 2026',
    dateEn: 'September 2026',
    image: '/certificates/certificat_indabax_2026.png',
  },
  {
    id: '8',
    rank: '#8',
    title: 'Gérez du code avec Git et GitHub',
    titleEn: 'Manage Code with Git and GitHub',
    description: 'Certificat de réussite OpenClassrooms validant la maîtrise du contrôle de version avec Git, la collaboration via GitHub, la gestion des branches et la résolution des conflits de fusion.',
    descriptionEn: 'OpenClassrooms certificate of achievement validating core version control skills with Git, collaborative workflows on GitHub, branching strategies, and merge conflict resolution.',
    date: 'Septembre 2026',
    dateEn: 'September 2026',
    image: '/certificates/certificat_git_github.png',
  },
  {
    id: '9',
    rank: '#9',
    title: 'Découvrez la programmation orientée objet avec Python',
    titleEn: 'Discover Object-Oriented Programming with Python',
    description: 'Certificat de réussite OpenClassrooms validant les principes fondamentaux de la programmation orientée objet en Python : conception de classes, encapsulation, héritage et modélisation logicielle propre.',
    descriptionEn: 'OpenClassrooms certificate of achievement validating core object-oriented programming concepts in Python: class design, encapsulation, inheritance, and clean software architecture.',
    date: 'Septembre 2026',
    dateEn: 'September 2026',
    image: '/certificates/certificat_poo_python.png',
  },
];
