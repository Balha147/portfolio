interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  duration: string;
  context: string;
  team: string;
  isCurrent?: boolean;
  highlights: { title: string; detail: string }[];
  skills: string[];
  logo?: string;
}

export const EXPERIENCES_CONFIG: Experience[] = [
  {
    company: 'LCL',
    logo: 'assets/images/lcl.png',
    role: 'Développeur Web Fullstack — Lead Tech',
    location: 'Paris',
    period: `Oct. 2023 — Aujourd'hui`,
    duration: '3 ans',
    isCurrent: true,
    context: "Refonte complète de l'Espace Client (PRO & PART, 50+ écrans)",
    team: 'Scrum (14 p. : 7 Devs, 1 TL, 1 Squad Lead, 4 BA, 1 PO)',
    highlights: [
      {
        title: 'Fullstack & Microservices',
        detail: 'Endpoints REST Java/Spring Boot sur architecture bancaire haute volumétrie + Intégration Front-end (Angular 19 / NestJS BFF).'
      },
      {
        title: 'Communication Hybride WebView & Native',
        detail: 'Mise en place de la communication bidirectionnelle entre l\'application native et Angular via l\'API MessageChannel (transfert de MessagePort postMessage) pour une intégration fluide et sécurisée.'
      },
      {
        title: 'Lead Tech, Outillage IA & RGAA',
        detail: 'Création de Skills IA sur-mesure (agent d\'accessibilité RGAA/WCAG, scaffolding automatisé), architecture Prismic et mentoring d\'équipe.'
      },
      {
        title: 'Migration & Gains de Performance (-30%)',
        detail: 'Pilotage de la migration Angular 11 vers 19. Optimisation avec Angular Signals, Lazy Loading et SSR (-30% de temps de chargement initial).'
      },
      {
        title: 'Production Master & CI/CD',
        detail: 'Responsable complet des déploiements en production via ArgoCD & GitLab CI/CD, supervision avec Dynatrace (CAGIP).'
      },
      {
        title: 'Design System d\'Entreprise',
        detail: 'Conception de composants UI réutilisables et accessibles (WCAG 2.1) adoptés par l\'ensemble des équipes PRO et PART.'
      }
    ],
    skills: [
      'Angular 21',
      'Nx',
      'NestJS',
      'Java / Spring Boot',
      'MessageChannel API',
      'WebView Bridge',
      'Signals',
      'ArgoCD',
      'GitLab CI',
      'Storybook',
      'Prismic',
      'Jest',
      'Dynatrace'
    ]
  },
  {
    company: 'Malakoff Humanis',
    logo: 'assets/images/mh.png',
    role: 'Développeur Fullstack',
    location: 'Paris',
    period: 'Janv. 2021 — Oct. 2023',
    duration: '2 ans 10 mois',
    context: 'Refonte du portail particulier Santé & Prévoyance (plusieurs centaines de milliers d’assurés)',
    team: 'Scrum (10 p. : 6 Devs, 1 TL, 2 BA, 1 PO)',
    highlights: [
      {
        title: 'Développement Fullstack',
        detail: 'Création des APIs REST Java et intégration frontend d\'interfaces métier dynamiques et complexes.'
      },
      {
        title: 'Encadrement & Delivery',
        detail: 'Mentoring de 3 développeurs juniors, animation des revues de code et garantie de la qualité des livrables.'
      },
      {
        title: 'Design System & Couverture Tests (80%)',
        detail: 'Enrichissement du Design System et déploiement d\'une stratégie de tests Jest (80% de couverture sur les modules critiques).'
      }
    ],
    skills: ['Angular 15', 'Java / Spring Boot', 'Storybook', 'Jest', 'Accessibilité (RGAA)', 'Ng Bootstrap']
  },
  {
    company: 'Generali (via Vermeg)',
    logo: 'assets/images/generali.png',
    role: 'Développeur Front-end',
    location: 'Tunisie (À distance)',
    period: 'Janv. 2018 — Déc. 2020',
    duration: '3 ans',
    context: 'Assurance collective santé & prévoyance (prospection, tarification et simulation)',
    team: 'Scrum (10 p. : 6 Devs, 1 TL, 2 BA, 1 PO)',
    highlights: [
      {
        title: 'Architecture & Performance (+25%)',
        detail: 'Mise en place d\'un système de cache réduisant de 25% le temps de calcul des simulations de tarification.'
      },
      {
        title: 'Développement Frontend & APIs',
        detail: 'Intégration d\'APIs REST Java pour connecter les moteurs de calculs tarifaires aux interfaces utilisateur.'
      },
      {
        title: 'Qualité & Stabilité',
        detail: 'Maintenance applicative, rédaction de tests unitaires Jest et résolution d\'anomalies complexes.'
      }
    ],
    skills: ['Angular 11', 'NgRx', 'Java / Spring Boot', 'PrimeNG', 'Jest', 'SCSS']
  }
];