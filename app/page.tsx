import type { Metadata } from "next";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileText,
  Gauge,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Ship,
  Waves,
  Wrench,
} from "lucide-react";

import { CapabilityCTA } from "@/components/capability-cta";
import { EmergencyCta } from "@/components/emergency-cta";
import { HeroVisual } from "@/components/hero-visual";
import { iconMap } from "@/components/icon-map";
import { InsightCard } from "@/components/insight-card";
import { JsonLd } from "@/components/json-ld";
import { ProcessTimeline } from "@/components/process-timeline";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { articles, equipment, services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emergency Marine Transfer & STS Response Support",
  description:
    "Emergency marine transfer, STS response support, deployable equipment planning, portable pumping and pollution prevention coordination across the Aegean, Türkiye, Black Sea and Eastern Mediterranean.",
  openGraph: {
    title: "Emergency Marine Transfer & STS Response Support",
    description:
      "AES Response supports emergency STS, cargo transfer, portable pumping, deployable equipment configuration and safety-focused marine field coordination.",
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
    value: "Initial technical assessment",
    icon: Gauge,
  },
  {
    label: "Deployable Equipment",
    value: "Fenders, hoses, pumps and containment",
    icon: PackageCheck,
  },
  {
    label: "Engineering Coordination",
    value: "Marine transfer method inputs",
    icon: Wrench,
  },
  {
    label: "HSE Controls",
    value: "Field setup and transfer monitoring support",
    icon: ShieldCheck,
  },
];

const trustStrip = [
  "Deployable equipment configuration",
  "Marine engineering coordination",
  "Safety-focused field support",
  "Authority & insurer-ready documentation",
];

