import type { Metadata } from "next";

import { InsightCard } from "@/components/insight-card";
import { PageHero } from "@/components/page-hero";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Emergency STS Knowledge Hub",
  description:
    "Professional articles on emergency ship-to-ship cargo transfer, lightering equipment, bunker removal, documentation and pollution prevention.",
  openGraph: {
    title: "Emergency STS Knowledge Hub",
    description:
      "Knowledge hub articles for owners preparing for emergency STS, lightering, cargo recovery and pollution prevention decisions.",
    url: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        title="Knowledge hub for emergency STS and cargo recovery decisions."
        description="Clear, practical guidance for owners, operators and appointed stakeholders preparing for emergency lightering, cargo removal and pollution prevention scenarios."
      />

      <section className="py-16 md:py-24">
        <div className="container-pad grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <InsightCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
