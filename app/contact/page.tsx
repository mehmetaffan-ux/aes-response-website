import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileUp,
  LockKeyhole,
  Send,
} from "lucide-react";

import { CapabilityCTA } from "@/components/capability-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Emergency Transfer Support",
  description:
    "Marine emergency transfer support request intake for vessel location, cargo condition, required service, urgency, damage summary and weather or sea conditions.",
  openGraph: {
    title: "Request Emergency Transfer Support",
    description:
      "Structured intake page for emergency cargo transfer, STS preparation, portable pumping, pollution prevention and marine engineering attendance review.",
    url: "/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Request Emergency Transfer Support",
  description: metadata.description,
  url: `${siteConfig.url}/contact`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
  },
};

const contactDetails = [
  { id: "name", label: "Name", placeholder: "Full name", type: "text" },
  { id: "company", label: "Company", placeholder: "Company / organization", type: "text" },
  { id: "role", label: "Role / Position", placeholder: "Owner, manager, master, agent, surveyor", type: "text" },
  { id: "email", label: "Email", placeholder: "name@example.com", type: "email" },
  { id: "phone", label: "Phone / WhatsApp", placeholder: "+90 ...", type: "tel" },
];

const operationDetails = [
  { id: "vessel-name", label: "Vessel name, optional", placeholder: "Vessel name if available" },
  { id: "vessel-type", label: "Vessel type", placeholder: "Tanker, bulk carrier, general cargo, barge..." },
  { id: "current-location", label: "Current location / area", placeholder: "Coordinates, anchorage, port area or nearest coastline" },
];

const operationTypes = [
  "Emergency cargo transfer",
  "STS preparation / lightering",
  "Portable pumping",
  "Bunker / slop removal",
  "Pollution prevention setup",
  "Technical review only",
];

const urgencyLevels = [
  "Immediate technical review",
  "Same-day planning",
  "Next weather window",
  "Pre-incident readiness",
];

const requiredSupport = [
  "Emergency Cargo Transfer",
  "STS Fendering / Transfer Preparation",
  "Portable Pumping",
  "Cargo Hose / Manifold Connection",
  "Pollution Prevention / Boom Deployment",
  "Marine Engineering Attendance",
  "Other",
];

const liquidDetails = [
  { id: "cargo-liquid-type", label: "Cargo / liquid type", placeholder: "Cargo, bunker, slop, chemical, water or unknown" },
  { id: "approximate-quantity", label: "Approximate quantity", placeholder: "Approximate m3 / tonnes / tank quantity" },
  { id: "temperature-pressure", label: "Temperature / pressure constraints, if known", placeholder: "Heating, pressure, vapor, transfer limits or unknown" },
  { id: "viscosity-notes", label: "Viscosity or special handling notes, if known", placeholder: "Viscosity, wax, contamination, sediment, special hazards" },
];

const situationFields = [
  {
    id: "damage-issue",
    label: "Damage / restriction / operational issue",
    placeholder:
      "Grounding, machinery failure, hull damage, flooding, cargo system restriction, list, trim, access limitation...",
  },
  {
    id: "vessel-condition",
    label: "Current vessel condition",
    placeholder:
      "Draft, trim, list, stability concerns, power availability, crew status, access limits, pollution exposure...",
  },
  {
    id: "weather-sea",
    label: "Weather / sea condition",
    placeholder:
      "Wind, sea state, swell, visibility, current, expected weather window...",
  },
  {
    id: "stakeholder-involvement",
    label: "Port / authority / class / P&I involvement, optional",
    placeholder:
      "Authority instructions, port permission status, class or insurer involvement, appointed representatives...",
  },
];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Equipment", href: "/equipment" },
  { label: "Representative Scenarios", href: "/representative-response-scenarios" },
  { label: "Confidentiality", href: "/confidentiality" },
];

function TextField({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label htmlFor={id} className="grid gap-2">
      <span className="text-sm font-semibold text-slate-200">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="min-h-12 rounded-lg border border-cyan-200/14 bg-slate-950 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/50"
      />
    </label>
  );
}

function SelectField({
  id,
  label,
  options,
}: {
  id: string;
  label: string;
  options: string[];
}) {
  return (
    <label htmlFor={id} className="grid gap-2">
      <span className="text-sm font-semibold text-slate-200">{label}</span>
      <select
        id={id}
        name={id}
        defaultValue=""
        className="min-h-12 rounded-lg border border-cyan-200/14 bg-slate-950 px-4 text-sm text-white outline-none transition focus:border-cyan-200/50"
      >
        <option value="" disabled>
          Select option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <label htmlFor={id} className="grid gap-2">
      <span className="text-sm font-semibold text-slate-200">{label}</span>
      <textarea
        id={id}
        name={id}
        rows={5}
        placeholder={placeholder}
        className="resize-y rounded-lg border border-cyan-200/14 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/50"
      />
    </label>
  );
}

function IntakeSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="rounded-lg border border-cyan-200/12 bg-white/[0.025] p-5 md:p-6">
      <legend className="px-2 text-lg font-semibold text-white">{title}</legend>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      <div className="mt-5">{children}</div>
    </fieldset>
  );
}

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={contactJsonLd} />
      <PageHero
        title="Request Emergency Transfer Support"
        description="Share vessel location, cargo condition, required service, urgency, damage summary and weather or sea conditions for initial technical review."
      />

      <section className="py-12 md:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <aside className="grid gap-5">
            <Reveal className="rounded-lg border border-amber-200/20 bg-amber-300/8 p-6">
              <AlertTriangle aria-hidden="true" className="size-8 text-amber-200" />
              <h2 className="mt-5 text-2xl font-semibold text-white">
                Initial technical review
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                The first review is most useful when it includes vessel location,
                cargo or liquid condition, required support, urgency, damage or
                operating restriction, and current weather or sea conditions.
              </p>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                This form is prepared for structured intake. No backend
                submission is implemented yet, so use it as a clear checklist for
                the information required before direct follow-up.
              </p>
            </Reveal>

            <Reveal delay={0.04} className="rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6">
              <h2 className="text-xl font-semibold text-white">Useful references</h2>
              <div className="mt-5 grid gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center justify-between gap-3 rounded-lg border border-cyan-200/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/35 hover:bg-white/[0.05]"
                  >
                    {link.label}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </aside>

          <Reveal delay={0.08}>
            <form className="grid gap-6 rounded-lg border border-cyan-200/14 bg-slate-950/58 p-5 md:p-8">
              <IntakeSection
                title="Contact Details"
                description="Provide the person or team available for technical and commercial follow-up."
              >
                <div className="grid gap-5 md:grid-cols-2">
                  {contactDetails.map((field) => (
                    <TextField key={field.id} {...field} />
                  ))}
                </div>
              </IntakeSection>

              <IntakeSection
                title="Vessel / Operation Details"
                description="Share the operating context so the initial assessment can be framed around the right vessel, location and urgency."
              >
                <div className="grid gap-5 md:grid-cols-2">
                  {operationDetails.map((field) => (
                    <TextField key={field.id} {...field} />
                  ))}
                  <SelectField id="operation-type" label="Operation type" options={operationTypes} />
                  <SelectField id="urgency-level" label="Urgency level" options={urgencyLevels} />
                </div>
              </IntakeSection>

              <IntakeSection
                title="Required Support"
                description="Select all support categories that may apply. Final scope is subject to technical assessment, vessel condition and risk review."
              >
                <div className="grid gap-3 md:grid-cols-2">
                  {requiredSupport.map((item) => (
                    <label
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-cyan-200/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300 transition focus-within:border-cyan-200/45 hover:border-cyan-200/25"
                    >
                      <input
                        type="checkbox"
                        name="required-support"
                        value={item}
                        className="mt-1 size-4 rounded border-cyan-200/30 bg-slate-950 accent-cyan-300"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </IntakeSection>

              <IntakeSection
                title="Cargo / Liquid Details"
                description="Include available product information. Unknown values can be clarified during follow-up review."
              >
                <div className="grid gap-5 md:grid-cols-2">
                  {liquidDetails.map((field) => (
                    <TextField key={field.id} {...field} />
                  ))}
                </div>
              </IntakeSection>

              <IntakeSection
                title="Situation Summary"
                description="Describe the casualty, restriction or operational issue in practical terms."
              >
                <div className="grid gap-5">
                  {situationFields.map((field) => (
                    <TextAreaField key={field.id} {...field} />
                  ))}
                </div>
              </IntakeSection>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(15,23,42,0.78),rgba(8,47,73,0.24))] p-5">
                  <FileUp aria-hidden="true" className="size-7 text-cyan-200" />
                  <h2 className="mt-4 text-lg font-semibold text-white">
                    Follow-up documents
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Photos, GA plans, manifold details, cargo information,
                    transfer diagrams or authority instructions may be shared
                    during follow-up technical review where appropriate.
                  </p>
                </div>
                <div className="rounded-lg border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(15,23,42,0.78),rgba(20,83,45,0.18))] p-5">
                  <LockKeyhole aria-hidden="true" className="size-7 text-teal-200" />
                  <h2 className="mt-4 text-lg font-semibold text-white">
                    Confidentiality note
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Information submitted through this form is treated as
                    confidential and used only for initial technical and
                    commercial assessment.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-cyan-200/10 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="text-xs leading-5 text-slate-500">
                  UI-only form. No information is submitted from this page yet.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Prepare Emergency Request
                  <Send aria-hidden="true" className="size-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-cyan-200/10 bg-slate-950/42 py-12 md:py-20">
        <div className="container-pad">
          <Reveal className="grid gap-4 md:grid-cols-3">
            {[
              "No guaranteed response time is stated from this page.",
              "Final service scope is subject to cargo type, vessel condition and risk review.",
              "Operational details can be discussed privately where appropriate.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-lg border border-cyan-200/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-cyan-200"
                  strokeWidth={1.8}
                />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CapabilityCTA compact />
    </main>
  );
}
