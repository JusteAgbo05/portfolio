export type Lang = 'fr' | 'en';

interface TimelineStepT {
  label: string;
  title: string;
  description: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    formation: string;
    experience: string;
    awards: string;
    contact: string;
    notes: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    scroll: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    cvView: string;
    cvDownload: string;
  };
  timeline: {
    label: string;
    steps: TimelineStepT[];
  };
  projects: {
    eyebrow: string;
    title: string;
    visitSite: string;
    upcoming: string;
    techLabel: string;
    presentation: string;
    deployed: string;
    inProgress: string;
  };
  projectDetail: {
    back: string;
    keyFeatures: string;
    code: string;
    demo: string;
    explore: string;
    notFound: string;
    backHome: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    project: string;
    learning: string;
    foundation: string;
  };
  awards: {
    eyebrow: string;
    title: string;
    subtitle: string;
    empty: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    infoTitle: string;
    formTitle: string;
    phoneLabel: string;
    locationLabel: string;
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    requiredError: string;
    emailError: string;
    success: string;
    error: string;
  };
  footer: {
    credit: string;
  };
  notFound: {
    code: string;
    title: string;
    back: string;
  };
  notesPage: {
    back: string;
    eyebrow: string;
    title: string;
    intro: string;
    previewPlaceholder: string;
    preview: string;
    empty: string;
  };
  palette: {
    placeholder: string;
    noResults: string;
  };
  formation: {
    eyebrow: string;
    title: string;
    ongoing: string;
    completed: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
  };
}

