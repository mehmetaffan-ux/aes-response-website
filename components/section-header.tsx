import { Reveal } from "@/components/reveal";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {label ? (
        <p className="mb-4 text-sm font-semibold uppercase text-cyan-300">
          {label}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
        {description}
      </p>
    </Reveal>
  );
}
