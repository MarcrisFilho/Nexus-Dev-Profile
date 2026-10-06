import type { Project } from "../data/projects";
import { Asset, ProjectLinks, Reveal } from "./ui";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <section
      className="featured-section container"
      id="hop"
      aria-labelledby="hop-title"
    >
      <Reveal>
        <article className="featured-project">
          <div className="featured-art">
            <div className="logo-orbit" aria-hidden="true" />
            <Asset
              folder="logos"
              filename={project.logo}
              alt={`Logo da ${project.name}`}
              className="hop-logo"
              fallback={<span className="logo-fallback">{project.name}</span>}
            />
          </div>
          <div className="featured-copy">
            <span className="eyebrow">PROJETO EM DESTAQUE</span>
            <h2 id="hop-title">{project.name}</h2>
            <p>{project.description}</p>
            <ProjectLinks project={project} />
          </div>
        </article>
      </Reveal>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article
        className="secondary-project"
        data-project={project.id}
        aria-labelledby={`project-${project.id}`}
      >
        <div className="secondary-art">
          <Asset
            folder="logos"
            filename={project.logo}
            alt={`Logo da ${project.name}`}
            className="secondary-logo"
            fallback={<span className="logo-fallback">{project.name}</span>}
          />
        </div>
        <div className="secondary-copy">
          <div className="secondary-heading">
            <h3 id={`project-${project.id}`}>{project.name}</h3>
            {project.status && (
              <span className="project-status">{project.status}</span>
            )}
          </div>
          <p>{project.description}</p>
          <ProjectLinks project={project} codeLabel="Ver código" />
        </div>
      </article>
    </Reveal>
  );
}

export function OtherProjects({ projects }: { projects: Project[] }) {
  return (
    <section
      className="other-projects container"
      id="projetos"
      aria-labelledby="projects-title"
    >
      <Reveal>
        <h2 className="section-title" id="projects-title">
          Outros projetos<span>.</span>
        </h2>
      </Reveal>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
