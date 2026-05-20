import Link from "next/link";
import { Radio, ShieldCheck } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-cyan-200/10 bg-slate-950/78">
      <div className="container-pad py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg border border-cyan-200/25 bg-cyan-300/10 text-cyan-200">
                <Radio aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-base font-semibold text-white">
                  {siteConfig.shortName}
                </span>
                <span className="block text-xs text-slate-400">
                  Aegean Emergency STS
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
              Commercial emergency STS, cargo transfer, salvage pumping, bunker
              removal and pollution prevention response positioning across the
              Aegean, Turkiye, Black Sea and Eastern Mediterranean.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Navigation</h2>
            <nav className="mt-4 grid gap-3" aria-label="Footer navigation">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-cyan-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Response Positioning</h2>
            <div className="mt-4 grid gap-3">
              {siteConfig.regions.map((region) => (
                <div key={region} className="flex items-center gap-2 text-sm text-slate-400">
                  <ShieldCheck aria-hidden="true" className="size-4 text-teal-300" />
                  {region}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cyan-200/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Aegean Emergency STS.</p>
          <p>Commercial, safety-focused emergency transfer support.</p>
        </div>
      </div>
    </footer>
  );
}
