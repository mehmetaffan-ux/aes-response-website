import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Anchor,
  ArrowRight,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  FileCheck2,
  FileText,
  Fuel,
  Gauge,
  MapPin,
  Radio,
  ShieldCheck,
  Ship,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AES Response Capability Statement | Emergency STS & Cargo Transfer",
  description:
    "Capability statement for Aegean Emergency STS / AES Response, covering emergency STS, lightering, salvage pumping, bunker removal, pollution prevention and documentation support.",
  openGraph: {
    title: "AES Response Capability Statement | Emergency STS & Cargo Transfer",
    description:
      "Capability statement for emergency STS, lightering, salvage pumping, bunker removal, pollution prevention and documentation support.",
    url: "/capability-statement",
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Aegean Emergency STS Capability Statement",
  description: metadata.description,
  url: `${siteConfig.url}/capability-statement`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
  },
};

type ServiceScope = {
  title: string;
  icon: LucideIcon;
  description: string;
  support: string[];
};

const serviceScopes: ServiceScope[] = [
  {
    title: "Emergency STS & Cargo Transfer",
    icon: Ship,
    description:
      "Controlled transfer planning for distressed vessels where cargo condition, draft, damage or environmental exposure requires early feasibility review.",
    support: [
      "Cargo condition and transfer path review.",
      "Casualty and receiving vessel interface planning.",
      "Transfer record structure for stakeholder review.",
    ],
  },
  {
    title: "STS Lightering",
    icon: Anchor,
    description:
      "Lightering support designed to reduce draft, relieve vessel stress or create safer onward movement options after a marine casualty.",
    support: [
      "Fendering and alongside arrangement inputs.",
      "Receiving asset suitability considerations.",
      "Weather window and stop-work limit planning.",
    ],
  },
  {
    title: "Salvage Pumping",
    icon: Gauge,
    description:
      "Portable pumping planning for cargo, bunker or water removal where vessel systems are restricted, damaged or unavailable.",
    support: [
      "Pump and power pack category selection.",
      "Temporary hose route and discharge review.",
      "Watchkeeping and pressure control inputs.",
    ],
  },
  {
    title: "Bunker Removal",
    icon: Fuel,
    description:
      "Structured bunker, diesel, lubricant or slop removal planning to reduce pollution exposure and support casualty management options.",
    support: [
      "Tank and quantity information review.",
      "Receiving unit and connection planning.",
      "Pollution prevention controls during transfer.",
    ],
  },
  {
    title: "Pollution Prevention",
    icon: ShieldCheck,
    description:
      "Prevention-led planning around containment, spill response readiness, transfer watchkeeping and emergency shutdown discipline.",
    support: [
      "Containment and response package planning.",
      "Deck watchkeeping and drip control inputs.",
      "Escalation and emergency stop considerations.",
    ],
  },
  {
    title: "Authority & Insurer Documentation Support",
    icon: FileText,
    description:
      "Authority and insurer-ready documentation approach for owners, managers and appointed stakeholders during early incident review.",
    support: [
      "Situation summary and method statement inputs.",
      "Risk assessment support and evidence capture.",
      "Completion record and demobilization notes.",
    ],
  },
];

const workflowSteps = [
  {
    title: "Incident intake",
    body: "Collect vessel particulars, position, cargo, damage summary, weather, crew status and immediate operational constraints.",
  },
  {
    title: "Feasibility and risk screen",
    body: "Review transfer viability, cargo hazards, vessel access, environmental exposure, interface limits and stop-work criteria.",
  },
  {
    title: "Stakeholder coordination",
    body: "Structure information for owners, managers, authorities, insurers, class representatives and other appointed stakeholders.",
  },
  {
    title: "Equipment and team planning",
    body: "Define equipment categories, connection hardware, personnel profile, staging route and mobilization sequence for review.",
  },
  {
    title: "Controlled transfer preparation",
    body: "Prepare transfer sequence considerations, communication plan, safety controls and pollution prevention measures before cargo movement.",
  },
  {
    title: "Operation support and completion records",
    body: "Support transfer watchkeeping, quantity records, observations, close-out notes and demobilization documentation.",
  },
];

