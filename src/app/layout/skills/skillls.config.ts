interface SkillCategory {
    title: string;
    badge: string;
    description: string;
    skills: {
        name: string;
        level?: string;
        highlight?: boolean;
    }[];
}

export const SKILLS: SkillCategory[] = [
    {
        title: 'Core Angular & Front-End',
        badge: 'Expertise Principale',
        description: 'Conception d\'applications Web modernes, réactives et hautement performantes.',
        skills: [
            { name: 'Angular 17+', highlight: true },
            { name: 'Signals & RxJS', highlight: true },
            { name: 'TypeScript', highlight: true },
            { name: 'Tailwind CSS' },
            { name: 'HTML5 / SCSS' },
            { name: 'Bootstrap' },
            { name: 'State Management (NgRx / SignalStore)' },
            { name: 'SSR & Hydration' }
        ]
    },
    {
        title: 'Agentic UI & GenAI Front-End',
        badge: 'Veille & Innovation',
        description: 'Intégration d\'interfaces dynamiques et agentiques pilotées par l\'IA générative.',
        skills: [
            { name: 'AG-UI Standard', highlight: true },
            { name: 'A2UI Runtime', highlight: true },
            { name: 'MCP Apps (Interactive Widgets)' },
            { name: 'Human-in-the-Loop (HITL)' },
            { name: 'Guardrails & Workflows' },
            { name: 'Multimodalité' }
        ]
    },
    {
        title: 'Architecture & Back-End Eco',
        badge: 'Conception & Scalabilité',
        description: 'Structuration de projets modulaires et communication API robuste.',
        skills: [
            { name: 'Nx' },
            { name: 'REST APIs & GraphQL' },
            { name: 'NestJs' },
            { name: 'Node.js / Express' },
            { name: 'Micro-Frontends' }
        ]
    },
    {
        title: 'Outillage, Test & Qualité',
        badge: 'Pratiques Dev',
        description: 'Garantie de la qualité logicielle, de l\'intégration continue et du cycle de vie.',
        skills: [
            { name: 'Gitlab' },
            { name: 'Jest / Vitest' },
            { name: 'Cypress / Playwright' },
            { name: 'CI/CD' },
            { name: 'Storybook' },
            { name: 'ESLint / Prettier' }
        ]
    }
];