import type { Metadata } from "next";

import { EmergencyCta } from "@/components/emergency-cta";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { SectionHeader } from "@/components/section-header";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Emergency Response Process",
  description:
    "A six-step process for incident intake, risk assessment, authority coordination, mobilization, controlled transfer and demobilization reporting.",
  openGraph: {
    title: "Emergency Response Process",
    description:
      "From incident intake and feasibility assessment to controlled transfer and completion reporting.",
    url: "/process",
  },
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        title="A structured response process for high-pressure maritime incidents."
        description="The process is designed to turn initial casualty information into a controlled transfer plan with clear coordination, execution discipline and completion records."
      />

      <section className="py-16 md:py-24">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            label="Six Steps"
            title="From first details to documented demobilization."
            description="Each phase is built around commercial clarity, safety control and practical decision support for owners and appointed stakeholders."
          />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <EmergencyCta />
    </main>
  );
}
