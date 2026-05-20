import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  ListChecks,
  MessageCircleQuestion,
} from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { articles, getArticleBySlug } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function sectionId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/insights/${article.slug}`,
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.url}/insights/${article.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <main>
        <article>
          <header className="relative overflow-hidden border-b border-cyan-200/10 py-12 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(103,232,249,0.13),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.42),rgba(2,6,23,0.72))]" />
            <div className="container-pad relative">
              <Reveal className="mx-auto max-w-5xl">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                  Back to insights
                </Link>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="rounded-md border border-cyan-200/18 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase text-cyan-100">
                    {article.category}
                  </span>
                  <time
                    dateTime={article.publishedAt}
                    className="text-sm font-semibold text-slate-400"
                  >
                    {article.publishedAt}
                  </time>
                  <span aria-hidden="true" className="text-slate-600">
                    /
                  </span>
                  <span className="text-sm font-semibold text-slate-400">
                    {article.readingTime}
                  </span>
                </div>
                <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                  {article.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  {article.excerpt}
                </p>
              </Reveal>
            </div>
          </header>

          <div className="container-pad py-14 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
              <aside className="lg:sticky lg:top-28">
                <Reveal>
                  <nav
                    aria-label="Article table of contents"
                    className="rounded-lg border border-cyan-200/14 bg-slate-950/58 p-5 shadow-2xl shadow-black/16 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <ListChecks aria-hidden="true" className="size-5 text-cyan-200" />
                      <h2 className="text-sm font-semibold uppercase text-cyan-100">
                        Article Contents
                      </h2>
                    </div>
                    <ol className="mt-5 grid gap-3">
                      {article.sections.map((section, index) => (
                        <li key={section.heading}>
                          <Link
                            href={`#${sectionId(section.heading)}`}
                            className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-6 text-slate-400 transition hover:text-cyan-100"
                          >
                            <span className="text-cyan-300/80">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{section.heading}</span>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </Reveal>
              </aside>

              <Reveal delay={0.08}>
                <div className="rounded-lg border border-cyan-200/14 bg-slate-950/58 p-6 shadow-2xl shadow-black/18 md:p-10">
                  <div className="grid gap-5 border-b border-cyan-200/10 pb-10">
                    {article.intro.map((paragraph) => (
                      <p key={paragraph} className="text-lg leading-8 text-slate-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {article.sections.map((section) => (
                    <section
                      key={section.heading}
                      id={sectionId(section.heading)}
                      className="scroll-mt-28 border-b border-cyan-200/10 py-10 last:border-b-0"
                    >
                      <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                        {section.heading}
                      </h2>
                      <div className="mt-5 grid gap-5">
                        {section.body.map((paragraph) => (
                          <p key={paragraph} className="text-base leading-8 text-slate-300">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}

                  <section className="mt-6 rounded-lg border border-amber-200/18 bg-amber-300/8 p-5 md:p-6">
                    <div className="flex items-center gap-3">
                      <FileCheck2 aria-hidden="true" className="size-5 text-amber-200" />
                      <h2 className="text-xl font-semibold text-white">
                        {article.checklistTitle}
                      </h2>
                    </div>
                    <ul className="mt-5 grid gap-3">
                      {article.checklist.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-slate-300"
                        >
                          <CheckCircle2
                            aria-hidden="true"
                            className="mt-1 size-4 shrink-0 text-cyan-200"
                            strokeWidth={1.8}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mt-10">
                    <h2 className="text-2xl font-semibold text-white">
                      Related AES Response pages
                    </h2>
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {article.relatedLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group rounded-lg border border-cyan-200/12 bg-white/[0.03] p-4 transition hover:border-cyan-200/36 hover:bg-white/[0.055]"
                        >
                          <span className="flex items-center justify-between gap-3 text-sm font-semibold text-cyan-100">
                            {link.label}
                            <ArrowRight
                              aria-hidden="true"
                              className="size-4 transition group-hover:translate-x-0.5"
                            />
                          </span>
                          <span className="mt-2 block text-sm leading-6 text-slate-400">
                            {link.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>

                  <section className="mt-10">
                    <div className="flex items-center gap-3">
                      <MessageCircleQuestion
                        aria-hidden="true"
                        className="size-5 text-cyan-200"
                      />
                      <h2 className="text-2xl font-semibold text-white">
                        Frequently Asked Questions
                      </h2>
                    </div>
                    <div className="mt-5 grid gap-3">
                      {article.faqs.map((faq) => (
                        <details
                          key={faq.question}
                          className="group rounded-lg border border-cyan-200/12 bg-white/[0.03] p-4"
                        >
                          <summary className="cursor-pointer text-base font-semibold text-white">
                            {faq.question}
                          </summary>
                          <p className="mt-3 text-sm leading-6 text-slate-400">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>

                  <section className="mt-10 rounded-lg border border-cyan-200/16 bg-[linear-gradient(135deg,rgba(8,47,73,0.72),rgba(2,6,23,0.86))] p-6 md:p-8">
                    <h2 className="text-2xl font-semibold text-white">
                      Need to discuss an emergency transfer scenario?
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                      Share vessel details, position, cargo, damage summary and
                      weather conditions so AES Response can begin a structured
                      feasibility review.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                    >
                      Contact AES Response
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </section>
                </div>
              </Reveal>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
