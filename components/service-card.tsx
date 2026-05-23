"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { iconMap } from "@/components/icon-map";
import { Reveal } from "@/components/reveal";
import type { Service } from "@/lib/data";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon];
  const [imageFailed, setImageFailed] = useState(false);
  const showMedia = Boolean(service.imagePath);
  const showImage = showMedia && !imageFailed;

  return (
    <Reveal delay={index * 0.04}>
      <article className="group relative h-full overflow-hidden rounded-lg border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(15,23,42,0.86),rgba(2,6,23,0.72)_56%,rgba(8,47,73,0.34))] shadow-2xl shadow-black/18 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/38 hover:shadow-cyan-950/25">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
        <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-cyan-300/8 blur-2xl transition group-hover:bg-cyan-300/12" />

        {showMedia ? (
          <div className="relative aspect-[16/9] overflow-hidden border-b border-cyan-200/10 bg-slate-950">
            {showImage ? (
              <Image
                src={service.imagePath as string}
                alt={service.imageAlt ?? service.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain transition duration-500 group-hover:scale-[1.02]"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(103,232,249,0.12),transparent_34%),rgba(2,6,23,0.94)]">
                <Icon
                  aria-hidden="true"
                  className="size-10 text-cyan-200"
                  strokeWidth={1.7}
                />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.72))]" />
            <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-lg border border-cyan-200/18 bg-slate-950/72 text-cyan-200 backdrop-blur">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </div>
          </div>
        ) : null}

        <div className="relative p-6">
          <div className="flex items-start justify-between gap-5">
            {!showMedia ? (
              <span className="flex size-12 items-center justify-center rounded-lg border border-cyan-200/22 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-950/20">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
            ) : (
              <span className="text-xs font-semibold uppercase text-cyan-200">
                Response support
              </span>
            )}
            <ArrowUpRight
              aria-hidden="true"
              className="size-5 text-slate-500 transition group-hover:text-cyan-200"
            />
          </div>
          <h3 className="mt-6 text-xl font-semibold leading-snug text-white">
            {service.title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">{service.summary}</p>
          <Link
            href={`/services#${service.slug}`}
            className="relative mt-6 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            View capability
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
