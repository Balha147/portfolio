export interface CardModel {
  imageName: string;
  status: string; // Ex: "Mention Bien" ou "CDI"
  date: string;
  linkApp?: string;
  appName: string; // Nom du diplôme ou projet
  clientName: string; // Université ou Entreprise
  title: string; // <--- AJOUT : "Software Engineer" ou "Master"
  type: 'experience' | 'education'; // <--- AJOUT : Pour la logique de texte
}
