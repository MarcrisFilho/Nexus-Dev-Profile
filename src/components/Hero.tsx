import { Reveal } from "./ui";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-light" aria-hidden="true" />
      <Reveal className="hero-content container">
        <h1 id="hero-title">
          NEXUS <span>DEV</span>
          <span className="hero-dot">.</span>
        </h1>
        <h2>
          Ideias conectadas.
          <br className="mobile-break" /> Soluções que evoluem.
        </h2>
        <p>
          Um grupo de desenvolvedores criando soluções digitais e experiências
          modernas.
        </p>
        <a className="button button-primary" href="#hop">
          Ver projetos
        </a>
      </Reveal>
    </section>
  );
}
