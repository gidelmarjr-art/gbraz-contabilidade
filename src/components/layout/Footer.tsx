import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { LogoMark } from "../ui/LogoMark";

const SECTIONS = [
  {
    title: "Escritório",
    links: [
      { name: "Sobre", href: "#sobre" },
      { name: "Serviços", href: "#servicos" },
      { name: "Depoimentos", href: "#depoimentos" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { name: "Abertura de empresas", href: "#servicos" },
      { name: "Departamento pessoal", href: "#servicos" },
      { name: "Planejamento tributário", href: "#servicos" },
    ],
  },
  {
    title: "Contato",
    links: [
      { name: "contato@gbrazcontabilidade.com.br", href: "mailto:contato@gbrazcontabilidade.com.br" },
      { name: "(61) 0000-0000", href: "tel:+556100000000" },
      { name: "Fale conosco", href: "#contato" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: <FaInstagram size={17} />, href: "#", label: "Instagram" },
  { icon: <FaLinkedinIn size={17} />, href: "#", label: "LinkedIn" },
  { icon: <FaWhatsapp size={17} />, href: "#", label: "WhatsApp" },
];

const LEGAL_LINKS = [
  { name: "Política de Privacidade", href: "#" },
  { name: "Termos de Uso", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950">
      <span
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-semibold leading-none text-cream/[0.035] sm:text-[16vw]"
        aria-hidden="true"
      >
        G BRAZ
      </span>
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="flex max-w-sm flex-col gap-5">
            <LogoMark />
            <p className="text-sm leading-relaxed text-cream-dim">
              Contabilidade consultiva para empresas que querem clareza
              financeira para crescer com segurança.
            </p>
            <ul className="flex items-center gap-3 text-cream-dim">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 transition-colors hover:border-gold-500/50 hover:text-gold-300"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-20">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="font-display text-lg text-cream">
                  {section.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-cream-dim">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-gold-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream-dim md:flex-row">
          <p>
            © {new Date().getFullYear()} G Braz Contabilidade. Todos os
            direitos reservados.
          </p>
          <ul className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-gold-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
