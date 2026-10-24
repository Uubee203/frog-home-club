import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, CalendarCheck, Clock, MessageSquareText, Receipt } from "lucide-react";
import heroLawn from "@/assets/hero-lawn.jpg";
import lawnEdging from "@/assets/lawn-edging.jpg";
import junkHaul from "@/assets/junk-haul.jpg";
import mascot from "@/assets/frog-home-club-mascot.png";
import { CallTextButtons } from "@/components/site/CallTextButtons";
import { CtaBand } from "@/components/site/CtaBand";
import { Reviews } from "@/components/site/Reviews";

const TITLE = "Frog Home Club | Lawn Care and Junk Removal in DFW";
const DESC =
  "Lawn care and junk removal across Dallas-Fort Worth. Call or text (469) 608-0583 for a quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://froghomeclub.com/" },
    ],
    links: [{ rel: "canonical", href: "https://froghomeclub.com/" }],
  }),
  component: Home,
});

const services = [
  {
    to: "/lawn-care" as const,
    tag: "Lawn Care",
    title: "Tall grass?\nGet ribbit.",
    body: "Mowing, edging, leaf cleanup, and bed cleanup.",
    image: lawnEdging,
    alt: "Trimmer edging a crisp line along a driveway",
  },
  {
    to: "/junk-removal" as const,
    tag: "Junk Removal",
    title: "Got junk?\nGet ribbit.",
    body: "Furniture, yard debris, garage cleanouts, and more.",
    image: junkHaul,
    alt: "Trailer loaded with old furniture and debris beside an emptied garage",
  },
];

const steps = [
  { icon: MessageSquareText, title: "Call or text", body: "Call or text for a quote." },
  { icon: CalendarCheck, title: "Pick a time", body: "We confirm a time." },
  { icon: Camera, title: "Job done", body: "You’ll always know what got done." },
];

const reasons = [
  { icon: Clock, title: "Shows up when promised." },
  { icon: Receipt, title: "Clear, upfront pricing." },
  { icon: Camera, title: "You’ll always know what got done." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={heroLawn}
          alt="Freshly mowed front lawn of a brick home in a DFW neighborhood"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.3fr_1fr]">
          <div className="animate-rise">
            <p className="eyebrow text-lime">Dallas-Fort Worth Home Services</p>
            <h1 className="mt-4 text-7xl text-on-dark sm:text-8xl lg:text-9xl">
              Welcome to <span className="text-lime">the club.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-on-dark-muted sm:text-xl">
              Lawn care and junk removal across DFW, handled by one team.
            </p>
            <CallTextButtons
              className="mt-10"
              callLabel="Call for a Quote"
              textLabel="Text for a Quote"
            />
          </div>
          <img
            src={mascot}
            alt="Frog Home Club mascot, a frog in sunglasses leaning on a roof"
            width={376}
            height={320}
            className="mx-auto hidden w-full max-w-md drop-shadow-2xl lg:block"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-leaf">Services</p>
              <h2 className="mt-3 text-6xl text-forest sm:text-7xl">Two jobs. One team.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              We launched with the two things DFW homeowners ask for most. More services are on the
              way.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-2xl bg-ink p-8 shadow-card"
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  width={1600}
                  height={1072}
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/0"
                  aria-hidden
                />
                <span className="eyebrow w-fit rounded-full bg-lime px-3 py-1 text-forest-deep">
                  {s.tag}
                </span>
                <h3 className="mt-4 whitespace-pre-line text-5xl text-on-dark sm:text-6xl">{s.title}</h3>
                <p className="mt-2 text-on-dark-muted">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-xl tracking-wider text-lime">
                  Learn More
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-forest-gradient">
        <div className="mow-stripes absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow text-lime">How It Works</p>
          <h2 className="mt-3 text-6xl text-on-dark sm:text-7xl">Three hops. Done.</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-on-dark/10 bg-ink/40 p-8 backdrop-blur"
              >
                <span className="font-display text-8xl leading-none text-lime/25">0{i + 1}</span>
                <step.icon className="absolute right-8 top-8 h-8 w-8 text-lime" aria-hidden />
                <h3 className="mt-2 text-4xl text-on-dark">{step.title}</h3>
                <p className="mt-2 text-on-dark-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-leaf">Why Frog Home Club</p>
            <h2 className="mt-3 text-6xl text-forest sm:text-7xl">The club rules.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Simple standards we hold on every job, big or small.
            </p>
          </div>
          <ul className="grid gap-4">
            {reasons.map((r) => (
              <li
                key={r.title}
                className="flex items-center gap-5 rounded-xl border bg-card p-6 shadow-card"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest text-lime">
                  <r.icon className="h-6 w-6" aria-hidden />
                </span>
                <span className="font-sub text-xl font-bold text-forest">{r.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Reviews />

      <CtaBand title={"Problem?\nGet ribbit."} />
    </>
  );
}
