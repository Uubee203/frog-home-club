import { createFileRoute } from "@tanstack/react-router";
import { Camera, Clock, Receipt } from "lucide-react";
import mascot from "@/assets/frog-home-club-mascot.png.asset.json";
import { CtaBand } from "@/components/site/CtaBand";

const TITLE = "About | Frog Home Club";
const DESC =
  "Frog Home Club is a DFW home services company: show up when promised, do the job right, and make it easy.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://froghomeclub.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://froghomeclub.com/about" }],
  }),
  component: About,
});

const standards = [
  { icon: Clock, title: "Show up when promised." },
  { icon: Receipt, title: "Clear, upfront pricing." },
  { icon: Camera, title: "Before and after photos on every job." },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-gradient">
        <div className="mow-stripes absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.4fr_1fr]">
          <div className="animate-rise">
            <p className="eyebrow text-lime">About Us</p>
            <h1 className="mt-4 text-7xl text-on-dark sm:text-8xl lg:text-9xl">
              One club. <span className="text-lime">Less to do.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-on-dark-muted sm:text-xl">
              Frog Home Club is a DFW home services company built on a simple idea: show up when
              promised, do the job right, and make it easy. We started with lawn care and junk
              removal, with more services on the way.
            </p>
          </div>
          <img
            src={mascot.url}
            alt="Frog Home Club mascot"
            width={376}
            height={320}
            className="mx-auto w-full max-w-sm drop-shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow text-leaf">Our Standards</p>
          <h2 className="mt-3 text-6xl text-forest sm:text-7xl">Membership perks.</h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {standards.map((s, i) => (
              <li key={s.title} className="rounded-2xl border bg-card p-8 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-lime">
                    <s.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="font-display text-6xl leading-none text-forest/10">0{i + 1}</span>
                </div>
                <p className="mt-6 font-sub text-2xl font-bold leading-tight text-forest">
                  {s.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Join the club." />
    </>
  );
}
