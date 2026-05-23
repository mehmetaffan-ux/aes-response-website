"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

import { iconMap } from "@/components/icon-map";
import { Reveal } from "@/components/reveal";
import type { EquipmentItem } from "@/lib/data";

type EquipmentCardProps = {
  item: EquipmentItem;
  index?: number;
};

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-cyan-200/10 pt-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
        {title}
      </p>
      <div className="mt-3 text-sm leading-6 text-slate-300">{children}</div>
    </div>
  );
}

export function EquipmentCard({ item, index = 0 }: EquipmentCardProps) {
  const Icon = iconMap[item.icon];
  const [imageFailed, setImageFailed] = useState(false);
  const showMedia = Boolean(item.imagePath);
  const showImage = showMedia && !imageFailed;
  const hasStructuredDetails = Boolean(
    item.purpose || item.typicalScope || item.operationalNotes || item.suggestedVisual,
  );

  return (
    <Reveal delay={index * 0.04}>
      <article className="group h-full overflow-hidden rounded-lg border border-cyan-200/14 bg-slate-950/56 transition hover:border-cyan-200/35 hover:bg-slate-900/75">
        {showMedia ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-cyan-200/10 bg-slate-950">
            {showImage ? (
              <Image
                src={item.imagePath as string}
                alt={item.imageAlt ?? item.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain transition duration-500 group-hover:scale-[1.02]"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(88,139,150,0.12),transparent_34%),rgba(2,6,23,0.94)]">
                <Icon
                  aria-hidden="true"
                  className="size-10 text-cyan-200"
                  strokeWidth={1.7}
                />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06),rgba(2,6,23,0.72))]" />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-cyan-200/16 bg-slate-950/72 px-3 py-2 text-xs font-semibold uppercase text-cyan-100 backdrop-blur">
              <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
              Equipment category
            </div>
          </div>
        ) : null}

        <div className="p-6">
          {!showMedia ? (
            <span className="flex size-11 items-center justify-center rounded-lg border border-teal-200/18 bg-teal-300/10 text-teal-200">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </span>
          ) : null}
          <h3
            className={
              showMedia
                ? "text-lg font-semibold leading-snug text-white"
                : "mt-5 text-lg font-semibold leading-snug text-white"
            }
          >
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">{item.summary}</p>

          {hasStructuredDetails ? (
            <div className="mt-6 grid gap-5">
              {item.purpose ? (
                <DetailBlock title="Purpose">
                  <p>{item.purpose}</p>
                </DetailBlock>
              ) : null}

              {item.typicalScope ? (
                <DetailBlock title="Typical scope">
                  <ul className="grid gap-2">
                    {item.typicalScope.map((scope) => (
                      <li key={scope} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-200/80" />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
              ) : null}

              {item.operationalNotes ? (
                <DetailBlock title="Operational notes">
                  <ul className="grid gap-2">
                    {item.operationalNotes.map((note) => (
                      <li key={note} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-200/80" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
              ) : null}

              {item.suggestedVisual ? (
                <DetailBlock title="Suggested visual">
                  <p className="text-slate-400">{item.suggestedVisual}</p>
                </DetailBlock>
              ) : null}
            </div>
          ) : (
            <p className="mt-5 border-t border-cyan-200/10 pt-4 text-sm leading-6 text-slate-300">
              {item.capability}
            </p>
          )}
        </div>
      </article>
    </Reveal>
  );
}
