import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

import { Reveal } from "@/components/reveal";
import type { Article } from "@/lib/data";

type InsightCardProps = {
  article: Article;
  index?: number;
};

export function InsightCard({ article, index = 0 }: InsightCardProps) {
  return (
    <Reveal delay={index * 0.04}>
      <article className="group relative h-full overflow-hidden rounded-lg border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(15,23,42,0.86),rgba(2,6,23,0.76)_58%,rgba(20,83,45,0.22))] p-6 shadow-2xl shadow-black/16 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/38">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300/70 via-teal-300/45 to-amber-200/45" />
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg border border-cyan-200/16 bg-cyan-300/10 text-cyan-200">
              <FileText aria-hidden="true" className="size-4" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase text-cyan-200">
                Technical article
              </p>
              <p className="mt-1 text-xs text-slate-500">{article.category}</p>
            </div>
          </div>
          <span className="rounded-md border border-cyan-200/12 bg-white/[0.03] px-2.5 py-1 text-xs font-semibold text-slate-300">
            {article.readingTime}
          </span>
        </div>
        <h3 className="mt-5 text-xl font-semibold leading-snug text-white">
          <Link href={`/insights/${article.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {article.title}
          </Link>
        </h3>
        <p className="mt-4 text-sm leading-6 text-slate-400">{article.excerpt}</p>
        <div className="mt-7 flex items-center justify-between gap-4 border-t border-cyan-200/10 pt-5 text-sm font-semibold text-cyan-200">
          <span>Read technical note</span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </article>
    </Reveal>
  );
}
