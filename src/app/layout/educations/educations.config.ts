interface Education {
  institution: string;
  degree: string;
  specialty: string;
  period: string;
  duration: string;
  level: string;
  location: string;
  skills: string[];
}

export const EDUCATIONS_CONFIG: Education[] = [
  {
    institution: "École Supérieure Privée d'Ingénierie et de Technologies — ESPRIT",
    degree: "Diplôme d'Ingénieur",
    specialty: 'Développement Web & Technologies Internet',
    period: '2016 — 2019',
    duration: '3 ans',
    level: 'Ingénieur en Informatique',
    location: 'Tunis, Tunisie',
    skills: [
      'Architecture Web',
      'Génie Logiciel',
      'Développement Avancé',
      'Gestion de Projet',
      'Communication & Travail en Équipe'
    ]
  },
  {
    institution: 'Faculté des Sciences Mathématiques, Physiques et Naturelles de Tunis',
    degree: 'Licence Fondamentale',
    specialty: 'Sciences Informatiques',
    period: '2013 — 2016',
    duration: '3 ans',
    level: 'Technicien Supérieur en Informatique',
    location: 'Tunis, Tunisie',
    skills: [
      'Algorithmique & Structures de Données',
      'Bases de Données',
      'Systèmes & Réseaux',
      'Programmation Orientée Objet'
    ]
  }
];
