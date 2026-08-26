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
    awards: string;
    contact: string;
    notes: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    scroll: string;
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
    notFound: string;
    backHome: string;
  };
  skills: {
    eyebrow: string;
    title: string;
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
}

export const translations: Record<Lang, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      awards: 'Distinctions',
      contact: 'Contact',
      notes: 'Notes',
    },
    hero: {
      eyebrow: 'class: full-stack-developer · confidence: 0.97',
      title: 'Building intelligent web applications',
      subtitle:
        "Je conçois des applications web complètes, du schéma de base de données à l'interface et j'intègre aujourd'hui le Machine Learning à mes projets pour aller au-delà du CRUD classique.",
      scroll: 'scroller pour me découvrir',
    },
    about: {
      eyebrow: 'qui suis-je ?',
      title: 'À propos de moi',
      p1: "Moi, c'est Vivien AGBO. Je suis étudiant en sciences et technologies, mais aussi développeur web et passionné d'intelligence artificielle. J'aime faire le pont entre la rigueur scientifique et la création de solutions numériques.",
      p2: "Côté web, j'ai bien évolué : en plus des bases, je développe aujourd'hui des applications dynamiques et robustes grâce à des technologies comme React pour le front-end, Laravel et PHP/MySQL pour le back-end, ainsi que des API REST et WordPress.",
      p3: "En parallèle, je renforce mes compétences en Intelligence Artificielle, Machine Learning au sein du Programme d'Introduction en Intelligence Artificielle de l'Académie des Mathématiques Appliquées (AMA).",
      p4: "Pour moi, chaque projet est une opportunité de transformer des idées ou des calculs complexes en outils simples, utiles et efficaces au quotidien.",
      cvView: 'voir mon CV',
      cvDownload: 'Télécharger mon CV',
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
      notFound: 'Projet introuvable.',
      backHome: "← retour à l'accueil",
    },
    skills: {
      eyebrow: 'section: compétences',
      title: 'Technologies et outils que j\'utilise',
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
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      awards: 'Awards',
      contact: 'Contact',
      notes: 'Notes',
    },
    hero: {
      eyebrow: 'class: full-stack-developer · confidence: 0.97',
      title: 'Building intelligent web applications',
      subtitle:
        "I build complete web applications, from database schema to interface and I'm now bringing Machine Learning into my projects to go beyond classic CRUD apps.",
      scroll: 'scroll to discover me',
    },
    about: {
      eyebrow: 'who am i?',
      title: 'About me',
      p1: "I'm Vivien AGBO. I'm a sciences and technology student, and also a web developer passionate about artificial intelligence. I like bridging scientific rigor with building digital solutions.",
      p2: "On the web side, I've grown a lot: beyond the basics, I now build dynamic, robust applications with technologies like React for the front-end, Laravel and PHP/MySQL for the back-end, plus REST APIs and WordPress.",
      p3: "In parallel, I'm strengthening my skills in Artificial Intelligence and Machine Learning through the Introduction to AI Program at the Académie des Mathématiques Appliquées (AMA).",
      p4: 'For me, every project is a chance to turn ideas or complex calculations into simple, useful, everyday tools.',
      cvView: 'view my CV',
      cvDownload: 'Download my CV',
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
      notFound: 'Project not found.',
      backHome: '← back home',
    },
    skills: {
      eyebrow: 'section: skills',
      title: 'Technologies and tools I use',
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
  },
};
