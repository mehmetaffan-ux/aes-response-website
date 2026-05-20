import type { Metadata } from "next";

import { CapabilityCTA } from "@/components/capability-cta";
import { EmergencyCta } from "@/components/emergency-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Emergency Maritime Response Services",
  description:
    "Service overview for emergency cargo transfer, STS lightering, salvage pumping, bunker removal, pollution prevention and documentation support.",
  openGraph: {
    title: "Emergency Maritime Response Services",
    description:
      "Commercial emergency STS, lightering, pumping, bunker removal and documentation support for distressed vessels.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Emergency maritime response services for distressed vessels."
        description="AES Response focuses on controlled ship-to-ship transfer, lightering, salvage pumping, bunker removal, pollution prevention and documentation support for commercial casualty scenarios."
      />

      <section className="py-16 md:py-24">
        <div className="container-pad">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CapabilityCTA compact />

      <section className="border-y border-cyan-200/10 bg-slate-950/42 py-16 md:py-24">
        <div className="container-pad grid gap-5">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <article
                id={service.slug}
                className="scroll-mt-28 rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6 md:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm font-semibold text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      {service.summary}
                    </p>
                  </div>
                  <ul className="grid gap-3">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="rounded-lg border border-cyan-200/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <EmergencyCta />
    </main>
  );
}
