export interface EducationItem {
  id: string;
  status: 'ongoing' | 'completed';
  degree: string;
  degreeEn?: string;
  institution: string;
  location: string;
  period: string; // ex: '2023 - 2026' — à compléter avec tes vraies dates
}

/*
  Ordre = du plus récent au plus ancien (comme sur la référence).
  Complète le champ `period` de chaque entrée avec tes vraies dates.
*/
export const education: EducationItem[] = [
  {
    id: 'ama',
    status: 'ongoing',
    degree: "Programme d'Introduction à l'Intelligence Artificielle - parcours ML Engineer",
    degreeEn: 'Introduction to AI Program - ML Engineer track',
    institution: 'Académie des Mathématiques Appliquées (AMA), semi-boursier',
    location: 'Bénin',
    period: '2026 - 2027',
  },
  {
    id: 'licence-hydrologie',
    status: 'completed',
    degree: 'Licence en Sciences et Technologies (Hydrologie Quantitative et Gestion Intégrée des Ressources en Eau)',
    degreeEn: 'Bachelor of Sciences and Technology (Quantitative Hydrology and Integrated Water Resources Management)',
    institution: "Institut National de l'Eau (INE), UAC",
    location: 'Abomey-Calavi, Bénin',
    period: '2022 - 2026',
  },
  {
    id: 'baccalaureat',
    status: 'completed',
    degree: 'Baccalauréat Scientifique - Série D',
    degreeEn: 'Scientific Baccalaureate - Series D',
    institution: "Collège d'Enseignement Général 1 d'Abomey",
    location: 'Bénin',
    period: '2021 - 2022',
  },
];