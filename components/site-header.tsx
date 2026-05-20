import Link from "next/link";
import { Menu, ShipWheel } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-200/10 bg-slate-950/78 backdrop-blur-xl">
      <div className="container-pad flex h-16 items-center justify-between gap-4 md:h-20 md:gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="AES Response home">
          <span className="flex size-10 items-center justify-center rounded-lg border border-cyan-200/25 bg-cyan-300/10 text-cyan-200 md:size-11">
            <ShipWheel aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold text-white">
              {siteConfig.shortName}
            </span>
            <span className="mt-1 text-xs text-slate-400">
              Aegean Emergency STS
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-lg border border-cyan-200/25 bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Activate Response Team
          </Link>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex size-11 cursor-pointer items-center justify-center rounded-lg border border-cyan-200/20 bg-white/5 text-cyan-100">
            <Menu aria-hidden="true" className="size-5" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-lg border border-cyan-200/18 bg-slate-950/96 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/7 hover:text-cyan-200"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-lg bg-cyan-300 px-3 py-3 text-center text-sm font-semibold text-slate-950"
              >
                Activate Response Team
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
