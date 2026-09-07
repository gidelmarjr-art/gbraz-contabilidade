import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-950 shadow-[0_8px_30px_-8px_rgba(198,133,56,0.55)] hover:bg-gold-300 hover:shadow-[0_8px_34px_-6px_rgba(255,231,128,0.6)] hover:-translate-y-0.5",
  secondary:
    "border border-cream/20 text-cream hover:border-gold-400/70 hover:text-gold-300 hover:-translate-y-0.5",
  ghost: "text-cream/80 hover:text-gold-300",
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", children, className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.as === "a") {
    const { as: _as, ...anchorRest } = rest as LinkProps;
    return (
      <a className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonRest } = rest as ButtonProps;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
