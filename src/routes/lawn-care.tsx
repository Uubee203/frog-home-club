import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Flower2, Leaf, Ruler, Scissors } from "lucide-react";
import lawnEdging from "@/assets/lawn-edging.jpg";
import heroLawn from "@/assets/hero-lawn.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CallTextButtons } from "@/components/site/CallTextButtons";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq, type FaqItem } from "@/components/site/Faq";

const TITLE = "Lawn Care in DFW | Frog Home Club";
const DESC =
  "Mowing, edging, leaf cleanup, and bed cleanup across Dallas-Fort Worth. Call or text for a quote.";

export const Route = createFileRoute("/lawn-care")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://froghomeclub.com/lawn-care" },
    ],
    links: [{ rel: "canonical", href: "https://froghomeclub.com/lawn-care" }],
  }),
  component: LawnCare,
});

const services = [
  { icon: Scissors, title: "Mowing", body: "Clean, even cuts for front and back yards." },
  { icon: Ruler, title: "Edging", body: "Crisp lines along driveways, sidewalks, and beds." },
  { icon: Leaf, title: "Leaf Cleanup", body: "Leaves cleared from your lawn and beds." },
  { icon: Flower2, title: "Bed Cleanup", body: "Weeds pulled by hand and beds tidied up." },
];

const faqs: FaqItem[] = [
  {
    q: "How do I get a quote?",
    a: "Call or text (469) 608-0583 with your address and what you need.",
  },
  { q: "Do you offer recurring mowing?", a: "Yes. Ask about our spring mowing plans." },
  {
    q: "How do I know the job was done right?",
    a: "We send before and after photos after every visit.",
  },
  {
    q: "Do I need to be home?",
    a: "Usually not. As long as we can get to the yard and any gates are unlocked, we can take care of it while you're out. We'll send before and after photos when we're done.",
  },
];

function LawnCare() {
  return (
    <>
      <PageHero
        eyebrow="Lawn Care"
        title={"Tall grass?\nGet ribbit."}
        intro="Keep your yard sharp without giving up your weekends. Frog Home Club handles the lawn so you don't have to."
        image={heroLawn}
        imageAlt="Striped, freshly mowed lawn in front of a brick home"
      >
        <CallTextButtons callLabel="Call for a Lawn Quote" textLabel="Text for a Lawn Quote" />
      </PageHero>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow text-leaf">What We Do</p>
          <h2 className="mt-3 text-6xl text-forest sm:text-7xl">Sharp yard. Free weekends.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.title} className="rounded-2xl border bg-card p-7 shadow-card">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest text-lime">
                  <s.icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-6 text-4xl text-forest">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          <img
            src={lawnEdging}
            alt="Trimmer edging a clean line along a driveway"
            width={1600}
            height={1072}
            loading="lazy"
            className="h-72 w-full object-cover lg:h-full"
          />
          <div className="relative overflow-hidden px-6 py-16 sm:px-12 lg:py-24">
            <div className="mow-stripes absolute inset-0" aria-hidden />
            <div className="relative">
              <p className="eyebrow flex items-center gap-2 text-lime">
                <CalendarDays className="h-4 w-4" aria-hidden /> Spring Mowing Plans
              </p>
              <h2 className="mt-4 text-6xl text-on-dark sm:text-7xl">Beat the spring rush.</h2>
              <p className="mt-4 max-w-md text-lg text-on-dark-muted">
                Get on the schedule before the season starts. Call or text to ask about spring
                mowing plans.
              </p>
              <CallTextButtons className="mt-8" callLabel="Call" textLabel="Text" />
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} />

      <CtaBand
        title={"Tall grass?\nGet ribbit."}
        callLabel="Call for a Lawn Quote"
        textLabel="Text for a Lawn Quote"
      />
    </>
  );
}
