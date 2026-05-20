import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";

import { Reveal } from "@/components/reveal";

type CapabilityCTAProps = {
  compact?: boolean;
};

export function CapabilityCTA({ compact = false }: CapabilityCTAProps) {
  return (
    <section className={compact ? "py-6 md:py-10" : "py-12 md:py-20"}>
      <div className="container-pad">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-cyan-200/16 bg-[linear-gradient(135deg,rgba(15,23,42,0.82),rgba(3,18,30,0.9)_48%,rgba(8,47,73,0.44))] p-6 shadow-2xl shadow-black/18 md:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex gap-4">
                <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                  <FileCheck2 aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                    Need a capability statement for owners, insurers or authorities?
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                    Request a concise AES Response capability summary covering service
                    scope, response workflow, equipment categories and documentation
                    approach for early stakeholder review.
                  </p>
                </div>
              </div>
              <Link
                href="/capability-statement"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-100/20 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Request Capability Statement
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
