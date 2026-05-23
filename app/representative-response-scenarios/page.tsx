import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, FileText, LockKeyhole, ShieldCheck } from "lucide-react";

import { EmergencyCta } from "@/components/emergency-cta";
import { iconMap } from "@/components/icon-map";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { responseScenarios } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Representative Response Scenarios",
  description:
    "Representative emergency STS, cargo removal, portable pumping and pollution prevention scenarios for public explanation without disclosing confidential operation details.",
  openGraph: {
    title: "Representative Response Scenarios | AES Response",
    description:
      "Representative marine emergency response scenarios for cargo transfer, STS preparation, pumping and pollution prevention.",
    url: "/representative-response-scenarios",
  },
};

const scenariosJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Representative Response Scenarios",
  description: metadata.description,
  url: `${siteConfig.url}/representative-response-scenarios`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
  },
};

function ScenarioField({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-cyan-200/10 bg-white/[0.03] p-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
        {title}
      </h3>
      <div className="mt-3 text-sm leading-6 text-slate-300">{children}</div>
    </div>
  );
}

function ScenarioVisual({
  title,
  note,
  icon,
}: {
  title: string;
  note: string;
  icon: keyof typeof iconMap;
}) {
  const Icon = iconMap[icon];

  return (
    <div
      className="relative min-h-72 overflow-hidden rounded-lg border border-cyan-200/14 bg-[radial-gradient(circle_at_76%_18%,rgba(111,156,188,0.16),transparent_26%),linear-gradient(145deg,rgba(2,6,23,0.94),rgba(8,47,73,0.62)_58%,rgba(15,23,42,0.92))] p-5"
      aria-label={`Illustrative rendering note for ${title}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
      <div className="absolute left-6 top-6 flex items-center gap-2 rounded-lg border border-cyan-200/16 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur">
        <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
        Illustrative rendering
      </div>
      <div className="absolute inset-x-8 top-24 h-28 rounded-[999px] border border-cyan-200/12 bg-cyan-200/[0.03]" />
      <div className="absolute left-10 top-40 h-10 w-40 -skew-x-12 rounded-sm border border-cyan-200/18 bg-slate-800/76 shadow-2xl shadow-black/30" />
      <div className="absolute right-10 top-32 h-12 w-44 -skew-x-12 rounded-sm border border-teal-200/18 bg-slate-800/70 shadow-2xl shadow-black/30" />
      <div className="absolute left-1/2 top-36 h-16 w-5 -translate-x-1/2 rounded-full border border-amber-200/24 bg-amber-300/18" />
      <div className="absolute left-[38%] top-36 h-1 w-[24%] rotate-[-8deg] rounded-full bg-cyan-200/70 shadow-[0_0_18px_rgba(111,156,188,0.28)]" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.92))]" />
      <div className="relative z-10 mt-52">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{note}</p>
      </div>
    </div>
  );
}

export default function RepresentativeResponseScenariosPage() {
  return (
    <main>
      <JsonLd data={scenariosJsonLd} />
      <PageHero
        title="Representative response scenarios for marine emergency transfer planning."
        description="Public emergency response pages cannot disclose vessel names, client names, locations, cargo details or real operation photographs without permission. These scenarios describe representative planning patterns for owner, insurer and authority discussions."
      />

      <section className="border-b border-cyan-200/10 bg-slate-950/40 py-12 md:py-20">
        <div className="container-pad">
          <Reveal className="grid gap-6 rounded-lg border border-cyan-200/14 bg-[linear-gradient(135deg,rgba(15,23,42,0.84),rgba(2,6,23,0.9)_52%,rgba(8,47,73,0.38))] p-6 md:p-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <span className="flex size-12 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                <LockKeyhole aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                Confidentiality note
              </h2>
            </div>
            <div className="grid gap-4 text-sm leading-6 text-slate-300">
              <p>
                Emergency marine response, salvage support and cargo transfer
                work is often confidential. AES Response does not publicly
                disclose vessel names, client names, exact locations, cargo
                details or operation photographs without appropriate permission.
              </p>
              <p>
                The scenarios below are representative examples for public
                explanation. Visuals are illustrative and should not be read as
                evidence of a specific completed operation.
              </p>
              <Link
                href="/confidentiality"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
              >
                Read confidentiality approach
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-pad grid gap-8">
          {responseScenarios.map((scenario, index) => (
            <Reveal key={scenario.slug} delay={index * 0.04}>
              <article
                id={scenario.slug}
                className="scroll-mt-28 overflow-hidden rounded-lg border border-cyan-200/14 bg-slate-950/58"
              >
                <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                          Representative scenario
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                          {scenario.title}
                        </h2>
                      </div>
                    </div>

                    <div className="mt-7 grid gap-4">
                      <ScenarioField title="Situation">
                        <p>{scenario.situation}</p>
                      </ScenarioField>
                      <ScenarioField title="Operational challenge">
                        <p>{scenario.operationalChallenge}</p>
                      </ScenarioField>
                      <ScenarioField title="AES Response scope">
                        <p>{scenario.aesScope}</p>
                      </ScenarioField>
                      <ScenarioField title="Equipment configuration">
                        <ul className="grid gap-2">
                          {scenario.equipmentConfiguration.map((item) => (
                            <li key={item} className="flex gap-2">
                              <CheckCircle2
                                aria-hidden="true"
                                className="mt-1 size-4 shrink-0 text-teal-200"
                                strokeWidth={1.8}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </ScenarioField>
                      <ScenarioField title="HSE controls">
                        <ul className="grid gap-2">
                          {scenario.hseControls.map((item) => (
                            <li key={item} className="flex gap-2">
                              <ShieldCheck
                                aria-hidden="true"
                                className="mt-1 size-4 shrink-0 text-cyan-200"
                                strokeWidth={1.8}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </ScenarioField>
                      <ScenarioField title="Outcome objective">
                        <p>{scenario.outcomeObjective}</p>
                      </ScenarioField>
                    </div>
                  </div>

                  <div className="border-t border-cyan-200/10 p-5 lg:border-l lg:border-t-0">
                    <ScenarioVisual
                      title={scenario.title}
                      note={scenario.visualNote}
                      icon={scenario.icon}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-cyan-200/10 bg-slate-950/42 py-12 md:py-20">
        <div className="container-pad">
          <Reveal className="grid gap-6 rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6 md:p-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="flex size-12 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                <FileText aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                Private capability discussions
              </h2>
            </div>
            <div>
              <p className="text-sm leading-6 text-slate-300">
                Where appropriate, more detailed capability discussions can take
                place privately with owners, managers, insurers, authorities or
                appointed stakeholders under suitable confidentiality controls.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Start Emergency Request
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  href="/equipment"
                  className="inline-flex items-center justify-center rounded-lg border border-cyan-200/18 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/35 hover:bg-white/[0.04]"
                >
                  View Equipment Capability
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <EmergencyCta />
    </main>
  );
}
