import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-cyan-200/10 py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(111,156,188,0.11),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.36),rgba(2,6,23,0.62))]" />
      <div className="container-pad relative">
        <Reveal className="max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-xl">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
