import { Check } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const HIGHLIGHTS = [
  "Atendimento próximo, direto com quem cuida da sua conta",
  "Time especializado em obrigações fiscais e trabalhistas",
  "Tecnologia a favor da organização financeira do seu negócio",
];

export function About() {
  return (
    <section id="sobre" className="relative bg-navy-900 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre a G Braz"
            title="Contabilidade pensada para apoiar decisões, não só cumprir obrigações."
            description="Acreditamos que contabilidade boa é aquela que se antecipa: que avisa antes do prazo, explica antes de perguntar e traduz números em decisões. É assim que acompanhamos cada cliente, com atenção ao que o seu negócio realmente precisa."
          />
        </Reveal>

        <div className="flex flex-col justify-center gap-4">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item} delay={i * 0.1}>
              <div className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-navy-800/40 p-5 transition-colors duration-300 hover:border-gold-500/40">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                  <Check size={15} />
                </span>
                <p className="text-base leading-relaxed text-cream/90">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
