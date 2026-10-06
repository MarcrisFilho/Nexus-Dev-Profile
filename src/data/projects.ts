export interface Project {
  id: string;
  name: string;
  featured: boolean;
  description: string;
  url: string;
  github: string;
  logo: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "hop",
    name: "HOP",
    featured: true,
    description:
      "HOP é uma plataforma desenvolvida para o Challenge da OTIS, focada na gestão e acompanhamento de ocorrências, elevadores e equipes de manutenção.",
    url: "https://hop-escalator.vercel.app/",
    github: "https://github.com/Mantovani-a/Hop-Elevator",
    logo: "hop-logo.png",
  },
  {
    id: "plouty",
    name: "PLOUTY",
    featured: false,
    description:
      "Plataforma criada para conectar pequenos produtores agrícolas a instituições e novas oportunidades comerciais.",
    url: "https://plouty-connecting.vercel.app/",
    github: "https://github.com/Mantovani-a/Plouty-Connecting",
    logo: "plouty-logo.png",
  },
  {
    id: "sentrya",
    name: "SENTRYA",
    featured: false,
    description:
      "Sentrya é um projeto em desenvolvimento voltado à identificação de áreas ameaçadas por desastres naturais com apoio de dados e monitoramento por satélite.",
    url: "https://sentrya-rho.vercel.app/",
    github: "https://github.com/Mantovani-a/ShieldProject",
    logo: "sentrya-logo.png",
    status: "Em desenvolvimento",
  },
];
