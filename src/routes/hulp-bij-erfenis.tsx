import { createFileRoute } from "@tanstack/react-router";
import { Gavel, HandHeart, Calculator, Users2, CheckCircle2 } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { useT } from "@/lib/i18n";
import heroImg from "@/assets/hulp-hero.jpg";

export const Route = createFileRoute("/hulp-bij-erfenis")({
  head: () => ({
    meta: [
      { title: "Hulp bij erfenis — The Inheritance Guide" },
      {
        name: "description",
        content:
          "Wij nemen de zorgen uit handen bij het afwikkelen van een erfenis: executeurschap, erfbelasting, verdeling en mediation. Persoonlijke begeleiding voor nabestaanden.",
      },
      { property: "og:title", content: "Hulp bij erfenis — The Inheritance Guide" },
      {
        property: "og:description",
        content:
          "Persoonlijke begeleiding bij het afwikkelen van een nalatenschap, met warmte en deskundigheid.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: HulpBijErfenis,
});

const serviceIcons = [Gavel, HandHeart, Calculator, Users2];

function HulpBijErfenis() {
  const t = useT();
  const h = t.hulp;

  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Warm, ondersteunend gesprek tussen een adviseur en een nabestaande aan een houten tafel"
        eyebrow={h.heroEyebrow}
        title={h.heroTitle}
        intro={h.heroIntro}
      />

      {/* Intro + burdens */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {h.sectionEyebrow}
              </p>
              <h2 className="text-3xl text-primary sm:text-4xl">{h.sectionTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.sectionText1}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{h.sectionText2}</p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-secondary/50 p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <h3 className="text-xl text-primary">{h.burdensTitle}</h3>
              <ul className="mt-6 space-y-4">
                {h.burdens.map((item) => (
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

      {/* Services */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {h.servicesEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.servicesTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.servicesIntro}</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {h.services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={service.title}
                  className="group flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-xl leading-snug text-primary">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection title={h.ctaTitle} text={h.ctaText} />
    </>
  );
}
