interface ProjectModel {
  title: string;
  code: string;
}

export const PROJECTS: ProjectModel[] = [
  {
    title: $localize`:@@proj.lcl.title:Espace particulier / LCL`,
    code: `
    const project = {
      name: 'Mon Espace',
      tools: ['Angular 19', 'JEST', 'NestJS (BFF)', 'Java', 'Storybook', 'Git', 'Scrum'],
      myRole: '${$localize`:@@proj.role.fullstack:Full Stack Developer`}',
      description: \`${$localize`:@@proj.lcl.desc:Pilotage de la modernisation Full Stack du projet : migration Angular 15 vers 19, création d'un Design System (Storybook) et intégration du CMS Prismic. Développement de formulaires complexes et de microservices Java/Spring Boot critiques (alertes, parrainage) avec mise en place du tracking analytique.`}\`
    };`,
  },
  {
    title: $localize`:@@proj.mh.title:PPA / Malakoff Humanis (MH)`,
    code: `
    const project = {
      name: 'Mon Espace',
      tools: ['Angular 14', 'JEST', 'Storybook', 'Bitbucket', 'Java', 'Bootstrap', 'Git', 'Scrum'],
      myRole: '${$localize`:@@proj.role.fullstack:Full Stack Developer`}',
      description: \`${$localize`:@@proj.mh.desc:Responsable du front-end (Angular 11 à 14), j'ai piloté la migration de fonctionnalités Drupal vers Angular et optimisé l'architecture via des services CRUD génériques. J'ai conçu des modules complexes (gestion d'adresses dynamique) et enrichi la bibliothèque interne (Ds-Tools) avec des composants réutilisables (steppeur IA, inputs). Performance assurée par un module de cache et tracking complet via Tag Commander.`}\`
    };`,
  },
  {
    title: $localize`:@@proj.cacf.title:E-Animation / CACF`,
    code: `
    const project = {
      name: '${$localize`:@@proj.cacf.name:Application interne`}',
      tools: ['Angular 10', 'Java', 'REST', 'JEST', 'PrimeNG', 'Gitlab', 'Jenkins', 'SCRUM'],
      myRole: '${$localize`:@@proj.role.fullstack:Full Stack Developer`}',
      description: \`${$localize`:@@proj.cacf.desc:Responsable Front-end (Angular 10), j'ai assuré la refonte complète de l'application en migrant les services Drupal vers une architecture Angular moderne. J'ai conçu des modules métier avancés (formulaires intelligents, services CRUD abstraits) et enrichi le Design System interne via PrimeNG. Optimisation des performances via une stratégie de cache et intégration du tracking utilisateur avec Tag Commander.`}\`
    };`,
  }
];
