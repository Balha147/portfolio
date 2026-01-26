interface TechActivity {
    type: 'REX & Publication' | 'Formation & Veille';
    title: string;
    subtitle: string;
    badge: string;
    description: string;
    url?: string;
    tags: string[];
    highlights: string[];
}

export const ACTIVITIES: TechActivity[] = [
    {
        type: 'REX & Publication',
        title: 'Retour sur NG Baguette Paris',
        subtitle: 'Article publié sur le Blog Tech Néosoft',
        badge: 'Article & Conférence',
        description: 'Rédaction d\'un retour d\'expérience (RETEX) complet suite à ma participation à la conférence NG Baguette à Paris. Analyse des évolutions majeures de l\'écosystème et partage des clés de compréhension avec la communauté.',
        url: 'https://www.neosoft.fr/nos-publications/blog-tech/retour-ng-baguette-conf-2026/',
        highlights: [
            'Synthèse des nouveautés Angular (Signals, SSR, Control Flow)',
            'Partage des bonnes pratiques d\'architecture auprès des équipes',
            'Veille active et networking avec la communauté Angular française'
        ],
        tags: ['Angular', 'RETEX', 'NG Baguette', 'Néosoft', 'Technical Writing']
    },
    {
        type: 'Formation & Veille',
        title: 'Agentic UI & Generative Front-end',
        subtitle: 'Basé sur l\'ouvrage de Manfred Steyer',
        badge: 'Auto-formation Avancée',
        description: 'Montée en compétences approfondie sur la conception d\'interfaces pilotées par l\'IA générative et l\'architecture de composants dynamiques exécutés au runtime.',
        highlights: [
            'AG-UI Standard & State Management réactif pour interfaces agentiques',
            'A2UI & MCP Apps : Génération dynamique d\'UI au runtime et transformation de résultats d\'outils en widgets interactifs',
            'Human-in-the-Loop (HITL), Guardrails, sous-agents & workflows de validation',
            'Stratégies de tests, multimodalité et intégration sécurisée dans Angular'
        ],
        tags: ['AG-UI', 'A2UI', 'MCP Apps', 'HITL', 'Manfred Steyer', 'Angular', 'GenAI']
    }
];