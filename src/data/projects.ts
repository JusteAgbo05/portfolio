export type ProjectStatus = 'deployed' | 'in-progress' | 'upcoming';
export type ProjectCategory = 'web' | 'data-ml' | 'team';

export interface Project {
  id: string;
  version: string; // ex: "v1.0", "v2.0", "v0.3-beta"
  status: ProjectStatus;
  categories: ProjectCategory[];
  artwork?: 'eau-ensemble';
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
  Ordre = ordre de progression réelle (Book-In -> BiblioPro -> CV -> Airbnb NYC -> PaluScope -> EauEnsemble).
  Pour ajouter un futur projet du parcours ML Engineer : ajouter un objet
  ici avec status: 'upcoming', pas besoin de toucher au design.
*/
export const projects: Project[] = [
  {
    id: 'book-in',
    version: 'v1.0',
    status: 'deployed',
    categories: ['web'],
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
    categories: ['web'],
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
    categories: ['data-ml'],
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
  {
    id: 'airbnb-nyc-analysis',
    version: 'v1.0',
    status: 'deployed',
    categories: ['data-ml', 'team'],
    name: 'Airbnb NYC 2019',
    role: 'Data Science · projet académique en binôme',
    roleEn: 'Data Science · academic team project',
    pitch:
      "À partir de 48 895 annonces Airbnb de New York (2019), ce projet suit un workflow complet de Data Science : diagnostic et nettoyage des données, exploration des prix et des tendances par arrondissement et type de logement, puis comparaison de modèles pour estimer le prix par nuit. L'analyse est présentée dans une application Streamlit interactive. La forêt aléatoire obtient une MAE de 55,49 USD (R² = 0,203) : un résultat exploratoire à interpréter avec prudence, fondé sur des données historiques.",
    pitchEn:
      "Using 48,895 New York Airbnb listings from 2019, this project follows an end-to-end data science workflow: data quality assessment and cleaning, exploration of prices by borough and room type, and comparison of models to estimate nightly prices. Findings are presented in an interactive Streamlit app. The random forest achieves an MAE of USD 55.49 (R² = 0.203)—an exploratory result to interpret with caution, based on historical data.",
    stack: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn', 'Streamlit'],
    featured: true,
    highlights: [
      'Nettoyage documenté : 48 895 annonces initiales, 48 884 conservées après exclusion des prix non positifs',
      'Analyse exploratoire des prix, des types d’hébergement et des différences entre arrondissements',
      'Comparaison d’une baseline médiane, d’une régression Ridge et d’une forêt aléatoire',
      'Meilleure MAE obtenue : 55,49 USD avec la forêt aléatoire, contre 82,73 USD pour la baseline',
      'R² de 0,203 : modèle pédagogique perfectible, non destiné à la tarification en production',
      'Application Streamlit interactive pour explorer les données et tester une estimation indicative',
      'Projet réalisé en binôme avec ADANLAO Laurinda',
    ],
    highlightsEn: [
      'Documented data cleaning: 48,895 initial listings, with 48,884 retained after excluding non-positive prices',
      'Exploratory analysis of prices, room types, and differences across boroughs',
      'Comparison of a median baseline, Ridge regression, and a random forest',
      'Best MAE: USD 55.49 with the random forest, compared with USD 82.73 for the baseline',
      'R² of 0.203: an improvable educational model, not intended for production pricing',
      'Interactive Streamlit app to explore the data and try an indicative price estimate',
      'Project completed in collaboration with ADANLAO Laurinda',
    ],
    screenshots: ['/screenshots/airbnb_1.jpg',
      '/screenshots/airbnb_2.jpg', '/screenshots/airbnb_3.jpg', '/screenshots/airbnb_4.jpg',],
    repoUrl: 'https://github.com/JusteAgbo05/airbnb-nyc-tourism-analysis', demoUrl: 'https://airbnb-nyc-tourism-analysis.streamlit.app/',

  },
  {
    id: 'paluscope',
    version: 'Phase 1',
    status: 'in-progress',
    categories: ['data-ml', 'team'],
    name: 'PaluScope',
    role: 'Contributeur · Computer Vision & Feature Engineering',
    roleEn: 'Contributor · Computer Vision & Feature Engineering',
    pitch:
      "Développé en équipe, PaluScope est un prototype de recherche qui explore l’assistance à l’analyse d’images de frottis sanguins : contrôle de qualité, repérage de régions candidates et, à terme, classification, localisation et comptage de parasites suspects avec revue humaine. Le projet est actuellement consacré à la préparation des données et à l’extraction de variables avant les étapes d’apprentissage classique et de Deep Learning. Il ne constitue pas un outil de diagnostic médical.",
    pitchEn:
      "Built by a team, PaluScope is a research prototype exploring image-analysis assistance for blood smears: image quality checks, candidate-region detection and, ultimately, classification, localization, and counting of suspected parasites with human review. The project is currently focused on dataset preparation and feature extraction, ahead of classical machine learning and planned deep-learning stages. It is not a medical diagnostic tool.",
    stack: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'scikit-image', 'Streamlit'],
    featured: true,
    highlights: [
      'Prototype de vision par ordinateur pour assister, sans remplacer, la lecture humaine de frottis sanguins',
      'Phase actuelle : registre et découpage de 1 182 images, regroupement des quasi-doublons et prévention des fuites entre jeux',
      'Table de 21 611 régions candidates décrites par 425 variables géométriques, colorimétriques et de texture',
      'Contrôle qualité des images et détection de candidats par traitement d’image classique',
      'Prochaines étapes : modèles de Machine Learning explicables, évaluation inter-domaines, puis CNN ou Transfer Learning',
      'Projet d’équipe réalisé dans le cadre du PIIA Cohorte 2 de l’Académie des Mathématiques Appliquées',
      'Prototype de recherche et de formation : aucun diagnostic clinique autonome ni recommandation de traitement',
    ],
    highlightsEn: [
      'Computer vision prototype designed to assist, not replace, human blood-smear review',
      'Current phase: registry and split of 1,182 images, near-duplicate grouping, and leakage prevention across data splits',
      'Table of 21,611 candidate regions described by 425 geometric, color, and texture features',
      'Image quality checks and candidate detection using classical image processing',
      'Next steps: explainable machine-learning models, cross-domain evaluation, then CNNs or transfer learning',
      'Team project developed as part of the PIIA Cohort 2 program at the Académie des Mathématiques Appliquées',
      'Research and training prototype: no autonomous clinical diagnosis or treatment recommendation',
    ],
    screenshots: ['/screenshots/paluscope.jpg'],
    repoUrl: 'https://github.com/ATTIOU19/PaluScope',
    demoUrl: 'https://paluscope.streamlit.app/',
    presentationUrl: 'https://drive.google.com/file/d/1tGWkGPSdGgSPrRYBuxNieFKk0d49FcML/view?usp=sharing',
  },
  {
    id: 'eau-ensemble',
    version: 'Blo Challenge 2026',
    status: 'in-progress',
    categories: ['web', 'team'],
    artwork: 'eau-ensemble',
    name: 'EauEnsemble',
    role: 'Projet d’équipe · Nexora · 3e place',
    roleEn: 'Team project · Nexora · 3rd place',
    pitch:
      'EauEnsemble veut faciliter la recherche d’un professionnel fiable lorsqu’un problème lié à l’eau survient. La plateforme prévoit la recherche par spécialité et localisation, la comparaison des profils et devis, la réservation et le suivi d’interventions, avec une assistance IA pour orienter la demande. Présenté par Nexora au Blo Challenge 2026, le projet a obtenu la 3e place et un accompagnement de 500 000 FCFA.',
    pitchEn:
      'EauEnsemble aims to help people find reliable professionals when facing water-related problems. The platform is designed to support searches by specialty and location, profile and quote comparisons, service bookings and follow-up, with AI assistance to route requests. Presented by Nexora at Blo Challenge 2026, the project won 3rd place and FCFA 500,000 in development support.',
    stack: [],
    featured: true,
    highlights: [
      'Mise en relation de particuliers, organisations et professionnels des services liés à l’eau',
      'Parcours envisagé : décrire un problème, comparer des profils et devis, réserver puis suivre l’intervention',
      'Assistance IA envisagée pour qualifier la demande et orienter vers la bonne spécialité',
      'Paiement mobile prévu; les paiements du prototype peuvent être simulés si aucune intégration n’est disponible',
      'Pistes techniques proposées dans la fiche : Vue.js, Laravel et MySQL',
      'Équipe Nexora : Eulisen OGOUWALE, Juste AGBO et Eddy NINKO',
      '3e place au Blo Challenge 2026 et accompagnement de 500 000 FCFA pour poursuivre le développement',
    ],
    highlightsEn: [
      'Connects households, organizations, and professionals offering water-related services',
      'Proposed flow: describe a problem, compare providers and quotes, book, then track the service',
      'Planned AI assistance to qualify requests and route users to the right specialty',
      'Mobile payments are planned; prototype transactions may be simulated if no integration is available',
      'Technology options in the project brief: Vue.js, Laravel, and MySQL',
      'Nexora team: Eulisen OGOUWALE, Juste AGBO, and Eddy NINKO',
      '3rd place at Blo Challenge 2026 and FCFA 500,000 in support to continue development',
    ],
    screenshots: [
      '/screenshots/eauensemble-01.jpg',
      '/screenshots/eauensemble-02.jpg',
      '/screenshots/eauensemble-03.jpg',
      '/screenshots/eauensemble-04.jpg',
      '/screenshots/eauensemble-05.jpg',
    ],
  },
];