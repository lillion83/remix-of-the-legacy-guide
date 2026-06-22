import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/kennisbank-hero.jpg";

export const Route = createFileRoute("/kennisbank")({
  head: () => ({
    meta: [
      { title: "Kennisbank Nalatenschap & Erfenis — The Inheritance Guide" },
      {
        name: "description",
        content:
          "Praktische artikelen en heldere uitleg over nalatenschap en erfenis: executeurschap, erfbelasting, levenstestament, checklists en meer.",
      },
      { property: "og:title", content: "Kennisbank Nalatenschap & Erfenis — The Inheritance Guide" },
      {
        property: "og:description",
        content:
          "Betrouwbare, begrijpelijke informatie over nalatenschap en erfenis op één plek.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: Kennisbank,
});

type Category = "voorbereiding" | "afwikkeling";

function Kennisbank() {
  const t = useT();
  const h = t.kennisbank;
  const [active, setActive] = useState<Category | "alle">("alle");

  const filters = [
    { label: h.filterAll, value: "alle" as const },
    { label: h.filterPrep, value: "voorbereiding" as const },
    { label: h.filterSettle, value: "afwikkeling" as const },
  ];

  const categoryLabels: Record<Category, string> = {
    voorbereiding: h.categoryPrep,
    afwikkeling: h.categorySettle,
  };

  const visible =
    active === "alle"
      ? h.articles
      : h.articles.filter((a) => a.category === active);

  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Rustige leeshoek met boeken, een laptop en een kop thee bij het raam"
        eyebrow={h.heroEyebrow}
        title={h.heroTitle}
        intro={h.heroIntro}
        ctaLabel={h.heroCta}
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setActive(f.value)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
                  active === f.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground/80 hover:border-accent hover:text-primary",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((article) => (
              <article
                key={article.title}
                className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-secondary px-3 py-1 font-semibold uppercase tracking-wide text-primary">
                    {categoryLabels[article.category]}
                  </span>
                  <span className="text-muted-foreground">
                    {article.readingTime} {h.readingTime}
                  </span>
                </div>
                <h2 className="mt-5 text-xl leading-snug text-primary">{article.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                >
                  {h.readMore}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title={h.ctaTitle} text={h.ctaText} />
    </>
  );
}