const equipmentCategories = [
  { title: "Pneumatic STS fenders", icon: Waves },
  { title: "Cargo / bunker / selected chemical transfer hoses", icon: Cable },
  { title: "Portable pumps and hydraulic power packs", icon: Gauge },
  { title: "Manifold adapters, reducers and spool pieces", icon: Wrench },
  { title: "Pollution prevention package", icon: Droplets },
  { title: "Gas detection and safety equipment", icon: Activity },
  { title: "Mooring, rigging and communications", icon: Radio },
];

const documentationItems = [
  "Situation summary",
  "Response method statement inputs",
  "Risk assessment support",
  "Transfer sequence considerations",
  "Equipment list",
  "Communication plan",
  "Completion record",
];

const intakeChecklist = [
  "Vessel name and IMO number",
  "Current position",
  "Flag, class and manager details",
  "Cargo type and quantity",
  "Bunker/slop quantities if relevant",
  "Damage summary",
  "Flooding, fire, pollution or stability concerns",
  "Weather and sea state",
  "Crew status",
  "Receiving vessel / barge availability if known",
  "Primary contact person",
];

function CapabilitySection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 md:py-20">
      <div className="container-pad">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                {description}
              </p>
            </div>
          </Reveal>
          {children}
        </div>
      </div>
    </section>
  );
}

