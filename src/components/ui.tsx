import { useState } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";
import { assetUrl } from "../lib/assets";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}

export function External({
  href,
  children,
  className = "",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label} (abre em nova aba)` : undefined}
    >
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}

export function Asset({
  folder,
  filename,
  alt,
  className = "",
  fallback,
}: {
  folder: "logos" | "team";
  filename: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  const src = assetUrl(folder, filename);
  return src && !failed ? (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  ) : (
    <>{fallback}</>
  );
}

export function ProjectLinks({
  project,
  codeLabel = "GitHub",
}: {
  project: Project;
  codeLabel?: string;
}) {
  return (
    <div className="project-links">
      <External href={project.url} className="button button-primary">
        Acessar projeto <ExternalLink size={16} />
      </External>
      <External href={project.github} className="button button-quiet">
        <Github size={17} /> {codeLabel}
      </External>
    </div>
  );
}
