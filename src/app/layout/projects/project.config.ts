interface ProjectModel {
  title: string;
  code: string;
}

export const PROJECTS: ProjectModel[] = [
  {
    title: 'Espace particulier / LCL',
    code: `
    const project = {
      name: 'Mon Espace',
      tools: ['Angular 19', 'JEST', 'NestJS (BFF)', 'Java', 'Storybook', 'Git', 'Scrum'],
      myRole: 'Full Stack Developer',
      description: \`Au sein de ce projet, j'ai pleinement pris en charge la modernisation
      du front-end en pilotant la migration complète d'Angular, de la version 15 à la 19.
      J'ai développé tous les écrans en respectant les maquettes UX/UI et structuré l'interface
      via la création d'un design system avec StoryBook, tout en implémentant des formulaires complexes.
      Pour optimiser le contenu, j'ai intégré Prismic comme Headless CMS pour la gestion
      des textes et images, et mis en place le tracking analytique.
      Mes responsabilités se sont étendues au back-end où j'ai créé des microservices
      Java/Spring Boot pour des fonctionnalités critiques comme les alertes de compte et
      le système de parrainage.\`
};`
  },
  {
    title: 'PPA / Malakoff Humanis (MH)',
    code: `
    const project = {
        name: 'Mon Espace',
        tools: ['Angular 14', 'JEST', 'Storybook', 'Bitbucket', 'Java', 'Bootstrap', 'Git', 'Scrum'],
        myRole: 'Full Stack Developer',
        description:  \`J'ai été responsable du développement front-end à 100% d'une application Angular,
          en conduisant les migrations successives de la version 11 à 14.
          Mon travail a consisté à développer tous les écrans en respectant scrupuleusement
          les maquettes UX/UI avec la bibliothèque interne Ds-Tools, et à moderniser les fonctionnalités
          existantes en les migrant de Drupal vers Angular avec des améliorations.
          Pour optimiser l'architecture, j'ai créé un service générique de CRUD basé sur une
          classe abstraite et développé des modules complexes
          (gestion d'adresses française/étrangère, code postal intelligent avec comportement dynamique).
          J'ai également contribué à la bibliothèque interne en améliorant
          des composants génériques (inputs, datepickers) et en créant un steppeur de formulaires réutilisable,
          utilisé notamment pour les formulaires Santé et Prévoyance intégrant un service IA de pré-remplissage. Enfin,
        j'ai assuré la performance via un module de cache et mis en place le
        tracking complet de l'application avec Tag Commander.\`
};`
  },
  {
    title: 'E-Animation / CACF',
    code: `
    const project = {
        name: 'Mon Espace',
        tools: ['Angular 10', 'Java', 'REST', 'JEST', 'PrimeNG', 'Gitlab', 'Jenkins', 'SCRUM'],
        myRole: 'Full Stack Developer',
        description: \`J'ai été responsable du développement front-end à 100% d'une application Angular,
          en conduisant les migrations successives de la version 11 à 14.
          Mon travail a consisté à développer tous les écrans en respectant scrupuleusement
          les maquettes UX/UI avec la bibliothèque interne Ds-Tools, et à moderniser les fonctionnalités
          existantes en les migrant de Drupal vers Angular avec des améliorations.
          Pour optimiser l'architecture, j'ai créé un service générique de CRUD basé sur une
          classe abstraite et développé des modules complexes
          (gestion d'adresses française/étrangère, code postal intelligent avec comportement dynamique).
          J'ai également contribué à la bibliothèque interne en améliorant
          des composants génériques (inputs, datepickers) et en créant un steppeur de formulaires réutilisable,
          utilisé notamment pour les formulaires Santé et Prévoyance intégrant un service IA de pré-remplissage. Enfin,
        j'ai assuré la performance via un module de cache et mis en place le
        tracking complet de l'application avec Tag Commander.\`
};`
  }
]
