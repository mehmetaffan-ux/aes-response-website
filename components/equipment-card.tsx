import { iconMap } from "@/components/icon-map";
import { Reveal } from "@/components/reveal";
import type { EquipmentItem } from "@/lib/data";

type EquipmentCardProps = {
  item: EquipmentItem;
  index?: number;
};

export function EquipmentCard({ item, index = 0 }: EquipmentCardProps) {
  const Icon = iconMap[item.icon];

  return (
    <Reveal delay={index * 0.04}>
      <article className="h-full rounded-lg border border-cyan-200/14 bg-slate-950/56 p-6 transition hover:border-cyan-200/35 hover:bg-slate-900/75">
        <span className="flex size-11 items-center justify-center rounded-lg border border-teal-200/18 bg-teal-300/10 text-teal-200">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
        </span>
        <h3 className="mt-5 text-lg font-semibold leading-snug text-white">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{item.summary}</p>
        <p className="mt-5 border-t border-cyan-200/10 pt-4 text-sm leading-6 text-slate-300">
          {item.capability}
        </p>
      </article>
    </Reveal>
  );
}
