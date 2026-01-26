export interface CardModel {
  imageName: string;
  status: string;
  date: string;
  linkApp?: string;
  appName: string;
  clientName: string;
  title: string;
  type: 'experience' | 'education';
}