const capabilityStrip = [
  {
    title: "Emergency Cargo Transfer",
    body: "Controlled cargo movement planning for distressed vessel situations.",
    icon: Ship,
  },
  {
    title: "STS Fendering Support",
    body: "Floating pneumatic fender arrangements configured per operation.",
    icon: Waves,
  },
  {
    title: "Portable Pumping",
    body: "Hydraulic pump and power pack planning for cargo, bunker, slop or water removal.",
    icon: Gauge,
  },
  {
    title: "Cargo Hose Configuration",
    body: "Hose package and connection review based on product, pressure and manifold data.",
    icon: Cable,
  },
  {
    title: "Pollution Prevention",
    body: "Containment, watchkeeping and spill prevention controls around transfer work.",
    icon: ShieldCheck,
  },
  {
    title: "Marine Engineering Attendance",
    body: "Field coordination support for setup, monitoring, reporting and demobilization.",
    icon: Anchor,
  },
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

const firstDayPriorities = [
  {
    title: "Technical Feasibility",
    body: "Transfer path, cargo condition, manifold access, receiving asset suitability and stop-work limits.",
    icon: Wrench,
  },
  {
    title: "Equipment Readiness",
    body: "Fenders, hoses, pumps, spill response, gas detection, connection hardware and communication package.",
    icon: PackageCheck,
  },
  {
    title: "Stakeholder Documentation",
    body: "Situation summary, method statement inputs, risk assessment support and completion records.",
    icon: FileText,
  },
  {
    title: "Pollution Exposure Control",
    body: "Prevention-led planning around containment, watchkeeping, transfer pressure and emergency shutdown readiness.",
    icon: ShieldCheck,
  },
];

const operationSupportSteps = [
  {
    title: "Initial Technical Assessment",
    summary:
      "Review vessel location, casualty condition, cargo state, immediate risks, access constraints and the intended transfer objective.",
  },
  {
    title: "Equipment Configuration",
    summary:
      "Select equipment categories for planning, including fenders, hoses, pumps, power packs, manifold accessories and pollution prevention support.",
  },
  {
    title: "Mobilization Planning",
    summary:
      "Coordinate staging route, personnel profile, documentation inputs, receiving asset interface and local approval dependencies.",
  },
  {
    title: "On-Site Setup & Coordination",
    summary:
      "Support deck setup, fendering, hose routing, connection checks, communication protocol and field coordination with appointed stakeholders.",
  },
  {
    title: "Transfer Monitoring Support",
    summary:
      "Maintain transfer watchkeeping inputs around pressure behavior, leak checks, pollution exposure, weather limits and stop-work criteria.",
  },
  {
    title: "Demobilization & Reporting",
    summary:
      "Support close-out records, quantities, observations, equipment recovery notes and demobilization reporting for the response file.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <main>
        <Link
          href="/contact"
          className="fixed bottom-5 right-6 z-40 hidden items-center justify-center gap-2 rounded-lg border border-cyan-100/25 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-cyan-950/35 transition hover:bg-cyan-200 2xl:inline-flex"
        >
          Request Transfer Support
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>

        <section className="relative overflow-hidden border-b border-cyan-200/10 py-6 md:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_34%,rgba(103,232,249,0.12),transparent_32%),radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.08),transparent_30%)]" />
          <div className="container-pad relative grid items-center gap-6 md:gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <div className="max-w-3xl">
                <h1 className="text-[2.05rem] font-semibold leading-[1.06] text-white sm:text-4xl md:text-5xl xl:text-[3.25rem]">
                  Emergency Marine Transfer & STS Response Support.
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base md:mt-5 md:text-lg md:leading-7">
                  AES Response supports time-critical cargo transfer, STS
                  preparation, lightering, salvage pumping and pollution
                  prevention with deployable equipment planning, marine
                  engineering coordination and safety-focused field attendance
                  across the Aegean, Türkiye, Black Sea and Eastern
                  Mediterranean.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    Request Emergency Transfer Support
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                  <Link
                    href="/capability-statement"
                    className="inline-flex items-center justify-center rounded-lg border border-cyan-200/22 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-white/8"
                  >
                    Request Capability Statement
                  </Link>
                  <Link
                    href="/equipment"
                    className="hidden items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-slate-300 transition hover:text-cyan-100 sm:inline-flex"
                  >
                    Explore Capabilities
                  </Link>
                </div>

                <div className="mt-6 hidden gap-2 md:grid md:grid-cols-2">
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
              <div className="grid gap-3 md:gap-4 lg:grid-cols-[1fr_0.52fr]">
                <div className="hidden gap-3 rounded-lg border border-cyan-200/14 bg-slate-950/58 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl md:grid md:grid-cols-2 xl:grid-cols-4">
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
                <aside className="rounded-lg border border-cyan-200/16 bg-[linear-gradient(145deg,rgba(15,23,42,0.78),rgba(8,47,73,0.32))] p-4 shadow-2xl shadow-black/18 backdrop-blur-xl md:p-5">
                  <div className="grid gap-2 md:hidden">
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
                  <div className="mt-4 flex items-center gap-3 border-t border-cyan-200/10 pt-4 md:mt-0 md:border-t-0 md:pt-0">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-cyan-200/16 bg-cyan-300/10 text-cyan-200">
                      <ClipboardCheck aria-hidden="true" className="size-5" strokeWidth={1.8} />
                    </span>
                    <h2 className="text-base font-semibold text-white">
                      Response Intake Checklist
                    </h2>
                  </div>
                  <div className="mt-4 grid gap-2 border-t border-cyan-200/10 pt-4 sm:grid-cols-2 lg:grid-cols-1">
                    {intakeChecklist.map((item, index) => (
                      <div
                        key={item}
                        className={`items-center gap-2 text-sm leading-5 text-slate-300 ${
                          index > 3 ? "hidden md:flex" : "flex"
                        }`}
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

        <section className="border-b border-cyan-200/10 bg-slate-950/48 py-8 md:py-12">
          <div className="container-pad">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {capabilityStrip.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.03}>
                    <article className="h-full rounded-lg border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(15,23,42,0.72),rgba(2,6,23,0.82))] p-4 shadow-2xl shadow-black/10">
                      <span className="flex size-10 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                        <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                      </span>
                      <h2 className="mt-4 text-sm font-semibold leading-snug text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        {item.body}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-cyan-200/10 bg-[linear-gradient(180deg,rgba(3,18,30,0.58),rgba(2,6,23,0.76))] py-10 md:py-24">
          <div className="container-pad">
            <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold leading-tight text-white md:text-5xl">
                    Built for the first 24 hours of a marine casualty.
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300 md:mt-5 md:text-base md:leading-8">
                    The first day of a casualty response often decides the quality
                    of the next week. AES Response is designed to help owners,
                    managers and appointed stakeholders move quickly from
                    incomplete incident data to a controlled transfer option, with
                    practical attention to cargo condition, vessel access,
                    pollution exposure, weather window and authority review.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {firstDayPriorities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.title} delay={index * 0.04}>
                      <article className="h-full rounded-lg border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(15,23,42,0.82),rgba(8,47,73,0.26))] p-5 shadow-2xl shadow-black/16">
                        <span className="flex size-11 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                          <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                        </span>
                        <h3 className="mt-5 text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          {item.body}
                        </p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-24">
          <div className="container-pad">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionHeader
                  label="Response Workflow"
                  title="How AES Response Supports an Operation"
                  description="The workflow is structured to turn incomplete casualty information into a controlled transfer support plan, then maintain equipment, field coordination, monitoring and reporting discipline through close-out."
                />
                <Reveal delay={0.12} className="mt-8 rounded-lg border border-cyan-200/14 bg-slate-950/56 p-6">
                  <Compass aria-hidden="true" className="size-8 text-cyan-200" />
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    AES Response supports owners, managers and appointed
                    stakeholders with practical marine engineering coordination,
                    equipment configuration and field support inputs. Authority,
                    port, insurer and class requirements remain project-specific.
                  </p>
                </Reveal>
              </div>
              <ProcessTimeline steps={operationSupportSteps} />
            </div>
          </div>
        </section>

        <section className="border-y border-cyan-200/10 bg-[linear-gradient(180deg,rgba(3,18,30,0.74),rgba(2,6,23,0.78))] py-14 md:py-24">
          <div className="container-pad">
            <Reveal className="grid gap-8 rounded-lg border border-cyan-200/14 bg-[linear-gradient(135deg,rgba(15,23,42,0.84),rgba(2,6,23,0.9)_52%,rgba(8,47,73,0.34))] p-6 shadow-2xl shadow-black/18 md:p-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <span className="flex size-12 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                  <LockKeyhole aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </span>
                <h2 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
                  Representative scenarios, not disclosed casualty references.
                </h2>
              </div>
              <div>
                <p className="text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                  Real emergency operations involve sensitive client, vessel,
                  cargo, insurance, legal and authority-facing information. AES
                  Response does not publish vessel names, client names, cargo
                  details, locations or real operation photographs without
                  permission. Public materials use representative scenarios and
                  clearly labelled illustrative renderings to explain response
                  patterns without disclosing protected incident context.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/representative-response-scenarios"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    View Representative Scenarios
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                  <Link
                    href="/confidentiality"
                    className="inline-flex items-center justify-center rounded-lg border border-cyan-200/18 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/35 hover:bg-white/[0.04]"
                  >
                    Confidentiality Approach
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CapabilityCTA compact />

        <section className="py-14 md:py-28">
          <div className="container-pad">
            <SectionHeader
              label="Services"
              title="Emergency transfer capability for distressed vessel scenarios."
              description="AES Response structures emergency transfer work around feasibility, safety controls, equipment readiness, documentation discipline and clear stakeholder communication."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-cyan-200/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.42),rgba(2,6,23,0.72))] py-14 md:py-24">
          <div className="container-pad">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                label="Equipment Capability"
                title="Deployable equipment categories for early transfer planning."
                description="Equipment is configured per operation after vessel condition, cargo compatibility, access, manifold data, weather and stakeholder requirements are reviewed. Public descriptions are capability categories, not unrestricted inventory claims."
              />
              <Reveal>
                <Link
                  href="/equipment"
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-200/22 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-white/8"
                >
                  View equipment capability
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {equipment.map((item, index) => {
                const Icon = iconMap[item.icon];

                return (
                  <Reveal key={item.title} delay={index * 0.04}>
                    <article className="h-full rounded-lg border border-cyan-200/14 bg-slate-950/58 p-5 shadow-2xl shadow-black/12 transition hover:border-cyan-200/32 hover:bg-slate-900/62">
                      <div className="flex items-start gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                          <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold leading-snug text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-slate-400">
                            {item.summary}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-cyan-200/10 bg-[linear-gradient(180deg,rgba(3,18,30,0.76),rgba(2,6,23,0.78))] py-14 md:py-28">
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
