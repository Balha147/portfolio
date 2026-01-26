import { CardModel } from "../../shared/card/card.type";

export const EXPERIENCES_CONFIG: CardModel[] = [
  {
    title: 'Software Engineer', // Le titre qui s'affichera en grand
    appName: 'monespace.lcl.fr',
    clientName: 'LCL',
    date: 'Oct 2023 - Present',
    imageName: 'lcl.jpg',
    linkApp: 'https://monespace.lcl.fr/connexion',
    status: 'prestataire',
    type: 'experience' // Identifie cette carte comme une expérience pro
  },
  {
    title: 'Full Stack Developer',
    appName: 'PPA',
    clientName: 'Malakoff Humanis',
    date: 'Nov 2020 - Oct 2023',
    imageName: 'MH.png',
    linkApp: 'https://connexion.malakoffhumanis.com/particuliers/login',
    status: 'prestataire',
    type: 'experience'
  },
  {
    title: 'Frontend Developer',
    appName: 'E-Animation',
    clientName: 'CACF',
    date: 'Jan 2018 - Déc 2020',
    imageName: 'cacf.jpg',
    status: 'prestataire',
    type: 'experience'
  }
];
