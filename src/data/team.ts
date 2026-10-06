export interface Member {
  id: string;
  name: string;
  initials: string;
  specialty: string | null;
  photo: string;
  github: string;
  linkedin: string;
}

export const team: Member[] = [
  {
    id: "01",
    name: "Davi Rabelo",
    initials: "DR",
    specialty: null,
    photo: "davi-rabelo.png",
    github: "https://github.com/davirabelo17296-oss",
    linkedin: "https://www.linkedin.com/in/davi-rabelo-1b9285407/",
  },
  {
    id: "02",
    name: "Enzo Mitev",
    initials: "EM",
    specialty: null,
    photo: "enzo-mitev.png",
    github: "https://github.com/Mittzinn",
    linkedin: "https://www.linkedin.com/in/enzo-mitev-9929803b6/",
  },
  {
    id: "03",
    name: "Felipe Domingues",
    initials: "FD",
    specialty: null,
    photo: "felipe-domingues.png",
    github: "https://github.com/Barrzyx",
    linkedin: "https://www.linkedin.com/in/felipedominguessousa/",
  },
  {
    id: "04",
    name: "Nicolas Mantovani",
    initials: "NM",
    specialty: null,
    photo: "nicolas-mantovani.png",
    github: "https://github.com/Mantovani-a",
    linkedin:
      "https://www.linkedin.com/in/n%C3%ADcolas-mantovani-de-araujo-980a93259/",
  },
  {
    id: "05",
    name: "Marcris Filho",
    initials: "MF",
    specialty: "Front-end • UI/UX Designer",
    photo: "marcris-filho.png",
    github: "https://github.com/MarcrisFilho",
    linkedin: "https://www.linkedin.com/in/marcris-filho",
  },
];
