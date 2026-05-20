import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileCheck2,
  Gauge,
  Radio,
  ShieldCheck,
} from "lucide-react";

import { CapabilityCTA } from "@/components/capability-cta";
import { EmergencyCta } from "@/components/emergency-cta";
import { EquipmentCard } from "@/components/equipment-card";
import { HeroVisual } from "@/components/hero-visual";
import { InsightCard } from "@/components/insight-card";
import { JsonLd } from "@/components/json-ld";
import { ProcessTimeline } from "@/components/process-timeline";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { articles, equipment, processSteps, services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emergency STS and Cargo Transfer",
  description:
    "Rapid-response ship-to-ship transfer, emergency lightering, salvage pumping and pollution prevention support for distressed vessels across the Aegean, Turkiye, Black Sea and Eastern Mediterranean.",
  openGraph: {
    title: "Emergency STS and Cargo Transfer, When Every Hour Matters",
    description:
      "Aegean Emergency STS provides emergency STS, lightering, salvage pumping and pollution prevention support for distressed vessels.",
    url: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: siteConfig.regions.map((region) => ({
    "@type": "Place",
    name: region,
  })),
  knowsAbout: [
    "Emergency ship-to-ship cargo transfer",
    "STS lightering",
    "Salvage pumping",
    "Bunker removal",
    "Pollution prevention",
    "Distressed vessel cargo recovery",
  ],
};

const commandStatus = [
  {
    label: "Response Window",
    value: "Rapid feasibility review",
    icon: Gauge,
  },
  {
    label: "Cargo Risk",
    value: "Cargo data and transfer path",
    icon: ShieldCheck,
  },
  {
    label: "Pollution Watch",
    value: "Prevention controls staged",
    icon: Radio,
  },
  {
    label: "Authority Coordination",
    value: "Documentation prepared for review",
    icon: FileCheck2,
  },
];

const trustStrip = [
  "Emergency STS planning",
  "Cargo transfer support",
  "Salvage pumping readiness",
  "Pollution prevention package",
  "Authority & insurer documentation",
];

const intakeChecklist = [
  "Vessel name / IMO",
  "Current position",
  "Cargo type and quantity",
  "Damage summary",
  "Weather and sea state",
  "Crew status",
  "Contact person",
];

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <main>
        <Link
          href="/contact"
          className="fixed bottom-5 right-6 z-40 hidden items-center justify-center gap-2 rounded-lg border border-cyan-100/25 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-cyan-950/35 transition hover:bg-cyan-200 md:inline-flex"
        >
          Emergency Request
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>

        <section className="relative overflow-hidden border-b border-cyan-200/10 py-12 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_34%,rgba(103,232,249,0.12),transparent_32%),radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.08),transparent_30%)]" />
          <div className="container-pad relative grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <div className="max-w-3xl">
                <h1 className="text-4xl font-semibold leading-[1.05] text-white md:text-6xl xl:text-7xl">
                  Emergency STS and Cargo Transfer, When Every Hour Matters.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-xl">
                  Aegean Emergency STS provides rapid-response ship-to-ship
                  transfer, emergency lightering, salvage pumping and pollution
                  prevention support for distressed vessels across the Aegean,
                  Turkiye, Black Sea and Eastern Mediterranean.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    Activate Response Team
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                  <Link
                    href="/contact?subject=capability-statement"
                    className="inline-flex items-center justify-center rounded-lg border border-cyan-200/22 bg-white/5 px-6 py-4 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-white/8"
                  >
                    Request Capability Statement
                  </Link>
                  <Link
                    href="/equipment"
                    className="inline-flex items-center justify-center rounded-lg px-5 py-4 text-sm font-semibold text-slate-300 transition hover:text-cyan-100"
                  >
                    Explore Capabilities
                  </Link>
                </div>

                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {trustStrip.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm leading-5 text-slate-300"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="size-4 shrink-0 text-cyan-200"
                        strokeWidth={1.8}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <HeroVisual />
            </Reveal>

            <Reveal delay={0.18} className="lg:col-span-2">
              <div className="grid gap-4 lg:grid-cols-[1fr_0.52fr]">
                <div className="grid gap-3 rounded-lg border border-cyan-200/14 bg-slate-950/58 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:grid-cols-2 xl:grid-cols-4">
                  {commandStatus.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-lg border border-cyan-200/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex size-9 items-center justify-center rounded-lg border border-cyan-200/14 bg-cyan-300/10 text-cyan-200">
                            <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
                          </span>
                          <p className="text-xs font-semibold uppercase text-cyan-200">
                            {item.label}
                          </p>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
                <aside className="rounded-lg border border-cyan-200/16 bg-[linear-gradient(145deg,rgba(15,23,42,0.78),rgba(8,47,73,0.32))] p-5 shadow-2xl shadow-black/18 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-cyan-200/16 bg-cyan-300/10 text-cyan-200">
                      <ClipboardCheck aria-hidden="true" className="size-5" strokeWidth={1.8} />
                    </span>
                    <h2 className="text-base font-semibold text-white">
                      Response Intake Checklist
                    </h2>
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                    {intakeChecklist.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm leading-5 text-slate-300"
                      >
                        <span className="size-1.5 rounded-full bg-cyan-200" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </Reveal>
          </div>
        </section>

        <CapabilityCTA compact />

        <section className="py-20 md:py-28">
          <div className="container-pad">
            <SectionHeader
              label="Services"
              title="Emergency transfer capability for distressed vessel scenarios."
              description="AES Response supports owners and appointed stakeholders with commercial, safety-focused STS transfer, cargo recovery and pollution prevention services."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-cyan-200/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.42),rgba(2,6,23,0.72))] py-20 md:py-28">
          <div className="container-pad">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHeader
                label="Equipment"
                title="Mobilization categories for emergency STS and lightering."
                description="Equipment planning is shaped by cargo compatibility, sea state, vessel access, manifold geometry and authority controls. Final package scope is confirmed during incident assessment."
              />
              <div className="grid gap-5 md:grid-cols-2">
                {equipment.slice(0, 4).map((item, index) => (
                  <EquipmentCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-pad">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionHeader
                  label="Response Process"
                  title="A controlled sequence from first call to demobilization."
                  description="The response workflow turns incomplete casualty information into a practical transfer plan, then keeps execution documented for commercial and technical stakeholders."
                />
                <Reveal delay={0.12} className="mt-8 rounded-lg border border-cyan-200/14 bg-slate-950/56 p-6">
                  <Compass aria-hidden="true" className="size-8 text-cyan-200" />
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    Coverage focus includes the Aegean, Turkiye, Black Sea and
                    Eastern Mediterranean, with mobilization planning adjusted
                    to port, offshore and coastal response constraints.
                  </p>
                </Reveal>
              </div>
              <ProcessTimeline steps={processSteps} />
            </div>
          </div>
        </section>

        <section className="border-y border-cyan-200/10 bg-[linear-gradient(180deg,rgba(3,18,30,0.76),rgba(2,6,23,0.78))] py-20 md:py-28">
          <div className="container-pad">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                label="Knowledge Hub"
                title="Practical guidance for emergency STS decisions."
                description="SEO-ready insight pages explain the operational, equipment and documentation topics owners commonly need during a casualty response."
              />
              <Reveal>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-200/22 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-white/8"
                >
                  View all insights
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {articles.slice(0, 3).map((article, index) => (
                <InsightCard key={article.slug} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>

        <EmergencyCta />
      </main>
    </>
  );
}
