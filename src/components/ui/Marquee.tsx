import type { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
  reverse?: boolean;
  speed?: number;
}

/**
 * Faixa de texto em looping infinito (efeito visto nos sites de referência).
 * Duplicamos a lista e animamos via CSS puro para não pesar no JS.
 */
export function Marquee({ items, className = "", reverse = false, speed = 28 }: MarqueeProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className={`flex w-max shrink-0 items-center gap-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8">
            {item}
            <span className="text-gold-500/50" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
