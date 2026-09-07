import {
  Building2,
  Calculator,
  FileSpreadsheet,
  LineChart,
  ReceiptText,
  Users,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const SERVICES = [
  {
    icon: Building2,
    title: "Abertura e legalização de empresas",
    description:
      "Cuidamos de todo o processo de registro, enquadramento tributário e licenças para você começar com o pé direito.",
  },
  {
    icon: Calculator,
    title: "Contabilidade empresarial",
    description:
      "Escrituração contábil, balanços e demonstrativos entregues em dia, com relatórios que fazem sentido para o seu negócio.",
  },
  {
    icon: Users,
    title: "Departamento pessoal",
    description:
      "Folha de pagamento, admissões, rescisões e obrigações trabalhistas conduzidas com atenção a cada detalhe.",
  },
  {
    icon: ReceiptText,
    title: "Planejamento tributário",
    description:
      "Análise do regime tributário mais adequado para reduzir custos dentro da lei e evitar surpresas com o fisco.",
  },
  {
    icon: LineChart,
    title: "Consultoria financeira",
    description:
      "Leitura de indicadores e fluxo de caixa para apoiar decisões de investimento, precificação e crescimento.",
  },
  {
    icon: FileSpreadsheet,
    title: "Imposto de renda pessoa física",
    description:
      "Declaração completa e planejamento anual para sócios e administradores, com prazos sempre monitorados.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-navy-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Serviços"
            title="Suporte contábil completo, do CNPJ ao balanço."
            description="Cada serviço é conduzido pelo mesmo time, para que a sua empresa tenha uma visão única — e não informações espalhadas entre planilhas."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl border border-cream/10 bg-gradient-to-b from-navy-900/60 to-navy-900/20 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-[0_20px_50px_-20px_rgba(198,133,56,0.35)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500/20">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-cream">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
