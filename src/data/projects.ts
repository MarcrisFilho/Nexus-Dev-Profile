export interface Project {
  id: string;
  name: string;
  featured: boolean;
  description: string;
  url: string;
  repository: string;
  logo: string;
}

export const projects: Project[] = [
  {
    id: "hop",
    name: "HOP",
    featured: true,
    description:
      "HOP é uma plataforma desenvolvida para o Challenge da OTIS, focada na gestão e acompanhamento de ocorrências, elevadores e equipes de manutenção.",
    url: "https://hop-escalator.vercel.app/",
    repository: "https://github.com/Mantovani-a/Hop-Elevator",
    logo: "hop-logo.png",
  },
  {
    id: "plouty",
    name: "PLOUTY",
    featured: false,
    description:
      "Plataforma criada para conectar pequenos produtores agrícolas a instituições e novas oportunidades comerciais.",
    url: "https://plouty-connecting.vercel.app/",
    repository: "https://github.com/Mantovani-a/Plouty-Connecting",
    logo: "plouty-logo.png",
  },
];
