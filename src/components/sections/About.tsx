import { Check } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import contadorPhoto from "../../assets/images/contador.jpg";

const HIGHLIGHTS = [
  "Atendimento próximo, direto com quem cuida da sua conta",
  "Time especializado em obrigações fiscais e trabalhistas",
  "Tecnologia a favor da organização financeira do seu negócio",
];

export function About() {
  return (
    <section id="sobre" className="relative bg-navy-900 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
        <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold-500/20 via-transparent to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-gold-500/25">
            <img
              src={contadorPhoto}
              alt="Responsável pela G Braz Contabilidade em seu escritório"
              className="h-full w-full object-cover [filter:saturate(0.85)_contrast(1.05)]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(16,29,47,0) 55%, rgba(16,29,47,0.75) 100%), linear-gradient(100deg, rgba(16,29,47,0.35), transparent 60%)",
              }}
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-cream/10 bg-navy-950/90 px-5 py-3 text-center backdrop-blur-sm">
            <p className="font-display text-base text-cream">G Braz</p>
            <p className="text-xs text-cream-dim">Contador responsável</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Sobre a G Braz"
              title="Contabilidade pensada para apoiar decisões, não só cumprir obrigações."
              description="Acreditamos que contabilidade boa é aquela que se antecipa: que avisa antes do prazo, explica antes de perguntar e traduz números em decisões. É assim que acompanhamos cada cliente, com atenção ao que o seu negócio realmente precisa."
            />
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
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
      </div>
    </section>
  );
}
