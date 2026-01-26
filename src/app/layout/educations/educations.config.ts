import { CardModel } from "../../shared/card/card.type";

export const EDUCATIONS_CONFIG: CardModel[] = [
  {
    title: $localize`:@@edu.esprit.title:Ingénieur en Génie informatique`,
    clientName: 'ESPRIT',
    appName: $localize`:@@edu.esprit.specialty:Spécialité Web & Mobile`,
    imageName: 'esprit.png',
    status: $localize`:@@edu.status.graduated:Diplômé`,
    date: '2016 - 2019',
    type: 'education'
  },
  {
    title: $localize`:@@edu.fst.title:Licence fondamentale en informatique`,
    clientName: 'Faculté des Sciences de Tunis (FST)',
    appName: $localize`:@@edu.fst.specialty:Génie Logiciel`,
    imageName: 'fst.jpg',
    status: $localize`:@@edu.status.graduated:Diplômé`,
    date: '2013 - 2016',
    type: 'education'
  }
];
