interface Project {
    title: string;
    category: string;
    description: string;
    githubUrl: string;
    demoUrl?: string;
    isFeatured?: boolean;
    highlights: string[];
    techStack: string[];
}

export const PROJECTS: Project[] = [
    {
        title: 'DS-Lib',
        category: 'Design System & UI Library',
        description: 'Bibliothèque de composants UI réutilisables, accessibles et hautement personnalisables basée sur Angular et documentée avec Storybook.',
        githubUrl: 'https://github.com/Balha147/ds-lib',
        isFeatured: true,
        highlights: [
            'Composants UI modulaires et stylisés avec Tailwind CSS / SCSS',
            'Intégration Storybook pour la documentation interactive et le workbench UI',
            'Respect des bonnes pratiques d\'accessibilité (A11y / RGAA)'
        ],
        techStack: ['Angular 22', 'Storybook', 'TypeScript', 'Signal', 'SignalForm', 'SCSS']
    },
    {
        title: 'Developer Portfolio',
        category: 'Portfolio Personnel & Vitrine',
        description: 'Site portfolio minimaliste, ultra-performant et accessible, conçu pour présenter mon parcours, mon expertise Angular et mes projets open source.',
        githubUrl: 'https://github.com/Balha147/portfolio',
        isFeatured: true,
        highlights: [
            'Architecture Angular moderne basée sur les Signals et le Control Flow natif (@for, @if)',
            'Design System sur-mesure intégrant un Switch de Thème (Dark/Light) et une grille CSS réactive',
            'Optimisation SEO, temps de chargement ultra-rapides et respect strict des règles WCAG / RGAA'
        ],
        techStack: ['Angular 22', 'TypeScript', 'Tailwind CSS']
    },
    {
        title: 'Signal Form',
        category: 'State Management & Experimental',
        description: 'Exploration et expérimentation autour des Angular Signals appliqués à la gestion de formulaires réactifs et performants.',
        githubUrl: 'https://github.com/Balha147/signalform',
        isFeatured: true,
        highlights: [
            'Gestion de l\'état de formulaire sans dépendances externes lourdes via Angular Signals',
            'Optimisation de la réactivité fine (fine-grained reactivity)',
            'Validation dynamique et typage strict avec TypeScript'
        ],
        techStack: ['Angular 22', 'Signals', 'TypeScript', 'SignalForm']
    },
    {
        title: 'Avocat Akram',
        category: 'Site Vitrine Client / Freelance',
        description: 'Site vitrine moderne et sur-mesure pour un cabinet d\'avocat, axé sur la sobriété visuelle, la performance et l\'optimisation SEO.',
        githubUrl: 'https://github.com/Balha147/avocat-akram',
        isFeatured: false,
        highlights: [
            'Interface moderne, sobre et responsive adaptée au secteur juridique',
            'Optimisation des performances de chargement et des métadonnées SEO',
            'Intégration fluide de formulaires de contact et de prises de rendez-vous'
        ],
        techStack: ['HTML', 'CSS', 'JS']
    }
];