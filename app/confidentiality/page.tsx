import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CameraOff,
  FileCheck2,
  LockKeyhole,
  MessageSquareLock,
  ShieldCheck,
} from "lucide-react";

import { EmergencyCta } from "@/components/emergency-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentiality & Operational Discretion",
  description:
    "AES Response confidentiality approach for marine emergency response, salvage support, emergency cargo transfer and STS operations.",
  openGraph: {
    title: "Confidentiality & Operational Discretion | AES Response",
    description:
      "How AES Response handles confidential vessel, client, location, cargo and operation photography information.",
    url: "/confidentiality",
  },
};

const confidentialityJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Confidentiality & Operational Discretion",
  description: metadata.description,
  url: `${siteConfig.url}/confidentiality`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
  },
};

const principles = [
  {
    title: "Client and vessel discretion",
    body: "Client names, vessel names, IMO numbers, managers, owners, locations, cargo details and incident particulars are not published as public references.",
    icon: LockKeyhole,
  },
  {
    title: "Operation photography controls",
    body: "Real operation photographs are not shared publicly without appropriate permission from the relevant parties and a clear review of confidentiality obligations.",
    icon: CameraOff,
  },
  {
    title: "Representative public explanation",
    body: "Public pages use representative scenarios and illustrative renderings to explain response patterns without implying disclosure of a specific operation.",
    icon: FileCheck2,
  },
  {
    title: "Private stakeholder discussions",
    body: "More detailed capability conversations can take place privately with owners, managers, authorities, insurers or appointed stakeholders where appropriate.",
    icon: MessageSquareLock,
  },
];

const publicPrivate = [
  {
    title: "Suitable for public explanation",
    items: [
      "General service scope and response workflow.",
      "Equipment categories used for feasibility planning.",
      "Representative emergency response scenarios.",
      "General documentation approach and intake requirements.",
    ],
  },
  {
    title: "Reserved for controlled discussions",
    items: [
      "Vessel, owner, manager, charterer or client identity.",
      "Exact incident location, cargo detail or quantity history.",
      "Operation photographs, reports or technical records.",
      "Project-specific constraints, commercial arrangements or appointed party instructions.",
    ],
  },
];

export default function ConfidentialityPage() {
  return (
    <main>
      <JsonLd data={confidentialityJsonLd} />
      <PageHero
        title="Confidentiality and operational discretion in emergency marine response."
        description="Marine casualties, salvage support, emergency cargo transfer and STS operations often involve sensitive commercial, legal, insurance and authority-facing information. AES Response treats public communication accordingly."
      />

      <section className="py-12 md:py-20">
        <div className="container-pad">
          <Reveal className="grid gap-6 rounded-lg border border-cyan-200/14 bg-[linear-gradient(135deg,rgba(15,23,42,0.84),rgba(2,6,23,0.9)_54%,rgba(8,47,73,0.36))] p-6 md:p-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <span className="flex size-12 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                <ShieldCheck aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-3xl">
                Public credibility without public disclosure of sensitive operations.
              </h2>
            </div>
            <div className="grid gap-4 text-sm leading-6 text-slate-300">
              <p>
                In emergency marine response, a public case reference can expose
                commercially sensitive vessel information, cargo details,
                stakeholder identity, location history or authority-facing
                response records. AES Response does not use that information as
                public marketing material unless the relevant permissions are in
                place.
              </p>
              <p>
                The website therefore explains capability through careful
                service descriptions, equipment categories, representative
                scenarios and clearly labelled illustrative renderings. This
                approach supports public understanding without creating
                unverifiable claims or disclosing protected incident context.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-cyan-200/10 bg-slate-950/42 py-12 md:py-20">
        <div className="container-pad">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                Operational discretion principles.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                These principles guide how AES Response presents emergency STS,
                lightering, salvage pumping, bunker removal and pollution
                prevention capability in public channels.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <Reveal key={principle.title} delay={index * 0.04}>
                  <article className="h-full rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6">
                    <span className="flex size-11 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-cyan-200">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {principle.body}
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
          <Reveal className="grid gap-5 lg:grid-cols-2">
            {publicPrivate.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6 md:p-8"
              >
                <h2 className="text-2xl font-semibold text-white">{group.title}</h2>
                <ul className="mt-6 grid gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-200/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-y border-cyan-200/10 bg-slate-950/42 py-12 md:py-20">
        <div className="container-pad">
          <Reveal className="rounded-lg border border-cyan-200/14 bg-[linear-gradient(135deg,rgba(8,47,73,0.72),rgba(2,6,23,0.9)_58%,rgba(20,83,45,0.24))] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                  Need a private capability discussion?
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                  Share the incident context, stakeholder requirement or
                  capability review need through the contact page. Public
                  disclosure is not required to start a structured early review.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Contact AES Response
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  href="/representative-response-scenarios"
                  className="inline-flex items-center justify-center rounded-lg border border-cyan-200/18 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/35 hover:bg-white/[0.04]"
                >
                  View Scenarios
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
