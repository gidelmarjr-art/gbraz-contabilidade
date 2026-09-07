import type { ReactNode } from "react";

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-900/60 px-4 py-1.5 text-xs font-medium text-cream/85 backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}
