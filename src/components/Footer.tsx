import { Wordmark } from "./Header";

export function Footer() {
  return (
    <footer className="footer container">
      <a href="#inicio" aria-label="NEXUS DEV — voltar ao início">
        <Wordmark />
      </a>
      <p>© 2026 NEXUS DEV</p>
    </footer>
  );
}
