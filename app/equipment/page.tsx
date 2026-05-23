import type { Metadata } from "next";
import { ClipboardCheck, Gauge, ShieldCheck, Wrench } from "lucide-react";

import { CapabilityCTA } from "@/components/capability-cta";
import { EmergencyCta } from "@/components/emergency-cta";
import { EquipmentCard } from "@/components/equipment-card";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { equipment } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipment Capability | Emergency STS, Pumping & Pollution Prevention",
  description:
    "Equipment capability categories for emergency STS, cargo transfer, salvage pumping, bunker removal and pollution prevention planning.",
  openGraph: {
    title: "Equipment Capability | Emergency STS, Pumping & Pollution Prevention",
    description:
      "Cargo transfer hoses, floating pneumatic STS fenders, hydraulic power packs, submersible pumps, pollution prevention and manifold accessories.",
    url: "/equipment",
  },
};

const equipmentJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AES Response Equipment Capability",
  description: metadata.description,
  url: `${siteConfig.url}/equipment`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
  },
};

const planningControls = [
  {
    title: "Compatibility",
    body: "Cargo, bunker, slop and chemical handling requirements are reviewed before hoses, pumps or connection hardware are proposed.",
    icon: Gauge,
  },
  {
    title: "Interface",
    body: "Manifold standards, flange data, deck access, freeboard, receiving asset suitability and transfer geometry guide the package.",
    icon: Wrench,
  },
  {
    title: "HSE Controls",
    body: "Gas detection, pollution prevention, watchkeeping, stop-work limits and emergency shutdown readiness are built into planning inputs.",
    icon: ShieldCheck,
  },
  {
    title: "Documentation",
    body: "Equipment lists, method statement inputs and completion records are prepared for owner, authority and insurer review where appropriate.",
    icon: ClipboardCheck,
  },
];

export default function EquipmentPage() {
  return (
    <main>
      <JsonLd data={equipmentJsonLd} />
      <PageHero
        title="Equipment capability for marine emergency transfer operations."
        description="AES Response structures equipment planning around cargo compatibility, STS interface control, temporary pumping requirements, pollution prevention and documented stakeholder review. Equipment categories are configured per operation and remain subject to project assessment."
      />

      <section className="border-b border-cyan-200/10 bg-slate-950/36 py-12 md:py-20">
        <div className="container-pad">
          <SectionHeader
            label="Equipment Planning Basis"
            title="Configured by operation, not described as a fixed public inventory."
            description="Emergency transfer work depends on vessel condition, cargo data, access, receiving asset interface, weather and local permissions. Public equipment descriptions are therefore presented as capability categories rather than undisclosed inventory claims."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {planningControls.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="h-full rounded-lg border border-cyan-200/14 bg-slate-950/58 p-5">
                    <span className="flex size-11 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                    </span>
                    <h2 className="mt-5 text-lg font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-pad">
          <SectionHeader
            label="Equipment Capability"
            title="Core equipment categories used for emergency transfer feasibility."
            description="Each category below describes the operational purpose, typical planning scope, key notes and the visual approach used for public explanation without implying unrestricted public disclosure of real operations."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {equipment.map((item, index) => (
              <EquipmentCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CapabilityCTA compact />

      <section className="border-y border-cyan-200/10 bg-slate-950/42 py-12 md:py-20">
        <div className="container-pad">
          <Reveal className="grid gap-6 rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6 md:p-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Capability note
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Final equipment scope must be confirmed against incident facts,
                appointed stakeholder requirements and local approvals before
                mobilization. The categories listed here are a planning
                foundation for early feasibility review.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Cargo compatibility review",
                "Manifold and flange confirmation",
                "Weather and vessel motion limits",
                "Authority documentation inputs",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-cyan-200/10 bg-white/[0.03] p-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <EmergencyCta />
    </main>
  );
}
