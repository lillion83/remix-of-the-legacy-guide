import { createFileRoute } from "@tanstack/react-router";
import { Heart, GraduationCap, Compass } from "lucide-react";
import { ContentHero } from "@/components/ContentHero";
import { CtaSection } from "@/components/CtaSection";
import { useT } from "@/lib/i18n";
import heroImg from "@/assets/team-hero.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — The Inheritance Guide" },
      {
        name: "description",
        content:
          "The Inheritance Guide combineert juridische expertise met menselijke warmte. Maak kennis met ons team en onze waarden: persoonlijke aandacht, deskundigheid en rust.",
      },
      { property: "og:title", content: "Over ons — The Inheritance Guide" },
      {
        property: "og:description",
        content:
          "Geen kille bureaucratie, maar persoonlijke aandacht en deskundige begeleiding rond een gevoelig onderwerp.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: OverOns,
});

const teamImages = [team1, team2, team3];
const valueIcons = [Heart, GraduationCap, Compass];

function OverOns() {
  const t = useT();
  const h = t.overOns;

  return (
    <>
      <ContentHero
        image={heroImg}
        imageAlt="Het warme team van The Inheritance Guide in een lichte, huiselijke ruimte"
        eyebrow={h.heroEyebrow}
        title={h.heroTitle}
        intro={h.heroIntro}
      />

      {/* Our story */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {h.storyEyebrow}
          </p>
          <h2 className="text-center text-3xl text-primary sm:text-4xl">{h.storyTitle}</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            {h.storyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {h.teamEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.teamTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{h.teamIntro}</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {h.team.map((member, i) => (
              <div
                key={member.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <img
                  src={teamImages[i]}
                  alt={`${h.teamPortrait} ${member.name}`}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="text-xl text-primary">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {h.valuesEyebrow}
            </p>
            <h2 className="text-3xl text-primary sm:text-4xl">{h.valuesTitle}</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {h.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-border/60 bg-card p-8 text-center shadow-[var(--shadow-soft)]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 text-xl text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
