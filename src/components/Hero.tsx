import { Reveal } from "./ui";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-light" aria-hidden="true" />
      <Reveal className="hero-content container">
        <h1 id="hero-title">
          NEXUS <span>DEV</span>
        </h1>
        <h2>Um péssimo nome para programadores incríveis.</h2>
        <p>
          Grupo de desenvolvedores criando projetos digitais com identidade
          própria.
        </p>
        <a className="button button-primary" href="#hop">
          Ver projetos
        </a>
      </Reveal>
    </section>
  );
}