export const translations: Record<Lang, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      formation: 'Formation',
      experience: 'Expérience',
      awards: 'Distinctions',
      contact: 'Contact',
      notes: 'Notes',
    },
    hero: {
      eyebrow: 'profil: développeur full-stack · parcours ML engineer',
      title: 'Concevoir des applications web intelligentes.',
      subtitle:
        "Je conçois des applications web complètes, du modèle de données à l'interface utilisateur, en y intégrant le Machine Learning pour dépasser les simples fonctionnalités CRUD et apporter une réelle valeur métier.",
      scroll: 'scroller pour me découvrir',
      primaryCta: 'Voir mes projets',
      secondaryCta: 'Me contacter',
    },
   about: {
  eyebrow: "qui suis-je ?",
  title: "À propos de moi",
  p1: "Je m'appelle Vivien AGBO. Passionné par les sciences, les technologies et l'intelligence artificielle, je conçois des solutions numériques en alliant rigueur méthodologique et créativité.",
  p2: "Sur le plan du développement web, je crée des applications complètes, dynamiques et performantes. Je m'appuie principalement sur React pour concevoir des interfaces modernes, ainsi que sur Laravel et PHP/MySQL pour bâtir des architectures dorsales fiables et des API REST.",
  p3: "En parallèle, je me forme activement en Machine Learning au sein de l'Académie des Mathématiques Appliquées, afin d'apprendre à concevoir et intégrer des modèles prédictifs dans des applications concrètes.",
  p4: "Ma démarche repose sur une conviction : transformer des problématiques ou des données complexes en outils numériques simples, intuitifs et à fort impact au quotidien.",
  cvView: "Voir mon CV",
  cvDownload: "Télécharger mon CV",
},
    timeline: {
      label: 'parcours',
      steps: [
        {
          label: 'formation',
          title: 'Hydrologie quantitative',
          description:
            "Licence en hydrologie quantitative et gestion intégrée des ressources en eau à l'Institut National de l'Eau (INE), UAC.",
        },
        {
          label: 'v1.0',
          title: 'Book-In — premier projet full-stack',
          description:
            "Premiers pas en développement web : structuration d'une base de données, logique serveur, interface complète.",
        },
        {
          label: 'v2.0',
          title: 'BiblioPro',
          description:
            'Système complet conçu et déployé en 8 jours — React, Laravel, tests automatisés, mise en production réelle.',
        },
        {
          label: 'en cours',
          title: 'Parcours ML Engineer (AMA)',
          description:
            "Programme d'Introduction à l'Intelligence Artificielle de l'Académie des Mathématiques Appliquées, semi-boursier.",
        },
      ],
    },
    projects: {
      eyebrow: 'section: projets',
      title: 'Quelques-uns de mes travaux récents',
      visitSite: 'visiter le site',
      upcoming: 'à venir',
      techLabel: 'technologies',
      presentation: 'Présentation',
      deployed: 'déployé',
      inProgress: 'en cours',
    },
    projectDetail: {
      back: 'retour aux projets',
      keyFeatures: 'fonctionnalités clés',
      code: 'Code source',
      demo: 'Voir la démo',
      explore: 'Découvrir le projet',
      notFound: 'Projet introuvable.',
      backHome: "← retour à l'accueil",
    },
    skills: {
      eyebrow: 'section: compétences',
      title: 'Technologies et outils que j\'utilise',
      intro: 'Une lecture transparente de mes compétences : ce que j’ai déjà mis en œuvre, ce que j’approfondis dans mon parcours ML Engineer et les bases sur lesquelles je m’appuie.',
      project: 'appliqué en projet',
      learning: 'en apprentissage',
      foundation: 'fondamentaux',
    },
    awards: {
      eyebrow: 'section: distinctions',
      title: 'Distinctions & Récompenses',
      subtitle: 'Reconnaissance pour le travail accompli',
      empty: 'Aucune distinction pour l’instant — ajoute-en dans src/data/awards.ts.',
    },
    contact: {
      eyebrow: 'section: contact',
      title: 'Discutons de votre projet',
      infoTitle: 'Informations de contact',
      formTitle: 'Envoyez-moi un message',
      phoneLabel: 'Téléphone',
      locationLabel: 'Localisation',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'envoyer',
      sending: 'envoi...',
      requiredError: 'Veuillez remplir tous les champs.',
      emailError: 'Veuillez saisir une adresse email valide.',
      success: 'Message envoyé ! Je vous répondrai bientôt.',
      error: "Erreur lors de l'envoi. Réessayez ou contactez-moi directement par email.",
    },
    footer: {
      credit: '© 2026 Vivien AGBO. Tous droits réservés.',
    },
    notFound: {
      code: 'error: 404 · not found',
      title: "Cette page n'existe pas",
      back: "← retour à l'accueil",
    },
    notesPage: {
      back: "← retour à l'accueil",
      eyebrow: 'Section: notes',
      title: 'Notes',
      intro:
        "Ce que j'apprends au fil du parcours ML Engineer (AMA): modèles, algorithmes, difficultés rencontrées.",
      previewPlaceholder: 'Colle un lien pour prévisualiser...',
      preview: 'aperçu',
      empty: "Aucun lien pour l'instant — ajoute-en dans src/data/notes.ts.",
    },
    palette: {
      placeholder: 'Rechercher une action...',
      noResults: 'Aucun résultat.',
    },
    formation: {
      eyebrow: 'section: formation',
      title: 'Formation',
      ongoing: 'En cours',
      completed: 'Terminé',
    },
    experience: {
      eyebrow: 'section: expérience',
      title: 'Expériences professionnelles',
      intro: 'Des expériences de terrain qui nourrissent mon approche de la donnée, des systèmes et de la résolution de problèmes concrets.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      formation: 'Education',
      experience: 'Experience',
      awards: 'Awards',
      contact: 'Contact',
      notes: 'Notes',
    },
    hero: {
      eyebrow: 'profile: full-stack developer · ML engineer track',
      title: 'Building intelligent web applications',
      subtitle:
        "I build end-to-end web applications, from database architecture to intuitive user interfaces, integrating Machine Learning to go beyond standard CRUD and deliver real-world business value.",
      scroll: 'scroll to discover me',
      primaryCta: 'View my projects',
      secondaryCta: 'Get in touch',
    },
   about: {
  eyebrow: "who am I?",
  title: "About Me",
  p1: "My name is Vivien AGBO. Driven by science, technology, and artificial intelligence, I craft digital solutions that bridge rigorous analysis with creative software engineering.",
  p2: "As a full-stack web developer, I build dynamic, scalable, and responsive applications. My core stack includes React for modern interfaces, alongside Laravel and PHP/MySQL for solid back-ends and robust REST APIs.",
  p3: "In parallel, I am actively training in Machine Learning at the Académie des Mathématiques Appliquées, learning to build and integrate predictive models into real-world applications.",
  p4: "My core goal is straightforward: turning complex data and challenging problems into clean, accessible, and high-impact digital tools.",
  cvView: "View Resume",
  cvDownload: "Download Resume",
},
    timeline: {
      label: 'journey',
      steps: [
        {
          label: 'education',
          title: 'Quantitative Hydrology',
          description:
            "Bachelor's degree in quantitative hydrology and integrated water resource management at the Institut National de l'Eau (INE), UAC.",
        },
        {
          label: 'v1.0',
          title: 'Book-In — first full-stack project',
          description:
            'First steps in web development: relational database design, server-side logic, a complete working interface.',
        },
        {
          label: 'v2.0',
          title: 'BiblioPro',
          description:
            'A complete system designed and deployed in 8 days — React, Laravel, automated tests, real production deployment.',
        },
        {
          label: 'ongoing',
          title: 'ML Engineer track (AMA)',
          description:
            'Introduction to Artificial Intelligence Program at the Académie des Mathématiques Appliquées, partial scholarship.',
        },
      ],
    },
    projects: {
      eyebrow: 'section: projects',
      title: 'Some of my recent work',
      visitSite: 'visit site',
      upcoming: 'coming up',
      techLabel: 'technologies',
      presentation: 'Presentation',
      deployed: 'deployed',
      inProgress: 'in progress',
    },
    projectDetail: {
      back: 'back to projects',
      keyFeatures: 'key features',
      code: 'Source code',
      demo: 'View demo',
      explore: 'Explore project',
      notFound: 'Project not found.',
      backHome: '← back home',
    },
    skills: {
      eyebrow: 'section: skills',
      title: 'Technologies and tools I use',
      intro: 'A transparent view of my skills: what I have already applied in projects, what I am deepening in my ML Engineer track, and the foundations I rely on.',
      project: 'applied in projects',
      learning: 'currently learning',
      foundation: 'foundations',
    },
    awards: {
      eyebrow: 'section: awards',
      title: 'Awards & Recognition',
      subtitle: 'Recognition for the work put in',
      empty: 'No awards yet — add some in src/data/awards.ts.',
    },
    contact: {
      eyebrow: 'section: contact',
      title: "Let's talk about your project",
      infoTitle: 'Contact information',
      formTitle: 'Send me a message',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'send',
      sending: 'sending...',
      requiredError: 'Please fill in all fields.',
      emailError: 'Please enter a valid email address.',
      success: "Message sent! I'll get back to you soon.",
      error: 'Something went wrong. Try again or email me directly.',
    },
    footer: {
      credit: '© 2026 Vivien AGBO. All rights reserved.',
    },
    notFound: {
      code: 'error: 404 · not found',
      title: "This page doesn't exist",
      back: '← back home',
    },
    notesPage: {
      back: '← back home',
      eyebrow: 'ML journal',
      title: 'Notes',
      intro:
        "What I'm learning along the ML Engineer track (AMA): models, algorithms, pitfalls along the way.",
      previewPlaceholder: 'Paste a link to preview...',
      preview: 'preview',
      empty: 'No links yet — add one in src/data/notes.ts.',
    },
    palette: {
      placeholder: 'Search for an action...',
      noResults: 'No results.',
    },
    formation: {
      eyebrow: 'section: education',
      title: 'Education',
      ongoing: 'Ongoing',
      completed: 'Completed',
    },
    experience: {
      eyebrow: 'section: experience',
      title: 'Professional experience',
      intro: 'Hands-on experience that shapes my approach to data, systems, and solving real-world problems.',
    },
  },
};
