import { MotionConfig } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedProject, OtherProjects } from "./components/Projects";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { projects } from "./data/projects";

export default function App() {
  const featured = projects.find((project) => project.featured);
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="conteudo">
        <Hero />
        {featured && <FeaturedProject project={featured} />}
        <Team />
        <OtherProjects
          projects={projects.filter((project) => !project.featured)}
        />
      </main>
      <Footer />
    </MotionConfig>
  );
}
