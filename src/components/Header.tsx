import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { href: "#hop", label: "HOP" },
  { href: "#equipe", label: "Equipe" },
  { href: "#projetos", label: "Projetos" },
];

export function Wordmark() {
  return (
    <span className="wordmark">
      NEXUS<span className="wordmark-dev">DEV</span>
      <span className="wordmark-dot">.</span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const menu = dialog.current!;
    menu.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      menu.close();
      document.body.style.overflow = previous;
      window.removeEventListener("resize", closeOnDesktop);
      trigger.current?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="header">
        <div className="container header-inner">
          <a href="#inicio" aria-label="NEXUS DEV — início">
            <Wordmark />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            ref={trigger}
            type="button"
            className="icon-button menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-labelledby="menu-title"
        onCancel={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = dialog.current?.querySelectorAll<
            HTMLAnchorElement | HTMLButtonElement
          >("a[href], button");
          if (!controls?.length) return;
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === dialog.current) setOpen(false);
        }}
      >
        <div className="mobile-menu-top">
          <span id="menu-title">
            <Wordmark />
          </span>
          <button
            type="button"
            className="icon-button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>
        <nav aria-label="Navegação mobile">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </dialog>
    </>
  );
}
