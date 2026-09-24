export interface Experience {
  id: string;
  title: string;
  titleEn: string;
  organization: string;
  organizationEn: string;
  location: string;
  period: string;
  responsibilities: string[];
  responsibilitiesEn: string[];
}

export const experiences: Experience[] = [
  {
    id: 'meteo-benin',
    title: 'Stagiaire en Analyse de Données Météorologiques',
    titleEn: 'Meteorological Data Analysis Intern',
    organization: 'Agence Nationale de la Météorologie du Bénin (METEO-BENIN)',
    organizationEn: 'National Meteorological Agency of Benin (METEO-BENIN)',
    location: 'Cotonou, Bénin',
    period: 'Juil. 2025 – Oct. 2025',
    responsibilities: [
      'Analyse, traitement et contrôle qualité des données climatologiques et météorologiques.',
      'Participation aux études sur la variabilité climatique et à la modélisation descriptive.',
    ],
    responsibilitiesEn: [
      'Analysis, processing, and quality control of climatological and meteorological data.',
      'Contribution to studies of climate variability and descriptive modelling.',
    ],
  },
  {
    id: 'soneb',
    title: 'Stagiaire Technique Réseau & Maintenance',
    titleEn: 'Network & Maintenance Technical Intern',
    organization: 'Direction Départementale de la SONEB Zou-Collines',
    organizationEn: 'SONEB Zou-Collines Departmental Directorate',
    location: 'Bénin',
    period: 'Juil. 2023 – Août 2023',
    responsibilities: [
      'Assistance technique au diagnostic et à la résolution des pannes sur le réseau d’approvisionnement en eau.',
      'Support opérationnel à l’installation, au raccordement et à la maintenance des abonnés.',
    ],
    responsibilitiesEn: [
      'Technical assistance with diagnosing and resolving failures in the water-supply network.',
      'Operational support for subscriber installation, connection, and maintenance.',
    ],
  },
];
