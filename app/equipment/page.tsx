import type { Metadata } from "next";

import { CapabilityCTA } from "@/components/capability-cta";
import { EmergencyCta } from "@/components/emergency-cta";
import { EquipmentCard } from "@/components/equipment-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { equipment } from "@/lib/data";

export const metadata: Metadata = {
  title: "Emergency STS Equipment Capability",
  description:
    "Equipment capability categories for emergency lightering, salvage pumping, bunker removal and pollution prevention operations.",
  openGraph: {
    title: "Emergency STS Equipment Capability",
    description:
      "Pneumatic fenders, hoses, pumps, adapters, oil spill response, gas detection, mooring, rigging and communications planning.",
    url: "/equipment",
  },
};

export default function EquipmentPage() {
  return (
    <main>
      <PageHero
        title="Equipment capability for controlled emergency transfer operations."
        description="Emergency STS and lightering packages are selected after reviewing cargo compatibility, vessel condition, manifold interface, weather, access and local authority controls."
      />

      <section className="py-16 md:py-24">
        <div className="container-pad">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {equipment.map((item, index) => (
              <EquipmentCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CapabilityCTA compact />

      <section className="border-y border-cyan-200/10 bg-slate-950/42 py-16 md:py-24">
        <div className="container-pad">
          <Reveal className="grid gap-6 rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6 md:p-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Capability note
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Final equipment scope must be confirmed against incident facts
                before mobilization. The categories listed here are a planning
                foundation for emergency transfer readiness.
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
