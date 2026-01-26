interface NavbarModel {
  label: string;
  path: string;
  icon: string;
}

export const NAVBAR_CONFIG: NavbarModel[] = [
  {
    label: $localize`:@@nav.home:Accueil`,
    path: '#hero',
    icon: 'house'
  },
  {
    label: $localize`:@@nav.about:À propos`,
    path: '#about',
    icon: 'user'
  },
  {
    label: $localize`:@@nav.skills:Compétences`,
    path: '#skills',
    icon: 'bolt'
  },
  {
    label: $localize`:@@nav.projects:Projets`,
    path: '#projects',
    icon: 'code'
  },
  {
    label: $localize`:@@nav.contact:Contact`,
    path: '#contact',
    icon: 'paper-plane'
  }
];
