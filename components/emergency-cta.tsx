import Link from "next/link";
import { ArrowRight, Radio } from "lucide-react";

import { Reveal } from "@/components/reveal";

export function EmergencyCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-pad">
        <Reveal>
          <div className="rounded-lg border border-cyan-200/18 bg-[linear-gradient(135deg,rgba(8,47,73,0.78),rgba(2,6,23,0.88)_54%,rgba(20,83,45,0.34))] p-6 shadow-2xl shadow-cyan-950/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-5 flex size-12 items-center justify-center rounded-lg border border-cyan-200/20 bg-cyan-300/10 text-cyan-200">
                  <Radio aria-hidden="true" className="size-5" />
                </div>
                <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Request Emergency Transfer Support
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                  Share vessel location, cargo condition, required service,
                  urgency, damage summary and weather conditions so the first
                  feasibility review can start with the right technical context.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Request Emergency Transfer Support
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
