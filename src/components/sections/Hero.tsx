import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Pill } from "../ui/Pill";

const HEADLINE_LINES = ["Números organizados,", "decisões mais seguras."];

const FEATURE_CHIPS = [
  "Atendimento consultivo",
  "Time especializado",
  "Prazos sempre em dia",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-950 pt-24 text-center"
    >
      {/* Fundo — degradês suaves na paleta navy/dourada */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(28,56,84,0.65), transparent 60%), radial-gradient(ellipse 45% 40% at 85% 90%, rgba(198,133,56,0.16), transparent 60%), radial-gradient(ellipse 45% 40% at 10% 85%, rgba(198,133,56,0.10), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-3xl"
        style={{
          background:
            "conic-gradient(from 180deg, #c68538, #ffe780, #cc8638, #c68538)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Pill>
            Escritório de contabilidade
            <span className="h-1 w-1 rounded-full bg-gold-400" />
            Imperatriz, MA
          </Pill>
        </motion.div>

        <h1 className="mt-8 font-display text-5xl font-medium leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
          {HEADLINE_LINES.map((line, i) => (
            <motion.span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 1 ? "text-gold-gradient italic" : ""}`}
                variants={item}
              >
                {line}
              </motion.span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-lg leading-relaxed text-cream-dim"
        >
          A GBraz cuida da contabilidade da sua empresa com precisão técnica
          e acompanhamento próximo, para você crescer sem surpresas.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button as="a" href="#contato" variant="secondary">
            <Phone size={15} />
            Agende uma conversa
          </Button>
          <Button as="a" href="#servicos">
            Conheça os serviços
            <ArrowRight size={16} />
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {FEATURE_CHIPS.map((chip) => (
            <Pill key={chip} className="text-cream-dim">
              {chip}
            </Pill>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-cream-dim/60 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mb-2 h-8 w-px bg-gradient-to-b from-gold-400 to-transparent"
        />
        Role para conhecer
      </motion.div>
    </section>
  );
}
