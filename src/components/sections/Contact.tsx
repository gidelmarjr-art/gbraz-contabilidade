import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

/**
 * ⚠️ Dados de contato de exemplo — atualize telefone, e-mail, endereço e
 * horário com as informações reais do escritório.
 */
const CONTACT_INFO = [
  { icon: Phone, label: "(99) 98438-1575", href: "tel:+556100000000" },
  {
    icon: Mail,
    label: "contato@gbrazcontabilidade.com.br",
    href: "mailto:contato@gbrazcontabilidade.com.br",
  },
  { icon: MapPin, label: "Brasília, DF" },
  { icon: Clock, label: "Seg. a sex., 9h às 18h" },
];

export function Contact() {
  return (
    <section id="contato" className="relative bg-navy-950 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1fr] lg:gap-24 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos conversar sobre a contabilidade do seu negócio."
            description="Preencha o formulário ou fale direto com o nosso time. Retornamos em até um dia útil."
          />

          <ul className="mt-10 flex flex-col gap-4">
            {CONTACT_INFO.map(({ icon: Icon, label, href }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-navy-900/40 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                  <Icon size={17} strokeWidth={1.5} />
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-sm text-cream/90 transition-colors hover:text-gold-300"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-sm text-cream/90">{label}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            className="grid gap-6 rounded-3xl border border-cream/10 bg-navy-900/30 p-8 sm:grid-cols-2 lg:p-10"
            onSubmit={(event) => event.preventDefault()}
          >
            <Field label="Nome" name="nome" placeholder="Seu nome completo" />
            <Field label="Empresa" name="empresa" placeholder="Nome da empresa" />
            <Field
              label="E-mail"
              name="email"
              type="email"
              placeholder="voce@empresa.com.br"
            />
            <Field
              label="Telefone"
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
            />
            <label className="col-span-full flex flex-col gap-2 text-sm text-cream-dim">
              Mensagem
              <textarea
                name="mensagem"
                rows={4}
                placeholder="Conte um pouco sobre a sua empresa e o que você precisa"
                className="rounded-2xl border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream-dim/60 focus:border-gold-400"
              />
            </label>
            <Button type="submit" className="col-span-full mt-2 justify-center">
              Enviar mensagem
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm text-cream-dim">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-2xl border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream-dim/60 focus:border-gold-400"
      />
    </label>
  );
}
