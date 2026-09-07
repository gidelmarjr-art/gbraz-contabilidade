import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "../ui/LogoMark";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 lg:px-7 ${
          scrolled
            ? "border border-cream/10 bg-navy-950/80 shadow-[0_10px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#hero" aria-label="G Braz Contabilidade — início">
          <LogoMark />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-cream/85 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a className="transition-colors hover:text-gold-300" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button as="a" href="#contato" variant="secondary" className="py-2.5">
            Fale com a gente
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="text-cream md:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-navy-950 px-6 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <LogoMark />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-cream"
              aria-label="Fechar menu"
            >
              <X size={26} />
            </button>
          </div>
          <ul className="mt-16 flex flex-col gap-8 text-2xl font-display text-cream">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a onClick={() => setMenuOpen(false)} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            as="a"
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-10 w-full justify-center"
          >
            Fale com a gente
          </Button>
        </div>
      )}
    </header>
  );
}
