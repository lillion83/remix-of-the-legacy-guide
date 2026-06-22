import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Mail, Phone, BookOpen, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import bedanktHero from "@/assets/bedankt-hero.jpg";

export const Route = createFileRoute("/bedankt")({
  head: () => ({
    meta: [
      { title: "Bedankt — Wij nemen contact met u op | The Inheritance Guide" },
      {
        name: "description",
        content:
          "Bedankt voor uw bericht aan The Inheritance Guide. Wij nemen binnen één werkdag persoonlijk contact met u op.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Bedankt — The Inheritance Guide" },
      {
        property: "og:description",
        content: "Bedankt voor uw bericht. Wij nemen binnen één werkdag contact met u op.",
      },
    ],
  }),
  component: Bedankt,
});

const stepIcons = [Mail, Phone, BookOpen];

function Bedankt() {
  const t = useT();
  const h = t.bedankt;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={bedanktHero}
          alt="Oudere vrouw bij het raam in warm avondlicht, opgelucht en gerustgesteld"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/45" />
        <div className="relative mx-auto flex min-h-[56vh] max-w-4xl flex-col justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
              <CheckCircle2 className="h-9 w-9" strokeWidth={1.75} />
            </span>
            <h1 className="mt-8 text-4xl leading-[1.1] text-primary-foreground sm:text-5xl md:text-6xl">
              {h.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
              {h.heroIntro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {h.stepsEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.stepsTitle}</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {h.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <Reveal key={step.title} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-8 text-center shadow-[var(--shadow-soft)]">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-6 text-xl text-primary">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg hover:bg-accent/90"
            >
              <Link to="/kennisbank">
                {h.ctaKennisbank}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 px-8 py-6 text-base text-primary hover:bg-secondary"
            >
              <Link to="/">{h.ctaHome}</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
