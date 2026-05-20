import type { Metadata } from "next";
import { AlertTriangle, Send } from "lucide-react";

import { CapabilityCTA } from "@/components/capability-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Emergency Request Contact",
  description:
    "UI-only emergency request form for vessel name, IMO number, position, cargo type, damage summary, weather condition and contact details.",
  openGraph: {
    title: "Emergency Request Contact",
    description:
      "Prepare vessel and incident details for an emergency STS, cargo transfer, lightering or pollution prevention assessment.",
    url: "/contact",
  },
};

const fields = [
  {
    id: "vessel-name",
    label: "Vessel name",
    type: "text",
    placeholder: "M/V Example",
  },
  {
    id: "imo-number",
    label: "IMO number",
    type: "text",
    placeholder: "IMO 0000000",
  },
  {
    id: "current-position",
    label: "Current position",
    type: "text",
    placeholder: "Latitude, longitude, nearest port or anchorage",
  },
  {
    id: "cargo-type",
    label: "Cargo type and quantity",
    type: "text",
    placeholder: "Cargo, bunker, product details and quantity",
  },
  {
    id: "weather-condition",
    label: "Weather condition",
    type: "text",
    placeholder: "Wind, sea state, visibility",
  },
  {
    id: "contact-person",
    label: "Contact person",
    type: "text",
    placeholder: "Name and role",
  },
  {
    id: "email-phone",
    label: "Email / phone",
    type: "text",
    placeholder: "Operational contact details",
  },
  {
    id: "crew-status",
    label: "Crew status",
    type: "text",
    placeholder: "Safe on board, evacuated, medical or access constraints",
  },
];

type ContactPageProps = {
  searchParams?: Promise<{
    subject?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const subject = (await searchParams)?.subject;
  const isCapabilityStatement = subject === "capability-statement";

  return (
    <main>
      <PageHero
        title="Emergency request intake."
        description={
          isCapabilityStatement
            ? "Use this UI-only form to request a capability statement or structure the first details needed for a technical feasibility review."
            : "Use this UI-only form to structure the first details needed for a technical feasibility review. Backend submission can be connected in a later phase."
        }
      />

      <section className="py-16 md:py-24">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="rounded-lg border border-amber-200/20 bg-amber-300/8 p-6">
            <AlertTriangle aria-hidden="true" className="size-8 text-amber-200" />
            <h2 className="mt-5 text-2xl font-semibold text-white">
              First details to prepare
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Vessel particulars, IMO number, position, cargo, damage summary,
              weather and reliable contact details help the response review
              start faster and with fewer assumptions.
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              This foundation does not submit data yet. It is ready for a future
              backend, email workflow or incident management integration.
            </p>
            {isCapabilityStatement ? (
              <div className="mt-6 rounded-lg border border-cyan-200/16 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-100">
                Capability statement request selected. Add the owner, insurer
                or authority context in the message before submission is wired.
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={0.08}>
            <form className="rounded-lg border border-cyan-200/14 bg-slate-950/58 p-5 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                {fields.map((field) => (
                  <label key={field.id} htmlFor={field.id} className="grid gap-2">
                    <span className="text-sm font-semibold text-slate-200">
                      {field.label}
                    </span>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="min-h-12 rounded-lg border border-cyan-200/14 bg-slate-950 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/50"
                    />
                  </label>
                ))}

                <label htmlFor="damage-summary" className="grid gap-2 md:col-span-2">
                  <span className="text-sm font-semibold text-slate-200">
                    Damage summary
                  </span>
                  <textarea
                    id="damage-summary"
                    name="damage-summary"
                    rows={6}
                    placeholder="Describe grounding, collision, hull damage, flooding, list, trim, pollution exposure or cargo concerns"
                    className="resize-y rounded-lg border border-cyan-200/14 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/50"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-cyan-200/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-slate-500">
                  UI-only form. No information is submitted from this page yet.
                  {isCapabilityStatement ? " Subject: capability statement." : ""}
                </p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Prepare Request
                  <Send aria-hidden="true" className="size-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <CapabilityCTA compact />
    </main>
  );
}
