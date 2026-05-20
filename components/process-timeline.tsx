import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import type { ProcessStep } from "@/lib/data";

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="relative grid gap-5 md:gap-6">
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-5 top-10 hidden w-px bg-cyan-200/18 md:block"
      />
      {steps.map((step, index) => (
        <Reveal key={step.title} delay={index * 0.04}>
          <li className="relative rounded-lg border border-cyan-200/14 bg-slate-950/58 p-5 md:ml-12 md:p-6">
            <span className="mb-4 flex size-10 items-center justify-center rounded-lg border border-cyan-200/20 bg-cyan-300/10 text-cyan-200 md:absolute md:-left-[68px] md:top-6">
              <CheckCircle2 aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </span>
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <span className="text-sm font-semibold text-cyan-200">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{step.summary}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
