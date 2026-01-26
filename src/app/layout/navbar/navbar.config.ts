export interface NavItem {
  label: string;
  path: string;
}

export const NAVBAR_CONFIG: NavItem[] = [
  { label: 'À propos', path: '#about' },
  { label: 'Compétences', path: '#skills' },
  { label: 'Expériences', path: '#experiences' },
  { label: 'Projets', path: '#projects' },
  { label: 'Formations', path: '#educations' },
  { label: 'Avis', path: '#testimonials' },
  { label: 'Communauté', path: '#community' },
  { label: 'Contact', path: '#contact' }
];