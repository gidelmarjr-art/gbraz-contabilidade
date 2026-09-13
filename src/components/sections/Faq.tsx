import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const FAQS = [
  {
    question: "Preciso trocar de contador durante o ano fiscal?",
    answer:
      "Não. A migração pode acontecer a qualquer momento cuidamos de toda a transição, incluindo a solicitação dos arquivos com o escritório anterior, sem gerar multas ou perda de prazos.",
  },
  {
    question: "Vocês atendem empresas de qualquer porte?",
    answer:
      "Atendemos MEI, microempresas e pequenas e médias empresas de diversos segmentos, com planos de atendimento ajustados ao volume de operações de cada negócio.",
  },
  {
    question: "Como funciona a comunicação no dia a dia?",
    answer:
      "Você tem um canal direto com o time responsável pela sua conta sem centrais de atendimento genéricas. Dúvidas rápidas são respondidas por WhatsApp ou e-mail.",
  },
  {
    question: "Quais documentos preciso enviar todo mês?",
    answer:
      "Isso varia conforme o regime tributário e o tipo de negócio. No início do contrato, montamos uma checklist personalizada para deixar o envio simples e recorrente.",
  },
  {
    question: "Vocês ajudam no planejamento tributário anual?",
    answer:
      "Sim. Revisamos o enquadramento e o regime tributário periodicamente para identificar oportunidades legais de redução de carga tributária antes que decisões importantes precisem ser tomadas.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-navy-950 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.7fr_1fr] lg:gap-24 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Dúvidas comuns antes de fechar com a gente."
            description="Não achou a sua pergunta aqui? Fale com o time pelo formulário de contato."
          />
        </Reveal>

        <div className="flex flex-col">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.06}>
                <div className="border-b border-cream/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl text-cream">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-400"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-14 text-sm leading-relaxed text-cream-dim">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