function CapabilityServiceCard({ service, index }: { service: ServiceScope; index: number }) {
  const Icon = service.icon;

  return (
    <Reveal delay={index * 0.04}>
      <article className="group relative h-full overflow-hidden rounded-lg border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(15,23,42,0.88),rgba(2,6,23,0.78)_56%,rgba(8,47,73,0.32))] p-5 shadow-2xl shadow-black/16 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 md:p-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/42 to-transparent" />
        <div className="flex items-start gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-cyan-200/20 bg-cyan-300/10 text-cyan-200">
            <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-xl font-semibold leading-snug text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {service.description}
            </p>
          </div>
        </div>
        <div className="mt-5 border-t border-cyan-200/10 pt-5">
          <p className="text-xs font-semibold uppercase text-cyan-200">
            Typical support includes
          </p>
          <ul className="mt-3 grid gap-2">
            {service.support.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-teal-200"
                  strokeWidth={1.8}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

function CapabilityWorkflow() {
  return (
    <div className="grid gap-4">
      {workflowSteps.map((step, index) => (
        <Reveal key={step.title} delay={index * 0.04}>
          <article className="relative rounded-lg border border-cyan-200/14 bg-slate-950/58 p-5 md:p-6">
            <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
              <span className="flex size-11 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{step.body}</p>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function CapabilityChecklist() {
  return (
    <Reveal>
      <div className="rounded-lg border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(15,23,42,0.82),rgba(2,6,23,0.88)_56%,rgba(8,47,73,0.32))] p-5 md:p-7">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
            <ClipboardCheck aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </span>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Emergency intake checklist
          </h2>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {intakeChecklist.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-lg border border-cyan-200/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-cyan-200"
                strokeWidth={1.8}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function CapabilityStatementPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <main>
        <section className="relative overflow-hidden border-b border-cyan-200/10 py-10 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(103,232,249,0.14),transparent_30%),radial-gradient(circle_at_18%_8%,rgba(45,212,191,0.08),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.24),rgba(2,6,23,0.78))]" />
          <div className="container-pad relative">
            <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_0.62fr] lg:items-end">
              <div className="max-w-4xl">
                <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                  Aegean Emergency STS Capability Statement
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-xl md:leading-8">
                  Emergency STS, lightering, salvage pumping and pollution
                  prevention support for time-critical marine transfer situations.
                </p>
                <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-400 md:text-base md:leading-7">
                  AES Response is structured to support time-critical emergency
                  STS, lightering, salvage pumping, bunker removal and pollution
                  prevention planning when cargo condition, vessel damage or
                  environmental exposure requires controlled transfer options.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact?subject=capability-statement"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    Request Capability Review
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-cyan-200/22 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-white/8"
                  >
                    Contact AES Response
                  </Link>
                </div>
              </div>

              <aside className="rounded-lg border border-cyan-200/14 bg-slate-950/58 p-5 shadow-2xl shadow-black/18 md:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                    <FileCheck2 aria-hidden="true" className="size-5" strokeWidth={1.8} />
                  </span>
                  <h2 className="text-lg font-semibold text-white">Early review scope</h2>
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    "Response workflow",
                    "Equipment categories",
                    "Documentation approach",
                    "Regional positioning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-cyan-200/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-cyan-200/10 bg-[linear-gradient(180deg,rgba(3,18,30,0.58),rgba(2,6,23,0.76))] py-12 md:py-20">
          <div className="container-pad">
            <Reveal className="grid gap-8 rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6 md:p-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Commercial emergency transfer support for distressed vessel situations.
                </h2>
              </div>
              <div className="grid gap-4 text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                <p>
                  AES Response focuses on emergency cargo transfer and STS
                  readiness for situations where vessel condition, cargo exposure
                  or environmental risk requires a controlled transfer option.
                </p>
                <p>
                  The company is positioned for the Aegean, Türkiye, Black Sea
                  and Eastern Mediterranean, with value structured around
                  disciplined feasibility review, equipment readiness,
                  stakeholder communication and documentation.
                </p>
                <p className="text-slate-400">
                  This capability statement is intended for early owner,
                  insurer and authority review. It does not imply certification,
                  approval or guaranteed mobilization, and final response scope
                  must be confirmed against incident facts and appointed
                  stakeholder requirements.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container-pad">
            <Reveal className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                Service scope
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                The service scope is designed to support early feasibility
                review, structured planning and stakeholder-ready documentation
                before a controlled emergency transfer is authorized.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {serviceScopes.map((service, index) => (
                <CapabilityServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <CapabilitySection
          title="Response workflow"
          description="A practical sequence for moving from first incident information to controlled transfer preparation and completion records."
        >
          <CapabilityWorkflow />
        </CapabilitySection>

        <section className="border-y border-cyan-200/10 bg-slate-950/42 py-12 md:py-20">
          <div className="container-pad">
            <Reveal className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                Equipment categories
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                Equipment categories are used as planning references for early
                review. Final selection depends on vessel condition, cargo,
                interface geometry, weather, access, authority controls and
                appointed stakeholder authorization.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {equipmentCategories.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.035}>
                    <article className="h-full rounded-lg border border-cyan-200/14 bg-slate-950/58 p-5 transition hover:border-cyan-200/34 hover:bg-slate-900/70">
                      <span className="flex size-11 items-center justify-center rounded-lg border border-teal-200/18 bg-teal-300/10 text-teal-200">
                        <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold leading-snug text-white">
                        {item.title}
                      </h3>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <CapabilitySection
          title="Documentation approach"
          description="Early stakeholder review depends on a clear incident file. AES Response structures documentation support around the information owners, insurers, authorities and appointed representatives typically need to review."
        >
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {documentationItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-cyan-200/12 bg-slate-950/58 p-4 text-sm leading-6 text-slate-300"
                >
                  <FileCheck2
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-cyan-200"
                    strokeWidth={1.8}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </CapabilitySection>

        <section className="border-y border-cyan-200/10 bg-[linear-gradient(180deg,rgba(3,18,30,0.72),rgba(2,6,23,0.82))] py-12 md:py-20">
          <div className="container-pad">
            <Reveal className="grid gap-8 rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6 md:p-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="flex size-12 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                  <MapPin aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </div>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Regional focus
                </h2>
              </div>
              <div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {siteConfig.regions.map((region) => (
                    <div
                      key={region}
                      className="rounded-lg border border-cyan-200/12 bg-white/[0.03] p-4 text-sm font-semibold text-slate-200"
                    >
                      {region}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-6 text-slate-400 md:text-base md:leading-7">
                  Regional positioning does not replace authority approval, port
                  permission, weather review, security review or appointed
                  stakeholder authorization.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container-pad">
            <CapabilityChecklist />
          </div>
        </section>

        <section className="pb-14 md:pb-24">
          <div className="container-pad">
            <Reveal>
              <div className="relative overflow-hidden rounded-lg border border-cyan-200/16 bg-[linear-gradient(135deg,rgba(8,47,73,0.78),rgba(2,6,23,0.88)_54%,rgba(20,83,45,0.34))] p-6 shadow-2xl shadow-cyan-950/20 md:p-10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                      Need a capability statement for early review?
                    </h2>
                    <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                      Share the incident context or stakeholder requirement and
                      AES Response can prepare a concise capability summary
                      aligned with the service scope, response workflow,
                      equipment categories and documentation approach shown
                      above.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Link
                      href="/contact?subject=capability-statement"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                    >
                      Start Capability Review
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center rounded-lg border border-cyan-200/22 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-white/8"
                    >
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
