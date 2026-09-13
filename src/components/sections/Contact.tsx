import type { FormEvent } from "react";
import { Clock, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

/**
 * Números de WhatsApp do escritório. O primeiro é usado como destino
 * padrão das mensagens enviadas pelo formulário abaixo.
 */
const WHATSAPP_NUMBERS = [
  { label: "(99) 98194-6846", phone: "5599981946846" },
  { label: "(99) 98417-3115", phone: "5599984173115" },
];

const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da G Braz Contabilidade e gostaria de mais informações.";

function buildWhatsappLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * ⚠️ Dados de contato de exemplo — atualize e-mail, endereço e horário
 * com as informações reais do escritório.
 */
const CONTACT_INFO = [
  ...WHATSAPP_NUMBERS.map(({ label, phone }) => ({
    icon: FaWhatsapp,
    label,
    href: buildWhatsappLink(phone, WHATSAPP_DEFAULT_MESSAGE),
  })),
  {
    icon: Mail,
    label: "gidelmarbraz@gmail.com",
    href: "mailto:gidelmarbraz@gmail.com",
  },
  { icon: Clock, label: "Seg. a sex., 8h30 às 18h" },
  { icon: Clock, label: "Sab, 8h30 às 12h" },
];

const MAPS_SHARE_URL = "https://maps.app.goo.gl/kkzqbxeHGniGnnwd9";
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Gbraz+Contabilidade,-5.5199533,-47.4880498&z=17&output=embed";

export function Contact() {
  return (
    <section id="contato" className="relative bg-navy-900 py-28">
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
                  <Icon size={17} />
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
            onSubmit={handleContactSubmit}
          >
            <Field label="Nome" name="nome" placeholder="Seu nome completo" />
            <Field label="Empresa" name="empresa" placeholder="Nome da empresa" />
            <Field
              label="E-mail"
              name="email"
              type="email"
              placeholder="voce@gmail.com"
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
              Enviar pelo WhatsApp
            </Button>
          </form>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-12">
          <div className="overflow-hidden rounded-3xl border border-cream/10 bg-navy-900/30">
            <iframe
              title="Localização da G Braz Contabilidade no Google Maps"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full grayscale-[35%] contrast-125 sm:h-96"
            />
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                  <MapPin size={17} />
                </span>
                <span className="text-sm text-cream/90">
                  GBraz Contabilidade — Imperatriz, MA
                </span>
              </div>
              <a
                href={MAPS_SHARE_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
              >
                Abrir no Google Maps →
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);
  const nome = String(data.get("nome") ?? "").trim();
  const empresa = String(data.get("empresa") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const telefone = String(data.get("telefone") ?? "").trim();
  const mensagem = String(data.get("mensagem") ?? "").trim();

  const linhas = [
    "Olá! Vim pelo site da GBraz Contabilidade.",
    nome && `Nome: ${nome}`,
    empresa && `Empresa: ${empresa}`,
    email && `E-mail: ${email}`,
    telefone && `Telefone: ${telefone}`,
    mensagem && `Mensagem: ${mensagem}`,
  ].filter(Boolean);

  // Destino padrão do formulário: primeiro número de WhatsApp da lista acima.
  const destino = WHATSAPP_NUMBERS[0].phone;
  const link = buildWhatsappLink(destino, linhas.join("\n"));

  window.open(link, "_blank", "noopener,noreferrer");
  form.reset();
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
