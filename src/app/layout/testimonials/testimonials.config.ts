export interface Testimonial {
    name: string;
    role: string;
    company: string;
    avatar?: string;
    initials: string;
    quote: string;
    highlightKey?: string;
    linkedinUrl?: string;
}

export const TESTIMONIALS_CONFIG: Testimonial[] = [
    {
        name: 'Tech Lead',
        role: 'Lead Developer',
        company: 'LCL - Espace Client Connecté',
        initials: 'TL',
        quote: `Hedi est un développeur fullstack et un véritable expert frontend. Une de ses forces est sa capacité à se poser les bonnes questions avant de commencer à coder. Son travail est rigoureux, soigné et qualitatif. Au-delà des compétences techniques, Hedi aime partager ses connaissances avec ses pairs.`,
        highlightKey: 'Expert Frontend & Rigueur'
    },
    {
        name: 'Business Analyst',
        role: 'Business Analyst',
        company: 'LCL',
        initials: 'BA',
        quote: `J'ai particulièrement apprécié sa capacité à faire le lien entre les enjeux fonctionnels et techniques. Hedi sait vulgariser des sujets techniques complexes et les rendre accessibles. J’ai également apprécié son écoute, sa disponibilité et son approche pragmatique.`,
        highlightKey: 'Vulgarisation & Pragmatisme'
    },
    {
        name: 'UX/UI Designer',
        role: 'Product Designer UX/UI',
        company: 'LCL',
        initials: 'UX',
        quote: `C'est un développeur front-end très compétent, rigoureux et impliqué, avec une vraie capacité à comprendre les enjeux du produit et à proposer des solutions pertinentes. La fluidité de nos échanges au quotidien a été très appréciable.`,
        highlightKey: 'Sens Produit & Collaboration UX'
    },
    {
        name: 'Product Owner',
        role: 'Product Owner',
        company: 'LCL - Refonte Espace Banque',
        initials: 'PO',
        quote: `C'est un développeur impliqué, dynamique et force de proposition, avec une vraie compréhension des enjeux produit. Son esprit d’équipe, ses connaissances et son approche pragmatique en font un collègue précieux.`,
        highlightKey: `Force de proposition & Esprit d'équipe`
    },
    {
        name: 'Product Owner',
        role: 'Product Owner',
        company: 'Malakoff Humanis',
        initials: 'PO',
        quote: `Hedi est un professionnel engagé. Avec la volonté de mener au mieux ses développements, il communique facilement et est force de proposition. Bienveillant et dynamique, il devient un membre moteur de la scrumteam !`,
        highlightKey: 'Membre moteur & Communication'
    },
    {
        name: 'Tech Lead',
        role: 'Tech Lead',
        company: 'LCL - Site Transactionnel',
        initials: 'TL',
        quote: `Grâce à son expertise technique, son professionnalisme et sa bonne humeur, il a joué un rôle déterminant dans la réussite du projet. Ces qualités ont été particulièrement appréciées par l’ensemble de l’équipe !`,
        highlightKey: 'Rôle déterminant & Professionnalisme'
    }
];