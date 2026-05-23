import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CapabilityCTA } from "@/components/capability-cta";
import { EmergencyCta } from "@/components/emergency-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marine Emergency Response Services",
  description:
    "Marine emergency response service structure for cargo transfer support, STS fendering, portable pumping, cargo hose configuration, pollution prevention and field coordination.",
  openGraph: {
    title: "Marine Emergency Response Services",
    description:
      "Operational service categories for emergency cargo transfer, STS preparation, portable pumping, manifold connection support and pollution prevention.",
    url: "/services",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Marine Emergency Response Services",
  description: metadata.description,
  url: `${siteConfig.url}/services`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteConfig.url}/services#${service.slug}`,
    })),
  },
};

function ServiceDetailBlock({
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

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
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
  );
}

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={servicesJsonLd} />
      <PageHero
        title="Marine emergency response services structured around field execution."
        description="AES Response supports emergency cargo transfer, STS fendering and transfer preparation, portable pumping, hose and manifold connection planning, pollution prevention and marine engineering field coordination for commercial casualty situations."
      />

      <section className="py-12 md:py-20">
        <div className="container-pad">
          <SectionHeader
            label="Service Categories"
            title="Operational support categories for emergency transfer situations."
            description="Each service is structured around the operational problem, AES Response scope, equipment used, HSE controls, typical use cases and routes into confidential technical review."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CapabilityCTA compact />

      <section className="border-y border-cyan-200/10 bg-slate-950/42 py-12 md:py-20">
        <div className="container-pad grid gap-6">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <article
                id={service.slug}
                className="scroll-mt-28 overflow-hidden rounded-lg border border-cyan-200/14 bg-slate-950/58"
              >
                <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="border-b border-cyan-200/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.82),rgba(8,47,73,0.26))] p-6 md:p-8 lg:border-b-0 lg:border-r">
                    <div className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-cyan-200/18 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                          Service category
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-6 text-sm leading-6 text-slate-300">
                      {service.summary}
                    </p>
                    <div className="mt-6 grid gap-3">
                      {service.details.map((detail) => (
                        <div
                          key={detail}
                          className="rounded-lg border border-cyan-200/10 bg-slate-950/45 p-4 text-sm leading-6 text-slate-300"
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="grid gap-4">
                      <ServiceDetailBlock title="Operational problem">
                        <p>{service.operationalProblem}</p>
                      </ServiceDetailBlock>
                      <ServiceDetailBlock title="AES Response scope">
                        <ServiceList items={service.aesScope} />
                      </ServiceDetailBlock>
                      <ServiceDetailBlock title="Equipment used">
                        <ServiceList items={service.equipmentUsed} />
                      </ServiceDetailBlock>
                      <ServiceDetailBlock title="HSE & operational controls">
                        <ServiceList items={service.hseControls} />
                      </ServiceDetailBlock>
                      <ServiceDetailBlock title="Typical use cases">
                        <ServiceList items={service.typicalUseCases} />
                      </ServiceDetailBlock>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 border-t border-cyan-200/10 pt-6 sm:flex-row sm:flex-wrap">
                      {service.relatedLinks.map((link) => (
                        <Link
                          key={`${service.slug}-${link.href}-${link.label}`}
                          href={link.href}
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-200/18 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/35 hover:bg-white/[0.04]"
                        >
                          {link.label}
                          <ArrowRight aria-hidden="true" className="size-4" />
                        </Link>
                      ))}
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                      >
                        Request service review
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </div>
                  </div>
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
