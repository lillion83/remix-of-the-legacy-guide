import { createFileRoute } from "@tanstack/react-router";
import {
  ScrollText,
  ShieldCheck,
  Gift,
  Home,
  Users,
  User,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { useT } from "@/lib/i18n";
import heroImg from "@/assets/bijleven-hero.jpg";

export const Route = createFileRoute("/bij-leven-regelen")({
  head: () => ({
    meta: [
      { title: "Bij leven regelen — The Inheritance Guide" },
      {
        name: "description",
        content:
          "Regel uw nalatenschap zorgvuldig bij leven: testament, levenstestament en schenkingen. Voorkom problemen voor nabestaanden en bespaar erfbelasting.",
      },
      { property: "og:title", content: "Bij leven regelen — The Inheritance Guide" },
      {
        property: "og:description",
        content:
          "Persoonlijke begeleiding bij het voorbereiden van uw nalatenschap bij leven, met rust en duidelijkheid.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: BijLevenRegelen,
});

const topicIcons = [ScrollText, ShieldCheck, Gift];
const situationIcons = [Users, User, Home, Building2];

function BijLevenRegelen() {
  const t = useT();
  const h = t.bijleven;

  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Een oudere man regelt rustig zijn zaken aan een zonnig bureau thuis"
        eyebrow={h.heroEyebrow}
        title={h.heroTitle}
        intro={h.heroIntro}
        ctaLabel={h.heroCta}
      />

      {/* Why */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.whyEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.whyTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.whyText}</p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-secondary/50 p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <h3 className="text-xl text-primary">{h.benefitsTitle}</h3>
              <ul className="mt-6 space-y-4">
                {h.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {h.topicsEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.topicsTitle}</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {h.topics.map((topic, i) => {
              const Icon = topicIcons[i];
              return (
                <div
                  key={topic.title}
                  className="group flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-xl leading-snug text-primary">{topic.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {topic.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {h.situationsEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.situationsTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {h.situationsIntro}
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.situations.map((s, i) => {
              const Icon = situationIcons[i];
              return (
                <div
                  key={s.title}
                  className="rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-lg text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection title={h.ctaTitle} text={h.ctaText} ctaLabel={h.ctaLabel} />
    </>
  );
}
