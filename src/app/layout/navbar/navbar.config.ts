interface NavbarModel {
  label: string;
  path: string;
  icon: string;
}

export const NAVBAR_CONFIG: NavbarModel[] = [
  { label: 'Accueil', path: '#hero', icon: 'house' },
  { label: 'À propos', path: '#about', icon: 'user' },
  { label: 'Compétences', path: '#skills', icon: 'bolt' },
  { label: 'Projets', path: '#projects', icon: 'code' },
  { label: 'Contact', path: '#contact', icon: 'paper-plane' }
];
