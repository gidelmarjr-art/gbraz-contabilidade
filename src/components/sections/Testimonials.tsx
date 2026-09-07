import { Quote } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

/**
 * ⚠️ Depoimentos de exemplo — substitua pelos relatos reais de clientes
 * da G Braz antes de publicar o site.
 */
const TESTIMONIALS = [
  {
    quote:
      "Desde que fechamos com a G Braz, deixamos de correr atrás de prazo. Eles avisam antes da gente perguntar.",
    name: "Cliente exemplo",
    role: "Comércio varejista",
  },
  {
    quote:
      "O que mais valorizo é a clareza: sei exatamente onde estamos e o que precisa ser ajustado a cada mês.",
    name: "Cliente exemplo",
    role: "Prestação de serviços",
  },
  {
    quote:
      "Migramos de outro escritório e a diferença no atendimento foi imediata — respostas rápidas e diretas.",
    name: "Cliente exemplo",
    role: "Indústria de pequeno porte",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-navy-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            title="O que dizem os clientes que confiam na G Braz."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name + item.quote.slice(0, 10)} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-cream/10 bg-navy-800/30 p-8 transition-colors duration-300 hover:border-gold-500/30">
                <Quote className="text-gold-500/70" size={26} strokeWidth={1.5} />
                <blockquote className="mt-6 flex-1 font-display text-xl italic leading-relaxed text-cream/90">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-cream/10 pt-4 text-sm">
                  <span className="block font-semibold text-cream">
                    {item.name}
                  </span>
                  <span className="text-cream-dim">{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
