import { Pill } from "./Pill";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <Pill>{eyebrow}</Pill>
      <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-cream sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-cream-dim">
          {description}
        </p>
      )}
    </div>
  );
}
