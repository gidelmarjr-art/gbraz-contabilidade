interface LogoMarkProps {
  variant?: "full" | "mark";
  className?: string;
}

/**
 * Reconstrução em código da marca G BRAZ Contabilidade a partir do PDF de
 * identidade visual enviado (paleta navy + dourado). Usa apenas texto e CSS,
 * então escala com nitidez em qualquer tamanho de tela.
 */
export function LogoMark({ variant = "full", className = "" }: LogoMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold-500/70">
        <span className="font-display text-xl italic text-gold-gradient">G</span>
      </span>
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-semibold tracking-wide text-gold-gradient">
            BRAZ
          </span>
          <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-cream-dim">
            Contabilidade
          </span>
        </span>
      )}
    </div>
  );
}
